---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.007Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Bare Metal Rack HSM"
feature_slug: "bare-metal-rack-hsm"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm"
  - "https://docs.cloud.google.com/kms/docs/hsm"
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles"
keywords:
  - "bare"
  - "metal"
  - "rack"
  - "hsm"
  - "is"
  - "an"
  - "infrastructure"
  - "as"
---

# Bare Metal Rack HSM

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Bare Metal Rack HSM is an infrastructure-as-a-service offering for deploying large numbers of customer-owned HSMs near Google Cloud workloads.

## Extended Definition

Bare Metal Rack HSM is an infrastructure-as-a-service offering for deploying large numbers of customer-owned HSMs near Google Cloud workloads.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)

## Supporting Pages

### "Create and manage a Single-tenant Cloud HSM instance \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm](https://docs.cloud.google.com/kms/docs/create-manage-single-tenant-hsm)
- Source ID: `site-iam-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to create, manage, and use Single-tenant Cloud HSM instances, ask your administrator to grant you the following IAM roles on the project or a parent resource: Create proposals: Cloud KMS single-tenant HSM Proposer ( cloudkms.hsmSingleTenantProposer ) Approve proposals: Cloud KMS single-tenant HSM Quorum Member ( cloudkms.hsmSingleTenantQuorumMember ) Execute proposals: Cloud KMS single-tenant HSM Executor ( cloudkms.hsmSingleTenantExecutor ) Create keys: Cloud KMS single-tenant HSM Key Creator ( roles/cloudkms.hsmSingleTenantKeyCreator ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This step requires the Cloud KMS single-tenant HSM Executor role, and must be completed within 24 hours after the proposal was created. gcloud kms single-tenant-hsm proposal execute PROPOSAL ID \ --single tenant hsm instance INSTANCE ID --location LOCATION After the operation is complete, the instance remains in the ACTIVE state and the disableDate is set to 730 days from the time of the refresh.
- This step requires the Cloud KMS single-tenant HSM Executor role, and must be completed within 24 hours after the proposal was created. gcloud kms single-tenant-hsm proposal execute PROPOSAL ID \ --single tenant hsm instance INSTANCE ID --location LOCATION After the operation is complete, the instance returns to the ACTIVE state and the disableDate is set to 730 days from the time of the refresh.
- This step requires the Cloud KMS single-tenant HSM Executor role, and must be completed within 24 hours after the proposal was created. gcloud kms single-tenant-hsm proposal execute PROPOSAL ID \ --single tenant hsm instance INSTANCE ID --location LOCATION After the operation is complete, the removed quorum member can no longer participate in challenges to approve proposals.

### Cloud HSM \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bare Metal Rack HSM Google Cloud offers additional HSM options, such as single-tenancy.
- Bare Metal Rack HSM is available for customers to host their own HSMs in Google-provided space.
- CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key ); System . out . printf ( "Created hsm key %s%n" , createdKey . getName ()); } } } Node.js To run this code, first set up a Node.js development environment and install the Cloud KMS Node.js SDK . // // TODO(developer): Uncomment these variables before running the sample. // // const projectId = 'my-project'; // const locationId = 'us-east1'; // const keyRingId = 'my-key-ring'; // const id = 'my-hsm-encryption-key'; // Imports the Cloud KMS library const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' ); // Instantiates a client const client = new KeyManagementServiceClient (); // Build the parent key ring name const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId ); async function createKeyHsm () { const [ key ] = await client . createCryptoKey ({ parent : keyRingName , cryptoKeyId : id , cryptoKey : { purpose : 'ENCRYPT DECRYPT' , versionTemplate : { algorithm : 'GOOGLE SYMMETRIC ENCRYPTION' , protectionLevel : 'HSM' , }, // Optional: customize how long key versions should be kept before // destroying. destroyScheduledDuration : { seconds : 60 60 24 }, }, }); console . log ( Created hsm key: ${ key . name } ); return key ; } return createKeyHsm (); PHP To run this code, first learn about using PHP on Google Cloud and install the Cloud KMS PHP SDK . use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient; use Google\Cloud\Kms\V1\CreateCryptoKeyRequest; use Google\Cloud\Kms\V1\CryptoKey; use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose; use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm; use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate; use Google\Cloud\Kms\V1\ProtectionLevel; use Google\Protobuf\Duration; function create key hsm( string $projectId = 'my-project', string $locationId = 'us-east1', string $keyRingId = 'my-key-ring', string $id = 'my-hsm-key' ): CryptoKey { // Create the Cloud KMS client. $client = new KeyManagementServiceClient(); // Build the parent key ring name. $keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId); // Build the key. $key = (new CryptoKey()) ->setPurpose(CryptoKeyPurpose::ENCRYPT DECRYPT) ->setVersionTemplate((new CryptoKeyVersionTemplate()) ->setAlgorithm(CryptoKeyVersionAlgorithm::GOOGLE SYMMETRIC ENCRYPTION) ->setProtectionLevel(ProtectionLevel::HSM) ) // Optional: customize how long key versions should be kept before destroying. ->setDestroyScheduledDuration((new Duration()) ->setSeconds(24 60 60) ); // Call the API. $createCryptoKeyRequest = (new CreateCryptoKeyRequest()) ->setParent($keyRingName) ->setCryptoKeyId($id) ->setCryptoKey($key); $createdKey = $client->createCryptoKey($createCryptoKeyRequest); printf('Created hsm key: %s' .
- String projectId = "your-project-id" ; String locationId = "us-east1" ; String keyRingId = "my-key-ring" ; String id = "my-hsm-key" ; createKeyHsm ( projectId , locationId , keyRingId , id ); } // Create a new key that is stored in an HSM. public void createKeyHsm ( String projectId , String locationId , String keyRingId , String id ) throws IOException { // Initialize client that will be used to send requests.

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more, choose a Cloud EKM partner that supports single-tenant HSMs and review the requirements for Bare Metal Rack HSMs .
- Cloud EKM can be used with Bare Metal Rack HSM to create a standalone HSM solution integrated with Cloud KMS.
- Logging is based on operations, and applies to keys with both HSM and software protection levels.
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.

### "Permissions and roles \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)
- Source ID: `site-api-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- This role must be combined with another role that grants the ability to create cryptoKeys. cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list cloudkms. singleTenantHsmInstances. use Cloud KMS single-tenant HSM Proposer ( roles/ cloudkms.hsmSingleTenantProposer ) Grants ability to create SingleTenantHsmInstances and SingleTenantHsmInstanceProposals. cloudkms.operations.get cloudkms. singleTenantHsmInstanceProposals. create cloudkms. singleTenantHsmInstanceProposals. delete cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. create cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list Cloud KMS single-tenant HSM Quorum Member ( roles/ cloudkms.hsmSingleTenantQuorumMember ) Grants ability to approve SingleTenantHsmInstanceProposal resources. cloudkms.operations.get cloudkms. singleTenantHsmInstanceProposals. approve cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list Cloud KMS Importer ( roles/ cloudkms.importer ) Enables ImportCryptoKeyVersion, CreateImportJob, ListImportJobs, and GetImportJob operations cloudkms.importJobs.create cloudkms.importJobs.get cloudkms.importJobs.list cloudkms. importJobs. useToImport cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Key Access Justifications Enrollment Viewer ( roles/ cloudkms.keyAccessJustificationsEnrollmentConfigViewer ) Grant ability to view Key Access Justification enrollment configs of a project. cloudkms. projects. showEffectiveKajEnrollmentConfig Key Access Justifications Policy Config Admin ( roles/ cloudkms.keyAccessJustificationsPolicyConfigAdmin ) Grant ability to manage Key Access Justifications Policy at parent resource level. cloudkms.kajPolicyConfigs. cloudkms.kajPolicyConfigs.get cloudkms. kajPolicyConfigs. update cloudkms. projects. showEffectiveKajPolicyConfig Cloud KMS Protected Resources Viewer ( roles/ cloudkms.protectedResourcesViewer ) Enables viewing protected resources. cloudkms. protectedResources. search Cloud KMS CryptoKey Public Key Viewer ( roles/ cloudkms.publicKeyViewer ) Enables GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Signer ( roles/ cloudkms.signer ) Enables Sign operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToSign cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Signer/Verifier ( roles/ cloudkms.signerVerifier ) Enables Sign, Verify, and GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToSign cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Verifier ( roles/ cloudkms.verifier ) Enables Verify and GetPublicKey operations Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Service agent roles Service agent roles should only be granted to service agents .
- Lowest-level resources where you can grant this role: CryptoKey cloudkms.autokeyConfigs. cloudkms.autokeyConfigs.get cloudkms.autokeyConfigs.update cloudkms. cryptoKeyVersions. create cloudkms. cryptoKeyVersions. delete cloudkms. cryptoKeyVersions. destroy cloudkms.cryptoKeyVersions.get cloudkms. cryptoKeyVersions. list cloudkms. cryptoKeyVersions. restore cloudkms. cryptoKeyVersions. update cloudkms. cryptoKeyVersions. useToDecryptViaDelegation cloudkms. cryptoKeyVersions. useToEncryptViaDelegation cloudkms.cryptoKeys. cloudkms.cryptoKeys.create cloudkms.cryptoKeys.delete cloudkms.cryptoKeys.get cloudkms. cryptoKeys. getIamPolicy cloudkms.cryptoKeys.list cloudkms. cryptoKeys. setIamPolicy cloudkms.cryptoKeys.update cloudkms.ekmConfigs. cloudkms.ekmConfigs.get cloudkms. ekmConfigs. getIamPolicy cloudkms. ekmConfigs. setIamPolicy cloudkms.ekmConfigs.update cloudkms.ekmConnections. cloudkms.ekmConnections.create cloudkms.ekmConnections.get cloudkms. ekmConnections. getIamPolicy cloudkms.ekmConnections.list cloudkms. ekmConnections. setIamPolicy cloudkms.ekmConnections.update cloudkms.ekmConnections.use cloudkms. ekmConnections. verifyConnectivity cloudkms.importJobs. cloudkms.importJobs.create cloudkms.importJobs.get cloudkms. importJobs. getIamPolicy cloudkms.importJobs.list cloudkms. importJobs. setIamPolicy cloudkms. importJobs. useToImport cloudkms.kajPolicyConfigs. cloudkms.kajPolicyConfigs.get cloudkms. kajPolicyConfigs. update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.keyRings. cloudkms.keyRings.create cloudkms. keyRings. createTagBinding cloudkms. keyRings. deleteTagBinding cloudkms.keyRings.get cloudkms.keyRings.getIamPolicy cloudkms.keyRings.list cloudkms. keyRings. listEffectiveTags cloudkms. keyRings. listTagBindings cloudkms.keyRings.setIamPolicy cloudkms.locations.get cloudkms.locations.list cloudkms. locations. optOutKeyDeletionMsa cloudkms.operations.get cloudkms.projects. cloudkms. projects. showEffectiveAutokeyConfig cloudkms. projects. showEffectiveKajEnrollmentConfig cloudkms. projects. showEffectiveKajPolicyConfig cloudkms.retiredResources. cloudkms.retiredResources.get cloudkms.retiredResources.list cloudkms. singleTenantHsmInstanceProposals. delete cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. cloudkms. singleTenantHsmInstances. create cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list cloudkms. singleTenantHsmInstances. use resourcemanager.projects.get Cloud KMS CryptoKey Encrypter/Decrypter ( roles/ cloudkms.cryptoKeyEncrypterDecrypter ) Provides ability to use Cloud KMS resources for encrypt and decrypt operations only.
- Lowest-level resources where you can grant this role: CryptoKey cloudkms. cryptoKeyVersions. useToDecapsulate cloudkms. cryptoKeyVersions. useToDecrypt cloudkms. cryptoKeyVersions. useToEncrypt cloudkms. cryptoKeyVersions. useToSign cloudkms. cryptoKeyVersions. useToVerify cloudkms. cryptoKeyVersions. viewPublicKey cloudkms. locations. generateRandomBytes cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS CryptoKey Decapsulator Beta ( roles/ cloudkms.decapsulator ) Enables Decapsulate and GetPublicKey operations cloudkms. cryptoKeyVersions. useToDecapsulate cloudkms. cryptoKeyVersions. viewPublicKey cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get Cloud KMS EkmConnections Admin ( roles/ cloudkms.ekmConnectionsAdmin ) Enables management of EkmConnections. cloudkms.ekmConfigs.get cloudkms.ekmConfigs.update cloudkms.ekmConnections.create cloudkms.ekmConnections.get cloudkms.ekmConnections.list cloudkms.ekmConnections.update cloudkms. ekmConnections. verifyConnectivity resourcemanager.projects.get resourcemanager.projects.list Cloud KMS Expert PQ Asymmetric Signing Key Manager ( roles/ cloudkms.expertPqcSigner ) Enables PQ asymmetric signing key management. cloudkms. cryptoKeyVersions. managePqcSign cloudkms.locations.get cloudkms.locations.list resourcemanager.projects.get resourcemanager.projects.list Cloud KMS Expert Raw AES-CBC Key Manager ( roles/ cloudkms.expertRawAesCbc ) Enables raw AES-CBC keys management.
- Lowest-level resources where you can grant this role: CryptoKey cloudkms.autokeyConfigs.get cloudkms.cryptoKeyVersions.get cloudkms. cryptoKeyVersions. list cloudkms.cryptoKeys.get cloudkms.cryptoKeys.list cloudkms.ekmConfigs.get cloudkms.ekmConnections.get cloudkms.ekmConnections.list cloudkms.importJobs.get cloudkms.importJobs.list cloudkms.kajPolicyConfigs.get cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.keyRings.get cloudkms.keyRings.list cloudkms.locations.get cloudkms.locations.list cloudkms.operations.get cloudkms.retiredResources. cloudkms.retiredResources.get cloudkms.retiredResources.list cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list resourcemanager.projects.get Cloud KMS Autokey Admin ( roles/ cloudkms.autokeyAdmin ) Enables management of AutokeyConfig. cloudkms.autokeyConfigs. cloudkms.autokeyConfigs.get cloudkms.autokeyConfigs.update cloudkms. projects. showEffectiveAutokeyConfig Cloud KMS Autokey User ( roles/ cloudkms.autokeyUser ) Grants ability to use KeyHandle resources. cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig Cloud KMS CryptoKey Decrypter ( roles/ cloudkms.cryptoKeyDecrypter ) Provides ability to use Cloud KMS resources for decrypt operations only.

