---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.851Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "gcloud kms import-jobs command group"
feature_slug: "gcloud-kms-import-jobs-command-group"
latest_feature_date: "2019-07-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/importing-a-key"
  - "https://docs.cloud.google.com/kms/docs/release-notes"
  - "https://docs.cloud.google.com/kms/docs/delete-kms-resources"
keywords:
  - "gcloud"
  - "kms"
  - "import"
  - "jobs"
  - "command"
  - "group"
  - "the"
  - "cli"
---

# gcloud kms import-jobs command group

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

The gcloud CLI includes a beta command group for managing Cloud KMS import jobs.

## Extended Definition

The gcloud CLI includes a beta command group for managing Cloud KMS import jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- [https://docs.cloud.google.com/kms/docs/delete-kms-resources](https://docs.cloud.google.com/kms/docs/delete-kms-resources)

## Supporting Pages

### "Import a key version into Cloud KMS \_|\_ Cloud Key Management Service \_\

- URL: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use a command like the following to create an import job. gcloud kms import-jobs create IMPORT JOB \ --location LOCATION \ --keyring KEY RING \ --import-method IMPORT METHOD \ --protection-level PROTECTION LEVEL Use the same key ring and location as the target key.
- To initialize the gcloud CLI, run the following command: gcloud init The user performing the import needs the following IAM permissions to create key rings, keys, and import jobs.
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Before you begin Preparing the project Preparing the local system Preparing the key Create the target key and key ring Create the import job Checking the state of the import job Preventing modification of import jobs Import the key Automatically wrapping and importing a key Importing a manually-wrapped key Check the state of the imported key version Re-import a previously destroyed key Restrictions Re-importing a destroyed key What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- Use the location and keyring where you created the import job. gcloud kms import-jobs describe IMPORT JOB \ --location LOCATION \ --keyring KEY RING \ --format="value(state)" The output is similar to the following: state: ACTIVE To run this code, first set up a Go development environment and install the Cloud KMS Go SDK . import ( "context" "fmt" "io" kms "cloud.google.com/go/kms/apiv1" "cloud.google.com/go/kms/apiv1/kmspb" ) // checkStateImportJob checks the state of an ImportJob in KMS. func checkStateImportJob ( w io .

### "Cloud KMS release notes \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- July 02, 2019 Feature The gcloud beta kms import-jobs command group was released as part of gcloud 253.0.0 .
- Promoted the following flags in gcloud kms keys command group to GA. --attestation-file . --default-algorithm . --purpose . --protection-level .
- June 11, 2019 Change The gcloud kms command group was updated as part of gcloud 250.0.0 .
- The ImportJob resource contains the following methods: ImportJobs.create ImportJobs.get ImportJobs.getIamPolicy ImportJobs.list ImportJobs.setIamPolicy ImportJobs.testIamPermissions The ImportJob resource contains the following enums: ImportJobState ImportMethod The ImportJob resource contains the following type: WrappingPublicKey New methods CryptoKeyVersions.import New fields CreateCryptoKeyRequest.skip initial version creation CryptoKeyVersions.import failure reason CryptoKeyVersions.import job CryptoKeyVersions.import time New enums CryptoKeyVersionState.PENDING IMPORT CryptoKeyVersionState.IMPORT FAILED New permissions cloudkms.cryptoKeyVersions.useToImport cloudkms.importJobs.create cloudkms.importJobs.get cloudkms.importJobs.getIamPolicy cloudkms.importJobs.list cloudkms.importJobs.setIamPolicy For more information about Cloud KMS permissions, see Permissions and roles .

### "Delete Cloud KMS resources \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/delete-kms-resources](https://docs.cloud.google.com/kms/docs/delete-kms-resources)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Before you begin Delete a key version Delete a key View names of retired resources What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- To view metadata for an individual retired resource, follow these steps: gcloud Go Java Python API More Run the following command: gcloud kms retired-resources describe RETIRED RESOURCE \ --location= LOCATION Replace the following: RETIRED RESOURCE : the name of the resource that you want to view.
- To view a list of all retired resources, follow these steps: gcloud Go Java Python API More Run the following command: gcloud kms retired-resources list \ --location= LOCATION Replace the following: LOCATION : the location where you want to view retired resources.
- To delete a key version, run the following command: gcloud kms keys versions delete KEY VERSION \ --location= LOCATION \ --keyring= KEY RING \ --key= KEY NAME Replace the following: KEY VERSION : the number of the key version that you want to permanently delete.

