---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.058Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud HSM"
feature_slug: "cloud-hsm"
latest_feature_date: "2018-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl"
  - "https://docs.cloud.google.com/kms/docs/hsm"
keywords:
  - "hsm"
  - "in"
  - "kms"
  - "is"
  - "generally"
  - "available"
  - "beta"
  - "introduced"
---

# Cloud HSM

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud HSM in Cloud KMS is generally available; Cloud KMS beta introduced HSM protection level support and related API metadata.

## Extended Definition

Cloud HSM in Cloud KMS is generally available; Cloud KMS beta introduced HSM protection level support and related API metadata.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl)
- [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)

## Supporting Pages

### "Create and manage a Single-tenant Cloud HSM instance \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " \ --required-challenge-replies = " SIGNED REQUIRED CHALLENGE LIST " Replace the following: SIGNED QUORUM CHALLENGE LIST : a JSON-formatted array of challenges signed using private keys that are already registered, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- To get the permissions that you need to create, manage, and use Single-tenant Cloud HSM instances, ask your administrator to grant you the following IAM roles on the project or a parent resource: Create proposals: Cloud KMS single-tenant HSM Proposer ( cloudkms.hsmSingleTenantProposer ) Approve proposals: Cloud KMS single-tenant HSM Quorum Member ( cloudkms.hsmSingleTenantQuorumMember ) Execute proposals: Cloud KMS single-tenant HSM Executor ( cloudkms.hsmSingleTenantExecutor ) Create keys: Cloud KMS single-tenant HSM Key Creator ( roles/cloudkms.hsmSingleTenantKeyCreator ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " Replace SIGNED QUORUM CHALLENGE LIST with a JSON-formatted array of challenges, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " Replace SIGNED QUORUM CHALLENGE LIST with a JSON-formatted array of challenges, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.

### "Use a Cloud HSM key for TLS offloading with NGINX \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx](https://docs.cloud.google.com/kms/docs/reference/pkcs11-nginx)
- Source ID: `site-api-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prepare library configurations for NGINX Allow NGINX to log its PKCS #11 engine operations with the library with the following: sudo mkdir /var/log/kmsp11 sudo chown www-data /var/log/kmsp11 Create an empty library configuration file with the appropriate permissions for NGINX. sudo touch /etc/nginx/pkcs11-config.yaml sudo chmod 744 /etc/nginx/pkcs11-config.yaml Edit the empty config file and add the needed configuration as shown in the following snippet: cat /etc/nginx/pkcs11-config.yaml --- tokens: - key ring: "projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING " log directory: "/var/log/kmsp11" Test your OpenSSL configuration Run the following command: openssl engine -tt -c -v pkcs11 You should see output similar to the following: (pkcs11) pkcs11 engine [RSA, rsaEncryption, id-ecPublicKey] [ available ] SO PATH, MODULE PATH, PIN, VERBOSE, QUIET, INIT ARGS, FORCE LOGIN Configure NGINX to use Cloud HSM Allow TLS offloading by editing a few NGINX files.
- The resulting change should look like the following example: server { listen 80 default server; listen [::]:80 default server; SSL configuration listen 443 ssl default server; listen [::]:443 ssl default server; ... ... } Provide environment variables to the NGINX service Run the following command: sudo systemctl edit nginx.service In the resulting editor, add the following lines and replace the LIBPATH with the value for the location where you installed libkmsp11.so : [ Service ] Environment = "GRPC ENABLE FORK SUPPORT=1" Environment = "KMS PKCS11 CONFIG=/etc/nginx/pkcs11-config.yaml" Environment = "PKCS11 MODULE PATH= LIBPATH /libkmsp11-1.0-linux-amd64/libkmsp11.so" After you configure these values, you will need to run the following command to make them available: sudo systemctl daemon-reload Restart NGINX with TLS Offloading Run the following command so that NGINX restarts and uses the updated configuration: sudo systemctl start nginx Note: If you see any errors upon restart, check your /var/log/nginx/error.log and /var/log/kmsp11/ for additional details.
- Create a Cloud HSM-hosted signing key Create a Cloud HSM EC-P256-SHA256 signing key in your Google Cloud project, in the key ring that you previously configured for OpenSSL: gcloud kms keys create NGINX KEY \ --keyring " KEY RING " --project " PROJECT ID " \ --location " LOCATION " --purpose "asymmetric-signing" \ --default-algorithm "ec-sign-p256-sha256" --protection-level "hsm" Note: Make sure that your Compute Engine service account has the correct Identity and Access Management (IAM) permissions on the key ring to be able to use it.
- To do so, OpenSSL lets you use PKCS #11 URIs instead of a regular path, identifying the key by its label (for Cloud KMS keys, the label is the CryptoKey name). openssl req -new -x509 -days 3650 -subj '/CN= CERTIFICATE NAME /' \ DIGEST FLAG -engine pkcs11 -keyform engine \ -key PKCS KEY TYPE = KEY IDENTIFIER > CA CERT Replace the following: CERTIFICATE NAME : a name for the certificate.

### "Using a Cloud HSM key with OpenSSL \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl)
- Source ID: `site-api-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To ensure that opensc is installed, run the following command: sudo apt-get install opensc Then, set the PKCS11 MODULE PATH environment variable to point OpenSSL at the PKCS #11 Spy library by running the following command: export PKCS11 MODULE PATH = /usr/lib/x86 64-linux-gnu/pkcs11-spy.so Finally, point PKCS #11 Spy to the Cloud HSM PKCS #11 library by setting the PKCS11SPY and PKCS11SPY OUTPUT environment variables.
- To set these environment variables, run the following commands: export PKCS11SPY = "/path/to/libkmsp11.so" Optional, stderr will be used for logging if not set export PKCS11SPY OUTPUT = "/path/to/pkcs11-spy.log" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Point KMS PKCS11 CONFIG to your config file: export KMS PKCS11 CONFIG = "/path/to/pkcs11-config.yaml" Again, you can make this setting permanent by adding it to /etc/profile . echo 'export KMS PKCS11 CONFIG="/path/to/pkcs11-config.yaml"' sudo tee -a /etc/profile Running OpenSSL commands With the engine and library properly configured, you may now use the engine in OpenSSL commands.
- This is useful if your certificate authority requires a CSR in order to generate a new certificate for code signing, or to protect TLS web sessions. openssl req -new -subj '/CN=test/' -sha256 -engine pkcs11 \ -keyform engine -key pkcs11:object=foo > my-request.csr Note: Only create CSRs for Cloud KMS CryptoKeys with the ASYMMETRIC SIGN purpose.

