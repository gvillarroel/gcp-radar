---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.837Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "End-to-end data integrity verification fields"
feature_slug: "end-to-end-data-integrity-verification-fields"
latest_feature_date: "2021-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/data-integrity-guidelines"
  - "https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/rawEncrypt"
keywords:
  - "end"
  - "to"
  - "integrity"
  - "verification"
  - "fields"
  - "kms"
  - "provides"
  - "generally"
---

# End-to-end data integrity verification fields

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS provides generally available fields for verifying end-to-end data integrity during cryptographic operations.

## Extended Definition

Cloud KMS provides generally available fields for verifying end-to-end data integrity during cryptographic operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines)
- [https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1](https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/rawEncrypt](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/rawEncrypt)

## Supporting Pages

### "Verifying end-to-end data integrity \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Automatic data protection Calculating and verifying checksums Verifying resource names Data verification diagram Data verification field summary Encrypt Decrypt AsymmetricSign AsymmetricDecrypt Decapsulate PublicKey MacSign MacVerify What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- On this page Automatic data protection Calculating and verifying checksums Verifying resource names Data verification diagram Data verification field summary Encrypt Decrypt AsymmetricSign AsymmetricDecrypt Decapsulate PublicKey MacSign MacVerify What's next This page discusses using fields in the Cloud Key Management Service API to detect and prevent unintended changes to data as it moves between client systems and Cloud KMS.
- Note: It is strongly recommended that callers utilize the integrity verification scheme described below to minimize the risk of data loss caused by in-transit data corruption.
- Verifying end-to-end data integrity Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.

### "Package google.cloud.kms.v1 \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1](https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check this field to verify that the intended resource was used for verification. success bool This field indicates whether or not the verification operation for MacVerifyRequest.mac over MacVerifyRequest.data was successful. verified data crc32c bool Integrity verification field.
- This value must be stored and provided in RawDecryptRequest.initialization vector at decryption time. tag length int32 The length of the authentication tag that is appended to the end of the ciphertext. ciphertext crc32c Int64Value Integrity verification field.
- Check this field to verify that the intended resource was used for decapsulation. shared secret bytes The decapsulated shared secret originally encapsulated with the matching public key. verified ciphertext crc32c bool Integrity verification field.
- Check this field to verify that the intended resource was used for encryption. ciphertext bytes The encrypted data. ciphertext crc32c Int64Value Integrity verification field.

### "Method: cryptoKeyVersions.rawEncrypt \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/rawEncrypt](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/rawEncrypt)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A base64-encoded string. tagLength integer The length of the authentication tag that is appended to the end of the ciphertext. ciphertextCrc32c string ( Int64Value format) Integrity verification field.
- Authorization requires the following IAM permission on the specified resource name : cloudkms.cryptoKeyVersions.useToEncrypt Request body The request body contains data with the following structure: JSON representation { "plaintext" : string , "additionalAuthenticatedData" : string , "plaintextCrc32c" : string , "additionalAuthenticatedDataCrc32c" : string , "initializationVector" : string , "initializationVectorCrc32c" : string } Fields plaintext string ( bytes format) Required.
- However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. initializationVectorCrc32c string ( Int64Value format) Integrity verification field.
- If you've set RawEncryptRequest.additional authenticated data crc32c but this field is still false, discard the response and perform a limited number of retries. verifiedInitializationVectorCrc32c boolean Integrity verification field.

