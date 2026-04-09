---
title: "REST Resource: projects.locations.keyRings.cryptoKeys \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys
  title: "REST Resource: projects.locations.keyRings.cryptoKeys \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.keyRings.cryptoKeys | Cloud Key Management Service | Google Cloud Documentation
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
Resource: CryptoKey
Methods getProtectedResourcesSummary
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
REST Resource: projects. locations. key Rings. crypto Keys
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: CryptoKey
Methods getProtectedResourcesSummary
Resource: CryptoKey
JSON representation
Methods
Resource: Crypto Key
A CryptoKey represents a logical key that can be used for cryptographic operations.
A CryptoKey is made up of zero or more versions , which represent the actual key material used in cryptographic operations.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"primary" : {
object ( CryptoKeyVersion )
} ,
"purpose" : enum ( CryptoKeyPurpose ) ,
"createTime" : string ,
"nextRotationTime" : string ,
"versionTemplate" : {
object ( CryptoKeyVersionTemplate )
} ,
"labels" : {
string : string ,
...
} ,
"importOnly" : boolean ,
"destroyScheduledDuration" : string ,
"cryptoKeyBackend" : string ,
// Union field rotation_schedule can be only one of the following:
"rotationPeriod" : string
// End of list of possible types for union field rotation_schedule .
}
Fields
name
string
Output only. The resource name for this CryptoKey in the format projects/*/locations/*/keyRings/*/cryptoKeys/* .
primary
object ( CryptoKeyVersion )
Output only. A copy of the "primary" CryptoKeyVersion that will be used by [Encrypt][KeyManagementService.Encrypt] when this CryptoKey is given in [EncryptRequest.name][].
The CryptoKey 's primary version can be updated via [UpdateCryptoKeyPrimaryVersion][KeyManagementService.UpdateCryptoKeyPrimaryVersion].
Keys with purpose ENCRYPT_DECRYPT may have a primary. For other keys, this field will be omitted.
purpose
enum ( CryptoKeyPurpose )
Immutable. The immutable purpose of this CryptoKey .
create Time
string ( Timestamp format)
Output only. The time at which this CryptoKey was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
nextRotationTime
string ( Timestamp format)
At nextRotationTime , the Key Management Service will automatically:
Create a new version of this CryptoKey .
Mark the new version as primary.
Key rotations performed manually via [CreateCryptoKeyVersion][KeyManagementService.CreateCryptoKeyVersion] and [UpdateCryptoKeyPrimaryVersion][KeyManagementService.UpdateCryptoKeyPrimaryVersion] do not affect nextRotationTime .
Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
versionTemplate
object ( CryptoKeyVersionTemplate )
A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either [CreateCryptoKeyVersion][KeyManagementService.CreateCryptoKeyVersion] or auto-rotation are controlled by this template.
labels
map (key: string, value: string)
Labels with user-defined metadata. For more information, see Labeling Keys .
importOnly
boolean
Immutable. Whether this key may contain imported versions only.
destroyScheduledDuration
string ( Duration format)
Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED . If not specified at creation time, the default duration is 24 hours.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
cryptoKeyBackend
string
Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of [EXTERNAL_VPC][CryptoKeyVersion.ProtectionLevel.EXTERNAL_VPC], with the resource name in the format projects/*/locations/*/ekmConnections/* . Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.
Union field rotation_schedule . Controls the rate of automatic rotation. rotation_schedule can be only one of the following:
rotationPeriod
string ( Duration format)
nextRotationTime will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
If rotationPeriod is set, nextRotationTime must also be set.
Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Methods
getProtectedResourcesSummary
Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey .
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
