---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.072Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS regional availability in europe-west4"
feature_slug: "cloud-kms-regional-availability-in-europe-west4"
latest_feature_date: "2018-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/reference/rest"
  - "https://docs.cloud.google.com/kms/docs/accessing-the-api"
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
keywords:
  - "kms"
  - "regional"
  - "availability"
  - "in"
  - "europe"
  - "west4"
  - "the"
  - "console"
---

# Cloud KMS regional availability in europe-west4

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console supports creating Cloud KMS key rings in the europe-west4 region.

## Extended Definition

The Google Cloud console supports creating Cloud KMS key rings in the europe-west4 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)

## Supporting Pages

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods OTHER google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com .
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud KMS Inventory Service. google.cloud.kms.inventory.v1.KeyDashboardService The following audit logs are associated with methods belonging to google.cloud.kms.inventory.v1.KeyDashboardService .
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud KMS Inventory Service audit logs use the service name kmsinventory.googleapis.com .

### Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca https://cloudkms.googleapis.com REST Resource: v1.folders Methods getAutokeyConfig GET /v1/{name=folders/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=folders/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=folders/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=folders/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudkms.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.
- REST Resource: v1.projects Methods getAutokeyConfig GET /v1/{name=projects/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=projects/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. showEffectiveAutokeyConfig GET /v1/{parent=projects/ }:showEffectiveAutokeyConfig Returns the effective Cloud KMS Autokey configuration for a given project. showEffectiveKeyAccessJustificationsEnrollmentConfig GET /v1/{project=projects/ }:showEffectiveKeyAccessJustificationsEnrollmentConfig Returns the KeyAccessJustificationsEnrollmentConfig of the resource closest to the given project in hierarchy. showEffectiveKeyAccessJustificationsPolicyConfig GET /v1/{project=projects/ }:showEffectiveKeyAccessJustificationsPolicyConfig Returns the KeyAccessJustificationsPolicyConfig of the resource closest to the given project in hierarchy. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=projects/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=projects/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- REST Resource: v1.projects.locations.ekmConnections Methods create POST /v1/{parent=projects/ /locations/ }/ekmConnections Creates a new EkmConnection in a given Project and Location. get GET /v1/{name=projects/ /locations/ /ekmConnections/ } Returns metadata for a given EkmConnection . getIamPolicy GET /v1/{resource=projects/ /locations/ /ekmConnections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/ekmConnections Lists EkmConnections . patch PATCH /v1/{ekmConnection.name=projects/ /locations/ /ekmConnections/ } Updates an EkmConnection 's metadata. setIamPolicy POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:testIamPermissions Returns permissions that a caller has on the specified resource. verifyConnectivity GET /v1/{name=projects/ /locations/ /ekmConnections/ }:verifyConnectivity Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection .

### "Accessing the API \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/accessing-the-api](https://docs.cloud.google.com/kms/docs/accessing-the-api)
- Source ID: `site-iam-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There is also a web-based interface for Cloud KMS on the Google Cloud console , which allows for key management operations.
- Ensure that when you create an instance, you give it access to the https://www.googleapis.com/auth/cloudkms (preferred because it supports the principle of least privilege) or https://www.googleapis.com/auth/cloud-platform OAuth scope.
- For example: gcloud compute instances create "instance-1" \ --zone "us-east1-b" \ --scopes "https://www.googleapis.com/auth/cloudkms" For more information, refer to the Compute Engine documentation or the GKE documentation .
- Home Documentation Security Cloud KMS Guides Send feedback Accessing the API Stay organized with collections Save and categorize content based on your preferences.

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- EC SIGN P256 SHA256 )) // Ensure that only imported versions may be // added to this key. . setImportOnly ( true )) . setSkipInitialVersionCreation ( true ) . build ()); System . out . printf ( "Created crypto key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-imported-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyForImport () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , protectionLevel : 'HSM' , }, // Optional: ensure that only imported versions may be added to this // key. importOnly : true , }, // Do not allow KMS to generate an initial version of this key. skipInitialVersionCreation : true , }); console . log ( Created key for import: ${ key . name } ); return key ; } return createKeyForImport (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create key for import ( project id : str , location id : str , key ring id : str , crypto key id : str ) - > None : """ Sets up an empty CryptoKey within a KeyRing for import.
- CryptoKeyVersion version = client . getCryptoKeyVersion ( versionName ); System . out . printf ( "Current state of crypto key version %s: %s%n" , version . getName (), version . getState ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const cryptoKeyId = 'my-imported-key'; // const cryptoKeyVersionId = '1'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key version name const keyVersionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , cryptoKeyId , cryptoKeyVersionId ); async function checkStateCryptoKeyVersion () { const [ keyVersion ] = await client . getCryptoKeyVersion ({ name : keyVersionName , }); console . log ( Current state of key version ${ keyVersion . name } : ${ keyVersion . state } ); return keyVersion ; } return checkStateCryptoKeyVersion (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def check state imported key ( project id : str , location id : str , key ring id : str , import job id : str ) - > None : """ Check the state of an import job in Cloud KMS.
- ImportJob createdImportJob = client . createImportJob ( keyRingName , id , importJob ); System . out . printf ( "Created import job %s%n" , createdImportJob . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-import-job'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createImportJob () { const [ importJob ] = await client . createImportJob ({ parent : keyRingName , importJobId : id , importJob : { protectionLevel : 'HSM' , importMethod : 'RSA OAEP 3072 SHA256' , }, }); console . log ( Created import job: ${ importJob . name } ); return importJob ; } return createImportJob (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create import job ( project id : str , location id : str , key ring id : str , import job id : str ) - > None : """ Create a new import job in Cloud KMS.
- ImportJob importJob = client . getImportJob ( importJobName ); System . out . printf ( "Current state of import job %s: %s%n" , importJob . getName (), importJob . getState ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const importJobId = 'my-import-job'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the import job name const importJobName = client . importJobPath ( projectId , locationId , keyRingId , importJobId ); async function checkStateImportJob () { const [ importJob ] = await client . getImportJob ({ name : importJobName , }); console . log ( Current state of import job ${ importJob . name } : ${ importJob . state } ); return importJob ; } return checkStateImportJob (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def check state import job ( project id : str , location id : str , key ring id : str , import job id : str ) - > None : """ Check the state of an import job in Cloud KMS.

