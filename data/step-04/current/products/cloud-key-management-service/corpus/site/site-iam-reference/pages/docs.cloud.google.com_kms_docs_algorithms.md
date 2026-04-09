---
title: "Key purposes and algorithms \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/algorithms
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/algorithms
  title: "Key purposes and algorithms \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Key purposes and algorithms | Cloud Key Management Service | Google Cloud Documentation
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
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
Discover
Product overview
Protection levels
Overview
Cloud HSM overview
Single-tenant Cloud HSM overview
Cloud EKM overview
Reference architectures for Cloud EKM
CMEK overview
Cloud KMS with Autokey
Compatible services
Cloud HSM for Google Workspace
Locations
Get started
Cloud KMS resources
Key purposes and algorithms
Separation of duties
Create and use encryption keys
CMEK best practices
Create and manage Single-tenant Cloud HSM instances
Create keys
Automate key creation
Autokey overview
Enable Autokey
Create a resource with Autokey
Create a key ring
Create a key
Import keys
About key import
Key wrapping
Format a key for import
Manually wrap a key for import
Configure OpenSSL for manual key wrapping
Wrap a key using OpenSSL
Set up automatic key wrapping
Import a key version
Verify an imported key version
Create external keys
Set up Cloud EKM over the internet
Create an EKM connection
Create an external Key
Control access
Manage IAM roles
Use Organization Policy Contraints
Create custom organization policy constraints for Cloud KMS
CMEK organization policies
Control key destruction
Secure data using keys
Key APIs
Use gRPC
Access the API
Sort and filter API list results
Generate random bytes
Use Cloud KMS keys in Google Cloud
Encrypt and decrypt data
Envelope encryption
Additional authenticated data
Asymmetric encryption
Encrypt and decrypt data with a symmetric key
Encrypt and decrypt data with a raw symmetric key
Encrypt and decrypt data with an asymmetric key
Verify end-to-end data integrity
Encrypt application data
Set up client-side encryption with Tink
Onboard to Cloud HSM for Google Workspace
Sign and validate data
Digital signatures
Create and validate signatures
MAC signatures
Create and validate MAC signatures
Share secrets using key encapsulation mechanisms
Key encapsulation mechanisms
Encapsulate and decapsulate using KEMs
Manage keys
Resource consistency
Key version states
View keys and key details
View keys by project
View encryption metrics
View key usage
Get a Cloud KMS resource ID
Retrieve a public key
Attest a Cloud HSM key
Label a key
Create and manage tags
Enable and disable a key version
Destroy and restore a key version
Delete Cloud KMS resources
Rotate keys
About key rotation
Rotate a key
Re-encrypt data
Update external key reference
Monitor
Using Cloud Audit Logging
Cloud KMS Inventory Service audit logging
Monitor state changes
Monitor and adjust quotas
Use Cloud Monitoring
Monitor EKM usage
Troubleshoot
Troubleshoot failed imports
Troubleshoot EKM via VPC errors
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
Key purposes
Symmetric encryption algorithms
Asymmetric signing algorithms Elliptic curve signing algorithms
RSA signing algorithms
PQC signing algorithms
Asymmetric encryption algorithms
Key encapsulation algorithms
MAC signing algorithms HMAC signing algorithms
Algorithm recommendations
Protection levels
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Key purposes and algorithms
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Key purposes
Symmetric encryption algorithms
Asymmetric signing algorithms Elliptic curve signing algorithms
RSA signing algorithms
PQC signing algorithms
Asymmetric encryption algorithms
Key encapsulation algorithms
MAC signing algorithms HMAC signing algorithms
Algorithm recommendations
Protection levels
Each Cloud Key Management Service key has a purpose , which defines the
cryptographic capabilities of the key. The purpose also determines which
algorithms are supported for the key's versions. Each algorithm defines what
parameters must be used for each cryptographic operation. Each key also has a
protection level that indicates whether cryptographic operations are
performed in software or in a Hardware Security Module (HSM).
Key purposes
Cloud KMS provides key purposes for the following scenarios:
Scenario
Key purpose (SDK)
Key purpose (API)
Supported methods
Symmetric encryption
encryption
ENCRYPT_ DECRYPT
cryptoKeys.encrypt , cryptoKeys.decrypt
Raw symmetric encryption
raw-encryption
RAW_ ENCRYPT_ DECRYPT
cryptoKeys.rawEncrypt , cryptoKeys.rawDecrypt
Asymmetric signing
asymmetric-signing
ASYMMETRIC_ SIGN
cryptoKeyVersions.asymmetricSign , cryptoKeyVersions.getPublicKey
Asymmetric encryption
asymmetric-encryption
ASYMMETRIC_ DECRYPT
cryptoKeyVersions.asymmetricDecrypt , cryptoKeyVersions.getPublicKey
Key encapsulation mechanisms
key-encapsulation
KEY_ ENCAPSULATION
cryptoKeyVersions.decapsulate , cryptoKeyVersions.getPublicKey
MAC signing
mac
MAC
cryptoKeyVersions.macSign , cryptoKeyVersions.macVerify
When you create a key, you define the purpose and the algorithm of that key. You
can change the algorithm when you create new key versions, subject to the
scope of its purpose. The purpose cannot be changed.
Two keys with the same purpose may use different underlying algorithms, but they
must support the same set of cryptographic operations.
Symmetric encryption algorithms
The ENCRYPT_DECRYPT key purpose enables symmetric encryption. All keys with key
purpose ENCRYPT_DECRYPT use the GOOGLE_SYMMETRIC_ENCRYPTION algorithm. No
parameters are used with this algorithm. This algorithm uses 256-bit Advanced
Encryption Standard (AES-256) keys in Galois Counter Mode (GCM), padded with
Cloud KMS-internal metadata.
Asymmetric signing algorithms
The ASYMMETRIC_SIGN key purpose enables asymmetric signing. Keys with key
purpose ASYMMETRIC_SIGN use different algorithms, depending on whether the key
supports elliptic curve signing or
RSA signing .
For a key that has purpose ASYMMETRIC_SIGN, you can switch between different
size keys and different signature schemes via the algorithm.
Elliptic curve signing algorithms
The format of an elliptic curve signing algorithm is
EC_SIGN_ [ELLIPTIC_CURVE] _ [DIGEST_ALGORITHM]
where
[ELLIPTIC_CURVE] is the elliptic curve
[DIGEST_ALGORITHM] is the digest algorithm
The following table lists the possible algorithms for elliptic curve keys with
purpose ASYMMETRIC_SIGN. Use the lower-case algorithm names with the gcloud
command, and the upper-case ones with the Cloud Key Management Service API.
Algorithm (SDK)
Algorithm (API)
Description
ec-sign-ed25519
EC_SIGN_ED25519
EdDSA on the Curve25519 in PureEdDSA
mode , which takes raw data as input instead of hashed data
ec-sign-p256-sha256 **(recommended)**
EC_SIGN_P256_SHA256
ECDSA on the P-256 Curve with a SHA-256 digest
ec-sign-p384-sha384
EC_SIGN_P384_SHA384
ECDSA on the P-384 Curve with a SHA-384 digest
ec-sign-secp256k1-sha256
EC_SIGN_SECP256K1_SHA256
ECDSA on the Secp256k1 Curve with a SHA-256 digest
Note: secp256k1 curves generate signatures in the "normalized" form
only (also known as the "lower-S form"). For additional cryptographic details
about these signatures, see DER
encoding
RSA signing algorithms
The format of an RSA signing algorithm is
RSA_SIGN_ [PADDING_ALGORITHM] _ [MODULUS_BIT_LENGTH] _ [DIGEST_ALGORITHM]
where
[PADDING_ALGORITHM] is the padding algorithm
[MODULUS_BIT_LENGTH] is the bit length of the key
[DIGEST_ALGORITHM] is the digest algorithm
Note that some algorithms are formatted as
RSA_SIGN_RAW_ [PADDING_ALGORITHM] _ [MODULUS_BIT_LENGTH]
and omit the digest algorithm. These algorithms are a variant of PKCS #1 signing
that omits encoding into a DigestInfo. In the variant:
a digest is computed over the message that will be signed
PKCS #1 padding is applied to the digest directly
a signature of the padded digest is computed, using the RSA private key
The following table lists the possible algorithms for RSA keys with purpose
ASYMMETRIC_SIGN. Use the lower-case algorithm names with the gcloud
command, and the upper-case ones with the Cloud Key Management Service API.
Algorithm (SDK)
Algorithm (API)
Description
rsa-sign-pss-2048-sha256
RSA_SIGN_PSS_2048_SHA256
RSASSA-PSS 2048 bit key with a SHA-256 digest
rsa-sign-pss-3072-sha256 (recommended)
RSA_SIGN_PSS_3072_SHA256
RSASSA-PSS 3072 bit key with a SHA-256 digest
rsa-sign-pss-4096-sha256
RSA_SIGN_PSS_4096_SHA256
RSASSA-PSS 4096 bit key with a SHA-256 digest
rsa-sign-pss-4096-sha512
RSA_SIGN_PSS_4096_SHA512
RSASSA-PSS 4096 bit key with a SHA-512 digest
rsa-sign-pkcs1-2048-sha256
RSA_SIGN_PKCS1_2048_SHA256
RSASSA-PKCS1 v1_5 with a 2048 bit key and a SHA-256 digest
rsa-sign-pkcs1-3072-sha256
RSA_SIGN_PKCS1_3072_SHA256
RSASSA-PKCS1 v1_5 with a 3072 bit key and a SHA-256 digest
rsa-sign-pkcs1-4096-sha256
RSA_SIGN_PKCS1_4096_SHA256
RSASSA-PKCS1 v1_5 with a 4096 bit key and a SHA-256 digest
rsa-sign-pkcs1-4096-sha512
RSA_SIGN_PKCS1_4096_SHA512
RSASSA-PKCS1 v1_5 with a 4096 bit key and a SHA-512 digest
rsa-sign-raw-pkcs1-2048
RSA_SIGN_RAW_PKCS1_2048
RSASSA-PKCS1-v1_5 signing without encoding, with a 2048 bit key
rsa-sign-raw-pkcs1-3072
RSA_SIGN_RAW_PKCS1_3072
RSASSA-PKCS1-v1_5 signing without encoding, with a 3072 bit key
rsa-sign-raw-pkcs1-4096
RSA_SIGN_RAW_PKCS1_4096
RSASSA-PKCS1-v1_5 signing without encoding, with a 4096 bit key
For Probabilistic Signature Scheme (PSS), the salt length used is equal to the
length of the digest algorithm. For example, RSA_SIGN_PSS_2048_SHA256 will use
PSS with a salt length of 256 bits. In addition, for PSS the digest algorithm
specified in the algorithm name is used for the mask generation function (MGF1)
as well. For example, if you are using RSA_SIGN_PSS_2048_SHA256, you will submit
a SHA-256 hash of the data to be signed, and Cloud KMS will
internally use SHA-256 as the hash algorithm for MGF1 when computing the
signature.
PQC signing algorithms
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Post-quantum cryptography (PQC) signing algorithms start with the prefix
PQ_SIGN_ . The following table lists the PQC algorithms that Cloud KMS
can use for keys with purpose ASYMMETRIC_SIGN . The pure algorithms take raw
data as input, while the pre-hash algorithms accept a hash of the data.
Algorithm (SDK)
Algorithm (API)
Variant
Description
pq-sign-ml-dsa-65
PQ_SIGN_ML_DSA_65
Pure
Module-lattice-based digital signature algorithm.
pq-sign-slh-dsa-sha2-128s
PQ_SIGN_SLH_DSA_SHA2_128S
Pure
Stateless hash-based digital signature algorithm.
pq-sign-hash-slh-dsa-sha2-128s-sha256
PQ_SIGN_HASH_SLH_DSA_SHA2_128S_SHA256
Pre-hash
Stateless hash-based digital signature algorithm.
Asymmetric encryption algorithms
The ASYMMETRIC_DECRYPT key purpose enables RSA encryption. The format of an
ASYMMETRIC_DECRYPT algorithm is
RSA_DECRYPT_ [PADDING_ALGORITHM] _ [MODULUS_BIT_LENGTH] _ [DIGEST_ALGORITHM]
where
[PADDING_ALGORITHM] is the padding algorithm
[MODULUS_BIT_LENGTH] is the bit length of the key
[DIGEST_ALGORITHM] is the digest algorithm
The following table lists the possible algorithms for RSA keys with purpose
ASYMMETRIC_DECRYPT. Use the lower-case algorithm names with the gcloud
command, and the upper-case ones with the Cloud Key Management Service API.
Algorithm (SDK)
Algorithm (API)
Description
rsa-decrypt-oaep-2048-sha1
RSA_DECRYPT_OAEP_2048_SHA1
RSAES-OAEP 2048 bit key with a SHA-1 digest
rsa-decrypt-oaep-2048-sha256
RSA_DECRYPT_OAEP_2048_SHA256
RSAES-OAEP 2048 bit key with a SHA-256 digest
rsa-decrypt-oaep-3072-sha1
RSA_DECRYPT_OAEP_3072_SHA1
RSAES-OAEP 3072 bit key with a SHA-1 digest
rsa-decrypt-oaep-3072-sha256 (recommended)
RSA_DECRYPT_OAEP_3072_SHA256
RSAES-OAEP 3072 bit key with a SHA-256 digest
rsa-decrypt-oaep-4096-sha1
RSA_DECRYPT_OAEP_4096_SHA1
RSAES-OAEP 4096 bit key with a SHA-1 digest
rsa-decrypt-oaep-4096-sha256
RSA_DECRYPT_OAEP_4096_SHA256
RSAES-OAEP 4096 bit key with a SHA-256 digest
rsa-decrypt-oaep-4096-sha512
RSA_DECRYPT_OAEP_4096_SHA512
RSAES-OAEP 4096 bit key with a SHA-512 digest
All of these algorithms use Optimal Asymmetric Encryption Padding (OAEP) with
the mask generation function MGF1. MGF1 requires a digest algorithm. In
Cloud KMS, the digest function to be used with MGF1 is specified as
part of the key algorithm name. For example, if you are using the
RSA_DECRYPT_OAEP_3072_SHA256 algorithm, you should use SHA-256 with MGF1 when
encrypting data.
Key encapsulation algorithms
The KEY_ENCAPSULATION key purpose is used to establish shared secrets
using key encapsulation mechanisms .
The following table lists the possible algorithms for keys with purpose
KEY_ENCAPSULATION . All of these algorithms are designed to be post-quantum
secure. Use the lower-case algorithm names with the gcloud
command, and the upper-case ones with the Cloud Key Management Service API.
Algorithm (SDK)
Algorithm (API)
Description
ml-kem-768
ML_KEM_768
Module-lattice-based key-encapsulation mechanism with ML-KEM-768 parameter set (FIPS 203)
ml-kem-1024
ML_KEM_1024
Module-lattice-based key-encapsulation mechanism with ML-KEM-1024 parameter set (FIPS 203)
kem-xwing
KEM_XWING
X-Wing hybrid KEM combining ML-KEM-768 with X25519
MAC signing algorithms
The MAC key purpose enables symmetric MAC signing. Keys with key purpose MAC
currently only support HMAC signing .
HMAC signing algorithms
The format of an HMAC signing algorithm is
HMAC_ [HASH_ALGORITHM]
where
[HASH_ALGORITHM] is the hash algorithm
The following table lists the currently available HMAC algorithms for keys with
purpose MAC. Use the lower-case algorithm names with the gcloud command, and
the upper-case ones with the Cloud Key Management Service API.
Algorithm (SDK)
Algorithm (API)
Description
hmac-sha1
HMAC_SHA1
HMAC with a SHA-1 digest
hmac-sha224
HMAC_SHA224
HMAC with a SHA-224 digest
hmac-sha256 (recommended)
HMAC_SHA256
HMAC with a SHA-256 digest
hmac-sha384
HMAC_SHA384
HMAC with a SHA-384 digest
hmac-sha512
HMAC_SHA512
HMAC with a SHA-512 digest
Algorithm recommendations
For digital signing, the recommendation is to use elliptic curve signing
algorithms. EC_SIGN_P256_SHA256 is the recommended elliptic curve algorithm. If
you are going to use RSA signing algorithms, the recommended RSA signing
algorithm is RSA_SIGN_PSS_3072_SHA256.
For asymmetric encryption, RSA_DECRYPT_OAEP_3072_SHA256 is the recommended
algorithm.
For MAC signing, HMAC_SHA256 is the recommended algorithm.
For key encapsulation, we recommend using KEM_XWING , which is a hybrid
algorithm that can provide layered defense against both classical and
potential quantum adversaries.
For the list of supported algorithm values to be used with the gcloud CLI,
see --default-algorithm .
Protection levels
The protection level indicates how cryptographic operations are performed. After
you create a key, you cannot change the protection level.
Protection level
Description
SOFTWARE
Cryptographic operations are performed in software.
HSM
Cryptographic operations are performed in an HSM.
HSM_SINGLE_TENANT
Cryptographic operations are performed in a dedicated cluster of HSM partitions, exclusively created for a single-tenant Cloud HSM instance.
EXTERNAL
Cryptographic operations are performed using a key stored in an external key manager connected to Google Cloud using the internet. Limited to symmetric encryption and asymmetric signing.
EXTERNAL_VPC
Cryptographic operations are performed using a key stored in an external key manager connected to Google Cloud over Virtual Private Cloud (VPC). Limited to symmetric encryption and asymmetric signing.
All key purposes are supported for keys with protection level SOFTWARE or
HSM .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
