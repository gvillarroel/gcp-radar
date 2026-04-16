---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.677Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Data processing pipelines"
feature_slug: "data-processing-pipelines"
latest_feature_date: "2026-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/about/data-retention"
  - "https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform"
keywords:
  - "processing"
  - "pipelines"
  - "let"
  - "you"
  - "filter"
  - "transform"
  - "redact"
  - "secops"
---

# Data processing pipelines

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Data processing pipelines let you filter, transform, and redact Google SecOps data before ingestion.

## Extended Definition

Data processing pipelines let you filter, transform, and redact Google SecOps data before ingestion.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/about/data-retention](https://docs.cloud.google.com/chronicle/docs/about/data-retention)
- [https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform)

## Supporting Pages

### "Data retention in your Google SecOps account \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/about/data-retention](https://docs.cloud.google.com/chronicle/docs/about/data-retention)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View your data retention start date in Google SecOps The Data Retention page is a read-only section within the SIEM settings that shows the date when data retention began for your account.
- Data retention in your Google SecOps account Supported in: Google secops SIEM By default, Google retains 12 months of your data in your Google Security Operations account.
- To learn about where data in the Google SecOps account is stored, see SecOps service locations .
- The retention period applies to all of the data in your Google SecOps instance.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- You can also filter your searches by clicking filter alt Filter next to the search bar and sort searches by Show all , Google SecOps defined , Authored by Me , or Shared .
- If your Group by value includes a timestamp, you have the following additional Transform options: (Time) Resolution in milliseconds (Time) Resolution in seconds (Time) Resolution in minutes (Time) Resolution in hours (Time) Resolution in days Specify a Value for your Pivot from the list of Fields in your results.
- Perform the following actions: Filters : Apply the following filters to the Selected list: Show unenriched fields Show enriched fields Show additional fields Show extracted fields Add to Columns : Add the UDM field as a column.
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .

### "Understand the Google SecOps platform \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/secops/understand-the-secops-platform)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ingesting data using SecOps SIEM and third party SIEMS The Google SecOps platform offers the opportunity to not only ingest alerts using the inbuilt SIEM platform (which ingests raw logs using forwarders and data feeds) but also accepts alerts from third party SIEMS (via SOAR > Connectors and Webhooks).
- These platform-wide settings includes these pages to manage user access: IDP Group Mapping : Maps all external Identity Provider (IdP) groups to Google SecOps platform user groups.
- Understand the Google SecOps platform Supported in: Google secops Following the article Navigate the platform you will see that there are areas divided into SIEM and SOAR.
- Some parts of the Google SecOps platform are specific to either SIEM or SOAR only and therefore are labeled as such.

