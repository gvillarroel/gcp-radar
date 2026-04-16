---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.171Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Export filtered assets and findings to Cloud Storage"
feature_slug: "export-filtered-assets-and-findings-to-cloud-storage"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage"
keywords:
  - "export"
  - "filtered"
  - "assets"
  - "findings"
  - "storage"
  - "security"
  - "command"
  - "center"
---

# Export filtered assets and findings to Cloud Storage

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center can export filtered asset or finding data to a selected Cloud Storage bucket and project.

## Extended Definition

Security Command Center can export filtered asset or finding data to a selected Cloud Storage bucket and project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)

## Supporting Pages

### "Profile Azure Blob Storage data \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- Source ID: `site-docs-reference-3`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Publish to Security Command Center Findings from data profiles provide context when you triage and develop response plans for your vulnerability and threat findings in Security Command Center .
- Workflow The high-level workflow for profiling Azure Blob Storage data is as follows: In Security Command Center, create a connector for Microsoft Azure .
- Note: You can also configure Security Command Center to automatically prioritize resources for the attack path simulation feature according to the calculated sensitivity of the data that the resources contain.
- If you don't have a Google Security Operations instance enabled for your organization—through the standalone product or through Security Command Center Enterprise —turning on this option has no effect.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The following detectors, which are available in Preview with the Enterprise and Premium tiers of Security Command Center, allow users to manage threats to their Google Cloud Backup and Disaster Recovery assets in Security Command Center: BACKUP DELETE VAULT BACKUP DELETE VAULT BACKUP BACKUP DELETE BACKUP PLAN ASSOCIATION In addition, we updated the existing BACKUP REMOVE PLAN detector to support findings on Google Cloud Backup and Disaster Recovery assets that are managed in the Google Cloud console.
- Change The following Security Command Center Enterprise pages that you previously accessed through the Google Security Operations console are now under Security Command Center in the Google Cloud console: Risk Overview Issues Assets (previously called resources ) Findings The Security Command Center Enterprise left navigation also includes links to pages in the Google Security Operations console.
- The detector generates findings for vulnerable container images deployed to the following assets: Google Kubernetes Engine cluster Cloud Run revision Cloud Run job App Engine This feature is available in Preview to all Security Command Center tiers.
- February 06, 2023 Feature The version 1.0 release of the Google SCC ITSM app and the Google SCC SIR app, which let you send data, such as findings, sources, assets, and audit logs, from Security Command Center to ServiceNow, is generally available.

### "Profile Cloud Storage data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Publish to Security Command Center Findings from data profiles provide context when you triage and develop response plans for your vulnerability and threat findings in Security Command Center .
- Turning on Security Command Center at the organization level enables the flow of findings from integrated services like Sensitive Data Protection.
- If Security Command Center isn't activated at the organization level, Sensitive Data Protection findings won't appear in Security Command Center.
- Before you begin If you have an organization-level discovery subscription—including one through Security Command Center—be aware that this project-level discovery configuration isn't included in your subscription and is billed separately.

