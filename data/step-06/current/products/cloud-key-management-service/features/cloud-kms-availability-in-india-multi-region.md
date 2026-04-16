---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.014Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS availability in india multi-region"
feature_slug: "cloud-kms-availability-in-india-multi-region"
latest_feature_date: "2023-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/reference/rest"
  - "https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm"
keywords:
  - "kms"
  - "availability"
  - "in"
  - "india"
  - "multi"
  - "region"
  - "and"
  - "ekm"
---

# Cloud KMS availability in india multi-region

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS and Cloud EKM resources are available in the india multi-regional location.

## Extended Definition

Cloud KMS and Cloud EKM resources are available in the india multi-regional location.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)

## Supporting Pages

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Cloud EKM over the internet: available in most Google Cloud locations where Cloud KMS is available, including regional and multi-regional locations.
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- EKM key management from Cloud KMS When using Cloud EKM through a VPC with an external key management partner that supports the Cloud EKM control plane, you can use the Cloud KMS EKM management mode to simplify the process of maintaining external keys in your external key management partner and in Cloud EKM.
- The following metrics can help you understand your EKM usage: cloudkms.googleapis.com/ekm/external/request latencies cloudkms.googleapis.com/ekm/external/request count For more information about these metrics, see cloudkms metrics .

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- For workloads that require high availability or disaster recovery capabilities across multiple locations, it's your responsibility to assess whether your workload is resilient in the event that Cloud KMS becomes unavailable in a certain region.
- Multi-region resources (such as a BigQuery dataset in the us multi-region) must use a key ring and CMEK in the same multi-region or dual-region.
- Single-region and zonal resources can't use a multi-region key ring other than global .
- For example, to create objects in an encrypted Cloud Storage bucket, a user needs only the IAM role roles/storage.objectCreator , and the Cloud Storage service agent in the same project (like service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com ) needs the IAM role roles/cloudkms.cryptoKeyEncrypterDecrypter .

### Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.projects.locations.ekmConnections Methods create POST /v1/{parent=projects/ /locations/ }/ekmConnections Creates a new EkmConnection in a given Project and Location. get GET /v1/{name=projects/ /locations/ /ekmConnections/ } Returns metadata for a given EkmConnection . getIamPolicy GET /v1/{resource=projects/ /locations/ /ekmConnections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/ekmConnections Lists EkmConnections . patch PATCH /v1/{ekmConnection.name=projects/ /locations/ /ekmConnections/ } Updates an EkmConnection 's metadata. setIamPolicy POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:testIamPermissions Returns permissions that a caller has on the specified resource. verifyConnectivity GET /v1/{name=projects/ /locations/ /ekmConnections/ }:verifyConnectivity Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection .
- REST Resource: v1.folders REST Resource: v1.organizations REST Resource: v1.projects REST Resource: v1.projects.locations REST Resource: v1.projects.locations.ekmConfig REST Resource: v1.projects.locations.ekmConnections REST Resource: v1.projects.locations.keyHandles REST Resource: v1.projects.locations.keyRings REST Resource: v1.projects.locations.keyRings.cryptoKeys REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions REST Resource: v1.projects.locations.keyRings.importJobs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.retiredResources REST Resource: v1.projects.locations.singleTenantHsmInstances REST Resource: v1.projects.locations.singleTenantHsmInstances.proposals Service: cloudkms.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations Methods generateRandomBytes POST /v1/{location=projects/ /locations/ }:generateRandomBytes Generate random bytes using the Cloud KMS randomness source in the provided location. get GET /v1/{name=projects/ /locations/ } Gets information about a location. getEkmConfig GET /v1/{name=projects/ /locations/ /ekmConfig} Returns the EkmConfig singleton resource for a given project and location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service. updateEkmConfig PATCH /v1/{ekmConfig.name=projects/ /locations/ /ekmConfig} Updates the EkmConfig singleton resource for a given project and location.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudkms.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.

### "Create and manage a Single-tenant Cloud HSM instance \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " \ --required-challenge-replies = " SIGNED REQUIRED CHALLENGE LIST " Replace the following: SIGNED QUORUM CHALLENGE LIST : a JSON-formatted array of challenges signed using private keys that are already registered, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- To get the permissions that you need to create, manage, and use Single-tenant Cloud HSM instances, ask your administrator to grant you the following IAM roles on the project or a parent resource: Create proposals: Cloud KMS single-tenant HSM Proposer ( cloudkms.hsmSingleTenantProposer ) Approve proposals: Cloud KMS single-tenant HSM Quorum Member ( cloudkms.hsmSingleTenantQuorumMember ) Execute proposals: Cloud KMS single-tenant HSM Executor ( cloudkms.hsmSingleTenantExecutor ) Create keys: Cloud KMS single-tenant HSM Key Creator ( roles/cloudkms.hsmSingleTenantKeyCreator ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " Replace SIGNED QUORUM CHALLENGE LIST with a JSON-formatted array of challenges, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " Replace SIGNED QUORUM CHALLENGE LIST with a JSON-formatted array of challenges, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.

