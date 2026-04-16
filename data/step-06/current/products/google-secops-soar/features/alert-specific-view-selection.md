---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.804Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Alert-specific view selection"
feature_slug: "alert-specific-view-selection"
latest_feature_date: "2025-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
  - "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview"
  - "https://docs.cloud.google.com/chronicle/docs/detection/curated-detections"
keywords:
  - "alert"
  - "specific"
  - "view"
  - "selection"
  - "the"
  - "overview"
  - "page"
  - "lets"
---

# Alert-specific view selection

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

The Alert Overview page lets users choose a customized view for each alert.

## Extended Definition

The Alert Overview page lets users choose a customized view for each alert.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)

## Supporting Pages

### "Explore the alert overview tab \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- Source ID: `site-docs-root`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alert Overview widgets The Alert Overview tab displays important information about the alert using specific widgets.
- Quick Actions : This widget lets you quickly execute predefined actions directly from the Alert Overview tab.
- The display you see in the Alert Overview tab depends on a variety of factors: If no playbook is attached to the alert, the default display is defined by the administrator in SOAR Settings .
- Explore the alert overview tab Supported in: Google secops SOAR This document serves as a reference for the Alert Overview tab, the central interface for triaging alerts within a case.

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Case overview tab The Case Overview tab displays case-specific widgets configured by the administrator.
- Alert Overview tab: Lists all alerts linked to the case, including associated events and metadata.
- Each case entry shows key metadata, such as: Case name and unique ID Case timestamp Number of associated alerts Assigned analyst (with avatar) Case priority and stage (optional, depending on view) Analysts can toggle between these views: Default view : Shows case cards with essential information.
- Case creation and grouping The Cases page is where analysts can investigate incoming alerts and manage incident workflows.

### "Google SecOps overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/secops-overview](https://docs.cloud.google.com/chronicle/docs/secops/secops-overview)
- Source ID: `site-api-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google SecOps overview Supported in: Google secops Google Security Operations is a cloud service, built as a specialized layer on top of Google infrastructure, designed for enterprises to privately retain, analyze, and search the large amounts of security and network telemetry they generate.
- IP Address view : Investigate specific IP addresses within your enterprise and what impact they have on your assets.
- Domain view : Investigate specific domains within your enterprise and what impact they have on your assets.
- Case management presents only the data relevant to a specific alert type and user role.

### "Use the curated detections page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- Source ID: `site-docs-root-2`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin For information about predefined threat detection policies, see the following: Overview of Cloud Threats category Overview of Chrome Enterprise Threats category Overview of Windows Threats category Overview of Linux Threats category Overview of macOS Threats category Overview of Risk Analytics for UEBA category Overview of Applied Threat Intelligence category To verify that data required for each policy is in the correct format, see Verify log data ingestion using test rules .
- Mitre ATT&CK® techniques represent specific actions of malicious behavior Note: For more information about Mitre Tactics and Techniques, see the official MITRE ATT&CK page at https://attack.mitre.org/ .
- This view lets you examine any of the detections associated with the rule and pivot to other views such as Asset view from the Timeline.
- From this page, you can also enable or disable the rule and alerting for the rule.

