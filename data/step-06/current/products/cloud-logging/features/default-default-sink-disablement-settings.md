---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.551Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Default _Default Sink Disablement Settings"
feature_slug: "default-default-sink-disablement-settings"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "default"
  - "sink"
  - "disablement"
  - "settings"
  - "organizations"
  - "can"
  - "disable"
  - "the"
---

# Default _Default Sink Disablement Settings

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Organizations can disable the default _Default sink for new projects and folders.

## Extended Definition

Organizations can disable the default _Default sink for new projects and folders.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)

## Supporting Pages

### Settings \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: this setting does not affect the location of resources where a location is explicitly provided when created, such as custom log buckets. disableDefaultSink boolean Optional.
- JSON representation DefaultSinkConfig JSON representation FilterWriteMode Describes the settings associated with a project, folder, organization, or billing account.
- This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy.
- The Default sink can be re-enabled manually if needed. defaultSinkConfig object ( DefaultSinkConfig ) Optional.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.
- The selected resource can be a project, folder, or organization: If the toolbar displays Project logs or Default , then the resource's Required and Default buckets are queried.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- To prevent any Policy Denied audit logs from being stored in the Default buckets, you can exclude them by modifying their sinks' filters.
- To prevent Data Access audit logs from being stored in the Default buckets, you can disable them.
- If you route Admin Activity audit logs and System Event audit logs to a different project, then those logs don't pass through the Default or Required sink of the destination project.
- You can also route your audit log entries to user-defined Cloud Logging buckets at the Google Cloud project level or to supported destinations outside of Logging using sinks.

