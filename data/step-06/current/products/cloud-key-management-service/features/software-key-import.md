---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.847Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Software key import"
feature_slug: "software-key-import"
latest_feature_date: "2020-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
  - "https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/import"
  - "https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1"
keywords:
  - "software"
  - "key"
  - "import"
  - "kms"
  - "supports"
  - "importing"
  - "material"
  - "into"
---

# Software key import

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports importing key material into software-protected keys as a generally available feature; Cloud KMS supports importing key material into software-protected keys.

## Extended Definition

Cloud KMS supports importing key material into software-protected keys as a generally available feature; Cloud KMS supports importing key material into software-protected keys.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/import](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/import)
- [https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1](https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1)

## Supporting Pages

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String projectId = "your-project-id" ; String locationId = "us-east1" ; String keyRingId = "my-key-ring" ; String cryptoKeyId = "my-crypto-key" ; String importJobId = "my-import-job" ; importManuallyWrappedKey ( projectId , locationId , keyRingId , cryptoKeyId , importJobId ); } // Generates and imports local key material into Cloud KMS. public void importManuallyWrappedKey ( String projectId , String locationId , String keyRingId , String cryptoKeyId , String importJobId ) throws GeneralSecurityException , IOException { // Generate a new ECDSA keypair, and format the private key as PKCS #8 DER.
- Set the import method to one of the following: rsa-oaep-3072-sha1-aes-256 rsa-oaep-4096-sha1-aes-256 rsa-oaep-3072-sha256-aes-256 rsa-oaep-4096-sha256-aes-256 rsa-oaep-3072-sha256 rsa-oaep-4096-sha256 To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // createImportJob creates a new job for importing keys into KMS. func createImportJob ( w io .
- To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "crypto/ecdsa" "crypto/elliptic" "crypto/rand" "crypto/rsa" "crypto/sha1" "crypto/x509" "encoding/pem" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" "github.com/google/tink/go/kwp/subtle" ) // importManuallyWrappedKey wraps key material and imports it into KMS. func importManuallyWrappedKey ( w io .
- Tip: KEY VERSION is usually 1 , because the imported version is the first version of the key. gcloud kms keys set-primary-version KEY NAME \ --location= LOCATION \ --keyring= KEY RING \ --version= KEY VERSION Re-import a previously destroyed key Cloud Key Management Service supports key re-import, which allows you to restore a previously imported key version in DESTROYED or IMPORT FAILED state to ENABLED state by providing the original key material.

### "Method: cryptoKeyVersions.import \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/import](https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions/import)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource parent : cloudkms.cryptoKeyVersions.create Request body The request body contains data with the following structure: JSON representation { "cryptoKeyVersion" : string , "algorithm" : enum ( CryptoKeyVersionAlgorithm ) , "importJob" : string , "wrappedKey" : string , // Union field wrapped key material can be only one of the following: "rsaAesWrappedKey" : string // End of list of possible types for union field wrapped key material . } Fields cryptoKeyVersion string Optional.
- If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208).
- Full name : projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.import Import wrapped key material into a CryptoKeyVersion .
- If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version.

### "Package google.cloud.kms.v1 \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1](https://docs.cloud.google.com/kms/docs/reference/rpc/google.cloud.kms.v1)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImportCryptoKeyVersion rpc ImportCryptoKeyVersion( ImportCryptoKeyVersionRequest ) returns ( CryptoKeyVersion ) Import wrapped key material into a CryptoKeyVersion .
- ImportJob An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS.
- Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion .
- If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208).

