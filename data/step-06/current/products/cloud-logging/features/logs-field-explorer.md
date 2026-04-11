---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.565Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs field explorer"
feature_slug: "logs-field-explorer"
latest_feature_date: "2020-05-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
keywords:
  - "logs"
  - "field"
  - "explorer"
  - "the"
  - "panel"
  - "shows"
  - "aggregation"
  - "based"
---

# Logs field explorer

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The Logs field explorer panel shows aggregation-based results for project log fields to help refine queries.

## Extended Definition

The Logs field explorer panel shows aggregation-based results for project log fields to help refine queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- Query results : For Compute Engine VM instance logs, the resource.labels field shows metadata with the corresponding resource name.
- Summary fields : For Compute Engine VM instance logs, the chip shows the resource name instead of the resource ID.
- The Logs Explorer offers default summary fields and custom summary fields.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- May 18, 2020 Feature Logs Viewer now contains the Logs field explorer panel, which lets you view aggregation-based results for your project's log fields and makes it more efficient to refine queries.
- July 30, 2020 Change The Logs field explorer panel is now generally available (GA).
- April 26, 2022 Feature You can now do the following in the improved Logs Explorer: Use the new plain-text search field and filter menus to construct queries without using the query language Customize your date and time format preferences for building queries and to display dates and times in the UI.
- April 17, 2025 Feature In the Logs Explorer, you can now view the most frequently occurring fields and values in the JSON payload of your logs.

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Restart the Ops Agent: To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " View Apache web server logs To view your logs in the Google Cloud console, use the Logs Explorer: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- In the following expression, paste the copied ID into the PROJECT ID field, and then copy the expression into the query editor: resource.type = "gce instance" logName =( "projects/ PROJECT ID /logs/apache access" OR "projects/ PROJECT ID /logs/apache error" ) When the previous query is run, only apache access and apache error log entries are shown.
- The email notification you receive looks similar to the following: To view the new log entries, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

