---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.025Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Findings export to BigQuery"
feature_slug: "findings-export-to-bigquery"
latest_feature_date: "2022-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "findings"
  - "export"
  - "bigquery"
  - "security"
  - "command"
  - "center"
  - "can"
  - "automatically"
---

# Findings export to BigQuery

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center can automatically export findings to a BigQuery dataset for analysis.

## Extended Definition

Security Command Center can automatically export findings to a BigQuery dataset for analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### "Bulk export findings to BigQuery \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query](https://docs.cloud.google.com/security-command-center/docs/bulk-exports-to-big-query)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up permissions To complete this guide, you must have the following Identity and Access Management (IAM) roles: On the organization where you want to export findings from, one of the following: Security Center BigQuery Exports Editor ( roles/securitycenter.bigQueryExportsEditor ) Security Center Admin ( roles/securitycenter.admin ) To learn more about Security Command Center roles, see Access control .
- Home Documentation Security Security Command Center Guides Send feedback Bulk export findings to BigQuery Stay organized with collections Save and categorize content based on your preferences.
- Standard-legacy, Standard, Premium, and Enterprise service tiers The document describes how to initiate on-demand bulk exports of Security Command Center findings to BigQuery.
- A snapshot of all the Security Command Center findings at the time the export runs are exported to the selected BigQuery dataset.

### "Profile Azure Blob Storage data \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-azure-blob-storage)
- Source ID: `site-docs-reference-3`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You can also configure Security Command Center to automatically prioritize resources for the attack path simulation feature according to the calculated sensitivity of the data that the resources contain.
- Publish to Security Command Center Findings from data profiles provide context when you triage and develop response plans for your vulnerability and threat findings in Security Command Center .
- If you don't have a Google Security Operations instance enabled for your organization—through the standalone product or through Security Command Center Enterprise —turning on this option has no effect.
- Workflow The high-level workflow for profiling Azure Blob Storage data is as follows: In Security Command Center, create a connector for Microsoft Azure .

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- After Notebook Security Scanner is enabled, it automatically scans Colab Enterprise notebooks (files with the ipynb filename extension) every 24 hours to detect vulnerabilities in Python packages and publishes these findings to the Security Command Center Findings page.
- Cloud Armor exports two findings to Security Command Center: Allowed Traffic Spike Increasing Deny Ratio Virtual Machine Threat Detection Premium and Enterprise service tiers Virtual Machine Threat Detection is a built-in service of Security Command Center.
- If you enable VM Manager with the Security Command Center Premium tier, VM Manager automatically writes high and critical findings from its vulnerability reports , which are in preview, to Security Command Center.
- If you enable Artifact Registry vulnerability assessment with Security Command Center, Artifact Registry vulnerability assessment automatically writes high and critical findings to Security Command Center.

