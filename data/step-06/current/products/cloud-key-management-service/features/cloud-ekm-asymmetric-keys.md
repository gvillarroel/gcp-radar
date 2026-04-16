---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.027Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM asymmetric keys"
feature_slug: "cloud-ekm-asymmetric-keys"
latest_feature_date: "2021-12-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/key-management-service"
  - "https://docs.cloud.google.com/kms/docs/asymmetric-encryption"
keywords:
  - "ekm"
  - "asymmetric"
  - "keys"
  - "supports"
---

# Cloud EKM asymmetric keys

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM supports asymmetric keys.

## Extended Definition

Cloud EKM supports asymmetric keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption)

## Supporting Pages

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- ASYMMETRIC DECRYPT CryptoKeys with this purpose may be used with [AsymmetricDecrypt][KeyManagementService.AsymmetricDecrypt] and [GetPublicKey][KeyManagementService.GetPublicKey].
- ASYMMETRIC SIGN CryptoKeys with this purpose may be used with [AsymmetricSign][KeyManagementService.AsymmetricSign] and [GetPublicKey][KeyManagementService.GetPublicKey].
- JSON representation { "externalKeyUri" : string , "ekmConnectionKeyPath" : string } Fields externalKeyUri string The URI for an external resource that this CryptoKeyVersion represents. ekmConnectionKeyPath string The path to the external key material on the EKM when using [EkmConnection][] e.g., "v0/my/key".
- The resource name for this CryptoKeyVersion in the format projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ . state enum ( CryptoKeyVersionState ) The current state of the CryptoKeyVersion . protectionLevel enum ( ProtectionLevel ) Output only.

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- EKM key management from Cloud KMS When using Cloud EKM through a VPC with an external key management partner that supports the Cloud EKM control plane, you can use the Cloud KMS EKM management mode to simplify the process of maintaining external keys in your external key management partner and in Cloud EKM.
- If your EKM supports the Cloud EKM control plane, then you can enable EKM key management from Cloud KMS for your EKM connections to create coordinated external keys.
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- Overview With Cloud EKM, you can use keys that you manage within a supported external key management partner to protect data within Google Cloud.

### Cloud Key Management Service overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Supports symmetric and asymmetric keys for encryption, decryption, signing, and signature validation .
- Supports symmetric and asymmetric keys for encryption and decryption .
- Supports symmetric and asymmetric keys for encryption and decryption .
- Using Cloud KMS, you can do the following: Generate software or hardware keys, import existing keys into Cloud KMS, or link external keys in your compatible external key management (EKM) system .

### "Asymmetric encryption \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example use case for asymmetric encryption Asymmetric encryption only supports a very small plaintext size, so asymmetric encryption is generally used for encryption keys, not large pieces of data.
- Asymmetric encryption algorithms Cloud Key Management Service supports RSA algorithms for asymmetric encryption.
- For information about which algorithms Cloud KMS supports, see asymmetric encryption algorithms .
- Asymmetric encryption is the process of using a public key from a public/private key pair to encrypt plaintext, and then using the corresponding private key to decrypt the ciphertext.

