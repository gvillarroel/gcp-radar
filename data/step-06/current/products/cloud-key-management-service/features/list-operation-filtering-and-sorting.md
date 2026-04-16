---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.051Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "List operation filtering and sorting"
feature_slug: "list-operation-filtering-and-sorting"
latest_feature_date: "2019-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles"
  - "https://docs.cloud.google.com/kms/docs/algorithms"
  - "https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm"
  - "https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory"
keywords:
  - "list"
  - "operation"
  - "filtering"
  - "and"
  - "sorting"
  - "kms"
  - "beta"
  - "supports"
---

# List operation filtering and sorting

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS beta supports filtering and sorting results for key ring, crypto key, and crypto key version list operations.

## Extended Definition

Cloud KMS beta supports filtering and sorting results for key ring, crypto key, and crypto key version list operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)
- [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)

## Supporting Pages

### "Permissions and roles \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToDecapsulate cloudkms. cryptoKeyVersions. useToDecrypt cloudkms. cryptoKeyVersions. useToEncrypt cloudkms. cryptoKeyVersions. useToSign cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms. locations. generateRandomBytes cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Decapsulator Beta ( roles/ cloudkms.decapsulator ) Enables Decapsulate and GetPublicKey operations cloudkms. cryptoKeyVersions. useToDecapsulate cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS EkmConnections Admin ( roles/ cloudkms.ekmConnectionsAdmin ) Enables management of EkmConnections. cloudkms.ekmConfigs.get cloudkms.ekmConfigs.update cloudkms.ekmConnections.create cloudkms.ekmConnections.get cloudkms.ekmConnections.list cloudkms.ekmConnections.update cloudkms. ekmConnections. verifyConnectivity resourcemanager.projects.get resourcemanager.projects.list Cloud KMS Expert PQ Asymmetric Signing Key Manager ( roles/ cloudkms.expertPqcSigner ) Enables PQ asymmetric signing key management. cloudkms. cryptoKeyVersions. managePqcSign cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get resourcemanager.projects.list Cloud KMS Expert Raw AES-CBC Key Manager ( roles/ cloudkms.expertRawAesCbc ) Enables raw AES-CBC keys management.
- This role must be combined with another role that grants the ability to create cryptoKeys. cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list cloudkms. singleTenantHsmInstances. use Cloud KMS single-tenant HSM Proposer ( roles/ cloudkms.hsmSingleTenantProposer ) Grants ability to create SingleTenantHsmInstances and SingleTenantHsmInstanceProposals. cloudkms.operations.get cloudkms. singleTenantHsmInstanceProposals. create cloudkms. singleTenantHsmInstanceProposals. delete cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. create cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list Cloud KMS single-tenant HSM Quorum Member ( roles/ cloudkms.hsmSingleTenantQuorumMember ) Grants ability to approve SingleTenantHsmInstanceProposal resources. cloudkms.operations.get cloudkms. singleTenantHsmInstanceProposals. approve cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list Cloud KMS Importer ( roles/ cloudkms.importer ) Enables ImportCryptoKeyVersion, CreateImportJob, ListImportJobs, and GetImportJob operations cloudkms.importJobs.create cloudkms.importJobs.get cloudkms.importJobs.list cloudkms. importJobs. useToImport cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Key Access Justifications Enrollment Viewer ( roles/ cloudkms.keyAccessJustificationsEnrollmentConfigViewer ) Grant ability to view Key Access Justification enrollment configs of a project. cloudkms. projects. showEffectiveKajEnrollmentConfig Key Access Justifications Policy Config Admin ( roles/ cloudkms.keyAccessJustificationsPolicyConfigAdmin ) Grant ability to manage Key Access Justifications Policy at parent resource level. cloudkms.kajPolicyConfigs. cloudkms.kajPolicyConfigs.get cloudkms. kajPolicyConfigs. update cloudkms. projects. showEffectiveKajPolicyConfig Cloud KMS Protected Resources Viewer ( roles/ cloudkms.protectedResourcesViewer ) Enables viewing protected resources. cloudkms. protectedResources. search Cloud KMS CryptoKey Public Key Viewer ( roles/ cloudkms.publicKeyViewer ) Enables GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Signer ( roles/ cloudkms.signer ) Enables Sign operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToSign cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Signer/Verifier ( roles/ cloudkms.signerVerifier ) Enables Sign, Verify, and GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToSign cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Verifier ( roles/ cloudkms.verifier ) Enables Verify and GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Service agent roles Service agent roles should only be granted to service agents .
- Lowest-level resources where you can grant this role: CryptoKey cloudkms.autokeyConfigs. cloudkms.autokeyConfigs.get cloudkms.autokeyConfigs.update cloudkms. cryptoKeyVersions. create cloudkms. cryptoKeyVersions. delete cloudkms. cryptoKeyVersions. destroy cloudkms.cryptoKeyVersions.get cloudkms. cryptoKeyVersions. list cloudkms. cryptoKeyVersions. restore cloudkms. cryptoKeyVersions. update cloudkms. cryptoKeyVersions. useToDecryptViaDelegation cloudkms. cryptoKeyVersions. useToEncryptViaDelegation cloudkms.cryptoKeys. cloudkms.cryptoKeys.create cloudkms.cryptoKeys.delete cloudkms.cryptoKeys.get cloudkms. cryptoKeys. getIamPolicy cloudkms.cryptoKeys.list cloudkms. cryptoKeys. setIamPolicy cloudkms.cryptoKeys.update cloudkms.ekmConfigs. cloudkms.ekmConfigs.get cloudkms. ekmConfigs. getIamPolicy cloudkms. ekmConfigs. setIamPolicy cloudkms.ekmConfigs.update cloudkms.ekmConnections. cloudkms.ekmConnections.create cloudkms.ekmConnections.get cloudkms. ekmConnections. getIamPolicy cloudkms.ekmConnections.list cloudkms. ekmConnections. setIamPolicy cloudkms.ekmConnections.update cloudkms.ekmConnections.use cloudkms. ekmConnections. verifyConnectivity cloudkms.importJobs. cloudkms.importJobs.create cloudkms.importJobs.get cloudkms. importJobs. getIamPolicy cloudkms.importJobs.list cloudkms. importJobs. setIamPolicy cloudkms. importJobs. useToImport cloudkms.kajPolicyConfigs. cloudkms.kajPolicyConfigs.get cloudkms. kajPolicyConfigs. update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.keyRings. cloudkms.keyRings.create cloudkms. keyRings. createTagBinding cloudkms. keyRings. deleteTagBinding cloudkms.keyRings.get cloudkms.keyRings.getIamPolicy cloudkms.keyRings.list cloudkms. keyRings. listEffectiveTags cloudkms. keyRings. listTagBindings cloudkms.keyRings.setIamPolicy cloudkms.locations.get cloudkms.locations.list cloudkms. locations. optOutKeyDeletionMsa cloudkms.operations.get cloudkms.projects. cloudkms. projects. showEffectiveAutokeyConfig cloudkms. projects. showEffectiveKajEnrollmentConfig cloudkms. projects. showEffectiveKajPolicyConfig cloudkms.retiredResources. cloudkms.retiredResources.get cloudkms.retiredResources.list cloudkms. singleTenantHsmInstanceProposals. delete cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. cloudkms. singleTenantHsmInstances. create cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list cloudkms. singleTenantHsmInstances. use resourcemanager.projects.get Cloud KMS CryptoKey Encrypter/Decrypter ( roles/ cloudkms.cryptoKeyEncrypterDecrypter ) Provides ability to use Cloud KMS resources for encrypt and decrypt operations only.
- Lowest-level resources where you can grant this role: CryptoKey cloudkms.autokeyConfigs.get cloudkms.cryptoKeyVersions.get cloudkms. cryptoKeyVersions. list cloudkms.cryptoKeys.get cloudkms.cryptoKeys.list cloudkms.ekmConfigs.get cloudkms.ekmConnections.get cloudkms.ekmConnections.list cloudkms.importJobs.get cloudkms.importJobs.list cloudkms.kajPolicyConfigs.get cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.keyRings.get cloudkms.keyRings.list cloudkms.locations.get cloudkms.locations.list cloudkms.operations.get cloudkms.retiredResources. cloudkms.retiredResources.get cloudkms.retiredResources.list cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list resourcemanager.projects.get Cloud KMS Autokey Admin ( roles/ cloudkms.autokeyAdmin ) Enables management of AutokeyConfig. cloudkms.autokeyConfigs. cloudkms.autokeyConfigs.get cloudkms.autokeyConfigs.update cloudkms. projects. showEffectiveAutokeyConfig Cloud KMS Autokey User ( roles/ cloudkms.autokeyUser ) Grants ability to use KeyHandle resources. cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig Cloud KMS CryptoKey Decrypter ( roles/ cloudkms.cryptoKeyDecrypter ) Provides ability to use Cloud KMS resources for decrypt operations only.

