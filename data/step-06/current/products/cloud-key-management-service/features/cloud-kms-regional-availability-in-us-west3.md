---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.849Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud KMS regional availability in us-west3"
feature_slug: "cloud-kms-regional-availability-in-us-west3"
latest_feature_date: "2020-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/wrapping-a-key"
  - "https://docs.cloud.google.com/kms/docs/monitoring"
  - "https://docs.cloud.google.com/kms/docs/release-notes"
keywords:
  - "kms"
  - "regional"
  - "availability"
  - "in"
  - "us"
  - "west3"
  - "resources"
  - "can"
---

# Cloud KMS regional availability in us-west3

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS resources can be created in the us-west3 region.

## Extended Definition

Cloud KMS resources can be created in the us-west3 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/wrapping-a-key](https://docs.cloud.google.com/kms/docs/wrapping-a-key)
- [https://docs.cloud.google.com/kms/docs/monitoring](https://docs.cloud.google.com/kms/docs/monitoring)
- [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)

## Supporting Pages

### "Wrapping a key using OpenSSL on Linux \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/wrapping-a-key](https://docs.cloud.google.com/kms/docs/wrapping-a-key)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure Open SSL for manual key wrapping Wrap a key using Open SSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Before you begin Retrieve the wrapping key Set up environment variables Wrap the key Wrap the key with RSA Wrap the key with RSA-AES What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]] Products and pricing See all products Google Cloud pricing Google Cloud Marketplace Contact sales Support Community forums Support Release Notes System status Resources GitHub Getting Started with Google Cloud Code samples Cloud Architecture Center Training and Certification Engage Blog Events X (Twitter) Google Cloud on YouTube Google Cloud Tech on YouTube About Google Privacy Site terms Google Cloud terms Manage cookies Our third decade of climate action: join us Sign up for the Google Cloud newsletter Subscribe English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 close Welcome to Cloud Shell Cloud Shell is a development environment that you can use in the browser: Activate Cloud Shell to explore Google Cloud with a terminal and an editor Start a free trial to get $300 in free credits Activate Cloud Shell Start a free trial
- To verify that the import job is active, run the gcloud kms import-jobs describe command: gcloud kms import-jobs describe IMPORT JOB \ --location LOCATION \ --keyring KEY RING \ --format="value(state)" state: ACTIVE Run the following command to save the public key from the import job to ${HOME}/wrapping-key.pem gcloud kms import-jobs describe \ --location= LOCATION \ --keyring= KEY RING \ --format="value(publicKey.pem)" \ IMPORT JOB > ${HOME}/wrapping-key.pem Note: You only need to download the public key once and can use it until the import job expires.
- Wrapping a key using OpenSSL on Linux Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.

### "Using Cloud Monitoring with Cloud KMS \_|\_ Cloud Key Management Service\

- URL: [https://docs.cloud.google.com/kms/docs/monitoring](https://docs.cloud.google.com/kms/docs/monitoring)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Before you begin Create a counter metric Create an alerting policy Monitoring administrative activities vs. data access Rate quota metrics What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]] Products and pricing See all products Google Cloud pricing Google Cloud Marketplace Contact sales Support Community forums Support Release Notes System status Resources GitHub Getting Started with Google Cloud Code samples Cloud Architecture Center Training and Certification Engage Blog Events X (Twitter) Google Cloud on YouTube Google Cloud Tech on YouTube About Google Privacy Site terms Google Cloud terms Manage cookies Our third decade of climate action: join us Sign up for the Google Cloud newsletter Subscribe English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 close Welcome to Cloud Shell Cloud Shell is a development environment that you can use in the browser: Activate Cloud Shell to explore Google Cloud with a terminal and an editor Start a free trial to get $300 in free credits Activate Cloud Shell Start a free trial
- Using Cloud Monitoring with Cloud KMS Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
- Create a counter metric Use the gcloud logging metrics create command to create a counter metric that will monitor any occurrence of the scheduled destruction of a key version. gcloud logging metrics create key version destruction \ --description "Key version scheduled for destruction" \ --log-filter "resource.type=cloudkms cryptokeyversion \ AND protoPayload.methodName=DestroyCryptoKeyVersion" You can list your counter metrics using the gcloud logging metrics list command: gcloud logging metrics list For more information about creating a counter metric, including via the Google Cloud console and the Monitoring API, see Creating a counter metric .

### "Cloud KMS release notes \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- April 12, 2018 Feature Cloud KMS resources can now be created in the following regions: asia-south1 australia-southeast1 europe-west2 europe-west3 northamerica-northeast1 southamerica-east1 us-east4 Learn more about Cloud Locations .
- February 08, 2018 Feature Cloud KMS resources can now be created in the asia , europe , and us multi-regional locations.
- February 25, 2020 Feature Cloud KMS resources can now be created in the us-west3 region.
- You can still use Cloud KMS Autokey for centralized key management in a folder, where all keys that protect resources in that folder are created in a dedicated key project.

