---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.323Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Terraform support for discovery scan configurations"
feature_slug: "terraform-support-for-discovery-scan-configurations"
latest_feature_date: "2024-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/manage-scan-configurations"
  - "https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/common-discovery-configurations"
keywords:
  - "terraform"
  - "configurations"
  - "discovery"
  - "scan"
---

# Terraform support for discovery scan configurations

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

You can now use Terraform to create and manage discovery scan configurations.

## Extended Definition

You can now use Terraform to create and manage discovery scan configurations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/manage-scan-configurations](https://docs.cloud.google.com/sensitive-data-protection/docs/manage-scan-configurations)
- [https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery](https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/common-discovery-configurations](https://docs.cloud.google.com/sensitive-data-protection/docs/common-discovery-configurations)

## Supporting Pages

### "Manage discovery scan configurations \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/manage-scan-configurations](https://docs.cloud.google.com/sensitive-data-protection/docs/manage-scan-configurations)
- Source ID: `site-docs-reference-3`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a scan configuration For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center View a scan configuration Go to the discovery scan configurations list.
- Go to discovery scan configurations Make sure you're viewing the correct organization or project: To manage a discovery scan configuration that you created at the organization or folder level, view the organization.
- Go to discovery scan configurations Make sure you're viewing the correct organization or project: To manage a discovery scan configuration that you created at the organization or folder level, view the organization.
- Go to discovery scan configurations Make sure you're viewing the correct organization or project: To manage a discovery scan configuration that you created at the organization or folder level, view the organization.

### "Enable sensitive data discovery \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery](https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customize the scan configurations Each discovery type that you enable has a discovery scan configuration that you can customize .
- Set up permissions To get the permissions that you need to configure sensitive data discovery, ask your administrator to grant you the following IAM roles on the organization: Purpose Predefined role Relevant permissions Create a discovery scan configuration and view data profiles DLP Administrator ( roles/dlp.admin ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.inspectTemplates.create dlp.jobs.create dlp.jobs.list dlp.jobTriggers.create dlp.jobTriggers.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list Create a project to be used as the service agent container 1 Project Creator ( roles/resourcemanager.projectCreator ) resourcemanager.organizations.get resourcemanager.projects.create Grant discovery access 2 One of the following: Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security Admin ( roles/iam.securityAdmin ) resourcemanager.organizations.getIamPolicy resourcemanager.organizations.setIamPolicy 1 If you don't have the Project Creator ( roles/resourcemanager.projectCreator ) role, you can still create a scan configuration, but the service agent container that you use must be an existing project.
- Enable discovery with default settings in an organization To enable discovery, you create a discovery configuration for each data source that you want to scan.
- Subsequently, Sensitive Data Protection generates findings in Security Command Center within a few minutes after the discovery service scans your resources.

### "Common discovery enablement scenarios \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/common-discovery-configurations](https://docs.cloud.google.com/sensitive-data-protection/docs/common-discovery-configurations)
- Source ID: `site-api-reference-required-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- This page provides high-level instructions on how to set up your discovery scan configuration for common organization-level enablement scenarios.
- Project-level discovery configurations aren't included in your organization-level subscription and are billed separately.
- For information about how to create or edit a scan configuration, see Manage scan configurations .
- Home Documentation Security Sensitive Data Protection Guides Send feedback Common discovery enablement scenarios Stay organized with collections Save and categorize content based on your preferences.

