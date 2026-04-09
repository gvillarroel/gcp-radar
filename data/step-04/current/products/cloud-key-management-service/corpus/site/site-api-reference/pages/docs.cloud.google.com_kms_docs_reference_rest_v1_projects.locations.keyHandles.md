---
title: "REST Resource: projects.locations.keyHandles \_|\_ Cloud Key Management Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyHandles
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyHandles
  title: "REST Resource: projects.locations.keyHandles \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.keyHandles | Cloud Key Management Service | Google Cloud Documentation
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
projects. locations
Overview
generateRandomBytes
get
getEkmConfig
list
updateEkmConfig
projects. locations. ekm Config
Overview
getIamPolicy
setIamPolicy
testIamPermissions
projects. locations. ekm Connections
Overview
create
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
verifyConnectivity
projects. locations. key Handles
Overview
create
get
list
projects. locations. key Rings
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects. locations. key Rings. crypto Keys
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
projects. locations. key Rings. crypto Keys. crypto Key Versions
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
projects. locations. key Rings. import Jobs
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects. locations. operations
Overview
get
projects. locations. retired Resources
Overview
get
list
projects. locations. single Tenant Hsm Instances
Overview
create
get
list
projects. locations. single Tenant Hsm Instances. proposals
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
organizations.protectedResources
Overview
search
projects.cryptoKeys
Overview
list
projects.locations.keyRings.cryptoKeys
Overview
getProtectedResourcesSummary
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
Resource: KeyHandle
Methods create
get
list
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
REST Resource: projects. locations. key Handles
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: KeyHandle
Methods create
get
list
Resource: KeyHandle
JSON representation
Methods
Resource: Key Handle
Resource-oriented representation of a request to Cloud KMS Autokey and the resulting provisioning of a CryptoKey .
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"kmsKey" : string ,
"resourceTypeSelector" : string
}
Fields
name
string
Identifier. Name of the KeyHandle resource, e.g. projects/{PROJECT_ID}/locations/{LOCATION}/keyHandles/{KEY_HANDLE_ID} .
kms Key
string
Output only. Name of a CryptoKey that has been provisioned for Customer Managed Encryption Key (CMEK) use in the KeyHandle project and location for the requested resource type. The CryptoKey project will reflect the value configured in the AutokeyConfig on the resource project's ancestor folder at the time of the KeyHandle creation. If more than one ancestor folder has a configured AutokeyConfig , the nearest of these configurations is used.
resource Type Selector
string
Required. Indicates the resource type that the resulting CryptoKey is meant to protect, e.g. {SERVICE}.googleapis.com/{TYPE} . See documentation for supported resource types.
Methods
create
Creates a new Key Handle , triggering the provisioning of a new Crypto Key for CMEK use with the given resource type in the configured key project and the same location.
get
Returns the Key Handle .
list
Lists Key Handles .
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
