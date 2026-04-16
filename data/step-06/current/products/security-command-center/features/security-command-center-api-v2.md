---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.831Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center API v2"
feature_slug: "security-command-center-api-v2"
latest_feature_date: "2024-02-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/migrate-v2-api"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql"
keywords:
  - "security"
  - "command"
  - "center"
  - "v2"
  - "adds"
  - "residency"
  - "location"
  - "aware"
---

# Security Command Center API v2

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

API v2 adds data residency support and location-aware resource names for Security Command Center.

## Extended Definition

API v2 adds data residency support and location-aware resource names for Security Command Center.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/migrate-v2-api](https://docs.cloud.google.com/security-command-center/docs/migrate-v2-api)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql)

## Supporting Pages

### "Profile Cloud SQL data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin If you have an organization-level discovery subscription—including one through Security Command Center—be aware that this project-level discovery configuration isn't included in your subscription and is billed separately.
- Note: You can also configure Security Command Center to automatically prioritize resources for the attack path simulation feature according to the calculated sensitivity of the data that the resources contain.
- Publish to Security Command Center Findings from data profiles provide context when you triage and develop response plans for your vulnerability and threat findings in Security Command Center .
- Turning on Security Command Center at the organization level enables the flow of findings from integrated services like Sensitive Data Protection.

### Migrate to v2 of the Security Command Center API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/migrate-v2-api](https://docs.cloud.google.com/security-command-center/docs/migrate-v2-api)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the following: Terraform Security Command Center API resources Security Command Center Management API resources Client libraries Security Command Center API client libraries Security Command Center Management API client libraries Differences between the v1 and v2 APIs As you migrate to the v2 Security Command Center API, be aware of the following differences from the v1 API.
- If you create a new export configuration in the Google Cloud console, then it's always created with the v2 Security Command Center API. gcloud To manage export configurations that were created with the v1 Security Command Center API, don't specify a location when you run gcloud CLI commands such as gcloud scc notifications describe : Don't use the --location flag.
- Data residency The v2 Security Command Center API supports data residency , which gives you more control over where your Security Command Center data is located.
- Similarly, to create or manage export configurations with the v2 Security Command Center API, specify a location when you run the gcloud CLI command.

### "Profile Cloud SQL data in an organization or folder \_|\_ Sensitive Data\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You can also configure Security Command Center to automatically prioritize resources for the attack path simulation feature according to the calculated sensitivity of the data that the resources contain.
- If you don't have a Google Security Operations instance enabled for your organization—through the standalone product or through Security Command Center Enterprise —turning on this option has no effect.
- Publish to Security Command Center Findings from data profiles provide context when you triage and develop response plans for your vulnerability and threat findings in Security Command Center .
- Turning on Security Command Center at the organization level enables the flow of findings from integrated services like Sensitive Data Protection.

