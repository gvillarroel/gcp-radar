---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.482Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs-based metrics low-latency updates"
feature_slug: "logs-based-metrics-low-latency-updates"
latest_feature_date: "2017-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest"
keywords:
  - "logs"
  - "based"
  - "metrics"
  - "low"
  - "latency"
  - "updates"
  - "was"
  - "reduced"
---

# Logs-based metrics low-latency updates

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs-based metrics latency was reduced from about five minutes to about one minute.

## Extended Definition

Logs-based metrics latency was reduced from about five minutes to about one minute.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)

## Supporting Pages

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, user-defined log-based metrics are calculated from all logs received by the Logging API for the Google Cloud project, regardless of any inclusion filters or exclusion filters that might apply to the Google Cloud project.
- Data types for log-based metrics Log-based metrics can extract data from logs to create metrics of the following types: Counter: these metrics count the number of log entries that match a specified filter within a specific period.
- Bucket-scoped log-based metrics are calculated from all logs destined for the bucket, regardless of where they originated.
- User-defined log-based metrics are calculated from both included and excluded logs.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- Home Documentation Observability Cloud Logging Guides Send feedback View and analyze logs Stay organized with collections Save and categorize content based on your preferences.
- The Zoom to time feature is similar to Scroll to time , but it runs a query on your logs data based on the time range captured by a selected timeline bar.
- To stream logs based on a query, add a query in the Query pane, and then select the Stream logs button in the primary toolbar.

### Cloud Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest](https://docs.cloud.google.com/logging/docs/reference/v2/rest)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v2.projects.metrics Methods create POST /v2/{parent=projects/ }/metrics Creates a logs-based metric. delete DELETE /v2/{metricName=projects/ /metrics/ } Deletes a logs-based metric. get GET /v2/{metricName=projects/ /metrics/ } Gets a logs-based metric. list GET /v2/{parent=projects/ }/metrics Lists logs-based metrics. update PUT /v2/{metricName=projects/ /metrics/ } Creates or updates a logs-based metric.
- REST Resource: v2 REST Resource: v2.billingAccounts REST Resource: v2.billingAccounts.exclusions REST Resource: v2.billingAccounts.locations.buckets REST Resource: v2.billingAccounts.locations.buckets.links REST Resource: v2.billingAccounts.locations.buckets.views REST Resource: v2.billingAccounts.locations.buckets.views.logs REST Resource: v2.billingAccounts.locations.operations REST Resource: v2.billingAccounts.locations.recentQueries REST Resource: v2.billingAccounts.locations.savedQueries REST Resource: v2.billingAccounts.logs REST Resource: v2.billingAccounts.sinks REST Resource: v2.entries REST Resource: v2.exclusions REST Resource: v2.folders REST Resource: v2.folders.exclusions REST Resource: v2.folders.locations.buckets REST Resource: v2.folders.locations.buckets.links REST Resource: v2.folders.locations.buckets.views REST Resource: v2.folders.locations.buckets.views.logs REST Resource: v2.folders.locations.logScopes REST Resource: v2.folders.locations.operations REST Resource: v2.folders.locations.recentQueries REST Resource: v2.folders.locations.savedQueries REST Resource: v2.folders.logs REST Resource: v2.folders.sinks REST Resource: v2.locations.buckets REST Resource: v2.locations.buckets.links REST Resource: v2.locations.buckets.views REST Resource: v2.locations.operations REST Resource: v2.logs REST Resource: v2.monitoredResourceDescriptors REST Resource: v2.organizations REST Resource: v2.organizations.exclusions REST Resource: v2.organizations.locations.buckets REST Resource: v2.organizations.locations.buckets.links REST Resource: v2.organizations.locations.buckets.views REST Resource: v2.organizations.locations.buckets.views.logs REST Resource: v2.organizations.locations.logScopes REST Resource: v2.organizations.locations.operations REST Resource: v2.organizations.locations.recentQueries REST Resource: v2.organizations.locations.savedQueries REST Resource: v2.organizations.logs REST Resource: v2.organizations.sinks REST Resource: v2.projects REST Resource: v2.projects.exclusions REST Resource: v2.projects.locations.buckets REST Resource: v2.projects.locations.buckets.links REST Resource: v2.projects.locations.buckets.views REST Resource: v2.projects.locations.buckets.views.logs REST Resource: v2.projects.locations.logScopes REST Resource: v2.projects.locations.operations REST Resource: v2.projects.locations.recentQueries REST Resource: v2.projects.locations.savedQueries REST Resource: v2.projects.logs REST Resource: v2.projects.metrics REST Resource: v2.projects.sinks REST Resource: v2.sinks Service: logging.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v2.organizations.locations.logScopes Methods create POST /v2/{parent=organizations/ /locations/ }/logScopes Creates a log scope. delete DELETE /v2/{name=organizations/ /locations/ /logScopes/ } Deletes a log scope. get GET /v2/{name=organizations/ /locations/ /logScopes/ } Gets a log scope. list GET /v2/{parent=organizations/ /locations/ }/logScopes Lists log scopes. patch PATCH /v2/{logScope.name=organizations/ /locations/ /logScopes/ } Updates a log scope.
- REST Resource: v2.projects.locations.logScopes Methods create POST /v2/{parent=projects/ /locations/ }/logScopes Creates a log scope. delete DELETE /v2/{name=projects/ /locations/ /logScopes/ } Deletes a log scope. get GET /v2/{name=projects/ /locations/ /logScopes/ } Gets a log scope. list GET /v2/{parent=projects/ /locations/ }/logScopes Lists log scopes. patch PATCH /v2/{logScope.name=projects/ /locations/ /logScopes/ } Updates a log scope.

