---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.000Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS key and key version deletion"
feature_slug: "cloud-kms-key-and-key-version-deletion"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/destroy-restore"
  - "https://docs.cloud.google.com/kms/docs/create-encryption-keys"
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys"
keywords:
  - "kms"
  - "key"
  - "and"
  - "version"
  - "deletion"
  - "supports"
  - "of"
  - "keys"
---

# Cloud KMS key and key version deletion

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports deletion of keys and key versions that meet defined deletion criteria.

## Extended Definition

Cloud KMS supports deletion of keys and key versions that meet defined deletion criteria.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/destroy-restore](https://docs.cloud.google.com/kms/docs/destroy-restore)
- [https://docs.cloud.google.com/kms/docs/create-encryption-keys](https://docs.cloud.google.com/kms/docs/create-encryption-keys)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys)

## Supporting Pages

### "Destroy and restore key versions \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/destroy-restore](https://docs.cloud.google.com/kms/docs/destroy-restore)
- Source ID: `site-docs-root`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the confirmation prompt, enter the key name and then click Schedule Destruction . gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms keys versions destroy KEY VERSION \ --key KEY NAME \ --keyring KEY RING \ --location LOCATION Replace the following: KEY VERSION : the version number of the key version that you want to destroy.
- In the confirmation prompt, click Restore . gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms keys versions restore key-version \ --key key \ --keyring key-ring \ --location location Replace key-version with the version of the key to restore.
- Restore a key version by calling the CryptoKeyVersions.restore method. curl "https://cloudkms.googleapis.com/v1/projects/ project-id /locations/ location-id /keyRings/ key-ring-id /cryptoKeys/ crypto-key-id /cryptoKeyVersions/ version-id :restore" \ --request "POST" \ --header "authorization: Bearer token " After the restoration request completes, the state of the key version becomes disabled.
- DestroyCryptoKeyVersion ( keyVersionName ); // Return the result. return result ; } } Go To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // destroyKeyVersion marks a specified key version for deletion.

### "Quickstart: Create encryption keys with Cloud KMS \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-encryption-keys](https://docs.cloud.google.com/kms/docs/create-encryption-keys)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List the versions available for your key: gcloud kms keys versions list \ --location "global" \ --keyring "test" \ --key "quickstart" To destroy a version, run the following command, where 1 is the number of the key version that you want to destroy: Important: When you destroy a key version, you can no longer decrypt content that was encrypted using that version of the key.
- Key rings and keys To encrypt and decrypt content you will need a Cloud KMS key, which is part of a key ring.
- These instructions use the Google Cloud console to create key rings, keys, and key versions in Cloud KMS.
- Refer to the object hierarchy overview for more information about these objects and how they are related. gcloud kms keyrings create "test" \ --location "global" gcloud kms keys create "quickstart" \ --location "global" \ --keyring "test" \ --purpose "encryption" You can use the list option to view the name and metadata for the key that you just created. gcloud kms keys list \ --location "global" \ --keyring "test" You should see: NAME PURPOSE PRIMARY STATE projects/ PROJECT ID /locations/global/keyRings/test/cryptoKeys/quickstart ENCRYPT DECRYPT ENABLED Encrypt data Now that you have a key, you can use that key to encrypt text or binary content.

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the same location, target key ring, and target key that you created earlier in this topic. gcloud kms keys versions list \ --keyring KEY RING \ --location LOCATION \ --key KEY NAME Go To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // checkStateImportedKey checks the state of a CryptoKeyVersion in KMS. func checkStateImportedKey ( w io .
- Tip: KEY VERSION is usually 1 , because the imported version is the first version of the key. gcloud kms keys set-primary-version KEY NAME \ --location= LOCATION \ --keyring= KEY RING \ --version= KEY VERSION Re-import a previously destroyed key Cloud Key Management Service supports key re-import, which allows you to restore a previously imported key version in DESTROYED or IMPORT FAILED state to ENABLED state by providing the original key material.
- Use a command like the following. gcloud kms keys versions import \ --import-job IMPORT JOB \ --location LOCATION \ --keyring KEY RING \ --key KEY NAME \ --algorithm ALGORITHM \ --wrapped-key-file PATH TO WRAPPED KEY For more information, see the output of the gcloud kms keys versions import --help command.
- EC SIGN P256 SHA256 )) // Ensure that only imported versions may be // added to this key. . setImportOnly ( true )) . setSkipInitialVersionCreation ( true ) . build ()); System . out . printf ( "Created crypto key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-imported-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyForImport () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , protectionLevel : 'HSM' , }, // Optional: ensure that only imported versions may be added to this // key. importOnly : true , }, // Do not allow KMS to generate an initial version of this key. skipInitialVersionCreation : true , }); console . log ( Created key for import: ${ key . name } ); return key ; } return createKeyForImport (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create key for import ( project id : str , location id : str , key ring id : str , crypto key id : str ) - > None : """ Sets up an empty CryptoKey within a KeyRing for import.

### "REST Resource: projects.locations.keyRings.cryptoKeys \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . nextRotationTime string ( Timestamp format) At nextRotationTime , the Key Management Service will automatically: Create a new version of this CryptoKey .
- Home Documentation Security Cloud KMS Reference Send feedback REST Resource: projects.locations.keyRings.cryptoKeys Stay organized with collections Save and categorize content based on your preferences.
- The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed.
- JSON representation { "name" : string , "primary" : { object ( CryptoKeyVersion ) } , "purpose" : enum ( CryptoKeyPurpose ) , "createTime" : string , "nextRotationTime" : string , "versionTemplate" : { object ( CryptoKeyVersionTemplate ) } , "labels" : { string : string , ... } , "importOnly" : boolean , "destroyScheduledDuration" : string , "cryptoKeyBackend" : string , // Union field rotation schedule can be only one of the following: "rotationPeriod" : string // End of list of possible types for union field rotation schedule . } Fields name string Output only.

