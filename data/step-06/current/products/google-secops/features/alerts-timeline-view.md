---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.703Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Alerts timeline view"
feature_slug: "alerts-timeline-view"
latest_feature_date: "2026-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide"
keywords:
  - "alerts"
  - "timeline"
  - "view"
  - "section"
  - "cases"
  - "overview"
  - "now"
  - "includes"
---

# Alerts timeline view

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The Alerts section in Cases Overview now includes a timeline view for visualizing alert patterns over time.

## Extended Definition

The Alerts section in Cases Overview now includes a timeline view for visualizing alert patterns over time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)

## Supporting Pages

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-reference-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cases overview Supported in: Google secops SOAR Google Security Operations ingests alerts from a wide range of sources.
- Alert Overview tab: Lists all alerts linked to the case, including associated events and metadata.
- Each case entry shows key metadata, such as: Case name and unique ID Case timestamp Number of associated alerts Assigned analyst (with avatar) Case priority and stage (optional, depending on view) Analysts can toggle between these views: Default view : Shows case cards with essential information.
- Analysts can also: Automatically group additional alerts into existing cases based on shared entities and configurable rules.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- The Event Viewer includes these tabs: Event Fields Raw Log Alerts Entities Event Fields tab Note: This feature is covered by Pre-GA Offerings Terms of the Google Security Operations Service Specific Terms.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- For example: Optimized results view Timelines chart Aggregations window Optimized results view To maximize the space available for viewing search results, Google SecOps provides an event-focused view.
- Timelines chart The Timelines chart provides a graphical representation of the number of events and alerts occurring each day that are being surfaced by the current search.

### "Dashboards overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Security Operations SIEM provides the following default dashboards: Main Cloud Detection and Response Context Aware Detections - Risk Health Hub Data Ingestion and Health IoC Matches Rule Detections User Sign In Overview Main dashboard The Main dashboard displays information about the status of the Google Security Operations SIEM data ingestion system.
- You can view the following visualizations in the Cloud Detection and Response Overview dashboard: CDIR Rulesets Enabled : displays the percentage of Google Security Operations SIEM rule sets enabled for your cloud environment from the total rule sets provided by GCTI for Google Security Operations SIEM users.
- Dashboards overview Supported in: Google secops SIEM Caution: For all Google Security Operations instances provisioned after August 06, 2025, you can no longer use Looker to create new dashboards in Google SecOps SIEM or Google SecOps.
- Use the Google Security Operations SIEM dashboards to view and analyze the data in Google Security Operations SIEM, including security telemetry, ingestion metrics, detections, alerts, and IoCs.

