---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.057Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Asymmetric keys"
feature_slug: "asymmetric-keys"
latest_feature_date: "2018-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
  - "https://docs.cloud.google.com/kms/docs/creating-keys"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/hsm"
keywords:
  - "asymmetric"
  - "keys"
  - "kms"
  - "are"
  - "generally"
  - "available"
  - "beta"
  - "introduced"
---

# Asymmetric keys

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS asymmetric keys are generally available; Cloud KMS beta introduced asymmetric key operations including signing, public key retrieval, and asymmetric decryption.

## Extended Definition

Cloud KMS asymmetric keys are generally available; Cloud KMS beta introduced asymmetric key operations including signing, public key retrieval, and asymmetric decryption.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)

## Supporting Pages

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- RSA PKCS1 OAEP PADDING , }, targetKey ); // Import the target key version const [ version ] = await client . importCryptoKeyVersion ({ parent : cryptoKeyName , importJob : importJobName , algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , wrappedKey : wrappedTargetKey , }); console . log ( Imported key version: ${ version . name } ); return version ; } return wrapAndImportKey (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . import os Import the client library and Python standard cryptographic libraries. from cryptography.hazmat import backends from cryptography.hazmat.primitives import hashes from cryptography.hazmat.primitives import keywrap from cryptography.hazmat.primitives import serialization from cryptography.hazmat.primitives.asymmetric import ec from cryptography.hazmat.primitives.asymmetric import padding from google.cloud import kms def import manually wrapped key ( project id : str , location id : str , key ring id : str , crypto key id : str , import job id : str , ) - > None : """ Generates and imports local key material to Cloud KMS.
- Create an empty, import-only key: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?cryptoKeyId= KEY NAME &skipInitialVersionCreation=true&importOnly=true" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data "{"purpose":" PURPOSE ", "versionTemplate":{"protectionLevel":" PROTECTION LEVEL ","algorithm":" ALGORITHM "}}" See the CryptoKey.create API documentation for more information.
- Use the cryptoKeyVersions.import method to import a key. curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME /cryptoKeyVersions:import" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"importJob": " IMPORT JOB ID ", "algorithm": " ALGORITHM ", "wrappedKey": " WRAPPED KEY "}' Replace the following: IMPORT JOB ID : the full resource name of the corresponding import job.
- EC SIGN P256 SHA256 )) // Ensure that only imported versions may be // added to this key. . setImportOnly ( true )) . setSkipInitialVersionCreation ( true ) . build ()); System . out . printf ( "Created crypto key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-imported-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyForImport () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , protectionLevel : 'HSM' , }, // Optional: ensure that only imported versions may be added to this // key. importOnly : true , }, // Do not allow KMS to generate an initial version of this key. skipInitialVersionCreation : true , }); console . log ( Created key for import: ${ key . name } ); return key ; } return createKeyForImport (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create key for import ( project id : str , location id : str , key ring id : str , crypto key id : str ) - > None : """ Sets up an empty CryptoKey within a KeyRing for import.

