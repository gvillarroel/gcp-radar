---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.943Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry customer-managed encryption keys"
feature_slug: "artifact-registry-customer-managed-encryption-keys"
latest_feature_date: "2020-07-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/cmek"
  - "https://docs.cloud.google.com/artifact-registry/docs/release-notes"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
keywords:
  - "keys"
  - "encryption"
  - "managed"
  - "customer"
  - "supports"
  - "registry"
  - "artifact"
  - "now"
---

# Artifact Registry customer-managed encryption keys

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry now supports using Customer-Managed Encryption Keys (CMEK) to protect repository data.

## Extended Definition

Artifact Registry now supports using Customer-Managed Encryption Keys (CMEK) to protect repository data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)

## Supporting Pages

### "Enabling customer-managed encryption keys \_|\_ Artifact Registry \_|\_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Enabling customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Artifact Registry.
- Removing access There are several ways to remove access to a CMEK-encrypted repository: Revoke the Cloud KMS CryptoKey Encrypter/Decrypter role from the Artifact Registry service account using one of the following methods: Revoke access in the Google Cloud console Revoke access by using the gcloud CLI Temporarily disable the Customer-managed encryption key Permanently destroy the CMEK key We recommend that you revoke the permissions from the Artifact Registry service account before disabling or destroying a key.
- When you activate the Artifact Registry API in a Google Cloud project, Artifact Registry tries to automatically create a Pub/Sub topic with the topic ID gcr using Google-owned and Google-managed encryption keys.

### Artifact Registry release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/release-notes](https://docs.cloud.google.com/artifact-registry/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- July 23, 2021 v1beta2 Feature Artifact Registry now supports Cloud External Key Manager (Cloud EKM) when using customer-managed encryption keys .
- July 14, 2020 v1beta2 Feature You can now use Customer-Managed Encryption Keys (CMEK) to protect repository data in Artifact Registry.
- For more information, see Container scanning overview . v1 Feature Artifact Analysis now supports scanning for vulnerabilities in the following types of operating systems: AlmaLinux OS Chainguard Google Distroless Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi If the Container Scanning API is enabled, it scans container images pushed to Artifact Registry addressing these new operating systems, in addition to already supported operating system and language package vulnerabilities.
- October 21, 2024 v1 Feature Artifact Analysis now supports manual scans for vulnerabilities in the following types of packages: AlmaLinux OS Chainguard .NET Google Distroless NPM PHP Python Ruby Rust Red Hat Universal Base Image (UBI) Rocky Linux SUSE Linux Enterprise Server (SLES) Wolfi You can use the On-Demand Scanning API to manually scan container images locally on your computer or in your registry.

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Enforcement of organization policy, including encryption with customer-managed encryption keys (CMEK) and location constraints .
- Customer-managed encryption keys (CMEK) Use CMEK to encrypt the storage buckets that contain your images.
- Cached Docker Hub images mirror.gcr.io is a pull-through cache that stores the most frequently requested Docker Hub images across all users. mirror.gcr.io is now hosted on Artifact Registry. mirror.gcr.io is now hosted on Artifact Registry.
- Image streaming Unavailable Stream images in Artifact Registry to GKE or Managed Service for Apache Spark for faster autoscaling, faster pod startup, and reduced latency when pulling large images.

