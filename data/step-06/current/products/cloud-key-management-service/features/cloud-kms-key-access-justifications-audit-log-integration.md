---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.017Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS Key Access Justifications audit log integration"
feature_slug: "cloud-kms-key-access-justifications-audit-log-integration"
latest_feature_date: "2022-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/audit-logging"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig"
keywords:
  - "kms"
  - "key"
  - "access"
  - "justifications"
  - "audit"
  - "log"
  - "integration"
  - "writes"
---

# Cloud KMS Key Access Justifications audit log integration

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS writes Key Access Justifications to Cloud Audit Logs for enrolled customers.

## Extended Definition

Cloud KMS writes Key Access Justifications to Cloud Audit Logs for enrolled customers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig)

## Supporting Pages

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary" SearchProtectedResources Method : google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources Audit log type : Data access Permissions : cloudkms.cryptoKeys.get - ADMIN READ cloudkms.protectedResources.search - ADMIN READ Method is a long-running or streaming operation : No.
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud KMS Inventory Service. google.cloud.kms.inventory.v1.KeyDashboardService The following audit logs are associated with methods belonging to google.cloud.kms.inventory.v1.KeyDashboardService .
- GetProtectedResourcesSummary Method : google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary Audit log type : Data access Permissions : cloudkms.cryptoKeys.get - ADMIN READ Method is a long-running or streaming operation : No.
- ListCryptoKeys Method : google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys Audit log type : Data access Permissions : cloudkms.cryptoKeys.list - ADMIN READ Method is a long-running or streaming operation : No.

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- Enable audit logging in your external key manager to capture access to and usage of your EKM keys.
- If your organization has enabled Key Access Justifications, your external key management partner records the provided access justification and completes the request only for justification reason codes that are allowed by your Key Access Justifications policy on the external key management partner.
- Key Access Justifications When you use Cloud EKM with Key Access Justifications, each request to your external key management partner includes a field that identifies the reason for each request.

### Cloud Key Management Service audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.kms.v1.Autokey.GetKeyHandle google.cloud.kms.v1.Autokey.ListKeyHandles google.cloud.kms.v1.AutokeyAdmin.GetAutokeyConfig google.cloud.kms.v1.AutokeyAdmin.ShowEffectiveAutokeyConfig GetEkmConfig GetEkmConnection ListEkmConnections VerifyConnectivity GetCryptoKey GetCryptoKeyVersion GetImportJob GetKeyRing ListCryptoKeyVersions ListCryptoKeys ListImportJobs ListKeyRings GetIamPolicy GetOperation ADMIN WRITE google.cloud.kms.v1.Autokey.CreateKeyHandle (LRO) google.cloud.kms.v1.AutokeyAdmin.UpdateAutokeyConfig CreateEkmConnection UpdateEkmConfig UpdateEkmConnection CreateCryptoKey CreateCryptoKeyVersion CreateImportJob CreateKeyRing DestroyCryptoKeyVersion ImportCryptoKeyVersion RestoreCryptoKeyVersion UpdateCryptoKey UpdateCryptoKeyPrimaryVersion UpdateCryptoKeyVersion SetIamPolicy DATA READ AsymmetricDecrypt AsymmetricSign Decrypt Encrypt GetPublicKey MacSign MacVerify RawDecrypt RawEncrypt API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Key Management Service. google.cloud.kms.v1.Autokey The following audit logs are associated with methods belonging to google.cloud.kms.v1.Autokey .
- CreateKeyHandle Method : google.cloud.kms.v1.Autokey.CreateKeyHandle Audit log type : Admin activity Permissions : cloudkms.keyHandles.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.kms.v1.Autokey.CreateKeyHandle" GetKeyHandle Method : google.cloud.kms.v1.Autokey.GetKeyHandle Audit log type : Data access Permissions : cloudkms.keyHandles.get - ADMIN READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.kms.v1.AutokeyAdmin.GetAutokeyConfig" ShowEffectiveAutokeyConfig Method : google.cloud.kms.v1.AutokeyAdmin.ShowEffectiveAutokeyConfig Audit log type : Data access Permissions : cloudkms.projects.showEffectiveAutokeyConfig - ADMIN READ Method is a long-running or streaming operation : No.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud Key Management Service audit logs use the service name cloudkms.googleapis.com .

### "KeyAccessJustificationsPolicyConfig \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig)
- Source ID: `site-api-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud KMS Reference Send feedback KeyAccessJustificationsPolicyConfig Stay organized with collections Save and categorize content based on your preferences.
- The resource name for this KeyAccessJustificationsPolicyConfig in the format of "{organizations folders projects}/ /kajPolicyConfig". defaultKeyAccessJustificationPolicy object ( KeyAccessJustificationsPolicy ) Optional.
- JSON representation { "name" : string , "defaultKeyAccessJustificationPolicy" : { object ( KeyAccessJustificationsPolicy ) } } Fields name string Identifier.
- This is only used when a Key Access Justifications policy is not provided in the CreateCryptoKeyRequest .

