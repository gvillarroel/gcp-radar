---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.007Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS PureEdDSA on Curve25519"
feature_slug: "cloud-kms-pureeddsa-on-curve25519"
latest_feature_date: "2024-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/asymmetric-encryption"
  - "https://docs.cloud.google.com/kms/docs/algorithms"
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
  - "https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles"
keywords:
  - "kms"
  - "pureeddsa"
  - "on"
  - "curve25519"
  - "supports"
  - "asymmetric"
  - "signing"
  - "and"
---

# Cloud KMS PureEdDSA on Curve25519

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports asymmetric signing and validation using ECDSA on Curve25519 in PureEdDSA mode.

## Extended Definition

Cloud KMS supports asymmetric signing and validation using ECDSA on Curve25519 in PureEdDSA mode.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption)
- [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)

## Supporting Pages

### "Asymmetric encryption \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/asymmetric-encryption](https://docs.cloud.google.com/kms/docs/asymmetric-encryption)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Cloud KMS Guides Send feedback Asymmetric encryption Stay organized with collections Save and categorize content based on your preferences.
- For information about which algorithms Cloud KMS supports, see asymmetric encryption algorithms .
- Example use case for asymmetric encryption Asymmetric encryption only supports a very small plaintext size, so asymmetric encryption is generally used for encryption keys, not large pieces of data.
- Asymmetric encryption is the process of using a public key from a public/private key pair to encrypt plaintext, and then using the corresponding private key to decrypt the ciphertext.

### "Key purposes and algorithms \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key purposes Cloud KMS provides key purposes for the following scenarios: Scenario Key purpose (SDK) Key purpose (API) Supported methods Symmetric encryption encryption ENCRYPT DECRYPT cryptoKeys.encrypt , cryptoKeys.decrypt Raw symmetric encryption raw-encryption RAW ENCRYPT DECRYPT cryptoKeys.rawEncrypt , cryptoKeys.rawDecrypt Asymmetric signing asymmetric-signing ASYMMETRIC SIGN cryptoKeyVersions.asymmetricSign , cryptoKeyVersions.getPublicKey Asymmetric encryption asymmetric-encryption ASYMMETRIC DECRYPT cryptoKeyVersions.asymmetricDecrypt , cryptoKeyVersions.getPublicKey Key encapsulation mechanisms key-encapsulation KEY ENCAPSULATION cryptoKeyVersions.decapsulate , cryptoKeyVersions.getPublicKey MAC signing mac MAC cryptoKeyVersions.macSign , cryptoKeyVersions.macVerify When you create a key, you define the purpose and the algorithm of that key.
- Keys with key purpose ASYMMETRIC SIGN use different algorithms, depending on whether the key supports elliptic curve signing or RSA signing .
- Limited to symmetric encryption and asymmetric signing.
- Limited to symmetric encryption and asymmetric signing.

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- To create a Single-tenant Cloud HSM key, add the --cryptoKeyBackend flag to this command and add the resource identifier of the Single-tenant Cloud HSM instance where you want to import the key: --crypto-key-backend = "projects/ INSTANCE PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE NAME " Go To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // createKeyForImport creates a new asymmetric signing key in Cloud HSM. func createKeyForImport ( w io .
- Args: project id (string): Google Cloud project ID (e.g. 'my-project'). location id (string): Cloud KMS location (e.g. 'us-east1'). key ring id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring'). crypto key id (string): ID of the key to import (e.g. 'my-asymmetric-signing-key'). import job id (string): ID of the import job (e.g. 'my-import-job'). """ Generate some key material in Python and format it in PKCS #8 DER as required by Google Cloud KMS. key = ec . generate private key ( ec .
- RSA PKCS1 OAEP PADDING , }, targetKey ); // Import the target key version const [ version ] = await client . importCryptoKeyVersion ({ parent : cryptoKeyName , importJob : importJobName , algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , wrappedKey : wrappedTargetKey , }); console . log ( Imported key version: ${ version . name } ); return version ; } return wrapAndImportKey (); Python To run this code, first set up a Python development environment and install the Cloud KMS Python SDK . import os Import the client library and Python standard cryptographic libraries. from cryptography.hazmat import backends from cryptography.hazmat.primitives import hashes from cryptography.hazmat.primitives import keywrap from cryptography.hazmat.primitives import serialization from cryptography.hazmat.primitives.asymmetric import ec from cryptography.hazmat.primitives.asymmetric import padding from google.cloud import kms def import manually wrapped key ( project id : str , location id : str , key ring id : str , crypto key id : str , import job id : str , ) - > None : """ Generates and imports local key material to Cloud KMS.
- Args: project id (string): Google Cloud project ID (e.g. 'my-project'). location id (string): Cloud KMS location (e.g. 'us-east1'). key ring id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring'). crypto key id (string): ID of the key to import (e.g. 'my-asymmetric-signing-key'). """ Create the client. client = kms .

