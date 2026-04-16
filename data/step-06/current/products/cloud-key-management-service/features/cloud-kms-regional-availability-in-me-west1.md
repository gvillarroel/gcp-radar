---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.016Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS regional availability in me-west1"
feature_slug: "cloud-kms-regional-availability-in-me-west1"
latest_feature_date: "2022-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/reference/rest"
  - "https://docs.cloud.google.com/kms/docs/ekm"
keywords:
  - "kms"
  - "regional"
  - "availability"
  - "in"
  - "me"
  - "west1"
  - "is"
  - "available"
---

# Cloud KMS regional availability in me-west1

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS is available in the me-west1 region.

## Extended Definition

Cloud KMS is available in the me-west1 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)

## Supporting Pages

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For workloads that require high availability or disaster recovery capabilities across multiple locations, it's your responsibility to assess whether your workload is resilient in the event that Cloud KMS becomes unavailable in a certain region.
- However, it is possible for someone with the Cloud KMS Admin role to create a key with a scheduled for destruction duration as low as 24 hours, which might not be sufficient time for you to detect an issue and restore the key.
- This key purpose always uses the GOOGLE SYMMETRIC ENCRYPTION algorithm, which uses 256-bit Advanced Encryption Standard (AES-256) keys in Galois Counter Mode (GCM), padded with Cloud KMS-internal metadata.
- Key naming: Keys created by Autokey follow this naming convention: PROJECT NUMBER - SERVICE SHORT NAME - RANDOM HEX Key export: Like all Cloud KMS keys, keys created by Autokey can't be exported.

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods OTHER google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com .
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary" SearchProtectedResources Method : google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources Audit log type : Data access Permissions : cloudkms.cryptoKeys.get - ADMIN READ cloudkms.protectedResources.search - ADMIN READ Method is a long-running or streaming operation : No.
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud KMS Inventory Service. google.cloud.kms.inventory.v1.KeyDashboardService The following audit logs are associated with methods belonging to google.cloud.kms.inventory.v1.KeyDashboardService .
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca https://cloudkms.googleapis.com REST Resource: v1.folders Methods getAutokeyConfig GET /v1/{name=folders/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=folders/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=folders/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=folders/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- REST Resource: v1.projects.locations.ekmConnections Methods create POST /v1/{parent=projects/ /locations/ }/ekmConnections Creates a new EkmConnection in a given Project and Location. get GET /v1/{name=projects/ /locations/ /ekmConnections/ } Returns metadata for a given EkmConnection . getIamPolicy GET /v1/{resource=projects/ /locations/ /ekmConnections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/ekmConnections Lists EkmConnections . patch PATCH /v1/{ekmConnection.name=projects/ /locations/ /ekmConnections/ } Updates an EkmConnection 's metadata. setIamPolicy POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:testIamPermissions Returns permissions that a caller has on the specified resource. verifyConnectivity GET /v1/{name=projects/ /locations/ /ekmConnections/ }:verifyConnectivity Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection .
- REST Resource: v1.folders REST Resource: v1.organizations REST Resource: v1.projects REST Resource: v1.projects.locations REST Resource: v1.projects.locations.ekmConfig REST Resource: v1.projects.locations.ekmConnections REST Resource: v1.projects.locations.keyHandles REST Resource: v1.projects.locations.keyRings REST Resource: v1.projects.locations.keyRings.cryptoKeys REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions REST Resource: v1.projects.locations.keyRings.importJobs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.retiredResources REST Resource: v1.projects.locations.singleTenantHsmInstances REST Resource: v1.projects.locations.singleTenantHsmInstances.proposals Service: cloudkms.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations Methods generateRandomBytes POST /v1/{location=projects/ /locations/ }:generateRandomBytes Generate random bytes using the Cloud KMS randomness source in the provided location. get GET /v1/{name=projects/ /locations/ } Gets information about a location. getEkmConfig GET /v1/{name=projects/ /locations/ /ekmConfig} Returns the EkmConfig singleton resource for a given project and location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service. updateEkmConfig PATCH /v1/{ekmConfig.name=projects/ /locations/ /ekmConfig} Updates the EkmConfig singleton resource for a given project and location.

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Cloud EKM over the internet: available in most Google Cloud locations where Cloud KMS is available, including regional and multi-regional locations.
- Cloud EKM over a VPC: available in most regional locations where Cloud KMS is available.
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- The following metrics can help you understand your EKM usage: cloudkms.googleapis.com/ekm/external/request latencies cloudkms.googleapis.com/ekm/external/request count For more information about these metrics, see cloudkms metrics .

