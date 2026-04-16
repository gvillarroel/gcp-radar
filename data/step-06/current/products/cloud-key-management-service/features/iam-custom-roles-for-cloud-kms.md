---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:33.071Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "IAM custom roles for Cloud KMS"
feature_slug: "iam-custom-roles-for-cloud-kms"
latest_feature_date: "2018-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles"
  - "https://docs.cloud.google.com/kms/docs/cmek"
  - "https://docs.cloud.google.com/kms/docs/key-management-service"
  - "https://docs.cloud.google.com/kms/docs/cmek-best-practices"
keywords:
  - "iam"
  - "custom"
  - "roles"
  - "for"
  - "kms"
  - "supports"
  - "as"
  - "generally"
---

# IAM custom roles for Cloud KMS

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS supports IAM custom roles as a generally available feature.

## Extended Definition

Cloud KMS supports IAM custom roles as a generally available feature.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)
- [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek)
- [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)

## Supporting Pages

### "Permissions and roles \_|\_ Cloud Key Management Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . cloudasset. assets. listCloudkmsCryptoKeys cloudasset.assets.listResource cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources cloudkms.cryptoKeys.create cloudkms. cryptoKeys. getIamPolicy cloudkms. cryptoKeys. setIamPolicy cloudkms.keyRings.create cloudkms.keyRings.get Cloud KMS KACLS Service Agent ( roles/ cloudkmskacls.serviceAgent ) Grants Cloud KMS KACLS Service Agent access to KMS resource permissions to perform DEK encryption/decryption.
- Lowest-level resources where you can grant this role: CryptoKey cloudkms.autokeyConfigs. cloudkms.autokeyConfigs.get cloudkms.autokeyConfigs.update cloudkms. cryptoKeyVersions. create cloudkms. cryptoKeyVersions. delete cloudkms. cryptoKeyVersions. destroy cloudkms.cryptoKeyVersions.get cloudkms. cryptoKeyVersions. list cloudkms. cryptoKeyVersions. restore cloudkms. cryptoKeyVersions. update cloudkms. cryptoKeyVersions. useToDecryptViaDelegation cloudkms. cryptoKeyVersions. useToEncryptViaDelegation cloudkms.cryptoKeys. cloudkms.cryptoKeys.create cloudkms.cryptoKeys.delete cloudkms.cryptoKeys.get cloudkms. cryptoKeys. getIamPolicy cloudkms.cryptoKeys.list cloudkms. cryptoKeys. setIamPolicy cloudkms.cryptoKeys.update cloudkms.ekmConfigs. cloudkms.ekmConfigs.get cloudkms. ekmConfigs. getIamPolicy cloudkms. ekmConfigs. setIamPolicy cloudkms.ekmConfigs.update cloudkms.ekmConnections. cloudkms.ekmConnections.create cloudkms.ekmConnections.get cloudkms. ekmConnections. getIamPolicy cloudkms.ekmConnections.list cloudkms. ekmConnections. setIamPolicy cloudkms.ekmConnections.update cloudkms.ekmConnections.use cloudkms. ekmConnections. verifyConnectivity cloudkms.importJobs. cloudkms.importJobs.create cloudkms.importJobs.get cloudkms. importJobs. getIamPolicy cloudkms.importJobs.list cloudkms. importJobs. setIamPolicy cloudkms. importJobs. useToImport cloudkms.kajPolicyConfigs. cloudkms.kajPolicyConfigs.get cloudkms. kajPolicyConfigs. update cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.keyRings. cloudkms.keyRings.create cloudkms. keyRings. createTagBinding cloudkms. keyRings. deleteTagBinding cloudkms.keyRings.get cloudkms.keyRings.getIamPolicy cloudkms.keyRings.list cloudkms. keyRings. listEffectiveTags cloudkms. keyRings. listTagBindings cloudkms.keyRings.setIamPolicy cloudkms.locations.get cloudkms.locations.list cloudkms. locations. optOutKeyDeletionMsa cloudkms.operations.get cloudkms.projects. cloudkms. projects. showEffectiveAutokeyConfig cloudkms. projects. showEffectiveKajEnrollmentConfig cloudkms. projects. showEffectiveKajPolicyConfig cloudkms.retiredResources. cloudkms.retiredResources.get cloudkms.retiredResources.list cloudkms. singleTenantHsmInstanceProposals. delete cloudkms. singleTenantHsmInstanceProposals. get cloudkms. singleTenantHsmInstanceProposals. list cloudkms. singleTenantHsmInstances. cloudkms. singleTenantHsmInstances. create cloudkms. singleTenantHsmInstances. get cloudkms. singleTenantHsmInstances. list cloudkms. singleTenantHsmInstances. use resourcemanager.projects.get Cloud KMS CryptoKey Encrypter/Decrypter ( roles/ cloudkms.cryptoKeyEncrypterDecrypter ) Provides ability to use Cloud KMS resources for encrypt and decrypt operations only.
- Warning: Do not grant service agent roles to any principals except service agents . cloudasset.assets.listResource cloudasset. assets. searchAllIamPolicies cloudasset. assets. searchAllResources Cloud KMS Service Agent ( roles/ cloudkms.serviceAgent ) Gives Cloud KMS service account access to managed resources.
- IAM offers the following predefined roles for Cloud KMS: Role Permissions Cloud KMS Admin ( roles/ cloudkms.admin ) Provides access to Cloud KMS resources, except for access to restricted resource types and cryptographic operations.

