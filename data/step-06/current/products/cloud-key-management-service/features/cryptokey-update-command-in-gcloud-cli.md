---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.073Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "CryptoKey update command in gcloud CLI"
feature_slug: "cryptokey-update-command-in-gcloud-cli"
latest_feature_date: "2017-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/creating-managing-labels"
  - "https://docs.cloud.google.com/kms/docs/create-validate-signatures"
  - "https://docs.cloud.google.com/kms/docs/create-resource-with-autokey"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx"
keywords:
  - "cryptokey"
  - "update"
  - "command"
  - "in"
  - "gcloud"
  - "cli"
  - "the"
  - "beta"
---

# CryptoKey update command in gcloud CLI

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

The gcloud beta kms keys update command allows updating an existing key from the CLI.

## Extended Definition

The gcloud beta kms keys update command allows updating an existing key from the CLI.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels)
- [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures)
- [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)

## Supporting Pages

### Labeling keys \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/creating-managing-labels](https://docs.cloud.google.com/kms/docs/creating-managing-labels)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Save . gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms keys update KEY NAME \ --keyring KEY RING \ --location LOCATION \ --update-labels " LABEL LIST " KEY NAME : the name of the key.
- Click Save . gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms keys update KEY NAME \ --keyring KEY RING \ --location LOCATION \ --remove-labels " LABEL KEYS " KEY NAME : the name of the key.
- CryptoKey updatedKey = client . updateCryptoKey ( key , fieldMask ); System . out . printf ( "Updated key %s%n" , updatedKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '123'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId ); async function updateKeyUpdateLabels () { const [ key ] = await client . updateCryptoKey ({ cryptoKey : { name : keyName , labels : { new label : 'new value' , }, }, updateMask : { paths : [ 'labels' ], }, }); console . log ( Updated labels for: ${ key . name } ); return key ; } return updateKeyUpdateLabels (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\CryptoKey; use Google\Cloud\Kms\V1\UpdateCryptoKeyRequest; use Google\Protobuf\FieldMask; function update key update labels( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key' ): CryptoKey { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key name. $keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId); // Build the key. $key = (new CryptoKey()) ->setName($keyName) ->setLabels(['new label' => 'new value']); // Create the field mask. $updateMask = (new FieldMask()) ->setPaths(['labels']); // Call the API. $updateCryptoKeyRequest = (new UpdateCryptoKeyRequest()) ->setCryptoKey($key) ->setUpdateMask($updateMask); $updatedKey = $client->updateCryptoKey($updateCryptoKeyRequest); printf('Updated key: %s' .
- CryptoKey createdKey = client . updateCryptoKey ( key , fieldMask ); System . out . printf ( "Updated key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '123'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId ); async function updateKeyRemoveLabels () { const [ key ] = await client . updateCryptoKey ({ cryptoKey : { name : keyName , labels : null , }, updateMask : { paths : [ 'labels' ], }, }); console . log ( Removed labels from: ${ key . name } ); return key ; } return updateKeyRemoveLabels (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\CryptoKey; use Google\Cloud\Kms\V1\UpdateCryptoKeyRequest; use Google\Protobuf\FieldMask; function update key remove labels( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key' ): CryptoKey { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key name. $keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId); // Build the key. $key = (new CryptoKey()) ->setName($keyName) ->setLabels([]); // Create the field mask. $updateMask = (new FieldMask()) ->setPaths(['labels']); // Call the API. $updateCryptoKeyRequest = (new UpdateCryptoKeyRequest()) ->setCryptoKey($key) ->setUpdateMask($updateMask); $updatedKey = $client->updateCryptoKey($updateCryptoKeyRequest); printf('Updated key: %s' .

### "Creating and validating digital signatures \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/create-validate-signatures](https://docs.cloud.google.com/kms/docs/create-validate-signatures)
- Source ID: `site-iam-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PublicKey rsaKey = KeyFactory . getInstance ( "RSA" ). generatePublic ( keySpec ); // Verify the 'RSA SIGN PKCS1 2048 SHA256' signature. // For other key algorithms: // http://docs.oracle.com/javase/7/docs/technotes/guides/security/StandardNames.html#Signature Signature rsaVerify = Signature . getInstance ( "SHA256withRSA" ); rsaVerify . initVerify ( rsaKey ); rsaVerify . update ( plaintext ); // Verify the signature. boolean verified = rsaVerify . verify ( signature ); System . out . printf ( "Signature verified: %s" , verified ); } } // Converts a base64-encoded PEM certificate like the one returned from Cloud // KMS into a DER formatted certificate for use with the Java APIs. private byte [] convertPemToDer ( String pem ) { BufferedReader bufferedReader = new BufferedReader ( new StringReader ( pem )); String encoded = bufferedReader . lines () . filter ( line - > ! line . startsWith ( "-----BEGIN" ) && ! line . startsWith ( "-----END" )) . collect ( Collectors . joining ()); return Base64 . getDecoder (). decode ( encoded ); } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'your-project-id'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '1'; // const message = 'my message to verify'; // const signatureBuffer = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const versionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , keyId , versionId ); async function verifyAsymmetricSignatureRsa () { // Get public key const [ publicKey ] = await client . getPublicKey ({ name : versionName , }); // Create the verifier.
- PublicKey ecKey = KeyFactory . getInstance ( "EC" ). generatePublic ( keySpec ); // Verify the 'RSA SIGN PKCS1 2048 SHA256' signature. // For other key algorithms: // http://docs.oracle.com/javase/7/docs/technotes/guides/security/StandardNames.html#Signature Signature ecVerify = Signature . getInstance ( "SHA256withECDSA" ); ecVerify . initVerify ( ecKey ); ecVerify . update ( plaintext ); // Verify the signature. boolean verified = ecVerify . verify ( signature ); System . out . printf ( "Signature verified: %s" , verified ); } } // Converts a base64-encoded PEM certificate like the one returned from Cloud // KMS into a DER formatted certificate for use with the Java APIs. private byte [] convertPemToDer ( String pem ) { BufferedReader bufferedReader = new BufferedReader ( new StringReader ( pem )); String encoded = bufferedReader . lines () . filter ( line - > ! line . startsWith ( "-----BEGIN" ) && ! line . startsWith ( "-----END" )) . collect ( Collectors . joining ()); return Base64 . getDecoder (). decode ( encoded ); } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'your-project-id'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '1'; // const message = 'my message to verify'; // const signatureBuffer = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key name const versionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , keyId , versionId ); async function verifyAsymmetricSignatureEc () { // Get public key const [ publicKey ] = await client . getPublicKey ({ name : versionName , }); // Create the verifier.
- The algorithm must match the algorithm of the key. const crypto = require ( 'crypto' ); const verify = crypto . createVerify ( 'sha256' ); verify . update ( message ); verify . end (); // Build the key object const key = { key : publicKey . pem , }; // Verify the signature using the public key const verified = verify . verify ( key , signatureBuffer ); return verified ; } return verifyAsymmetricSignatureEc (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\GetPublicKeyRequest; function verify asymmetric ec( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key', string $versionId = '123', string $message = '...', string $signature = '...' ): bool { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the key version name. $keyVersionName = $client->cryptoKeyVersionName($projectId, $locationId, $keyRingId, $keyId, $versionId); // Get the public key. $getPublicKeyRequest = (new GetPublicKeyRequest()) ->setName($keyVersionName); $publicKey = $client->getPublicKey($getPublicKeyRequest); // Verify the signature.
- Creating a signature gcloud To use Cloud KMS on the command line, first Install or upgrade to the latest version of Google Cloud CLI . gcloud kms asymmetric-sign \ --version key-version \ --key key \ --keyring key-ring \ --location location \ --digest-algorithm digest-algorithm \ --input-file input-file \ --signature-file signature-file Replace key-version with the version of the key to to use for signing.

### "Create protected resources using Cloud KMS Autokey \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-resource-with-autokey](https://docs.cloud.google.com/kms/docs/create-resource-with-autokey)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an encrypted secret with automatic replication by using the gcloud secrets create command , with the --kms-key-name flag. gcloud secrets create " SECRET ID " \ --replication-policy "automatic" \ --kms-key-name "projects/ KEY PROJECT ID /locations/global/keyRings/autokey/cryptoKeys/ KEY NAME " \ --project " RESOURCE PROJECT ID " Replace the following: SECRET ID : the ID to use for the new secret.
- Create an encrypted bucket by using the gcloud storage buckets create command , with the --default-encryption-key flag: gcloud storage buckets create gs:// BUCKET NAME \ --location = LOCATION \ --default-encryption-key = projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/autokey/cryptoKeys/ KEY NAME Replace the following: BUCKET NAME : the name of the new bucket.
- Create an encrypted disk by using the gcloud compute disks create command , with the --kms-key flag: gcloud compute disks create DISK NAME \ --kms-key projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/autokey/cryptoKeys/ KEY NAME Replace the following: DISK NAME : the name of the new disk.
- Create an encrypted dataset by using the bq mk command , with the --destination kms key flag. bq --location = LOCATION mk \ --dataset \ --default kms key = projects/ KEY PROJECT ID /locations/ LOCATION /keyRings/autokey/cryptoKeys/ KEY NAME \ --default table expiration = TABLE EXPIRATION \ --description = " DATASET DESCRIPTION " \ RESOURCE PROJECT ID : DATASET ID Replace the following: LOCATION : the location where you want to create the dataset.

### "Use a Cloud HSM key for TLS offloading with NGINX \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- Source ID: `site-api-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The resulting change should look like the following example: server { listen 80 default server; listen [::]:80 default server; SSL configuration listen 443 ssl default server; listen [::]:443 ssl default server; ... ... } Provide environment variables to the NGINX service Run the following command: sudo systemctl edit nginx.service In the resulting editor, add the following lines and replace the LIBPATH with the value for the location where you installed libkmsp11.so : [ Service ] Environment = "GRPC ENABLE FORK SUPPORT=1" Environment = "KMS PKCS11 CONFIG=/etc/nginx/pkcs11-config.yaml" Environment = "PKCS11 MODULE PATH= LIBPATH /libkmsp11-1.0-linux-amd64/libkmsp11.so" After you configure these values, you will need to run the following command to make them available: sudo systemctl daemon-reload Restart NGINX with TLS Offloading Run the following command so that NGINX restarts and uses the updated configuration: sudo systemctl start nginx Note: If you see any errors upon restart, check your /var/log/nginx/error.log and /var/log/kmsp11/ for additional details.
- Test NGINX uses TLS offloading to your Cloud HSM Use the openssl s client to test connection to your NGINX server by running the following command: openssl s client -connect localhost:443 The client completes the SSL handshake and waits for your input: completes SSL handshake ... ... ...
- Connect to your VM using SSH and IAP Connect to your VM using SSH and IAP with the following command: gcloud compute ssh INSTANCE \ --zone ZONE --tunnel-through-iap If you run into an issue, confirm that you used the --tunnel-through-iap flag.
- Also, confirm that you have the IAP-Secured Tunnel User ( roles/iap.tunnelResourceAccessor ) role on the instance for the identity authenticated with gcloud CLI.

