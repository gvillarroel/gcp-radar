---
title: "REST Resource: projects.locations.keyRings.importJobs \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.importJobs
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.importJobs
  title: "REST Resource: projects.locations.keyRings.importJobs \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.keyRings.importJobs | Cloud Key Management Service | Google Cloud Documentation
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
get Iam Policy
list
set Iam Policy
test Iam Permissions
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
Resource: ImportJob
ImportMethod
ImportJobState
WrappingPublicKey
Methods create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
REST Resource: projects. locations. key Rings. import Jobs
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: ImportJob
ImportMethod
ImportJobState
WrappingPublicKey
Methods create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
Resource: ImportJob
JSON representation
ImportMethod
ImportJobState
WrappingPublicKey
JSON representation
Methods
Resource: Import Job
An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS.
When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of importMethod . When the wrapping key generation is complete, the state will be set to ACTIVE and the publicKey can be fetched. The fetched public key can then be used to wrap your pre-existing key material.
Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling cryptoKeyVersions.import . Multiple CryptoKeyVersions can be imported with a single ImportJob . Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key.
An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob 's public key.
For more information, see Importing a key .
JSON representation
{
"name" : string ,
"importMethod" : enum ( ImportMethod ) ,
"protectionLevel" : enum ( ProtectionLevel ) ,
"createTime" : string ,
"generateTime" : string ,
"expireTime" : string ,
"expireEventTime" : string ,
"state" : enum ( ImportJobState ) ,
"publicKey" : {
object ( WrappingPublicKey )
} ,
"attestation" : {
object ( KeyOperationAttestation )
} ,
"cryptoKeyBackend" : string
}
Fields
name
string
Output only. The resource name for this ImportJob in the format projects/*/locations/*/keyRings/*/importJobs/* .
import Method
enum ( ImportMethod )
Required. Immutable. The wrapping method to be used for incoming key material.
protection Level
enum ( ProtectionLevel )
Required. Immutable. The protection level of the ImportJob . This must match the protectionLevel of the versionTemplate on the CryptoKey you attempt to import into.
createTime
string ( Timestamp format)
Output only. The time at which this ImportJob was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
generateTime
string ( Timestamp format)
Output only. The time this ImportJob 's key material was generated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
expireTime
string ( Timestamp format)
Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
expireEventTime
string ( Timestamp format)
Output only. The time this ImportJob expired. Only present if state is EXPIRED .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
state
enum ( ImportJobState )
Output only. The current state of the ImportJob , indicating if it can be used.
publicKey
object ( WrappingPublicKey )
Output only. The public key with which to wrap key material prior to import. Only returned if state is ACTIVE .
attestation
object ( KeyOperationAttestation )
Output only. Statement that was generated and signed by the key creator (for example, an HSM) at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only present if the chosen ImportMethod is one with a protection level of HSM .
cryptoKeyBackend
string
Immutable. The resource name of the backend environment where the key material for the wrapping key resides and where all related cryptographic operations are performed. This field is only populated for keys with a protection level of HSM_SINGLE_TENANT .
ImportMethod
ImportMethod describes the key wrapping method chosen for this ImportJob .
Enums
IMPORT_METHOD_UNSPECIFIED
Not specified.
RSA_OAEP_3072_SHA1_AES_256
This ImportMethod represents the CKM_RSA_AES_KEY_WRAP key wrapping scheme defined in the PKCS #11 standard. In summary, this involves wrapping the raw key with an ephemeral AES key, and wrapping the ephemeral AES key with a 3072 bit RSA key. For more details, see RSA AES key wrap mechanism .
RSA_OAEP_4096_SHA1_AES_256
This ImportMethod represents the CKM_RSA_AES_KEY_WRAP key wrapping scheme defined in the PKCS #11 standard. In summary, this involves wrapping the raw key with an ephemeral AES key, and wrapping the ephemeral AES key with a 4096 bit RSA key. For more details, see RSA AES key wrap mechanism .
RSA_OAEP_3072_SHA256_AES_256
This ImportMethod represents the CKM_RSA_AES_KEY_WRAP key wrapping scheme defined in the PKCS #11 standard. In summary, this involves wrapping the raw key with an ephemeral AES key, and wrapping the ephemeral AES key with a 3072 bit RSA key. For more details, see RSA AES key wrap mechanism .
RSA_OAEP_4096_SHA256_AES_256
This ImportMethod represents the CKM_RSA_AES_KEY_WRAP key wrapping scheme defined in the PKCS #11 standard. In summary, this involves wrapping the raw key with an ephemeral AES key, and wrapping the ephemeral AES key with a 4096 bit RSA key. For more details, see RSA AES key wrap mechanism .
RSA_OAEP_3072_SHA256
This ImportMethod represents RSAES-OAEP with a 3072 bit RSA key. The key material to be imported is wrapped directly with the RSA key. Due to technical limitations of RSA wrapping, this method cannot be used to wrap RSA keys for import.
RSA_OAEP_4096_SHA256
This ImportMethod represents RSAES-OAEP with a 4096 bit RSA key. The key material to be imported is wrapped directly with the RSA key. Due to technical limitations of RSA wrapping, this method cannot be used to wrap RSA keys for import.
ImportJobState
The state of the ImportJob , indicating if it can be used.
Enums
IMPORT_JOB_STATE_UNSPECIFIED
Not specified.
PENDING_GENERATION
The wrapping key for this job is still being generated. It may not be used. Cloud KMS will automatically mark this job as ACTIVE as soon as the wrapping key is generated.
ACTIVE
This job may be used in cryptoKeys.create and cryptoKeyVersions.create requests.
EXPIRED
This job can no longer be used and may not leave this state once entered.
WrappingPublicKey
The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod .
JSON representation
{
"pem" : string
}
Fields
pem
string
The public key, encoded in PEM format. For more information, see the RFC 7468 sections for General Considerations and Textual Encoding of Subject Public Key Info .
Methods
create
Create a new ImportJob within a KeyRing .
get
Returns metadata for a given ImportJob .
getIamPolicy
Gets the access control policy for a resource.
list
Lists ImportJobs .
setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
Returns permissions that a caller has on the specified resource.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-24 UTC."],[],[]]
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
