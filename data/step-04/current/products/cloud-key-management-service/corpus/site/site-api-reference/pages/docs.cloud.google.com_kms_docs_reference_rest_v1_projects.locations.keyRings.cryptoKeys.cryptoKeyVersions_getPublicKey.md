---
title: "Method: cryptoKeyVersions.getPublicKey \_|\_ Cloud Key Management Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/getPublicKey
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/getPublicKey
  title: "Method: cryptoKeyVersions.getPublicKey \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: cryptoKeyVersions.getPublicKey | Cloud Key Management Service | Google Cloud Documentation
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
Query parameters
Request body
Response body
Authorization scopes
PublicKeyFormat
ChecksummedData
Try it!
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Method: crypto Key Versions. get Public Key
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
PublicKeyFormat
ChecksummedData
Try it
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
PublicKeyFormat
ChecksummedData
JSON representation
Try it!
Full name : projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.getPublicKey
Returns the public key for the given CryptoKeyVersion . The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT .
HTTP request
Choose a location:
global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca
GET https://cloudkms.googleapis.com/v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*}/publicKey
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The name of the CryptoKeyVersion public key to get.
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeyVersions.viewPublicKey
Query parameters
Parameters
public Key Format
enum ( PublicKeyFormat )
Optional. The PublicKey format specified by the user. This field is required for PQC algorithms. If specified, the public key will be exported through the publicKey field in the requested format. Otherwise, the pem field will be populated for non-PQC algorithms, and an error will be returned for PQC algorithms.
Request body
The request body must be empty.
Response body
The public keys for a given CryptoKeyVersion . Obtained via cryptoKeyVersions.getPublicKey .
If successful, the response body contains data with the following structure:
JSON representation
{
"pem" : string ,
"algorithm" : enum ( CryptoKeyVersionAlgorithm ) ,
"pemCrc32c" : string ,
"name" : string ,
"protectionLevel" : enum ( ProtectionLevel ) ,
"publicKeyFormat" : enum ( PublicKeyFormat ) ,
"publicKey" : {
object ( ChecksummedData )
}
}
Fields
pem
string
The public key, encoded in PEM format. For more information, see the RFC 7468 sections for General Considerations and Textual Encoding of Subject Public Key Info .
algorithm
enum ( CryptoKeyVersionAlgorithm )
The Algorithm associated with this key.
pemCrc32c
string ( Int64Value format)
Integrity verification field. A CRC32C checksum of the returned PublicKey.pem . An integrity check of PublicKey.pem can be performed by computing the CRC32C checksum of PublicKey.pem and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1 , and can be safely downconverted to uint32 in languages that support this type.
NOTE: This field is in Beta.
name
string
The name of the CryptoKeyVersion public key. Provided here for verification.
NOTE: This field is in Beta.
protectionLevel
enum ( ProtectionLevel )
The ProtectionLevel of the CryptoKeyVersion public key.
publicKeyFormat
enum ( PublicKeyFormat )
The PublicKey format specified by the customer through the publicKeyFormat field.
publicKey
object ( ChecksummedData )
This field contains the public key (with integrity verification), formatted according to the publicKeyFormat field.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudkms
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
PublicKeyFormat
The supported PublicKey formats.
Enums
PUBLIC_KEY_FORMAT_UNSPECIFIED
If the publicKeyFormat field is not specified: - For PQC algorithms, an error will be returned. - For non-PQC algorithms, the default format is PEM, and the field pem will be populated.
Otherwise, the public key will be exported through the publicKey field in the requested format.
PEM
The returned public key will be encoded in PEM format. See the RFC7468 sections for General Considerations and Textual Encoding of Subject Public Key Info for more information.
DER
The returned public key will be encoded in DER format (the PrivateKeyInfo structure from RFC 5208).
NIST_PQC
This is supported only for PQC algorithms. The key material is returned in the format defined by NIST PQC standards (FIPS 203, FIPS 204, and FIPS 205).
XWING_RAW_BYTES
The returned public key is in raw bytes format defined in its standard https://datatracker.ietf.org/doc/draft-connolly-cfrg-xwing-kem .
ChecksummedData
Data with integrity verification field.
JSON representation
{
"data" : string ,
"crc32cChecksum" : string
}
Fields
data
string ( bytes format)
Raw Data.
A base64-encoded string.
crc32cChecksum
string ( Int64Value format)
Integrity verification field. A CRC32C checksum of the returned ChecksummedData.data . An integrity check of ChecksummedData.data can be performed by computing the CRC32C checksum of ChecksummedData.data and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1 , and can be safely downconverted to uint32 in languages that support this type.
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
