---
title: "CryptoKeyVersionAlgorithm \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm
  title: "CryptoKeyVersionAlgorithm \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

CryptoKeyVersionAlgorithm | Cloud Key Management Service | Google Cloud Documentation
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
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Crypto Key Version Algorithm
Stay organized with collections
Save and categorize content based on your preferences.
The algorithm of the CryptoKeyVersion , indicating what parameters must be used for each cryptographic operation.
The GOOGLE_SYMMETRIC_ENCRYPTION algorithm is usable with CryptoKey.purpose ENCRYPT_DECRYPT .
Algorithms beginning with RSA_SIGN_ are usable with CryptoKey.purpose ASYMMETRIC_SIGN .
The fields in the name after RSA_SIGN_ correspond to the following parameters: padding algorithm, modulus bit length, and digest algorithm.
For PSS, the salt length used is equal to the length of digest algorithm. For example, RSA_SIGN_PSS_2048_SHA256 will use PSS with a salt length of 256 bits or 32 bytes.
Algorithms beginning with RSA_DECRYPT_ are usable with CryptoKey.purpose ASYMMETRIC_DECRYPT .
The fields in the name after RSA_DECRYPT_ correspond to the following parameters: padding algorithm, modulus bit length, and digest algorithm.
Algorithms beginning with EC_SIGN_ are usable with CryptoKey.purpose ASYMMETRIC_SIGN .
The fields in the name after EC_SIGN_ correspond to the following parameters: elliptic curve, digest algorithm.
Algorithms beginning with HMAC_ are usable with CryptoKey.purpose MAC .
The suffix following HMAC_ corresponds to the hash algorithm being used (eg. SHA256).
Algorithms beginning with PQ_ are post-quantum.
For more information, see Key purposes and algorithms .
Enums
CRYPTO_ KEY_ VERSION_ ALGORITHM_ UNSPECIFIED
Not specified.
GOOGLE_ SYMMETRIC_ ENCRYPTION
Creates symmetric encryption keys.
AES_ 128_ GCM
AES-GCM (Galois Counter Mode) using 128-bit keys.
AES_ 256_ GCM
AES-GCM (Galois Counter Mode) using 256-bit keys.
AES_ 128_ CBC
AES-CBC (Cipher Block Chaining Mode) using 128-bit keys.
AES_ 256_ CBC
AES-CBC (Cipher Block Chaining Mode) using 256-bit keys.
AES_ 128_ CTR
AES-CTR (Counter Mode) using 128-bit keys.
AES_ 256_ CTR
AES-CTR (Counter Mode) using 256-bit keys.
RSA_ SIGN_ PSS_ 2048_ SHA256
RSASSA-PSS 2048 bit key with a SHA256 digest.
RSA_ SIGN_ PSS_ 3072_ SHA256
RSASSA-PSS 3072 bit key with a SHA256 digest.
RSA_ SIGN_ PSS_ 4096_ SHA256
RSASSA-PSS 4096 bit key with a SHA256 digest.
RSA_ SIGN_ PSS_ 4096_ SHA512
RSASSA-PSS 4096 bit key with a SHA512 digest.
RSA_ SIGN_ PKCS1_ 2048_ SHA256
RSASSA-PKCS1-v1_5 with a 2048 bit key and a SHA256 digest.
RSA_SIGN_PKCS1_3072_SHA256
RSASSA-PKCS1-v1_5 with a 3072 bit key and a SHA256 digest.
RSA_SIGN_PKCS1_4096_SHA256
RSASSA-PKCS1-v1_5 with a 4096 bit key and a SHA256 digest.
RSA_SIGN_PKCS1_4096_SHA512
RSASSA-PKCS1-v1_5 with a 4096 bit key and a SHA512 digest.
RSA_SIGN_RAW_PKCS1_2048
RSASSA-PKCS1-v1_5 signing without encoding, with a 2048 bit key.
RSA_SIGN_RAW_PKCS1_3072
RSASSA-PKCS1-v1_5 signing without encoding, with a 3072 bit key.
RSA_SIGN_RAW_PKCS1_4096
RSASSA-PKCS1-v1_5 signing without encoding, with a 4096 bit key.
RSA_DECRYPT_OAEP_2048_SHA256
RSAES-OAEP 2048 bit key with a SHA256 digest.
RSA_DECRYPT_OAEP_3072_SHA256
RSAES-OAEP 3072 bit key with a SHA256 digest.
RSA_DECRYPT_OAEP_4096_SHA256
RSAES-OAEP 4096 bit key with a SHA256 digest.
RSA_DECRYPT_OAEP_4096_SHA512
RSAES-OAEP 4096 bit key with a SHA512 digest.
RSA_DECRYPT_OAEP_2048_SHA1
RSAES-OAEP 2048 bit key with a SHA1 digest.
RSA_DECRYPT_OAEP_3072_SHA1
RSAES-OAEP 3072 bit key with a SHA1 digest.
RSA_DECRYPT_OAEP_4096_SHA1
RSAES-OAEP 4096 bit key with a SHA1 digest.
EC_SIGN_P256_SHA256
ECDSA on the NIST P-256 curve with a SHA256 digest. Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa_support_for_other_hash_algorithms
EC_SIGN_P384_SHA384
ECDSA on the NIST P-384 curve with a SHA384 digest. Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa_support_for_other_hash_algorithms
EC_SIGN_SECP256K1_SHA256
ECDSA on the non-NIST secp256k1 curve. This curve is only supported for HSM protection level. Other hash functions can also be used: https://cloud.google.com/kms/docs/create-validate-signatures#ecdsa_support_for_other_hash_algorithms
EC_SIGN_ED25519
EdDSA on the Curve25519 in pure mode (taking data as input).
HMAC_SHA256
HMAC-SHA256 signing with a 256 bit key.
HMAC_SHA1
HMAC-SHA1 signing with a 160 bit key.
HMAC_SHA384
HMAC-SHA384 signing with a 384 bit key.
HMAC_SHA512
HMAC-SHA512 signing with a 512 bit key.
HMAC_SHA224
HMAC-SHA224 signing with a 224 bit key.
EXTERNAL_SYMMETRIC_ENCRYPTION
Algorithm representing symmetric encryption by an external key manager.
ML_KEM_768
ML-KEM-768 (FIPS 203)
ML_KEM_1024
ML-KEM-1024 (FIPS 203)
KEM_XWING
X-Wing hybrid KEM combining ML-KEM-768 with X25519 following datatracker.ietf.org/doc/draft-connolly-cfrg-xwing-kem/.
PQ_SIGN_ML_DSA_44
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 1. Randomized version.
PQ_SIGN_ML_DSA_65
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 3. Randomized version.
PQ_SIGN_ML_DSA_87
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 5. Randomized version.
PQ_SIGN_SLH_DSA_SHA2_128S
The post-quantum stateless hash-based digital signature algorithm, at security level 1. Randomized version.
PQ_SIGN_HASH_SLH_DSA_SHA2_128S_SHA256
The post-quantum stateless hash-based digital signature algorithm, at security level 1. Randomized pre-hash version supporting SHA256 digests.
PQ_SIGN_ML_DSA_44_EXTERNAL_MU
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 1. Randomized version supporting externally-computed message representatives.
PQ_SIGN_ML_DSA_65_EXTERNAL_MU
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 3. Randomized version supporting externally-computed message representatives.
PQ_SIGN_ML_DSA_87_EXTERNAL_MU
The post-quantum Module-Lattice-Based Digital Signature Algorithm, at security level 5. Randomized version supporting externally-computed message representatives.
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
