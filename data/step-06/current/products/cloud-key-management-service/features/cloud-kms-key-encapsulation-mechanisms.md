---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.812Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS key encapsulation mechanisms"
feature_slug: "cloud-kms-key-encapsulation-mechanisms"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/key-encapsulation-mechanisms"
  - "https://docs.cloud.google.com/kms/docs/release-notes"
  - "https://docs.cloud.google.com/kms/docs/creating-keys"
keywords:
  - "kms"
  - "key"
  - "encapsulation"
  - "mechanisms"
  - "supports"
  - "post"
  - "quantum"
  - "resistant"
---

# Cloud KMS key encapsulation mechanisms

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports post-quantum-resistant key encapsulation mechanisms for sharing secrets.

## Extended Definition

Cloud KMS supports post-quantum-resistant key encapsulation mechanisms for sharing secrets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/key-encapsulation-mechanisms](https://docs.cloud.google.com/kms/docs/key-encapsulation-mechanisms)
- [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys)

## Supporting Pages

### "Key encapsulation mechanisms \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/key-encapsulation-mechanisms](https://docs.cloud.google.com/kms/docs/key-encapsulation-mechanisms)
- Source ID: `site-iam-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Encapsulation and decapsulation workflow Post-quantum key encapsulation mechanisms (PQ-KEM) Cloud KMS KEMs capabilities Home Documentation Security Cloud KMS Guides Was this helpful?
- On this page Encapsulation and decapsulation workflow Post-quantum key encapsulation mechanisms (PQ-KEM) Cloud KMS KEMs capabilities A key encapsulation mechanism (KEM) is a cryptographic process that's used to establish a shared secret between two parties over an untrusted channel.
- Post-quantum key encapsulation mechanisms (PQ-KEM) Quantum computers have the potential to decrypt material encrypted by classical encryption algorithms such as the widely used RSA and ECDSA algorithms, which can make such encrypted material vulnerable to "harvest now, decrypt later" attacks.
- These algorithms have the following size values (in bytes): Algorithm Public key Ciphertext Shared Secret ML KEM 768 1184 1088 32 ML KEM 1024 1568 1568 32 KEM XWING 1216 1120 32 Cloud KMS KEMs capabilities Cloud KMS provides the following capabilities related to key encapsulation mechanisms: Creating a KEM key with key purpose of KEY ENCAPSULATION and a key encapsulation algorithm .

### "Cloud KMS release notes \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- February 21, 2025 Feature Cloud KMS now supports the following post-quantum computing (PQC) algorithms for digital signatures in Public Preview: PQ SIGN ML DSA 65 : Module-lattice-based digital signature algorithm PQ SIGN SLH DSA SHA2 128S : Stateless hash-based digital signature algorithm To Retrieve a public key for a PQC key, you must use the gcloud CLI or the Cloud KMS REST API.
- September 23, 2025 Feature Cloud KMS now supports key encapsulation mechanisms (KEMs) for sharing secrets in Preview.
- You can use the following KEM algorithms: ML KEM 768 ML KEM 1024 KEM XWING For more information about key encapsulation mechanisms, see Key encapsulation mechanisms .
- To learn how to use key encapsulation mechanisms to share secrets, see Encapsulate and decapsulate using KEMs .

### Create a key \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Before you begin Required roles Create a symmetric encryption key Create a symmetric encryption key with custom automatic rotation Set the duration of the 'scheduled for destruction' state Create an asymmetric key Create an asymmetric decryption key Create an asymmetric signing key Create a KEM key Retrieve the public key Convert a public key to JWK format Control access to asymmetric keys Create a MAC signing key What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- Create a key with purpose KEY ENCAPSULATION by calling CryptoKey.create . curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "KEY ENCAPSULATION", "versionTemplate": {"algorithm": " ALGORITHM "}}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- To create a Single-tenant Cloud HSM key, set PROTECTION LEVEL to HSM SINGLE TENANT and add the --crypto-key-backend flag to the kms keys create command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": "HSM SINGLE TENANT", "algorithm": " ALGORITHM ", "crypto-key-backend": "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " }}' Replace the following: INSTANCE PROJECT : the identifier of the project where your Single-tenant Cloud HSM instance exists.
- To create a Single-tenant Cloud HSM key, add the cryptoKeyBackend field to the CryptoKey.create request body: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "MAC", "versionTemplate": { "protectionLevel": " PROTECTION LEVEL ", "algorithm": " ALGORITHM ", "cryptoKeyBackend": "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " }}' Replace the following: INSTANCE PROJECT : the identifier of the project where your Single-tenant Cloud HSM instance exists.

