---
title: "View keys by project \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/view-keys-by-project
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/view-keys-by-project
  title: "View keys by project \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

View keys by project | Cloud Key Management Service | Google Cloud Documentation
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
Before you begin Enable APIs
Required roles
View key rings
View keys Key details
Limitations
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
View keys by project
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Enable APIs
Required roles
View key rings
View keys Key details
Limitations
This page shows you how to view key rings and keys in your Google Cloud
project resource .
Before you begin
Before you can view key rings and keys, complete the setup steps described
in this section.
Enable APIs
To view key rings and keys using an API, enable the Cloud KMS
Inventory API.
Enable the API
Required roles
To get the permissions that
you need to view keys,
ask your administrator to grant you the
Cloud KMS Viewer ( roles/cloudkms.viewer )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to view keys. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to view keys:
cloudkms.keyRings.list
cloudkms.cryptoKeys.list
cloudkms.locations.list
resourcemanager.projects.get
You might also be able to get
these permissions
with custom roles or
other predefined roles .
View key rings
Console
More
In the Google Cloud console, go to the Key Rings page.
Go to Key Rings
Optional: To filter your list of key rings, enter your search terms in
the filter_list Filter box and
then press Enter.
Optional: To sort the list by the values in a column, click the
column heading.
While viewing your key rings, you can select a key ring to view details about
the associated keys and import jobs.
View keys
Use the Google Cloud console to view the keys created in your project resource.
Console gcloud CLI API
More
In the Google Cloud console, go to the Key Inventory page.
Go to Key Inventory
Optional: To filter your list of keys, enter your search terms in the
filter_list Filter box and then
press Enter.
Optional: To sort the list by the values in a column, click the
column heading.
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms inventory list-keys --project PROJECT_ID
Replace PROJECT_ID with the name of the project for which you
want to view the list of keys.
For information on all flags and possible values, run the command with the
--help flag.
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
curl "https://kmsinventory.googleapis.com/v1/projects/ PROJECT_ID /cryptoKeys"
--request "GET" \
--header "x-goog-user-project: CALLING_PROJECT_ID "
--header "Content-Type: application/json" \
--header "Authorization: Bearer TOKEN "
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
CALLING_PROJECT_ID : the ID of the project from which
you are calling the KMS Inventory API.
This method returns up to 1,000 keys. To see fewer results, you can specify
the pageSize query parameter. To get the next page of results, you can
specify the pageToken parameter. Pages after the first can take longer to
load. For more information, see Method: projects.cryptoKeys.list .
While viewing your keys, you can select a key to view details about the key,
including its associated key versions.
Key details
The key inventory provides comprehensive information about the cryptographic
keys in your project. Properties in the key inventory include the following:
Key name : The name of the key.
Status : The current key status based on the state of the primary
key version. This field applies to symmetric keys only.
Available : The primary key version is enabled. The key is available
for use to encrypt and decrypt data.
Not available : The primary key version is disabled or empty. The key
isn't available for use to encrypt data.
Available in GCP : For externally managed keys, the key (not
necessarily the externally managed key itself) is available for use.
Key ring : Name of the parent key ring.
Location : Location where key material resides.
Current rotation : The date and time the key was last rotated. This field
shows when the current key version was created.
Rotation frequency : The current rotation frequency of the key.
Next rotation : The date of the next scheduled key rotation. A new key
version will be created automatically on this date.
Protection level : The protection level of the key, for example, HSM
or Software.
EKM via VPC connection : For external keys accessed over VPC, the name of
the EKM via VPC connection that the key uses. This field is hidden by
default and is blank for keys with protection levels other than External
via VPC .
Purpose : The scenario in which the key may be used.
Labels : Labels applied on the key.
Limitations
The Key ring tab can display at most 1,000 resources (including key
rings, keys, and key versions) per location . To view key rings for a
project and location with more than 1,000 resources, use the keyRings.list
method in the Cloud KMS API.
The Key inventory tab can display at most 50,000 resources (including
key rings, keys, and key versions) per project. To view keys for a project
with more than 50,000 resources, use the
keyRings.cryptoKeys.list method in the Cloud KMS API or the
projects.cryptoKeys.list method in the Cloud Key Management Service Inventory API.
When you use the keyRings.cryptoKeys.list method in the
Cloud KMS API or the projects.cryptoKeys.list method in the
Cloud Key Management Service Inventory API in projects with more than 1,000 keys, subsequent
pages can take longer to load than the first.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
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
