---
title: "Method: projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary\
  \ \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary
  title: "Method: projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary\
    \ \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary | Cloud Key Management Service | Google Cloud Documentation
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
Cloud KMS
All APIs & references
API client libraries
PKCS #11 library
Overview
Use OpenSSL
Apache TLS termination
NGINX TLS offload
Use pkcs11-tool
Sign Windows artifacts with Jsign
Windows CNG Provider
Overview
Signing Windows artifacts
Permissions and roles
Cloud EKM error reference
Overview
KMS REST reference
Overview
v1
REST Resources
folders
Overview
getAutokeyConfig
getKajPolicyConfig
updateAutokeyConfig
updateKajPolicyConfig
organizations
Overview
getKajPolicyConfig
updateKajPolicyConfig
projects
Overview
getAutokeyConfig
getKajPolicyConfig
showEffectiveAutokeyConfig
showEffectiveKeyAccessJustificationsEnrollmentConfig
showEffectiveKeyAccessJustificationsPolicyConfig
updateAutokeyConfig
updateKajPolicyConfig
projects.locations
Overview
generateRandomBytes
get
getEkmConfig
list
updateEkmConfig
projects.locations.ekmConfig
Overview
getIamPolicy
setIamPolicy
testIamPermissions
projects.locations.ekmConnections
Overview
create
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
verifyConnectivity
projects.locations.keyHandles
Overview
create
get
list
projects.locations.keyRings
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects.locations.keyRings.cryptoKeys
Overview
create
decrypt
delete
encrypt
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
updatePrimaryVersion
projects.locations.keyRings.cryptoKeys.cryptoKeyVersions
Overview
asymmetricDecrypt
asymmetricSign
create
decapsulate
delete
destroy
get
getPublicKey
import
list
macSign
macVerify
patch
rawDecrypt
rawEncrypt
restore
projects.locations.keyRings.importJobs
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects.locations.operations
Overview
get
projects.locations.retiredResources
Overview
get
list
projects.locations.singleTenantHsmInstances
Overview
create
get
list
projects.locations.singleTenantHsmInstances.proposals
Overview
approve
create
delete
execute
get
list
Types
AutokeyConfig
CryptoKeyVersionAlgorithm
CryptoKeyVersionView
EkmConfig
GetPolicyOptions
KeyAccessJustificationsPolicyConfig
KeyOperationAttestation
Location
Policy
ProtectionLevel
TestIamPermissionsResponse
KMS Inventory REST reference
Overview
v1
REST Resources
organizations. protected Resources
Overview
search
projects. crypto Keys
Overview
list
projects. locations. key Rings. crypto Keys
Overview
get Protected Resources Summary
KMS RPC reference
Overview
google.cloud.kms.v1
google.cloud.location
google.iam.v1
google.longrunning
google.rpc
google.type
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
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Method: projects. locations. key Rings. crypto Keys. get Protected Resources Summary
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it
HTTP request
Path parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey . Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.
HTTP request
GET https://kmsinventory.googleapis.com/v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/**}/protectedResourcesSummary
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name of the CryptoKey .
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeys.get
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Aggregate information about the resources protected by a Cloud KMS key in the same Cloud organization as the key.
JSON representation
{
"name" : string ,
"resourceCount" : string ,
"projectCount" : integer ,
"resourceTypes" : {
string : string ,
...
} ,
"cloudProducts" : {
string : string ,
...
} ,
"locations" : {
string : string ,
...
}
}
Fields
name
string
The full name of the ProtectedResourcesSummary resource. Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary
resourceCount
string ( int64 format)
The total number of protected resources in the same Cloud organization as the key.
projectCount
integer
The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key.
resourceTypes
map (key: string, value: string ( int64 format))
The number of resources protected by the key grouped by resource type.
cloudProducts
map (key: string, value: string ( int64 format))
The number of resources protected by the key grouped by Cloud product.
locations
map (key: string, value: string ( int64 format))
The number of resources protected by the key grouped by region.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
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