### "Customer-managed encryption keys (CMEK) \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/cmek](https://docs.cloud.google.com/kms/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With Autokey, keyrings and keys are generated on demand as part of resource creation, and service agents that use the keys for encrypt and decrypt operations are automatically granted the necessary Identity and Access Management (IAM) roles.
- You grant the CryptoKey Encrypter/Decrypter IAM role ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) on the CMEK to the service account for the service.
- The following factors differentiate Google Cloud's default encryption at rest from customer-managed keys: Type of key Cloud KMS Autokey Cloud KMS customer-managed (manual) Google-owned and Google-managed encryption key (Google default encryption) Can view key metadata Yes Yes No Ownership of keys 1 Customer Customer Google Can manage 2 and control 3 keys Key creation and assignment is automated.
- CMEK-integrated services handle resource access The principal that creates or views resources in the CMEK-integrated service does not require the Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) for the CMEK used to protect the resource.

### Cloud Key Management Service overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customer-managed encryption keys - software (Cloud KMS keys) $0.06 per key version 40+ services You control automatic key rotation schedule; IAM roles and permissions; enable, disable, or destroy key versions.
- Agent Assist AlloyDB for PostgreSQL Anti Money Laundering AI Apigee Apigee API hub Application Integration Artifact Registry Backup and DR Service Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud TPU Cloud Workstations Colab Enterprise Compute Engine Conversational Analytics API Customer Experience Insights Database Migration Service Dataflow Dataform Dataplex Universal Catalog Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced Eventarc Standard Filestore Firestore Gemini Code Assist Gemini Enterprise - NotebookLM Enterprise Gemini Enterprise Enterprise Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine Integration Connectors Looker (Google Cloud core) Managed Service for Apache Spark Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Service Extensions Spanner Speech-to-Text Vertex AI Vertex AI Search Vertex AI Workbench Vertex AI Workbench instances Workflows Workload Manager Any Level 1 Level 2 Level 3 Clear all Encryption type Cost Compatible services Features Google-owned and Google-managed encryption keys (Google Cloud default encryption) Included All Google Cloud services that store customer data No configuration required.
- Use Multi-tenant Cloud HSM keys for client-side encryption in Google Workspace You control automatic key rotation schedule; IAM roles and permissions; enable, disable, or destroy key versions.
- Customer-managed encryption keys - external (Cloud EKM keys) $3.00 per key version per month 30+ services You control IAM roles and permissions; enable, disable, or destroy key versions.

### "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\

- URL: [https://docs.cloud.google.com/kms/docs/cmek-best-practices](https://docs.cloud.google.com/kms/docs/cmek-best-practices)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists which IAM roles are typically associated with which job function: IAM role Description NIST SP 800-152 designation roles/cloudkms.admin Provides access to Cloud KMS resources, except for access to restricted resource types and cryptographic operations.
- For example, to create objects in an encrypted Cloud Storage bucket, a user needs only the IAM role roles/storage.objectCreator , and the Cloud Storage service agent in the same project (like service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com ) needs the IAM role roles/cloudkms.cryptoKeyEncrypterDecrypter .
- These findings include issues such as publicly accessible Cloud KMS keys, Cloud KMS projects with the overly permissive owner role, or IAM roles that violate the separation of duties.
- For workloads that require high availability or disaster recovery capabilities across multiple locations, it's your responsibility to assess whether your workload is resilient in the event that Cloud KMS becomes unavailable in a certain region.

