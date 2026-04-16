---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.047Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM support for BigQuery"
feature_slug: "cloud-ekm-support-for-bigquery"
latest_feature_date: "2019-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/destroy-restore"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/ekm"
keywords:
  - "ekm"
  - "for"
  - "can"
  - "be"
  - "used"
  - "to"
  - "encrypt"
  - "and"
---

# Cloud EKM support for BigQuery

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM can be used to encrypt and decrypt data in BigQuery.

## Extended Definition

Cloud EKM can be used to encrypt and decrypt data in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/destroy-restore](https://docs.cloud.google.com/kms/docs/destroy-restore)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)

## Supporting Pages

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- While a key is scheduled for destruction , it can't be used for cryptographic operations, and any requests to use the key fail.
- For guidance about how Google Cloud services can help meet the requirements of different compliance frameworks, see the following resources: Protecting healthcare data on Google Cloud Cloud Compliance & Regulations Resources Google Cloud FedRAMP implementation guide PCI Data Security Standard compliance Summary of best practices The following table summarizes the best practices recommended in this document: Topic Task Decide whether to use CMEK Use CMEK if you require any of the capabilities enabled by CMEK .
- For example, to create objects in an encrypted Cloud Storage bucket, a user needs only the IAM role roles/storage.objectCreator , and the Cloud Storage service agent in the same project (like service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com ) needs the IAM role roles/cloudkms.cryptoKeyEncrypterDecrypter .
- Operational overhead: Using highly granular keys might require administrative effort or additional tooling for automation to provision a large number of Cloud KMS resources and to manage access controls for service agents so they can only use the appropriate keys.

### "Destroy and restore key versions \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/destroy-restore](https://docs.cloud.google.com/kms/docs/destroy-restore)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This client only // needs to be created once, and can be reused for multiple requests.
- This client only // needs to be created once, and can be reused for multiple requests.
- After the key's configured scheduled for destruction duration has passed, the state of the key version becomes destroyed, meaning logical deletion of the key material from active systems has started, and the key material can't be recovered by the customer.
- Destroying external keys To permanently remove the association between a Cloud EKM key and an external key, you can destroy the key version.

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: CryptoKey JSON representation CryptoKeyVersion JSON representation CryptoKeyVersionState ProtectionLevel CryptoKeyVersionAlgorithm KeyOperationAttestation JSON representation AttestationFormat CertificateChains JSON representation ExternalProtectionLevelOptions JSON representation CryptoKeyPurpose CryptoKeyVersionTemplate JSON representation Methods Resource: CryptoKey A CryptoKey represents a logical key that can be used for cryptographic operations.
- ENCRYPT DECRYPT CryptoKeys with this purpose may be used with [Encrypt][KeyManagementService.Encrypt] and [Decrypt][KeyManagementService.Decrypt].
- DISABLED This version may not be used, but the key material is still available, and the version can be placed back into the ENABLED state.
- It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- For example, coordinated external keys used for symmetric encryption can be automatically rotated on a set schedule.
- Cloud EKM can be used with Bare Metal Rack HSM to create a standalone HSM solution integrated with Cloud KMS.
- If the key version is not restored before the scheduled for destruction period ends, Cloud EKM destroys its part of the key's cryptographic material and sends a destruction request to your EKM.

