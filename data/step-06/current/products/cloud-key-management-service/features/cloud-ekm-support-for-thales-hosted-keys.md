---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.039Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM support for Thales-hosted keys"
feature_slug: "cloud-ekm-support-for-thales-hosted-keys"
latest_feature_date: "2020-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/create-ekm-connection"
keywords:
  - "ekm"
  - "for"
  - "thales"
  - "hosted"
  - "keys"
  - "supports"
  - "by"
---

# Cloud EKM support for Thales-hosted keys

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM supports keys hosted by Thales.

## Extended Definition

Cloud EKM supports keys hosted by Thales.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)

## Supporting Pages

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- If your EKM supports the Cloud EKM control plane, then you can enable EKM key management from Cloud KMS for your EKM connections to create coordinated external keys.
- EKM key management from Cloud KMS When using Cloud EKM through a VPC with an external key management partner that supports the Cloud EKM control plane, you can use the Cloud KMS EKM management mode to simplify the process of maintaining external keys in your external key management partner and in Cloud EKM.
- These resources include a Cloud KMS project to manage your Cloud EKM keys and an EKM connection configured for EKM key management from Cloud KMS.

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- By enforcing the use of key rings and keys in a defined region, you also enforce that resources must match the region of the key ring.
- For guidance about how Google Cloud services can help meet the requirements of different compliance frameworks, see the following resources: Protecting healthcare data on Google Cloud Cloud Compliance & Regulations Resources Google Cloud FedRAMP implementation guide PCI Data Security Standard compliance Summary of best practices The following table summarizes the best practices recommended in this document: Topic Task Decide whether to use CMEK Use CMEK if you require any of the capabilities enabled by CMEK .
- If you want to follow a different granularity strategy, consider the following trade-offs of different patterns: High granularity keys —for example, one key for each individual resource More control to safely disable key versions: Disabling or destroying a key version that is used for a narrow scope has lower risk of affecting other resources than disabling or destroying a shared key.
- Low granularity keys —for example, one key for each application, for each region, and for each environment: Requires care to safely disable key versions: Disabling or destroying a key version that is used for a broad scope requires more care than disabling or destroying a highly granular key.

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "externalKeyUri" : string , "ekmConnectionKeyPath" : string } Fields externalKeyUri string The URI for an external resource that this CryptoKeyVersion represents. ekmConnectionKeyPath string The path to the external key material on the EKM when using [EkmConnection][] e.g., "v0/my/key".
- The resource name for this CryptoKeyVersion in the format projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ . state enum ( CryptoKeyVersionState ) The current state of the CryptoKeyVersion . protectionLevel enum ( ProtectionLevel ) Output only.
- Controls the rate of automatic rotation. rotation schedule can be only one of the following: rotationPeriod string ( Duration format) nextRotationTime will be advanced by this period when the service automatically rotates a key.
- Only applicable if CryptoKeyVersions have a ProtectionLevel of [EXTERNAL VPC][CryptoKeyVersion.ProtectionLevel.EXTERNAL VPC], with the resource name in the format projects/ /locations/ /ekmConnections/ .

### "Create an EKM connection \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- When a default EKM connection is set for a project and location, new Cloud EKM by VPC keys created in key rings in that location use the indicated EKM connection unless another EKM connection is selected.
- To create an EKM connection for coordinated external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] "keyManagementMode": "CLOUD KMS", "cryptoSpacePath": " CRYPTO SPACE PATH " }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.
- To create an EKM connection for manually managed external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.
- This information is also visible each time you use the Google Cloud console to create a Cloud EKM key. service- PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com Ensure gcloud CLI is up to date If you're going to use the Google Cloud CLI, ensure that it's up-to-date with the following command: gcloud CLI gcloud components update Prepare a VPC network There are two options when setting up a VPC network: Auto mode network Custom mode network By default, new projects contain an auto mode network that is pre-populated with firewall rules .