### "Key purposes and algorithms \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/algorithms](https://docs.cloud.google.com/kms/docs/algorithms)
- Source ID: `site-iam-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Algorithm (SDK) Algorithm (API) Description rsa-sign-pss-2048-sha256 RSA SIGN PSS 2048 SHA256 RSASSA-PSS 2048 bit key with a SHA-256 digest rsa-sign-pss-3072-sha256 (recommended) RSA SIGN PSS 3072 SHA256 RSASSA-PSS 3072 bit key with a SHA-256 digest rsa-sign-pss-4096-sha256 RSA SIGN PSS 4096 SHA256 RSASSA-PSS 4096 bit key with a SHA-256 digest rsa-sign-pss-4096-sha512 RSA SIGN PSS 4096 SHA512 RSASSA-PSS 4096 bit key with a SHA-512 digest rsa-sign-pkcs1-2048-sha256 RSA SIGN PKCS1 2048 SHA256 RSASSA-PKCS1 v1 5 with a 2048 bit key and a SHA-256 digest rsa-sign-pkcs1-3072-sha256 RSA SIGN PKCS1 3072 SHA256 RSASSA-PKCS1 v1 5 with a 3072 bit key and a SHA-256 digest rsa-sign-pkcs1-4096-sha256 RSA SIGN PKCS1 4096 SHA256 RSASSA-PKCS1 v1 5 with a 4096 bit key and a SHA-256 digest rsa-sign-pkcs1-4096-sha512 RSA SIGN PKCS1 4096 SHA512 RSASSA-PKCS1 v1 5 with a 4096 bit key and a SHA-512 digest rsa-sign-raw-pkcs1-2048 RSA SIGN RAW PKCS1 2048 RSASSA-PKCS1-v1 5 signing without encoding, with a 2048 bit key rsa-sign-raw-pkcs1-3072 RSA SIGN RAW PKCS1 3072 RSASSA-PKCS1-v1 5 signing without encoding, with a 3072 bit key rsa-sign-raw-pkcs1-4096 RSA SIGN RAW PKCS1 4096 RSASSA-PKCS1-v1 5 signing without encoding, with a 4096 bit key For Probabilistic Signature Scheme (PSS), the salt length used is equal to the length of the digest algorithm.
- Key purposes Cloud KMS provides key purposes for the following scenarios: Scenario Key purpose (SDK) Key purpose (API) Supported methods Symmetric encryption encryption ENCRYPT DECRYPT cryptoKeys.encrypt , cryptoKeys.decrypt Raw symmetric encryption raw-encryption RAW ENCRYPT DECRYPT cryptoKeys.rawEncrypt , cryptoKeys.rawDecrypt Asymmetric signing asymmetric-signing ASYMMETRIC SIGN cryptoKeyVersions.asymmetricSign , cryptoKeyVersions.getPublicKey Asymmetric encryption asymmetric-encryption ASYMMETRIC DECRYPT cryptoKeyVersions.asymmetricDecrypt , cryptoKeyVersions.getPublicKey Key encapsulation mechanisms key-encapsulation KEY ENCAPSULATION cryptoKeyVersions.decapsulate , cryptoKeyVersions.getPublicKey MAC signing mac MAC cryptoKeyVersions.macSign , cryptoKeyVersions.macVerify When you create a key, you define the purpose and the algorithm of that key.
- For example, if you are using RSA SIGN PSS 2048 SHA256, you will submit a SHA-256 hash of the data to be signed, and Cloud KMS will internally use SHA-256 as the hash algorithm for MGF1 when computing the signature.
- Home Documentation Security Cloud KMS Guides Send feedback Key purposes and algorithms Stay organized with collections Save and categorize content based on your preferences.

### "Create and manage a Single-tenant Cloud HSM instance \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- Source ID: `site-iam-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " \ --required-challenge-replies = " SIGNED REQUIRED CHALLENGE LIST " Replace the following: SIGNED QUORUM CHALLENGE LIST : a JSON-formatted array of challenges signed using private keys that are already registered, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " Replace SIGNED QUORUM CHALLENGE LIST with a JSON-formatted array of challenges, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " Replace SIGNED QUORUM CHALLENGE LIST with a JSON-formatted array of challenges, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.
- This step requires the Cloud KMS single-tenant HSM Quorum Member role. gcloud kms single-tenant-hsm proposal approve PROPOSAL ID \ --location LOCATION \ --single tenant hsm instance INSTANCE ID \ --quorum-challenge-replies = " SIGNED QUORUM CHALLENGE LIST " Replace SIGNED QUORUM CHALLENGE LIST with a JSON-formatted array of challenges, where each list item is a tuple that contains the path to the signed challenge and the path to the corresponding the public key—for example, [('signed-challenge-1.txt','rsapub1.pem'), ('signed-challenge-2.txt','rsapub2.pem')] to submit the first two signed challenges in one command.

### "Cloud KMS Inventory Service audit logging \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- Source ID: `site-iam-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- ListCryptoKeys Method : google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys Audit log type : Data access Permissions : cloudkms.cryptoKeys.list - ADMIN READ Method is a long-running or streaming operation : No.
- Permission type Methods OTHER google.cloud.kms.inventory.v1.KeyDashboardService.ListCryptoKeys : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com . google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources : To enable this log, enable ADMIN READ under the service cloudkms.googleapis.com .
- Filter for this method : protoPayload.methodName="google.cloud.kms.inventory.v1.KeyTrackingService.GetProtectedResourcesSummary" SearchProtectedResources Method : google.cloud.kms.inventory.v1.KeyTrackingService.SearchProtectedResources Audit log type : Data access Permissions : cloudkms.cryptoKeys.get - ADMIN READ cloudkms.protectedResources.search - ADMIN READ Method is a long-running or streaming operation : No.
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud KMS Inventory Service. google.cloud.kms.inventory.v1.KeyDashboardService The following audit logs are associated with methods belonging to google.cloud.kms.inventory.v1.KeyDashboardService .

