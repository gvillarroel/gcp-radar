---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.877Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center Asset API"
feature_slug: "security-command-center-asset-api"
latest_feature_date: "2023-06-28"
deprecation_date: "2024-06-20"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics"
  - "https://docs.cloud.google.com/security-command-center/docs/aoss-supported-packages-go-premium"
keywords:
  - "security"
  - "command"
  - "center"
  - "asset"
  - "related"
  - "functionality"
  - "deprecated"
  - "slated"
---

# Security Command Center Asset API

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Security Command Center Asset API and related asset functionality are deprecated and slated for removal; deprecated on 2024-06-20.

## Extended Definition

The Security Command Center Asset API and related asset functionality are deprecated and slated for removal; deprecated on 2024-06-20.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- [https://docs.cloud.google.com/security-command-center/docs/aoss-supported-packages-go-premium](https://docs.cloud.google.com/security-command-center/docs/aoss-supported-packages-go-premium)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The deprecation applies to the following Security Command Center interfaces: Security Command Center Asset API endpoints Except for gcloud scc assets update-marks , which is not deprecated, the assets subgroup of the gcloud scc CLI command The Assets page and related functionality in the Google Cloud Console June 22, 2023 Change Only the Security Center Service Agent ( roles/securitycenter.serviceAgent ) role is required by the Security Command Center service account.
- June 28, 2023 Deprecated As of June 20, 2023, Security Command Center Asset API endpoints and dependent functionality are deprecated and will be removed from the product for all users on or after June 20, 2024.
- For more information, see the following: Work with findings in the console Inspect resources related to findings June 25, 2024 Announcement Introducing the Security Command Center Risk Engine Security Command Center introduces Risk Engine as the name of the functionality that provides attack path simulations, attack exposure scores, attack path visualizations, and toxic combination findings.
- If you activated Security Command Center before June 20, 2023, and have used the asset functionality in the 90 days prior to June 20, 2023, the asset functionality remains available for you until June 20, 2024 or later.

### "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics](https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- The asset methods and fields of the Security Command Center API are deprecated and will be removed on or after June 26, 2024.
- The following Security Health Analytics detectors for Google Cloud are disabled by default: ALLOYDB AUTO BACKUP DISABLED ALLOYDB CMEK DISABLED BIGQUERY TABLE CMEK DISABLED BUCKET CMEK DISABLED CLOUD ASSET API DISABLED DATAPROC CMEK DISABLED DATASET CMEK DISABLED DISK CMEK DISABLED DISK CSEK DISABLED NODEPOOL BOOT CMEK DISABLED PUBSUB CMEK DISABLED SQL CMEK DISABLED SQL NO ROOT PASSWORD SQL WEAK ROOT PASSWORD VPC FLOW LOGS SETTINGS NOT RECOMMENDED Note: If you disable Security Health Analytics, Security Command Center also disables the individual Security Health Analytics modules and stores their previous enablement states.
- By using filters that are available on the Security Command Center Vulnerabilities and Findings pages in the Google Cloud console, you can focus on the highest severity vulnerabilities across your organization, and review vulnerabilities by asset type, project, and more.
- Until they are removed, users who activated Security Command Center before June 26, 2023 can use the asset methods of the Security Command Center API to list assets, but these methods support only the assets that Security Command Center supports .

### "List of supported Go packages for the Assured Open Source Software premium\

- URL: [https://docs.cloud.google.com/security-command-center/docs/aoss-supported-packages-go-premium](https://docs.cloud.google.com/security-command-center/docs/aoss-supported-packages-go-premium)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Guides Send feedback List of supported Go packages for the Assured Open Source Software premium tier Stay organized with collections Save and categorize content based on your preferences.

