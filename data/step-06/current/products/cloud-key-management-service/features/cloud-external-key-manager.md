---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:26:39.846Z"
product_name: "Cloud Key Management Service"
product_slug: "cloud-key-management-service"
feature_name: "Cloud External Key Manager"
feature_slug: "cloud-external-key-manager"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kms/docs/ekm"
  - "https://docs.cloud.google.com/kms/docs/ekm-architectures"
  - "https://docs.cloud.google.com/kms/docs/release-notes"
keywords:
  - "external"
  - "key"
  - "manager"
  - "is"
  - "generally"
  - "available"
  - "lets"
  - "services"
---

# Cloud External Key Manager

Product: Cloud Key Management Service
Coverage: MEDIUM

## Step 02 Summary

Cloud External Key Manager is generally available; Cloud External Key Manager lets Google Cloud services use keys stored in supported external key management systems.

## Extended Definition

Cloud External Key Manager is generally available; Cloud External Key Manager lets Google Cloud services use keys stored in supported external key management systems.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/ekm-architectures](https://docs.cloud.google.com/kms/docs/ekm-architectures)
- [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)

## Supporting Pages

### "Cloud External Key Manager \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Terminology Overview How Cloud EKM works Manually managed external keys Coordinated external keys Compatibility Supported key managers Services that support CMEK with Cloud EKM Considerations Restrictions Symmetric encryption keys Asymmetric signing keys External key managers and regions Multi-region use Partner-managed EKM Monitor Cloud EKM usage Getting support What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- Compatibility Supported key managers You can store external keys in the following external key management partner systems: Supported today: Fortanix Futurex Thales Services that support CMEK with Cloud EKM The following services support integration with Cloud KMS for external (Cloud EKM) keys: Agent Assist AlloyDB for PostgreSQL Apigee API hub Application Integration Artifact Registry Backup and DR Service: Backup Vault Container and Backups at rest Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging: Data in the Log Router and Data in Logging storage Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud Workstations Compute Engine: Persistent disks , Snapshots , Custom images , and Machine images Customer Experience Insights Database Migration Service: MySQL migrations - data written to databases , PostgreSQL migrations - Data written to databases , PostgreSQL to AlloyDB migrations - Data written to databases , SQL Server migrations - Data written to databases , and Oracle to PostgreSQL data at rest Dataflow Dataform Dataplex Universal Catalog Dataproc: Dataproc clusters data on VM disks and Dataproc serverless data on VM disks Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced ( Preview ) Eventarc Standard Filestore Firestore Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine: Data on VM disks and Application-layer secrets Integration Connectors Looker (Google Cloud core) Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines: Data migrated from VMware, AWS, and Azure VM sources and Data migrated from disk and machine image sources Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Workbench instances Workflows Workload Manager Important: All other services are not compatible with Cloud External Key Manager for CMEK.
- On this page Terminology Overview How Cloud EKM works Manually managed external keys Coordinated external keys Compatibility Supported key managers Services that support CMEK with Cloud EKM Considerations Restrictions Symmetric encryption keys Asymmetric signing keys External key managers and regions Multi-region use Partner-managed EKM Monitor Cloud EKM usage Getting support What's next This page provides an overview of Cloud External Key Manager (Cloud EKM).
- Cloud External Key Manager Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.

### "Reference architectures for Cloud External Key Manager \_|\_ Cloud Key Management\

- URL: [https://docs.cloud.google.com/kms/docs/ekm-architectures](https://docs.cloud.google.com/kms/docs/ekm-architectures)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document describes architectures for Google Cloud customers who want to deploy a highly available external key manager (EKM) service with Cloud KMS and Cloud EKM.
- Cloud KMS Start free Overview Guides Reference Samples Resources More Technology areas More Overview Guides Reference Samples Resources Cross-product tools More Console Discover Product overview Protection levels Overview Cloud HSM overview Single-tenant Cloud HSM overview Cloud EKM overview Reference architectures for Cloud EKM CMEK overview Cloud KMS with Autokey Compatible services Cloud HSM for Google Workspace Locations Get started Cloud KMS resources Key purposes and algorithms Separation of duties Create and use encryption keys CMEK best practices Create and manage Single-tenant Cloud HSM instances Create keys Automate key creation Autokey overview Enable Autokey Create a resource with Autokey Create a key ring Create a key Import keys About key import Key wrapping Format a key for import Manually wrap a key for import Configure OpenSSL for manual key wrapping Wrap a key using OpenSSL Set up automatic key wrapping Import a key version Verify an imported key version Create external keys Set up Cloud EKM over the internet Create an EKM connection Create an external Key Control access Manage IAM roles Use Organization Policy Contraints Create custom organization policy constraints for Cloud KMS CMEK organization policies Control key destruction Secure data using keys Key APIs Use gRPC Access the API Sort and filter API list results Generate random bytes Use Cloud KMS keys in Google Cloud Encrypt and decrypt data Envelope encryption Additional authenticated data Asymmetric encryption Encrypt and decrypt data with a symmetric key Encrypt and decrypt data with a raw symmetric key Encrypt and decrypt data with an asymmetric key Verify end-to-end data integrity Encrypt application data Set up client-side encryption with Tink Onboard to Cloud HSM for Google Workspace Sign and validate data Digital signatures Create and validate signatures MAC signatures Create and validate MAC signatures Share secrets using key encapsulation mechanisms Key encapsulation mechanisms Encapsulate and decapsulate using KEMs Manage keys Resource consistency Key version states View keys and key details View keys by project View encryption metrics View key usage Get a Cloud KMS resource ID Retrieve a public key Attest a Cloud HSM key Label a key Create and manage tags Enable and disable a key version Destroy and restore a key version Delete Cloud KMS resources Rotate keys About key rotation Rotate a key Re-encrypt data Update external key reference Monitor Using Cloud Audit Logging Cloud KMS Inventory Service audit logging Monitor state changes Monitor and adjust quotas Use Cloud Monitoring Monitor EKM usage Troubleshoot Troubleshoot failed imports Troubleshoot EKM via VPC errors AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools On this page Overview Best practices for Cloud EKM architectures Configure low-latency, reliable network connectivity Enable high availability Detect and mitigate failures quickly Reference architectures for Cloud EKM Direct connection over Cloud VPN or Cloud Interconnect Load balanced from internet in Google Cloud Load balanced in a VPC network in Google Cloud Reference architecture comparison What's next Home Documentation Security Cloud KMS Guides Was this helpful?
- Reference architectures for Cloud External Key Manager Cloud Key Management Service Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools More / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
- On this page Overview Best practices for Cloud EKM architectures Configure low-latency, reliable network connectivity Enable high availability Detect and mitigate failures quickly Reference architectures for Cloud EKM Direct connection over Cloud VPN or Cloud Interconnect Load balanced from internet in Google Cloud Load balanced in a VPC network in Google Cloud Reference architecture comparison What's next When you enable Cloud Key Management Service (Cloud KMS) with Cloud External Key Manager (Cloud EKM) , you can use keys that you manage with an external key management partner to help protect data in Google Cloud.

### "Cloud KMS release notes \_|\_ Cloud Key Management Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/kms/docs/release-notes](https://docs.cloud.google.com/kms/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- April 15, 2020 Feature Cloud External Key Manager (Cloud EKM) is generally available.
- Thales CipherTrust Cloud Key Manager is the first external key management partner system that is compatible with EKM key management from Cloud KMS.
- March 18, 2020 Feature Importing keys into Cloud KMS software keys is generally available (GA).
- March 02, 2026 Feature Cloud KMS deletion of keys and key versions is generally available.

