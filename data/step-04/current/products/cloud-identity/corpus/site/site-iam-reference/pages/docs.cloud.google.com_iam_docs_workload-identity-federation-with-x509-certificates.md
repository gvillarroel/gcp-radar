---
title: "Configure Workload Identity Federation with X.509 certificates \_|\_ Identity\
  \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-x509-certificates
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-x509-certificates
  title: "Configure Workload Identity Federation with X.509 certificates \_|\_ Identity\
    \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure Workload Identity Federation with X.509 certificates | Identity and Access Management (IAM) | Google Cloud Documentation
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
Workloads with X. 509 certificates
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
Concepts
Before you begin
Required roles
Create a trust store Generate self-signed certificates
Format the certificates
Create the trust store
Define an attribute mapping and condition
Configure Workload Identity Federation Create the workload identity pool
Create the workload identity pool provider
Configure Context-Aware Access Policy Enforcement for Workload Identity Federation
Authenticate a workload Allow your external workload to access Google Cloud resources
Download or create a credential configuration
Use the credential configuration to access Google Cloud
Obtain an access token using plain request to access Google Cloud
Limits
What's next
Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Guides
Was this helpful?
Send feedback
Configure Workload Identity Federation with X. 509 certificates
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Concepts
Before you begin
Required roles
Create a trust store Generate self-signed certificates
Format the certificates
Create the trust store
Define an attribute mapping and condition
Configure Workload Identity Federation Create the workload identity pool
Create the workload identity pool provider
Configure Context-Aware Access Policy Enforcement for Workload Identity Federation
Authenticate a workload Allow your external workload to access Google Cloud resources
Download or create a credential configuration
Use the credential configuration to access Google Cloud
Obtain an access token using plain request to access Google Cloud
Limits
What's next
This guide describes how to use Workload Identity Federation with X.509
certificates that are issued by your certificate authority (CA) to authenticate
to Google Cloud and access Google Cloud resources.
If your workloads possess an mTLS client certificate, you can authenticate to
Google Cloud by registering one or more CAs with Workload Identity Federation
as trust anchors. You can also register intermediate CAs.
By using Workload Identity Federation, you can let these workloads
obtain short-lived Google Cloud credentials through a mutual TLS (mTLS)
connection. Workloads can use these short-lived credentials to access
Google Cloud APIs.
Concepts
The X.509 certificate-based federation concepts include the following:
A trust anchor is a CA certificate that is considered
as the root of trust. Any client certificate chains should be chained up to
one of the trust anchors.
An intermediate CA is an optional certificate authority certificate that
helps build the client certificate chain.
A trust store contains the trust anchor certificates and intermediate
CA certificates that are used to validate the
client certificate chain. A CA issues trusted certificates for
the client.
You can upload the following types of client certificates to the trust store:
Certificates issued by third-party CAs of your choice
Certificates issued by your private CAs
Signed certificates, as described in
Create self-signed certificates
Before you begin
To start configuring Workload Identity Federation, do the following:
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
We recommend that you
use a dedicated project to manage workload identity pools and providers .
Verify that billing is enabled for your Google Cloud project .
Enable the IAM, Resource Manager, Service Account Credentials, and Security Token Service APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to configure Workload Identity Federation,
ask your administrator to grant you the
following IAM roles on the project:
Workload Identity Pool Admin ( roles/iam.workloadIdentityPoolAdmin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Alternatively, the IAM Owner ( roles/owner ) basic
role also includes permissions to configure identity federation.
You should not grant basic roles in a production environment, but you can grant them in a
development or test environment.
Create a trust store
This section shows you how to create a trust store. At a high level, the steps
are as follows:
Generate self-signed certificates
Format the certificates
Create the trust store
Generate self-signed certificates
This section shows you how to generate keys and create signed certificates. If you have already created certificates, you can skip
this section and continue with Format the certificates .
This section uses openssl commands to create root and intermediate
certificates.
To generate a root certificate and a signed
intermediate certificate with valid keyUsage and extendedKeyUsage fields, do
the following:
Create an openssl configuration file to create your signing certificates.
At minimum, the file is similar to the following, but you can set additional
fields as needed.
cat > example.cnf << EOF
[ req ]
distinguished_name = empty_distinguished_name
[ empty_distinguished_name ]
# Kept empty to allow setting via -subj command-line argument.
[ ca_exts ]
basicConstraints = critical,CA:TRUE
keyUsage = keyCertSign
extendedKeyUsage = clientAuth
[ leaf_exts ]
keyUsage = critical,Digital Signature, Key Encipherment
basicConstraints = critical, CA:FALSE
EOF
Create the root certificate.
openssl req -x509 \
-new -sha256 -newkey rsa:2048 -nodes \
-days 3650 -subj '/CN=root' \
-config example.cnf \
-extensions ca_exts \
-keyout root.key -out root.cert
Create the signing request for the intermediate certificate.
openssl req \
-new -sha256 -newkey rsa:2048 -nodes \
-subj '/CN=int' \
-config example.cnf \
-extensions ca_exts \
-keyout int.key -out int.req
Create the intermediate certificate.
openssl x509 -req \
-CAkey root.key -CA root.cert \
-set_serial 1 \
-days 3650 \
-extfile example.cnf \
-extensions ca_exts \
-in int.req -out int.cert
Create the signing request for leaf certificate.
openssl req -new -sha256 -newkey rsa:2048 -nodes \
-subj '/CN=example' \
-config example.cnf \
-extensions leaf_exts \
-keyout leaf.key -out leaf.req
Create the leaf certificate issued by the intermediate.
openssl x509 -req \
-CAkey int.key -CA int.cert \
-set_serial 1 -days 3650 \
-extfile example.cnf \
-extensions leaf_exts \
-in leaf.req -out leaf.cert
Format the certificates
To include new or existing certificates in a trust store, format the certificates into a one-line string,
and store them in environment variables. The
certificates must be PEM formatted. To format the certificates and store them in environment variables,
do the following:
Save the root certificate as a one-line string.
export ROOT_CERT = $( cat root.cert | sed 's/^[ ]*//g' | sed -z '$ s/\n$//' | tr '\n' $ | sed 's/\$/\\n/g' )
Save an intermediate certificate as a one-line string.
export INTERMEDIATE_CERT = $( cat int.cert | sed 's/^[ ]*//g' | sed -z '$ s/\n$//' | tr '\n' $ | sed 's/\$/\\n/g' )
Create the trust store
In this section, you create a trust store using a YAML-formatted file that contains your trust anchors and intermediate CAs.
This file contains the certificate content from the environment variables
that you created in Format the certificates . To add additional
trust anchors, add additional trustAnchors entries under trustStore .
To add additional intermediate CA certificates, add additional intermediateCas entries under trustStore .
To create the trust store file, run the following command:
cat << EOF > trust_store.yaml
trustStore:
trustAnchors:
- pemCertificate: " ${ ROOT_CERT } "
intermediateCas:
- pemCertificate: " ${ INTERMEDIATE_CERT } "
EOF
Define an attribute mapping and condition
The client X.509 certificate can contain multiple attributes.
You must select which attribute you want to use as the subject identifier by mapping
google.subject in Google Cloud to the attribute from your certificate.
For example, if the attribute in the certificate is
the subject common name, then the mapping would be as follows:
google.subject=assertion.subject.dn.cn
Optionally, you can map additional attributes .
You can then refer to these attributes when granting access to resources.
Your attribute mappings can use the attributes within the client
certificate, including the following:
serialNumberHex : the serial number
subject.dn.cn : the subject common name
subject.dn.o : the subject organization name
subject.dn.ou : the subject last organization unit
issuer.dn.cn : the issuer common name
issuer.dn.o : the issuer organization name
issuer.dn.ou : the issuer last organization unit
san.dns : the subject alternative name's first DNS name
san.uri : the subject alternative name's first URI
sha256Fingerprint : SHA256 leaf certificate hash (Base64)
You must map one of these attributes to google.subject to uniquely identify
the subject. To protect against spoofing threats, choose an attribute with a unique
value that can't be changed. By default, the google.subject identifier is
set to the client certificate subject common name, assertion.subject.dn.cn .
Optionally, you can define an attribute condition .
Attribute conditions are CEL expressions that can check assertion attributes and
target attributes. If the attribute condition evaluates to true for a given
credential, the credential is accepted. Otherwise, the credential is rejected.
Warning: Although you can grant access to all of the identities in a workload
identity pool, doing so can incur risk, especially when the trust anchors
contain a well-known public root CA. We recommend that you limit access
using attribute condition .
You can use an attribute condition to restrict which subjects
can use Workload Identity Federation to obtain short-lived Google Cloud
tokens.
For example, the following condition restricts access to client certificates
containing SPIFFE ID spiffe://example/path :
assertion.san.uri=="spiffe://example/path"
Configure Workload Identity Federation
This section shows you how to configure a workload identity pool and a workload identity
pool provider. You need only perform these steps once for each trust store.
You can then use the same workload identity pool and provider for multiple
workloads and across multiple Google Cloud projects.
Create the workload identity pool
To create a new workload identity pool, execute the following command:
gcloud iam workload-identity-pools create POOL_ID \
--location="global" \
--description=" DESCRIPTION " \
--display-name=" DISPLAY_NAME "
Replace the following:
POOL_ID : the unique ID for the pool.
DISPLAY_NAME : the name of the pool.
DESCRIPTION : a description of the pool that
you choose. This description appears when you grant access to pool
identities.
Create the workload identity pool provider
To add an X.509 workload identity pool provider, run the following
command:
gcloud iam workload-identity-pools providers create-x509 PROVIDER_ID \
--location=global \
--workload-identity-pool=" POOL_ID " \
--trust-store-config-path=" TRUST_STORE_CONFIG " \
--attribute-mapping=" MAPPINGS " \
--attribute-condition=" CONDITIONS "
Replace the following:
PROVIDER_ID : A unique workload identity
pool provider ID of your choice.
POOL_ID : The workload identity pool ID
that you created earlier.
TRUST_STORE_CONFIG : The trust store YAML file.
MAPPINGS : A comma-separated list of
attribute mappings that you created
earlier in this guide. For example, google.subject=assertion.subject.dn.cn .
CONDITIONS : Optional. An attribute condition
that you created earlier in this guide. Remove the parameter if
you don't have an attribute condition.
Configure Context-Aware Access Policy Enforcement for Workload Identity Federation
You can strengthen resource security against token replay attacks by enabling Context-Aware Access , which enforces mTLS validation for access requests. In this process, an mTLS binding incorporates policies based on the transport context and uses the state of the client's certificate within the TLS session to make authorization decisions. For X.509 workload identity federation, an mTLS binding ensures that the entire authentication flow is securely tied to a trusted workload. This mitigates the risk of credential theft, because the authentication is bound to a specific, trusted endpoint.
Authenticate a workload
You must perform these steps once for each workload.
Allow your external workload to access Google Cloud resources
To provide your workload with access to Google Cloud resources, we
recommend that you grant direct resource access to the principal. In this case,
the principal is the federated user. Some Google Cloud products have
Google Cloud API limitations .
If your workload calls an API endpoint that has a limitation, you can instead
use service account impersonation. In this case, the principal is the
Google Cloud service account, which acts as the identity. You grant access
to the service account on the resource.
Direct resource access Service account impersonation
More
You can grant access to a federated identity directly on resources by using
the Google Cloud console or the gcloud CLI.
Console gcloud
More
To use the Google Cloud console to grant IAM roles
directly on a resource, you must go to the resource's page, and then
grant the role. The following example shows you how to go
to the Cloud Storage page and grant the role Storage Object Viewer
( roles/storage.objectViewer ) to a federated identity directly on a
Cloud Storage bucket.
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
In the list of buckets, click the name of the bucket for which you
want to grant the role.
Select the Permissions tab near the top of the page.
Click the add_box
Grant access button.
The Add principals dialog appears.
In the New principals field, enter one or more identities
that need access to your bucket.
By subject By group By attribute
More
principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ SUBJECT
Replace the following:
PROJECT_NUMBER : the project
number
POOL_ID : the workload
pool ID
SUBJECT : the individual
subject mapped from your IdP—for example,
administrator@example.com
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /group/ GROUP
Replace the following:
PROJECT_NUMBER : the project
number
WORKLOAD_POOL_ID : the workload
pool ID
GROUP : the group
mapped from your IdP—for example:
administrator-group@example.com
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
Replace the following:
PROJECT_NUMBER : the project
number
WORKLOAD_POOL_ID : the workload
pool ID
ATTRIBUTE_NAME : one of the
attributes that was mapped from your IdP
ATTRIBUTE_VALUE : the value
of the attribute
Select a role (or roles) from the Select a role drop-down menu.
The roles you select appear in the pane with a short description of
the permissions they grant.
Click Save .
To use the gcloud CLI to grant IAM roles on a
resource in a project, do the following:
Obtain the project number of the project in which the resource
is defined.
gcloud projects describe $(gcloud config get-value core/project) --format=value\(projectNumber\)
Grant access to the resource.
To use the gcloud CLI to grant the role Storage Object Viewer
( roles/storage.objectViewer ) to external identities that meet certain criteria,
run the following command.
By subject By group By attribute
More
gcloud storage buckets add-iam-policy-binding BUCKET_ID \
--role=roles/storage.objectViewer \
--member="principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ SUBJECT "
gcloud storage buckets add-iam-policy-binding BUCKET_ID \
--role=roles/storage.objectViewer \
--member="principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /group/ GROUP "
gcloud storage buckets add-iam-policy-binding BUCKET_ID \
--role=roles/storage.objectViewer \
--member="principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE "
Replace the following:
BUCKET_ID :
the bucket on which to grant access
PROJECT_NUMBER : the project number .
of the project that contains the workload identity pool
POOL_ID : the pool ID of the workload identity pool
SUBJECT : the expected value for the attribute that
you've mapped
to google.subject
GROUP : the expected value for the attribute that
you've mapped
to google.groups
ATTRIBUTE_NAME : the name of a custom attribute in
your attribute mapping
ATTRIBUTE_VALUE : the value of the custom attribute in your attribute mapping
You can grant roles on any Google Cloud resource that supports
IAM allow policies.
Note: You must use the project number, not the project ID, in the
member identifier.
To create a service account for the external workload, do the following:
Enable the IAM, Security Token Service, and Service Account Credentials APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account
that represents the workload. We recommend that you use a dedicated service account for each workload .
The service account doesn't need to be in the same project as the
workload identity pool, but you must refer to the project that
contains the service account.
Grant the service account access
to resources that you want external identities to access.
To let the federated identity impersonate the service account, do the
following:
Console gcloud
More
To use the Google Cloud console to grant IAM roles
to a federated identity with service account, do the following:
Service Account in the same project Service account in a different project
More
To grant access using service account impersonation for a
service account in the same project, do the following:
Go to the Workload Identity Pools page.
Go to Workload Identity Pools
Select Grant access .
In the Grant access to service account dialog, select
Grant access using Service Account impersonation .
In the Service accounts list, select the
service account for the external identities to impersonate,
and do the following:
To choose which identities in the pool can impersonate the
service account, perform one of the following actions:
To allow only specific identities of the workload
identity pool to impersonate the service account, select
Only identities matching the filter .
In the Attribute name list, select the attribute
that you want to filter on.
In the Attribute value field, enter the expected
value of the attribute; for example, if you use an
attribute mapping google.subject=assertion.sub , set
Attribute name to subject and Attribute value
to the value of the sub claim in tokens that are
issued by your external identity provider.
To save the configuration, click Save and then
Dismiss .
Note: Service accounts from different projects won't appear in the
"CONNECTED SERVICE ACCOUNTS" section of your Workload Identity Pool .
To grant access using service account impersonation for a
service account in a different project, do the following:
Go to the Service Accounts page.
Go to Service Accounts
Select the service account that you want to impersonate.
Click Manage access .
Click Add principal .
In the New principal field, enter one of the following
principal identifiers
for the identities in your pool that will impersonate the
service account.
By subject By group By attribute By pool
More
principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ SUBJECT
Replace the following:
PROJECT_NUMBER : the project
number
POOL_ID : the workload
pool ID
SUBJECT : the individual
subject mapped from your IdP—for example,
administrator@example.com
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /group/ GROUP
Replace the following:
PROJECT_NUMBER : the project
number
WORKLOAD_POOL_ID : the workload
pool ID
GROUP : the group
mapped from your IdP—for example:
administrator-group@example.com
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE
Replace the following:
PROJECT_NUMBER : the project
number
WORKLOAD_POOL_ID : the workload
pool ID
ATTRIBUTE_NAME : one of the
attributes that was mapped from your IdP
ATTRIBUTE_VALUE : the value
of the attribute
principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /*
Replace the following:
PROJECT_NUMBER : the project
number
WORKLOAD_POOL_ID : the workload
pool ID
In Select a role , select the Workload Identity User
role ( roles/iam.workloadIdentityUser ).
To save the configuration, click Save .
To grant the Workload Identity User role ( roles/iam.workloadIdentityUser )
to a federated principal or principal set, run the following
command. To learn more about Workload Identity Federation principal
identifiers, see Principal types .
By subject By group By attribute
More
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_EMAIL \
--role=roles/iam.workloadIdentityUser \
--member="principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ SUBJECT "
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_EMAIL \
--role=roles/iam.workloadIdentityUser \
--member="principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /group/ GROUP "
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_EMAIL \
--role=roles/iam.workloadIdentityUser \
--member="principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /attribute. ATTRIBUTE_NAME / ATTRIBUTE_VALUE "
Replace the following:
SERVICE_ACCOUNT_EMAIL :
the email address of the service account
PROJECT_NUMBER : the project number .
of the project that contains the workload identity pool
POOL_ID : the pool ID of the workload identity pool
SUBJECT : the expected value for the attribute that
you've mapped
to google.subject
GROUP : the expected value for the attribute that
you've mapped
to google.groups
ATTRIBUTE_NAME : the name of a custom attribute in
your attribute mapping
ATTRIBUTE_VALUE : the value of the custom attribute in your attribute mapping
Note: You must use the project number, not the project ID, in the
member identifier.
Download or create a credential configuration
The Cloud Client Libraries and the
gcloud CLI can automatically obtain external
credentials and use these credentials to impersonate a service account. To
let libraries and tools complete this process, you must provide a credential
configuration file. This file provides the following information:
Where to obtain external credentials from
Which workload identity pool and provider to use
Which service account to impersonate
Additionally, for X.509 certificate federation, a certificate configuration file
is required. This file contains paths to the X.509 client certificate and private
key files.
Note: Unlike a service account key ,
a credential configuration file doesn't contain a private key and doesn't need
to be kept confidential. For the credential configuration file details, see
AIP-4117: External Account Credentials (Workload Identity Federation) .
Create credential and certificate configuration files that let the library obtain
access tokens using X.509 certificates.
Direct resource access Service account impersonation
More
To create credential and certificate configuration files for direct resource access by using
gcloud iam workload-identity-pools create-cred-config ,
do the following:
gcloud iam workload-identity-pools create-cred-config \
projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /providers/ PROVIDER_ID \
--credential-cert-path= CLIENT_CERT_PATH \
--credential-cert-private-key-path= CLIENT_PRIVATE_KEY_PATH \
--credential-cert-trust-chain-path= TRUST_CHAIN_PATH \
--output-file= FILEPATH .json
Replace the following:
PROJECT_NUMBER : The project number of the
project that contains the workload identity pool.
POOL_ID : The ID of the workload identity
pool.
PROVIDER_ID : The ID of the workload
identity pool provider.
CLIENT_CERT_PATH : The path of the client
certificate file.
CLIENT_PRIVATE_KEY_PATH : The path of the client
certificate private key file.
TRUST_CHAIN_PATH : Optional. The path of the
trust chain file that contains any intermediate certificates that are not
configured in x509 provider.
FILEPATH : The file to save the configuration
to.
Running this command will also create a certificate configuration file and
store it at the default gcloud CLI location:
Linux and macOS: ~/.config/gcloud/certificate_config.json
Windows: %APPDATA%\gcloud\certificate_config.json
To create credential and certificate configuration files with service account impersonation by using
gcloud iam workload-identity-pools create-cred-config ,
do the following:
gcloud iam workload-identity-pools create-cred-config \
projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /providers/ PROVIDER_ID \
--service-account= SERVICE_ACCOUNT_EMAIL \
--service-account-token-lifetime-seconds= SERVICE_ACCOUNT_TOKEN_LIFETIME \
--credential-cert-path= CLIENT_CERT_PATH \
--credential-cert-private-key-path= CLIENT_KEY_PATH \
--credential-cert-trust-chain-path= TRUST_CHAIN_PATH \
--output-file= FILEPATH .json
Replace the following:
PROJECT_NUMBER : The project number of the
project that contains the workload identity pool.
POOL_ID : The ID of the workload identity
pool.
PROVIDER_ID : The ID of the workload
identity pool provider.
SERVICE_ACCOUNT_EMAIL : If you use service
account impersonation, replace with the email address
of the service account.
SERVICE_ACCOUNT_TOKEN_LIFETIME : The lifetime of the
service account access token, in seconds, if you use
service account impersonation. If omitted, this lifetime defaults to one hour.
Omit this flag if you don't use service account impersonation. To specify a
lifetime longer than one hour, you must configure the
constraints/iam.allowServiceAccountCredentialLifetimeExtension
organizational policy constraint .
CLIENT_CERT_PATH : The path of the client
certificate file.
CLIENT_PRIVATE_KEY_PATH : The path of the client
certificate private key file.
TRUST_CHAIN_PATH : Optional. The path of the
trust chain file that contains any intermediate certificates not
configured in x509 provider.
FILEPATH : The file to save configuration
to.
Running this command will also create a certificate configuration file and
store it at the default Google Cloud CLI location:
Linux and macOS: ~/.config/gcloud/certificate_config.json
Windows: %APPDATA%\gcloud\certificate_config.json
Use the credential configuration to access Google Cloud
To let tools and client libraries use your credential configuration, do the
following. To learn more about Application Default Credentials, see How
Application Default Credentials
works .
Initialize an environment variable GOOGLE_APPLICATION_CREDENTIALS and set it to the credential configuration file:
Bash
export GOOGLE_APPLICATION_CREDENTIALS=`pwd`/ FILEPATH .json
Replace FILEPATH with the relative path to the
credential configuration file.
PowerShell
$env:GOOGLE_APPLICATION_CREDENTIALS = Resolve-Path ' FILEPATH .json'
Replace FILEPATH with the relative path to the
credential configuration file.
Ensure that the client library can find the certificate configuration file.
The certificate configuration file is located at one of the following paths:
The default gcloud CLI path:
Linux and macOS: ~/.config/gcloud/certificate_config.json
Windows: %APPDATA%\gcloud\certificate_config.json
The path set in the GOOGLE_API_CERTIFICATE_CONFIG environment variable.
Use the following Cloud Client Libraries that support Workload Identity Federation
with X.509 certificates.
Go Python
More
Client libraries for Go support X.509 Workload Identity Federation if they
use version 0.16.0 or later of the cloud.google.com/go/auth module and
version 0.189.0 of the google.golang.org/api module .
To check which version of these modules your client library uses, run the
following command while in the directory containing the go.mod file for your
module:
go list -m cloud.google.com/go/auth
go list -m cloud.google.com/api
Client libraries for Python support X.509 Workload Identity Federation if they use version
2.39.0 or later of the
google-auth package
To check which version of this package your client library uses, run the
following command in the environment where the package is installed:
pip show google-auth
To specify a project ID for the authentication client, you can set the
GOOGLE_CLOUD_PROJECT environment variable, or you can allow the client to find
the project ID automatically. To find the project ID automatically, the service
account in the configuration file must have the Browser role ( roles/browser ),
or a role with equivalent permissions, on your project. For details, see the
user guide for the google-auth package .
If your workload runs on macOS, set CLOUDSDK_PYTHON_SITEPACKAGES=1
to configure gcloud CLI to use Python libraries outside of its
installation directory.
To authenticate using the gcloud CLI, run the following
command:
gcloud auth login --cred-file= FILEPATH .json
Replace FILEPATH with the path to the
credential configuration file.
Support for X.509 Workload Identity Federation in gcloud CLI is available in
version 538.0 and later versions of the gcloud CLI .
Obtain an access token using plain request to access Google Cloud
Create the trust chain
This step shows you how to create the trust chain. You pass the trust chain in the subject_token field when calling Security Token Service in plain request.
Format the certificates that need to be included
in the chain as a JSON-formatted list as specified in RFC 7515 .
The leaf certificate used for the mTLS handshake must be specified as the first
item. Each certificate in the bundle should be a base64-encoded string.
Save the leaf certificate and the intermediate certificate to base64-encoded strings.
export LEAF_CERT = $( openssl x509 -in leaf.cert -out leaf.der -outform DER && cat leaf.der | openssl enc -base64 -A )
export INTERMEDIATE_CERT = $( openssl x509 -in int.cert -out int.der -outform DER && cat int.der | openssl enc -base64 -A )
Create a JSON-formatted list of strings that can be passed as subject_token in the call to Security Token Service, later in this document.
export TRUST_CHAIN = "[\\\" ${ LEAF_CERT } \\\", \\\" ${ INTERMEDIATE_CERT } \\\"]"
Obtain access token
To obtain the access token, do the following:
Perform token exchange with mTLS and the client certificate:
curl --key CLIENT_CERT_KEY \
--cert CLIENT_CERT \
--request POST 'https://sts.mtls.googleapis.com/v1/token' \
--header "Content-Type: application/json" \
--data-raw '{
"subject_token_type": "urn:ietf:params:oauth:token-type:mtls",
"grant_type": "urn:ietf:params:oauth:grant-type:token-exchange",
"audience": " WORKLOAD_IDENTITY_POOL_URI ",
"requested_token_type": "urn:ietf:params:oauth:token-type:access_token",
"scope": "https://www.googleapis.com/auth/cloud-platform",
"subject_token": " TRUST_CHAIN "
}'
Replace the following:
CLIENT_CERT_KEY : the client certificate private key
CLIENT_CERT : the client certificate
WORKLOAD_IDENTITY_POOL_URI : the URL of the workload
identity pool provider in the following format:
//iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /providers/ PROVIDER_ID
TRUST_CHAIN : The trust chain needed to verify
the leaf certificate, must at least include
CLIENT_CERT as the first item. If you followed
instructions in Formatting the certificates section, replace TRUST_CHAIN
with '"${TRUST_CHAIN}"'
Use the bearer access token generated in the previous step to access
Google Cloud resources—for example:
curl -X GET 'https://storage.googleapis.com/my_object' -H "Authorization: Bearer $ACCESS_TOKEN "
Limits
The following table lists limits.
Item
Limit
Notes
Number of trust anchors
3
Each certificate must not exceed 32 KB.
Number of intermediate certificates
10
Each certificate shouldn't exceed 32 KB.
Number of name constraints allowed during validation of root and
intermediate certificates
10
Intermediate certificates that
share the same Subject and Subject Public Key information
5
This limit is for each trust store.
Certificate chain depth
5
The maximum depth for a certificate chain, including the root
and client certificates.
Number of times intermediate certificates can be
evaluated when attempting to build the chain of trust
100
Keys of certificates uploaded and passed from the client
RSA keys can be from 2048 to 4096 bits.
ECDSA certificates must use either P-256 or P-384 curves.
RSA-2048 and P-256 are recommended for normal use cases, use others for
best security practice.
Maximum leaf certificate lifetime
390 days.
Leaf certificate issued longer than 390 days will be rejected.
What's next
Read more about Workload Identity Federation .
Learn about best practices for using Workload Identity Federation .
See how you can manage workload identity pools and providers .
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
