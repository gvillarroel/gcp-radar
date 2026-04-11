---
title: "Configure managed workload identity authentication for Compute Engine \_|\_\
  \ Identity and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/create-managed-workload-identities
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/create-managed-workload-identities
  title: "Configure managed workload identity authentication for Compute Engine \_\
    |\_ Identity and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Send feedback
Configure managed workload identity authentication for Compute Engine
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is subject to the "Pre-GA Offerings Terms" in the
General Service Terms section of the
Service Specific Terms .
Pre-GA features are available "as is" and might have limited support. For more
information, see the
launch stage descriptions .
For information about access to managed workload identities for
Compute Engine, see the access request page .
This page explains how to configure
managed workload identities for
Compute Engine using the gcloud CLI.
This page also describes how to set up automatic provisioning and lifecycle
management of managed workload identities for Compute Engine. You
configure certificate authority (CA) pools to issue certificates using
Certificate Authority Service .
CA Service is a highly-available, scalable Google Cloud service
that simplifies and automates the deployment, management, and security of
CA services. You can create virtual machine instances (VMs) that are
provisioned with X.509 credentials from the configured CA pool. These
credentials can then be used to establish mTLS connections between workloads.
Before you begin
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Request access to the managed workload identities for Compute Engine Preview .
Important: You must wait until you receive a confirmation that your
project has been added to the allowlist before moving on to the next steps.
Understand managed workload identities .
Learn about certificate issuance using Certificate Authority Service .
Learn how to authenticate Compute Engine workloads using managed
workload identities .
Enable the IAM and Certificate Authority Service APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable iam.googleapis.com privateca.googleapis.com
Configure Google Cloud CLI to use the project that was added to the allowlist
for billing and quota.
gcloud config set billing/quota_project PROJECT_ID
Replace PROJECT_ID with the ID of the project that
was added to the allowlist for the managed workload identity preview.
Required roles
To get the permissions that
you need to create managed workload identities and provision managed
workload identity certificates,
ask your administrator to grant you the
following IAM roles on the project:
To create and configure managed workload identities:
IAM Workload Identity Pool Admin ( roles/iam.workloadIdentityPoolAdmin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
To create and configure CA pools:
CA Service Admin ( roles/privateca.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Alternatively, the IAM Owner ( roles/owner ) basic
role also includes permissions to configure managed workload identities.
You should not grant basic roles in a production environment, but you can grant them in a
development or test environment.
Overview
To use managed workload identities for your applications, you must perform the
following tasks:
Security Administrator :
Create managed workload identities
in a workload identity pool.
Define a workload attestation policy
and create a service account.
Configure Certificate Authority Service to issue certificates for managed workload identities .
Authorize managed workload identities to request certificates from the CA pool .
Define the trust and certificate issuance config .
Create a configuration file to upload the partner metadata for a VM .
Compute Administrator :
Enable managed workload identities for workloads running in Compute Engine:
For individual VMs .
For managed instance groups (MIGs) .
Create managed workload identities
Managed workload identities enables Google Cloud to
automatically provision credentials for workload identity pool identities onto
your workloads. Workload identities are defined within a workload identity pool,
and are organized into administrative boundaries called namespaces .
Create a workload identity pool
You must create a pool in TRUST_DOMAIN mode to create managed
workload identities. To create a workload identity pool for managed
workload identities, use the workload-identity-pools create command.
gcloud iam workload-identity-pools create POOL_ID \
--location="global" \
--mode="TRUST_DOMAIN"
Replace the following:
POOL_ID : the unique ID for the pool. The ID must be
between 4 and 32 characters, and can contain only lowercase alphanumeric
characters and dashes, and start and end with an alphanumeric character.
After you create a workload identity pool, you can't change its ID.
To verify that your workload identity pool was created in
TRUST_DOMAIN mode, use the
workload-identity-pools describe command.
gcloud iam workload-identity-pools describe POOL_ID \
--location="global"
The command output should look similar to the following:
mode: TRUST_DOMAIN
name: projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID
state: ACTIVE
If mode: TRUST_DOMAIN is not present in the command output, verify
that your project has been added to the allowlist for the managed workload identity
Preview and that you've correctly configured your
gcloud CLI to use the correct project for billing and quota. You
might need to update to a newer version of the gcloud CLI.
Create a namespace
The workload-identity-pools namespaces create command
lets you create a namespace in a workload identity pool.
gcloud iam workload-identity-pools namespaces create NAMESPACE_ID \
--workload-identity-pool=" POOL_ID " \
--location="global"
Replace the following:
NAMESPACE_ID : the unique ID for the namespace. The
ID must be between 2 and 63 characters, contain only lowercase alphanumeric
characters and dashes, and start and end with an alphanumeric character.
After you create a namespace, you cannot change its ID.
POOL_ID : the workload identity pool ID that you
created earlier.
Create a managed workload identity
The workload-identity-pools managed-identities create command
lets you create a managed workload identity in a workload identity pool
namespace.
gcloud iam workload-identity-pools managed-identities create MANAGED_IDENTITY_ID \
--namespace=" NAMESPACE_ID " \
--workload-identity-pool=" POOL_ID " \
--location="global"
Replace the following:
MANAGED_IDENTITY_ID : the unique ID for the managed
identity. The ID must be between 2 and 63 characters, contain only lowercase
alphanumeric characters and dashes, and start and end with an alphanumeric
character. After you create a managed workload identity, you cannot change
its ID.
NAMESPACE_ID : the namespace ID that you created
earlier.
POOL_ID : the workload identity pool ID that you
created earlier.
Your managed workload identity ID is the SPIFFE identifier, which is
formatted as follows:
spiffe:// POOL_ID .global. PROJECT_NUMBER .workload.id.goog/ns/ NAMESPACE_ID /sa/ MANAGED_IDENTITY_ID
Define a workload attestation policy
This section describes how to set up an attestation policy .
This policy determines which attributes are used for Google Cloud IAM
to verify the identity of the workload. After verification, the calling workload
can receive a credential. Verification is based on one of the following
attributes of the workload:
VM instance ID
Attached service account email address
Attached service account UID
Deprecated: Workload sources are deprecated as of October 11, 2024. As of this date, you can
no longer create new workload sources. Existing workload sources will be removed on or after
April 24, 2025. Attestations based on workload sources will fail. To prevent disruption, we
recommend that you attest using another method described later in this document.
To learn how to list previously configured workload sources, use the following
command:
gcloud iam workload-identity-pools managed-identities workload-sources list --help .
Define a workload attestation policy with attestation rules
To create an attestation policy that allows your workload to use the
managed identity, do the following:
Decide whether you want to create an attestation policy that allows your
workload to attest the managed identity by using its attached service
account or by using its instance ID.
Create a JSON-formatted attestation policy file.
(Optional) To receive X.509 credentials on your Compute Engine
instance, you must enable an attached service account. We recommend
that you attach a new service account to your workload by first
creating it using the following command:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with the name of
the service account
Create a JSON-formatted attestation policy file that attests based on
the service account email address, service account UID, or instance ID.
Service account email address
To create an attestation policy file that attests based on the service
account email address, create a file with the following contents:
{
"attestationRules": [
{
"googleCloudResource": "//compute.googleapis.com/projects/ WORKLOAD_PROJECT_NUMBER /type/Instance/attached_service_account.email/ SERVICE_ACCOUNT_EMAIL "
}
],
}
Replace the following:
WORKLOAD_PROJECT_NUMBER : the number of the project that contains the VM instance or service account
To get the project number of the project that contains the managed
identity or the service account that you just created, run the following
command:
gcloud projects describe $(gcloud config get-value project) \
--format="value(projectNumber)"
SERVICE_ACCOUNT_EMAIL : the email address of the service account attached to the VM
Service account UID
To create an attestation policy file that attests based on the service
account UID, create a file with the following contents:
{
"attestationRules": [
{
"googleCloudResource": "//compute.googleapis.com/projects/ WORKLOAD_PROJECT_NUMBER /type/Instance/attached_service_account.uid/ SERVICE_ACCOUNT_UID "
}
],
}
Replace the following:
WORKLOAD_PROJECT_NUMBER : the number of the project that contains the VM instance or service account
To get the project number of the project that contains the managed
identity or the service account that you just created, run the
following command:
gcloud projects describe $(gcloud config get-value project) \
--format="value(projectNumber)"
SERVICE_ACCOUNT_UID : the UID of the service account attached to the VM
Instance ID
To create an attestation policy file that attests based on the instance
ID, create a file with the following contents:
{
"attestationRules": [
{
"googleCloudResource": "//compute.googleapis.com/projects/ WORKLOAD_PROJECT_NUMBER /uid/zones/ ZONE /instances/ INSTANCE_ID "
}
],
}
Replace the following:
WORKLOAD_PROJECT_NUMBER : the number of the project that contains the VM instance or service account
To get the project number of the project that contains the managed
identity or the service account that you just created, run the following
command:
gcloud projects describe $(gcloud config get-value project) \
--format="value(projectNumber)"
INSTANCE_ID : the Compute Engine VM instance ID
The value for an instance ID must come from an existing
Compute Engine instance. To obtain your instance ID, run the
following command:
gcloud compute instances describe INSTANCE_NAME --zone= ZONE --format="get(id)"
INSTANCE_NAME : the Compute Engine VM instance name
ZONE : the Compute Engine VM zone
Create the attestation policy using the policy JSON file that you created
earlier in this document:
gcloud iam workload-identity-pools managed-identities set-attestation-rules MANAGED_IDENTITY_ID \
--namespace= NAMESPACE_ID \
--workload-identity-pool= POOL_ID \
--policy-file= PATH_TO_POLICY_JSON_FILE \
--location=global
Replace the following:
MANAGED_IDENTITY_ID : the unique ID for the managed
identity. The ID must be between 2 and 63 characters, contain only lowercase
alphanumeric characters and dashes, and start and end with an alphanumeric
character. After you create a managed workload identity, you cannot change
its ID.
NAMESPACE_ID : the namespace ID that you created
earlier.
POOL_ID : the workload identity pool ID that you
created earlier.
PATH_TO_POLICY_JSON_FILE : Path to the JSON
file representing the attestation policy that you created earlier.
You can also update the policy by adding or removing attestation rules
individually. To add an attestation to your attestation policy, run the
following command:
gcloud iam workload-identity-pools managed-identities add-attestation-rule MANAGED_IDENTITY_ID \
--namespace= NAMESPACE_ID \
--workload-identity-pool= POOL_ID \
--google-cloud-resource='//compute.googleapis.com/projects/ WORKLOAD_PROJECT_NUMBER /type/Instance/attached_service_account.uid/ SERVICE_ACCOUNT_UID ' \
--location=global
To learn about how to list or remove the attestation rules, run the
following commands:
gcloud iam workload-identity-pools managed-identities list-attestation-rules --help
gcloud iam workload-identity-pools managed-identities remove-attestation-rule --help
Configure Certificate Authority Service to issue certificates for managed workload identities
Create the recommended set up for root and subordinate certificate authorities
(CAs) using Certificate Authority Service pools .
The subordinate CA pool issues the X.509 workload identity certificates to VMs.
Note: The CA pools configured to issue certificates for
Compute Engine VMs using managed workload identities must reside in the same
region as the VM. If you want to design a
multi-region architecture for resilience to regional outages ,
we recommend that you configure a subordinate Certificate Authority Service CA pool for
each of your workload's regions, so that each of your Compute Engine
VMs can reference an in-region subordinate Certificate Authority Service CA pool. Caution: If you also attach certificate issuance policies to your CA pools ,
the issuance policy must comply with certificate requirements for mTLS
to ensure that the provisioned certificates can be used for mTLS. Otherwise, the
certificates might be provisioned successfully but fail when used for mTLS
connections.
After configuring the CA pools, you then authorize the managed workload
identities to request and receive the signed certificates from the CA pools.
Configure the root CA pool
Use the Google Cloud CLI interface to Certificate Authority Service to configure a root CA
pool.
Note: You cannot move or export a CA pool after it has been created.
gcloud
Create the root CA pool.
Create the root CA pool in the Enterprise tier, which is meant for
long-lived, low-volume certificate issuance using the
gcloud privateca pools create command .
gcloud privateca pools create ROOT_CA_POOL_ID \
--location= REGION \
--tier=enterprise
Replace the following:
ROOT_CA_POOL_ID : a unique ID for the root CA pool. The ID
can be up to 64 characters in length and must contain only lower and
uppercase alphanumeric characters, underscores, or hyphens. The pool ID
must be unique within the region.
REGION : the region where the root CA pool is
located.
For more information, see
Creating CA pools .
Create a root CA in the root CA pool using the
gcloud privateca roots create command .
You might be prompted to
enable the root CA
if this is the only CA in the root CA Pool.
For example, you might use a command similar to the following to
create a root CA.
gcloud privateca roots create ROOT_CA_ID \
--pool= ROOT_CA_POOL_ID \
--subject "CN= ROOT_CA_CN , O= ROOT_CA_ORGANIZATION " \
--key-algorithm="ec-p256-sha256" \
--max-chain-length=1 \
--location= REGION
Replace the following:
ROOT_CA_ID : a unique name for the root CA. The CA name
can be up to 64 characters in length and must contain only lower and
uppercase alphanumeric characters, underscores, or hyphens. The CA name
must be unique within the region.
ROOT_CA_POOL_ID : the ID of the root CA pool.
ROOT_CA_CN : the common name of the root CA.
ROOT_CA_ORGANIZATION : the organization of the root CA.
REGION : the region where the root CA pool is
located.
For more information, see
Create a root certificate authority .
For more information about the subject fields for the CA, see
Subject .
Optional: Repeat the previous steps to create an additional root CA in
the root CA pool. This can be useful for
root CA rotation .
Configure the subordinate CAs
Use the Google Cloud CLI interface to Certificate Authority Service to create a subordinate
CA pool and subordinate CA.
If you have multiple certificate issuance scenarios, you can create a
subordinate CA for each of those scenarios. Also, adding multiple subordinate
CAs in a CA pool helps you achieve better load-balancing of certificate
requests.
gcloud
Use the gcloud privateca pools create command
to create a subordinate CA pool.
Create the subordinate CA pool in the DevOps tier, which is meant
for high volume, short-lived certificate issuance .
gcloud privateca pools create SUBORDINATE_CA_POOL_ID \
--location= REGION \
--tier=devops
Replace the following:
SUBORDINATE_CA_POOL_ID : a unique ID for the subordinate
CA pool. The ID can be up to 64 characters in length and must
contain only lowercase and uppercase alphanumeric characters,
underscores, or hyphens. The pool ID must be unique within the region.
REGION : the region in which to create
the subordinate CA pool.
For more information, see
Creating CA pools .
Create a subordinate CA in the subordinate CA pool using the
gcloud privateca subordinates create command .
Don't change the default
config-based issuance mode .
For example, you might use a command similar to the following to
create a subordinate CA.
gcloud privateca subordinates create SUBORDINATE_CA_ID \
--pool= SUBORDINATE_CA_POOL_ID \
--location= REGION \
--issuer-pool= ROOT_CA_POOL_ID \
--issuer-location= REGION \
--subject="CN= SUBORDINATE_CA_CN , O= SUBORDINATE_CA_ORGANIZATION " \
--key-algorithm="ec-p256-sha256" \
--use-preset-profile=subordinate_mtls_pathlen_0
Replace the following:
SUBORDINATE_CA_ID : a unique name for the subordinate CA.
The name can be up to 64 characters in length and must contain only
lowercase and uppercase alphanumeric characters, underscores, or hyphens.
The pool name must be unique within the region.
SUBORDINATE_CA_POOL_ID : the name of the subordinate CA pool.
REGION : the region where the subordinate
CA pool is located.
ROOT_CA_POOL_ID : the ID of the root CA pool.
REGION : the region of the root CA pool.
SUBORDINATE_CA_CN : the common name of the subordinate CA.
SUBORDINATE_CA_ORGANIZATION : the name of the subordinate
CA issuing organization.
For more information, see
Creating CA pools .
For more information about the subject fields for the CA, see
Subject .
Authorize managed workload identities to request certificates from the CA pool
The managed workload identities require permissions to request certificates
from the CA Service and get the public certificates.
gcloud
Grant the
CA Service Workload Certificate Requester ( roles/privateca.workloadCertificateRequester )
IAM role on each subordinate CA pool to the managed
workload identity. The following
gcloud privateca pools add-iam-policy-binding command
authorizes the managed workload identity to request certificates from
the CA Service certificate chains.
gcloud privateca pools add-iam-policy-binding SUBORDINATE_CA_POOL_ID \
--location= REGION \
--role=roles/privateca.workloadCertificateRequester \
--member="principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /*"
Replace the following:
SUBORDINATE_CA_POOL_ID : the ID for the subordinate
CA pool.
REGION : the region of the
subordinate CA pool.
PROJECT_NUMBER : the project number of the project
that contains the workload identity pool.
POOL_ID : the ID of the workload identity pool.
Grant the
CA Service Pool Reader ( roles/privateca.poolReader )
IAM role on the subordinate CA pools to the managed
workload identity. This authorizes the managed workload identity to get
the signed X.509 certificates from the CA's certificate chains.
gcloud privateca pools add-iam-policy-binding SUBORDINATE_CA_POOL_ID \
--location= REGION \
--role=roles/privateca.poolReader \
--member="principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /*"
Replace the following:
SUBORDINATE_CA_POOL_ID : the ID for the subordinate
CA pool.
REGION : the region of the
subordinate CA pool.
PROJECT_NUMBER : the project number of the project
that contains the workload identity pool.
POOL_ID : the ID of the workload identity pool.
Define the trust and certificate issuance config
You use this information to create a JSON file that is uploaded as partner
data when creating a VM.
Define the certificate issuance config
The following certificate issuance config
is required to enable managed workload identities for Compute Engine.
{
"primary_certificate_authority_config": {
"certificate_authority_config": {
"ca_pool": "projects/ SUBORDINATE_CA_POOL_PROJECT_ID /locations/ REGION /caPools/ SUBORDINATE_CA_POOL_ID "
}
},
"key_algorithm": " ALGORITHM ",
"workload_certificate_lifetime_seconds": DURATION ,
"rotation_window_percentage": ROTATION_WINDOW_PERCENTAGE
}
Replace the following:
SUBORDINATE_CA_POOL_PROJECT_ID : the ID of the project that
contains the subordinate CA pool.
REGION : the region where the subordinate CA pool is located.
SUBORDINATE_CA_POOL_ID : the name of the subordinate CA pool
ALGORITHM : the encryption algorithm used to generate the
private key. Valid values are rsa-2048 (default), rsa-3072 , rsa-4096 ,
ecdsa-p256 and ecdsa-p384 .
DURATION : Optional: The leaf certificate validity duration, in
seconds. The value must be between 3600 and 315360000. If not specified, the
default value of 86400 is used. The actual validity of the issued
certificate also depends on the issuing CA, because it may restrict the
lifetime of the issued certificate.
ROTATION_WINDOW_PERCENTAGE : Optional: The percentage of the
certificate's lifetime at which a renewal triggers. Value must be between
50 and 80. The default value is 50 percent. You must set the rotation window
percentage in relation to the certificate lifetime so that certificate
renewal occurs at least 7 days after the certificate has been issued and at
least 7 days before it expires.
Define the trust config
The trust config contains the set of trust anchors for validating peer
certificates. This includes the following:
Trusted CA pool resource URIs: A set of CA pool resource URIs that are
trusted to issue certificates in the same trust domain as the VMs belongs
to.
PEM formatted CA certificates: A set of PEM-formatted CA certificates
trusted to issue certificates in the same trust domain as the VMs belongs
to.
Note: The trust config must contain an entry for the SPIFFE trust domain
POOL_ID .global. PROJECT_NUMBER .workload.id.goog ,
which corresponds to the SPIFFE trust domain of managed identity assigned to
the VM. Not specifying this would result in provisioning failure of workload
certificates.
{
" POOL_ID .global. PROJECT_NUMBER .workload.id.goog": {
"trust_anchors": [
{
"ca_pool": "projects/ SUBORDINATE_CA_POOL_PROJECT_ID /locations/ REGION /caPools/ SUBORDINATE_CA_POOL_ID "
},
{
"pem_certificate": " PEM_ENCODED_CERTIFICATE "
}
]
}
}
Replace the following:
POOL_ID : the ID of the workload identity pool
PROJECT_NUMBER : the project number of the project that
that contains the workload identity pool
SUBORDINATE_CA_POOL_PROJECT_ID : the ID of the project that
contains the subordinate CA pool.
REGION : the region where the subordinate CA pool is located
SUBORDINATE_CA_POOL_ID : the ID of the subordinate CA pool
PEM_ENCODED_CERTIFICATE : Optional: a set of additional
PEM-formatted CA certificates trusted to issue certificates in the same trust
domain that the VMs belong to. These certificates will be added to the
subordinate CA pool's list of trust anchors. The following command can be
used to encode a PEM-formatted trust-anchor.pem file into a one-line
string:
cat trust-anchor.pem | sed 's/^[ ]*//g' | sed -z '$ s/\n$//' | tr '\n' $ | sed 's/\$/\\n/g'
Create a configuration file to upload the partner metadata for a VM
Create a JSON file that contains the following:
The configuration for the workload identity
The information from
Define the certificate issuance config
The information from Define the trust config
Save this file as CONFIGS.json . This file is used when creating VMs to
run applications that use managed workload identities.
Note: The format of the JSON and the values provided must be valid. The
VM creation will fail if the file provides invalid input.
Your CONFIGS.json file should be similar to the following:
{
"wc.compute.googleapis.com" : {
"entries" : {
"certificate-issuance-config" : {
"primary_certificate_authority_config" : {
"certificate_authority_config" : {
"ca_pool" : "projects/ PROJECT_ID /locations/ REGION /caPools/ SUBORDINATE_CA_POOL_ID "
}
},
"key_algorithm" : " ALGORITHM "
},
"trust-config" : {
" POOL_ID .global. PROJECT_NUMBER .workload.id.goog" : {
"trust_anchors" : [{
"ca_pool" : "projects/ PROJECT_ID /locations/ REGION /caPools/ SUBORDINATE_CA_POOL_ID "
}]
}
}
}
},
"iam.googleapis.com" : {
"entries" : {
"workload-identity" : "spiffe:// POOL_ID .global. PROJECT_NUMBER .workload.id.goog/ns/ NAMESPACE_ID /sa/ MANAGED_IDENTITY_ID "
}
}
}
What's next
Troubleshoot managed workload identity authentication for Compute Engine
Configure workload to workload authentication using mTLS .
Set up load balancing with backend mTLS using managed workload identity .
Learn more about creating CA pools .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how our
products perform in real-world scenarios. New customers also get $300 in
free credits to run, test, and deploy workloads.
Get started for free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
