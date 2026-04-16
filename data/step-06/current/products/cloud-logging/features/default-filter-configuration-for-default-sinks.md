---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.337Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Default filter configuration for _Default sinks"
feature_slug: "default-filter-configuration-for-default-sinks"
latest_feature_date: "2023-11-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/routing/overview"
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-python"
keywords:
  - "default"
  - "filter"
  - "configuration"
  - "sinks"
  - "resources"
  - "can"
  - "inherit"
  - "configured"
---

# Default filter configuration for _Default sinks

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

New resources can inherit configured inclusion or exclusion filters for their _Default sinks.

## Extended Definition

New resources can inherit configured inclusion or exclusion filters for their _Default sinks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)

## Supporting Pages

### Route log entries \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, the exclusion filter is configured as follows: NOT LOG ID("cloudaudit.googleapis.com/activity") AND NOT LOG ID("externalaudit.googleapis.com/activity") AND NOT LOG ID("cloudaudit.googleapis.com/system event") AND NOT LOG ID("externalaudit.googleapis.com/system event") AND NOT LOG ID("cloudaudit.googleapis.com/access transparency") AND NOT LOG ID("externalaudit.googleapis.com/access transparency") You can modify and disable the Default log sink.
- You can configure default resource settings for Cloud Logging to specify the configuration of the system-created Default sink for new resources in an organization or folder.
- The log sinks in this project process the log entries: The Default log sink routes to the Default log bucket all log entries that match the sink's filter.
- There are two types of aggregated sinks: Non-intercepting aggregated sinks Intercepting aggregated sinks The difference between these two sink types is that intercepting sinks at one level in the resource hierarchy can affect routing for resources lower in the hierarchy.

### "Quickstart: Write and query log entries using a Python script \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A sink has three attributes: Name Destination Filter For more information about sinks, see About log sinks .
- To create the sink mysink that exports all log entries with a severity of at least INFO to the Cloud Storage bucket myloggingproject-1 , run the following command: python export . py create mysink myloggingproject - 1 "severity>=INFO" The script returns the following: Created sink mysink To view your sinks, run the export.py script with the list option: python export . py list The script returns the following: mysink: severity>=INFO -> storage.googleapis.com/myloggingproject-1 Update destination permissions The permissions of the destination, in this case, your Cloud Storage bucket, aren't modified when you create a sink by using the export.py script.
- Validate sink To validate that your sink and destination are properly configured, do the following: Write new log entries to the log my-log : python snippets . py my - log write View your Cloud Storage bucket's contents: In the Google Cloud console, go to the Buckets page: Go to Buckets If you use the search bar to find this page, then select the result whose subheading is Cloud Storage .
- To correct this situation, write new log entries: python snippets . py my - log write Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps. (Optional) Delete the log entries you created.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- To prevent any Policy Denied audit logs from being stored in the Default buckets, you can exclude them by modifying their sinks' filters.
- For each billing account, Google Cloud project, folder, and organization, Logging automatically creates two log buckets, Required and Default , and correspondingly named sinks .
- Admin Activity audit logs Admin Activity audit logs are log entries written by user-driven API calls or other actions that modify the configuration or metadata of resources.
- When configuring your log sinks' filters, you need to specify the audit log types you want to route; for filtering examples, see Security logging queries .

