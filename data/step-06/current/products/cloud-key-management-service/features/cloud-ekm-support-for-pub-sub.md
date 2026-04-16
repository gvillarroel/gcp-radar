---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.035Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM support for Pub/Sub"
feature_slug: "cloud-ekm-support-for-pub-sub"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/destroy-restore"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/create-ekm-connection"
  - "https://docs.cloud.google.com/kms/docs/ekm"
keywords:
  - "ekm"
  - "for"
  - "pub"
  - "sub"
  - "can"
  - "be"
  - "used"
  - "with"
---

# Cloud EKM support for Pub/Sub

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM can be used with Pub/Sub.

## Extended Definition

Cloud EKM can be used with Pub/Sub.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/destroy-restore](https://docs.cloud.google.com/kms/docs/destroy-restore)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)

## Supporting Pages

### "Destroy and restore key versions \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/destroy-restore](https://docs.cloud.google.com/kms/docs/destroy-restore)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the key version and data encrypted with it may be subject to data retention periods.
- This client only // needs to be created once, and can be reused for multiple requests.
- This client only // needs to be created once, and can be reused for multiple requests.
- You must enable the key before it can be used.

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- For CMEK use cases, only keys with the symmetric ENCRYPT DECRYPT purpose can be used.
- For example, a Compute Engine persistent disk encrypted with a Cloud KMS key from region A can't be recreated in region B in a disaster recovery scenario where region A is unavailable.
- Operational overhead: You can define and pre-provision a known number of keys, with less effort required to ensure appropriate access controls.
- While a key is scheduled for destruction , it can't be used for cryptographic operations, and any requests to use the key fail.

### "Create an EKM connection \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ensure a Cloud EKM service account exists for the project. gcloud CLI gcloud beta services identity create \ --service=cloudkms.googleapis.com \ --project= KEY PROJECT ID Grant the servicedirectory.viewer and servicedirectory.pscAuthorizedService in your VPC project to service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com For help with getting your project ID and number, see Creating and managing projects . gcloud CLI gcloud projects add-iam-policy-binding VPC PROJECT ID \ --member=serviceAccount:service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com \ --role=roles/servicedirectory.viewer gcloud projects add-iam-policy-binding VPC PROJECT ID \ --member=serviceAccount:service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com \ --role=roles/servicedirectory.pscAuthorizedService Create an EKM connection To connect your external key manager to Cloud EKM, create an EKM connection in your key project .
- This information is also visible each time you use the Google Cloud console to create a Cloud EKM key. service- PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com Ensure gcloud CLI is up to date If you're going to use the Google Cloud CLI, ensure that it's up-to-date with the following command: gcloud CLI gcloud components update Prepare a VPC network There are two options when setting up a VPC network: Auto mode network Custom mode network By default, new projects contain an auto mode network that is pre-populated with firewall rules .
- If your EKM provider is compatible with EKM key management from Cloud KMS, the following setup and configuration steps need to be made in your EKM: Create a crypto space for your Cloud KMS-managed resources in your EKM.
- Before you begin After you complete the steps below, you can begin using Cloud EKM keys to protect your data.

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- Cloud EKM can be used with Bare Metal Rack HSM to create a standalone HSM solution integrated with Cloud KMS.
- Data encrypted with this key version cannot be decrypted after the key version is destroyed in Cloud KMS, even if the EKM has not yet destroyed the key version.
- Data encrypted using a Cloud EKM key can't be decrypted without both the external key material and the internal key material.

