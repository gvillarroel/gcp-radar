---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.500Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry customer-managed encryption keys"
feature_slug: "artifact-registry-customer-managed-encryption-keys"
latest_feature_date: "2020-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/cmek"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
keywords:
  - "keys"
  - "encryption"
  - "managed"
  - "customer"
  - "supports"
---

# Artifact Registry customer-managed encryption keys

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry now supports using Customer-Managed Encryption Keys (CMEK) to protect repository data.

## Extended Definition

Artifact Registry now supports using Customer-Managed Encryption Keys (CMEK) to protect repository data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)

## Supporting Pages

### "Enabling customer-managed encryption keys \_|\_ Artifact Registry \_|\_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Enabling customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Artifact Registry.
- This page describes how to encrypt content stored in repositories with customer-managed encryption keys (CMEK).
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Enforcement of organization policy, including encryption with customer-managed encryption keys (CMEK) and location constraints .
- Customer-managed encryption keys (CMEK) Use CMEK to encrypt the storage buckets that contain your images.
- Image streaming Unavailable Stream images in Artifact Registry to GKE or Managed Service for Apache Spark for faster autoscaling, faster pod startup, and reduced latency when pulling large images.
- As a fully-managed service with support for both container images and non-container artifacts, Artifact Registry extends the capabilities of Container Registry.

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can create repositories encrypted with customer-managed encryption keys (CMEK).
- Data encryption By default, Google Cloud automatically encrypts data when it is at rest using Google-owned and Google-managed encryption keys.
- You can only use image streaming in GKE and Managed Service for Apache Spark if your container images are stored in Artifact Registry repositories in the same region as your workloads or a multi-region that corresponds to the region with your workloads.
- To create and apply cleanup policies to your repository, see Configure cleanup policies . gcr.io domain support Artifact Registry supports hosting of images on the gcr.io domain.

