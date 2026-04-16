---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.192Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Vertex AI tuning jobs discovery and profiling"
feature_slug: "vertex-ai-tuning-jobs-discovery-and-profiling"
latest_feature_date: "2026-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-vertex-ai"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform"
keywords:
  - "discovers"
  - "tuning"
  - "vertex"
  - "profiles"
  - "profiling"
  - "discovery"
  - "jobs"
---

# Vertex AI tuning jobs discovery and profiling

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Discovers and profiles Vertex AI tuning jobs for sensitive data.

## Extended Definition

Discovers and profiles Vertex AI tuning jobs for sensitive data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-vertex-ai](https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-vertex-ai)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)

## Supporting Pages

### "Sensitive data discovery for Vertex AI \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-vertex-ai](https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-vertex-ai)
- Source ID: `site-docs-reference-3`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sensitive Data Protection discovery helps you learn about the data included in your Vertex AI training datasets and tuning jobs.
- Benefits This feature offers the following benefits: You can monitor your Vertex AI datasets and tuning jobs—at the organization, folder, or project level—for sensitive data, and report on the results .
- Discovery generates data profiles that provide insights like the information types ( infoTypes ) detected and the sensitivity level of the data that you use for training and tuning models.
- Supported data source This feature can profile the following types of data referenced in your Vertex AI datasets and tuning jobs: Training and tuning data in Cloud Storage buckets.

### "Overview of sensitive data discovery \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-reference-3`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It includes the following settings: Scope (organization, folder, or project) of the discovery operation Type of resource to profile Inspection templates to use Scan frequency Specific subsets of data that should be included in or excluded from discovery Actions that you want Sensitive Data Protection to take after discovery—for example, which Google Cloud services to publish the profiles to Service agent to use for discovery operations For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center Scan configuration scopes You can create a scan configuration at the following levels: Organization Folder Project Single data resource At the organization and folder levels, if two or more active scan configurations have the same project in their scope, Sensitive Data Protection determines which scan configuration can generate profiles for that project.
- Purpose Predefined role Relevant permissions Create a discovery scan configuration and view data profiles DLP Administrator ( roles/dlp.admin ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.inspectTemplates.create dlp.jobs.create dlp.jobs.list dlp.jobTriggers.create dlp.jobTriggers.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list Create a project to be used as the service agent container 1 Project Creator ( roles/resourcemanager.projectCreator ) resourcemanager.organizations.get resourcemanager.projects.create Grant discovery access 2 One of the following: Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security Admin ( roles/iam.securityAdmin ) resourcemanager.organizations.getIamPolicy resourcemanager.organizations.setIamPolicy View data profiles (read-only) DLP Data Profiles Reader ( roles/dlp.dataProfilesReader ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list DLP Reader ( roles/dlp.reader ) dlp.jobs.list dlp.jobTriggers.list 1 If you don't have the Project Creator ( roles/resourcemanager.projectCreator ) role, you can still create a scan configuration, but the service agent container that you use must be an existing project.
- Purpose Predefined role Relevant permissions Configure and view data profiles DLP Administrator ( roles/dlp.admin ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.inspectTemplates.create dlp.jobs.create dlp.jobs.list dlp.jobTriggers.create dlp.jobTriggers.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list View data profiles (read-only) DLP Data Profiles Reader ( roles/dlp.dataProfilesReader ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list DLP Reader ( roles/dlp.reader ) dlp.jobs.list dlp.jobTriggers.list Sensitive data discovery scan configuration A discovery scan configuration (sometimes called discovery configuration or scan configuration ) specifies how Sensitive Data Protection should profile your data.
- Discovery performance The time it takes to profile your data varies depending on several factors, including, but not limited to, the following: Number of data resources being profiled Sizes of the data resources For tables, the number of columns For tables, the data types in the columns Therefore, Sensitive Data Protection's performance in a past inspection or profiling task isn't indicative of how it will perform in future profiling tasks.

### "Vertex AI roles and permissions \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)
- Source ID: `site-iam-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) Visual Inspection AI Service Agent ( roles/ visualinspection.serviceAgent ) aiplatform. batchPredictionJobs. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Vertex AI Administrator ( roles/ aiplatform.admin ) Vertex AI Viewer ( roles/ aiplatform.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Security Center Admin ( roles/ securitycenter.admin ) Vertex AI Platform Express Admin ( roles/ aiplatform.expressAdmin ) Vertex AI User ( roles/ aiplatform.user ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) ML Engineer ( roles/ iam.mlEngineer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Security Center Admin Editor ( roles/ securitycenter.adminEditor ) Security Center Admin Viewer ( roles/ securitycenter.adminViewer ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) Visual Inspection AI Service Agent ( roles/ visualinspection.serviceAgent ) aiplatform.tuningJobs.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Vertex AI Administrator ( roles/ aiplatform.admin ) Vertex AI Viewer ( roles/ aiplatform.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Security Center Admin ( roles/ securitycenter.admin ) Vertex AI User ( roles/ aiplatform.user ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) ML Engineer ( roles/ iam.mlEngineer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Security Center Admin Editor ( roles/ securitycenter.adminEditor ) Security Center Admin Viewer ( roles/ securitycenter.adminViewer ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) Visual Inspection AI Service Agent ( roles/ visualinspection.serviceAgent ) aiplatform.tuningJobs.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Vertex AI Administrator ( roles/ aiplatform.admin ) Vertex AI Viewer ( roles/ aiplatform.viewer ) Security Center Admin ( roles/ securitycenter.admin ) Vertex AI User ( roles/ aiplatform.user ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) ML Engineer ( roles/ iam.mlEngineer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Security Center Admin Editor ( roles/ securitycenter.adminEditor ) Security Center Admin Viewer ( roles/ securitycenter.adminViewer ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Cloud Security Compliance Service Agent ( roles/ cloudsecuritycompliance.serviceAgent ) Visual Inspection AI Service Agent ( roles/ visualinspection.serviceAgent ) aiplatform. hyperparameterTuningJobs. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Vertex AI Administrator ( roles/ aiplatform.admin ) Vertex AI Viewer ( roles/ aiplatform.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Vertex AI User ( roles/ aiplatform.user ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) ML Engineer ( roles/ iam.mlEngineer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

