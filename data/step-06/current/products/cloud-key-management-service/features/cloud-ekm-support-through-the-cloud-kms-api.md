---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.048Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM support through the Cloud KMS API"
feature_slug: "cloud-ekm-support-through-the-cloud-kms-api"
latest_feature_date: "2019-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/create-ekm-connection"
  - "https://docs.cloud.google.com/kms/docs/reference/rest"
  - "https://docs.cloud.google.com/kms/docs/key-management-service"
keywords:
  - "ekm"
  - "through"
  - "the"
  - "kms"
  - "api"
  - "can"
  - "be"
  - "used"
---

# Cloud EKM support through the Cloud KMS API

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM can be used directly through the Cloud KMS API for encryption and decryption.

## Extended Definition

Cloud EKM can be used directly through the Cloud KMS API for encryption and decryption.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)

## Supporting Pages

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- EKM key management from Cloud KMS When using Cloud EKM through a VPC with an external key management partner that supports the Cloud EKM control plane, you can use the Cloud KMS EKM management mode to simplify the process of maintaining external keys in your external key management partner and in Cloud EKM.
- The following metrics can help you understand your EKM usage: cloudkms.googleapis.com/ekm/external/request latencies cloudkms.googleapis.com/ekm/external/request count For more information about these metrics, see cloudkms metrics .
- You can also trigger the creation or destruction of key versions in your EKM from Cloud KMS using the Google Cloud console, the gcloud CLI, the Cloud KMS API, or Cloud KMS client libraries.

### "Create an EKM connection \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- Source ID: `site-iam-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ensure a Cloud EKM service account exists for the project. gcloud CLI gcloud beta services identity create \ --service=cloudkms.googleapis.com \ --project= KEY PROJECT ID Grant the servicedirectory.viewer and servicedirectory.pscAuthorizedService in your VPC project to service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com For help with getting your project ID and number, see Creating and managing projects . gcloud CLI gcloud projects add-iam-policy-binding VPC PROJECT ID \ --member=serviceAccount:service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com \ --role=roles/servicedirectory.viewer gcloud projects add-iam-policy-binding VPC PROJECT ID \ --member=serviceAccount:service- KEY PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com \ --role=roles/servicedirectory.pscAuthorizedService Create an EKM connection To connect your external key manager to Cloud EKM, create an EKM connection in your key project .
- To create an EKM connection for coordinated external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] "keyManagementMode": "CLOUD KMS", "cryptoSpacePath": " CRYPTO SPACE PATH " }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.
- To create an EKM connection for manually managed external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.
- API To set the default EKM connection for a location, use the EkmConfig.patch method: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConfig" \ --request "PATCH" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"defaultEkmConnection": "projects/ PROJECT ID /locations/ LOCATION /ekmConnections/ DEFAULT EKM CONNECTION "}' Replace the following: PROJECT ID : the ID of the project for which you want to set a default EKM connection.

### Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.keyRings.cryptoKeys Methods create POST /v1/{parent=projects/ /locations/ /keyRings/ }/cryptoKeys Create a new CryptoKey within a KeyRing . decrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ }:decrypt Decrypts data that was protected by Encrypt . delete DELETE /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ } Permanently deletes the given CryptoKey . encrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ }:encrypt Encrypts data, so that it can only be recovered by a call to Decrypt . get GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ } Returns metadata for a given CryptoKey , as well as its primary CryptoKeyVersion . getIamPolicy GET /v1/{resource=projects/ /locations/ /keyRings/ /cryptoKeys/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ /keyRings/ }/cryptoKeys Lists CryptoKeys . patch PATCH /v1/{cryptoKey.name=projects/ /locations/ /keyRings/ /cryptoKeys/ } Update a CryptoKey . setIamPolicy POST /v1/{resource=projects/ /locations/ /keyRings/ /cryptoKeys/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /keyRings/ /cryptoKeys/ }:testIamPermissions Returns permissions that a caller has on the specified resource. updatePrimaryVersion POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ }:updatePrimaryVersion Update the version of a CryptoKey that will be used in Encrypt .
- REST Resource: v1.projects.locations.ekmConnections Methods create POST /v1/{parent=projects/ /locations/ }/ekmConnections Creates a new EkmConnection in a given Project and Location. get GET /v1/{name=projects/ /locations/ /ekmConnections/ } Returns metadata for a given EkmConnection . getIamPolicy GET /v1/{resource=projects/ /locations/ /ekmConnections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/ekmConnections Lists EkmConnections . patch PATCH /v1/{ekmConnection.name=projects/ /locations/ /ekmConnections/ } Updates an EkmConnection 's metadata. setIamPolicy POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:testIamPermissions Returns permissions that a caller has on the specified resource. verifyConnectivity GET /v1/{name=projects/ /locations/ /ekmConnections/ }:verifyConnectivity Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection .
- REST Resource: v1.folders REST Resource: v1.organizations REST Resource: v1.projects REST Resource: v1.projects.locations REST Resource: v1.projects.locations.ekmConfig REST Resource: v1.projects.locations.ekmConnections REST Resource: v1.projects.locations.keyHandles REST Resource: v1.projects.locations.keyRings REST Resource: v1.projects.locations.keyRings.cryptoKeys REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions REST Resource: v1.projects.locations.keyRings.importJobs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.retiredResources REST Resource: v1.projects.locations.singleTenantHsmInstances REST Resource: v1.projects.locations.singleTenantHsmInstances.proposals Service: cloudkms.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudkms.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.

### Cloud Key Management Service overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using Cloud KMS, you can do the following: Generate software or hardware keys, import existing keys into Cloud KMS, or link external keys in your compatible external key management (EKM) system .
- When you use Cloud KMS keys with CMEK-integrated services , you can use organization policies to ensure that CMEKs are used as specified in the policies.
- Cloud KMS keys You can use your Cloud KMS keys in custom applications using the Cloud KMS client libraries or Cloud KMS API .
- For example, you can use the Cloud KMS API or client libraries to use your Cloud KMS keys for client-side encryption .

