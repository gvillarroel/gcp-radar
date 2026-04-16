---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.240Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Tag-based Cloud Storage discovery schedules"
feature_slug: "tag-based-cloud-storage-discovery-schedules"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage"
keywords:
  - "schedules"
  - "target"
  - "specific"
  - "discovery"
  - "based"
  - "storage"
---

# Tag-based Cloud Storage discovery schedules

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage discovery schedules can target data based on specific tags.

## Extended Definition

Cloud Storage discovery schedules can target data based on specific tags.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)

## Supporting Pages

### "Profile Cloud Storage data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Sensitive Data Protection Guides Send feedback Profile Cloud Storage data in a single project Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to configure Cloud Storage data discovery at the project level.
- Select a discovery type Select Cloud Storage .
- Example conditions Suppose that you have the following configuration: Minimum conditions Minimum duration: 24 hours Bucket attribute conditions None selected Object attribute conditions Scan objects with the Standard storage class Scan objects with the Nearline storage class Time condition Timestamp: 05/4/22, 11:59 PM In this case, Sensitive Data Protection excludes any bucket that was created on or before May 4, 2022, 11:59 PM.

### "Profile Cloud Storage data in an organization or folder \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Sensitive Data Protection Guides Send feedback Profile Cloud Storage data in an organization or folder Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to configure Cloud Storage data discovery at the level of an organization or folder.
- Select a discovery type Select Cloud Storage .
- Example conditions Suppose that you have the following configuration: Minimum conditions Minimum duration: 24 hours Bucket attribute conditions None selected Object attribute conditions Scan objects with the Standard storage class Scan objects with the Nearline storage class Time condition Timestamp: 05/4/22, 11:59 PM In this case, Sensitive Data Protection excludes any bucket that was created on or before May 4, 2022, 11:59 PM.

### "Profile Azure Blob Storage data \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- Source ID: `site-docs-reference-3`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Sensitive Data Protection Guides Send feedback Profile Azure Blob Storage data Stay organized with collections Save and categorize content based on your preferences.
- Empty files and containers Discovery doesn't scan empty Blob Storage files and containers and doesn't take these into account when listing file extensions seen.
- Sensitive Data Protection discovery helps you learn about the types of data that you're storing in Blob Storage and the sensitivity levels of your data.
- This page describes how to configure Sensitive Data Protection discovery for Azure Blob Storage.

