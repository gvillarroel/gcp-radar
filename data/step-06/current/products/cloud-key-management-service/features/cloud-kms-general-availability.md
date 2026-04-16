---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.076Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS General Availability"
feature_slug: "cloud-kms-general-availability"
latest_feature_date: "2017-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/autokey-overview"
  - "https://docs.cloud.google.com/kms/docs/cmek"
keywords:
  - "kms"
  - "general"
  - "availability"
  - "became"
  - "generally"
  - "available"
  - "as"
  - "managed"
---

# Cloud KMS General Availability

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS became generally available as a managed encryption key service.

## Extended Definition

Cloud KMS became generally available as a managed encryption key service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/autokey-overview](https://docs.cloud.google.com/kms/docs/autokey-overview)
- [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek)

## Supporting Pages

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- Considerations When you use a Cloud EKM key, Google has no control over the availability of your externally managed key in the external key management partner system.
- With EKM key management from Cloud KMS enabled, Cloud EKM can request the following changes in your EKM: Create a key: When you create an externally managed key in Cloud KMS using a compatible EKM connection, Cloud EKM sends your key creation request to your EKM.
- Destroy a key: When you destroy a key version for an externally-managed key in Cloud KMS using a compatible EKM connection, Cloud KMS schedules the key version for destruction in Cloud KMS.

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For workloads that require high availability or disaster recovery capabilities across multiple locations, it's your responsibility to assess whether your workload is resilient in the event that Cloud KMS becomes unavailable in a certain region.
- For example, a Compute Engine persistent disk encrypted with a Cloud KMS key from region A can't be recreated in region B in a disaster recovery scenario where region A is unavailable.
- This guide assumes that you're already familiar with Cloud Key Management Service (Cloud KMS) and customer-managed encryption keys and have read the Cloud KMS deep dive .
- The following table lists which IAM roles are typically associated with which job function: IAM role Description NIST SP 800-152 designation roles/cloudkms.admin Provides access to Cloud KMS resources, except for access to restricted resource types and cryptographic operations.

### Autokey overview \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/autokey-overview](https://docs.cloud.google.com/kms/docs/autokey-overview)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Cloud KMS Autokey simplifies creating and using customer-managed encryption keys (CMEKs) by automating provisioning and assignment.
- You can use Autokey with a centralized key management model (Generally Available) or a delegated key management model ( Preview ).
- One key per resource Dataflow dataflow.googleapis.com/Job One key per resource Managed Service for Apache Spark dataproc.googleapis.com/Cluster dataproc.googleapis.com/SessionTemplate dataproc.googleapis.com/WorkflowTemplate dataproc.googleapis.com/Batch dataproc.googleapis.com/Session For Cluster, SessionTemplate, and WorkflowTemplate resources: One key per resource For Batch and Session resources: One key per location within a project Limitations The gcloud CLI is not available for Autokey resources.
- Enable centralized key management Before you can use Autokey for centralized key management in a folder, an administrator must complete the following one-time setup tasks: Enable Cloud KMS Autokey on a folder and identify the Cloud KMS project that will contain Autokey resources for that folder.

### "Customer-managed encryption keys (CMEK) \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- The following factors differentiate Google Cloud's default encryption at rest from customer-managed keys: Type of key Cloud KMS Autokey Cloud KMS customer-managed (manual) Google-owned and Google-managed encryption key (Google default encryption) Can view key metadata Yes Yes No Ownership of keys 1 Customer Customer Google Can manage 2 and control 3 keys Key creation and assignment is automated.
- Home Documentation Security Cloud KMS Guides Send feedback Customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- Customer-managed encryption keys (CMEK) with Cloud KMS Autokey Cloud KMS Autokey simplifies creating and managing CMEKs by automating provisioning and assignment.
- Each project resource has a special service account called a service agent that performs encryption and decryption with customer-managed keys.