### Create a key \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Create an asymmetric decryption key using the CryptoKey.create method. curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ASYMMETRIC DECRYPT", "protectionLevel": " PROTECTION LEVEL ", "versionTemplate": {"algorithm": " ALGORITHM "}}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- Create an asymmetric signing key by calling CryptoKey.create. curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ASYMMETRIC SIGN", "versionTemplate": {"protectionLevel": " PROTECTION LEVEL ", "algorithm": " ALGORITHM "}}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key ); System . out . printf ( "Created asymmetric key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-asymmetric-decrypt-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyAsymmetricDecrypt () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ASYMMETRIC DECRYPT' , versionTemplate : { algorithm : 'RSA DECRYPT OAEP 2048 SHA256' , }, // Optional: customize how long key versions should be kept before // destroying. destroyScheduledDuration : { seconds : 60 60 24 }, }, }); console . log ( Created asymmetric key: ${ key . name } ); return key ; } return createKeyAsymmetricDecrypt (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\CreateCryptoKeyRequest; use Google\Cloud\Kms\V1\CryptoKey; use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose; use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm; use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate; use Google\Protobuf\Duration; function create key asymmetric decrypt( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $id = 'my-asymmetric-decrypt-key' ): CryptoKey { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the parent key ring name. $keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId); // Build the key. $key = (new CryptoKey()) ->setPurpose(CryptoKeyPurpose::ASYMMETRIC DECRYPT) ->setVersionTemplate((new CryptoKeyVersionTemplate()) ->setAlgorithm(CryptoKeyVersionAlgorithm::RSA DECRYPT OAEP 2048 SHA256) ) // Optional: customize how long key versions should be kept before destroying. ->setDestroyScheduledDuration((new Duration()) ->setSeconds(24 60 60) ); // Call the API. $createCryptoKeyRequest = (new CreateCryptoKeyRequest()) ->setParent($keyRingName) ->setCryptoKeyId($id) ->setCryptoKey($key); $createdKey = $client->createCryptoKey($createCryptoKeyRequest); printf('Created asymmetric decryption key: %s' .
- CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key ); System . out . printf ( "Created asymmetric key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-asymmetric-sign-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyAsymmetricSign () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ASYMMETRIC SIGN' , versionTemplate : { algorithm : 'RSA SIGN PKCS1 2048 SHA256' , }, // Optional: customize how long key versions should be kept before // destroying. destroyScheduledDuration : { seconds : 60 60 24 }, }, }); console . log ( Created asymmetric key: ${ key . name } ); return key ; } return createKeyAsymmetricSign (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\CreateCryptoKeyRequest; use Google\Cloud\Kms\V1\CryptoKey; use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose; use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm; use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate; use Google\Protobuf\Duration; function create key asymmetric sign( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $id = 'my-asymmetric-signing-key' ): CryptoKey { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the parent key ring name. $keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId); // Build the key. $key = (new CryptoKey()) ->setPurpose(CryptoKeyPurpose::ASYMMETRIC SIGN) ->setVersionTemplate((new CryptoKeyVersionTemplate()) ->setAlgorithm(CryptoKeyVersionAlgorithm::RSA SIGN PKCS1 2048 SHA256) ) // Optional: customize how long key versions should be kept before destroying. ->setDestroyScheduledDuration((new Duration()) ->setSeconds(24 60 60) ); // Call the API. $createCryptoKeyRequest = (new CreateCryptoKeyRequest()) ->setParent($keyRingName) ->setCryptoKeyId($id) ->setCryptoKey($key); $createdKey = $client->createCryptoKey($createCryptoKeyRequest); printf('Created asymmetric signing key: %s' .

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud KMS Reference Send feedback REST Resource: projects.cryptoKeys Stay organized with collections Save and categorize content based on your preferences.
- ASYMMETRIC DECRYPT CryptoKeys with this purpose may be used with [AsymmetricDecrypt][KeyManagementService.AsymmetricDecrypt] and [GetPublicKey][KeyManagementService.GetPublicKey].
- ASYMMETRIC SIGN CryptoKeys with this purpose may be used with [AsymmetricSign][KeyManagementService.AsymmetricSign] and [GetPublicKey][KeyManagementService.GetPublicKey].
- Algorithms beginning with "RSA DECRYPT " are usable with CryptoKey.purpose ASYMMETRIC DECRYPT .

### Cloud HSM \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Key operations for asymmetric keys stored in Cloud HSM may incur a noticeably greater latency compared to using Cloud KMS software keys.
- To create a Single-tenant Cloud HSM key, use the CryptoKey.create method with the HSM SINGLE TENANT protection level: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": "HSM SINGLE TENANT", "algorithm": " ALGORITHM ", "cryptoKeyBackend": "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " }}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- To decrypt encrypted data, make a POST request and provide the appropriate project and key information and specify the encrypted text (also known as ciphertext ) to be decrypted in the ciphertext field of the request body. curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME :decrypt" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data "{\"ciphertext\": \" ENCRYPTED DATA \"}" Replace the following: PROJECT ID : the ID of the project that contains the key ring and key that you want to use for decryption.
- To encrypt data, make a POST request and provide the appropriate project and key information and specify the base64 encoded text to be encrypted in the plaintext field of the request body. curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME :encrypt" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data "{\"plaintext\": \" PLAINTEXT TO ENCRYPT \"}" Replace the following: PROJECT ID : the ID of the project that contains the key ring and key that you want to use for encryption.

