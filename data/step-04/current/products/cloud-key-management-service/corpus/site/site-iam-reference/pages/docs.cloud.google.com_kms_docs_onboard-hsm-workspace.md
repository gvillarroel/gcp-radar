---
title: "Onboard to Cloud HSM for Google Workspace \_|\_ Cloud Key Management Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/onboard-hsm-workspace
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/onboard-hsm-workspace
  title: "Onboard to Cloud HSM for Google Workspace \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Onboard to Cloud HSM for Google Workspace | Cloud Key Management Service | Google Cloud Documentation
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
Before you begin
Compatible locations
Set up a Google Cloud project for Cloud KMS
Manage CHGWS service endpoint Set up Cloud KMS keys
Request onboarding and endpoint creation
Configure CHGWS endpoint in Google Workspace CSE
Migrate Endpoints
Delete or disable endpoints
Enable endpoints
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Onboard to Cloud HSM for Google Workspace
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Compatible locations
Set up a Google Cloud project for Cloud KMS
Manage CHGWS service endpoint Set up Cloud KMS keys
Request onboarding and endpoint creation
Configure CHGWS endpoint in Google Workspace CSE
Migrate Endpoints
Delete or disable endpoints
Enable endpoints
What's next
This page describes how to onboard Cloud HSM for Google Workspace
(CHGWS), the encryption key service for Google Workspace
offered by Cloud Key Management Service (Cloud KMS). Cloud HSM for Google Workspace provides enhanced
privacy controls for Google Workspace, helping you achieve regulatory
standards such as DISA
IL5 and
elevate data security. Cloud HSM is a standards-aligned, highly available,
and fully managed key management service operated at cloud scale with
hardware-backed keys stored in FIPS 140-2 Level 3 compliant HSMs (hardware
security modules).
CHGWS is compatible with both Multi-tenant Cloud HSM and
Single-tenant Cloud HSM keys.
For more information, see Cloud HSM for Google Workspace .
Before you begin
Before you onboard Cloud HSM for Google Workspace, complete the following prerequisites:
Set up a Google Workspace.
Enable Google Workspace Client-side Encryption (CSE) in your
Google Workspace.
Configure your Identity Provider (IdP) in Google Workspace CSE. Note the
Client ID for your IdP. If you use Google Identity Platform, find the Client ID
in your Google Cloud project.
Optional: If you allow access to CSE-encrypted content on platform
applications other than web (such as mobile or desktop), add the client IDs
for those platforms in your IdP settings in the Google Workspace Admin
Console. Note all client IDs for this IdP. If you use Google Identity Platform,
find these client IDs in your Google Cloud project. For other Identity
Providers, create these client IDs separately.
Compatible locations
You can store your Cloud KMS keys in any regional or multi-regional location within the US or Europe geographic areas. Cloud HSM for Google Workspace supports both Multi-tenant Cloud HSM and Single-tenant Cloud HSM keys. To find a specific location, visit
Cloud KMS Locations and filter by your HSM type.
Cloud HSM for Google Workspace automatically provides the endpoint in one of the following multi-regions closest to your key location:
us
eur3
Set up a Google Cloud project for Cloud KMS
Cloud HSM for Google Workspace endpoints rely on Cloud KMS keys for cryptographic
operations. Set up a new Google Cloud project to host the
Cloud KMS keys.
Create a Google Cloud project . This is your key
project. Make note of the project ID and project number; you need these to
complete the setup.
Enable billing on the project that you created.
Enable the Cloud KMS API in your Google Cloud key project.
Enable the API
In the Google Cloud console, click terminal
Activate Cloud Shell .
Verify that you are in the correct project by comparing your project ID with
the project ID in the Cloud Shell prompt.
Using Cloud Shell, create the Cloud HSM for Google Workspace service account:
gcloud beta services identity create --service = cloudkmskacls-pa.googleapis.com
Note the service identity created by this command. You need the service
identity name in the next step.
Grant the CHGWS key Service Agent role to the service account that
you created:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-cloudkmskacls.iam.gserviceaccount.com \
--role = roles/cloudkmskacls.serviceAgent
Replace the following:
PROJECT_ID : The project ID of your key project.
PROJECT_NUMBER : The project number of your key project.
Manage CHGWS service endpoint
The following sections show you how to set up and manage your
CHGWS endpoints.
Set up Cloud KMS keys
Set up the Cloud KMS resources for your CHGWS key
service endpoint.
Create a key ring in one of the supported regions:
gcloud kms keyrings create KEY_RING --location LOCATION
Replace KEY_RING with the name that you want to use for your
CHGWS key ring—for example, CHGWS_KEY_RING .
Replace LOCATION with the location where you want to create
your key ring—for example, us .
Create a Cloud HSM key. Choose the tab corresponding to your HSM key protection level:
Multi-tenant Cloud HSM Single-tenant Cloud HSM
More
To create a key with the hsm protection level:
gcloud kms keys create KEY_NAME \
--protection-level "hsm" \
--keyring KEY_RING \
--location LOCATION \
--purpose "encryption" \
--rotation-period ROTATION_PERIOD \
--next-rotation-time NEXT_ROTATION_TIME
Replace the following:
KEY_NAME : The name that you want to use for your
key—for example, CHGWS_KEY .
KEY_RING : The name of your key
ring—for example, CHGWS_KEY_RING .
LOCATION : The location where you created your
key ring—for example, us .
ROTATION_PERIOD : The frequency at which you want to rotate
your keys—for example, 7d .
NEXT_ROTATION_TIME : The date and time when the next key
rotation occurs—for example, 2024-03-20T01:00:00 .
To create a key with the hsm_single_tenant protection level, you must
first have a Single-tenant Cloud HSM instance provisioned in the
same location.
Create and provision a Single-tenant Cloud HSM instance:
Follow the instructions in the Create and manage a
Single-tenant Cloud HSM instance
guide. Make note of the provisioned Instance ID. You use it in
the next step.
Create a key:
gcloud kms keys create KEY_NAME \
--protection-level "hsm_single_tenant" \
--keyring KEY_RING \
--location LOCATION \
--purpose "encryption" \
--crypto-key-backend "projects/ PROJECT_ID /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE_NAME " \
--rotation-period ROTATION_PERIOD \
--next-rotation-time NEXT_ROTATION_TIME
Replace the following:
KEY_NAME : The name that you want to use for your
key—for example, CHGWS_KEY .
KEY_RING : The name of your key
ring—for example, CHGWS_KEY_RING .
LOCATION : The location where you created your
key ring—for example, us .
PROJECT_ID : The project ID of your key project.
INSTANCE_NAME : The name of the
Single-tenant Cloud HSM instance where you want to create the key.
ROTATION_PERIOD : The frequency at which you want to
rotate your keys—for example, 7d .
NEXT_ROTATION_TIME : The date and time when the next key
rotation occurs—for example, 2024-03-20T01:00:00 .
For more details on key creation options, see Creating keys .
Request onboarding and endpoint creation
To request onboarding and endpoint creation, contact your account representative
for assistance with submitting an endpoint onboarding request. In the request, include
the following information:
Google Workspace details
Google Workspace ID : Your Google Workspace ID. Find your
Google Workspace ID by following the instructions at
Find your customer ID .
Google Workspace administrator email addresses : Provide a
comma-separated list of administrator email addresses.
Identity Provider (IdP) details
Primary Identity Provider (IdP) details :
IdP JSON Web Key Set (JWKS) URL : For Google Identity Platform, use
https://www.googleapis.com/oauth2/v3/certs .
JSON Web Token (JWT) token issuer : For Google Identity Platform, use
https://accounts.google.com .
JWT audience : Your IdP's Client ID for web applications.
Additional JWT audiences : Optional. Provide client IDs for non-web
platform applications if configured. For Google Identity Platform, use the
client IDs given in
If you'll use Google identity for CSE .
Guest IdP details : Optional. Complete this section if you're using a
guest IdP.
Guest IdP JWKS URL : The JWKS URL of your guest IdP.
Guest JWT token issuer : The JWT token issuer of your guest IdP.
Guest JWT audience : Your guest IdP's Client ID for web applications,
except for Google Meet.
Guest additional JWT audiences : Optional. If you configure a
Google Meet web client ID or other non-web platform application client
IDs, provide client IDs for each. For Google Identity Platform, use the
client IDs given in
If you'll use Google identity for CSE .
Important: Verify that your IdP JWKS URL is publicly accessible. Confirm the JWT Token
Issuer and JWT Audience values with your IdP administrator.
CSE Key details
Google Cloud Project ID : PROJECT_ID
Google Cloud Project Number : PROJECT_NUMBER
Cloud KMS keyring name : KEY_RING
Cloud KMS keyring location : LOCATION
Cloud KMS key name : KEY_NAME
Cloud KMS key protection level : should be either hsm or
hsm_single_tenant
CHGWS Base URL : Optional. A list of URLs to enable key migration. If you
set up CHGWS for the first time for this
Google Workspace, leave this field blank.
Additional Details
Customer Name : Provide customer name.
Expected number of users : Provide the expected number of users in your
Google Workspace instance.
Configure CHGWS endpoint in Google Workspace CSE
Configure Google Workspace CSE to use the CHGWS URL
generated when you created the CHGWS endpoint. Follow the
instructions at
Add and manage key services for client-side encryption .
Migrate Endpoints
CHGWS provides flexibility to move your key service to or
from CHGWS. To start a CHGWS migration,
contact your account representative for assistance with submitting a
migration request. In the request, include the following information:
Endpoint ID : The endpoint ID of CHGWS.
CHGWS Base URL : A list of URLs to enable CHGWS key
migration.
If you migrate to Cloud HSM for Google Workspace, then provide the base URL of each
CHGWS endpoint that you migrate from.
If you migrate from Cloud HSM for Google Workspace, provide the base URL(s) of the
CHGWS endpoint(s) that you want to migrate to.
If you migrate between two different Cloud HSM for Google Workspace endpoints, submit two
separate requests: one from the previous endpoint and the other to the new
endpoint.
Delete or disable endpoints
Delete or disable operations on the Cloud HSM for Google Workspace endpoint are not
directly supported. However, you can disable a Cloud HSM for Google Workspace endpoint by
disabling all backing Cloud KMS key versions.
For each Cloud KMS key version backing the endpoint, run the
following command:
gcloud kms keys versions disable KEY_VERSION --keyring \
KEY_RING --location LOCATION --key KEY_NAME
Replace the following:
KEY_VERSION : The version of the key that you want to
disable—for example, 1 .
KEY_RING : The name of the key ring—for example,
CHGWS_KEY_RING .
LOCATION : The location where you want to
disable—for example, us .
KEY_NAME : The name of the key—for example,
CHGWS_KEY .
Enable endpoints
If you've disabled a CHGWS endpoint by disabling all key
versions of the backing Cloud KMS key, then you can re-enable the
CHGWS endpoint. To re-enable the endpoint, enable all active
versions of the backing Cloud KMS key by using the following
gcloud CLI command:
For each Cloud KMS key version backing the endpoint, run the
following command:
gcloud kms keys versions enable KEY_VERSION --keyring \
KEY_RING --location LOCATION --key KEY_NAME
Replace the following:
KEY_VERSION : The version of the key that you want to
enable—for example, 1 .
KEY_RING : The name of the key ring—for example,
CHGWS_KEY_RING .
LOCATION : The location where you want to
enable—for example, us .
KEY_NAME : The name of the key—for example,
CHGWS_KEY .
What's next
Learn more about Cloud HSM for Google Workspace .
Learn more about Cloud Key Management Service .
Learn how to
add and manage key services for client-side encryption .
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
