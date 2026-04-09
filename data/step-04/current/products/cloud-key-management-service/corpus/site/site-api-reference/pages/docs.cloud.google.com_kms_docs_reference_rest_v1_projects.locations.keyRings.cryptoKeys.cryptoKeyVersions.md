---
title: "REST Resource: projects.locations.keyRings.cryptoKeys.cryptoKeyVersions \_\
  |\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions
  title: "REST Resource: projects.locations.keyRings.cryptoKeys.cryptoKeyVersions\
    \ \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.keyRings.cryptoKeys.cryptoKeyVersions | Cloud Key Management Service | Google Cloud Documentation
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
asymmetric Decrypt
asymmetric Sign
create
decapsulate
delete
destroy
get
get Public Key
import
list
mac Sign
mac Verify
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
Resource: CryptoKeyVersion CryptoKeyVersionState
ExternalProtectionLevelOptions
Methods asymmetricDecrypt
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
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
REST Resource: projects. locations. key Rings. crypto Keys. crypto Key Versions
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: CryptoKeyVersion CryptoKeyVersionState
ExternalProtectionLevelOptions
Methods asymmetricDecrypt
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
Resource: CryptoKeyVersion
JSON representation
CryptoKeyVersionState
ExternalProtectionLevelOptions
JSON representation
Methods
Resource: Crypto Key Version
A CryptoKeyVersion represents an individual cryptographic key, and the associated key material.
An ENABLED version can be used for cryptographic operations.
For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"state" : enum ( CryptoKeyVersionState ) ,
"protectionLevel" : enum ( ProtectionLevel ) ,
"algorithm" : enum ( CryptoKeyVersionAlgorithm ) ,
"attestation" : {
object ( KeyOperationAttestation )
} ,
"createTime" : string ,
"generateTime" : string ,
"destroyTime" : string ,
"destroyEventTime" : string ,
"importJob" : string ,
"importTime" : string ,
"importFailureReason" : string ,
"generationFailureReason" : string ,
"externalDestructionFailureReason" : string ,
"externalProtectionLevelOptions" : {
object ( ExternalProtectionLevelOptions )
} ,
"reimportEligible" : boolean
}
Fields
name
string
Output only. The resource name for this CryptoKeyVersion in the format projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/* .
state
enum ( CryptoKeyVersionState )
The current state of the CryptoKeyVersion .
protection Level
enum ( ProtectionLevel )
Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion .
algorithm
enum ( CryptoKeyVersionAlgorithm )
Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
attestation
object ( KeyOperationAttestation )
Output only. Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only provided for key versions with protectionLevel HSM .
createTime
string ( Timestamp format)
Output only. The time at which this CryptoKeyVersion was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
generateTime
string ( Timestamp format)
Output only. The time this CryptoKeyVersion 's key material was generated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
destroyTime
string ( Timestamp format)
Output only. The time this CryptoKeyVersion 's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
destroyEventTime
string ( Timestamp format)
Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
importJob
string
Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion . Only present if the underlying key material was imported.
importTime
string ( Timestamp format)
Output only. The time at which this CryptoKeyVersion 's key material was most recently imported.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
importFailureReason
string
Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED .
generationFailureReason
string
Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED .
externalDestructionFailureReason
string
Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED .
externalProtectionLevelOptions
object ( ExternalProtectionLevelOptions )
ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
reimportEligible
boolean
Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version .
CryptoKeyVersionState
The state of a CryptoKeyVersion , indicating if it can be used.
Enums
CRYPTO_KEY_VERSION_STATE_UNSPECIFIED
Not specified.
PENDING_GENERATION
This version is still being generated. It may not be used, enabled, disabled, or destroyed yet. Cloud KMS will automatically mark this version ENABLED as soon as the version is ready.
ENABLED
This version may be used for cryptographic operations.
DISABLED
This version may not be used, but the key material is still available, and the version can be placed back into the ENABLED state.
DESTROYED
The key material of this version is destroyed and no longer stored. This version may only become ENABLED again if this version is reimportEligible and the original key material is reimported with a call to KeyManagementService.ImportCryptoKeyVersion .
DESTROY_SCHEDULED
This version is scheduled for destruction, and will be destroyed soon. Call cryptoKeyVersions.restore to put it back into the DISABLED state.
PENDING_IMPORT
This version is still being imported. It may not be used, enabled, disabled, or destroyed yet. Cloud KMS will automatically mark this version ENABLED as soon as the version is ready.
IMPORT_FAILED
This version was not imported successfully. It may not be used, enabled, disabled, or destroyed. The submitted key material has been discarded. Additional details can be found in CryptoKeyVersion.import_failure_reason .
GENERATION_FAILED
This version was not generated successfully. It may not be used, enabled, disabled, or destroyed. Additional details can be found in CryptoKeyVersion.generation_failure_reason .
PENDING_EXTERNAL_DESTRUCTION
This version was destroyed, and it may not be used or enabled again. Cloud KMS is waiting for the corresponding key material residing in an external key manager to be destroyed.
EXTERNAL_DESTRUCTION_FAILED
This version was destroyed, and it may not be used or enabled again. However, Cloud KMS could not confirm that the corresponding key material residing in an external key manager was destroyed. Additional details can be found in CryptoKeyVersion.external_destruction_failure_reason .
ExternalProtectionLevelOptions
ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
JSON representation
{
"externalKeyUri" : string ,
"ekmConnectionKeyPath" : string
}
Fields
externalKeyUri
string
The URI for an external resource that this CryptoKeyVersion represents.
ekmConnectionKeyPath
string
The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection .
Methods
asymmetricDecrypt
Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
asymmetricSign
Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey .
create
Create a new CryptoKeyVersion in a CryptoKey .
decapsulate
Decapsulates data that was encapsulated with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose KEY_ENCAPSULATION.
delete
Permanently deletes the given CryptoKeyVersion .
destroy
Schedule a CryptoKeyVersion for destruction.
get
Returns metadata for a given CryptoKeyVersion .
getPublicKey
Returns the public key for the given CryptoKeyVersion .
import
Import wrapped key material into a CryptoKeyVersion .
list
Lists CryptoKeyVersions .
macSign
Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
macVerify
Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
patch
Update a CryptoKeyVersion 's metadata.
rawDecrypt
Decrypts data that was originally encrypted using a raw cryptographic mechanism.
rawEncrypt
Encrypts data using portable cryptographic primitives.
restore
Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-02 UTC."],[],[]]
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
