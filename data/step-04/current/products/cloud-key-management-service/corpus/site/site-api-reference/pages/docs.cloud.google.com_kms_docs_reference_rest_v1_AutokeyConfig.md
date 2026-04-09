---
title: "AutokeyConfig \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/AutokeyConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/AutokeyConfig
  title: "AutokeyConfig \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

AutokeyConfig | Cloud Key Management Service | Google Cloud Documentation
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
Autokey Config
Crypto Key Version Algorithm
Crypto Key Version View
Ekm Config
Get Policy Options
Key Access Justifications Policy Config
Key Operation Attestation
Location
Policy
Protection Level
Test Iam Permissions Response
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
State
KeyProjectResolutionMode
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Autokey Config
Stay organized with collections
Save and categorize content based on your preferences.
On this page
State
KeyProjectResolutionMode
JSON representation
State
KeyProjectResolutionMode
Cloud KMS Autokey configuration for a folder.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"keyProject" : string ,
"state" : enum ( State ) ,
"etag" : string ,
"keyProjectResolutionMode" : enum ( KeyProjectResolutionMode )
}
Fields
name
string
Identifier. Name of the AutokeyConfig resource, e.g. folders/{FOLDER_NUMBER}/autokeyConfig or projects/{PROJECT_NUMBER}/autokeyConfig .
key Project
string
Optional. Name of the key project, e.g. projects/{PROJECT_ID} or projects/{PROJECT_NUMBER} , where Cloud KMS Autokey will provision a new CryptoKey when a KeyHandle is created. On folders.updateAutokeyConfig , the caller will require cloudkms.cryptoKeys.setIamPolicy permission on this key project. Once configured, for Cloud KMS Autokey to function properly, this key project must have the Cloud KMS API activated and the Cloud KMS Service Agent for this key project must be granted the cloudkms.admin role (or pertinent permissions). A request with an empty key project field will clear the configuration.
state
enum ( State )
Output only. The state for the AutokeyConfig.
etag
string
Optional. A checksum computed by the server based on the value of other fields. This may be sent on update requests to ensure that the client has an up-to-date value before proceeding. The request will be rejected with an ABORTED error on a mismatched etag.
key Project Resolution Mode
enum ( KeyProjectResolutionMode )
Optional. KeyProjectResolutionMode for the AutokeyConfig. Valid values are DEDICATED_KEY_PROJECT , RESOURCE_PROJECT , or DISABLED .
State
The states AutokeyConfig can be in.
Enums
STATE_ UNSPECIFIED
The state of the AutokeyConfig is unspecified.
ACTIVE
The AutokeyConfig is currently active.
KEY_ PROJECT_ DELETED
A previously configured key project has been deleted and the current AutokeyConfig is unusable.
UNINITIALIZED
The AutokeyConfig is not yet initialized or has been reset to its default uninitialized state.
KeyProjectResolutionMode
Defines the resolution mode enum for the key project. The KeyProjectResolutionMode determines the mechanism by which AutokeyConfig identifies a keyProject at its specific configuration node. This parameter also determines if Autokey can be used within this project or folder.
Enums
KEY_PROJECT_RESOLUTION_MODE_UNSPECIFIED
Default value. KeyProjectResolutionMode when not specified will act as DEDICATED_KEY_PROJECT .
DEDICATED_KEY_PROJECT
Keys are created in a dedicated project specified by keyProject .
RESOURCE_PROJECT
Keys are created in the same project as the resource requesting the key. The keyProject must not be set when this mode is used.
DISABLED
Disables the AutokeyConfig. When this mode is set, any AutokeyConfig from higher levels in the resource hierarchy are ignored for this resource and its descendants. This setting can be overridden by a more specific configuration at a lower level. For example, if Autokey is disabled on a folder, it can be re-enabled on a sub-folder or project within that folder by setting a different mode (e.g., DEDICATED_KEY_PROJECT or RESOURCE_PROJECT).
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-11 UTC."],[],[]]
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
