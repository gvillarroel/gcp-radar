---
title: "Configure managed workload identity authentication for GKE \_|\_ Identity\
  \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/create-managed-workload-identities-gke
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/create-managed-workload-identities-gke
  title: "Configure managed workload identity authentication for GKE \_|\_ Identity\
    \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure managed workload identity authentication for GKE | Identity and Access Management (IAM) | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
IAM
Identity and Access Management (IAM)
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Grant roles in the Google Cloud console
Grant roles using client libraries
IAM and your security architecture
Identity management for Google Cloud
Configure identities for users
Identities for users
Create and manage Google groups in the Google Cloud console
Best practices for using Google groups
Federate identities for users
Workforce identity federation
SCIM provisioning for Workforce Identity Federation
Configure Workforce Identity Federation
Microsoft Entra ID
Microsoft Entra ID with a large number of groups
Okta
Other OIDC or SAML 2.0
Access BigQuery data in Power BI with Microsoft Entra
Configure SCIM
Microsoft Entra ID
Okta
OIDC or SAML 2.0
Obtain short-lived credentials for Workforce Identity Federation
Manage workforce identity pools and providers
Delete Workforce Identity Federation users and their data
Set up user access to console (federated)
Sign in to the gcloud CLI with your federated identity
Integrate OAuth applications
OAuth application integration overview
Manage OAuth applications
Configure identities for workloads
Identities for workloads
Create and manage service accounts
About service accounts
Service accounts
Service account credentials
Service account impersonation
Service account types
Roles for service account authentication
Create and grant roles to service agents
Create service accounts
Manage service accounts
List and edit service accounts
Disable and enable service accounts
Delete and undelete service accounts
Manage tags for service accounts
Attach service accounts to resources
Use custom organization policies for service accounts and keys
Service account best practices
Best practices for using service accounts
Best practices for using service accounts in deployment pipelines
Use managed workload identities
About managed workload identities
Compute Engine
Create managed workload identities for GCE
GKE
Create managed workload identities for GKE
Troubleshoot managed workload identities for GKE
Use custom organization policies
Federate identities for external workloads
Workload Identity Federation
Configure Workload Identity Federation
AWS or Azure
Active Directory
Deployment pipelines
Kubernetes
Workloads with X.509 certificates
Other identity providers
Authenticate workloads using Google auth libraries
Manage workload identity pools and providers
Best practices for using Workload Identity Federation
Let customers access their Google Cloud resources from your product or service
Download credential configuration and grant access
Integrate Cloud Run and Workload Identity Federation
Use custom organization policies
Create and manage service account keys
Migrate from service account keys
Service account key rotation
Create and delete service account keys
List and get service account keys
Upload a public key
Disable and enable service account keys
Best practices for managing service account keys
Built-in identities for resources
Control access to resources
About IAM access controls
Roles and permissions
Principals
Policy types
Allow policies
Allow policy inheritance
Deny policies
Principal access boundary policies
Access change propagation
IAM Conditions
Choose roles to grant
Choose which type of role to use
Find the right predefined roles
Get predefined role suggestions with Gemini assistance
View grantable roles
Roles for specific job functions
Predefined roles for job functions
Billing-related job functions
Networking-related job functions
Auditing-related job functions
Create and manage custom roles
Create and manage custom roles
Manage tags for custom roles
Use Deployment Manager to maintain custom roles
Grant access
Manage access to projects, folders, and organizations
Manage access to service accounts
Manage access to other resources
Test allow policy changes
Grant access conditionally
Manage conditional role bindings
Configure temporary access
Configure resource-based access
Tags and conditional access
Set limits on granting roles
Lint conditions in allow policies
Deny access
Restrict the resources that a principal can access
Create and apply principal access boundary policies
View principal access boundary policies
Edit principal access boundary policies
Remove principal access boundary policies
Temporary elevated access
Temporary elevated access overview
Control temporary elevated access with PAM
PAM overview
Permissions and setup
Create entitlements
View, update, and delete entitlements
Configure PAM settings
View and export PAM settings
View grants
Revoke grants
Audit entitlement and grant events
Best practices for PAM
Request temporary elevated access with PAM
Withdraw grants
Approve or deny grants with PAM
Create short-lived credentials for a service account
Create short-lived credentials for multiple service accounts
Restrict a credential's Cloud Storage permissions
Credential Access Boundaries overview
Create a downscoped short-lived credential
Migrate to the Service Account Credentials API
Test permissions for custom user interfaces
Use custom organization policies for allow policies
Use IAM to help prevent exfiltration from data pipelines
Optimize your IAM configuration
Use IAM securely
Optimize IAM policies by using Policy Intelligence tools
Help secure IAM using VPC Service Controls
Monitor
Audit logging
IAM API audit logging
IAM SCIM audit logging
Service Account Credentials API audit logging
Privileged Access Manager audit logging
Security Token Service API audit logging
Example logs for service accounts
Example logs for Workforce Identity Federation
Example logs for Workforce OAuth application integration
Example logs for Workload Identity Federation
Analyze access to resources
Monitor service account usage
Tools to understand service account usage
Monitor usage patterns for service accounts and keys
Review allow policy history
Review security insights
Troubleshoot
Troubleshoot permission error messages
Permission error messages
Request missing permissions
Resolve permission errors
Troubleshoot allow and deny policies
Troubleshoot organization policy errors for service accounts
Troubleshoot "withcond" in policies and role bindings
Troubleshoot Workforce Identity Federation
Troubleshoot Workload Identity Federation
Samples
All Identity and Access Management code samples
Code samples for all products
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Google-managed workload identity pool
Multi-project configuration
Before you begin
Required roles
Choose a CA option
Configure a CA
Deploy workloads with managed workload identities Deploy a Pod
List the workload credentials
View the certificate
Test workload-to-workload authentication
Enable trust federation between workload identity pools (Optional) Create the trust configuration file
Update the workload identity pool with trust configuration
What's next
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Configure managed workload identity authentication for GKE
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Google-managed workload identity pool
Multi-project configuration
Before you begin
Required roles
Choose a CA option
Configure a CA
Deploy workloads with managed workload identities Deploy a Pod
List the workload credentials
View the certificate
Test workload-to-workload authentication
Enable trust federation between workload identity pools (Optional) Create the trust configuration file
Update the workload identity pool with trust configuration
What's next
Preview
This feature is subject to the "Pre-GA Offerings Terms" in the
General Service Terms section of the
Service Specific Terms .
Pre-GA features are available "as is" and might have limited support. For more
information, see the
launch stage descriptions .
This document describes how to configure managed workload identities
for Google Kubernetes Engine (GKE) in your GKE fleet-managed
clusters. It also describes how to deploy a workload and verify the workload's
identity and certificate.
To set up and use managed workload identities for GKE, complete the
following steps:
Choose a certificate authority (CA) option
Configure your certificate authority
Deploy workloads with managed workload identities
Optional: Enable trust federation between workload identity pools
Google-managed workload identity pool
When you add clusters to GKE fleets, GKE automatically
creates a Google-managed workload identity pool, which serves as the root of
trust, also known as the SPIFFE trust domain for your workloads. All
workloads within the trust domain receive certificates and trust anchors that
enable authentication by default within the trust domain. If you have multiple
trust domains, you can enable trust federation
between them to enable cross-trust domain communication.
The Google-managed workload identity pool has the following constraints:
Google fully manages the pool, so you cannot create any subresources, such as
namespaces, identities, or identity providers.
The pool can only be used for GKE workloads. You cannot
add other types of workloads, such as Compute Engine VMs, to the pool.
All clusters in the pool are subject to the standard Kubernetes namespace
sameness model. This means that all clusters in the pool are equivalently
privileged. Workloads on any cluster in the pool can use any identity within
that pool.
Multi-project configuration
Google Cloud resources that you use in this document, such as
GKE clusters, the root CA, and subordinate CAs, can exist
in separate projects. When you refer to these resources, use the --project
flag to specify the correct project for each resource.
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
Understand managed workload identities .
Ensure your clusters run version 1.33.0-gke.2248000 or later.
Add your clusters to GKE fleets. If your cluster is an
Autopilot cluster, omit the --enable-workload-identity flag. Fleets
automatically creates a Google-managed workload identity pool, which serves as
a trust domain .
Enable GKE fleets by running the following command:
gcloud container clusters update CLUSTER_NAME \
--workload-pool= PROJECT_ID .svc.id.goog \
--enable-fleet \
--fleet-project= PROJECT_ID
Replace these values:
CLUSTER_NAME : the name of the GKE
cluster to register with the GKE fleet
PROJECT_ID : the GKE fleet
host project ID
Enable the IAM and Certificate Authority Service APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudresourcemanager.googleapis.com iam.googleapis.com privateca.googleapis.com
Configure the Google Cloud CLI to use your billing and quota project.
gcloud config set billing/quota_project PROJECT_ID
Replace PROJECT_ID with the ID of the fleet project.
Required roles
To get the permissions that
you need to create managed workload identities and provision managed
workload identity certificates,
ask your administrator to grant you the
following IAM roles on the project:
To create and configure managed workload identities:
IAM Workload Identity Pool Admin ( roles/iam.workloadIdentityPoolAdmin )
To create and configure CA pools:
CA Service Admin ( roles/privateca.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Choose a CA option
To sign your workload certificates, choose the certificate authority (CA) option
that best fits your use case:
Google-managed default CA : Use this option for a fully managed,
no-cost solution. The default CA provides a shared
root of trust for all Google Cloud users.
Custom CA : Use this option to configure your own public key infrastructure
(PKI) through Certificate Authority Service. This option is
appropriate if you require a custom root of trust or if you must store
signing keys in a hardware security module (HSM) to
meet compliance requirements. Certificate Authority Service is charged separately
from managed workload identity. For more
information, see CA Service pricing .
Configure a CA
Default CA Custom CA
More
To bind the default CA to the workload identity pool, update the workload identity pool
with the use-default-shared-ca flag.
gcloud iam workload-identity-pools update TRUST_DOMAIN_NAME \
--location="global" \
--use-default-shared-ca \
--project= PROJECT_ID
Replace the following:
TRUST_DOMAIN_NAME :
The name of the trust domain, formatted as follows:
PROJECT_ID .svc.id.goog
PROJECT_ID :
The project ID.
Configure CA Service to issue certificates for managed workload identities .
Bind the CAs to the workload identity pool .
Authorize managed workload identities to request certificates from the CA pool .
Configure CA Service to issue certificates for managed workload identities
To configure managed workload identities for GKE, you first need
to configure a certificate authority (CA) and one or more subordinate CAs.
This configuration is known as a CA hierarchy .
You can use CA Service pools
to set up this hierarchy. With this hierarchy, the subordinate CA pool issues
the X.509 workload identity certificates to your workloads.
Note: The CA pools configured to issue certificates for workloads using
managed workload identities must reside in the same region as the workload. If you
want to design a multi-region architecture for resilience to regional outages ,
we recommend that you configure a subordinate Certificate Authority Service CA pool for
each region where you run workloads. By doing this, each of your workloads can
reference an in-region subordinate Certificate Authority Service CA pool. Caution: If you also attach certificate issuance policies to your CA pools ,
the issuance policy must comply with certificate requirements for mTLS
to ensure that the provisioned certificates can be used for mTLS. Otherwise, the
certificates might be provisioned successfully but fail when used for mTLS
connections.
Configure your root CA pool
To create the root CA pool, do the following:
Important: You cannot move or export a CA pool after it has been created .
Create the root CA pool in the Enterprise tier using gcloud privateca pools create .
This tier is meant for long-lived, low-volume certificate issuance.
gcloud privateca pools create ROOT_CA_POOL_ID \
--location= REGION \
--project= CA_PROJECT_ID \
--tier=enterprise
Replace the following:
ROOT_CA_POOL_ID : A unique ID for the root
CA pool. The ID can be up to 64 characters in length and must contain
only lower and uppercase alphanumeric characters, underscores, or
hyphens. The pool ID must be unique within the region.
REGION : The region where the root CA pool is
located.
CA_PROJECT_ID : The project ID that you want
to create the root CA in.
To learn more about CA pools, tiers, and regions, see Creating CA pools .
Configure your root CA
Create a root CA in the root CA pool using gcloud privateca roots create .
You might be prompted to enable the root CA
if this is the only CA in the root CA Pool.
To create a root CA, run the following command:
gcloud privateca roots create ROOT_CA_ID \
--pool= ROOT_CA_POOL_ID \
--subject="CN= ROOT_CA_CN , O= ROOT_CA_ORGANIZATION " \
--key-algorithm=" KEY_ALGORITHM " \
--max-chain-length=1 \
--location= REGION \
--project= CA_PROJECT_ID \
--auto-enable
Replace the following:
ROOT_CA_ID : A unique name for the root CA. The CA name
can be up to 64 characters in length and must contain only lower and
uppercase alphanumeric characters, underscores, or hyphens. The CA name
must be unique within the region.
ROOT_CA_POOL_ID : The ID of the root CA pool.
ROOT_CA_CN : The common name of the root CA.
ROOT_CA_ORGANIZATION : The organization of the
root CA.
KEY_ALGORITHM : The key algorithm—for example,
ec-p256-sha256 .
REGION : The region where the root CA pool is
located.
CA_PROJECT_ID : The project ID where you created
the root CA.
For more information about the subject fields for the CA, see Subject .
Optionally, you create additional root CAs in your root CA pool. Doing so can be
useful for root CA rotation .
Configure subordinate CAs
Optionally, you can configure subordinate CAs. Configuring subordinate CAs can
help with the following:
Multiple certificate issuance scenarios: If you have multiple certificate
issuance scenarios, then you can create a subordinate CA for each scenario.
Better load balancing: Adding multiple subordinate CAs in a CA pool helps you
achieve better load balancing of certificate requests.
To create a subordinate CA pool and subordinate CA, do the following:
Create the subordinate CA pool in the DevOps tier, which is meant
for high volume, short-lived certificate issuance.
gcloud privateca pools create SUBORDINATE_CA_POOL_ID \
--location= REGION \
--project= CA_PROJECT_ID \
--tier=devops
Replace the following:
SUBORDINATE_CA_POOL_ID : A unique ID for the subordinate
CA pool. The ID can be up to 64 characters in length and must
contain only lowercase and uppercase alphanumeric characters,
underscores, or hyphens. The pool ID must be unique within the region.
REGION : The region in which to create the subordinate CA
pool.
CA_PROJECT_ID : The ID of the project where you
created the subordinate CA.
For more information, see Creating CA pools .
Create a subordinate CA in the subordinate CA pool. Don't change the default
config-based issuance mode .
gcloud privateca subordinates create SUBORDINATE_CA_ID \
--pool= SUBORDINATE_CA_POOL_ID \
--location= REGION \
--issuer-pool= ROOT_CA_POOL_ID \
--issuer-location= REGION \
--subject="CN= SUBORDINATE_CA_CN , O= SUBORDINATE_CA_ORGANIZATION " \
--key-algorithm=" KEY_ALGORITHM " \
--use-preset-profile=subordinate_mtls_pathlen_0 \
--project= CA_PROJECT_ID \
--auto-enable
Replace the following:
SUBORDINATE_CA_ID : A unique name for the
subordinate CA. The name can be up to 64 characters in length and must
contain only lowercase and uppercase alphanumeric characters,
underscores, or hyphens. The pool name must be unique within the
region.
SUBORDINATE_CA_POOL_ID : The name of the
subordinate CA pool.
REGION : The region where the subordinate
CA pool is located.
ROOT_CA_POOL_ID : The ID of the root CA pool.
REGION : The region of the root CA pool.
SUBORDINATE_CA_CN : The common name of the
subordinate CA.
SUBORDINATE_CA_ORGANIZATION : The name of the
subordinate CA issuing organization.
KEY_ALGORITHM : The key algorithm—for example,
ec-p256-sha256 .
CA_PROJECT_ID : The ID of the project where you
created the subordinate CA.
For more information about the subject fields for the CA, see Subject .
Create a certificate issuance configuration file
Binding CAs to workload identity pools requires a certificate issuance config .
If you need your workloads to authenticate across multiple trust
domains, see Enable trust federation between workload identity pools (Optional) .
To configure the certificate issuance config ,
you create a certificate issuance config file named cic.json . The format of the file is similar
to the following:
{
"inlineCertificateIssuanceConfig": {
"caPools": {
" REGION1 ": "projects/ CA_PROJECT_NUMBER1 /locations/ REGION1 /caPools/ SUBORDINATE_CA_POOL_ID1 ",
" REGION2 ": "projects/ CA_PROJECT_NUMBER2 /locations/ REGION2 /caPools/ SUBORDINATE_CA_POOL_ID2 "
},
"lifetime": " DURATION ",
"rotationWindowPercentage": ROTATION_WINDOW_PERCENTAGE ,
"keyAlgorithm": " ALGORITHM "
}
}
Replace the following:
REGION : The regions where the CAs are located.
CA_PROJECT_NUMBER : The project number of the project
that in which you created the subordinate CA pool. To get the project number
from CA_PROJECT_ID project, run the following command:
gcloud projects describe CA_PROJECT_ID --format="value(projectNumber)"
SUBORDINATE_CA_POOL_ID : The name of the
subordinate CA pool.
ALGORITHM : Optional. The encryption algorithm used to generate
the private key. Valid values are ECDSA_P256 , ECDSA_P384 ,
RSA_2048 , RSA_3072 , RSA_4096 . If not specified, ECDSA_P256 is
used as the default algorithm.
DURATION : Optional. The leaf certificate validity
duration, in seconds. The value must be between 86400 (1 day) and
2592000 (30 days). If not specified, the default value of 86400 (1 day) is
used. The actual validity of the issued certificate also depends on the
issuing CA, because it can restrict the lifetime of the issued certificate.
ROTATION_WINDOW_PERCENTAGE : Optional: The
percentage of the certificate's lifetime at which a renewal triggers.
The value must be between 50 and 80. If not specified, 50 is used as the
default value.
Bind the CAs to the workload identity pool
After you create your CA hierarchy and create certificate issuance configs for
each CA, you bind the CAs to the workload identity pool. To bind a CA to the
workload identity pool, you update the workload identity pool with the CA's
certificate issuance config. Then, you can verify that the pool was updated.
Update the workload identity pool
To update the pool, run the following command:
gcloud iam workload-identity-pools update TRUST_DOMAIN_NAME \
--location="global" \
--inline-certificate-issuance-config-file= CIC_JSON_FILE_PATH \
--project= PROJECT_ID
Replace the following:
TRUST_DOMAIN_NAME : The name of the trust domain,
formatted as follows:
PROJECT_ID .workload.id.goog
CIC_JSON_FILE_PATH : The path to the JSON-formatted
certificate issuance config file ( cic.json ) that you created earlier.
Verify that the workload identity pool was updated
To verify that your workload identity pool was updated with the
certificate issuance config, run the following command:
gcloud iam workload-identity-pools describe TRUST_DOMAIN_NAME \
--location="global" \
--project= PROJECT_ID
Replace TRUST_DOMAIN_NAME with the trust domain name
that you used to update the workload identity pool earlier
in this document.
The command output is similar to the following:
inlineCertificateIssuanceConfig:
caPools:
REGION1 : projects/ PROJECT_NUMBER1 /locations/ REGION1 /caPools/ SUBORDINATE_CA_POOL_ID1 ,
REGION2 : projects/ PROJECT_NUMBER2 /locations/ REGION2 /caPools/ SUBORDINATE_CA_POOL_ID2
keyAlgorithm: ALGORITHM
lifetime: DURATION
rotationWindowPercentage: ROTATION_WINDOW_PERCENTAGE
mode: TRUST_DOMAIN
name: PROJECT_ID .workload.id.goog
state: ACTIVE
If inlineCertificateIssuanceConfig
isn't present in the command output, verify that you've correctly configured
your gcloud CLI to use the correct project for billing and quota.
You might need to update to a newer version of the gcloud CLI.
Authorize managed workload identities to request certificates from the CA pool
After you bind the CAs to the workload identity pool, authorize managed workload identities to request certificates from the CA pool. To
authorize these identities:
Grant the CA Service Workload Certificate Requester ( roles/privateca.workloadCertificateRequester )
IAM role on each subordinate CA pool to the trust domain.
The following gcloud privateca pools add-iam-policy-binding command
authorizes the trust domain to request certificates from the
CA Service certificate chains.
gcloud privateca pools add-iam-policy-binding SUBORDINATE_CA_POOL_ID \
--location= REGION \
--role=roles/privateca.workloadCertificateRequester \
--member="principal://iam.googleapis.com/projects/ PROJECT_NUMBER /name/locations/global/workloadIdentityPools/ PROJECT_ID .workload.id.goog" \
--project= CA_PROJECT_ID
Replace the following:
SUBORDINATE_CA_POOL_ID : The ID of the
subordinate CA pool.
REGION : The region of the subordinate CA pool.
PROJECT_NUMBER : The project number of
the project that contains the GKE workload identity pool.
To get PROJECT_NUMBER from PROJECT_ID ,
run the following command:
gcloud projects describe PROJECT_ID --format="value(projectNumber)"
PROJECT_ID : The project ID of the
GKE fleet host project.
CA_PROJECT_ID : The ID of the project where you
created the subordinate CA.
Grant the CA Service Pool Reader ( roles/privateca.poolReader )
role on the subordinate CA pools to the managed workload identity. Doing so
authorizes the managed workload identity to get the signed X.509
certificates from the CA's certificate chains.
gcloud privateca pools add-iam-policy-binding SUBORDINATE_CA_POOL_ID \
--location= REGION \
--role=roles/privateca.poolReader \
--member="principal://iam.googleapis.com/projects/ PROJECT_NUMBER /name/locations/global/workloadIdentityPools/ PROJECT_ID .workload.id.goog" \
--project= CA_PROJECT_ID
Replace the following:
SUBORDINATE_CA_POOL_ID : The ID of the
subordinate CA pool.
REGION : The region of the subordinate CA pool.
PROJECT_NUMBER : The project number of the
project that contains the GKE workload identity pool.
PROJECT_ID : The project ID of the
GKE fleet host project.
CA_PROJECT_ID : The ID of the project where you
created the subordinate CA.
Deploy workloads with managed workload identities
After you configure your CA pools to issue certificates for managed workload
identities, you can deploy workloads that have managed workload identities.
This section shows you how to deploy a test workload that has a managed workload
identity. To do this, you deploy a Pod, check that credentials were generated,
and view the certificate and the SPIFFE ID.
Deploy a Pod
To deploy a test Pod in your cluster, do the following:
Get the cluster credentials.
gcloud container clusters get-credentials CLUSTER_NAME \
--location = CLUSTER_ZONE \
--project = CLUSTER_PROJECT_ID
Create the Kubernetes namespace.
kubectl create namespace KUBERNETES_NAMESPACE
Deploy a test PodSpec.
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
namespace: KUBERNETES_NAMESPACE
name: example-pod
spec:
containers:
- name: main
image: debian
command: [ 'sleep' , 'infinity' ]
volumeMounts:
- name: fleet-spiffe-credentials
mountPath: /var/run/secrets/workload-spiffe-credentials
readOnly: true
nodeSelector:
iam.gke.io/gke-metadata-server-enabled: "true"
volumes:
- name: fleet-spiffe-credentials
csi:
driver: podcertificate.gke.io
volumeAttributes:
signerName: spiffe.gke.io/fleet-svid
trustDomain: fleet-project/workload.id.goog
EOF
List the workload credentials
To list the workload credentials, run the following command. It can take a few
minutes to create the credentials.
kubectl exec -it example-pod -n KUBERNETES_NAMESPACE -- ls /var/run/secrets/workload-spiffe-credentials
You should see the following output:
ca_certificates.pem
certificates.pem
private_key.pem
trust_bundles.json
View the certificate
To view the certificate, do the following:
Export the certificate to a certificate file.
kubectl exec -it example-pod --namespace = KUBERNETES_NAMESPACE -- cat /var/run/secrets/workload-spiffe-credentials/certificates.pem | openssl x509 -noout -text > certfile
View the certificate file.
cat certfile
In the certificate, in the X509v3 Subject Alternative Name attribute, you
see the SPIFFE ID, with the following format: spiffe:// PROJECT_ID .workload.id.goog/ns/ KUBERNETES_NAMESPACE /sa/default
default refers to the default Kubernetes ServiceAccount.
Test workload-to-workload authentication
To test workload-to-workload authentication, see Test mTLS authentication using Go .
The sample code in the repository creates client and server workloads. You
can test mutual authentication between the workloads using the certificates that
you generated earlier in this document.
Enable trust federation between workload identity pools (Optional)
To enable mutual authentication for workloads in different trust domains, you
must configure trust federation between the workload identity pools. This step
is only required if your workloads need to authenticate with workloads in a
different workload identity pool.
To enable trust federation, complete the following steps:
Create the trust configuration file .
Update the workload identity pool with trust configuration .
Create the trust configuration file
Create the trust configuration file with an inlineTrustConfig
section that specifies the certificates for each domain.
The trust config file contains a set of trust anchors that managed workload
identity uses to validate peer certificates. The trust config file maps the
SPIFFE trust domain to CA certificates.
For custom CA, download the certificates for a trust domain that uses
a custom CA.
gcloud privateca pools get-ca-certs ROOT_CA_POOL_ID \
--output-file= CERTIFICATE_PATH \
--location= REGION
Replace the following:
ROOT_CA_POOL_ID : The ID of the root CA pool.
CERTIFICATE_PATH : The output path for the
PEM-encoded certificate.
REGION : The region of the root CA pool.
Create a file named tc.json that contains your inline trust configuration.
If a domain uses the Google-managed default CA, use the
trustDefaultSharedCa field. If a domain uses a custom CA, use the
PEM-encoded certificates that you previously downloaded.
The file looks similar to the following:
In this example, TRUST_DOMAIN_A uses the Google-managed
default CA, and TRUSTED_DOMAIN_B uses a custom CA with
the downloaded root certificates.
{
"inlineTrustConfig": {
"additionalTrustBundles": {
" TRUST_DOMAIN_A ": {
"trustDefaultSharedCa": true
},
" TRUSTED_DOMAIN_B ": {
"trustAnchors": [
{
"pemCertificate": "-----BEGIN CERTIFICATE-----\n CERTIFICATE_MATERIAL1 \n-----END CERTIFICATE-----"
},
{
"pemCertificate": "-----BEGIN CERTIFICATE-----\n CERTIFICATE_MATERIAL2 \n-----END CERTIFICATE-----"
}
]
}
}
}
}
Replace the following:
TRUST_DOMAIN_A : The name of the trust domain that
uses the Google-managed default CA.
TRUST_DOMAIN_B : The name of the trust domain that
uses a custom CA.
CERTIFICATE_MATERIAL : A set of PEM-formatted CA
certificates trusted to issue certificates in the trust domain.
Update the workload identity pool with trust configuration
gcloud iam workload-identity-pools update TRUST_DOMAIN_NAME \
--location="global" \
--inline-trust-config-file= TC_JSON_FILE_PATH \
--project= PROJECT_ID
Replace the following:
TRUST_DOMAIN_NAME : The name of the trust domain.
TC_JSON_FILE_PATH : The path to the JSON-formatted
trust config file ( tc.json ) that you created.
PROJECT_ID : The project ID.
What's next
Troubleshoot managed workload identity for GKE .
Learn more about creating CA pools .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how our
products perform in real-world scenarios. New customers also get $300 in
free credits to run, test, and deploy workloads.
Get started for free
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
