---
title: "Method: cryptoKeys.encrypt \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys/encrypt
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys/encrypt
  title: "Method: cryptoKeys.encrypt \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: cryptoKeys.encrypt | Cloud Key Management Service | Google Cloud Documentation
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
Method: crypto Keys. encrypt
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
JSON representation
Response body
JSON representation
Authorization scopes
Try it!
Full name : projects.locations.keyRings.cryptoKeys.encrypt
Encrypts data, so that it can only be recovered by a call to cryptoKeys.decrypt . The CryptoKey.purpose must be ENCRYPT_DECRYPT .
HTTP request
Choose a location:
global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca
POST https://cloudkms.googleapis.com/v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/**}:encrypt
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name of the CryptoKey or CryptoKeyVersion to use for encryption.
If a CryptoKey is specified, the server will use its primary version .
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.useToEncrypt
Request body
The request body contains data with the following structure:
JSON representation
{
"plaintext" : string ,
"additionalAuthenticatedData" : string ,
"plaintextCrc32c" : string ,
"additionalAuthenticatedDataCrc32c" : string
}
Fields
plaintext
string ( bytes format)
Required. The data to encrypt. Must be no larger than 64KiB.
The maximum size depends on the key version's protectionLevel . For SOFTWARE , EXTERNAL , and EXTERNAL_VPC keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additionalAuthenticatedData fields must be no larger than 8KiB.
A base64-encoded string.
additionalAuthenticatedData
string ( bytes format)
Optional. Optional data that, if specified, must also be provided during decryption through DecryptRequest.additional_authenticated_data .
The maximum size depends on the key version's protectionLevel . For SOFTWARE , EXTERNAL , and EXTERNAL_VPC keys the AAD must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additionalAuthenticatedData fields must be no larger than 8KiB.
A base64-encoded string.
plaintextCrc32c
string ( Int64Value format)
Optional. An optional CRC32C checksum of the EncryptRequest.plaintext . If specified, KeyManagementService will verify the integrity of the received EncryptRequest.plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( EncryptRequest.plaintext ) is equal to EncryptRequest.plaintext_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
additionalAuthenticatedDataCrc32c
string ( Int64Value format)
Optional. An optional CRC32C checksum of the EncryptRequest.additional_authenticated_data . If specified, KeyManagementService will verify the integrity of the received EncryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C( EncryptRequest.additional_authenticated_data ) is equal to EncryptRequest.additional_authenticated_data_crc32c , and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
Response body
Response message for KeyManagementService.Encrypt .
If successful, the response body contains data with the following structure:
JSON representation
{
"name" : string ,
"ciphertext" : string ,
"ciphertextCrc32c" : string ,
"verifiedPlaintextCrc32c" : boolean ,
"verifiedAdditionalAuthenticatedDataCrc32c" : boolean ,
"protectionLevel" : enum ( ProtectionLevel )
}
Fields
name
string
The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption.
ciphertext
string ( bytes format)
The encrypted data.
A base64-encoded string.
ciphertextCrc32c
string ( Int64Value format)
Integrity verification field. A CRC32C checksum of the returned EncryptResponse.ciphertext . An integrity check of EncryptResponse.ciphertext can be performed by computing the CRC32C checksum of EncryptResponse.ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
verifiedPlaintextCrc32c
boolean
Integrity verification field. A flag indicating whether EncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext . A false value of this field indicates either that EncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set EncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries.
verifiedAdditionalAuthenticatedDataCrc32c
boolean
Integrity verification field. A flag indicating whether EncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of the AAD . A false value of this field indicates either that EncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService . If you've set EncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries.
protectionLevel
enum ( ProtectionLevel )
The ProtectionLevel of the CryptoKeyVersion used in encryption.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
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
