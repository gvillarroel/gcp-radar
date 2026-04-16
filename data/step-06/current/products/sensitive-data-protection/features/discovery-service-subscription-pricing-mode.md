---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.360Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Discovery service subscription pricing mode"
feature_slug: "discovery-service-subscription-pricing-mode"
latest_feature_date: "2023-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql"
keywords:
  - "reserved"
  - "capacity"
  - "pricing"
  - "offers"
  - "subscription"
  - "mode"
  - "profiling"
  - "discovery"
---

# Discovery service subscription pricing mode

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

The discovery service offers a subscription pricing mode with reserved profiling capacity and no per-byte charge.

## Extended Definition

The discovery service offers a subscription pricing mode with reserved profiling capacity and no per-byte charge.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery](https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)

## Supporting Pages

### "Enable sensitive data discovery \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery](https://docs.cloud.google.com/security-command-center/docs/activate-sensitive-data-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Discovery capacity in Enterprise and Premium Premium and Enterprise service tiers (some features require organization-level activation ) If your sensitive data discovery needs exceed the capacity allocated for Security Command Center Enterprise or Premium (organization-level) customers, then Sensitive Data Protection might increase your capacity temporarily.
- Sensitive data discovery in Security Command Center Premium Premium service tier If you have an organization-level activation of Security Command Center Premium, then your Premium subscription includes an organization-level subscription to the Sensitive Data Protection discovery service.
- Sensitive data discovery in Security Command Center Enterprise Enterprise service tier (requires organization-level activation ) Security Command Center Enterprise includes an organization-level subscription to the Sensitive Data Protection discovery service.
- To use your organization-level subscription to run discovery on a single project, see Profile select projects or data assets in an organization or folder in the Sensitive Data Protection documentation.

### "Overview of sensitive data discovery \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-reference-3`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the delay lasts longer than 24 hours and you're in subscription pricing mode, confirm whether you have remaining capacity for the month .
- For information on how Sensitive Data Protection charges for profiling data, see Discovery pricing .
- It includes the following settings: Scope (organization, folder, or project) of the discovery operation Type of resource to profile Inspection templates to use Scan frequency Specific subsets of data that should be included in or excluded from discovery Actions that you want Sensitive Data Protection to take after discovery—for example, which Google Cloud services to publish the profiles to Service agent to use for discovery operations For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center Scan configuration scopes You can create a scan configuration at the following levels: Organization Folder Project Single data resource At the organization and folder levels, if two or more active scan configurations have the same project in their scope, Sensitive Data Protection determines which scan configuration can generate profiles for that project.
- Discovery performance The time it takes to profile your data varies depending on several factors, including, but not limited to, the following: Number of data resources being profiled Sizes of the data resources For tables, the number of columns For tables, the data types in the columns Therefore, Sensitive Data Protection's performance in a past inspection or profiling task isn't indicative of how it will perform in future profiling tasks.

### "Profile Cloud SQL data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If your discovery pricing mode is subscription mode , the rate at which Sensitive Data Protection profiles your data is affected by how much capacity you purchased.
- Before you begin If you have an organization-level discovery subscription—including one through Security Command Center—be aware that this project-level discovery configuration isn't included in your subscription and is billed separately.
- Review and create If you want to make sure that profiling doesn't start automatically after you create the scan configuration, select Create scan in paused mode .
- If you have under-provisioned capacity , then the profiling frequencies that you set in your schedules might not be followed.

