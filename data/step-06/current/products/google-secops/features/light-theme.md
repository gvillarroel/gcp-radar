---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.795Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Light theme"
feature_slug: "light-theme"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform"
keywords:
  - "light"
  - "theme"
  - "secops"
  - "now"
  - "includes"
  - "option"
  - "platform"
---

# Light theme

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Google SecOps now includes a light theme option for the platform.

## Extended Definition

Google SecOps now includes a light theme option for the platform.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- If your Group by value includes a timestamp, you have the following additional Transform options: (Time) Resolution in milliseconds (Time) Resolution in seconds (Time) Resolution in minutes (Time) Resolution in hours (Time) Resolution in days Specify a Value for your Pivot from the list of Fields in your results.
- Search limits and quotas Google SecOps enforces limits on search queries to ensure platform stability and consistent performance across programmatic and web interface.
- This download includes an option to bundle the original raw logs, giving you precise correlation between parsed UDM records and their source telemetry.
- Access search You can access Google SecOps search using the following options: On the navigation bar, click Investigation > Search .

### "Understand the Google SecOps platform \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These platform-wide settings includes these pages to manage user access: IDP Group Mapping : Maps all external Identity Provider (IdP) groups to Google SecOps platform user groups.
- Ingesting data using SecOps SIEM and third party SIEMS The Google SecOps platform offers the opportunity to not only ingest alerts using the inbuilt SIEM platform (which ingests raw logs using forwarders and data feeds) but also accepts alerts from third party SIEMS (via SOAR > Connectors and Webhooks).
- Understand the Google SecOps platform Supported in: Google secops Following the article Navigate the platform you will see that there are areas divided into SIEM and SOAR.
- Some parts of the Google SecOps platform are specific to either SIEM or SOAR only and therefore are labeled as such.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- All submitted integrations undergo a vetting process by the official Google SecOps team, with a focus on the highlighted requirements within this document.
- This icon should adapt to the themes inside the platform.
- Icons should only inherit the theme from the platform.
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.

