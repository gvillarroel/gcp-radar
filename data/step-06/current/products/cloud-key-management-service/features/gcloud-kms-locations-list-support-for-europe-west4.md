---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.071Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "gcloud kms locations list support for europe-west4"
feature_slug: "gcloud-kms-locations-list-support-for-europe-west4"
latest_feature_date: "2018-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/rest"
  - "https://docs.cloud.google.com/kms/docs/reference/libraries"
  - "https://docs.cloud.google.com/kms/docs/create-manage-tags"
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
keywords:
  - "gcloud"
  - "kms"
  - "locations"
  - "list"
  - "for"
  - "europe"
  - "west4"
  - "the"
---

# gcloud kms locations list support for europe-west4

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

The gcloud kms locations list command supports the europe-west4 region.

## Extended Definition

The gcloud kms locations list command supports the europe-west4 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- [https://docs.cloud.google.com/kms/docs/reference/libraries](https://docs.cloud.google.com/kms/docs/reference/libraries)
- [https://docs.cloud.google.com/kms/docs/create-manage-tags](https://docs.cloud.google.com/kms/docs/create-manage-tags)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)

## Supporting Pages

### Cloud Key Management Service (KMS) API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.projects.locations.ekmConnections Methods create POST /v1/{parent=projects/ /locations/ }/ekmConnections Creates a new EkmConnection in a given Project and Location. get GET /v1/{name=projects/ /locations/ /ekmConnections/ } Returns metadata for a given EkmConnection . getIamPolicy GET /v1/{resource=projects/ /locations/ /ekmConnections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/ekmConnections Lists EkmConnections . patch PATCH /v1/{ekmConnection.name=projects/ /locations/ /ekmConnections/ } Updates an EkmConnection 's metadata. setIamPolicy POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /ekmConnections/ }:testIamPermissions Returns permissions that a caller has on the specified resource. verifyConnectivity GET /v1/{name=projects/ /locations/ /ekmConnections/ }:verifyConnectivity Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection .
- Select a location to see its regional service endpoint for this service. global europe-west3 europe-west8 europe-west9 me-central2 us-east1 us-east4 us-west2 us-west1 us-east7 us-central1 us-west3 us-central2 us-west4 us-west8 us-east5 us-south1 us in ca https://cloudkms.googleapis.com REST Resource: v1.folders Methods getAutokeyConfig GET /v1/{name=folders/ /autokeyConfig} Returns the AutokeyConfig for a folder or project. getKajPolicyConfig GET /v1/{name=folders/ /kajPolicyConfig} Gets the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project. updateAutokeyConfig PATCH /v1/{autokeyConfig.name=folders/ /autokeyConfig} Updates the AutokeyConfig for a folder or a project. updateKajPolicyConfig PATCH /v1/{keyAccessJustificationsPolicyConfig.name=folders/ /kajPolicyConfig} Updates the KeyAccessJustificationsPolicyConfig for a given organization, folder, or project.
- REST Resource: v1.projects.locations Methods generateRandomBytes POST /v1/{location=projects/ /locations/ }:generateRandomBytes Generate random bytes using the Cloud KMS randomness source in the provided location. get GET /v1/{name=projects/ /locations/ } Gets information about a location. getEkmConfig GET /v1/{name=projects/ /locations/ /ekmConfig} Returns the EkmConfig singleton resource for a given project and location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service. updateEkmConfig PATCH /v1/{ekmConfig.name=projects/ /locations/ /ekmConfig} Updates the EkmConfig singleton resource for a given project and location.
- REST Resource: v1.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions Methods asymmetricDecrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:asymmetricDecrypt Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC DECRYPT. asymmetricSign POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:asymmetricSign Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey . create POST /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions Create a new CryptoKeyVersion in a CryptoKey . decapsulate POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:decapsulate Decapsulates data that was encapsulated with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose KEY ENCAPSULATION. delete DELETE /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Permanently deletes the given CryptoKeyVersion . destroy POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:destroy Schedule a CryptoKeyVersion for destruction. get GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Returns metadata for a given CryptoKeyVersion . getPublicKey GET /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }/publicKey Returns the public key for the given CryptoKeyVersion . import POST /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions:import Import wrapped key material into a CryptoKeyVersion . list GET /v1/{parent=projects/ /locations/ /keyRings/ /cryptoKeys/ }/cryptoKeyVersions Lists CryptoKeyVersions . macSign POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:macSign Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key. macVerify POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:macVerify Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful. patch PATCH /v1/{cryptoKeyVersion.name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ } Update a CryptoKeyVersion 's metadata. rawDecrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:rawDecrypt Decrypts data that was originally encrypted using a raw cryptographic mechanism. rawEncrypt POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:rawEncrypt Encrypts data using portable cryptographic primitives. restore POST /v1/{name=projects/ /locations/ /keyRings/ /cryptoKeys/ /cryptoKeyVersions/ }:restore Restore a CryptoKeyVersion in the DESTROY SCHEDULED state.

### "Cloud KMS client libraries \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/libraries](https://docs.cloud.google.com/kms/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- KeyManagementServiceClient () Build the parent location name. location name = f "projects/ { project id } /locations/ { location id } " Call the API. key rings = client . list key rings ( request = { "parent" : location name }) Example of iterating over key rings. for key ring in key rings : print ( key ring . name ) return key rings Ruby TODO(developer): uncomment these values before running the sample. project id = "my-project" location id = "us-east1" Require the library. require "google/cloud/kms" Create the client. client = Google :: Cloud :: Kms . key management service Build the parent location name. location name = client . location path project : project id , location : location id Call the API. key rings = client . list key rings parent : location name Example of iterating over key rings. puts "Key rings in #{ location name } " key rings . each do key ring puts key ring . name end Next steps Learn how to programmatically encrypt and decrypt data.
- Encrypting and decrypting data with a symmetric key Encrypting and decrypting data with an asymmetric key Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-cloud-kms on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-kms on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-kms on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-kms on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-kms on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-kms on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-kms on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-kms on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- System . out . println ( "key rings:" ); for ( KeyRing keyRing : response . iterateAll ()) { System . out . printf ( "%s%n" , keyRing . getName ()); } } } } Node.js // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the location name const locationName = client . locationPath ( projectId , locationId ); async function listKeyRings () { const [ keyRings ] = await client . listKeyRings ({ parent : locationName , }); for ( const keyRing of keyRings ) { console . log ( keyRing . name ); } return keyRings ; } return listKeyRings (); PHP use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\ListKeyRingsRequest; function quickstart( string $projectId = 'my-project', string $locationId = 'us-east1' ) { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the parent location name. $locationName = $client->locationName($projectId, $locationId); // Call the API. $listKeyRingsRequest = (new ListKeyRingsRequest()) ->setParent($locationName); $keyRings = $client->listKeyRings($listKeyRingsRequest); // Example of iterating over key rings. printf('Key rings in %s:' .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .79.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - kms < / artifactId > < / dependency > < / dependencies > If you are using Gradle , add the following to your dependencies: implementation ' com . google . cloud : google - cloud - kms : 2.91.0 ' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-kms" % "2.91.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.

