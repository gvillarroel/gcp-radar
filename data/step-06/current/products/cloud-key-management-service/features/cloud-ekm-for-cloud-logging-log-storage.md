---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.021Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM for Cloud Logging log storage"
feature_slug: "cloud-ekm-for-cloud-logging-log-storage"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/audit-logging"
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/ekm"
keywords:
  - "ekm"
  - "for"
  - "logging"
  - "log"
  - "storage"
  - "supports"
  - "in"
---

# Cloud EKM for Cloud Logging log storage

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM supports log storage in Cloud Logging.

## Extended Definition

Cloud EKM supports log storage in Cloud Logging.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging)
- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)

## Supporting Pages

### Cloud Key Management Service audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.kms.v1.Autokey.GetKeyHandle google.cloud.kms.v1.Autokey.ListKeyHandles google.cloud.kms.v1.AutokeyAdmin.GetAutokeyConfig google.cloud.kms.v1.AutokeyAdmin.ShowEffectiveAutokeyConfig GetEkmConfig GetEkmConnection ListEkmConnections VerifyConnectivity GetCryptoKey GetCryptoKeyVersion GetImportJob GetKeyRing ListCryptoKeyVersions ListCryptoKeys ListImportJobs ListKeyRings GetIamPolicy GetOperation ADMIN WRITE google.cloud.kms.v1.Autokey.CreateKeyHandle (LRO) google.cloud.kms.v1.AutokeyAdmin.UpdateAutokeyConfig CreateEkmConnection UpdateEkmConfig UpdateEkmConnection CreateCryptoKey CreateCryptoKeyVersion CreateImportJob CreateKeyRing DestroyCryptoKeyVersion ImportCryptoKeyVersion RestoreCryptoKeyVersion UpdateCryptoKey UpdateCryptoKeyPrimaryVersion UpdateCryptoKeyVersion SetIamPolicy DATA READ AsymmetricDecrypt AsymmetricSign Decrypt Encrypt GetPublicKey MacSign MacVerify RawDecrypt RawEncrypt API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Key Management Service. google.cloud.kms.v1.Autokey The following audit logs are associated with methods belonging to google.cloud.kms.v1.Autokey .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud Key Management Service audit logs use the service name cloudkms.googleapis.com .
- Filter for this method : protoPayload.methodName="UpdateEkmConnection" VerifyConnectivity Method : VerifyConnectivity Audit log type : Data access Permissions : cloudkms.ekmConnections.verifyConnectivity - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="GetOperation" Methods that don't produce audit logs A method might not produce audit logs for one or more of the following reasons: It is a high volume method involving significant log generation and storage costs.

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud KMS Inventory Service audit logs use the service name kmsinventory.googleapis.com .
- This document describes audit logging for Cloud KMS Inventory Service.
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary" SearchProtectedResources Method : google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources Audit log type : Data access Permissions : cloudkms.cryptoKeys.get - ADMIN READ cloudkms.protectedResources.search - ADMIN READ Method is a long-running or streaming operation : No.
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud KMS Inventory Service. google.cloud.kms.inventory.v1.KeyDashboardService The following audit logs are associated with methods belonging to google.cloud.kms.inventory.v1.KeyDashboardService .

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Enable and aggregate audit logging We recommend that you aggregate Cloud KMS Admin Activity audit logs (along with Admin Activity logs for all services) in a centralized location for all resources in your organization.
- Before enabling data access logs, we recommend that you define a clear use case for the additional logs and assess how your logging costs will increase.
- Enable and aggregate audit logging Aggregate administrative activity audit logs for all resources in your organization.
- For example, to create objects in an encrypted Cloud Storage bucket, a user needs only the IAM role roles/storage.objectCreator , and the Cloud Storage service agent in the same project (like service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com ) needs the IAM role roles/cloudkms.cryptoKeyEncrypterDecrypter .

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- If your EKM supports the Cloud EKM control plane, then you can enable EKM key management from Cloud KMS for your EKM connections to create coordinated external keys.
- To learn more, choose a Cloud EKM partner that supports single-tenant HSMs and review the requirements for Bare Metal Rack HSMs .
- Enable audit logging in your external key manager to capture access to and usage of your EKM keys.

