---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.904Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Cloud KMS Autokey integration"
feature_slug: "artifact-registry-cloud-kms-autokey-integration"
latest_feature_date: "2025-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/analysis"
  - "https://docs.cloud.google.com/artifact-registry/docs/cmek"
keywords:
  - "autokey"
  - "kms"
  - "integration"
  - "be"
  - "can"
  - "registry"
  - "artifact"
  - "now"
---

# Artifact Registry Cloud KMS Autokey integration

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry can now be used with Cloud KMS Autokey for customer-managed encryption key operations.

## Extended Definition

Artifact Registry can now be used with Cloud KMS Autokey for customer-managed encryption key operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)

## Supporting Pages

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.
- For more information, see the Types of scanning in the Container Analysis documentation October 11, 2022 v1 Feature When users enable the Container Scanning API and push container images to Artifact Registry, automatic container scanning now generates metadata including a software bill of materials (SBOM) dependency list.
- To get started with manual scanning, see On-Demand Scanning quickstart November 16, 2020 v1beta2 Announcement Artifact Registry is now generally available .
- November 19, 2024 v1 Feature Artifact Registry now provides the option to enable or disable vulnerability scanning on individual repositories.

### "Artifact analysis and vulnerability scanning \_|\_ Artifact Registry \_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Security Command Center aggregates vulnerability findings from Artifact Registry scans, allowing you to view container image vulnerabilities within your running workloads, across all projects alongside your other security risks in Security Command Center.
- Registry scanning This section outlines Artifact Analysis vulnerability scanning features based in Artifact Registry, and lists related Google Cloud products where you can enable complementary capabilities to support your security posture.
- Home Documentation Application development Artifact Registry Guides Send feedback Artifact analysis and vulnerability scanning Stay organized with collections Save and categorize content based on your preferences.
- Its detection points are built into a number of Google Cloud products such as Artifact Registry and Google Kubernetes Engine (GKE) for quick enablement.

### "Enabling customer-managed encryption keys \_|\_ Artifact Registry \_|\_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CMEK with Cloud KMS Autokey You can either create CMEKs manually to protect your Artifact Registry resources or use Cloud KMS Autokey.
- Removing access There are several ways to remove access to a CMEK-encrypted repository: Revoke the Cloud KMS CryptoKey Encrypter/Decrypter role from the Artifact Registry service account using one of the following methods: Revoke access in the Google Cloud console Revoke access by using the gcloud CLI Temporarily disable the Customer-managed encryption key Permanently destroy the CMEK key We recommend that you revoke the permissions from the Artifact Registry service account before disabling or destroying a key.
- You should see roles on the Role/Member column. gcloud Run the following command to grant access to the Artifact Registry service account: gcloud kms keys add-iam-policy-binding [ --project = PROJECT ] \ KEY --location LOCATION --keyring = KEYRING \ --member serviceAccount:service- PROJECT-NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter Where PROJECT is the ID of the project that contains the key.
- Required roles To get the permissions that you need to use Autokey to create protected repositories, ask your administrator to grant you the following IAM roles on the folder or project: Cloud KMS Autokey User ( roles/cloudkms.autokeyUser ) Artifact Registry Admin ( roles/artifactregistry.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

