---
title: "Method: cryptoKeyVersions.asymmetricSign \_|\_ Cloud Key Management Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/asymmetricSign
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/asymmetricSign
  title: "Method: cryptoKeyVersions.asymmetricSign \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: cryptoKeyVersions.asymmetricSign | Cloud Key Management Service | Google Cloud Documentation
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
raw Decrypt
raw Encrypt
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
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Digest
Try it!
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Method: crypto Key Versions. asymmetric Sign
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Digest
Try it
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
Digest
JSON representation
Try it!
Full name : projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricSign
Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from cryptoKeyVersions.getPublicKey .
HTTP request
Choose a location:
global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca
POST https://cloudkms.googleapis.com/v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}:asymmetricSign
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name of the CryptoKeyVersion to use for signing.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.useToSign
Request body
The request body contains data with the following structure:
JSON representation
{
"digest" : {
object ( Digest )
} ,
"digestCrc32c" : string ,
"data" : string ,
"dataCrc32c" : string
}
Fields
digest
object ( Digest )
Optional. The digest of the data to sign. The digest must be produced with the same digest algorithm as specified by the key version's algorithm .
This field may not be supplied if AsymmetricSignRequest.data is supplied.
digestCrc32c
string ( Int64Value format)
Optional. An optional CRC32C checksum of the AsymmetricSignRequest.digest . If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.digest using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( AsymmetricSignRequest.digest ) is equal to AsymmetricSignRequest.digest_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
data
string ( bytes format)
Optional. The data to sign. It can't be supplied if AsymmetricSignRequest.digest is supplied.
A base64-encoded string.
dataCrc32c
string ( Int64Value format)
Optional. An optional CRC32C checksum of the AsymmetricSignRequest.data . If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( AsymmetricSignRequest.data ) is equal to AsymmetricSignRequest.data_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
Response body
Response message for KeyManagementService.AsymmetricSign .
If successful, the response body contains data with the following structure:
JSON representation
{
"signature" : string ,
"signatureCrc32c" : string ,
"verifiedDigestCrc32c" : boolean ,
"name" : string ,
"verifiedDataCrc32c" : boolean ,
"protectionLevel" : enum ( ProtectionLevel )
}
Fields
signature
string ( bytes format)
The created signature.
A base64-encoded string.
signatureCrc32c
string ( Int64Value format)
Integrity verification field. A CRC32C checksum of the returned AsymmetricSignResponse.signature . An integrity check of AsymmetricSignResponse.signature can be performed by computing the CRC32C checksum of AsymmetricSignResponse.signature and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
verifiedDigestCrc32c
boolean
Integrity verification field. A flag indicating whether AsymmetricSignRequest.digest_crc32c was received by KeyManagementService and used for the integrity verification of the digest . A false value of this field indicates either that AsymmetricSignRequest.digest_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set AsymmetricSignRequest.digest_crc32c but this field is still false, discard the response and perform a limited number of retries.
name
string
The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing.
verifiedDataCrc32c
boolean
Integrity verification field. A flag indicating whether AsymmetricSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data . A false value of this field indicates either that AsymmetricSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set AsymmetricSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.
protectionLevel
enum ( ProtectionLevel )
The ProtectionLevel of the CryptoKeyVersion used for signing.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Digest
A Digest holds a cryptographic message digest.
JSON representation
{
// Union field digest can be only one of the following:
"sha256" : string ,
"sha384" : string ,
"sha512" : string
// End of list of possible types for union field digest .
}
Fields
Union field digest . Required. The message digest. digest can be only one of the following:
sha256
string ( bytes format)
A message digest produced with the SHA-256 algorithm.
A base64-encoded string.
sha384
string ( bytes format)
A message digest produced with the SHA-384 algorithm.
A base64-encoded string.
sha512
string ( bytes format)
A message digest produced with the SHA-512 algorithm.
A base64-encoded string.
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
