---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.043Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud External Key Manager"
feature_slug: "cloud-external-key-manager"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/create-external-key"
  - "https://docs.cloud.google.com/kms/docs/autokey-overview"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
keywords:
  - "external"
  - "key"
  - "manager"
  - "is"
  - "generally"
  - "available"
  - "lets"
  - "services"
---

# Cloud External Key Manager

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud External Key Manager is generally available; Cloud External Key Manager lets Google Cloud services use keys stored in supported external key management systems.

## Extended Definition

Cloud External Key Manager is generally available; Cloud External Key Manager lets Google Cloud services use keys stored in supported external key management systems.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key)
- [https://docs.cloud.google.com/kms/docs/autokey-overview](https://docs.cloud.google.com/kms/docs/autokey-overview)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)

## Supporting Pages

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- See Reference architectures for reliable deployment of Cloud EKM services for recommendations on configuring an External Key Manager (EKM) service deployment integrated with Cloud EKM.
- Multi-region use When you use an externally managed key with a multi-region, the metadata of the key is available in multiple data centers within the multi-region.
- If an external key is unavailable, Cloud KMS returns a FAILED PRECONDITION error and provides details in the PreconditionFailure error detail.

### "Create an external key \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The key shows as Pending generation until the key path is returned by your EKM and the Cloud EKM key is available. gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms keys create KEY NAME \ --keyring KEY RING \ --location LOCATION \ --purpose PURPOSE \ --default-algorithm ALGORITHM \ --protection-level "external-vpc" \ --crypto-key-backend VPC CONNECTION RESOURCE ID Replace the following: KEY NAME : the name of the key.
- This page shows you how to create Cloud External Key Manager (Cloud EKM) keys on an existing key ring in Cloud Key Management Service (Cloud KMS).
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create keys: cloudkms.cryptoKeys.create cloudkms.cryptoKeys.get cloudkms.cryptoKeys.list cloudkms.cryptoKeyVersions.create cloudkms.cryptoKeyVersions.get cloudkms.cryptoKeyVersions.list cloudkms.keyRings.get cloudkms.keyRings.list cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get To retrieve a public key: cloudkms.cryptoKeyVersions.viewPublicKey You might also be able to get these permissions with custom roles or other predefined roles .
- Note: The version is not created if the key URI is invalid or unreachable, or if the Google Cloud service account does not have permission to use the external key management partner key.

### Autokey overview \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/autokey-overview](https://docs.cloud.google.com/kms/docs/autokey-overview)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- One key per resource Dataflow dataflow.googleapis.com/Job One key per resource Managed Service for Apache Spark dataproc.googleapis.com/Cluster dataproc.googleapis.com/SessionTemplate dataproc.googleapis.com/WorkflowTemplate dataproc.googleapis.com/Batch dataproc.googleapis.com/Session For Cluster, SessionTemplate, and WorkflowTemplate resources: One key per resource For Batch and Session resources: One key per location within a project Limitations The gcloud CLI is not available for Autokey resources.
- Compatible services The following table lists services that are compatible with Cloud KMS Autokey: Service Protected resources Key granularity Artifact Registry artifactregistry.googleapis.com/Repository Autokey creates keys during Repository creation, used for all stored artifacts.
- One key per location within a project Secure Source Manager securesourcemanager.googleapis.com/Instance One key per resource Spanner spanner.googleapis.com/Database Spanner is only compatible with Cloud KMS Autokey when creating resources using Terraform or the REST API.
- One key per resource Pub/Sub pubsub.googleapis.com/Topic One key per resource Secret Manager secretmanager.googleapis.com/Secret Secret Manager is only compatible with Cloud KMS Autokey when creating resources using Terraform or the REST API.

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- For most organizations, this strategy provides a good balance between the overhead of maintaining many highly granular keys and the potential risks of using less granular keys that are shared between many projects, services, or resources.
- NIST SP 800-152 defines a separation of duties between the cryptographic officer who enables and manages the services of a cryptographic key management system and a user who uses those keys to encrypt or decrypt resources.
- When you use CMEK to manage encryption at rest with Google Cloud services, the IAM role to use encryption keys is assigned to the service agent of the Google Cloud service, not the individual user.
- For example, a Compute Engine persistent disk encrypted with a Cloud KMS key from region A can't be recreated in region B in a disaster recovery scenario where region A is unavailable.

