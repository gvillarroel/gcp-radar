---
title: "Set up backend mTLS using managed workload identity \_|\_ Cloud Load Balancing\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/set-up-backend-mtls-managed-identity
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs/access-control/iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/set-up-backend-mtls-managed-identity
  title: "Set up backend mTLS using managed workload identity \_|\_ Cloud Load Balancing\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Set up backend mTLS using managed workload identity | Cloud Load Balancing | Google Cloud Documentation
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
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Load Balancing
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Discover
Cloud Load Balancing overview
Choose a load balancer
Cloud Load Balancing resource model
Load balancer feature comparison
Get started
Roles and permissions
IAM Conditions for forwarding rules
Organization policy constraints
Overview
Use custom constraints
Application Load Balancer (HTTP/HTTPS)
Overview
External load balancer
Architecture overview
Request distribution overview
Set up global load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
External backend (internet NEG)
Cloud Run, App Engine, or Cloud Run functions backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
Add capabilities
Traffic management overview
Set up traffic management
Set up HTTP-to-HTTPS redirect
Set up a load balancer with Shared VPC
Set up load balancer with cross-project backend service and backend bucket
Create custom headers in backend services
Custom error response
Overview
Configure custom error responses
Set up global load balancer (classic)
Terraform examples
Managed VM instance group backend
Cloud Storage (backend buckets)
External backend (internet NEG)
Cloud Run, App Engine, or Cloud Functions backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
Migrate resources
Overview
Migrate to global external Application Load Balancer
Roll back to classic Application Load Balancer
Add capabilities
Traffic management overview
Create custom headers in backend services
Set up custom header and query parameter-based routing
Set up URL redirect
Set up HTTP-to-HTTPS redirect
Set up URL rewrite
Set up regional load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
Cloud Run backends (serverless NEG)
On-premises or other cloud backends (zonal and hybrid NEG)
External backend (internet NEG)
Add capabilities
Traffic management overview
Set up traffic management
Set up high availability
Set up HTTP-to-HTTPS redirect
Set up a load balancer with backend service using Shared VPC
Set up a load balancer with backend buckets using Shared VPC
Create custom headers in URL maps
Fail over to regional load balancers
Monitor and troubleshoot
Overview
Global load balancers
Regional load balancers
Troubleshooting
Best practices
Explore tutorials
Request routing to a multi-region external HTTPS load balancer
Faster web performance and improved web protection for load balancing
Deliver HTTP and HTTPS content over the same published domain
Optimize application latency with load balancing
Application capacity optimizations with global load balancing
Capacity management with load balancing
Internal load balancer
Architecture overview
Set up cross-region load balancer
Managed VM instance group backend
Cloud Storage (backend buckets)
On-premises or other cloud backends (zonal and hybrid NEG)
Cloud Run backends (serverless NEG)
Set up regional load balancer
Terraform examples
VM instance group backends
Cloud Run backends (serverless NEG)
Cloud Storage (backend buckets)
On-premises or other cloud backends (zonal and hybrid NEG)
External backend (internet NEG)
Add capabilities
Traffic management
Overview
Set up traffic management
Set up HTTP-to-HTTPS redirect
Create custom headers in URL maps
Set up regional internal load balancer with backend service using Shared VPC
Set up cross-region load balancer with backend buckets using Shared VPC
Set up a regional internal Application Load Balancer with backend buckets using Shared VPC
Service Directory registration
Load balancing and connected networks
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Convert load balancer to IPv6
Use custom metrics
Load testing backends
Proxy Network Load Balancer (TCP/SSL proxy)
Overview
External load balancer
Architecture overview
Set up global load balancer
Global SSL proxy with VM instance group backends
Global TCP proxy with VM instance group backends
Set up global load balancer (classic)
Terraform examples
Global SSL proxy with VM instance group backends
Global TCP proxy with VM instance group backends
Set up regional load balancer
VM instance group backends
Zonal NEG backends
Hybrid connectivity (hybrid NEGs)
External backend (internet NEG)
Internal load balancer
Architecture overview
Set up cross-region load balancer
Managed VM instance group backends
On-premises or other cloud backends (zonal and hybrid NEG)
Set up regional load balancer
Managed VM instance group backends
Zonal NEG backends
Hybrid connectivity (hybrid NEGs)
External backend (internet NEG)
Add capabilities
Load balancing and connected networks
Monitor and troubleshoot
View logs and metrics
Convert load balancer to IPv6
Passthrough Network Load Balancer (TCP/UDP)
Overview
External load balancer
Backend service-based architecture
Traffic distribution concepts
Target pool-based architecture
Set up load balancer
VM instance group backends (TCP/UDP only)
VM instance group backends (multiple protocols)
Zonal NEG backends
Target pool-based load balancer
Add capabilities
Configure failover
Configure weighted load balancing
Migrate from target pools to backend services
Service Directory registration
Explore tutorials
Use UDP with network load balancers
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Internal load balancer
Architecture overview
Traffic distribution concepts
Set up load balancer
Terraform examples
VM instance group backends
VM instance group backend for multiple protocols
Zonal NEG backends
Add capabilities
Configure failover
Zonal affinity
Load balancers as next hops
Overview
Set up load balancing for third-party appliances
Forwarding rules that use a common IP address
Service Directory registration
Load balancing and connected networks
Explore tutorials
Set up load balancer as next hop (with tags)
Deploy a hub-and-spoke network
Set up a load balancer with internal IPv6-only backends
Monitor and troubleshoot
View logs and metrics
Troubleshooting
Protocol forwarding
Overview
Set up protocol forwarding
Switch between a target instance and a backend service
Secure
SSL certificates
Overview
Use self-managed SSL certificates
Use Google-managed SSL certificates
Encryption to the backends
Troubleshooting
SSL policies
Overview
Use SSL policies
Mutual TLS
Frontend m TLS
Overview
Set up frontend mTLS with user-provided certificates
Set up frontend mTLS with a private CA
Backend m TLS
Overview
Set up backend authenticated TLS
Set up backend mTLS
Backend m TLS with managed workload identity
Overview
Set up backend m TLS using managed workload identity
Authorization policies
Overview
Set up policies for Application Load Balancers
Customize load balancer
Advanced load balancing optimizations
Backend buckets
Backend services
Connection draining
Firewall rules
Forwarding rules
Health checks
Overview
Use health checks
Internal DNS names
IPv6
Network endpoint groups
Overview
Hybrid connectivity NEGs
Internet NEGs
Serverless NEGs
Zonal NEGs
Overview
Set up zonal NEGs
Proxy-only subnets
Tags
Target pools
Target proxies
URL maps
Overview
Use URL maps
Operate and maintain
Audit logging information
Health check logging information
Clean up a load balancer setup
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
Before you begin Required roles
Configure CA Service to issue certificates for managed workload identities Create the root CA pool
Create a root CA
Create managed workload identities Create a workload identity pool
Create a namespace
Create a managed workload identity
Create an attestation policy
Create an inline certificate issuance config
Create an inline trust config
Bind the CA to the workload identity pool Update the workload identity pool
Verify that the workload identity pool was updated
Authorize managed workload identities to request certificates from the CA pool
Create the load balancer and assign the managed identity to the backend service
Automatically created resources
Verify your configuration Verify the creation of the backend authentication config and managed identity
Verify the creation of the Certificate Manager managed identity certificate and the Certificate Manager trust config
Verify that the Certificate Manager certificate is a managed identity certificate
Verify that the SPIFFE ID is a part of the SAN in the X.509-SVID
Verify that the Certificate Manager trust config contains the spiffeTrustStore field
What's next
Home
Documentation
Networking
Load Balancing
Guides
Was this helpful?
Send feedback
Set up backend m TLS using managed workload identity
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Configure CA Service to issue certificates for managed workload identities Create the root CA pool
Create a root CA
Create managed workload identities Create a workload identity pool
Create a namespace
Create a managed workload identity
Create an attestation policy
Create an inline certificate issuance config
Create an inline trust config
Bind the CA to the workload identity pool Update the workload identity pool
Verify that the workload identity pool was updated
Authorize managed workload identities to request certificates from the CA pool
Create the load balancer and assign the managed identity to the backend service
Automatically created resources
Verify your configuration Verify the creation of the backend authentication config and managed identity
Verify the creation of the Certificate Manager managed identity certificate and the Certificate Manager trust config
Verify that the Certificate Manager certificate is a managed identity certificate
Verify that the SPIFFE ID is a part of the SAN in the X.509-SVID
Verify that the Certificate Manager trust config contains the spiffeTrustStore field
What's next
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document explains how to configure a managed workload identity on
the backend service of a load balancer. After you assign a managed identity,
the load balancer and its backends can mutually authenticate each other
by using backend mTLS.
To configure backend mTLS using a managed workload identity,
you need to do the following:
Configure a Certificate Authority Service certificate authority (CA) pool to
issue X.509 certificates for managed workload identities.
Configure a trust domain by creating a workload identity pool with a
namespace, a managed identity, an attestation policy, an inline certificate
issuance config resource, and an inline trust config resource. 1
Bind the CA to the workload identity pool using the inline certificate
issuance config.
Authorize managed workload identities to request certificates from the CA
pool.
Create the load balancer and attach the managed identity to its backend
service.
1 You need to create an inline trust
config only if the load balancer and its backends are in
different trust domains. For the purpose of this example, both the load balancer
and the backends are a part of the same trust domain, and as a result, the
configuration of the inline trust config resource is optional.
To create a managed identity for the backends,
see
Managed workload identities overview .
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
Review the backend mTLS with managed workload identities overview
document.
Learn about certificate issuance using Certificate Authority Service .
Enable the IAM, Certificate Authority Service, Compute Engine, Certificate Manager, and Network Security APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable iam.googleapis.com privateca.googleapis.com compute.googleapis.com certificatemanager.googleapis.com networksecurity.googleapis.com
Configure the Google Cloud CLI to use the project that was added to the
allowlist for billing and quota.
gcloud config set billing/quota_project PROJECT_ID
Replace PROJECT_ID with the ID of the project that
was added to the allowlist for the managed workload identity preview.
Create a managed identity for the backend. To learn more,
see Managed workload identities overview .
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
To create load balancer resources such as TargetHTTPSProxy :
Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin )
To use Certificate Manager resources:
Certificate Manager Owner ( roles/certificatemanager.owner )
To create security and networking components:
Compute Network Admin ( roles/compute.networkAdmin )
Compute Security Admin ( roles/compute.securityAdmin )
To create a project (optional):
Project Creator ( roles/resourcemanager.projectCreator )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Configure CA Service to issue certificates for managed workload identities
You can use CA pools
to set up a root CA.
The CA pool issues the X.509 certificates to managed workload identities.
Note: For the global backend service, the CA pool can be in any region.
Create the root CA pool
Create the root CA pool in the Enterprise tier using the
gcloud privateca pools create command .
This tier is meant for long-lived, low-volume certificate issuance.
gcloud privateca pools create ROOT_CA_POOL_ID \
--location= REGION \
--project= PROJECT_ID \
--tier=enterprise
Replace the following:
ROOT_CA_POOL_ID : a unique ID for the root
CA pool
REGION : the region where the root CA pool is
located
PROJECT_ID : the project ID
To learn more about CA pools, see Create a CA pool .
Create a root CA
Create a root CA in the root CA pool by using the
gcloud privateca roots create command .
To create a root CA, run the following command:
gcloud privateca roots create ROOT_CA_ID \
--pool= ROOT_CA_POOL_ID \
--subject="CN= ROOT_CA_CN , O= ROOT_CA_ORGANIZATION " \
[--key-algorithm=" KEY_ALGORITHM "] \
--max-chain-length=1 \
--location= REGION \
--project= PROJECT_ID \
--auto-enable
Replace the following:
ROOT_CA_ID : a unique name for the root CA. The CA name
can be up to 64 characters in length and must contain only lowercase and
uppercase alphanumeric characters, underscores, or hyphens. The CA name
must be unique within the region.
ROOT_CA_POOL_ID : the ID of the root CA pool.
ROOT_CA_CN : the common name of the root CA.
ROOT_CA_ORGANIZATION : the organization of the
root CA.
KEY_ALGORITHM : the algorithm to use for creating
a Cloud KMS key. This flag is optional. If you don't
include this flag, the key algorithm defaults to
rsa-pkcs1-4096-sha256 .
REGION : the region where the root CA pool is
located.
PROJECT_ID : the project ID.
To learn more about a root CA, see Create a root CA .
Create managed workload identities
When you use managed workload identities, Google Cloud can
automatically provision and manage X.509 certificates from the
Certificate Authority Service .
Workload identities are defined within a workload identity pool,
and are organized into administrative boundaries called namespaces .
Create a workload identity pool
You must create a pool in TRUST_DOMAIN mode to create managed
workload identities. To create a workload identity pool for managed
workload identities, use the gcloud iam workload-identity-pools create command.
gcloud iam workload-identity-pools create WORKLOAD_IDENTITY_POOL_ID \
--location="global" \
--mode="TRUST_DOMAIN"
Replace WORKLOAD_IDENTITY_POOL_ID with the unique ID for the
pool. The ID must be between 4 and 32 characters, contain only lowercase
alphanumeric characters and dashes, and must start and end with an alphanumeric
character. After you create a workload identity pool, you can't change its ID.
To verify that your workload identity pool was created in
TRUST_DOMAIN mode, use the
gcloud iam workload-identity-pools describe command.
gcloud iam workload-identity-pools describe WORKLOAD_IDENTITY_POOL_ID \
--location="global"
The output is similar to the following:
mode: TRUST_DOMAIN
name: projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ WORKLOAD_IDENTITY_POOL_ID
state: ACTIVE
This output includes the following values:
PROJECT_NUMBER : the project number of your
Google Cloud project
WORKLOAD_IDENTITY_POOL_ID : the workload identity pool ID
Create a namespace
The gcloud iam workload-identity-pools namespaces create command
lets you create a namespace in a workload identity pool.
gcloud iam workload-identity-pools namespaces create NAMESPACE_ID \
--workload-identity-pool=" WORKLOAD_IDENTITY_POOL_ID " \
--location="global"
Replace the following:
NAMESPACE_ID : the unique ID for the namespace. The
ID must be between 2 and 63 characters, contain only lowercase alphanumeric
characters and dashes, and must start and end with an
alphanumeric character. After you create a namespace,
you cannot change its ID.
WORKLOAD_IDENTITY_POOL_ID : the workload identity pool ID
that you created earlier.
Create a managed workload identity
The gloud iam workload-identity-pools managed-identities create command
lets you create a managed workload identity in a workload identity pool
namespace.
gcloud iam workload-identity-pools managed-identities create MANAGED_IDENTITY_ID \
--namespace=" NAMESPACE_ID " \
--workload-identity-pool=" WORKLOAD_IDENTITY_POOL_ID " \
--location="global"
Replace the following:
MANAGED_IDENTITY_ID : the unique ID for the managed
identity. The ID must be between 2 and 63 characters, contain only lowercase
alphanumeric characters and dashes, and must start and end with an
alphanumeric character. After you create a managed workload identity,
you cannot change its ID.
NAMESPACE_ID : the namespace ID that you created
earlier.
WORKLOAD_IDENTITY_POOL_ID : the workload identity
pool ID that you created earlier.
Your managed workload identity ID is the SPIFFE identifier, which is
formatted as follows:
spiffe:// WORKLOAD_IDENTITY_POOL_ID .global. PROJECT_NUMBER .workload.id.goog/ns/ NAMESPACE_ID /sa/ MANAGED_IDENTITY_ID
Create an attestation policy
In this example, an attestation policy contains an attestation rule that
verifies whether the backend service is a part of a specific project. If the
attestation policy verification passes, IAM requests an X.509
certificate for the managed identity from the Certificate Authority Service.
To create an attestation policy, run the following command
to add an attestation rule.
gcloud iam workload-identity-pools managed-identities add-attestation-rule MANAGED_IDENTITY_ID \
--namespace= NAMESPACE_ID \
--workload-identity-pool= WORKLOAD_IDENTITY_POOL_ID \
--google-cloud-resource='//compute.googleapis.com/projects/ PROJECT_NUMBER /type/BackendService/*' \
--location=global
Replace the following:
MANAGED_IDENTITY_ID : the unique ID for the managed
identity. The ID must be between 2 and 63 characters, contain only lowercase
alphanumeric characters and dashes, and must start and end with
an alphanumeric
character. After you create a managed workload identity, you cannot change
its ID.
NAMESPACE_ID : the namespace ID that you created
earlier.
WORKLOAD_IDENTITY_POOL_ID : the workload identity
pool ID that you created earlier.
PROJECT_NUMBER : the project number of the
Google Cloud project.
Create an inline certificate issuance config
To bind a CA to a workload identity pool, the workload identity pool
needs to have an inline certificate issuance config .
To configure an inline certificate issuance config, create a JSON-formatted
configuration file ( cic.json ). The format of the file is similar to the
following:
{
"inlineCertificateIssuanceConfig": {
"caPools": {
" REGION ": "projects/ PROJECT_NUMBER /locations/ REGION /caPools/ ROOT_CA_POOL_ID ",
},
["lifetime": " CERTIFICATE_LIFETIME "],
["rotationWindowPercentage": ROTATION_WINDOW_PERCENTAGE ],
["keyAlgorithm": " ALGORITHM "]
}
}
Replace the following:
REGION : the region where the CA is located.
PROJECT_NUMBER : the project number. To get the
project number from the project specified by the
PROJECT_ID variable, run the following command:
gcloud projects describe PROJECT_ID --format="value(projectNumber)"
ROOT_CA_POOL_ID : the ID of the root CA pool.
CERTIFICATE_LIFETIME : lifetime of the workload certificates
issued by the CA pool
in seconds—for example: 86400s (for 24h).
CERTIFICATE_LIFETIME must be a value
between 24 hours and 30 days. If CERTIFICATE_LIFETIME
isn't specified, certificate lifetime defaults to 24 hours.
CERTIFICATE_LIFETIME is optional.
ROTATION_WINDOW_PERCENTAGE : the percentage of the
certificate's lifetime at which
a renewal triggers. The value of ROTATION_WINDOW_PERCENTAGE
must be between 50 and 80.
The default is 50. ROTATION_WINDOW_PERCENTAGE is optional.
ALGORITHM : the encryption algorithm used to generate
the private key. Valid values for
ALGORITHM are ECDSA_P256 (default), ECDSA_P384 ,
RSA_2048 , RSA_3072 , and RSA_4096 . ALGORITHM is
optional.
Create an inline trust config
In this example configuration, both the load balancer and the backend are a
part of the same trust domain, sharing the same root certificate. As a result,
the configuration of the inline trust config is optional.
The common root of trust is used to build a trust chain
and verify the identity of the workloads within the trust domain.
Managed workload identity resource hierarchy (click to enlarge).
By default, your workloads within the same trust domain can mutually
authenticate using managed workload identities. If you want workloads that are
in different trust domains to mutually authenticate, then you need to
explicitly declare the trust relationship in the workload identity pool. You do
this by creating an inline trust config
that recognizes and accepts certificates from other trust domains.
To create an inline trust config, do the following:
Download the certificates.
gcloud privateca pools get-ca-certs ROOT_CA_POOL_ID \
--output-file= CERTIFICATE_PATH \
--location= REGION
Replace the following:
ROOT_CA_POOL_ID : the ID of the root CA pool
CERTIFICATE_PATH : the path to which to output
the PEM-encoded certificate
REGION : the region of the root CA pool
Create a JSON-formatted configuration file ( tc.json ) that contains
the inline trust config, with PEM-formatted certificates.
The file looks similar to the following:
{
"inlineTrustConfig": {
"additionalTrustBundles": {
" TRUST_DOMAIN_NAME1 ": {
"trustAnchors": [
{
"pemCertificate": "-----BEGIN CERTIFICATE-----\n CERTIFICATE_MATERIAL1 \n-----END CERTIFICATE-----"
},
{
"pemCertificate": "-----BEGIN CERTIFICATE-----\n CERTIFICATE_MATERIAL2 \n-----END CERTIFICATE-----"
}
]
},
" TRUST_DOMAIN_NAME2 ": {
"trustAnchors": [
{
"pemCertificate": "-----BEGIN CERTIFICATE-----\n CERTIFICATE_MATERIAL3 \n-----END CERTIFICATE-----"
},
{
"pemCertificate": "-----BEGIN CERTIFICATE-----\n CERTIFICATE_MATERIAL4 \n-----END CERTIFICATE-----"
}
]
}
}
}
}
Replace the following:
TRUST_DOMAIN_NAME : the trust domain can be
any trust domain (like "example.com"), including another
(or even the same) workload identity pool trust domain.
For a workload identity pool trust domain, the trust domain name
is formatted as follows:
WORKLOAD_IDENTITY_POOL_ID .global. PROJECT_NUMBER .workload.id.goog
In the format, replace the following:
WORKLOAD_IDENTITY_POOL_ID : the ID of the
workload identity pool
PROJECT_NUMBER : the project number of the
project that contains the workload identity pool
CERTIFICATE_MATERIAL : the PEM-formatted
CA certificate trusted to issue certificates in the trust domain.
The following command can be used to encode a PEM-formatted
certificate file into a one-line string:
cat trust-anchor.pem | sed 's/^[ ]*//g' | sed -z '$ s/\n$//' | tr '\n' $ | sed 's/\$/\\n/g'
Bind the CA to the workload identity pool
After you create your CA hierarchy and create a certificate issuance
config for the CA, you can bind the CA to the workload identity pool. To
bind the CA to the workload identity pool, you need to update the workload
identity pool with the CA's certificate issuance config. Then, you
can verify that the pool was updated.
Update the workload identity pool
To bind a CA to the workload identity pool, you update the workload identity
pool with the CA's certificate issuance config.
Then, you can verify that the pool was updated.
To update the pool, run the following command:
gcloud iam workload-identity-pools update WORKLOAD_IDENTITY_POOL_ID \
--location="global" \
--inline-certificate-issuance-config-file= CIC_JSON_FILE_PATH \
[--inline-trust-config-file= TC_JSON_FILE_PATH ] \
--project= PROJECT_ID
Replace the following:
WORKLOAD_IDENTITY_POOL_ID : the workload identity pool ID.
CIC_JSON_FILE_PATH : the path to the JSON-formatted
configuration file ( cic.json ) for the inline certificate issuance config
that you created earlier.
TC_JSON_FILE_PATH : the path to the
JSON-formatted configuration file ( tc.json ) for the inline trust config
that you created earlier. If your workloads authenticate
across different trust domains,
you must specify this file. Otherwise, you can omit --inline-trust-config .
Verify that the workload identity pool was updated
To verify that your workload identity pool was updated along with the
certificate issuance config and trust config,
run the following command:
gcloud iam workload-identity-pools describe WORKLOAD_IDENTITY_POOL_ID \
--location="global" \
--project= PROJECT_ID
Replace the following:
WORKLOAD_IDENTITY_POOL_ID : the workload identity pool ID.
PROJECT_ID : the project ID
The output is similar to the following:
inlineCertificateIssuanceConfig:
caPools:
REGION : projects/ PROJECT_NUMBER /locations/ REGION1 /caPools/ ROOT_CA_POOL_ID
keyAlgorithm: ALGORITHM
lifetime: CERTIFICATE_LIFETIME
rotationWindowPercentage: ROTATION_WINDOW_PERCENTAGE
inlineTrustConfig:
additionalTrustBundles:
TRUST_DOMAIN_NAME1 :
trustAnchors:
- pemCertificate: |-
-----BEGIN CERTIFICATE-----
CERTIFICATE_MATERIAL1
-----END CERTIFICATE-----
- pemCertificate: |-
-----BEGIN CERTIFICATE-----
CERTIFICATE_MATERIAL2
-----END CERTIFICATE-----
TRUST_DOMAIN_NAME2 :
trustAnchors:
- pemCertificate: |-
-----BEGIN CERTIFICATE-----
CERTIFICATE_MATERIAL3
-----END CERTIFICATE-----
- pemCertificate: |-
-----BEGIN CERTIFICATE-----
CERTIFICATE_MATERIAL4
-----END CERTIFICATE-----
mode: TRUST_DOMAIN
name: projects/ PROJECT_NUMBER /name/locations/global/workloadIdentityPools/ WORKLOAD_IDENTITY_POOL_ID
state: ACTIVE
This output includes the following values:
PROJECT_NUMBER : the project number
REGION : the region where the root CA pool is
located
ROOT_CA_POOL_ID : the ID of the root CA pool
ALGORITHM : the encryption algorithm used to
generate the private key
CERTIFICATE_LIFETIME : the lifetime of the workload
certificates issued by the CA pool in seconds
ROTATION_WINDOW_PERCENTAGE : the percentage of the
certificate's lifetime at which a renewal triggers.
TRUST_DOMAIN_NAME : the trust domain can be
any trust domain (like "example.com"), including another
(or even the same) workload identity pool trust domain.
CERTIFICATE_MATERIAL : the PEM-formatted
CA certificate trusted to issue certificates in the trust domain
WORKLOAD_IDENTITY_POOL_ID : the workload identity pool ID
If inlineCertificateIssuanceConfig or inlineTrustConfig
isn't present in the output, verify that you've correctly configured
your gcloud CLI to use the correct project for billing and quota.
You might need to update to a newer version of the gcloud CLI.
Authorize managed workload identities to request certificates from the CA pool
After you bind the CA to the workload identity pool, you need to authorize
managed workload identities to request certificates from the CA pool.
Grant the CA Service Workload Certificate Requester role
( roles/privateca.workloadCertificateRequester ) to the trust domain. This
role authorizes the trust domain to request certificates from the
CA Service certificate chains.
gcloud privateca pools add-iam-policy-binding ROOT_CA_POOL_ID \
--location= REGION \
--role=roles/privateca.workloadCertificateRequester \
--member="principal://iam.googleapis.com/projects/ PROJECT_NUMBER /name/locations/global/workloadIdentityPools/ WORKLOAD_IDENTITY_POOL_ID " \
--project= PROJECT_ID
Replace the following:
ROOT_CA_POOL_ID : the ID for the root CA pool
REGION : the region of the root CA pool
PROJECT_NUMBER : the project number
To get PROJECT_NUMBER from PROJECT_ID ,
run the following command:
gcloud projects describe PROJECT_ID --format="value(projectNumber)"
WORKLOAD_IDENTITY_POOL_ID : the workload identity
pool ID
PROJECT_ID : the project ID
Grant the CA Service Pool Reader role ( roles/privateca.poolReader ) to the trust domain. This role
authorizes the trust domain to get the signed X.509
certificates from the CA's certificate chains.
gcloud privateca pools add-iam-policy-binding ROOT_CA_POOL_ID \
--location= REGION \
--role=roles/privateca.poolReader \
--member="principal://iam.googleapis.com/projects/ PROJECT_NUMBER /name/locations/global/workloadIdentityPools/ WORKLOAD_IDENTITY_POOL_ID " \
--project= PROJECT_ID
Replace the following:
ROOT_CA_POOL_ID : the ID of the root CA pool
REGION : the region of the root CA pool
PROJECT_NUMBER : the project number
WORKLOAD_IDENTITY_POOL_ID : the workload identity
pool ID
PROJECT_ID : the project ID
Create the load balancer and assign the managed identity to the backend service
Managed identity can only be assigned when creating the backend service.
The steps in this section only pertain to assigning a managed identity to the
backend service of the load balancer. This is part of the backend
configuration of the load balancer.
To set up a global external Application Load Balancer load balancer, follow the steps in
Set up a global external Application Load Balancer with VM instance group backends .
At the stage where you are setting up the backend service of
the load balancer, you need to additionally do the following:
Console gcloud
More
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
In the Backend configuration section,
add the relevant details to create a backend service .
Expand the Advanced configurations section.
In the Backend authentication section,
select the Managed Identity option.
To assign a managed identity to the backend
service, in the Managed Identity field,
enter the managed workload identity that you created earlier .
Click Create .
Continue the steps as outlined in Set up the load balancer
to finish configuring the load balancer.
To assign a managed identity to the backend service, add the --identity
flag while using the gcloud beta compute backend-services create command .
gcloud beta compute backend-services create BACKEND_SERVICE_NAME \
--load-balancing-scheme=EXTERNAL_MANAGED \
--protocol=HTTPS \
--health-checks= HEALTH_CHECK_NAME \
--identity='// WORKLOAD_IDENTITY_POOL_ID .global. PROJECT_NUMBER .workload.id.goog/ns/ NAMESPACE_ID /sa/ MANAGED_IDENTITY_ID ' \
--global
Replace the following:
BACKEND_SERVICE_NAME : the name of the
backend service
HEALTH_CHECK_NAME : the name of the health check
WORKLOAD_IDENTITY_POOL_ID : workload identity pool ID
PROJECT_NUMBER : the project number
NAMESPACE_ID : the namespace ID
MANAGED_IDENTITY_ID : the managed identity ID
Automatically created resources
After a managed identity is configured on the backend service of
the load balancer, the following resources are automatically created
by managed workload identity:
Backend authentication config: attached to the backend service of
the load balancer
Certificate Manager managed identity certificate: attached to the
backend authentication config
Certificate Manager trust config: attached to the
backend authentication config
The following sections are related to verifying your configuration to check
whether the automatically created resources have been configured.
Verify your configuration
Verify your configuration to check whether the automatically created resources have been configured.
The automatically created resources have an mi prefix, which indicates that
the resource is created by managed workload identity.
Verify the creation of the backend authentication config and managed identity
To verify the creation of the
backend authentication config and managed identity, use
the gcloud beta compute backend-services describe command to
describe the backend service.
gcloud beta compute backend-services describe BACKEND_SERVICE_NAME --global
The output is similar to the following:
affinityCookieTtlSec: 0
connectionDraining:
drainingTimeoutSec: 0
creationTimestamp: '2025-11-06T02:15:43.680-08:00'
description: ''
enableCDN: false
fingerprint: lTZwas8aylg=
healthChecks:
- https://www.googleapis.com/compute/beta/projects/ PROJECT_ID /global/healthChecks/ HEALTH_CHECK_NAME
id: '719352032'
kind: compute#backendService
loadBalancingScheme: EXTERNAL_MANAGED
name: BACKEND_SERVICE_NAME
port: 80
portName: PORT_NAME
protocol: HTTPS
selfLink: https://www.googleapis.com/compute/beta/projects/ PROJECT_ID /global/backendServices/ BACKEND_SERVICE_NAME
sessionAffinity: NONE
timeoutSec: 30
tlsSettings:
authenticationConfig: //networksecurity.googleapis.com/projects/ PROJECT_ID /locations/global/backendAuthenticationConfigs/mi-bac-423b651f-d549-4a9f-a4f2-g2bcaa7108bd
identity: // WORKLOAD_IDENTITY_POOL_ID .global. PROJECT_NUMBER .workload.id.goog/ns/ NAMESPACE_ID /sa/ MANAGED_IDENTITY_ID
This output includes the following values:
PROJECT_ID : the project ID
HEALTH_CHECK_NAME : the name of the health check
BACKEND_SERVICE_NAME : the name of the backend service
PORT_NAME : the port name
REGION : the region where the root CA pool is
located
WORKLOAD_IDENTITY_POOL_ID : the workload identity pool ID
PROJECT_NUMBER : the project number
NAMESPACE_ID : the namespace ID
MANAGED_IDENTITY_ID : the managed identity ID
The backend authentication config is created automatically and is attached to
the backendService.tlsSettings.authenticationConfig field.
The backend authentication
config starting with the mi prefix is referred to as
MI_BACKEND_AUTHENTICATION_CONFIG_ID in the following section.
The managed workload identity is also attached to the
backendService.tlsSettings.identity field. It has the following format:
// WORKLOAD_IDENTITY_POOL_ID .global. PROJECT_NUMBER .workload.id.goog/ns/ NAMESPACE_ID /sa/ MANAGED_IDENTITY_ID
Note: The spiffe prefix isn't used in the identity field of the
backend service ( backendService.tlsSettings.identity ).
However, the spiffe prefix is used when it is represented as a URI
in the Subject Alternative Name (SAN) of an X.509 certificate.
Verify the creation of the Certificate Manager managed identity certificate and the Certificate Manager trust config
To verify that
the Certificate Manager managed identity certificate
and the Certificate Manager trust config are attached to
the backend authentication config resource, use
the gcloud network-security backend-authentication-configs describe command .
gcloud network-security backend-authentication-configs describe MI_BACKEND_AUTHENTICATION_CONFIG_ID \
--location=global
The output is similar to the following:
clientCertificate: projects/ PROJECT_NUMBER /locations/global/certificates/mi-crt-181fa461-3b53-40fa-8515-507d47337c5d
createTime: '2025-11-06T10:15:56.237734973Z'
etag: xwyxl1VYVoh4QIwf3nhKhAVXgcuOqoN7xdqAiS8Esvs
name: projects/ /locations/global/backendAuthenticationConfigs/mi-bac-477b381f-d349-4a8f-a6f2-f2bbaa7109bd
trustConfig: projects/ PROJECT_NUMBER /locations/global/trustConfigs/mi-tc-e4f05160-f20f-4109-aae3-4c1a68891742
updateTime: '2025-11-06T10:16:01.964275141Z'
The clientCertificate and the trustConfig are automatically created by
managed workload identity and attached to the
backend authentication config resource.
The clientCertificate starting with the mi prefix is referred to as
MI_CLIENT_CERTIFICATE_ID in the following section.
The trustConfig starting with the mi prefix is referred to as
MI_TRUST_CONFIG_ID in the following section.
Verify that the Certificate Manager certificate is a managed identity certificate
To view the details of the Certificate Manager managed identity
certificate, use the gcloud certificate-manager certificates describe command .
gcloud certificate-manager certificates describe MI_CLIENT_CERTIFICATE_ID
The output is similar to the following:
createTime: '2025-11-06T10:15:46.187892797Z'
expireTime: '2025-11-07T22:55:47Z'
extendedKeyUsage:
clientAuth: true
managedIdentity:
identity: // WORKLOAD_IDENTITY_POOL_ID .global. PROJECT_NUMBER .workload.id.goog/ns/ NAMESPACE_ID /sa/ MANAGED_IDENTITY_ID
state: ACTIVE
name: projects/ PROJECT_ID /locations/global/certificates/mi-crt-181fa461-3b53-40fa-8515-507d47337c5d
pemCertificate: -----BEGIN CERTIFICATE-----\n CERTIFICATE_MATERIAL \n-----END CERTIFICATE-----
scope: CLIENT_AUTH
updateTime: '2025-11-06T10:15:49.427339950Z'
usedBy:
- name: //networksecurity.googleapis.com/projects/ PROJECT_NUMBER /locations/global/backendAuthenticationConfigs/mi-bac-477b381f-d349-4a8f-a6f2-f2bbaa7109bd
This output includes the following values:
WORKLOAD_IDENTITY_POOL_ID : the workload identity pool ID
PROJECT_NUMBER : the project number
NAMESPACE_ID : the namespace ID
MANAGED_IDENTITY_ID : the managed identity ID
CERTIFICATE_MATERIAL : the X.509-SVID in a PEM-encoded format
The Certificate Manager managed identity certificate has a
managedIdentity property, which identifies it as a managed identity
certificate. The Certificate Manager managed identity
certificate resource stores the X.509-SVID in a PEM-encoded format.
The scope of the Certificate Manager managed identity certificate is
CLIENT_AUTH , which indicates that this certificate is used as a client
certificate in backend mTLS.
Verify that the SPIFFE ID is a part of the SAN in the X.509-SVID
The X.509-SVID contains the SPIFFE ID encoded as a URI in the SAN field.
This SPIFFE ID corresponds to the managed identity
in the workload identity pool.
Note: The spiffe prefix is not used in the identity field of the
backend service ( backendService.tlsSettings.identity ).
However, the spiffe prefix is used when it is represented as a
URI in the SAN of an X.509 certificate.
To print a human-readable format of the certificate, run the following command:
openssl x509 -text -noout \
<<< "-----BEGIN CERTIFICATE-----\n CERTIFICATE_MATERIAL \n-----END CERTIFICATE-----"
The output is similar to the following (abridged):
Certificate:
Data:
Version: 3 (0x2)
Signature Algorithm: ecdsa-with-SHA256
Issuer: O = example.com, CN = Example CA
Validity
Not Before: Nov 6 10:15:48 2025 GMT
Not After : Nov 7 10:15:47 2025 GMT
Subject:
Subject Public Key Info:
Public Key Algorithm: id-ecPublicKey
Public-Key: (256 bit)
X509v3 extensions:
X509v3 Subject Alternative Name: critical
URI:spiffe:// WORKLOAD_IDENTITY_POOL_ID .global. PROJECT_NUMBER .workload.id.goog/ns/ NAMESPACE_ID /sa/ MANAGED_IDENTITY_ID
This output includes the following values:
WORKLOAD_IDENTITY_POOL_ID : the workload identity pool ID
PROJECT_NUMBER : the project number
NAMESPACE_ID : the namespace ID
MANAGED_IDENTITY_ID : the managed identity ID
Verify that the Certificate Manager trust config contains the spiffeTrustStore field
The Certificate Manager trust config contains a field called
spiffeTrustStores . The spiffeTrustStores field contains the trust bundle
associated with the trust domain of the workload identity pool (represented by
WORKLOAD_IDENTITY_POOL_ID .global. PROJECT_NUMBER .workload.id.goog in the output) and any additional trust bundles specified by the
additionalTrustBundles field in the workload identity pool's
inline trust config.
To view the details of the Certificate Manager trust config,
use the gcloud certificate-manager trust-configs describe command .
gcloud certificate-manager certificates describe MI_TRUST_CONFIG_ID
Replace MI_TRUST_CONFIG_ID with the trust config
automatically created by managed identity.
In the following example output, the host example.com is the
additional trust domain to which trust is extended.
createTime: '2025-11-06T10:15:50.048030758Z'
etag: kDoKfm5W6Il2HPvduKZWpuYpyrKrNVq4jqMEICE-6rQ
name: projects/ PROJECT_ID /locations/global/trustConfigs/mi-tc-e4f05160-f20f-4109-aae3-4c1a68891742
spiffeTrustStores:
example.com:
trustAnchors:
- pemCertificate: -----BEGIN CERTIFICATE-----\n CERTIFICATE_MATERIAL1 \n-----END CERTIFICATE-----
WORKLOAD_IDENTITY_POOL_ID .global. PROJECT_NUMBER .workload.id.goog:
trustAnchors:
- pemCertificate: -----BEGIN CERTIFICATE-----\n CERTIFICATE_MATERIAL2 \n-----END CERTIFICATE-----
updateTime: '2025-11-07T08:25:15.760754841Z'
This output includes the following values:
PROJECT_ID : the project ID
CERTIFICATE_MATERIAL : the PEM-formatted
CA certificate trusted to issue certificates in the trust domain
WORKLOAD_IDENTITY_POOL_ID : the workload identity pool ID
PROJECT_NUMBER : the project number
MANAGED_IDENTITY_ID : the managed identity ID
To learn more about the Certificate Manager trust config, see Certificate Manager trust config .
What's next
Configure managed workload identity authentication for Compute Engine
Authenticate workloads to other workloads over mTLS
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
Español – América Latina
Français
Indonesia
Italiano
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
