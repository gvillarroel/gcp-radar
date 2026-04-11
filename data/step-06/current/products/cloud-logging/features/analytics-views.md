---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.521Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Analytics views"
feature_slug: "analytics-views"
latest_feature_date: "2025-01-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/buckets"
keywords:
  - "analytics"
  - "views"
  - "transform"
  - "log"
  - "into"
  - "custom"
  - "format"
  - "that"
---

# Analytics views

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Analytics views transform log data into a custom format that can be queried with SQL.

## Extended Definition

Analytics views transform log data into a custom format that can be queried with SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.
- Set preferences for viewing log data To customize how your logs data is presented in the query results, click the settings Preferences button, and select View , Format , or Manage summary fields : To show or hide the Timeline and Fields panes, to hide summary chips in your query results, or to change the sorting order of your logs, select View .
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- January 20, 2025 Libraries Java 3.21.1 (2025-01-13) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 705dba2 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1745 ) ( 6a7280d ) Update dependency org.easymock:easymock to v5.5.0 ( #1639 ) ( f559d89 ) Update googleapis/sdk-platform-java action to v2.51.1 ( #1742 ) ( 3c7a2c7 ) Java 3.21.1 (2025-01-13) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 705dba2 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1745 ) ( 6a7280d ) Update dependency org.easymock:easymock to v5.5.0 ( #1639 ) ( f559d89 ) Update googleapis/sdk-platform-java action to v2.51.1 ( #1742 ) ( 3c7a2c7 ) Java 3.21.1 (2025-01-13) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 705dba2 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1745 ) ( 6a7280d ) Update dependency org.easymock:easymock to v5.5.0 ( #1639 ) ( f559d89 ) Update googleapis/sdk-platform-java action to v2.51.1 ( #1742 ) ( 3c7a2c7 ) January 13, 2025 Feature You can now create analytics views, which let you transform your log data into a custom format.
- For more information, see the following documents: About analytics views Create, query, and manage analytics views January 06, 2025 Libraries Go 1.13.0 (2025-01-02) Features logging: Change go gapic transport to grpc+rest in logging ( #11289 ) ( a5f250b ) Bug Fixes logging: Update golang.org/x/net to v0.33.0 ( e9b0b69 ) logging: Update google.golang.org/api to v0.203.0 ( 8bb87d5 ) logging: WARNING: On approximately Dec 1, 2024, an update to Protobuf will change service registration function signatures to use an interface instead of a concrete type in generated .pb.go files.
- For more information, see https://togithub.com/googleapis/google-cloud-go/issues/11020. ( 8bb87d5 ) December 18, 2024 Feature You can now create custom roles that let you create and manage Log Scopes.
- As a result, custom roles that have the logging.sinks. permissions can now control the volume of logs ingested into Cloud Logging through logs sinks.

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- After Logging displays the linked dataset name on the Logs Storage page, it might take several minutes before BigQuery recognizes the dataset. gcloud To create a linked dataset for a log bucket that is upgraded to use Observability Analytics, run the gcloud logging links create command: gcloud logging links create LINK ID --bucket= BUCKET ID --location= LOCATION The LINK ID that you provide is used as the name of the BigQuery dataset, and the value of this field must be unique for your Google Cloud project.
- If you want to upgrade the log bucket to use Observability Analytics, then include the --enable-analytics and --async flags, and make sure that you set the variable LOCATION to a supported region : gcloud logging buckets create BUCKET ID --location= LOCATION --enable-analytics --async OPTIONAL FLAGS The flag --async forces the command to be asynchronous.
- You must set the --enable-analytics flag, and we recommend that you also include the --async flag: gcloud logging buckets update BUCKET ID --location= LOCATION --enable-analytics --async The flag --async forces the command to be asynchronous.
- REST To create a linked a BigQuery dataset for an existing log bucket that is upgraded use Observability Analytics, call the asynchronous projects.locations.buckets.links.create method of the Cloud Logging API.

