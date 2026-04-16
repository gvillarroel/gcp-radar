---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.614Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Sensitive data discovery"
feature_slug: "sensitive-data-discovery"
latest_feature_date: "2025-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-vertex-ai"
keywords:
  - "sensitive"
  - "discovery"
  - "security"
  - "command"
  - "center"
  - "premium"
  - "includes"
  - "organization"
---

# Sensitive data discovery

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center Premium includes an organization-level Sensitive Data Protection discovery subscription at no charge.

## Extended Definition

Security Command Center Premium includes an organization-level Sensitive Data Protection discovery subscription at no charge.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery](https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-vertex-ai](https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-vertex-ai)

## Supporting Pages

### "Enable sensitive data discovery \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery](https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sensitive data discovery in Security Command Center Premium Premium service tier If you have an organization-level activation of Security Command Center Premium, then your Premium subscription includes an organization-level subscription to the Sensitive Data Protection discovery service.
- Discovery capacity in Enterprise and Premium Premium and Enterprise service tiers (some features require organization-level activation ) If your sensitive data discovery needs exceed the capacity allocated for Security Command Center Enterprise or Premium (organization-level) customers, then Sensitive Data Protection might increase your capacity temporarily.
- Sensitive data discovery in Security Command Center Enterprise Enterprise service tier (requires organization-level activation ) Security Command Center Enterprise includes an organization-level subscription to the Sensitive Data Protection discovery service.
- Use discovery insights to identify high-value resources Premium and Enterprise service tiers (requires organization-level activation ) Security Command Center can automatically designate a resource that contains high-sensitivity or medium-sensitivity data as a high-value resource.

### "Overview of sensitive data discovery \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-reference-3`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It includes the following settings: Scope (organization, folder, or project) of the discovery operation Type of resource to profile Inspection templates to use Scan frequency Specific subsets of data that should be included in or excluded from discovery Actions that you want Sensitive Data Protection to take after discovery—for example, which Google Cloud services to publish the profiles to Service agent to use for discovery operations For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center Scan configuration scopes You can create a scan configuration at the following levels: Organization Folder Project Single data resource At the organization and folder levels, if two or more active scan configurations have the same project in their scope, Sensitive Data Protection determines which scan configuration can generate profiles for that project.
- For more information, see the following: Sensitive data discovery for Amazon S3 data Profile Azure Blob Storage data Cloud Run environment variables The discovery service can detect the presence of secrets in Cloud Run functions and Cloud Run service revision environment variables, and send any findings to Security Command Center.
- Purpose Predefined role Relevant permissions Create a discovery scan configuration and view data profiles DLP Administrator ( roles/dlp.admin ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.inspectTemplates.create dlp.jobs.create dlp.jobs.list dlp.jobTriggers.create dlp.jobTriggers.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list Create a project to be used as the service agent container 1 Project Creator ( roles/resourcemanager.projectCreator ) resourcemanager.organizations.get resourcemanager.projects.create Grant discovery access 2 One of the following: Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security Admin ( roles/iam.securityAdmin ) resourcemanager.organizations.getIamPolicy resourcemanager.organizations.setIamPolicy View data profiles (read-only) DLP Data Profiles Reader ( roles/dlp.dataProfilesReader ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list DLP Reader ( roles/dlp.reader ) dlp.jobs.list dlp.jobTriggers.list 1 If you don't have the Project Creator ( roles/resourcemanager.projectCreator ) role, you can still create a scan configuration, but the service agent container that you use must be an existing project.
- How it works The sensitive data discovery process involves the following high-level steps: You enable sensitive data discovery by creating a discovery scan configuration (also called a data profile configuration ) that is scoped to an organization, folder, or project.

### "Sensitive data discovery for Vertex AI \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-vertex-ai](https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-vertex-ai)
- Source ID: `site-docs-reference-3`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can send discovery results to Security Command Center so that your AI-related workloads with potentially sensitive data are taken into account when you evaluate your organization's security posture.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Sensitive data discovery for Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- Benefits This feature offers the following benefits: You can monitor your Vertex AI datasets and tuning jobs—at the organization, folder, or project level—for sensitive data, and report on the results .
- If discovery detects sensitive training or tuning data, you can use the data profiles to identify which resources need to be further investigated.

