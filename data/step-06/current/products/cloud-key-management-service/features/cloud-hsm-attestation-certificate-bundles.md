---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.817Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud HSM attestation certificate bundles"
feature_slug: "cloud-hsm-attestation-certificate-bundles"
latest_feature_date: "2024-03-20"
deprecation_date: "2024-03-20"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/attest-key"
  - "https://docs.cloud.google.com/kms/docs/release-notes"
  - "https://docs.cloud.google.com/kms/docs/formatting-keys-for-import"
keywords:
  - "hsm"
  - "attestation"
  - "certificate"
  - "bundles"
  - "for"
  - "verifying"
  - "attestations"
  - "keys"
---

# Cloud HSM attestation certificate bundles

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Certificate bundles for verifying attestations for Cloud HSM keys were replaced by certificate chains; deprecated on 2024-03-20.

## Extended Definition

Certificate bundles for verifying attestations for Cloud HSM keys were replaced by certificate chains; deprecated on 2024-03-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key)
- [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- [https://docs.cloud.google.com/kms/docs/formatting-keys-for-import](https://docs.cloud.google.com/kms/docs/formatting-keys-for-import)

## Supporting Pages

### "Verifying attestations \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The --output-file flag specifies the path and filename destination for the retrieved certificates. gcloud kms keys versions get-certificate-chain key-version \ --key key-name \ --location location \ --keyring keyring-name \ --output-file [certificates-file] \ Download the script for verifying attestations and its prerequisites, and go through the documentation for the script to verify the attestation in the attestation file using the certificates in the certificates file.
- On this page Overview Before you begin Verifying the attestation Parsing the attestation's values Additional information This guide shows you how to verify attestations for Cloud HSM keys , which are always stored in a hardware security module (HSM).
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Overview Before you begin Verifying the attestation Parsing the attestation's values Additional information Home Documentation Security Cloud KMS Guides Was this helpful?
- The --attestation-file flag specifies the path and filename destination for the retrieved attestation. gcloud kms keys versions describe key-version \ --key key-name \ --location location \ --keyring keyring-name \ --attestation-file [attestation-file] \ At the Cloud Shell command-line prompt, use the gcloud kms keys versions get-certificate-chain command to retrieve the certificate chains for the key that you want to attest.

### "Cloud KMS release notes \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- March 20, 2024 Deprecated Certificate bundles for verifying attestations for Cloud HSM keys are deprecated.
- To learn how to use certificate chains to verify attestations for Cloud HSM keys, see Verifying the attestation manually .
- Additions to the API definition: New method for creating digital signatures: CryptoKeys.asymmetricSign New method for retrieving an asymmetric key's public key: CryptoKeyVersions.getPublicKey New method for decrypting data encoded with an asymmetric public key generated by Cloud KMS: CryptoKeyVersions.asymmetricDecrypt New types: CryptoKeyVersionAlgorithm CryptoKeyVersionTemplate CryptoKeyVersionView ProtectionLevel New fields: CryptoKey.versionTemplate CryptoKeyVersion.algorithm CryptoKeyVersion.attestation CryptoKeyVersion.generateTime CryptoKeyVersion.protectionLevel LocationMetadata.hsmAvailable The CryptoKey.list method now contains a versionView query parameter that lists the fields of the primary key version to include in the response.
- To learn how to verify an attestation that is in the CAVIUM V2 COMPRESSED format, see Verifying Attestations .

### "Formatting keys for import \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/formatting-keys-for-import](https://docs.cloud.google.com/kms/docs/formatting-keys-for-import)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Supported key formats Checking a symmetric key Formatting asymmetric keys Troubleshooting What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- Formatting keys for import Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
- Symmetric keys for signing (MAC keys) : Imported HMAC signing keys must have a length equal to the output length of the cryptographic hash function being used (for example, HMAC-SHA256 keys must have a length of 32 bytes), and must not be encoded.
- On this page Supported key formats Checking a symmetric key Formatting asymmetric keys Troubleshooting What's next This topic describes how to format your keys so that they can be imported by Cloud KMS as new key versions.

