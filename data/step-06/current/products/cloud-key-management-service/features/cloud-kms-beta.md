---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.077Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS Beta"
feature_slug: "cloud-kms-beta"
latest_feature_date: "2017-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa"
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
  - "https://docs.cloud.google.com/kms/docs/asymmetric-encryption"
  - "https://docs.cloud.google.com/kms/docs/data-integrity-guidelines"
keywords:
  - "kms"
  - "beta"
  - "launched"
  - "in"
  - "as"
  - "managed"
  - "for"
  - "symmetric"
---

# Cloud KMS Beta

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS launched in beta as a managed service for symmetric AES256 encryption keys with key creation, usage, rotation, auto-rotation, and destruction.

## Extended Definition

Cloud KMS launched in beta as a managed service for symmetric AES256 encryption keys with key creation, usage, rotation, auto-rotation, and destruction.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa)
- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption)
- [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines)

## Supporting Pages

### "Encrypting and decrypting data with an asymmetric key \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa](https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UTF 8 )); System . out . printf ( "Ciphertext: %s%n" , ciphertext ); } } // Converts a base64-encoded PEM certificate like the one returned from Cloud // KMS into a DER formatted certificate for use with the Java APIs. private byte [] convertPemToDer ( String pem ) { BufferedReader bufferedReader = new BufferedReader ( new StringReader ( pem )); String encoded = bufferedReader . lines () . filter ( line - > ! line . startsWith ( "-----BEGIN" ) && ! line . startsWith ( "-----END" )) . collect ( Collectors . joining ()); return Base64 . getDecoder (). decode ( encoded ); } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '123'; // const plaintextBuffer = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key version name const versionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , keyId , versionId ); async function encryptAsymmetric () { // Get public key from Cloud KMS const [ publicKey ] = await client . getPublicKey ({ name : versionName , }); // Optional, but recommended: perform integrity verification on publicKey. // For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit: // https://cloud.google.com/kms/docs/data-integrity-guidelines const crc32c = require ( 'fast-crc32c' ); if ( publicKey . name !== versionName ) { throw new Error ( 'GetPublicKey: request corrupted in-transit' ); } if ( crc32c . calculate ( publicKey . pem ) !== Number ( publicKey . pemCrc32c . value )) { throw new Error ( 'GetPublicKey: response corrupted in-transit' ); } // Import and setup crypto const crypto = require ( 'crypto' ); // Encrypt plaintext locally using the public key.
- AsymmetricDecryptResponse response = client . asymmetricDecrypt ( keyVersionName , ByteString . copyFrom ( ciphertext )); System . out . printf ( "Plaintext: %s%n" , response . getPlaintext (). toStringUtf8 ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const keyId = 'my-key'; // const versionId = '123'; // const ciphertext = Buffer.from('...'); // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the key version name const versionName = client . cryptoKeyVersionPath ( projectId , locationId , keyRingId , keyId , versionId ); // Optional, but recommended: compute plaintext's CRC32C. const crc32c = require ( 'fast-crc32c' ); const ciphertextCrc32c = crc32c . calculate ( ciphertext ); async function decryptAsymmetric () { const [ decryptResponse ] = await client . asymmetricDecrypt ({ name : versionName , ciphertext : ciphertext , ciphertextCrc32c : { value : ciphertextCrc32c , }, }); // Optional, but recommended: perform integrity verification on decryptResponse. // For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit: // https://cloud.google.com/kms/docs/data-integrity-guidelines if ( ! decryptResponse . verifiedCiphertextCrc32c ) { throw new Error ( 'AsymmetricDecrypt: request corrupted in-transit' ); } if ( crc32c . calculate ( decryptResponse . plaintext ) !== Number ( decryptResponse . plaintextCrc32c . value ) ) { throw new Error ( 'AsymmetricDecrypt: response corrupted in-transit' ); } // NOTE: The ciphertext must be properly formatted.
- TODO(developer): uncomment these values before running the sample. project id = "my-project" location id = "us-east1" key ring id = "my-key-ring" key id = "my-key" version id = "123" ciphertext = "..." Require the library. require "google/cloud/kms" Create the client. client = Google :: Cloud :: Kms . key management service Build the key version name. key version name = client . crypto key version path project : project id , location : location id , key ring : key ring id , crypto key : key id , crypto key version : version id Call the API. response = client . asymmetric decrypt key version name , ciphertext puts "Plaintext: #{ response . plaintext } " API These examples use curl as an HTTP client to demonstrate using the API.
- RSA PKCS1 OAEP PADDING , }, plaintextBuffer ); console . log ( Ciphertext: ${ ciphertextBuffer . toString ( 'base64' ) } ); return ciphertextBuffer ; } return encryptAsymmetric (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . function encrypt asymmetric( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $keyId = 'my-key', string $versionId = '123', string $plaintext = '...' ): void { // PHP has limited support for asymmetric encryption operations. // Specifically, openssl public encrypt() does not allow customizing // algorithms or padding.

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud KMS Inventory Service. google.cloud.kms.inventory.v1.KeyDashboardService The following audit logs are associated with methods belonging to google.cloud.kms.inventory.v1.KeyDashboardService .
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys" google.cloud.kms.inventory.v1.KeyTrackingService The following audit logs are associated with methods belonging to google.cloud.kms.inventory.v1.KeyTrackingService .
- Filter for this service: protoPayload . serviceName = "kmsinventory.googleapis.com" Methods by permission type Each IAM permission has a type property, whose value is an enum that can be one of four values: ADMIN READ , ADMIN WRITE , DATA READ , or DATA WRITE .

### "Asymmetric encryption \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about which algorithms Cloud KMS supports, see asymmetric encryption algorithms .
- Example use case for asymmetric encryption Asymmetric encryption only supports a very small plaintext size, so asymmetric encryption is generally used for encryption keys, not large pieces of data.
- Cloud KMS asymmetric encryption functionality Cloud KMS provides the following functionality related to asymmetric encryption.
- Asymmetric encryption workflow The following describes the flow for using an asymmetric key to encrypt and decrypt data.

### "Verifying end-to-end data integrity \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/data-integrity-guidelines](https://docs.cloud.google.com/kms/docs/data-integrity-guidelines)
- Source ID: `site-iam-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Field in request Field in response EncryptRequest.plaintext crc32c EncryptResponse.verified plaintext crc32c EncryptionRequest.additional authenticated data crc32c EncryptionResponse.verified additional authenticated data crc32c AsymmetricSignRequest.digest crc32c AsymmetricSignResponse.verified digest crc32c AsymmetricSignRequest.signature crc32c AsymmetricSignResponse.verified signature crc32c AsymmetricSignRequest.signature crc32c AsymmetricSignResponse.verified signature crc32c Not applicable GetPublicKeyResponse.pem crc32c Not applicable GetPublicKeyResponse.public key.crc32c checksum Not applicable DecryptResponse.plaintext crc32c MacSignRequest.data crc32c MacSignResponse.verified data crc32c MacVerifyRequest.data crc32c MacVerifyResponse.verified data crc32c MacVerifyRequest.mac crc32c MacVerifyResponse.verified mac crc32c Not applicable MacVerifyResponse.verified success integrity DecapsulateRequest.ciphertext crc32c DecapsulateResponse.verified ciphertext crc32c Not applicable DecapsulateResponse.shared secret crc32c Verifying resource names Responses for Encrypt , GetPublicKey , AsymmetricSign , AsymmetricDecrypt , Decapsulate , MacSign , and MacVerify , include a name field that contains the name of the relevant Cloud Key Management Service API object.
- Encrypt API Server-side input verification Client-side resource verification Client-side output verification Client-side verification of server-side input EncryptRequest plaintext crc32c , additional authenticated data crc32c EncryptResponse name ciphertext crc32c verified plaintext crc32c , verified additional authenticated data crc32c Decrypt API Server-side input verification Client-side resource verification Client-side output verification Client-side verification of server-side input DecryptRequest ciphertext crc32c , additional authenticated data crc32c DecryptResponse plaintext crc32c AsymmetricSign API Server-side input verification Client-side resource verification Client-side output verification Client-side verification of server-side input AsymmetricSignRequest digest crc32c AsymmetricSignResponse name signature crc32c verified digest crc32c AsymmetricDecrypt API Server-side input verification Client-side resource verification Client-side output verification Client-side verification of server-side input AsymmetricDecryptRequest ciphertext crc32c AsymmetricDecryptResponse plaintext crc32c verified ciphertext crc32c Decapsulate API Server-side input verification Client-side resource verification Client-side output verification Client-side verification of server-side input DecapsulateRequest ciphertext crc32c DecapsulateResponse shared secret crc32c verified ciphertext crc32c PublicKey API Server-side input verification Client-side resource verification Client-side output verification Client-side verification of server-side input PublicKey name pem crc32c, public key.crc32c checksum MacSign API Server-side input verification Client-side resource verification Client-side output verification Client-side verification of server-side input MacSignRequest data crc32c MacSignResponse mac crc32c verified data crc32c MacVerify API Server-side input verification Client-side resource verification Client-side output verification Client-side verification of server-side input MacVerifyRequest data crc32c mac crc32c MacVerifyResponse verified data crc32c verified mac crc32c verified success integrity What's next Learn more about symmetric and asymmetric encryption Learn more about encrypting application data Use Cloud Audit Logs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Security Cloud KMS Guides Send feedback Verifying end-to-end data integrity Stay organized with collections Save and categorize content based on your preferences.

