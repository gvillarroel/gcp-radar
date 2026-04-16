---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.003Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS Autokey free tier"
feature_slug: "cloud-kms-autokey-free-tier"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/AutokeyConfig"
  - "https://docs.cloud.google.com/kms/docs/create-resource-with-autokey"
  - "https://docs.cloud.google.com/kms/docs/autokey-overview"
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
keywords:
  - "kms"
  - "autokey"
  - "free"
  - "tier"
  - "includes"
  - "for"
  - "active"
  - "key"
---

# Cloud KMS Autokey free tier

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS Autokey includes a free tier for active key versions and cryptographic operations on Autokey-created keys.

## Extended Definition

Cloud KMS Autokey includes a free tier for active key versions and cryptographic operations on Autokey-created keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/AutokeyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/AutokeyConfig)
- [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- [https://docs.cloud.google.com/kms/docs/autokey-overview](https://docs.cloud.google.com/kms/docs/autokey-overview)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)

## Supporting Pages

### AutokeyConfig \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/AutokeyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/AutokeyConfig)
- Source ID: `site-api-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once configured, for Cloud KMS Autokey to function properly, this key project must have the Cloud KMS API activated and the Cloud KMS Service Agent for this key project must be granted the cloudkms.admin role (or pertinent permissions).
- JSON representation State KeyProjectResolutionMode Cloud KMS Autokey configuration for a folder.
- For example, if Autokey is disabled on a folder, it can be re-enabled on a sub-folder or project within that folder by setting a different mode (e.g., DEDICATED KEY PROJECT or RESOURCE PROJECT).
- Name of the key project, e.g. projects/{PROJECT ID} or projects/{PROJECT NUMBER} , where Cloud KMS Autokey will provision a new CryptoKey when a KeyHandle is created.

### "Create protected resources using Cloud KMS Autokey \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Terraform The following Terraform sample creates a key handle and uses the returned key to protect a new dataset: resource "google kms key handle" "my key handle" { provider = google-beta project = " RESOURCE PROJECT ID " name = "test-key-handle" location = " LOCATION " resource type selector = "bigquery.googleapis.com/Dataset" } resource "google bigquery dataset" "dataset" { project = " RESOURCE PROJECT ID " dataset id = " DATASET ID " friendly name = " DATASET NAME " description = " DATASET DESCRIPTION " location = " LOCATION " default table expiration ms = 3600000 default encryption configuration { kms key name = google kms key handle.my key handle.kms key } } Replace the following: RESOURCE PROJECT ID : the project ID of the resource project where Autokey is enabled and where you want to create a protected resource.
- Create a protected Secret Manager resource Terraform The following Terraform sample creates a key handle and uses the returned key to protect a new secret with automatic replication: resource "google kms key handle" "my key handle" { provider = google-beta project = " RESOURCE PROJECT ID " name = "test-key-handle" location = "global" resource type selector = "secretmanager.googleapis.com/Secret" } resource "google secret manager secret" "my secret" { project = " RESOURCE PROJECT ID " secret id = " SECRET ID " replication { auto { customer managed encryption { kms key name = google kms key handle.my key handle.kms key } } } } Replace the following: RESOURCE PROJECT ID : the project ID of the resource project where Autokey is enabled and where you want to create a protected resource.
- Terraform The following Terraform sample creates a key handle and uses the returned key to protect a new persistent disk resource: resource "google kms key handle" "my key handle" { provider = google-beta project = " RESOURCE PROJECT ID " name = " KEY HANDLE " location = " LOCATION " resource type selector = "compute.googleapis.com/Disk" } resource "google compute disk" "persistent disk" { project = " RESOURCE PROJECT ID " name = " DISK NAME " type = "pd-ssd" zone = " ZONE " size = 30 physical block size bytes = 4096 disk encryption key { kms key self link = google kms key handle.my key handle.kms key } } Replace the following: RESOURCE PROJECT ID : the project ID of the resource project where Autokey is enabled and where you want to create a protected resource.
- Terraform The following Terraform sample creates a key handle and uses the returned key to protect a new storage bucket: resource "google kms key handle" "my key handle" { provider = google-beta project = " RESOURCE PROJECT ID " name = " KEY HANDLE " location = " LOCATION " resource type selector = "storage.googleapis.com/Bucket" } resource "google storage bucket" "simple bucket name" { name = " BUCKET NAME " location = " LOCATION " force destroy = true project = " RESOURCE PROJECT ID " uniform bucket level access = true encryption { default kms key name = google kms key handle.my key handle.kms key } } Replace the following: RESOURCE PROJECT ID : the project ID of the resource project where Autokey is enabled and where you want to create a protected resource.

### Autokey overview \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/autokey-overview](https://docs.cloud.google.com/kms/docs/autokey-overview)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable centralized key management Before you can use Autokey for centralized key management in a folder, an administrator must complete the following one-time setup tasks: Enable Cloud KMS Autokey on a folder and identify the Cloud KMS project that will contain Autokey resources for that folder.
- Compatible services The following table lists services that are compatible with Cloud KMS Autokey: Service Protected resources Key granularity Artifact Registry artifactregistry.googleapis.com/Repository Autokey creates keys during Repository creation, used for all stored artifacts.
- One key per location within a project Secure Source Manager securesourcemanager.googleapis.com/Instance One key per resource Spanner spanner.googleapis.com/Database Spanner is only compatible with Cloud KMS Autokey when creating resources using Terraform or the REST API.
- One key per resource Pub/Sub pubsub.googleapis.com/Topic One key per resource Secret Manager secretmanager.googleapis.com/Secret Secret Manager is only compatible with Cloud KMS Autokey when creating resources using Terraform or the REST API.

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Use the location and keyring where you created the import job. gcloud kms import-jobs describe IMPORT JOB \ --location LOCATION \ --keyring KEY RING \ --format="value(state)" The output is similar to the following: state: ACTIVE Go To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // checkStateImportJob checks the state of an ImportJob in KMS. func checkStateImportJob ( w io .
- EC SIGN P256 SHA256 )) // Ensure that only imported versions may be // added to this key. . setImportOnly ( true )) . setSkipInitialVersionCreation ( true ) . build ()); System . out . printf ( "Created crypto key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-imported-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyForImport () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , protectionLevel : 'HSM' , }, // Optional: ensure that only imported versions may be added to this // key. importOnly : true , }, // Do not allow KMS to generate an initial version of this key. skipInitialVersionCreation : true , }); console . log ( Created key for import: ${ key . name } ); return key ; } return createKeyForImport (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create key for import ( project id : str , location id : str , key ring id : str , crypto key id : str ) - > None : """ Sets up an empty CryptoKey within a KeyRing for import.
- CryptoKeyVersion version = client . getCryptoKeyVersion ( versionName ); System . out . printf ( "Current state of crypto key version %s: %s%n" , version . getName (), version . getState ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const cryptoKeyId = 'my-imported-key'; // const cryptoKeyVersionId = '1'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key version name const keyVersionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , cryptoKeyId , cryptoKeyVersionId ); async function checkStateCryptoKeyVersion () { const [ keyVersion ] = await client . getCryptoKeyVersion ({ name : keyVersionName , }); console . log ( Current state of key version ${ keyVersion . name } : ${ keyVersion . state } ); return keyVersion ; } return checkStateCryptoKeyVersion (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def check state imported key ( project id : str , location id : str , key ring id : str , import job id : str ) - > None : """ Check the state of an import job in Cloud KMS.
- ImportJob createdImportJob = client . createImportJob ( keyRingName , id , importJob ); System . out . printf ( "Created import job %s%n" , createdImportJob . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-import-job'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createImportJob () { const [ importJob ] = await client . createImportJob ({ parent : keyRingName , importJobId : id , importJob : { protectionLevel : 'HSM' , importMethod : 'RSA OAEP 3072 SHA256' , }, }); console . log ( Created import job: ${ importJob . name } ); return importJob ; } return createImportJob (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create import job ( project id : str , location id : str , key ring id : str , import job id : str ) - > None : """ Create a new import job in Cloud KMS.

