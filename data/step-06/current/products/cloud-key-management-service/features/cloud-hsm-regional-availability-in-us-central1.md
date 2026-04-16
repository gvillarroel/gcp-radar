---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.063Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud HSM regional availability in us-central1"
feature_slug: "cloud-hsm-regional-availability-in-us-central1"
latest_feature_date: "2018-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
  - "https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm"
  - "https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl"
  - "https://docs.cloud.google.com/kms/docs/hsm"
keywords:
  - "hsm"
  - "regional"
  - "availability"
  - "in"
  - "us"
  - "central1"
  - "resources"
  - "are"
---

# Cloud HSM regional availability in us-central1

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud HSM resources are available in the us-central1 region.

## Extended Definition

Cloud HSM resources are available in the us-central1 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl)
- [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)

## Supporting Pages

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- For guidance about how Google Cloud services can help meet the requirements of different compliance frameworks, see the following resources: Protecting healthcare data on Google Cloud Cloud Compliance & Regulations Resources Google Cloud FedRAMP implementation guide PCI Data Security Standard compliance Summary of best practices The following table summarizes the best practices recommended in this document: Topic Task Decide whether to use CMEK Use CMEK if you require any of the capabilities enabled by CMEK .
- If you want to follow a different granularity strategy, consider the following trade-offs of different patterns: High granularity keys —for example, one key for each individual resource More control to safely disable key versions: Disabling or destroying a key version that is used for a narrow scope has lower risk of affecting other resources than disabling or destroying a shared key.
- For most organizations, this strategy provides a good balance between the overhead of maintaining many highly granular keys and the potential risks of using less granular keys that are shared between many projects, services, or resources.
- If you have requirements that can't be met with keys created by Autokey, such as a protection level other than HSM or services that aren't compatible with Autokey, then we recommend using manually-created CMEKs rather than Autokey.

### "Create and manage a Single-tenant Cloud HSM instance \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " \ --required-challenge-replies = " SIGNED REQUIRED CHALLENGE LIST " Replace the following: SIGNED QUORUM CHALLENGE LIST : a JSON-formatted array of challenges signed using private keys that are already registered, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- To get the permissions that you need to create, manage, and use Single-tenant Cloud HSM instances, ask your administrator to grant you the following IAM roles on the project or a parent resource: Create proposals: Cloud KMS single-tenant HSM Proposer ( cloudkms.hsmSingleTenantProposer ) Approve proposals: Cloud KMS single-tenant HSM Quorum Member ( cloudkms.hsmSingleTenantQuorumMember ) Execute proposals: Cloud KMS single-tenant HSM Executor ( cloudkms.hsmSingleTenantExecutor ) Create keys: Cloud KMS single-tenant HSM Key Creator ( roles/cloudkms.hsmSingleTenantKeyCreator ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can compare the public keys with your private 2FA keys to verify which control keys are active. gcloud View a list of existing instances using the kms single-tenant-hsm list method. gcloud kms single-tenant-hsm list projects/ PROJECT ID /locations/ LOCATION Replace the following: PROJECT ID : the identifier of the project where you want to view Single-tenant Cloud HSM instances.
- Create the Single-tenant Cloud HSM instance. gcloud kms single-tenant-hsm create --location = LOCATION \ --total-approver-count = QUORUM MEMBER COUNT \ --single-tenant-hsm-instance-id = INSTANCE ID Replace the following: LOCATION : the location where you want to create your instance—for example, us-central1 .

