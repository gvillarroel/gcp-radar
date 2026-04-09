---
title: "REST Resource: projects.locations.keyRings.cryptoKeys \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys
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
get Iam Policy
list
patch
set Iam Policy
test Iam Permissions
update Primary Version
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
Resource: CryptoKey
CryptoKeyPurpose
CryptoKeyVersionTemplate
KeyAccessJustificationsPolicy
AccessReason
Methods create
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
CryptoKeyPurpose
CryptoKeyVersionTemplate
KeyAccessJustificationsPolicy
AccessReason
Methods create
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
Resource: CryptoKey
JSON representation
CryptoKeyPurpose
CryptoKeyVersionTemplate
JSON representation
KeyAccessJustificationsPolicy
JSON representation
AccessReason
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
"keyAccessJustificationsPolicy" : {
object ( KeyAccessJustificationsPolicy )
} ,
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
Output only. A copy of the "primary" CryptoKeyVersion that will be used by cryptoKeys.encrypt when this CryptoKey is given in EncryptRequest.name .
The CryptoKey 's primary version can be updated via cryptoKeys.updatePrimaryVersion .
Keys with purpose ENCRYPT_DECRYPT may have a primary. For other keys, this field will be omitted.
purpose
enum ( CryptoKeyPurpose )
Immutable. The immutable purpose of this CryptoKey .
create Time
string ( Timestamp format)
Output only. The time at which this CryptoKey was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
nextRotationTime
string ( Timestamp format)
At nextRotationTime , the Key Management Service will automatically:
Create a new version of this CryptoKey .
Mark the new version as primary.
Key rotations performed manually via cryptoKeyVersions.create and cryptoKeys.updatePrimaryVersion do not affect nextRotationTime .
Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
versionTemplate
object ( CryptoKeyVersionTemplate )
A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either cryptoKeyVersions.create or auto-rotation are controlled by this template.
labels
map (key: string, value: string)
Labels with user-defined metadata. For more information, see Labeling Keys .
importOnly
boolean
Immutable. Whether this key may contain imported versions only.
destroyScheduledDuration
string ( Duration format)
Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED . If not specified at creation time, the default duration is 30 days.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
cryptoKeyBackend
string
Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC , with the resource name in the format projects/*/locations/*/ekmConnections/* . Only applicable if CryptoKeyVersions have a ProtectionLevel of HSM_SINGLE_TENANT , with the resource name in the format projects/*/locations/*/singleTenantHsmInstances/* . Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.
keyAccessJustificationsPolicy
object ( KeyAccessJustificationsPolicy )
Optional. The policy used for Key Access Justifications Policy Enforcement. If this field is present and this key is enrolled in Key Access Justifications Policy Enforcement, the policy will be evaluated in encrypt, decrypt, and sign operations, and the operation will fail if rejected by the policy. The policy is defined by specifying zero or more allowed justification codes. https://cloud.google.com/assured-workloads/key-access-justifications/docs/justification-codes By default, this field is absent, and all justification codes are allowed.
Union field rotation_schedule . Controls the rate of automatic rotation. rotation_schedule can be only one of the following:
rotationPeriod
string ( Duration format)
nextRotationTime will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
If rotationPeriod is set, nextRotationTime must also be set.
Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
CryptoKeyPurpose
CryptoKeyPurpose describes the cryptographic capabilities of a CryptoKey . A given key can only be used for the operations allowed by its purpose. For more information, see Key purposes .
Enums
CRYPTO_KEY_PURPOSE_UNSPECIFIED
Not specified.
ENCRYPT_DECRYPT
CryptoKeys with this purpose may be used with cryptoKeys.encrypt and cryptoKeys.decrypt .
ASYMMETRIC_SIGN
CryptoKeys with this purpose may be used with cryptoKeyVersions.asymmetricSign and cryptoKeyVersions.getPublicKey .
ASYMMETRIC_DECRYPT
CryptoKeys with this purpose may be used with cryptoKeyVersions.asymmetricDecrypt and cryptoKeyVersions.getPublicKey .
RAW_ENCRYPT_DECRYPT
CryptoKeys with this purpose may be used with cryptoKeyVersions.rawEncrypt and cryptoKeyVersions.rawDecrypt . This purpose is meant to be used for interoperable symmetric encryption and does not support automatic CryptoKey rotation.
MAC
CryptoKeys with this purpose may be used with cryptoKeyVersions.macSign .
KEY_ENCAPSULATION
CryptoKeys with this purpose may be used with cryptoKeyVersions.getPublicKey and cryptoKeyVersions.decapsulate .
CryptoKeyVersionTemplate
A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion , either manually with cryptoKeyVersions.create or automatically as a result of auto-rotation.
JSON representation
{
"protectionLevel" : enum ( ProtectionLevel ) ,
"algorithm" : enum ( CryptoKeyVersionAlgorithm )
}
Fields
protectionLevel
enum ( ProtectionLevel )
ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE .
algorithm
enum ( CryptoKeyVersionAlgorithm )
Required. Algorithm to use when creating a CryptoKeyVersion based on this template.
For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT .
KeyAccessJustificationsPolicy
A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey .
JSON representation
{
"allowedAccessReasons" : [
enum ( AccessReason )
]
}
Fields
allowedAccessReasons[]
enum ( AccessReason )
The list of allowed reasons for access to a CryptoKey . Zero allowed access reasons means all encrypt, decrypt, and sign operations for the CryptoKey associated with this policy will fail.
AccessReason
Describes the reason for a data access. Please refer to https://cloud.google.com/assured-workloads/key-access-justifications/docs/justification-codes for the detailed semantic meaning of justification reason codes.
Enums
REASON_UNSPECIFIED
Unspecified access reason.
CUSTOMER_INITIATED_SUPPORT
Customer-initiated support.
GOOGLE_INITIATED_SERVICE
Google-initiated access for system management and troubleshooting.
THIRD_PARTY_DATA_REQUEST
Google-initiated access in response to a legal request or legal process.
GOOGLE_INITIATED_REVIEW
Google-initiated access for security, fraud, abuse, or compliance purposes.
CUSTOMER_INITIATED_ACCESS
Customer uses their account to perform any access to their own data which their IAM policy authorizes.
GOOGLE_INITIATED_SYSTEM_OPERATION
Google systems access customer data to help optimize the structure of the data or quality for future uses by the customer.
REASON_NOT_EXPECTED
No reason is expected for this key request.
MODIFIED_CUSTOMER_INITIATED_ACCESS
Deprecated: This code is no longer generated by Google Cloud. The GOOGLE_RESPONSE_TO_PRODUCTION_ALERT justification codes available in both Key Access Justifications and Access Transparency logs provide customer-visible signals of emergency access in more precise contexts.
Customer uses their account to perform any access to their own data which their IAM policy authorizes, and one of the following is true:
A Google administrator has reset the root-access account associated with the user's organization within the past 7 days.
A Google-initiated emergency access operation has interacted with a resource in the same project or folder as the currently accessed resource within the past 7 days.
This item is deprecated!
MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION
Deprecated: This code is no longer generated by Google Cloud. The GOOGLE_RESPONSE_TO_PRODUCTION_ALERT justification codes available in both Key Access Justifications and Access Transparency logs provide customer-visible signals of emergency access in more precise contexts.
Google systems access customer data to help optimize the structure of the data or quality for future uses by the customer, and one of the following is true:
A Google administrator has reset the root-access account associated with the user's organization within the past 7 days.
A Google-initiated emergency access operation has interacted with a resource in the same project or folder as the currently accessed resource within the past 7 days.
This item is deprecated!
GOOGLE_RESPONSE_TO_PRODUCTION_ALERT
Google-initiated access to maintain system reliability.
CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING
One of the following operations is being executed while simultaneously encountering an internal technical issue which prevented a more precise justification code from being generated:
Your account has been used to perform any access to your own data which your IAM policy authorizes.
An automated Google system operates on encrypted customer data which your IAM policy authorizes.
Customer-initiated Google support access.
Google-initiated support access to protect system reliability.
Methods
create
Create a new CryptoKey within a KeyRing .
decrypt
Decrypts data that was protected by Encrypt .
delete
Permanently deletes the given CryptoKey .
encrypt
Encrypts data, so that it can only be recovered by a call to Decrypt .
get
Returns metadata for a given CryptoKey , as well as its primary CryptoKeyVersion .
getIamPolicy
Gets the access control policy for a resource.
list
Lists CryptoKeys .
patch
Update a CryptoKey .
setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
Returns permissions that a caller has on the specified resource.
updatePrimaryVersion
Update the version of a CryptoKey that will be used in Encrypt .
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
