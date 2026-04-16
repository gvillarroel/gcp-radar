---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.074Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS API v1beta1"
feature_slug: "cloud-kms-api-v1beta1"
latest_feature_date: "2017-06-07"
deprecation_date: "2017-06-07"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/rest"
  - "https://docs.cloud.google.com/kms/docs/create-resource-with-autokey"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest"
  - "https://docs.cloud.google.com/kms/docs/reference/service-apis-overview"
keywords:
  - "kms"
  - "api"
  - "v1beta1"
  - "the"
  - "endpoint"
  - "has"
  - "been"
  - "turned"
---

# Cloud KMS API v1beta1

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

The v1beta1 Cloud KMS API endpoint has been turned off in favor of the v1 API; deprecated on 2017-06-07.

## Extended Definition

The v1beta1 Cloud KMS API endpoint has been turned off in favor of the v1 API; deprecated on 2017-06-07.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest)
- [https://docs.cloud.google.com/kms/docs/reference/service-apis-overview](https://docs.cloud.google.com/kms/docs/reference/service-apis-overview)

## Supporting Pages

### Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudkms.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- Select a location to see its regional service endpoint for this service. global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca https://cloudkms.googleapis.com REST Resource: v1.folders Methods getAutokeyConfig GET /v1/{name=folders/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=folders/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=folders/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=folders/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- This service provides the following discovery document: https://cloudkms.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.projects.locations.ekmConnections Methods create POST /v1/{parent=projects/ /locations/ }/ekmConnections Creates a new EkmConnection in a given Project and Location. get GET /v1/{name=projects/ /locations/ /ekmConnections/ } Returns metadata for a given EkmConnection . getIamPolicy GET /v1/{resource=projects/ /locations/ /ekmConnections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/ekmConnections Lists EkmConnections . patch PATCH /v1/{ekmConnection.name=projects/ /locations/ /ekmConnections/ } Updates an EkmConnection 's metadata. setIamPolicy POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:testIamPermissions Returns permissions that a caller has on the specified resource. verifyConnectivity GET /v1/{name=projects/ /locations/ /ekmConnections/ }:verifyConnectivity Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection .

### "Create protected resources using Cloud KMS Autokey \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Terraform The following Terraform sample creates a key handle and uses the returned key to protect a new dataset: resource "google kms key handle" "my key handle" { provider = google-beta project = " RESOURCE PROJECT ID " name = "test-key-handle" location = " LOCATION " resource type selector = "bigquery.googleapis.com/Dataset" } resource "google bigquery dataset" "dataset" { project = " RESOURCE PROJECT ID " dataset id = " DATASET ID " friendly name = " DATASET NAME " description = " DATASET DESCRIPTION " location = " LOCATION " default table expiration ms = 3600000 default encryption configuration { kms key name = google kms key handle.my key handle.kms key } } Replace the following: RESOURCE PROJECT ID : the project ID of the resource project where Autokey is enabled and where you want to create a protected resource.
- Create a protected Secret Manager resource Terraform The following Terraform sample creates a key handle and uses the returned key to protect a new secret with automatic replication: resource "google kms key handle" "my key handle" { provider = google-beta project = " RESOURCE PROJECT ID " name = "test-key-handle" location = "global" resource type selector = "secretmanager.googleapis.com/Secret" } resource "google secret manager secret" "my secret" { project = " RESOURCE PROJECT ID " secret id = " SECRET ID " replication { auto { customer managed encryption { kms key name = google kms key handle.my key handle.kms key } } } } Replace the following: RESOURCE PROJECT ID : the project ID of the resource project where Autokey is enabled and where you want to create a protected resource.
- Terraform The following Terraform sample creates a key handle and uses the returned key to protect a new persistent disk resource: resource "google kms key handle" "my key handle" { provider = google-beta project = " RESOURCE PROJECT ID " name = " KEY HANDLE " location = " LOCATION " resource type selector = "compute.googleapis.com/Disk" } resource "google compute disk" "persistent disk" { project = " RESOURCE PROJECT ID " name = " DISK NAME " type = "pd-ssd" zone = " ZONE " size = 30 physical block size bytes = 4096 disk encryption key { kms key self link = google kms key handle.my key handle.kms key } } Replace the following: RESOURCE PROJECT ID : the project ID of the resource project where Autokey is enabled and where you want to create a protected resource.
- Terraform The following Terraform sample creates a key handle and uses the returned key to protect a new storage bucket: resource "google kms key handle" "my key handle" { provider = google-beta project = " RESOURCE PROJECT ID " name = " KEY HANDLE " location = " LOCATION " resource type selector = "storage.googleapis.com/Bucket" } resource "google storage bucket" "simple bucket name" { name = " BUCKET NAME " location = " LOCATION " force destroy = true project = " RESOURCE PROJECT ID " uniform bucket level access = true encryption { default kms key name = google kms key handle.my key handle.kms key } } Replace the following: RESOURCE PROJECT ID : the project ID of the resource project where Autokey is enabled and where you want to create a protected resource.

### "KMS Inventory API \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest](https://docs.cloud.google.com/kms/docs/reference/inventory/rest)
- Source ID: `site-api-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://kmsinventory.googleapis.com REST Resource: v1.organizations.protectedResources Methods search GET /v1/{scope=organizations/ }/protectedResources:search Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.
- This service provides the following discovery document: https://kmsinventory.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.organizations.protectedResources REST Resource: v1.projects.cryptoKeys REST Resource: v1.projects.locations.keyRings.cryptoKeys Service: kmsinventory.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- REST Resource: v1.projects.locations.keyRings.cryptoKeys Methods getProtectedResourcesSummary GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ }/protectedResourcesSummary Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey .

### "Service APIs Overview \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/reference/service-apis-overview](https://docs.cloud.google.com/kms/docs/reference/service-apis-overview)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The locational REST/HTTP endpoints are https:// <region> -cloudkms.googleapis.com and the locational gRPC endpoints are <region> -cloudkms.googleapis.com , substituting <region> for any of the supported regional, dual-regional, or multi-regional Cloud KMS locations .
- The global REST/HTTP endpoint is https://cloudkms.googleapis.com and the global gRPC endpoint is cloudkms.googleapis.com .
- We recommend this approach only if your programming language or other needs are not met by the provided client libraries. gRPC API You can generate your own gRPC client libraries in any gRPC-supported language for the Cloud Key Management Service API from its .proto service definition using these resources: Using gRPC with Cloud KMS Cloud KMS service definition gRPC documentation : Everything you need to generate and use your own gRPC client code.
- Service Endpoints Cloud KMS has global and locational service endpoints.

