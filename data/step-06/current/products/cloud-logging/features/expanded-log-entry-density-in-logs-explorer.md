---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.379Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Expanded log entry density in Logs Explorer"
feature_slug: "expanded-log-entry-density-in-logs-explorer"
latest_feature_date: "2022-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
keywords:
  - "expanded"
  - "log"
  - "entry"
  - "density"
  - "logs"
  - "explorer"
  - "displays"
  - "more"
---

# Expanded log entry density in Logs Explorer

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer displays more log entries through UI style changes.

## Extended Definition

Logs Explorer displays more log entries through UI style changes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.
- Scroll or zoom to time In addition to the time controls previously listed, the timeline provides the Scroll to time and Zoom to time features to give you more in-depth control of the timeline and the data that you see in other panes in the Logs Explorer.
- Show logs that match the resource of a pinned log entry After you pin a log entry, you can run a new query that displays log entries that match the resource type or resource labels of the pinned log.
- Zoom to log entry : Narrow the time range that the Timeline pane displays and refine your query to isolate the logs near the pinned log.

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View your log entry: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Search logs in the Google Cloud console To view the log entries in your log bucket, go to the Google Cloud console and complete the following steps: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, when you to the Logs Explorer page and use the Refine scope selector to list log views, region information is also displayed.
- For information on using the Logs Explorer, refer to View logs by using the Logs Explorer .

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Ensure the following: To get the permissions that you need to configure an aggregated sink, ask your administrator to grant you the following IAM roles on your organization: To create log buckets and sinks in a project: Logs Configuration Writer ( roles/logging.configWriter ) - your project To create an aggregated sink: Logs Configuration Writer ( roles/logging.configWriter ) - your organization To grant roles to principals: Owner ( roles/owner ) - your project For more information about granting roles, see Manage access to projects, folders, and organizations .
- View log entries in the Logs Explorer page To view the log entries in your log bucket, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Follow the procedure in the section titled View logs in the Logs Explorer page to view your audit logs.
- For more information, see Collate and route organization-level logs to supported destinations .

