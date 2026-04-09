---
title: "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory
  title: "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud KMS Inventory Service audit logging | Cloud Key Management Service | Google Cloud Documentation
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
Service name
Methods by permission type
API interface audit logs google.cloud.kms.inventory.v1.KeyDashboardService
google.cloud.kms.inventory.v1.KeyTrackingService
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Cloud KMS Inventory Service audit logging
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Service name
Methods by permission type
API interface audit logs google.cloud.kms.inventory.v1.KeyDashboardService
google.cloud.kms.inventory.v1.KeyTrackingService
This document describes audit logging for Cloud KMS Inventory Service. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud KMS Inventory Service audit logs use the service name kmsinventory.googleapis.com .
Filter for this service:
See more code actions.
Light code theme
Dark code theme
protoPayload . serviceName = "kmsinventory.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud KMS Inventory Service generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
API methods in the following list that are marked with (LRO) are long-running operations (LROs).
These methods usually generate two audit log entries: one when the operation starts and
another when it ends. For more information see Audit logs for long-running operations .
Permission type
Methods
OTHER
google. cloud. kms. inventory. v1. Key Dashboard Service. List Crypto Keys : To enable this log, enable ADMIN_ READ under the service cloudkms. googleapis. com . google. cloud. kms. inventory. v1. Key Tracking Service. Get Protected Resources Summary : To enable this log, enable ADMIN_ READ under the service cloudkms. googleapis. com . google. cloud. kms. inventory. v1. Key Tracking Service. Search Protected Resources : To enable this log, enable ADMIN_ READ under the service cloudkms. googleapis. com .
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud KMS Inventory Service.
google. cloud. kms. inventory. v1. Key Dashboard Service
The following audit logs are associated with methods belonging to
google.cloud.kms.inventory.v1.KeyDashboardService .
ListCryptoKeys
Method : google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys
Audit log type : Data access
Permissions : cloudkms.cryptoKeys.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys"
google.cloud.kms.inventory.v1.KeyTrackingService
The following audit logs are associated with methods belonging to
google.cloud.kms.inventory.v1.KeyTrackingService .
GetProtectedResourcesSummary
Method : google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary
Audit log type : Data access
Permissions : cloudkms.cryptoKeys.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary"
SearchProtectedResources
Method : google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources
Audit log type : Data access
Permissions : cloudkms.cryptoKeys.get - ADMIN_READ
cloudkms.protectedResources.search - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources"
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
