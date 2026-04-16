---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.360Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Explorer expanded time-range selector"
feature_slug: "logs-explorer-expanded-time-range-selector"
latest_feature_date: "2023-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
keywords:
  - "logs"
  - "explorer"
  - "expanded"
  - "time"
  - "range"
  - "selector"
  - "supports"
  - "preset"
---

# Logs Explorer expanded time-range selector

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Logs Explorer time-range selector supports preset, custom, and relative time range options.

## Extended Definition

The Logs Explorer time-range selector supports preset, custom, and relative time range options.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- The copied URL has the corresponding absolute time range represented by the time range of your query; for example, 7:49:37 PM - 8:49:37 PM . settings Preferences : Adjust the view of the Logs Explorer page, and customize the format of your query results.
- The following occurs when you click manage search Analyze results : The time range in the Logs Explorer might be automatically adjusted so that there is meaningful log data in the Observability Analytics page.
- View logs by time range To specify a time range for the log entries that you want to view, use the time-range selector .
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Use the time-range selector The options in the time-range selector let you select from preset time options, specify a custom start and end time, or center the time range around a specific timestamp.
- View logs by time range There are two ways to display logs that were written in a specific time range: Use the time-range selector.
- If the query-editor field contains an expression with a timestamp, then the time-range selector is disabled, and the query uses the timestamp expression as its time-range restriction.
- If a query doesn't use a timestamp expression, then the query uses the time-range selector as its time-range restriction.

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Restart the Ops Agent: To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " View Apache web server logs To view your logs in the Google Cloud console, use the Logs Explorer: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- The email notification you receive looks similar to the following: To view the new log entries, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- To view your Apache web server logs, create and run a query: Expand the list of Google Cloud projects from the Google Cloud project selector, and then copy the Google Cloud project ID into your clipboard.
- In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