### Cloud HSM \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key ); System . out . printf ( "Created hsm key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-hsm-encryption-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyHsm () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , protectionLevel : 'HSM' , }, // Optional: customize how long key versions should be kept before // destroying. destroyScheduledDuration : { seconds : 60 60 24 }, }, }); console . log ( Created hsm key: ${ key . name } ); return key ; } return createKeyHsm (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\CreateCryptoKeyRequest; use Google\Cloud\Kms\V1\CryptoKey; use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose; use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm; use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate; use Google\Cloud\Kms\V1\ProtectionLevel; use Google\Protobuf\Duration; function create key hsm( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $id = 'my-hsm-key' ): CryptoKey { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the parent key ring name. $keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId); // Build the key. $key = (new CryptoKey()) ->setPurpose(CryptoKeyPurpose::ENCRYPT DECRYPT) ->setVersionTemplate((new CryptoKeyVersionTemplate()) ->setAlgorithm(CryptoKeyVersionAlgorithm::GOOGLE SYMMETRIC ENCRYPTION) ->setProtectionLevel(ProtectionLevel::HSM) ) // Optional: customize how long key versions should be kept before destroying. ->setDestroyScheduledDuration((new Duration()) ->setSeconds(24 60 60) ); // Call the API. $createCryptoKeyRequest = (new CreateCryptoKeyRequest()) ->setParent($keyRingName) ->setCryptoKeyId($id) ->setCryptoKey($key); $createdKey = $client->createCryptoKey($createCryptoKeyRequest); printf('Created hsm key: %s' .
- To create a Single-tenant Cloud HSM key, use the CryptoKey.create method with the HSM SINGLE TENANT protection level: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": "HSM SINGLE TENANT", "algorithm": " ALGORITHM ", "cryptoKeyBackend": "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " }}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- To create a Multi-tenant Cloud HSM key, use the CryptoKey.create method with the HSM protection level: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": "HSM", "algorithm": " ALGORITHM " }}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- CreateCryptoKey ( keyRingName , id , key ); // Return the result. return result ; } } Go To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "io" "time" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" "google.golang.org/protobuf/types/known/durationpb" ) // createKeyHSM creates a new symmetric encrypt/decrypt key on Cloud KMS. func createKeyHSM ( w io .

