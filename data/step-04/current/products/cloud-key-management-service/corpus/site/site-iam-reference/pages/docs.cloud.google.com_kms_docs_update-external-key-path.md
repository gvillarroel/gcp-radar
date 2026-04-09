---
title: "Update external key reference \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/update-external-key-path
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/update-external-key-path
  title: "Update external key reference \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Update external key reference | Cloud Key Management Service | Google Cloud Documentation
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
Required roles
Update the URI for a key version without rotation
Update the key path for a key version without rotation
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Update external key reference
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Required roles
Update the URI for a key version without rotation
Update the key path for a key version without rotation
This page shows you how to update the external key reference for a
Cloud EKM key without rotating the key. The new key reference must
point to the same key material as the current key reference. If the key material
has been rotated in the external key management partner system, you must rotate the
key instead.
Use the instructions on this page if your external key management partner system has changed the
key reference for an existing key. For example, the key reference can
change as a result of a change to the hostname of the external key management partner or a
change in their key reference structure.
Required roles
To get the permission that
you need to update an external key reference,
ask your administrator to grant you the
Cloud KMS Admin ( roles/cloudkms.admin )
IAM role on your key.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
cloudkms.cryptoKeyVersions.update
permission,
which is required to
update an external key reference.
You might also be able to get
this permission
with custom roles or
other predefined roles .
Update the URI for a key version without rotation
To update the key reference for a Cloud EKM key that you use over the
internet, complete the following steps:
Console gcloud CLI
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Select the key ring, and then select the key and version.
Click more_vert
More , and then click View key URI .
Click Update key URI .
Enter the new key URI, and then click Save .
To update the URI for the key version, use the gcloud kms versions update
command:
gcloud kms keys versions update KEY_VERSION \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--external-key-uri NEW_KEY_URI
Replace the following:
KEY_VERSION : the key version number.
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
NEW_KEY_URI : the new URI for the existing external
key material.
Update the key path for a key version without rotation
To update the key reference for a Cloud EKM key that you use over a
VPC network, complete the following steps:
Console gcloud CLI
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Select the key ring, and then select the key and version.
Click More more_vert
then View key path .
Click Update key path .
Enter the new key path, then click Save .
To update the key path of the key version, use the gcloud kms versions
update command:
gcloud kms keys versions update KEY_VERSION \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--ekm-connection-key-path NEW_KEY_PATH
Replace the following:
KEY_VERSION : the key version number.
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
NEW_KEY_PATH : the new path for the existing external
key material.
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
