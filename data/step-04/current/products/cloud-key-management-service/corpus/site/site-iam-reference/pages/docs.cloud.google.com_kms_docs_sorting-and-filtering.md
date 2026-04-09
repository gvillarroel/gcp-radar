---
title: "Sorting and filtering list results \_|\_ Cloud Key Management Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/sorting-and-filtering
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/sorting-and-filtering
  title: "Sorting and filtering list results \_|\_ Cloud Key Management Service \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Sorting and filtering list results | Cloud Key Management Service | Google Cloud Documentation
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
Português – Brasil
中文 – 简体
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
Use g RPC
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
Filter syntax
Filterable fields
Sort-order syntax
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Sorting and filtering list results
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Filter syntax
Filterable fields
Sort-order syntax
Beta
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Cloud Key Management Service supports filtering and sorting results from the following
list operations.
keyRings.list
cryptoKeys.list
cryptoKeyVersions.list
importJobs.list
Support for sorting and filtering in a list operation is indicated by the
presence of filter and orderBy string fields in the list request body. Both
fields use a simple language for referring to the fields in the object that is
being sorted and/or filtered.
Filter syntax
The filter syntax consists of an expression on one or more fields of the objects
being filtered.
You can use the following expression operators.
Operator
Description
=
Equality.
>
Greater than.
<
Less than.
=>
Greater than or equal to.
<=
Less than or equal to.
!= - NOT
Inequality. The following are equivalent: name != "quickstart" -name="quickstart" NOT name = "quickstart"
:
Containment. This is a case-insensitive substring match. As an example, name: "cloud" filters on resources that contain cloud (case-insensitive) in the resource name.
AND
Logical AND. A space is equivalent to AND , so the following are equivalent: name: "cloud" AND name: "kms" name: "cloud" name: "kms"
OR
Logical OR.
AND and OR operators are accepted at the same grouping level. OR takes
precedence over AND . You can use parentheses to override default precedence.
When filtering on time values, encode the time as a string in the
RFC 3399 format, such as
2019-06-20T01:30:15Z .
When accessing a subfield, use dot syntax. For example, the CryptoKey
resource contains the primary field. You can filter CryptoKey results on the
subfield primary.algorithm for a specific algorithm:
primary.algorithm=RSA_SIGN_PSS_2048_SHA256
Use the dot syntax for a label , and any other map type:
labels.team=alpha
A quoted string is interpreted as a single value rather than a sequence of
values.
Filterable fields
You can filter on any field in the objects being returned.
List method
Link to filterable fields
keyRings.list
KeyRing fields
cryptoKeys.list
CryptoKey fields
cryptoKeyVersions.list
CryptoKeyVersion fields
importJobs.list
ImportJob fields
Sort-order syntax
You can sort results by the resource's name field on the objects. The following shows
the supported sort-order values for the orderBy field.
Value
Description
'' (empty string)
Results are sorted in the default order.
'name'
Results are sorted in ascending order by the resource's name field.
'name desc'
Results are sorted in descending order by the resource's name field.
Note: To find the primary key version, do not attempt to sort for the version
with the newest creation date. There is no guarantee that the primary version
is the newest version or that the newest version is the primary version.
Instead, query using the primary field . Note: If you sort CryptoKeyVersion resources by name , they are sorted
numerically by the version number.
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
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
