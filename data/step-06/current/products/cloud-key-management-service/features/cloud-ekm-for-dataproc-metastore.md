---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.017Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM for Dataproc Metastore"
feature_slug: "cloud-ekm-for-dataproc-metastore"
latest_feature_date: "2022-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/key-management-service"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/EkmConfig"
  - "https://docs.cloud.google.com/kms/docs/reference/ekm_errors"
keywords:
  - "ekm"
  - "for"
  - "dataproc"
  - "metastore"
  - "supports"
---

# Cloud EKM for Dataproc Metastore

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM supports Dataproc Metastore.

## Extended Definition

Cloud EKM supports Dataproc Metastore.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/EkmConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/EkmConfig)
- [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors)

## Supporting Pages

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- If your EKM supports the Cloud EKM control plane, then you can enable EKM key management from Cloud KMS for your EKM connections to create coordinated external keys.
- To learn more, choose a Cloud EKM partner that supports single-tenant HSMs and review the requirements for Bare Metal Rack HSMs .
- EKM key management from Cloud KMS When using Cloud EKM through a VPC with an external key management partner that supports the Cloud EKM control plane, you can use the Cloud KMS EKM management mode to simplify the process of maintaining external keys in your external key management partner and in Cloud EKM.

### Cloud Key Management Service overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Agent Assist AlloyDB for PostgreSQL Anti Money Laundering AI Apigee Apigee API hub Application Integration Artifact Registry Backup and DR Service Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud TPU Cloud Workstations Colab Enterprise Compute Engine Conversational Analytics API Customer Experience Insights Database Migration Service Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced Eventarc Standard Filestore Firestore Gemini Code Assist Gemini Enterprise - NotebookLM Enterprise Gemini Enterprise Enterprise Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Service Extensions Spanner Speech-to-Text Vertex AI Vertex AI Search Vertex AI Workbench Vertex AI Workbench instances Workflows Workload Manager Any Level 1 Level 2 Level 3 Clear all Encryption type Cost Compatible services Features Google-owned and Google-managed encryption keys (Google Cloud default encryption) Included All Google Cloud services that store customer data No configuration required.
- For more information about the service level agreement (SLA) that applies when using Cloud KMS, Cloud HSM, and Cloud EKM keys, see Service Level Agreement .
- Supports symmetric and asymmetric keys for encryption, decryption, signing, and signature validation .
- Supports symmetric and asymmetric keys for encryption and decryption .

### EkmConfig \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/EkmConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/EkmConfig)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The resource name for the EkmConfig in the format projects/ /locations/ /ekmConfig . defaultEkmConnection string Optional.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
- JSON representation An EkmConfig is a singleton resource that represents configuration parameters that apply to all CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL VPC in a given project and location.
- Home Documentation Security Cloud KMS Reference Send feedback EkmConfig Stay organized with collections Save and categorize content based on your preferences.

### "Cloud EKM error reference \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors)
- Source ID: `site-api-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- It contains two violation structures. violation[0] contains information about the state of the Cloud EKM key. violation[1] contains information about the attempt to contact the external key management partner system.
- EKM ELEMENT can be one of these value: key , crypto space , or EKM host . google.rpc.Status.message violation[1].type (Error domain) Could not validate the TLS server certificate for the EKM ELEMENT .
- If you observe frequent timeouts or network errors, ensure that the geographic location of your Cloud EKM keys as near as possible to the region you use for the external keys.
- Depending on the type of error, you may need to contact Cloud EKM support or support for the external key management partner system.

