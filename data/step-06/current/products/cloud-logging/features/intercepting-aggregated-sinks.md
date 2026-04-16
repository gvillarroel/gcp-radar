---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.325Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Intercepting aggregated sinks"
feature_slug: "intercepting-aggregated-sinks"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/routing/overview"
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
keywords:
  - "intercepting"
  - "aggregated"
  - "sinks"
  - "can"
  - "configured"
  - "so"
  - "logs"
  - "not"
---

# Intercepting aggregated sinks

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Aggregated sinks can be configured as intercepting so logs are not passed through the child resource Log Router.

## Extended Definition

Aggregated sinks can be configured as intercepting so logs are not passed through the child resource Log Router.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)

## Supporting Pages

### Route log entries \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are two types of aggregated sinks: Non-intercepting aggregated sinks Intercepting aggregated sinks The difference between these two sink types is that intercepting sinks at one level in the resource hierarchy can affect routing for resources lower in the hierarchy.
- The following destinations are supported: Google Cloud project Select this destination when you want the log sinks in the destination project to reroute your log entries, or when you have created an intercepting aggregated sink.
- Support for organizations and folders To help you manage the log data in an organization or folder, you can do the following: You can create aggregated sinks , which route log entries for an organization or folder and their children, to the destination specified by the sink.
- After the Log Router sends the log entry to the non-intercepting aggregated sink, the following occurs: The non-intercepting aggregated sink routes the log entry to the sink's destination when the log entry matches the inclusion filter but doesn't match any exclusion filter.

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Ensure the following: To get the permissions that you need to configure an aggregated sink, ask your administrator to grant you the following IAM roles on your organization: To create log buckets and sinks in a project: Logs Configuration Writer ( roles/logging.configWriter ) - your project To create an aggregated sink: Logs Configuration Writer ( roles/logging.configWriter ) - your organization To grant roles to principals: Owner ( roles/owner ) - your project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Execute the gcloud logging sinks create command: gcloud logging sinks create PROJECT LEVEL SINK NAME SINK DESTINATION --project= PROJECT ID --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ Create the aggregated sink Aggregated sinks combine and route log entries from the resources contained by an organization or folder to a destination.
- Set up the sink at the organization level To create an aggregated sink that is non-intercepting and that routes log entries to a project, complete the following steps: Run the gcloud logging sinks create command.
- You can configure an aggregated sink to be intercepting or non-intercepting, depending on whether you want control over which log entries can be queried in, or routed through the sinks in child resources.

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Example command: gcloud logging sinks update Default \ logging.googleapis.com/projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID \ --log-filter='NOT LOG ID("cloudaudit.googleapis.com/activity") AND NOT LOG ID("externalaudit.googleapis.com/activity") AND NOT LOG ID("cloudaudit.googleapis.com/system event") AND NOT LOG ID("externalaudit.googleapis.com/system event") AND NOT LOG ID("cloudaudit.googleapis.com/access transparency") AND NOT LOG ID("externalaudit.googleapis.com/access transparency")' \ --description="Updated the Default sink to route logs to the LOCATION region" Note: When you create a project, the filter for the Default sink is as shown in the previous command.
- Logging supports querying logs from multiple regions together, in which case queries are processed in the same locations as the buckets being queried and then aggregated in the region the query was received from to return the results.
- The Logs Explorer is configured to display log entries that originate in your project.
- Sinks apply to logs equally and regardless of region.

