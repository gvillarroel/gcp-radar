---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.042Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud HSM multi-regional availability in global"
feature_slug: "cloud-hsm-multi-regional-availability-in-global"
latest_feature_date: "2020-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/hsm"
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
  - "https://docs.cloud.google.com/kms/docs/ekm"
keywords:
  - "hsm"
  - "multi"
  - "regional"
  - "availability"
  - "in"
  - "global"
  - "resources"
  - "are"
---

# Cloud HSM multi-regional availability in global

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud HSM resources are available in the global multi-regional location.

## Extended Definition

Cloud HSM resources are available in the global multi-regional location.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)

## Supporting Pages

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Regional and zonal resources must use a key ring and CMEK in the same region as the resource or in the global location.
- Single-region and zonal resources can't use a multi-region key ring other than global .
- Multi-region resources can't use a regional key ring.
- For guidance about how Google Cloud services can help meet the requirements of different compliance frameworks, see the following resources: Protecting healthcare data on Google Cloud Cloud Compliance & Regulations Resources Google Cloud FedRAMP implementation guide PCI Data Security Standard compliance Summary of best practices The following table summarizes the best practices recommended in this document: Topic Task Decide whether to use CMEK Use CMEK if you require any of the capabilities enabled by CMEK .

### Cloud HSM \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a Multi-tenant Cloud HSM key, use the CryptoKey.create method with the HSM protection level: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": "HSM", "algorithm": " ALGORITHM " }}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key ); System . out . printf ( "Created hsm key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-hsm-encryption-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyHsm () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , protectionLevel : 'HSM' , }, // Optional: customize how long key versions should be kept before // destroying. destroyScheduledDuration : { seconds : 60 60 24 }, }, }); console . log ( Created hsm key: ${ key . name } ); return key ; } return createKeyHsm (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\CreateCryptoKeyRequest; use Google\Cloud\Kms\V1\CryptoKey; use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose; use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm; use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate; use Google\Cloud\Kms\V1\ProtectionLevel; use Google\Protobuf\Duration; function create key hsm( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $id = 'my-hsm-key' ): CryptoKey { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the parent key ring name. $keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId); // Build the key. $key = (new CryptoKey()) ->setPurpose(CryptoKeyPurpose::ENCRYPT DECRYPT) ->setVersionTemplate((new CryptoKeyVersionTemplate()) ->setAlgorithm(CryptoKeyVersionAlgorithm::GOOGLE SYMMETRIC ENCRYPTION) ->setProtectionLevel(ProtectionLevel::HSM) ) // Optional: customize how long key versions should be kept before destroying. ->setDestroyScheduledDuration((new Duration()) ->setSeconds(24 60 60) ); // Call the API. $createCryptoKeyRequest = (new CreateCryptoKeyRequest()) ->setParent($keyRingName) ->setCryptoKeyId($id) ->setCryptoKey($key); $createdKey = $client->createCryptoKey($createCryptoKeyRequest); printf('Created hsm key: %s' .
- TODO(developer): uncomment these values before running the sample. project id = "my-project" location id = "us-east1" key ring id = "my-key-ring" id = "my-hsm-key" Require the library. require "google/cloud/kms" Create the client. client = Google :: Cloud :: Kms . key management service Build the parent key ring name. key ring name = client . key ring path project : project id , location : location id , key ring : key ring id Build the key. key = { purpose : :ENCRYPT DECRYPT , version template : { algorithm : :GOOGLE SYMMETRIC ENCRYPTION , protection level : :HSM }, Optional: customize how long key versions should be kept before destroying. destroy scheduled duration : { seconds : 24 60 60 } } Call the API. created key = client . create crypto key parent : key ring name , crypto key id : id , crypto key : key puts "Created hsm key: #{ created key . name } " API These examples use curl as an HTTP client to demonstrate using the API.
- To create a Single-tenant Cloud HSM key, use the CryptoKey.create method with the HSM SINGLE TENANT protection level: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": "HSM SINGLE TENANT", "algorithm": " ALGORITHM ", "cryptoKeyBackend": "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " }}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- The following can't be changed for a key version after it is created or imported: The protection level indicates whether the key persists in software, in a multi-tenant HSM, in a single-tenant HSM, or in an external key management system.
- The protection level defines whether keys imported by this import job will reside in software, in a multi-tenant HSM, in a single-tenant HSM, or in an external key management system.
- EC SIGN P256 SHA256 )) // Ensure that only imported versions may be // added to this key. . setImportOnly ( true )) . setSkipInitialVersionCreation ( true ) . build ()); System . out . printf ( "Created crypto key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-imported-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyForImport () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , protectionLevel : 'HSM' , }, // Optional: ensure that only imported versions may be added to this // key. importOnly : true , }, // Do not allow KMS to generate an initial version of this key. skipInitialVersionCreation : true , }); console . log ( Created key for import: ${ key . name } ); return key ; } return createKeyForImport (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create key for import ( project id : str , location id : str , key ring id : str , crypto key id : str ) - > None : """ Sets up an empty CryptoKey within a KeyRing for import.
- ImportJob createdImportJob = client . createImportJob ( keyRingName , id , importJob ); System . out . printf ( "Created import job %s%n" , createdImportJob . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-import-job'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createImportJob () { const [ importJob ] = await client . createImportJob ({ parent : keyRingName , importJobId : id , importJob : { protectionLevel : 'HSM' , importMethod : 'RSA OAEP 3072 SHA256' , }, }); console . log ( Created import job: ${ importJob . name } ); return importJob ; } return createImportJob (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create import job ( project id : str , location id : str , key ring id : str , import job id : str ) - > None : """ Create a new import job in Cloud KMS.

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Cloud EKM over the internet: available in most Google Cloud locations where Cloud KMS is available, including regional and multi-regional locations.
- We recommend only using a multi-region with Cloud EKM if your chosen external key manager provides low latency to all areas of that multi-region.
- To learn more, choose a Cloud EKM partner that supports single-tenant HSMs and review the requirements for Bare Metal Rack HSMs .
- This is different from Single-tenant Cloud HSM , and you should carefully consider which solution better meets your requirements.

