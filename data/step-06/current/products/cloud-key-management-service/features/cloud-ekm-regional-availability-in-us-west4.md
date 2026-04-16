---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.041Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud EKM regional availability in us-west4"
feature_slug: "cloud-ekm-regional-availability-in-us-west4"
latest_feature_date: "2020-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/reference/rest"
  - "https://docs.cloud.google.com/kms/docs/create-ekm-connection"
keywords:
  - "ekm"
  - "regional"
  - "availability"
  - "in"
  - "us"
  - "west4"
  - "resources"
  - "are"
---

# Cloud EKM regional availability in us-west4

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud EKM resources are available in the us-west4 region.

## Extended Definition

Cloud EKM resources are available in the us-west4 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)

## Supporting Pages

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- For guidance about how Google Cloud services can help meet the requirements of different compliance frameworks, see the following resources: Protecting healthcare data on Google Cloud Cloud Compliance & Regulations Resources Google Cloud FedRAMP implementation guide PCI Data Security Standard compliance Summary of best practices The following table summarizes the best practices recommended in this document: Topic Task Decide whether to use CMEK Use CMEK if you require any of the capabilities enabled by CMEK .
- If you want to follow a different granularity strategy, consider the following trade-offs of different patterns: High granularity keys —for example, one key for each individual resource More control to safely disable key versions: Disabling or destroying a key version that is used for a narrow scope has lower risk of affecting other resources than disabling or destroying a shared key.
- For most organizations, this strategy provides a good balance between the overhead of maintaining many highly granular keys and the potential risks of using less granular keys that are shared between many projects, services, or resources.
- Monitor key usage You can view key usage with the Cloud KMS inventory API to help you identify Google Cloud resources in your organization that are dependent on and protected by Cloud KMS keys.

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- Considerations When you use a Cloud EKM key, Google has no control over the availability of your externally managed key in the external key management partner system.
- We recommend only using a multi-region with Cloud EKM if your chosen external key manager provides low latency to all areas of that multi-region.
- EKM key management from Cloud KMS Coordinated external keys are made possible by EKM connections that use EKM key management from Cloud KMS.

### Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca https://cloudkms.googleapis.com REST Resource: v1.folders Methods getAutokeyConfig GET /v1/{name=folders/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=folders/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=folders/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=folders/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- REST Resource: v1.folders REST Resource: v1.organizations REST Resource: v1.projects REST Resource: v1.projects.locations REST Resource: v1.projects.locations.ekmConfig REST Resource: v1.projects.locations.ekmConnections REST Resource: v1.projects.locations.keyHandles REST Resource: v1.projects.locations.keyRings REST Resource: v1.projects.locations.keyRings.cryptoKeys REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions REST Resource: v1.projects.locations.keyRings.importJobs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.retiredResources REST Resource: v1.projects.locations.singleTenantHsmInstances REST Resource: v1.projects.locations.singleTenantHsmInstances.proposals Service: cloudkms.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions Methods asymmetricDecrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:asymmetricDecrypt Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC DECRYPT. asymmetricSign POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:asymmetricSign Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey . create POST /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions Create a new CryptoKeyVersion in a CryptoKey . decapsulate POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:decapsulate Decapsulates data that was encapsulated with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose KEY ENCAPSULATION. delete DELETE /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Permanently deletes the given CryptoKeyVersion . destroy POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:destroy Schedule a CryptoKeyVersion for destruction. get GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Returns metadata for a given CryptoKeyVersion . getPublicKey GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }/publicKey Returns the public key for the given CryptoKeyVersion . import POST /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions:import Import wrapped key material into a CryptoKeyVersion . list GET /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions Lists CryptoKeyVersions . macSign POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:macSign Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key. macVerify POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:macVerify Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful. patch PATCH /v1/{cryptoKeyVersion.name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Update a CryptoKeyVersion 's metadata. rawDecrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:rawDecrypt Decrypts data that was originally encrypted using a raw cryptographic mechanism. rawEncrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:rawEncrypt Encrypts data using portable cryptographic primitives. restore POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:restore Restore a CryptoKeyVersion in the DESTROY SCHEDULED state.
- REST Resource: v1.projects.locations.keyRings.cryptoKeys Methods create POST /v1/{parent=projects/ /locations/ /keyRings/ }/cryptoKeys Create a new CryptoKey within a KeyRing . decrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ }:decrypt Decrypts data that was protected by Encrypt . delete DELETE /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ } Permanently deletes the given CryptoKey . encrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ }:encrypt Encrypts data, so that it can only be recovered by a call to Decrypt . get GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ } Returns metadata for a given CryptoKey , as well as its primary CryptoKeyVersion . getIamPolicy GET /v1/{resource=projects/ /locations/ /keyRings/ /cryptoKeys/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ /keyRings/ }/cryptoKeys Lists CryptoKeys . patch PATCH /v1/{cryptoKey.name=projects/ /locations/ /keyRings/ /cryptoKeys/ } Update a CryptoKey . setIamPolicy POST /v1/{resource=projects/ /locations/ /keyRings/ /cryptoKeys/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /keyRings/ /cryptoKeys/ }:testIamPermissions Returns permissions that a caller has on the specified resource. updatePrimaryVersion POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ }:updatePrimaryVersion Update the version of a CryptoKey that will be used in Encrypt .

### "Create an EKM connection \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- To create an EKM connection for coordinated external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] "keyManagementMode": "CLOUD KMS", "cryptoSpacePath": " CRYPTO SPACE PATH " }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.
- To create an EKM connection for manually managed external keys, run the following command: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConnections" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data '{ "name": " EKM CONNECTION ", "serviceResolvers": [ { "serviceDirectoryService": " SERVICE DIRECTORY SERVICE ", "hostname": " HOSTNAME ", "serverCertificates": [ { SERVER CERTIFICATES } ] } ] }' Replace the following: PROJECT ID : the ID of the project where you want to create the EKM connection.
- This information is also visible each time you use the Google Cloud console to create a Cloud EKM key. service- PROJECT NUMBER @gcp-sa-ekms.iam.gserviceaccount.com Ensure gcloud CLI is up to date If you're going to use the Google Cloud CLI, ensure that it's up-to-date with the following command: gcloud CLI gcloud components update Prepare a VPC network There are two options when setting up a VPC network: Auto mode network Custom mode network By default, new projects contain an auto mode network that is pre-populated with firewall rules .
- API To set the default EKM connection for a location, use the EkmConfig.patch method: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ekmConfig" \ --request "PATCH" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"defaultEkmConnection": "projects/ PROJECT ID /locations/ LOCATION /ekmConnections/ DEFAULT EKM CONNECTION "}' Replace the following: PROJECT ID : the ID of the project for which you want to set a default EKM connection.

