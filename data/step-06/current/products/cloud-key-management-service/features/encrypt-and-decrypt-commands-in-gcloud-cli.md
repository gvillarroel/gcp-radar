---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.075Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Encrypt and decrypt commands in gcloud CLI"
feature_slug: "encrypt-and-decrypt-commands-in-gcloud-cli"
latest_feature_date: "2017-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/encrypt-decrypt"
  - "https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa"
  - "https://docs.cloud.google.com/kms/docs/client-side-encryption"
  - "https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm"
keywords:
  - "encrypt"
  - "and"
  - "decrypt"
  - "commands"
  - "in"
  - "gcloud"
  - "cli"
  - "the"
---

# Encrypt and decrypt commands in gcloud CLI

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

The gcloud beta kms CLI includes commands to encrypt and decrypt data.

## Extended Definition

The gcloud beta kms CLI includes commands to encrypt and decrypt data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt)
- [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa)
- [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption)
- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)

## Supporting Pages

### "Encrypting and decrypting data with a symmetric key \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt)
- Source ID: `site-docs-root`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is an example payload with base64 encoded data: { "plaintext" : "U3VwZXIgc2VjcmV0IHRleHQgdGhhdCBtdXN0IGJlIGVuY3J5cHRlZAo=" , } Decrypt gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms decrypt \ --key KEY NAME \ --keyring KEY RING \ --location LOCATION \ --ciphertext-file FILE TO DECRYPT \ --plaintext-file DECRYPTED OUTPUT Replace the following: KEY NAME : the name of the key that you want to use for decryption.
- Encrypt gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms encrypt \ --key KEY NAME \ --keyring KEY RING \ --location LOCATION \ --plaintext-file FILE TO ENCRYPT \ --ciphertext-file ENCRYPTED OUTPUT Replace the following: KEY NAME : the name of the key that you want to use for encryption.
- EncryptResponse response = client . encrypt ( keyVersionName , ByteString . copyFromUtf8 ( plaintext )); System . out . printf ( "Ciphertext: %s%n" , response . getCiphertext (). toStringUtf8 ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const plaintextBuffer = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId ); // Optional, but recommended: compute plaintext's CRC32C. const crc32c = require ( 'fast-crc32c' ); const plaintextCrc32c = crc32c . calculate ( plaintextBuffer ); async function encryptSymmetric () { const [ encryptResponse ] = await client . encrypt ({ name : keyName , plaintext : plaintextBuffer , plaintextCrc32c : { value : plaintextCrc32c , }, }); const ciphertext = encryptResponse . ciphertext ; // Optional, but recommended: perform integrity verification on encryptResponse. // For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit: // https://cloud.google.com/kms/docs/data-integrity-guidelines if ( ! encryptResponse . verifiedPlaintextCrc32c ) { throw new Error ( 'Encrypt: request corrupted in-transit' ); } if ( crc32c . calculate ( ciphertext ) !== Number ( encryptResponse . ciphertextCrc32c . value ) ) { throw new Error ( 'Encrypt: response corrupted in-transit' ); } console . log ( Ciphertext: ${ ciphertext . toString ( 'base64' ) } ); return ciphertext ; } return encryptSymmetric (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\EncryptRequest; function encrypt symmetric( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key', string $plaintext = '...' ) { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key name. $keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId); // Call the API. $encryptRequest = (new EncryptRequest()) ->setName($keyName) ->setPlaintext($plaintext); $encryptResponse = $client->encrypt($encryptRequest); printf('Ciphertext: %s' .
- DecryptResponse response = client . decrypt ( keyName , ByteString . copyFrom ( ciphertext )); System . out . printf ( "Plaintext: %s%n" , response . getPlaintext (). toStringUtf8 ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // Ciphertext must be either a Buffer object or a base-64 encoded string // const ciphertext = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId ); // Optional, but recommended: compute ciphertext's CRC32C. const crc32c = require ( 'fast-crc32c' ); const ciphertextCrc32c = crc32c . calculate ( ciphertext ); async function decryptSymmetric () { const [ decryptResponse ] = await client . decrypt ({ name : keyName , ciphertext : ciphertext , ciphertextCrc32c : { value : ciphertextCrc32c , }, }); // Optional, but recommended: perform integrity verification on decryptResponse. // For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit: // https://cloud.google.com/kms/docs/data-integrity-guidelines if ( crc32c . calculate ( decryptResponse . plaintext ) !== Number ( decryptResponse . plaintextCrc32c . value ) ) { throw new Error ( 'Decrypt: response corrupted in-transit' ); } const plaintext = decryptResponse . plaintext . toString (); console . log ( Plaintext: ${ plaintext } ); return plaintext ; } return decryptSymmetric (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\DecryptRequest; function decrypt symmetric( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key', string $ciphertext = '...' ) { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key name. $keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId); // Call the API. $decryptRequest = (new DecryptRequest()) ->setName($keyName) ->setCiphertext($ciphertext); $decryptResponse = $client->decrypt($decryptRequest); printf('Plaintext: %s' .

### "Encrypting and decrypting data with an asymmetric key \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa)
- Source ID: `site-docs-root`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Decrypt data Use Cloud KMS to perform the decryption. gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms asymmetric-decrypt \ --version key-version \ --key key \ --keyring key-ring \ --location location \ --ciphertext-file file-path-with-encrypted-data \ --plaintext-file file-path-to-store-plaintext Replace key-version with the key version, or omit the --version flag to detect the version automatically.
- If you are using Node to do // public key encryption, please use version 12+. const plaintext = decryptResponse . plaintext . toString ( 'utf8' ); console . log ( Plaintext: ${ plaintext } ); return plaintext ; } return decryptAsymmetric (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\AsymmetricDecryptRequest; use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; function decrypt asymmetric( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key', string $versionId = '123', string $ciphertext = '...' ) { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key version name. $keyVersionName = $client->cryptoKeyVersionName($projectId, $locationId, $keyRingId, $keyId, $versionId); // Call the API. $asymmetricDecryptRequest = (new AsymmetricDecryptRequest()) ->setName($keyVersionName) ->setCiphertext($ciphertext); $decryptResponse = $client->asymmetricDecrypt($asymmetricDecryptRequest); printf('Plaintext: %s' .
- OaepSHA256 ); return ciphertext ; } } Go To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . import ( "context" "crypto/rand" "crypto/rsa" "crypto/sha256" "crypto/x509" "encoding/pem" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // encryptAsymmetric encrypts data on your local machine using an // 'RSA DECRYPT OAEP 2048 SHA256' public key retrieved from Cloud KMS. func encryptAsymmetric ( w io .
- UTF 8 )); System . out . printf ( "Ciphertext: %s%n" , ciphertext ); } } // Converts a base64-encoded PEM certificate like the one returned from Cloud // KMS into a DER formatted certificate for use with the Java APIs. private byte [] convertPemToDer ( String pem ) { BufferedReader bufferedReader = new BufferedReader ( new StringReader ( pem )); String encoded = bufferedReader . lines () . filter ( line - > ! line . startsWith ( "-----BEGIN" ) && ! line . startsWith ( "-----END" )) . collect ( Collectors . joining ()); return Base64 . getDecoder (). decode ( encoded ); } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '123'; // const plaintextBuffer = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key version name const versionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , keyId , versionId ); async function encryptAsymmetric () { // Get public key from Cloud KMS const [ publicKey ] = await client . getPublicKey ({ name : versionName , }); // Optional, but recommended: perform integrity verification on publicKey. // For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit: // https://cloud.google.com/kms/docs/data-integrity-guidelines const crc32c = require ( 'fast-crc32c' ); if ( publicKey . name !== versionName ) { throw new Error ( 'GetPublicKey: request corrupted in-transit' ); } if ( crc32c . calculate ( publicKey . pem ) !== Number ( publicKey . pemCrc32c . value )) { throw new Error ( 'GetPublicKey: response corrupted in-transit' ); } // Import and setup crypto const crypto = require ( 'crypto' ); // Encrypt plaintext locally using the public key.

