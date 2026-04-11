---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.812Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud HSM for Google Workspace client-side encryption"
feature_slug: "cloud-hsm-for-google-workspace-client-side-encryption"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/client-side-encryption"
  - "https://docs.cloud.google.com/kms/docs/onboard-hsm-workspace"
  - "https://docs.cloud.google.com/kms/docs/hsm-for-workspace"
keywords:
  - "hsm"
  - "for"
  - "workspace"
  - "client"
  - "side"
  - "encryption"
  - "lets"
  - "you"
---

# Cloud HSM for Google Workspace client-side encryption

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud HSM for Google Workspace lets you use Cloud HSM keys for client-side encryption in Google Workspace.

## Extended Definition

Cloud HSM for Google Workspace lets you use Cloud HSM keys for client-side encryption in Google Workspace.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption)
- [https://docs.cloud.google.com/kms/docs/onboard-hsm-workspace](https://docs.cloud.google.com/kms/docs/onboard-hsm-workspace)
- [https://docs.cloud.google.com/kms/docs/hsm-for-workspace](https://docs.cloud.google.com/kms/docs/hsm-for-workspace)

## Supporting Pages

### "Client-side encryption with Tink and Cloud KMS \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Overview Before you begin Required roles Envelope encryption with Tink Connect Tink and Cloud KMS Initialize Tink and encrypt data What's next?
- When using client-side encryption, you're responsible for creating and managing your encryption keys and encrypting your data before sending it to the cloud.
- Overview Client-side encryption is any encryption performed prior to sending your data to the cloud.
- StorageOptions ; import com.google.crypto.tink.Aead ; import com.google.crypto.tink.KmsClient ; import com.google.crypto.tink.aead.AeadConfig ; import com.google.crypto.tink.aead.KmsEnvelopeAead ; import com.google.crypto.tink.aead.PredefinedAeadParameters ; import com.google.crypto.tink.integration.gcpkms.GcpKmsClient ; import java.io.File ; import java.io.FileInputStream ; import java.io.FileOutputStream ; import java.nio.file.Files ; import java.nio.file.Paths ; import java.security.GeneralSecurityException ; import java.util.Arrays ; / A command-line utility for encrypting small files with envelope encryption and uploading the results to GCS. <p>The CLI takes the following required arguments: <ul> <li>mode: "encrypt" or "decrypt" to indicate if you want to encrypt or decrypt. <li>kek-uri: The URI for the Cloud KMS key to be used for envelope encryption. <li>gcp-credential-file: Name of the file with the GCP credentials (in JSON format) that can access the Cloud KMS key and the GCS input/output blobs. <li>gcp-project-id: The ID of the GCP project hosting the GCS blobs that you want to encrypt or decrypt. </ul> <p>When mode is "encrypt", it takes the following additional arguments: <ul> <li>local-input-file: Read the plaintext from this local file. <li>gcs-output-blob: Write the encryption result to this blob in GCS.

### "Onboard to Cloud HSM for Google Workspace \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/onboard-hsm-workspace](https://docs.cloud.google.com/kms/docs/onboard-hsm-workspace)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Before you begin Compatible locations Set up a Google Cloud project for Cloud KMS Manage CHGWS service endpoint Set up Cloud KMS keys Request onboarding and endpoint creation Configure CHGWS endpoint in Google Workspace CSE Migrate Endpoints Delete or disable endpoints Enable endpoints What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- On this page Before you begin Compatible locations Set up a Google Cloud project for Cloud KMS Manage CHGWS service endpoint Set up Cloud KMS keys Request onboarding and endpoint creation Configure CHGWS endpoint in Google Workspace CSE Migrate Endpoints Delete or disable endpoints Enable endpoints What's next This page describes how to onboard Cloud HSM for Google Workspace (CHGWS), the encryption key service for Google Workspace offered by Cloud Key Management Service (Cloud KMS).
- Enable Google Workspace Client-side Encryption (CSE) in your Google Workspace.
- Onboard to Cloud HSM for Google Workspace Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.

### "Cloud HSM for Google Workspace \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/hsm-for-workspace](https://docs.cloud.google.com/kms/docs/hsm-for-workspace)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page How Cloud HSM for Google Workspace works Features and benefits What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- On this page How Cloud HSM for Google Workspace works Features and benefits What's next Cloud HSM for Google Workspace is an encryption key service that provides client-side encryption (CSE) for Google Workspace.
- Cloud HSM for Google Workspace lets you have greater control over your encryption keys, and can help you meet regulatory and compliance requirements.
- How Cloud HSM for Google Workspace works Cloud HSM for Google Workspace uses envelope encryption to protect your Google Workspace data such as files and emails.

