---
title: "Set up Cloud EKM via the internet \_|\_ Cloud Key Management Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/set-up-ekm-internet
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/set-up-ekm-internet
  title: "Set up Cloud EKM via the internet \_|\_ Cloud Key Management Service \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Set up Cloud EKM via the internet | Cloud Key Management Service | Google Cloud Documentation
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
Before you begin Create a new project
Enable Cloud KMS
Prepare the external key management partner system
Ensure gcloud CLI is up to date
Troubleshooting errors
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Set up Cloud EKM via the internet
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Create a new project
Enable Cloud KMS
Prepare the external key management partner system
Ensure gcloud CLI is up to date
Troubleshooting errors
What's next
This topic is about using Cloud External Key Manager (Cloud EKM) to create and manage external keys
accessed via the internet.
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
Prepare the external key management partner system
In the external key management partner system, grant the Google Cloud service account
access to use the external key. Treat the service account as an email address.
Partners may use different terminology than that used in this topic.
Ensure gcloud CLI is up to date
If you're going to use the Google Cloud CLI, ensure that it's up-to-date with
the following command:
gcloud
More
gcloud components update
Troubleshooting errors
If you experience an error when creating or using a Cloud EKM key, an
error is logged. For information about troubleshooting Cloud EKM
errors, see the Cloud EKM error reference .
What's next
Create an external key
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
