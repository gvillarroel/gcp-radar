---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.073Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "CryptoKey labels"
feature_slug: "cryptokey-labels"
latest_feature_date: "2017-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys"
  - "https://docs.cloud.google.com/kms/docs/encrypt-decrypt"
  - "https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys/list"
keywords:
  - "cryptokey"
  - "labels"
  - "kms"
  - "cryptokeys"
  - "user"
  - "defined"
  - "through"
  - "the"
---

# CryptoKey labels

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS CryptoKeys support user-defined labels through the labels field.

## Extended Definition

Cloud KMS CryptoKeys support user-defined labels through the labels field.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys)
- [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys/list](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys/list)

## Supporting Pages

### "REST Resource: projects.cryptoKeys \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- The properties of new CryptoKeyVersion instances created by either [CreateCryptoKeyVersion][KeyManagementService.CreateCryptoKeyVersion] or auto-rotation are controlled by this template. labels map (key: string, value: string) Labels with user-defined metadata.
- JSON representation { "name" : string , "primary" : { object ( CryptoKeyVersion ) } , "purpose" : enum ( CryptoKeyPurpose ) , "createTime" : string , "nextRotationTime" : string , "versionTemplate" : { object ( CryptoKeyVersionTemplate ) } , "labels" : { string : string , ... } , "importOnly" : boolean , "destroyScheduledDuration" : string , "cryptoKeyBackend" : string , // Union field rotation schedule can be only one of the following: "rotationPeriod" : string // End of list of possible types for union field rotation schedule . } Fields name string Output only.
- The resource name for this CryptoKeyVersion in the format projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ . state enum ( CryptoKeyVersionState ) The current state of the CryptoKeyVersion . protectionLevel enum ( ProtectionLevel ) Output only.
- Home Documentation Security Cloud KMS Reference Send feedback REST Resource: projects.cryptoKeys Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: projects.locations.keyRings.cryptoKeys \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The properties of new CryptoKeyVersion instances created by either [CreateCryptoKeyVersion][KeyManagementService.CreateCryptoKeyVersion] or auto-rotation are controlled by this template. labels map (key: string, value: string) Labels with user-defined metadata.
- JSON representation { "name" : string , "primary" : { object ( CryptoKeyVersion ) } , "purpose" : enum ( CryptoKeyPurpose ) , "createTime" : string , "nextRotationTime" : string , "versionTemplate" : { object ( CryptoKeyVersionTemplate ) } , "labels" : { string : string , ... } , "importOnly" : boolean , "destroyScheduledDuration" : string , "cryptoKeyBackend" : string , // Union field rotation schedule can be only one of the following: "rotationPeriod" : string // End of list of possible types for union field rotation schedule . } Fields name string Output only.
- Home Documentation Security Cloud KMS Reference Send feedback REST Resource: projects.locations.keyRings.cryptoKeys Stay organized with collections Save and categorize content based on your preferences.
- The resource name for this CryptoKey in the format projects/ /locations/ /keyRings/ /cryptoKeys/ . primary object ( CryptoKeyVersion ) Output only.

### "Encrypting and decrypting data with a symmetric key \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/encrypt-decrypt](https://docs.cloud.google.com/kms/docs/encrypt-decrypt)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To decrypt encrypted data, make a POST request and provide the appropriate project and key information and specify the encrypted text (also known as ciphertext ) to be decrypted in the ciphertext field of the request body. curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME :decrypt" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data "{\"ciphertext\": \" ENCRYPTED DATA \"}" Replace the following: PROJECT ID : the ID of the project that contains the key ring and key that you want to use for decryption.
- To encrypt data, make a POST request and provide the appropriate project and key information and specify the base64 encoded text to be encrypted in the plaintext field of the request body. curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME :encrypt" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --data "{\"plaintext\": \" PLAINTEXT TO ENCRYPT \"}" Replace the following: PROJECT ID : the ID of the project that contains the key ring and key that you want to use for encryption.
- One way to permit a user to encrypt or decrypt is to add the user to the roles/cloudkms.cryptoKeyEncrypter , roles/cloudkms.cryptoKeyDecrypter , or roles/cloudkms.cryptoKeyEncrypterDecrypter IAM roles for that key.
- Ensure the user that is calling the encrypt and decrypt methods has the cloudkms.cryptoKeyVersions.useToEncrypt and cloudkms.cryptoKeyVersions.useToDecrypt permissions on the key.

### "Method: projects.cryptoKeys.list \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys/list](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys/list)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- The Google Cloud project for which to retrieve key metadata, in the format projects/ Authorization requires the following IAM permission on the specified resource parent : cloudkms.cryptoKeys.list Query parameters Parameters pageSize integer Optional.
- HTTP request GET https://kmsinventory.googleapis.com/v1/{parent=projects/ }/cryptoKeys The URL uses gRPC Transcoding syntax.
- JSON representation { "cryptoKeys" : [ { object ( CryptoKey ) } ] , "nextPageToken" : string } Fields cryptoKeys[] object ( CryptoKey ) The list of CryptoKeys . nextPageToken string The page token returned from the previous response if the next page is desired.
- Home Documentation Security Cloud KMS Reference Send feedback Method: projects.cryptoKeys.list Stay organized with collections Save and categorize content based on your preferences.