### "Client-side encryption with Tink and Cloud KMS \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/client-side-encryption](https://docs.cloud.google.com/kms/docs/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- StorageOptions ; import com.google.crypto.tink.Aead ; import com.google.crypto.tink.KmsClient ; import com.google.crypto.tink.aead.AeadConfig ; import com.google.crypto.tink.aead.KmsEnvelopeAead ; import com.google.crypto.tink.aead.PredefinedAeadParameters ; import com.google.crypto.tink.integration.gcpkms.GcpKmsClient ; import java.io.File ; import java.io.FileInputStream ; import java.io.FileOutputStream ; import java.nio.file.Files ; import java.nio.file.Paths ; import java.security.GeneralSecurityException ; import java.util.Arrays ; / A command-line utility for encrypting small files with envelope encryption and uploading the results to GCS. <p>The CLI takes the following required arguments: <ul> <li>mode: "encrypt" or "decrypt" to indicate if you want to encrypt or decrypt. <li>kek-uri: The URI for the Cloud KMS key to be used for envelope encryption. <li>gcp-credential-file: Name of the file with the GCP credentials (in JSON format) that can access the Cloud KMS key and the GCS input/output blobs. <li>gcp-project-id: The ID of the GCP project hosting the GCS blobs that you want to encrypt or decrypt. </ul> <p>When mode is "encrypt", it takes the following additional arguments: <ul> <li>local-input-file: Read the plaintext from this local file. <li>gcs-output-blob: Write the encryption result to this blob in GCS.
- That if, if you rename or // move the blob to a different bucket, decryption will fail. // See https://developers.google.com/tink/aead#associated data. byte [] associatedData = gcsBlobPath . getBytes ( UTF 8 ); byte [] ciphertext = aead . encrypt ( input , associatedData ); // Upload to GCS String bucketName = getBucketName ( gcsBlobPath ); String objectName = getObjectName ( gcsBlobPath ); BlobId blobId = BlobId . of ( bucketName , objectName ); BlobInfo blobInfo = BlobInfo . newBuilder ( blobId ). build (); storage . create ( blobInfo , ciphertext ); } else if ( MODE DECRYPT . equals ( mode )) { // Download the GCS blob String gcsBlobPath = args [ 4 ] ; String bucketName = getBucketName ( gcsBlobPath ); String objectName = getObjectName ( gcsBlobPath ); byte [] input = storage . readAllBytes ( bucketName , objectName ); // Decrypt to a local file byte [] associatedData = gcsBlobPath . getBytes ( UTF 8 ); byte [] plaintext = aead . decrypt ( input , associatedData ); File outputFile = new File ( args [ 5 ] ); try ( FileOutputStream stream = new FileOutputStream ( outputFile )) { stream . write ( plaintext ); } } else { System . err . println ( "The first argument must be either encrypt or decrypt, got: " + mode ); System . exit ( 1 ); } System . exit ( 0 ); } private static String getBucketName ( String gcsBlobPath ) { if ( ! gcsBlobPath . startsWith ( GCS PATH PREFIX )) { throw new IllegalArgumentException ( "GCS blob paths must start with gs://, got " + gcsBlobPath ); } String bucketAndObjectName = gcsBlobPath . substring ( GCS PATH PREFIX . length ()); int firstSlash = bucketAndObjectName . indexOf ( "/" ); if ( firstSlash == - 1 ) { throw new IllegalArgumentException ( "GCS blob paths must have format gs://my-bucket-name/my-object-name, got " + gcsBlobPath ); } return bucketAndObjectName . substring ( 0 , firstSlash ); } private static String getObjectName ( String gcsBlobPath ) { if ( ! gcsBlobPath . startsWith ( GCS PATH PREFIX )) { throw new IllegalArgumentException ( "GCS blob paths must start with gs://, got " + gcsBlobPath ); } String bucketAndObjectName = gcsBlobPath . substring ( GCS PATH PREFIX . length ()); int firstSlash = bucketAndObjectName . indexOf ( "/" ); if ( firstSlash == - 1 ) { throw new IllegalArgumentException ( "GCS blob paths must have format gs://my-bucket-name/my-object-name, got " + gcsBlobPath ); } return bucketAndObjectName . substring ( firstSlash + 1 ); } private GcsEnvelopeAeadExample () {} } For more information about the primitives and interfaces supported by Tink, see the Get started page for Tink.
- That is, if you rename or move it to a different bucket, decryption will fail. </ul> <p>When mode is "decrypt", it takes the following additional arguments: <ul> <li>gcs-input-blob: Read the ciphertext from this blob in GCS. <li>local-output-file: Write the decryption result to this local file. / public final class GcsEnvelopeAeadExample { private static final String MODE ENCRYPT = "encrypt" ; private static final String MODE DECRYPT = "decrypt" ; private static final String GCS PATH PREFIX = "gs://" ; public static void main ( String [] args ) throws Exception { if ( args . length != 6 ) { System . err . printf ( "Expected 6 parameters, got %d\n" , args . length ); System . err . println ( "Usage: java GcsEnvelopeAeadExample encrypt/decrypt kek-uri gcp-credential-file" + " gcp-project-id input-file output-file" ); System . exit ( 1 ); } String mode = args [ 0 ] ; String kekUri = args [ 1 ] ; String gcpCredentialFilename = args [ 2 ] ; String gcpProjectId = args [ 3 ] ; // Initialise Tink: register all AEAD key types with the Tink runtime AeadConfig . register (); // Read the GCP credentials and create a remote AEAD object.
- Client . from service account json ( FLAGS . gcp credential path ) try : bucket name , object name = get bucket and object ( FLAGS . gcs blob path ) except ValueError as e : logging . exception ( 'Error parsing GCS blob path: %s ' , e ) return 1 bucket = storage client . bucket ( bucket name ) blob = bucket . blob ( object name ) associated data = FLAGS . gcs blob path . encode ( 'utf-8' ) if FLAGS . mode == 'encrypt' : with open ( FLAGS . local path , 'rb' ) as input file : output data = env aead . encrypt ( input file . read (), associated data ) blob . upload from string ( output data ) elif FLAGS . mode == 'decrypt' : ciphertext = blob . download as bytes () with open ( FLAGS . local path , 'wb' ) as output file : output file . write ( env aead . decrypt ( ciphertext , associated data )) else : logging . error ( 'Unsupported mode %s .

### "Create and manage a Single-tenant Cloud HSM instance \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create and provision an instance To create and provision a Single-tenant Cloud HSM instance, you use the gcloud CLI to create the instance resource, create a proposal to register your authentication keys, and then approve and execute the proposal.
- After you create and provision your instance, you can create and use keys in the instance using the Google Cloud console, Cloud Key Management Service API, the gcloud CLI, and client libraries.
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " \ --required-challenge-replies = " SIGNED REQUIRED CHALLENGE LIST " Replace the following: SIGNED QUORUM CHALLENGE LIST : a JSON-formatted array of challenges signed using private keys that are already registered, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " Replace SIGNED QUORUM CHALLENGE LIST with a JSON-formatted array of challenges, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.

