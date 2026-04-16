---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.538Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Cloud Storage FileSet regular expression filters"
feature_slug: "cloud-storage-fileset-regular-expression-filters"
latest_feature_date: "2018-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage"
keywords:
  - "including"
  - "excluding"
  - "fileset"
  - "filters"
  - "expression"
  - "regular"
  - "storage"
  - "adds"
---

# Cloud Storage FileSet regular expression filters

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Adds regular expression filters for including or excluding files from a Cloud Storage FileSet scan.

## Extended Definition

Adds regular expression filters for including or excluding files from a Cloud Storage FileSet scan.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)

## Supporting Pages

### "Profile Azure Blob Storage data \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- Source ID: `site-docs-reference-3`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each Blob Storage container, a file store data profile includes the following information: The types of files that you're storing in the container, categorized into file clusters The sensitivity level of the data in the container A summary about each detected file cluster, including the types of sensitive information found For a full list of insights and metadata in each file store data profile, see File store data profiles .
- To configure a filter, specify at least one of the following: A subscription ID or a regular expression that specifies one or more subscription IDs A container name or a regular expression that specifies one or more containers Regular expressions must follow RE2 syntax .
- To match a filter, a container must meet all the regular expressions specified within that filter.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Profile Azure Blob Storage data Stay organized with collections Save and categorize content based on your preferences.

### "Profile Cloud Storage data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To add filters, follow these steps: To add a regular expression filter, specify at least one of the following: A project ID or a regular expression that specifies one or more projects A bucket name or a regular expression that specifies one or more buckets Regular expressions must follow RE2 syntax .
- To be included in the schedule, a bucket must meet the following requirements: If you add regular expression filters, the bucket must match at least one of the regular expressions that you specify.
- To be included in this schedule's scope, a bucket must match at least one of the regular expression filters and all of the tag filters.
- In the Filters section, add regular expressions and tags to select the buckets that you want to include in the schedule.

### "Profile Cloud Storage data in an organization or folder \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To add filters, follow these steps: To add a regular expression filter, specify at least one of the following: A project ID or a regular expression that specifies one or more projects A bucket name or a regular expression that specifies one or more buckets Regular expressions must follow RE2 syntax .
- To be included in the schedule, a bucket must meet the following requirements: If you add regular expression filters, the bucket must match at least one of the regular expressions that you specify.
- To be included in this schedule's scope, a bucket must match at least one of the regular expression filters and all of the tag filters.
- In the Filters section, add regular expressions and tags to select the buckets that you want to include in the schedule.

