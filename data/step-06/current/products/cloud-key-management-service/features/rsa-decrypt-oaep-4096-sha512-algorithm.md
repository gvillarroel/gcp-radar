---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.061Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "RSA_DECRYPT_OAEP_4096_SHA512 algorithm"
feature_slug: "rsa-decrypt-oaep-4096-sha512-algorithm"
latest_feature_date: "2018-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/algorithms"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm"
  - "https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
keywords:
  - "rsa"
  - "decrypt"
  - "oaep"
  - "4096"
  - "sha512"
  - "algorithm"
  - "kms"
  - "supports"
---

# RSA_DECRYPT_OAEP_4096_SHA512 algorithm

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports the RSA_DECRYPT_OAEP_4096_SHA512 algorithm.

## Extended Definition

Cloud KMS supports the RSA_DECRYPT_OAEP_4096_SHA512 algorithm.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm)
- [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)

## Supporting Pages

### "Key purposes and algorithms \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Algorithm (SDK) Algorithm (API) Description rsa-decrypt-oaep-2048-sha1 RSA DECRYPT OAEP 2048 SHA1 RSAES-OAEP 2048 bit key with a SHA-1 digest rsa-decrypt-oaep-2048-sha256 RSA DECRYPT OAEP 2048 SHA256 RSAES-OAEP 2048 bit key with a SHA-256 digest rsa-decrypt-oaep-3072-sha1 RSA DECRYPT OAEP 3072 SHA1 RSAES-OAEP 3072 bit key with a SHA-1 digest rsa-decrypt-oaep-3072-sha256 (recommended) RSA DECRYPT OAEP 3072 SHA256 RSAES-OAEP 3072 bit key with a SHA-256 digest rsa-decrypt-oaep-4096-sha1 RSA DECRYPT OAEP 4096 SHA1 RSAES-OAEP 4096 bit key with a SHA-1 digest rsa-decrypt-oaep-4096-sha256 RSA DECRYPT OAEP 4096 SHA256 RSAES-OAEP 4096 bit key with a SHA-256 digest rsa-decrypt-oaep-4096-sha512 RSA DECRYPT OAEP 4096 SHA512 RSAES-OAEP 4096 bit key with a SHA-512 digest All of these algorithms use Optimal Asymmetric Encryption Padding (OAEP) with the mask generation function MGF1.
- Algorithm (SDK) Algorithm (API) Description rsa-sign-pss-2048-sha256 RSA SIGN PSS 2048 SHA256 RSASSA-PSS 2048 bit key with a SHA-256 digest rsa-sign-pss-3072-sha256 (recommended) RSA SIGN PSS 3072 SHA256 RSASSA-PSS 3072 bit key with a SHA-256 digest rsa-sign-pss-4096-sha256 RSA SIGN PSS 4096 SHA256 RSASSA-PSS 4096 bit key with a SHA-256 digest rsa-sign-pss-4096-sha512 RSA SIGN PSS 4096 SHA512 RSASSA-PSS 4096 bit key with a SHA-512 digest rsa-sign-pkcs1-2048-sha256 RSA SIGN PKCS1 2048 SHA256 RSASSA-PKCS1 v1 5 with a 2048 bit key and a SHA-256 digest rsa-sign-pkcs1-3072-sha256 RSA SIGN PKCS1 3072 SHA256 RSASSA-PKCS1 v1 5 with a 3072 bit key and a SHA-256 digest rsa-sign-pkcs1-4096-sha256 RSA SIGN PKCS1 4096 SHA256 RSASSA-PKCS1 v1 5 with a 4096 bit key and a SHA-256 digest rsa-sign-pkcs1-4096-sha512 RSA SIGN PKCS1 4096 SHA512 RSASSA-PKCS1 v1 5 with a 4096 bit key and a SHA-512 digest rsa-sign-raw-pkcs1-2048 RSA SIGN RAW PKCS1 2048 RSASSA-PKCS1-v1 5 signing without encoding, with a 2048 bit key rsa-sign-raw-pkcs1-3072 RSA SIGN RAW PKCS1 3072 RSASSA-PKCS1-v1 5 signing without encoding, with a 3072 bit key rsa-sign-raw-pkcs1-4096 RSA SIGN RAW PKCS1 4096 RSASSA-PKCS1-v1 5 signing without encoding, with a 4096 bit key For Probabilistic Signature Scheme (PSS), the salt length used is equal to the length of the digest algorithm.
- For example, if you are using the RSA DECRYPT OAEP 3072 SHA256 algorithm, you should use SHA-256 with MGF1 when encrypting data.
- For asymmetric encryption, RSA DECRYPT OAEP 3072 SHA256 is the recommended algorithm.

### "CryptoKeyVersionAlgorithm \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm](https://docs.cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RSA DECRYPT OAEP 4096 SHA512 RSAES-OAEP 4096 bit key with a SHA512 digest.
- RSA DECRYPT OAEP 4096 SHA256 RSAES-OAEP 4096 bit key with a SHA256 digest.
- RSA DECRYPT OAEP 4096 SHA1 RSAES-OAEP 4096 bit key with a SHA1 digest.
- The fields in the name after RSA DECRYPT correspond to the following parameters: padding algorithm, modulus bit length, and digest algorithm.

### "Encrypting and decrypting data with an asymmetric key \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As a quick reference, the following algorithms support the following maximum payload sizes ( maxMLen , in bytes): Algorithm Parameters Maximum message length RSA DECRYPT OAEP 2048 SHA256 k = 256; hLen = 32; maxMLen = 190 RSA DECRYPT OAEP 3072 SHA256 k = 384; hLen = 32; maxMLen = 318 RSA DECRYPT OAEP 4096 SHA256 k = 512; hLen = 32; maxMLen = 446 RSA DECRYPT OAEP 4096 SHA512 k = 512; hLen = 64; maxMLen = 382 Asymmetric encryption is not recommended for messages of varying lengths that may be larger than these limits.
- RSA PKCS1 OAEP PADDING , }, plaintextBuffer ); console . log ( Ciphertext: ${ ciphertextBuffer . toString ( 'base64' ) } ); return ciphertextBuffer ; } return encryptAsymmetric (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . function encrypt asymmetric( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key', string $versionId = '123', string $plaintext = '...' ): void { // PHP has limited support for asymmetric encryption operations. // Specifically, openssl public encrypt() does not allow customizing // algorithms or padding.
- OaepSHA256 ); return ciphertext ; } } Go To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . import ( "context" "crypto/rand" "crypto/rsa" "crypto/sha256" "crypto/x509" "encoding/pem" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // encryptAsymmetric encrypts data on your local machine using an // 'RSA DECRYPT OAEP 2048 SHA256' public key retrieved from Cloud KMS. func encryptAsymmetric ( w io .
- GetString ( plaintext ); } } Go To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "hash/crc32" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" "google.golang.org/protobuf/types/known/wrapperspb" ) // decryptAsymmetric will attempt to decrypt a given ciphertext with an // 'RSA DECRYPT OAEP 2048 SHA256' key from Cloud KMS. func decryptAsymmetric ( w io .

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RSA DECRYPT OAEP 4096 SHA512 RSAES-OAEP 4096 bit key with a SHA512 digest.
- RSA DECRYPT OAEP 4096 SHA256 RSAES-OAEP 4096 bit key with a SHA256 digest.
- RSA DECRYPT OAEP 4096 SHA1 RSAES-OAEP 4096 bit key with a SHA1 digest.
- The fields in the name after "RSA DECRYPT " correspond to the following parameters: padding algorithm, modulus bit length, and digest algorithm.