### "Using a Cloud HSM key with OpenSSL \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl](https://docs.cloud.google.com/kms/docs/reference/pkcs11-openssl)
- Source ID: `site-api-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In order for openssl to use our PKCS #11 library, set the PKCS11 MODULE PATH environment variable: export PKCS11 MODULE PATH = "/path/to/libkmsp11.so" To permanently set the environment variable, add export PKCS11 MODULE PATH="/path/to/libkmsp11.so" to /etc/profile by running the following command: echo 'export PKCS11 MODULE PATH="/path/to/libkmsp11.so"' sudo tee -a /etc/profile PKCS #11 library configuration The PKCS #11 library requires a YAML configuration file to locate Cloud KMS resources.
- To ensure that opensc is installed, run the following command: sudo apt-get install opensc Then, set the PKCS11 MODULE PATH environment variable to point OpenSSL at the PKCS #11 Spy library by running the following command: export PKCS11 MODULE PATH = /usr/lib/x86 64-linux-gnu/pkcs11-spy.so Finally, point PKCS #11 Spy to the Cloud HSM PKCS #11 library by setting the PKCS11SPY and PKCS11SPY OUTPUT environment variables.
- To set these environment variables, run the following commands: export PKCS11SPY = "/path/to/libkmsp11.so" Optional, stderr will be used for logging if not set export PKCS11SPY OUTPUT = "/path/to/pkcs11-spy.log" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Self-signed certificates are also useful for SAML token signing. openssl req -new -x509 -days 3650 -subj '/CN=test/' -sha256 -engine pkcs11 \ -keyform engine -key pkcs11:object=foo > my-request.crt Note: Self-signed certificates for Cloud KMS CryptoKeys are only used for the ASYMMETRIC SIGN purpose.

### Cloud HSM \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key ); System . out . printf ( "Created hsm key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-hsm-encryption-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyHsm () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , protectionLevel : 'HSM' , }, // Optional: customize how long key versions should be kept before // destroying. destroyScheduledDuration : { seconds : 60 60 24 }, }, }); console . log ( Created hsm key: ${ key . name } ); return key ; } return createKeyHsm (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\CreateCryptoKeyRequest; use Google\Cloud\Kms\V1\CryptoKey; use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose; use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm; use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate; use Google\Cloud\Kms\V1\ProtectionLevel; use Google\Protobuf\Duration; function create key hsm( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $id = 'my-hsm-key' ): CryptoKey { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the parent key ring name. $keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId); // Build the key. $key = (new CryptoKey()) ->setPurpose(CryptoKeyPurpose::ENCRYPT DECRYPT) ->setVersionTemplate((new CryptoKeyVersionTemplate()) ->setAlgorithm(CryptoKeyVersionAlgorithm::GOOGLE SYMMETRIC ENCRYPTION) ->setProtectionLevel(ProtectionLevel::HSM) ) // Optional: customize how long key versions should be kept before destroying. ->setDestroyScheduledDuration((new Duration()) ->setSeconds(24 60 60) ); // Call the API. $createCryptoKeyRequest = (new CreateCryptoKeyRequest()) ->setParent($keyRingName) ->setCryptoKeyId($id) ->setCryptoKey($key); $createdKey = $client->createCryptoKey($createCryptoKeyRequest); printf('Created hsm key: %s' .
- TODO(developer): uncomment these values before running the sample. project id = "my-project" location id = "us-east1" key ring id = "my-key-ring" id = "my-hsm-key" Require the library. require "google/cloud/kms" Create the client. client = Google :: Cloud :: Kms . key management service Build the parent key ring name. key ring name = client . key ring path project : project id , location : location id , key ring : key ring id Build the key. key = { purpose : :ENCRYPT DECRYPT , version template : { algorithm : :GOOGLE SYMMETRIC ENCRYPTION , protection level : :HSM }, Optional: customize how long key versions should be kept before destroying. destroy scheduled duration : { seconds : 24 60 60 } } Call the API. created key = client . create crypto key parent : key ring name , crypto key id : id , crypto key : key puts "Created hsm key: #{ created key . name } " API These examples use curl as an HTTP client to demonstrate using the API.
- To create a Single-tenant Cloud HSM key, use the CryptoKey.create method with the HSM SINGLE TENANT protection level: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": "HSM SINGLE TENANT", "algorithm": " ALGORITHM ", "cryptoKeyBackend": "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " }}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.
- To create a Multi-tenant Cloud HSM key, use the CryptoKey.create method with the HSM protection level: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?crypto key id= KEY NAME " \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data '{"purpose": "ENCRYPT DECRYPT", "versionTemplate": { "protectionLevel": "HSM", "algorithm": " ALGORITHM " }}' Replace the following: PROJECT ID : the ID of the project that contains the key ring.