### "Permissions and roles \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)
- Source ID: `site-api-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToDecapsulate cloudkms. cryptoKeyVersions. useToDecrypt cloudkms. cryptoKeyVersions. useToEncrypt cloudkms. cryptoKeyVersions. useToSign cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms. locations. generateRandomBytes cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Decapsulator Beta ( roles/ cloudkms.decapsulator ) Enables Decapsulate and GetPublicKey operations cloudkms. cryptoKeyVersions. useToDecapsulate cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS EkmConnections Admin ( roles/ cloudkms.ekmConnectionsAdmin ) Enables management of EkmConnections. cloudkms.ekmConfigs.get cloudkms.ekmConfigs.update cloudkms.ekmConnections.create cloudkms.ekmConnections.get cloudkms.ekmConnections.list cloudkms.ekmConnections.update cloudkms. ekmConnections. verifyConnectivity resourcemanager.projects.get resourcemanager.projects.list Cloud KMS Expert PQ Asymmetric Signing Key Manager ( roles/ cloudkms.expertPqcSigner ) Enables PQ asymmetric signing key management. cloudkms. cryptoKeyVersions. managePqcSign cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get resourcemanager.projects.list Cloud KMS Expert Raw AES-CBC Key Manager ( roles/ cloudkms.expertRawAesCbc ) Enables raw AES-CBC keys management.
- This role must be combined with another role that grants the ability to create cryptoKeys. cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list cloudkms. singleTenantHsmInstances. use Cloud KMS single-tenant HSM Proposer ( roles/ cloudkms.hsmSingleTenantProposer ) Grants ability to create SingleTenantHsmInstances and SingleTenantHsmInstanceProposals. cloudkms.operations.get cloudkms. singleTenantHsmInstanceProposals. create cloudkms. singleTenantHsmInstanceProposals. delete cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. create cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list Cloud KMS single-tenant HSM Quorum Member ( roles/ cloudkms.hsmSingleTenantQuorumMember ) Grants ability to approve SingleTenantHsmInstanceProposal resources. cloudkms.operations.get cloudkms. singleTenantHsmInstanceProposals. approve cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list Cloud KMS Importer ( roles/ cloudkms.importer ) Enables ImportCryptoKeyVersion, CreateImportJob, ListImportJobs, and GetImportJob operations cloudkms.importJobs.create cloudkms.importJobs.get cloudkms.importJobs.list cloudkms. importJobs. useToImport cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Key Access Justifications Enrollment Viewer ( roles/ cloudkms.keyAccessJustificationsEnrollmentConfigViewer ) Grant ability to view Key Access Justification enrollment configs of a project. cloudkms. projects. showEffectiveKajEnrollmentConfig Key Access Justifications Policy Config Admin ( roles/ cloudkms.keyAccessJustificationsPolicyConfigAdmin ) Grant ability to manage Key Access Justifications Policy at parent resource level. cloudkms.kajPolicyConfigs. cloudkms.kajPolicyConfigs.get cloudkms. kajPolicyConfigs. update cloudkms. projects. showEffectiveKajPolicyConfig Cloud KMS Protected Resources Viewer ( roles/ cloudkms.protectedResourcesViewer ) Enables viewing protected resources. cloudkms. protectedResources. search Cloud KMS CryptoKey Public Key Viewer ( roles/ cloudkms.publicKeyViewer ) Enables GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Signer ( roles/ cloudkms.signer ) Enables Sign operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToSign cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Signer/Verifier ( roles/ cloudkms.signerVerifier ) Enables Sign, Verify, and GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToSign cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Verifier ( roles/ cloudkms.verifier ) Enables Verify and GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Service agent roles Service agent roles should only be granted to service agents .
- Lowest-level resources where you can grant this role: CryptoKey cloudkms.autokeyConfigs. cloudkms.autokeyConfigs.get cloudkms.autokeyConfigs.update cloudkms. cryptoKeyVersions. create cloudkms. cryptoKeyVersions. delete cloudkms. cryptoKeyVersions. destroy cloudkms.cryptoKeyVersions.get cloudkms. cryptoKeyVersions. list cloudkms. cryptoKeyVersions. restore cloudkms. cryptoKeyVersions. update cloudkms. cryptoKeyVersions. useToDecryptViaDelegation cloudkms. cryptoKeyVersions. useToEncryptViaDelegation cloudkms.cryptoKeys. cloudkms.cryptoKeys.create cloudkms.cryptoKeys.delete cloudkms.cryptoKeys.get cloudkms. cryptoKeys. getIamPolicy cloudkms.cryptoKeys.list cloudkms. cryptoKeys. setIamPolicy cloudkms.cryptoKeys.update cloudkms.ekmConfigs. cloudkms.ekmConfigs.get cloudkms. ekmConfigs. getIamPolicy cloudkms. ekmConfigs. setIamPolicy cloudkms.ekmConfigs.update cloudkms.ekmConnections. cloudkms.ekmConnections.create cloudkms.ekmConnections.get cloudkms. ekmConnections. getIamPolicy cloudkms.ekmConnections.list cloudkms. ekmConnections. setIamPolicy cloudkms.ekmConnections.update cloudkms.ekmConnections.use cloudkms. ekmConnections. verifyConnectivity cloudkms.importJobs. cloudkms.importJobs.create cloudkms.importJobs.get cloudkms. importJobs. getIamPolicy cloudkms.importJobs.list cloudkms. importJobs. setIamPolicy cloudkms. importJobs. useToImport cloudkms.kajPolicyConfigs. cloudkms.kajPolicyConfigs.get cloudkms. kajPolicyConfigs. update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.keyRings. cloudkms.keyRings.create cloudkms. keyRings. createTagBinding cloudkms. keyRings. deleteTagBinding cloudkms.keyRings.get cloudkms.keyRings.getIamPolicy cloudkms.keyRings.list cloudkms. keyRings. listEffectiveTags cloudkms. keyRings. listTagBindings cloudkms.keyRings.setIamPolicy cloudkms.locations.get cloudkms.locations.list cloudkms. locations. optOutKeyDeletionMsa cloudkms.operations.get cloudkms.projects. cloudkms. projects. showEffectiveAutokeyConfig cloudkms. projects. showEffectiveKajEnrollmentConfig cloudkms. projects. showEffectiveKajPolicyConfig cloudkms.retiredResources. cloudkms.retiredResources.get cloudkms.retiredResources.list cloudkms. singleTenantHsmInstanceProposals. delete cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. cloudkms. singleTenantHsmInstances. create cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list cloudkms. singleTenantHsmInstances. use resourcemanager.projects.get Cloud KMS CryptoKey Encrypter/Decrypter ( roles/ cloudkms.cryptoKeyEncrypterDecrypter ) Provides ability to use Cloud KMS resources for encrypt and decrypt operations only.
- Lowest-level resources where you can grant this role: CryptoKey cloudkms.autokeyConfigs.get cloudkms.cryptoKeyVersions.get cloudkms. cryptoKeyVersions. list cloudkms.cryptoKeys.get cloudkms.cryptoKeys.list cloudkms.ekmConfigs.get cloudkms.ekmConnections.get cloudkms.ekmConnections.list cloudkms.importJobs.get cloudkms.importJobs.list cloudkms.kajPolicyConfigs.get cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.keyRings.get cloudkms.keyRings.list cloudkms.locations.get cloudkms.locations.list cloudkms.operations.get cloudkms.retiredResources. cloudkms.retiredResources.get cloudkms.retiredResources.list cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list resourcemanager.projects.get Cloud KMS Autokey Admin ( roles/ cloudkms.autokeyAdmin ) Enables management of AutokeyConfig. cloudkms.autokeyConfigs. cloudkms.autokeyConfigs.get cloudkms.autokeyConfigs.update cloudkms. projects. showEffectiveAutokeyConfig Cloud KMS Autokey User ( roles/ cloudkms.autokeyUser ) Grants ability to use KeyHandle resources. cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig Cloud KMS CryptoKey Decrypter ( roles/ cloudkms.cryptoKeyDecrypter ) Provides ability to use Cloud KMS resources for decrypt operations only.

