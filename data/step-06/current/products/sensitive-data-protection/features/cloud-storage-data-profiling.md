---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.329Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Cloud Storage data profiling"
feature_slug: "cloud-storage-data-profiling"
latest_feature_date: "2024-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage"
keywords:
  - "buckets"
  - "profiling"
  - "discovery"
  - "profile"
  - "storage"
---

# Cloud Storage data profiling

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Sensitive Data Protection discovery can profile Cloud Storage buckets at the organization, folder, or project level.

## Extended Definition

Sensitive Data Protection discovery can profile Cloud Storage buckets at the organization, folder, or project level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)

## Supporting Pages

### "Profile Cloud Storage data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify whether the discovery service should profile the buckets that you selected or exclude them from profiling.
- Within those buckets, Sensitive Data Protection profiles only the objects that are in the Standard and Nearline storage classes.
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . file store profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- Home Documentation Security Sensitive Data Protection Guides Send feedback Profile Cloud Storage data in a single project Stay organized with collections Save and categorize content based on your preferences.

### "Profile Cloud Storage data in an organization or folder \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify whether the discovery service should profile the buckets that you selected or exclude them from profiling.
- Within those buckets, Sensitive Data Protection profiles only the objects that are in the Standard and Nearline storage classes.
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . file store profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- Home Documentation Security Sensitive Data Protection Guides Send feedback Profile Cloud Storage data in an organization or folder Stay organized with collections Save and categorize content based on your preferences.

### "Profile Azure Blob Storage data \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- Source ID: `site-docs-reference-3`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each Blob Storage container, a file store data profile includes the following information: The types of files that you're storing in the container, categorized into file clusters The sensitivity level of the data in the container A summary about each detected file cluster, including the types of sensitive information found For a full list of insights and metadata in each file store data profile, see File store data profiles .
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . file store profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- Example query: Show sample findings related to file store data profiles This example requires both Save data profile copies to BigQuery and Save sample discovery findings to BigQuery to be enabled.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Profile Azure Blob Storage data Stay organized with collections Save and categorize content based on your preferences.

