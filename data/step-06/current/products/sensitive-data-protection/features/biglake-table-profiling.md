---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.389Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "BigLake table profiling"
feature_slug: "biglake-table-profiling"
latest_feature_date: "2022-08-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql"
keywords:
  - "biglake"
  - "create"
  - "profiles"
  - "profiling"
  - "tables"
  - "table"
---

# BigLake table profiling

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Cloud DLP can create data profiles for BigLake tables.

## Extended Definition

Cloud DLP can create data profiles for BigLake tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc](https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)

## Supporting Pages

### "Overview of sensitive data discovery \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-reference-3`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sensitive Data Protection profiles tables that are supported by the BigQuery Storage Read API , including the following: Standard BigQuery tables Table snapshots BigLake tables stored in Cloud Storage The following aren't supported: BigQuery Omni tables.
- It includes the following settings: Scope (organization, folder, or project) of the discovery operation Type of resource to profile Inspection templates to use Scan frequency Specific subsets of data that should be included in or excluded from discovery Actions that you want Sensitive Data Protection to take after discovery—for example, which Google Cloud services to publish the profiles to Service agent to use for discovery operations For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center Scan configuration scopes You can create a scan configuration at the following levels: Organization Folder Project Single data resource At the organization and folder levels, if two or more active scan configurations have the same project in their scope, Sensitive Data Protection determines which scan configuration can generate profiles for that project.
- Purpose Predefined role Relevant permissions Create a discovery scan configuration and view data profiles DLP Administrator ( roles/dlp.admin ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.inspectTemplates.create dlp.jobs.create dlp.jobs.list dlp.jobTriggers.create dlp.jobTriggers.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list Create a project to be used as the service agent container 1 Project Creator ( roles/resourcemanager.projectCreator ) resourcemanager.organizations.get resourcemanager.projects.create Grant discovery access 2 One of the following: Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security Admin ( roles/iam.securityAdmin ) resourcemanager.organizations.getIamPolicy resourcemanager.organizations.setIamPolicy View data profiles (read-only) DLP Data Profiles Reader ( roles/dlp.dataProfilesReader ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list DLP Reader ( roles/dlp.reader ) dlp.jobs.list dlp.jobTriggers.list 1 If you don't have the Project Creator ( roles/resourcemanager.projectCreator ) role, you can still create a scan configuration, but the service agent container that you use must be an existing project.
- Purpose Predefined role Relevant permissions Configure and view data profiles DLP Administrator ( roles/dlp.admin ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.inspectTemplates.create dlp.jobs.create dlp.jobs.list dlp.jobTriggers.create dlp.jobTriggers.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list View data profiles (read-only) DLP Data Profiles Reader ( roles/dlp.dataProfilesReader ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list DLP Reader ( roles/dlp.reader ) dlp.jobs.list dlp.jobTriggers.list Sensitive data discovery scan configuration A discovery scan configuration (sometimes called discovery configuration or scan configuration ) specifies how Sensitive Data Protection should profile your data.

### "Publish data profiles to Security Command Center \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc](https://docs.cloud.google.com/sensitive-data-protection/docs/send-profiles-to-scc)
- Source ID: `site-docs-reference-3`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enabling a discovery type does the following: BigQuery : Creates a discovery configuration for profiling BigQuery tables across the organization.
- Cloud SQL : Creates a discovery configuration for profiling Cloud SQL tables across the organization.
- Generated Security Command Center findings When you configure the discovery service to publish data profiles to Security Command Center, each table data profile or file store data profile generates the following Security Command Center findings.
- Azure Blob Storage : Creates a discovery configuration for profiling all Azure Blob Storage data that your Azure connector has access to.

### "Profile Cloud SQL data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Send to Knowledge Catalog as aspects This action lets you add Knowledge Catalog aspects to profiled tables based on insights from data profiles.
- This schedule covers the tables in your selected scope that don't match any of the schedules that you created.
- SELECT findings table . quote , findings table . infotype . name , findings table . location . container name , findings table . location . data profile finding record location . field . name AS field name , profiles table . table profile . dataset project id AS project id , profiles table . table profile . dataset id AS dataset id , profiles table . table profile . table id AS table id , profiles table . table profile . sensitivity score AS table sensitivity score FROM FINDINGS TABLE PROJECT ID .
- PROFILES TABLE ID latest v1 AS profiles table ON findings table . data profile resource name = profiles table . table profile . name To save sample findings to a BigQuery table, follow these steps: Turn on Save sample discovery findings to BigQuery .

