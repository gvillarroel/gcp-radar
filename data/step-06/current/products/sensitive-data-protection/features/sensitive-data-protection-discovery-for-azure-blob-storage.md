---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.284Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Sensitive Data Protection discovery for Azure Blob Storage"
feature_slug: "sensitive-data-protection-discovery-for-azure-blob-storage"
latest_feature_date: "2025-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc"
keywords:
  - "blob"
  - "azure"
  - "discovery"
  - "profile"
  - "storage"
---

# Sensitive Data Protection discovery for Azure Blob Storage

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Sensitive Data Protection discovery can profile Azure Blob Storage containers.

## Extended Definition

Sensitive Data Protection discovery can profile Azure Blob Storage containers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc](https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc)

## Supporting Pages

### "Profile Azure Blob Storage data \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- Source ID: `site-docs-reference-3`
- Final score: 321
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Sensitive Data Protection Guides Send feedback Profile Azure Blob Storage data Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to configure Sensitive Data Protection discovery for Azure Blob Storage.
- Create a discovery scan configuration for Azure Blob Storage.
- Select a discovery type Select Azure Blob Storage .

### "Overview of sensitive data discovery \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-reference-3`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It includes the following settings: Scope (organization, folder, or project) of the discovery operation Type of resource to profile Inspection templates to use Scan frequency Specific subsets of data that should be included in or excluded from discovery Actions that you want Sensitive Data Protection to take after discovery—for example, which Google Cloud services to publish the profiles to Service agent to use for discovery operations For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center Scan configuration scopes You can create a scan configuration at the following levels: Organization Folder Project Single data resource At the organization and folder levels, if two or more active scan configurations have the same project in their scope, Sensitive Data Protection determines which scan configuration can generate profiles for that project.
- For more information, see the following: Sensitive data discovery for Amazon S3 data Profile Azure Blob Storage data Cloud Run environment variables The discovery service can detect the presence of secrets in Cloud Run functions and Cloud Run service revision environment variables, and send any findings to Security Command Center.
- When you profile Azure Blob Storage data, data profiles are generated at the container level.
- Discovery for Vertex AI When you profile a Vertex AI resource, Sensitive Data Protection generates a file store data profile or a table data profile, depending on where your training data is stored: Cloud Storage or BigQuery.

### "Publish data profiles to Security Command Center \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc](https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc)
- Source ID: `site-docs-reference-3`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Azure Blob Storage : Creates a discovery configuration for profiling all Azure Blob Storage data that your Azure connector has access to.
- Supported assets : aiplatform. googleapis. com/ Dataset aiplatform. googleapis. com/ TuningJob bigquery. googleapis. com/ Dataset bigquery. googleapis. com/ Table sqladmin. googleapis. com/ Instance storage. googleapis. com/ Bucket Amazon S3 bucket Azure Blob Storage container Remediation : For Google Cloud data, use Sensitive Data Protection to run a deep inspection scan of the specified resource to identify all affected resources.
- Supported assets : aiplatform. googleapis. com/ Dataset aiplatform. googleapis. com/ TuningJob bigquery. googleapis. com/ Dataset bigquery. googleapis. com/ Table sqladmin. googleapis. com/ Instance storage. googleapis. com/ Bucket Amazon S3 bucket Azure Blob Storage container Remediation : For Google Cloud data, remove allUsers and allAuthenticatedUsers from the data asset's IAM policy.
- Supported assets : aiplatform. googleapis. com/ Dataset bigquery. googleapis. com/ Dataset bigquery. googleapis. com/ Table sqladmin. googleapis. com/ Instance storage. googleapis. com/ Bucket Amazon S3 bucket Azure Blob Storage container Remediation : For BigQuery data, use CMEK on the table or dataset .

