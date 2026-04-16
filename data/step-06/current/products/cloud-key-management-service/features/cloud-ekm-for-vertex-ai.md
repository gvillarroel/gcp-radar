---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.025Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM for Vertex AI"
feature_slug: "cloud-ekm-for-vertex-ai"
latest_feature_date: "2022-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/key-management-service"
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/reference/ekm_errors"
  - "https://docs.cloud.google.com/kms/docs/create-ekm-connection"
keywords:
  - "ekm"
  - "for"
  - "vertex"
  - "ai"
  - "supports"
---

# Cloud EKM for Vertex AI

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM supports Vertex AI.

## Extended Definition

Cloud EKM supports Vertex AI.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors)
- [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)

## Supporting Pages

### Cloud Key Management Service overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Agent Assist AlloyDB for PostgreSQL Anti Money Laundering AI Apigee Apigee API hub Application Integration Artifact Registry Backup and DR Service Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud TPU Cloud Workstations Colab Enterprise Compute Engine Conversational Analytics API Customer Experience Insights Database Migration Service Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced Eventarc Standard Filestore Firestore Gemini Code Assist Gemini Enterprise - NotebookLM Enterprise Gemini Enterprise Enterprise Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Service Extensions Spanner Speech-to-Text Vertex AI Vertex AI Search Vertex AI Workbench Vertex AI Workbench instances Workflows Workload Manager Any Level 1 Level 2 Level 3 Clear all Encryption type Cost Compatible services Features Google-owned and Google-managed encryption keys (Google Cloud default encryption) Included All Google Cloud services that store customer data No configuration required.
- For more information about the service level agreement (SLA) that applies when using Cloud KMS, Cloud HSM, and Cloud EKM keys, see Service Level Agreement .
- Supports symmetric and asymmetric keys for encryption, decryption, signing, and signature validation .
- Supports symmetric and asymmetric keys for encryption and decryption .

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- EKM key management from Cloud KMS When using Cloud EKM through a VPC with an external key management partner that supports the Cloud EKM control plane, you can use the Cloud KMS EKM management mode to simplify the process of maintaining external keys in your external key management partner and in Cloud EKM.
- If your EKM supports the Cloud EKM control plane, then you can enable EKM key management from Cloud KMS for your EKM connections to create coordinated external keys.
- To learn more, choose a Cloud EKM partner that supports single-tenant HSMs and review the requirements for Bare Metal Rack HSMs .

### "Cloud EKM error reference \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- It contains two violation structures. violation[0] contains information about the state of the Cloud EKM key. violation[1] contains information about the attempt to contact the external key management partner system.
- EKM ELEMENT can be one of these value: key , crypto space , or EKM host . google.rpc.Status.message violation[1].type (Error domain) Could not validate the TLS server certificate for the EKM ELEMENT .
- Cloud EKM refers to this information as the "error domain".
- Could not resolve the domain name for EKM ELEMENT .

### "Create an EKM connection \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- This information is also visible each time you use the Google Cloud console to create a Cloud EKM key. service- PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com Ensure gcloud CLI is up to date If you're going to use the Google Cloud CLI, ensure that it's up-to-date with the following command: gcloud CLI gcloud components update Prepare a VPC network There are two options when setting up a VPC network: Auto mode network Custom mode network By default, new projects contain an auto mode network that is pre-populated with firewall rules .
- Ensure a Cloud EKM service account exists for the project. gcloud CLI gcloud beta services identity create \ --service=cloudkms.googleapis.com \ --project= KEY PROJECT ID Grant the servicedirectory.viewer and servicedirectory.pscAuthorizedService in your VPC project to service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com For help with getting your project ID and number, see Creating and managing projects . gcloud CLI gcloud projects add-iam-policy-binding VPC PROJECT ID \ --member=serviceAccount:service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com \ --role=roles/servicedirectory.viewer gcloud projects add-iam-policy-binding VPC PROJECT ID \ --member=serviceAccount:service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com \ --role=roles/servicedirectory.pscAuthorizedService Create an EKM connection To connect your external key manager to Cloud EKM, create an EKM connection in your key project .
- To create an EKM connection for coordinated external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] "keyManagementMode": "CLOUD KMS", "cryptoSpacePath": " CRYPTO SPACE PATH " }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.
- To create an EKM connection for manually managed external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.

