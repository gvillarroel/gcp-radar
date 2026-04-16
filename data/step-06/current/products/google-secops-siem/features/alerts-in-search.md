---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.664Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Alerts in Search"
feature_slug: "alerts-in-search"
latest_feature_date: "2023-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
  - "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview"
keywords:
  - "alerts"
  - "search"
  - "lets"
  - "users"
  - "view"
  - "investigate"
  - "match"
  - "udm"
---

# Alerts in Search

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Alerts in Search lets users view and investigate alerts that match UDM search criteria, inspect related events, and pivot to alert details.

## Extended Definition

Alerts in Search lets users view and investigate alerts that match UDM search criteria, inspect related events, and pivot to alert details.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- Saved searches and search history overview Clicking Search manager lets you retrieve saved searches and view your search history.
- View alerts in search To view alerts, click the Alerts tab, located next to the Events tab, at the top right of the Search page.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure common view options on the Alerts & IOCs page This section describes the common view options that you can configure on the Alerts and IOC Matches tabs of the Alerts & IOCs page.
- View alerts and IOC matches Supported in: Google secops SIEM The Alerts & IOCs page displays all the alerts and Indicators of Compromise (IOCs) that are impacting your enterprise.
- View associations Use the Associations tab to view associations for any actor or malware to help investigate breaches and prioritize alerts.
- The page contains the Alerts tab and the IOC Matches tab: Use the Alerts tab to view the current alerts in your enterprise.

### "Google SecOps overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search UDM Search : Lets you find Unified Data Model (UDM) events and alerts within your Google SecOps instance.
- User view : Investigate users within your enterprise who may have been impacted by security events.
- Hash view : Search for and investigate files based on their hash value.
- Google SecOps overview Supported in: Google secops Google Security Operations is a cloud service, built as a specialized layer on top of Google infrastructure, designed for enterprises to privately retain, analyze, and search the large amounts of security and network telemetry they generate.

