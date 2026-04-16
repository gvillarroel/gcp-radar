---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.478Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Cloud KMS Autokey integration"
feature_slug: "artifact-registry-cloud-kms-autokey-integration"
latest_feature_date: "2025-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/cmek"
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
keywords:
  - "autokey"
  - "used"
  - "integration"
---

# Artifact Registry Cloud KMS Autokey integration

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry can now be used with Cloud KMS Autokey for customer-managed encryption key operations.

## Extended Definition

Artifact Registry can now be used with Cloud KMS Autokey for customer-managed encryption key operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)

## Supporting Pages

### "Enabling customer-managed encryption keys \_|\_ Artifact Registry \_|\_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to use Autokey to create protected repositories, ask your administrator to grant you the following IAM roles on the folder or project: Cloud KMS Autokey User ( roles/cloudkms.autokeyUser ) Artifact Registry Admin ( roles/artifactregistry.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To set up CMEK manually, see Creating a key and granting permissions To set up CMEK using Autokey, see Use Autokey to create keys on this page.
- CMEK with Cloud KMS Autokey You can either create CMEKs manually to protect your Artifact Registry resources or use Cloud KMS Autokey.
- With Autokey, key rings and keys are generated on demand to support resource creation in Artifact Registry.

### "Method: projects.locations.operations.get \_|\_ Artifact Registry \_|\_\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: N/A

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

