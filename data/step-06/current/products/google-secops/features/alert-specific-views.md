---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.717Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Alert-specific views"
feature_slug: "alert-specific-views"
latest_feature_date: "2025-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide"
keywords:
  - "alert"
  - "specific"
  - "views"
  - "overview"
  - "page"
  - "can"
  - "display"
  - "customized"
---

# Alert-specific views

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The Alert Overview page can display a customized view for each alert based on the playbooks that ran on it.

## Extended Definition

The Alert Overview page can display a customized view for each alert based on the playbooks that ran on it.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)

## Supporting Pages

### "Explore the alert overview tab \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- Source ID: `site-docs-reference-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alert Overview widgets The Alert Overview tab displays important information about the alert using specific widgets.
- The display you see in the Alert Overview tab depends on a variety of factors: If no playbook is attached to the alert, the default display is defined by the administrator in SOAR Settings .
- Key value : View and display specific details from various sources; for example, Key-Product Value- [Alert.Product] Entities Graph : View a visual graph and other case entity details.
- If several playbooks are attached to an alert, and have customized views, you can select a different view from the Alert View menu.

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Case overview tab The Case Overview tab displays case-specific widgets configured by the administrator.
- Each case entry shows key metadata, such as: Case name and unique ID Case timestamp Number of associated alerts Assigned analyst (with avatar) Case priority and stage (optional, depending on view) Analysts can toggle between these views: Default view : Shows case cards with essential information.
- Icon Description Displays actions taken on alerts in a table, including the action name, timestamp, alert name, result, and status ( Completed or Faulted ).
- Case creation and grouping The Cases page is where analysts can investigate incoming alerts and manage incident workflows.

### "Dashboards overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The number of alerts displayed on the Alerts & IoCs page may differ, as this page shows only current alerts.
- Google Security Operations SIEM provides the following default dashboards: Main Cloud Detection and Response Context Aware Detections - Risk Health Hub Data Ingestion and Health IoC Matches Rule Detections User Sign In Overview Main dashboard The Main dashboard displays information about the status of the Google Security Operations SIEM data ingestion system.
- You can view the following visualizations in the Cloud Detection and Response Overview dashboard: CDIR Rulesets Enabled : displays the percentage of Google Security Operations SIEM rule sets enabled for your cloud environment from the total rule sets provided by GCTI for Google Security Operations SIEM users.
- Note: The IoC Matches dashboard shows IoC details at the time of the IoC matching (like confidence score and severity), whereas the IOC Matches tab of the Alerts & IoCs page shows the UNIX seconds value for the day bucket in which the IoC match occurred.

