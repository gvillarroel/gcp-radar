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
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Reference
Send feedback
CryptoKeyVersionAlgorithm
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
CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED
Not specified.
GOOGLE_SYMMETRIC_ENCRYPTION
Creates symmetric encryption keys.
AES_128_GCM
AES-GCM (Galois Counter Mode) using 128-bit keys.
AES_256_GCM
AES-GCM (Galois Counter Mode) using 256-bit keys.
AES_128_CBC
AES-CBC (Cipher Block Chaining Mode) using 128-bit keys.
AES_256_CBC
AES-CBC (Cipher Block Chaining Mode) using 256-bit keys.
AES_128_CTR
AES-CTR (Counter Mode) using 128-bit keys.
AES_256_CTR
AES-CTR (Counter Mode) using 256-bit keys.
RSA_SIGN_PSS_2048_SHA256
RSASSA-PSS 2048 bit key with a SHA256 digest.
RSA_SIGN_PSS_3072_SHA256
RSASSA-PSS 3072 bit key with a SHA256 digest.
RSA_SIGN_PSS_4096_SHA256
RSASSA-PSS 4096 bit key with a SHA256 digest.
RSA_SIGN_PSS_4096_SHA512
RSASSA-PSS 4096 bit key with a SHA512 digest.
RSA_SIGN_PKCS1_2048_SHA256
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-24 UTC."],[],[]]
