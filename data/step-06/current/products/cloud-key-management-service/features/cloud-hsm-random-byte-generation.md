---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.031Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud HSM random byte generation"
feature_slug: "cloud-hsm-random-byte-generation"
latest_feature_date: "2021-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
  - "https://docs.cloud.google.com/kms/docs/create-key"
  - "https://docs.cloud.google.com/kms/docs/hsm"
  - "https://docs.cloud.google.com/kms/docs/creating-keys"
keywords:
  - "hsm"
  - "random"
  - "byte"
  - "generation"
  - "can"
  - "return"
  - "bytes"
  - "from"
---

# Cloud HSM random byte generation

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud HSM can return random bytes from its hardware random number generator.

## Extended Definition

Cloud HSM can return random bytes from its hardware random number generator.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key)
- [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys)

## Supporting Pages

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- KeyManagementServiceClient () Retrieve the fully-qualified crypto key and import job string. crypto key name = client . crypto key path ( project id , location id , key ring id , crypto key id ) import job name = client . import job path ( project id , location id , key ring id , import job id ) Generate a temporary 32-byte key for AES-KWP and wrap the key material. kwp key = os . urandom ( 32 ) wrapped target key = keywrap . aes key wrap with padding ( kwp key , formatted key , backends . default backend () ) Retrieve the public key from the import job. import job = client . get import job ( name = import job name ) import job pub = serialization . load pem public key ( bytes ( import job . public key . pem , "UTF-8" ), backends . default backend () ) Wrap the KWP key using the import job key. wrapped kwp key = import job pub . encrypt ( kwp key , padding .
- After // completing all of your requests, call the "close" method on the client to // safely clean up any remaining background resources. try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) { // Build the crypto key and import job names from the project, location, // key ring, and ID. final CryptoKeyName cryptoKeyName = CryptoKeyName . of ( projectId , locationId , keyRingId , cryptoKeyId ); final ImportJobName importJobName = ImportJobName . of ( projectId , locationId , keyRingId , importJobId ); // Generate a temporary 32-byte key for AES-KWP and wrap the key material. byte [] kwpKey = new byte [ 32 ] ; new SecureRandom (). nextBytes ( kwpKey ); Kwp kwp = new Kwp ( kwpKey ); final byte [] wrappedTargetKey = kwp . wrap ( privateBytes ); // Retrieve the public key from the import job.
- EC SIGN P256 SHA256 )) // Ensure that only imported versions may be // added to this key. . setImportOnly ( true )) . setSkipInitialVersionCreation ( true ) . build ()); System . out . printf ( "Created crypto key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-imported-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyForImport () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , protectionLevel : 'HSM' , }, // Optional: ensure that only imported versions may be added to this // key. importOnly : true , }, // Do not allow KMS to generate an initial version of this key. skipInitialVersionCreation : true , }); console . log ( Created key for import: ${ key . name } ); return key ; } return createKeyForImport (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create key for import ( project id : str , location id : str , key ring id : str , crypto key id : str ) - > None : """ Sets up an empty CryptoKey within a KeyRing for import.
- ImportJob createdImportJob = client . createImportJob ( keyRingName , id , importJob ); System . out . printf ( "Created import job %s%n" , createdImportJob . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-import-job'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createImportJob () { const [ importJob ] = await client . createImportJob ({ parent : keyRingName , importJobId : id , importJob : { protectionLevel : 'HSM' , importMethod : 'RSA OAEP 3072 SHA256' , }, }); console . log ( Created import job: ${ importJob . name } ); return importJob ; } return createImportJob (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . from google.cloud import kms def create import job ( project id : str , location id : str , key ring id : str , import job id : str ) - > None : """ Create a new import job in Cloud KMS.

### Create a key \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit: https://cloud.google.com/kms/docs/data-integrity-guidelines if not public key . name == key version name : raise Exception ( "The request sent to the server was corrupted in-transit." ) See crc32c() function defined below. if not public key . pem crc32c == crc32c ( public key . pem . encode ( "utf-8" )): raise Exception ( "The response received from the server was corrupted in-transit." ) End integrity verification print ( f "Public key: { public key . pem } " ) return public key def crc32c ( data : bytes ) - > int : """ Calculates the CRC32C checksum of the provided data.
- JWK . from pem ( public key . pem . encode ()) return jwk key . export ( private key = False ) def crc32c ( data : bytes ) - > int : """ Calculates the CRC32C checksum of the provided data.
- Returns: An int representing the CRC32C checksum of the provided bytes. """ import crcmod # type: ignore crc32c fun = crcmod . predefined . mkPredefinedCrcFun ( "crc-32c" ) return crc32c fun ( data ) Control access to asymmetric keys A signer or validator requires the appropriate permission or role on the asymmetric key.
- Returns: An int representing the CRC32C checksum of the provided bytes. """ import crcmod # type: ignore crc32c fun = crcmod . predefined . mkPredefinedCrcFun ( "crc-32c" ) return crc32c fun ( data ) Ruby To run this code, first set up a Ruby development environment and install the Cloud KMS Ruby SDK .

### Cloud HSM \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- EncryptResponse response = client . encrypt ( keyVersionName , ByteString . copyFromUtf8 ( plaintext )); System . out . printf ( "Ciphertext: %s%n" , response . getCiphertext (). toStringUtf8 ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const plaintextBuffer = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId ); // Optional, but recommended: compute plaintext's CRC32C. const crc32c = require ( 'fast-crc32c' ); const plaintextCrc32c = crc32c . calculate ( plaintextBuffer ); async function encryptSymmetric () { const [ encryptResponse ] = await client . encrypt ({ name : keyName , plaintext : plaintextBuffer , plaintextCrc32c : { value : plaintextCrc32c , }, }); const ciphertext = encryptResponse . ciphertext ; // Optional, but recommended: perform integrity verification on encryptResponse. // For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit: // https://cloud.google.com/kms/docs/data-integrity-guidelines if ( ! encryptResponse . verifiedPlaintextCrc32c ) { throw new Error ( 'Encrypt: request corrupted in-transit' ); } if ( crc32c . calculate ( ciphertext ) !== Number ( encryptResponse . ciphertextCrc32c . value ) ) { throw new Error ( 'Encrypt: response corrupted in-transit' ); } console . log ( Ciphertext: ${ ciphertext . toString ( 'base64' ) } ); return ciphertext ; } return encryptSymmetric (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\EncryptRequest; function encrypt symmetric( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key', string $plaintext = '...' ) { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key name. $keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId); // Call the API. $encryptRequest = (new EncryptRequest()) ->setName($keyName) ->setPlaintext($plaintext); $encryptResponse = $client->encrypt($encryptRequest); printf('Ciphertext: %s' .
- DecryptResponse response = client . decrypt ( keyName , ByteString . copyFrom ( ciphertext )); System . out . printf ( "Plaintext: %s%n" , response . getPlaintext (). toStringUtf8 ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // Ciphertext must be either a Buffer object or a base-64 encoded string // const ciphertext = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId ); // Optional, but recommended: compute ciphertext's CRC32C. const crc32c = require ( 'fast-crc32c' ); const ciphertextCrc32c = crc32c . calculate ( ciphertext ); async function decryptSymmetric () { const [ decryptResponse ] = await client . decrypt ({ name : keyName , ciphertext : ciphertext , ciphertextCrc32c : { value : ciphertextCrc32c , }, }); // Optional, but recommended: perform integrity verification on decryptResponse. // For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit: // https://cloud.google.com/kms/docs/data-integrity-guidelines if ( crc32c . calculate ( decryptResponse . plaintext ) !== Number ( decryptResponse . plaintextCrc32c . value ) ) { throw new Error ( 'Decrypt: response corrupted in-transit' ); } const plaintext = decryptResponse . plaintext . toString (); console . log ( Plaintext: ${ plaintext } ); return plaintext ; } return decryptSymmetric (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\DecryptRequest; function decrypt symmetric( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key', string $ciphertext = '...' ) { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key name. $keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId); // Call the API. $decryptRequest = (new DecryptRequest()) ->setName($keyName) ->setCiphertext($ciphertext); $decryptResponse = $client->decrypt($decryptRequest); printf('Plaintext: %s' .
- For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit: https://cloud.google.com/kms/docs/data-integrity-guidelines if not encrypt response . verified plaintext crc32c : raise Exception ( "The request sent to the server was corrupted in-transit." ) if not encrypt response . ciphertext crc32c == crc32c ( encrypt response . ciphertext ): raise Exception ( "The response received from the server was corrupted in-transit." ) End integrity verification print ( f "Ciphertext: { base64 . b64encode ( encrypt response . ciphertext ) } " ) return encrypt response def crc32c ( data : bytes ) - > int : """ Calculates the CRC32C checksum of the provided data.
- For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit: https://cloud.google.com/kms/docs/data-integrity-guidelines if not decrypt response . plaintext crc32c == crc32c ( decrypt response . plaintext ): raise Exception ( "The response received from the server was corrupted in-transit." ) End integrity verification print ( f "Plaintext: { decrypt response . plaintext !r} " ) return decrypt response def crc32c ( data : bytes ) - > int : """ Calculates the CRC32C checksum of the provided data.

### Create a key \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit: https://cloud.google.com/kms/docs/data-integrity-guidelines if not public key . name == key version name : raise Exception ( "The request sent to the server was corrupted in-transit." ) See crc32c() function defined below. if not public key . pem crc32c == crc32c ( public key . pem . encode ( "utf-8" )): raise Exception ( "The response received from the server was corrupted in-transit." ) End integrity verification print ( f "Public key: { public key . pem } " ) return public key def crc32c ( data : bytes ) - > int : """ Calculates the CRC32C checksum of the provided data.
- JWK . from pem ( public key . pem . encode ()) return jwk key . export ( private key = False ) def crc32c ( data : bytes ) - > int : """ Calculates the CRC32C checksum of the provided data.
- Returns: An int representing the CRC32C checksum of the provided bytes. """ import crcmod # type: ignore crc32c fun = crcmod . predefined . mkPredefinedCrcFun ( "crc-32c" ) return crc32c fun ( data ) Control access to asymmetric keys A signer or validator requires the appropriate permission or role on the asymmetric key.
- Returns: An int representing the CRC32C checksum of the provided bytes. """ import crcmod # type: ignore crc32c fun = crcmod . predefined . mkPredefinedCrcFun ( "crc-32c" ) return crc32c fun ( data ) Ruby To run this code, first set up a Ruby development environment and install the Cloud KMS Ruby SDK .

