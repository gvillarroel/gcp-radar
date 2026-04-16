---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.010Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Key Usage dashboard"
feature_slug: "key-usage-dashboard"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
  - "https://docs.cloud.google.com/kms/docs/creating-managing-labels"
  - "https://docs.cloud.google.com/kms/docs/ekm"
keywords:
  - "key"
  - "usage"
  - "dashboard"
  - "the"
  - "provides"
  - "visibility"
  - "in"
  - "console"
---

# Key Usage dashboard

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

The Key Usage dashboard provides key usage visibility in the Google Cloud console; The Key Usage dashboard provides key usage visibility in the Google Cloud console.

## Extended Definition

The Key Usage dashboard provides key usage visibility in the Google Cloud console; The Key Usage dashboard provides key usage visibility in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)

## Supporting Pages

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- This dashboard can be used to monitor the state, usage, and availability of your key versions and corresponding resources they protect.
- Monitor key usage Use the Cloud KMS inventory API or the Google Cloud console to understand key usage.
- For most organizations, this strategy provides a good balance between the overhead of maintaining many highly granular keys and the potential risks of using less granular keys that are shared between many projects, services, or resources.
- Monitor key usage You can view key usage with the Cloud KMS inventory API to help you identify Google Cloud resources in your organization that are dependent on and protected by Cloud KMS keys.

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- EC SIGN P256 SHA256 )) // Ensure that only imported versions may be // added to this key. . setImportOnly ( true )) . setSkipInitialVersionCreation ( true ) . build ()); System . out . printf ( "Created crypto key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-imported-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyForImport () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , protectionLevel : 'HSM' , }, // Optional: ensure that only imported versions may be added to this // key. importOnly : true , }, // Do not allow KMS to generate an initial version of this key. skipInitialVersionCreation : true , }); console . log ( Created key for import: ${ key . name } ); return key ; } return createKeyForImport (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create key for import ( project id : str , location id : str , key ring id : str , crypto key id : str ) - > None : """ Sets up an empty CryptoKey within a KeyRing for import.
- CryptoKeyVersion version = client . getCryptoKeyVersion ( versionName ); System . out . printf ( "Current state of crypto key version %s: %s%n" , version . getName (), version . getState ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const cryptoKeyId = 'my-imported-key'; // const cryptoKeyVersionId = '1'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key version name const keyVersionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , cryptoKeyId , cryptoKeyVersionId ); async function checkStateCryptoKeyVersion () { const [ keyVersion ] = await client . getCryptoKeyVersion ({ name : keyVersionName , }); console . log ( Current state of key version ${ keyVersion . name } : ${ keyVersion . state } ); return keyVersion ; } return checkStateCryptoKeyVersion (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def check state imported key ( project id : str , location id : str , key ring id : str , import job id : str ) - > None : """ Check the state of an import job in Cloud KMS.
- ImportJob createdImportJob = client . createImportJob ( keyRingName , id , importJob ); System . out . printf ( "Created import job %s%n" , createdImportJob . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-import-job'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createImportJob () { const [ importJob ] = await client . createImportJob ({ parent : keyRingName , importJobId : id , importJob : { protectionLevel : 'HSM' , importMethod : 'RSA OAEP 3072 SHA256' , }, }); console . log ( Created import job: ${ importJob . name } ); return importJob ; } return createImportJob (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create import job ( project id : str , location id : str , key ring id : str , import job id : str ) - > None : """ Create a new import job in Cloud KMS.
- ImportJob importJob = client . getImportJob ( importJobName ); System . out . printf ( "Current state of import job %s: %s%n" , importJob . getName (), importJob . getState ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const importJobId = 'my-import-job'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the import job name const importJobName = client . importJobPath ( projectId , locationId , keyRingId , importJobId ); async function checkStateImportJob () { const [ importJob ] = await client . getImportJob ({ name : importJobName , }); console . log ( Current state of import job ${ importJob . name } : ${ importJob . state } ); return importJob ; } return checkStateImportJob (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def check state import job ( project id : str , location id : str , key ring id : str , import job id : str ) - > None : """ Check the state of an import job in Cloud KMS.

### Labeling keys \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key ); System . out . printf ( "Created key with labels %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-labeled-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyLabels () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , }, labels : { team : 'alpha' , cost center : 'cc1234' , }, }, }); console . log ( Created labeled key: ${ key . name } ); return key ; } return createKeyLabels (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\CreateCryptoKeyRequest; use Google\Cloud\Kms\V1\CryptoKey; use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose; use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm; use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate; function create key labels( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $id = 'my-key-with-labels' ): CryptoKey { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the parent key ring name. $keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId); // Build the key. $key = (new CryptoKey()) ->setPurpose(CryptoKeyPurpose::ENCRYPT DECRYPT) ->setVersionTemplate((new CryptoKeyVersionTemplate()) ->setAlgorithm(CryptoKeyVersionAlgorithm::GOOGLE SYMMETRIC ENCRYPTION) ) ->setLabels([ 'team' => 'alpha', 'cost center' => 'cc1234', ]); // Call the API. $createCryptoKeyRequest = (new CreateCryptoKeyRequest()) ->setParent($keyRingName) ->setCryptoKeyId($id) ->setCryptoKey($key); $createdKey = $client->createCryptoKey($createCryptoKeyRequest); printf('Created labeled key: %s' .
- CryptoKey updatedKey = client . updateCryptoKey ( key , fieldMask ); System . out . printf ( "Updated key %s%n" , updatedKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '123'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId ); async function updateKeyUpdateLabels () { const [ key ] = await client . updateCryptoKey ({ cryptoKey : { name : keyName , labels : { new label : 'new value' , }, }, updateMask : { paths : [ 'labels' ], }, }); console . log ( Updated labels for: ${ key . name } ); return key ; } return updateKeyUpdateLabels (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\CryptoKey; use Google\Cloud\Kms\V1\UpdateCryptoKeyRequest; use Google\Protobuf\FieldMask; function update key update labels( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key' ): CryptoKey { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key name. $keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId); // Build the key. $key = (new CryptoKey()) ->setName($keyName) ->setLabels(['new label' => 'new value']); // Create the field mask. $updateMask = (new FieldMask()) ->setPaths(['labels']); // Call the API. $updateCryptoKeyRequest = (new UpdateCryptoKeyRequest()) ->setCryptoKey($key) ->setUpdateMask($updateMask); $updatedKey = $client->updateCryptoKey($updateCryptoKeyRequest); printf('Updated key: %s' .
- CryptoKey createdKey = client . updateCryptoKey ( key , fieldMask ); System . out . printf ( "Updated key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '123'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId ); async function updateKeyRemoveLabels () { const [ key ] = await client . updateCryptoKey ({ cryptoKey : { name : keyName , labels : null , }, updateMask : { paths : [ 'labels' ], }, }); console . log ( Removed labels from: ${ key . name } ); return key ; } return updateKeyRemoveLabels (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\CryptoKey; use Google\Cloud\Kms\V1\UpdateCryptoKeyRequest; use Google\Protobuf\FieldMask; function update key remove labels( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key' ): CryptoKey { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key name. $keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId); // Build the key. $key = (new CryptoKey()) ->setName($keyName) ->setLabels([]); // Create the field mask. $updateMask = (new FieldMask()) ->setPaths(['labels']); // Call the API. $updateCryptoKeyRequest = (new UpdateCryptoKeyRequest()) ->setCryptoKey($key) ->setUpdateMask($updateMask); $updatedKey = $client->updateCryptoKey($updateCryptoKeyRequest); printf('Updated key: %s' .
- CryptoKey key = client . getCryptoKey ( keyName ); // Print out each label. key . getLabelsMap (). forEach (( k , v ) - > System . out . printf ( "%s=%s%n" , k , v )); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId ); async function getKeyLabels () { const [ key ] = await client . getCryptoKey ({ name : keyName , }); for ( const k in key . labels ) { console . log ( ${ k } : ${ key . labels [ k ] } ); } return key ; } return getKeyLabels (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\GetCryptoKeyRequest; function get key labels( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key' ) { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key name. $keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId); // Call the API. $getCryptoKeyRequest = (new GetCryptoKeyRequest()) ->setName($keyName); $key = $client->getCryptoKey($getCryptoKeyRequest); // Example of iterating over labels. foreach ($key->getLabels() as $k => $v) { printf('%s = %s' .

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- You can also trigger the creation or destruction of key versions in your EKM from Cloud KMS using the Google Cloud console, the gcloud CLI, the Cloud KMS API, or Cloud KMS client libraries.
- If an external key is unavailable, Cloud KMS returns a FAILED PRECONDITION error and provides details in the PreconditionFailure error detail.
- Note: If your Cloud EKM key is not listed in the Google Cloud console when setting up CMEK services, first copy the resource name .
- This does not apply to Cloud EKM keys created using the Google Cloud console.

