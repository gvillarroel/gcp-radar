---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.013Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM coordinated external keys"
feature_slug: "cloud-ekm-coordinated-external-keys"
latest_feature_date: "2023-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/create-ekm-connection"
  - "https://docs.cloud.google.com/kms/docs/create-external-key"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
keywords:
  - "ekm"
  - "coordinated"
  - "external"
  - "keys"
  - "supports"
  - "so"
  - "you"
  - "can"
---

# Cloud EKM coordinated external keys

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM supports coordinated external keys so you can create and manage keys in a compatible external key management system from Cloud KMS over a VPC network.

## Extended Definition

Cloud EKM supports coordinated external keys so you can create and manage keys in a compatible external key management system from Cloud KMS over a VPC network.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)

## Supporting Pages

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your EKM supports the Cloud EKM control plane, then you can enable EKM key management from Cloud KMS for your EKM connections to create coordinated external keys.
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- EKM key management from Cloud KMS When using Cloud EKM through a VPC with an external key management partner that supports the Cloud EKM control plane, you can use the Cloud KMS EKM management mode to simplify the process of maintaining external keys in your external key management partner and in Cloud EKM.
- Overview With Cloud EKM, you can use keys that you manage within a supported external key management partner to protect data within Google Cloud.

### "Create an EKM connection \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- Source ID: `site-iam-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create an EKM connection for coordinated external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] "keyManagementMode": "CLOUD KMS", "cryptoSpacePath": " CRYPTO SPACE PATH " }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.
- To create an EKM connection for manually managed external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.
- You can use external keys over VPC in Cloud KMS locations that support EKM via VPC.
- To create an EKM connection for coordinated external keys, run the following command: gcloud beta kms ekm-connections create EKM CONNECTION \ --location LOCATION \ --service-directory-service SERVICE DIRECTORY SERVICE \ --hostname HOSTNAME \ --server-certificates-files SERVER CERTIFICATE FILES \ --key-management-mode cloud-kms \ --crypto-space-path CRYPTO SPACE PATH Replace the following: EKM CONNECTION : a name for the EKM connection.

### "Create an external key \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key)
- Source ID: `site-iam-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The key shows as Pending generation until the key path is returned by your EKM and the Cloud EKM key is available. gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms keys create KEY NAME \ --keyring KEY RING \ --location LOCATION \ --purpose PURPOSE \ --default-algorithm ALGORITHM \ --protection-level "external-vpc" \ --crypto-key-backend VPC CONNECTION RESOURCE ID Replace the following: KEY NAME : the name of the key.
- If you see the Key path field, the EKM via VPC connection that you selected isn't configured for coordinated external keys.
- This page shows you how to create Cloud External Key Manager (Cloud EKM) keys on an existing key ring in Cloud Key Management Service (Cloud KMS).
- Choose a key ring in a location that is near your other resources and that supports Cloud EKM.

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Resource: CryptoKey JSON representation CryptoKeyVersion JSON representation CryptoKeyVersionState ProtectionLevel CryptoKeyVersionAlgorithm KeyOperationAttestation JSON representation AttestationFormat CertificateChains JSON representation ExternalProtectionLevelOptions JSON representation CryptoKeyPurpose CryptoKeyVersionTemplate JSON representation Methods Resource: CryptoKey A CryptoKey represents a logical key that can be used for cryptographic operations.
- JSON representation { "externalKeyUri" : string , "ekmConnectionKeyPath" : string } Fields externalKeyUri string The URI for an external resource that this CryptoKeyVersion represents. ekmConnectionKeyPath string The path to the external key material on the EKM when using [EkmConnection][] e.g., "v0/my/key".
- Only applicable if CryptoKeyVersions have a ProtectionLevel of [EXTERNAL VPC][CryptoKeyVersion.ProtectionLevel.EXTERNAL VPC], with the resource name in the format projects/ /locations/ /ekmConnections/ .
- Home Documentation Security Cloud KMS Reference Send feedback REST Resource: projects.cryptoKeys Stay organized with collections Save and categorize content based on your preferences.

