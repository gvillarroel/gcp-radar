---
title: "Create an EKM connection \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/create-ekm-connection
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/create-ekm-connection
  title: "Create an EKM connection \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create an EKM connection | Cloud Key Management Service | Google Cloud Documentation
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
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud KMS
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
Protection levels
Overview
Cloud HSM overview
Single-tenant Cloud HSM overview
Cloud EKM overview
Reference architectures for Cloud EKM
CMEK overview
Cloud KMS with Autokey
Compatible services
Cloud HSM for Google Workspace
Locations
Get started
Cloud KMS resources
Key purposes and algorithms
Separation of duties
Create and use encryption keys
CMEK best practices
Create and manage Single-tenant Cloud HSM instances
Create keys
Automate key creation
Autokey overview
Enable Autokey
Create a resource with Autokey
Create a key ring
Create a key
Import keys
About key import
Key wrapping
Format a key for import
Manually wrap a key for import
Configure OpenSSL for manual key wrapping
Wrap a key using OpenSSL
Set up automatic key wrapping
Import a key version
Verify an imported key version
Create external keys
Set up Cloud EKM over the internet
Create an EKM connection
Create an external Key
Control access
Manage IAM roles
Use Organization Policy Contraints
Create custom organization policy constraints for Cloud KMS
CMEK organization policies
Control key destruction
Secure data using keys
Key APIs
Use gRPC
Access the API
Sort and filter API list results
Generate random bytes
Use Cloud KMS keys in Google Cloud
Encrypt and decrypt data
Envelope encryption
Additional authenticated data
Asymmetric encryption
Encrypt and decrypt data with a symmetric key
Encrypt and decrypt data with a raw symmetric key
Encrypt and decrypt data with an asymmetric key
Verify end-to-end data integrity
Encrypt application data
Set up client-side encryption with Tink
Onboard to Cloud HSM for Google Workspace
Sign and validate data
Digital signatures
Create and validate signatures
MAC signatures
Create and validate MAC signatures
Share secrets using key encapsulation mechanisms
Key encapsulation mechanisms
Encapsulate and decapsulate using KEMs
Manage keys
Resource consistency
Key version states
View keys and key details
View keys by project
View encryption metrics
View key usage
Get a Cloud KMS resource ID
Retrieve a public key
Attest a Cloud HSM key
Label a key
Create and manage tags
Enable and disable a key version
Destroy and restore a key version
Delete Cloud KMS resources
Rotate keys
About key rotation
Rotate a key
Re-encrypt data
Update external key reference
Monitor
Using Cloud Audit Logging
Cloud KMS Inventory Service audit logging
Monitor state changes
Monitor and adjust quotas
Use Cloud Monitoring
Monitor EKM usage
Troubleshoot
Troubleshoot failed imports
Troubleshoot EKM via VPC errors
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
Terminology
Before you begin Create a new project
Enable Cloud KMS
Prepare a VPC network
Set up your external key manager
Create a Service Directory service endpoint
Authorize Cloud EKM to access your VPC
Create an EKM connection Certificate status
Set an EKM connection as default
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Create an EKM connection
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Terminology
Before you begin Create a new project
Enable Cloud KMS
Prepare a VPC network
Set up your external key manager
Create a Service Directory service endpoint
Authorize Cloud EKM to access your VPC
Create an EKM connection Certificate status
Set an EKM connection as default
What's next
This page shows you how to set up Cloud External Key Manager (Cloud EKM) to connect to
your external key management (EKM) provider over a
Virtual Private Cloud (VPC) network .
You can use external keys over VPC in Cloud KMS locations that
support EKM via VPC. For more information, see the Cloud KMS Locations
page .
Terminology
EKM connection
The Cloud KMS resource used to configure a connection to your
external key manager. In the Google Cloud console, this is referred to as an
EKM via VPC connection .
VPC project
The project that holds the VPC resource that is used to connect
to your external key manager.
Key projects
The projects that hold EKM connection resources and Cloud EKM keys in
Cloud KMS. A key project can be the same as a VPC
project, but it is not required.
Crypto space
A container for your resources within your external key management partner. Your crypto space
is identified by a unique crypto space path. The format of the crypto space
path varies by external key management partner—for example,
v0/cryptospaces/ YOUR_UNIQUE_PATH .
Before you begin
After you complete the steps below, you can begin using Cloud EKM
keys to protect your data.
Create a new project
In the Google Cloud console, go to the Manage Resources page.
Go to the Manage Resources page
Create a new Google Cloud project or select an existing project.
Important:
The name you use must be between 4 and 30 characters. When you type the name,
the form will suggest a project ID, which you can edit. The project ID you use
must be between 6 and 30 characters, with a lowercase letter as the first character.
You can use a dash, lowercase letter, or digit for
the remaining characters, but the last character cannot be a dash.
You should be aware that some resource identifiers (such as project IDs) might be
retained beyond the life of your project. For this reason, avoid storing
sensitive information in resource identifiers.
...see naming guidelines
Verify that billing is enabled for your Google Cloud project .
You can learn more about Cloud EKM pricing .
Enable Cloud KMS
Enable the Cloud Key Management Service API for the project.
Enable the Cloud Key Management Service API
Make a note of your project's Cloud EKM service account. In the
following example, replace PROJECT_NUMBER with your
Google Cloud project's project number . This
information is also visible each time you use the Google Cloud console to create
a Cloud EKM key.
service- PROJECT_NUMBER @gcp-sa-ekms.iam.gserviceaccount.com
Ensure gcloud CLI is up to date
If you're going to use the Google Cloud CLI, ensure that it's up-to-date with the
following command:
gcloud CLI
More
gcloud components update
Prepare a VPC network
There are two options when setting up a VPC network:
Auto mode network
Custom mode network
By default, new projects contain an auto mode network that is
pre-populated with firewall rules .
If the VPC network will not be used for production purposes, the
default auto mode network is the quickest way to get started.
If your external key manager is running on-premises and you will connect to it via
hybrid connectivity , you should use a custom mode
network because it provides control over the subnet IP address ranges.
Follow these steps for setting up your VPC:
Enable Private Google Access
The external key manager must verify the OIDC token contained in each
request. To verify the token, it needs to retrieve the OAuth2 public key
from the www.googleapis.com domain name. If the external key manager runs
in Google Cloud and does not have access via the internet (e.g. a VM without
an external IP or blocked by a firewall), follow the instructions for
configuring private Google access .
Firewall configuration for IP range 35.199.192.0/19
Requests from Cloud EKM will come from this range. Create both
ingress and egress allow firewall rules for TCP for
the port on which the external key manager is listening.
Set up hybrid connectivity
If the external key manager is running on-premise, use a
hybrid connectivity solution
to connect the VPC with your on-premise network. Once you have
set up connectivity, follow these additional steps:
Enable Private Google Access
The external key manager must verify the OIDC token contained in each request. To verify the token, it needs
to retrieve the OAuth2 public key from the www.googleapis.com domain name. If the
external key manager runs on-premise and does not have access via the internet, follow
the instructions for
configuring private Google access for on-premises hosts .
Firewall configuration for IP range 35.199.192.0/19
Requests from Cloud EKM will come from this range. Configure your
on-premise network firewall or similar equipment to permit TCP traffic on
the port on which the external key manager is listening.
Ensure that your VPC has a return route to IP range 35.199.192.0/19
Your on-premises network must have a route for the 35.199.192.0/19
destination. For information about how to meet this requirement, see
return route strategies for on-premise targets .
Return route strategies for on-premise targets
For Cloud VPN tunnels that use static routing, manually create a route in
your on-premises network whose destination is 35.199.192.0/19 and whose
next hop is the Cloud VPN tunnel. For Cloud VPN tunnels
that use policy-based routing, configure the Cloud VPN's local
traffic selector and the on-premises VPN gateway's
remote traffic selector to include 35.199.192.0/19 .
For Cloud VPN tunnels that use dynamic routing or for
Cloud Interconnect, configure custom advertisement mode for
35.199.192.0/19 on the BGP session of the Cloud Router that manages
the tunnel or VLAN attachment.
Set up your external key manager
Follow the instructions from your EKM provider to set up your EKM.
Set up your crypto space
If you use Cloud EKM as part of a partner-managed EKM arrangement,
these steps have been completed for you as part of your partner's provisioning
process.
If your EKM provider is compatible with EKM key management from Cloud KMS, the following setup
and configuration steps need to be made in your EKM:
Create a crypto space for your Cloud KMS-managed resources in your
EKM.
Grant your Cloud KMS service account access to your crypto space
and the keys created in it.
Set up Key Access Justifications policy to define which access justifications
should be allowed or denied.
The exact process for each of these steps depends on your EKM. For more
information, see your EKM provider's documentation.
Create a Service Directory service endpoint
Create and configure a Service Directory service endpoint
in your VPC project that points to the private IP address and
port of your your external key manager. If you are using a load balancer in
front of multiple EKM replicas, use the load balancer's IP address and port.
Ensure the network field of your Service Directory service endpoint is
populated.
Authorize Cloud EKM to access your VPC
For each key project, you must authorize Cloud EKM to access your
VPC on that project's behalf, even if the key project and the
VPC project are the same. By authorizing access, keys in your key project can
use the VPC in your VPC project.
Ensure a Cloud EKM service account exists for the project.
gcloud CLI
More
gcloud beta services identity create \
--service=cloudkms.googleapis.com \
--project= KEY_PROJECT_ID
Grant the servicedirectory.viewer and
servicedirectory.pscAuthorizedService in your
VPC project to
service- KEY_PROJECT_NUMBER @gcp-sa-ekms.iam.gserviceaccount.com
For help with getting your project ID and number, see
Creating and managing projects .
gcloud CLI
More
gcloud projects add-iam-policy-binding VPC_PROJECT_ID \
--member=serviceAccount:service- KEY_PROJECT_NUMBER @gcp-sa-ekms.iam.gserviceaccount.com \
--role=roles/servicedirectory.viewer
gcloud projects add-iam-policy-binding VPC_PROJECT_ID \
--member=serviceAccount:service- KEY_PROJECT_NUMBER @gcp-sa-ekms.iam.gserviceaccount.com \
--role=roles/servicedirectory.pscAuthorizedService
Create an EKM connection
To connect your external key manager to Cloud EKM, create an
EKM connection in your key project .
Note: All Cloud KMS keys associated with an EKM connection
need to reside in the same Google Cloud location as the EKM connection. Note: EKM connections with the same name can exist in different
locations , so you must always specify the
location.
Console gcloud API
More
In the Google Cloud console, go to the
KMS infrastructure page.
Go to KMS infrastructure
Click add Create connection .
For Connection name , enter a name for your connection.
For Region , select a location for the EKM connection. Any
Cloud KMS keys associated with this connection must be in the same
location as the connection.
For the Service resource ID (self_link) field, enter the value of the
Service Directory service created in the
Create a Service Directory service endpoint section.
The service directory service must be in the same location as the
connection.
In the Hostname field, add the host name for your external key manager.
In Certificates , click Add certificate to upload one or more
X.509 server certificates for your external key manager. Certificates must
be in DER format.
For EKM management mode , select Manual to use the EKM connection for
manually managed external keys, or select Cloud KMS to use the EKM
connection for coordinated external keys.
If you selected Cloud KMS for EKM management mode , then in the
Crypto space path field, enter the crypto space path provided by your
EKM.
Optional. To set the EKM connection as the default connection for this
project and location, select the Set connection as the default checkbox.
If another EKM connection is currently set as the default connection for
this project and location, this EKM connection replaces the existing
default.
Click Create .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
To create an EKM connection for manually managed external keys, run the
following command:
gcloud beta kms ekm-connections create EKM_CONNECTION \
--location LOCATION \
--service-directory-service SERVICE_DIRECTORY_SERVICE \
--hostname HOSTNAME \
--server-certificates-files SERVER_CERTIFICATE_FILES \
--key-management-mode manual
Replace the following:
EKM_CONNECTION : a name for the EKM connection.
LOCATION : the Cloud KMS location where you want to create
the EKM connection. Any Cloud KMS keys associated with this
connection must be in the same location as the connection.
SERVICE_DIRECTORY_SERVICE : the resource ID of the
Service Directory service for your connection.
HOSTNAME : the hostname of your external key manager.
SERVER_CERTIFICATE_FILES : a comma-separated list of files
containing X.509 server certificates for your external key manager.
Certificates must be in DER format.
To create an EKM connection for coordinated external keys, run the
following command:
gcloud beta kms ekm-connections create EKM_CONNECTION \
--location LOCATION \
--service-directory-service SERVICE_DIRECTORY_SERVICE \
--hostname HOSTNAME \
--server-certificates-files SERVER_CERTIFICATE_FILES \
--key-management-mode cloud-kms \
--crypto-space-path CRYPTO_SPACE_PATH
Replace the following:
EKM_CONNECTION : a name for the EKM connection.
LOCATION : the Cloud KMS location where you want to create
the EKM connection. Any Cloud KMS keys associated with this
connection must be in the same location as the connection.
SERVICE_DIRECTORY_SERVICE : the resource ID of the
Service Directory service for your connection.
HOSTNAME : the hostname of your external key manager.
SERVER_CERTIFICATE_FILES : a comma-separated list of files
containing X.509 server certificates for your external key manager.
Certificates must be in DER format.
CRYPTO_SPACE_PATH : the crypto space path provided by your EKM provider.
For information on all flags and possible values, run the command with the
--help flag.
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
To create an EKM connection for coordinated external keys, run the
following command:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /ekmConnections" \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--header "x-goog-user-project: PROJECT_ID " \
--data '{
"name": " EKM_CONNECTION ",
"serviceResolvers": [
{
"serviceDirectoryService": " SERVICE_DIRECTORY_SERVICE ",
"hostname": " HOSTNAME ",
"serverCertificates": [
{
SERVER_CERTIFICATES
}
]
}
]
"keyManagementMode": "CLOUD_KMS",
"cryptoSpacePath": " CRYPTO_SPACE_PATH "
}'
Replace the following:
PROJECT_ID : the ID of the project where you want to create the
EKM connection.
LOCATION : the Cloud KMS where you want to create the
EKM connection.
EKM_CONNECTION : the name to use for the EKM connection.
SERVER_CERTIFICATES : a list of up to 10 Certificate objects that
represent leaf server certificates.
HOSTNAME : the hostname of your external key manager.
CRYPTO_SPACE_PATH : the crypto space path provided by your EKM provider.
To create an EKM connection for manually managed external keys, run the
following command:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /ekmConnections" \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--header "x-goog-user-project: PROJECT_ID " \
--data '{
"name": " EKM_CONNECTION ",
"serviceResolvers": [
{
"serviceDirectoryService": " SERVICE_DIRECTORY_SERVICE ",
"hostname": " HOSTNAME ",
"serverCertificates": [
{
SERVER_CERTIFICATES
}
]
}
]
}'
Replace the following:
PROJECT_ID : the ID of the project where you want to create the
EKM connection.
LOCATION : the Cloud KMS where you want to create the
EKM connection.
EKM_CONNECTION : the name to use for the EKM connection.
SERVER_CERTIFICATES : a list of up to 10 Certificate
objects
that represent leaf server certificates.
HOSTNAME : the hostname of your external key manager.
See the EkmConnection.create API documentation
for more information.
Certificate status
Once you've uploaded a certificate for your EKM connection, you can check the
overall certificate status of the EKM connection as well as the status of each
certificate from the
KMS infrastructure page .
EKM connections have an overall status in the Certificate status column of
each connection. If an EKM connection has a status other than Active , we
recommend updating the certificate(s) on your EKM connection.
Both EKM connections and individual certificates can have the following status:
Active : The certificate is valid and is not nearing its expiration date.
Expiring within 30 days : The certificate is valid, but has an expiration
date in the next 30 days.
Expired : The certificate is expired and is no longer valid. We recommend
updating any expired certificates.
Not valid yet : The certificate is not active. This can happen if the
certificate's start date is in the future.
If your certificate is no longer valid, update your EKM connection in the
Google Cloud console.
Console
More
In the Google Cloud console, go to the
KMS infrastructure page.
Go to KMS infrastructure
Click the name of the EKM via VPC connection with the certificate that
needs to be updated.
Click Edit connection .
Click Add certificate to upload one or more X.509 server certificates
for your external key manager. Certificates must be in DER format.
Remove the expired certificates. Hover over the expired certificate and
select the Delete icon on the right.
Click Update connection to update the EKM via VPC connection.
Set an EKM connection as default
You can set an EKM connection as the default connection for a given project
and location. When a default EKM connection is set for a project and location,
new Cloud EKM by VPC keys created in key rings in that location
use the indicated EKM connection unless another EKM connection is selected.
To set an EKM connection as the default for its project and location, complete
the following steps:
Console gcloud CLI API
More
In the Google Cloud console, go to the
KMS infrastructure page.
Go to KMS infrastructure
Click the EKM connection that you want to set as the default.
Click Edit connection .
Under Default connection , select the Set connection as the default
for LOCATION checkbox.
Click Update connection .
gcloud kms ekm-config update
--location= LOCATION
--default-ekm-connection=projects/ PROJECT_ID /locations/ LOCATION /ekmConnections/ DEFAULT_EKM_CONNECTION
Replace the following:
LOCATION : the Cloud KMS for which you want to set
the default EKM connection.
PROJECT_ID : the name of the project for which you want to set
the default EKM connection.
DEFAULT_EKM_CONNECTION : the name of the EKM connection that
you want to set as the default for this location. The location of the
EKM connection must match the location given in LOCATION .
To set the default EKM connection for a location, use the EkmConfig.patch
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /ekmConfig" \
--request "PATCH" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"defaultEkmConnection": "projects/ PROJECT_ID /locations/ LOCATION /ekmConnections/ DEFAULT_EKM_CONNECTION "}'
Replace the following:
PROJECT_ID : the ID of the project for which you want to set
a default EKM connection.
LOCATION : the Cloud KMS for which you want to set
the default EKM connection.
DEFAULT_EKM_CONNECTION : the name of the EKM
connection that you want to set as the default for this location.
The location of the EKM connection must match the location given in
LOCATION .
If another EKM connection had been set as the default for this location, the
selected EKM connection replaces it as the default. Only one EKM connection can
be default for a given project and location.
What's next
Create an external key .
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