### "Create and manage tags \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/create-manage-tags](https://docs.cloud.google.com/kms/docs/create-manage-tags)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to Key management Tags are displayed in the Tags column of the key ring. gcloud To get a list of tag bindings attached to a resource, use the gcloud resource-manager tags bindings list command: gcloud resource-manager tags bindings list \ --parent= RESOURCE ID \ --location= LOCATION Replace the following: RESOURCE ID is the full ID of the resource, including the API domain name to identify the type of resource ( //cloudkms.googleapis.com/ ).
- For example, to attach a tag to projects/ PROJECT ID /locations/ LOCATION NAME /keyRings/ KEYRING NAME , the full ID is: //cloudkms.googleapis.com/projects/ PROJECT ID /locations/ LOCATION NAME /keyRings/ KEYRING NAME .
- For example, to attach a tag to projects/ PROJECT ID /locations/ LOCATION NAME /keyRings/ KEYRING NAME , the full ID is: //cloudkms.googleapis.com/projects/ PROJECT ID /locations/ LOCATION NAME /keyRings/ KEYRING NAME .
- For example, to attach a tag to projects/ PROJECT ID /locations/ LOCATION NAME /keyRings/ KEYRING NAME , the full ID is: //cloudkms.googleapis.com/projects/ PROJECT ID /locations/ LOCATION NAME /keyRings/ KEYRING NAME .

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- To create a Single-tenant Cloud HSM key, add the --cryptoKeyBackend flag to this command and add the resource identifier of the Single-tenant Cloud HSM instance where you want to import the key: --crypto-key-backend = "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " Go To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // createKeyForImport creates a new asymmetric signing key in Cloud HSM. func createKeyForImport ( w io .
- Create an empty, import-only key: curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /keyRings/ KEY RING /cryptoKeys?cryptoKeyId= KEY NAME &skipInitialVersionCreation=true&importOnly=true" \ --request "POST" \ --header "authorization: Bearer TOKEN " \ --header "content-type: application/json" \ --header "x-goog-user-project: PROJECT ID " \ --data "{"purpose":" PURPOSE ", "versionTemplate":{"protectionLevel":" PROTECTION LEVEL ","algorithm":" ALGORITHM "}}" See the CryptoKey.create API documentation for more information.
- Use the location and keyring where you created the import job. gcloud kms import-jobs describe IMPORT JOB \ --location LOCATION \ --keyring KEY RING \ --format="value(state)" The output is similar to the following: state: ACTIVE Go To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // checkStateImportJob checks the state of an ImportJob in KMS. func checkStateImportJob ( w io .
- Use the same location, target key ring, and target key that you created earlier in this topic. gcloud kms keys versions list \ --keyring KEY RING \ --location LOCATION \ --key KEY NAME Go To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // checkStateImportedKey checks the state of a CryptoKeyVersion in KMS. func checkStateImportedKey ( w io .

