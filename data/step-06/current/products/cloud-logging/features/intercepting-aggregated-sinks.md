---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.527Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Intercepting aggregated sinks"
feature_slug: "intercepting-aggregated-sinks"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/routing/overview"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
keywords:
  - "intercepting"
  - "aggregated"
  - "sinks"
  - "can"
  - "be"
  - "configured"
  - "as"
  - "so"
---

# Intercepting aggregated sinks

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Aggregated sinks can be configured as intercepting so logs are not passed through the child resource Log Router.

## Extended Definition

Aggregated sinks can be configured as intercepting so logs are not passed through the child resource Log Router.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)

## Supporting Pages

### Route log entries \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- There are two types of aggregated sinks: Non-intercepting aggregated sinks Intercepting aggregated sinks The difference between these two sink types is that intercepting sinks at one level in the resource hierarchy can affect routing for resources lower in the hierarchy.
- Example: A non-intercepting aggregated sink exists Assume that a non-intercepting aggregated sink exists in the resource hierarchy for a log entry.
- To learn how to create aggregated sinks that can route log entries from the resources in folders or organizations, see Aggregated sinks overview .
- Example: An intercepting aggregated sink exists Assume that an intercepting aggregated sink exists in the resource hierarchy for a log entry.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- March 26, 2024 Feature You can now configure your aggregated sink to be intercepting, which prevents logs from being passed through the Log Router of child resources.
- March 27, 2023 Feature The Cloud Logging API now supports the following region: Doha: me-central1 March 22, 2023 Change Log buckets in the following regions can now be upgraded to use Log Analytics: asia-northeast1 australia-southeast1 europe-west1 europe-west2 northamerica-northeast1 us-east1 us-west2 For more information, see Supported regions .
- September 12, 2023 Change Log buckets in the following regions can now be upgraded to use Log Analytics: us-east5 us-south1 me-central1 europe-west12 For more information, see Supported regions .
- March 01, 2023 Change Log buckets in the following regions can now be upgraded to use Log Analytics: us-central1 us-west1 asia-south1 For more information, see Supported regions .

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- You can configure an aggregated sink to be intercepting or non-intercepting, depending on whether you want control over which log entries can be queried in, or routed through the sinks in child resources.
- Before you begin Ensure the following: To get the permissions that you need to configure an aggregated sink, ask your administrator to grant you the following IAM roles on your organization: To create log buckets and sinks in a project: Logs Configuration Writer ( roles/logging.configWriter ) - your project To create an aggregated sink: Logs Configuration Writer ( roles/logging.configWriter ) - your organization To grant roles to principals: Owner ( roles/owner ) - your project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Generate log entries to assist in sink verification To verify that your aggregated sink is properly configured, try the following: Generate audit log entries that should be routed to your log bucket.
- This document describes how to manage the log entries generated by the resources contained in your Google Cloud organization by using a non-intercepting aggregated sink.

