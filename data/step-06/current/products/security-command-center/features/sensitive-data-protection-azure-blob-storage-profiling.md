---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.715Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Sensitive Data Protection Azure Blob Storage profiling"
feature_slug: "sensitive-data-protection-azure-blob-storage-profiling"
latest_feature_date: "2025-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc"
keywords:
  - "sensitive"
  - "protection"
  - "azure"
  - "blob"
  - "storage"
  - "profiling"
  - "discovery"
  - "can"
---

# Sensitive Data Protection Azure Blob Storage profiling

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Sensitive Data Protection discovery service can profile Azure Blob Storage data and identify vulnerabilities and misconfigurations that may expose sensitive data.

## Extended Definition

The Sensitive Data Protection discovery service can profile Azure Blob Storage data and identify vulnerabilities and misconfigurations that may expose sensitive data.

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
- Final score: 331
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to configure Sensitive Data Protection discovery for Azure Blob Storage.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Profile Azure Blob Storage data Stay organized with collections Save and categorize content based on your preferences.
- Sensitive Data Protection discovery helps you learn about the types of data that you're storing in Blob Storage and the sensitivity levels of your data.
- Workflow The high-level workflow for profiling Azure Blob Storage data is as follows: In Security Command Center, create a connector for Microsoft Azure .

### "Overview of sensitive data discovery \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-reference-3`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It includes the following settings: Scope (organization, folder, or project) of the discovery operation Type of resource to profile Inspection templates to use Scan frequency Specific subsets of data that should be included in or excluded from discovery Actions that you want Sensitive Data Protection to take after discovery—for example, which Google Cloud services to publish the profiles to Service agent to use for discovery operations For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center Scan configuration scopes You can create a scan configuration at the following levels: Organization Folder Project Single data resource At the organization and folder levels, if two or more active scan configurations have the same project in their scope, Sensitive Data Protection determines which scan configuration can generate profiles for that project.
- For more information, see the following: Sensitive data discovery for Amazon S3 data Profile Azure Blob Storage data Cloud Run environment variables The discovery service can detect the presence of secrets in Cloud Run functions and Cloud Run service revision environment variables, and send any findings to Security Command Center.
- Discovery performance The time it takes to profile your data varies depending on several factors, including, but not limited to, the following: Number of data resources being profiled Sizes of the data resources For tables, the number of columns For tables, the data types in the columns Therefore, Sensitive Data Protection's performance in a past inspection or profiling task isn't indicative of how it will perform in future profiling tasks.
- Data profiling access at the organization or folder level When you configure sensitive data discovery at the organization or folder level, Sensitive Data Protection attempts to automatically grant data profiling access to your service agent.

### "Publish data profiles to Security Command Center \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc](https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc)
- Source ID: `site-docs-reference-3`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported assets : aiplatform. googleapis. com/ Dataset aiplatform. googleapis. com/ TuningJob bigquery. googleapis. com/ Dataset bigquery. googleapis. com/ Table sqladmin. googleapis. com/ Instance storage. googleapis. com/ Bucket Amazon S3 bucket Azure Blob Storage container Remediation : For Google Cloud data, use Sensitive Data Protection to run a deep inspection scan of the specified resource to identify all affected resources.
- Azure Blob Storage : Creates a discovery configuration for profiling all Azure Blob Storage data that your Azure connector has access to.
- Note: Sensitive Data Protection might produce a data access audit log entry when analyzing ( profiling ) a tuning job within a Cloud Storage bucket.
- You must first create an Azure connector that has the Azure permissions needed for Sensitive Data Protection discovery.

