---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.313Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Sensitive Data Protection discovery for Amazon S3"
feature_slug: "sensitive-data-protection-discovery-for-amazon-s3"
latest_feature_date: "2024-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-amazon-s3"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
keywords:
  - "amazon"
  - "supports"
  - "profiling"
  - "discovery"
---

# Sensitive Data Protection discovery for Amazon S3

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Sensitive Data Protection discovery now supports Amazon S3 data profiling.

## Extended Definition

Sensitive Data Protection discovery now supports Amazon S3 data profiling.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-amazon-s3](https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-amazon-s3)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)

## Supporting Pages

### "Profile Amazon S3 data \_|\_ Sensitive Data Protection \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-amazon-s3)
- Source ID: `site-docs-reference-3`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to configure Sensitive Data Protection discovery for Amazon S3.
- Select a discovery type Select Amazon S3 .
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . file store profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .
- What's next If you don't have the Organization Administrator ( roles/resourcemanager.organizationAdmin ) or Security Admin ( roles/iam.securityAdmin ) role, someone with one of those roles must grant data profiling access to your service agent.

### "Sensitive data discovery for Amazon S3 \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-amazon-s3](https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-amazon-s3)
- Source ID: `site-docs-reference-3`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Example: Requests and data retrievals Estimated number of requests per bucket Estimated number of requests for 10 buckets Amazon rate Subtotal LIST 50 500 $0.005 per 1,000 calls 0.005 GET 28,000 280,000 $0.0004 per 1,000 calls 0.112 Total 0.117 Example: Data transfer out from Amazon S3 to the internet Data sampled per bucket Amazon rate Price per bucket Up to of 30 GB $0.09 per GB Up to $2.70 Data residency considerations Consider the following when you plan to profile data from other cloud providers: The data profiles are stored alongside the discovery scan configuration.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Sensitive data discovery for Amazon S3 Stay organized with collections Save and categorize content based on your preferences.
- Workflow The high-level workflow for profiling Amazon S3 data is as follows: In Security Command Center, create a connector for Amazon Web Services (AWS) .
- You can estimate the Amazon costs that are directly related to the discovery operation as follows.

### "Overview of sensitive data discovery \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-reference-3`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- It includes the following settings: Scope (organization, folder, or project) of the discovery operation Type of resource to profile Inspection templates to use Scan frequency Specific subsets of data that should be included in or excluded from discovery Actions that you want Sensitive Data Protection to take after discovery—for example, which Google Cloud services to publish the profiles to Service agent to use for discovery operations For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center Scan configuration scopes You can create a scan configuration at the following levels: Organization Folder Project Single data resource At the organization and folder levels, if two or more active scan configurations have the same project in their scope, Sensitive Data Protection determines which scan configuration can generate profiles for that project.
- Discovery performance The time it takes to profile your data varies depending on several factors, including, but not limited to, the following: Number of data resources being profiled Sizes of the data resources For tables, the number of columns For tables, the data types in the columns Therefore, Sensitive Data Protection's performance in a past inspection or profiling task isn't indicative of how it will perform in future profiling tasks.
- For more information, see the following: Sensitive data discovery for Amazon S3 data Profile Azure Blob Storage data Cloud Run environment variables The discovery service can detect the presence of secrets in Cloud Run functions and Cloud Run service revision environment variables, and send any findings to Security Command Center.
- Default reprofiling frequency The default reprofiling frequency differs depending on the discovery type of your scan configuration: BigQuery profiling: for each table, wait 30 days and then reprofile the table if it has changes in the schema, table rows, or inspection template.

