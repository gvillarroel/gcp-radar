---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.828Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace scopes API management"
feature_slug: "trace-scopes-api-management"
latest_feature_date: "2025-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/otlp"
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/trace-alerting"
keywords:
  - "trace"
  - "scopes"
  - "api"
  - "management"
  - "can"
  - "be"
  - "created"
  - "and"
---

# Trace scopes API management

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Trace scopes can be created and managed programmatically through an API.

## Extended Definition

Trace scopes can be created and managed programmatically through an API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/trace-alerting](https://docs.cloud.google.com/trace/docs/trace-alerting)

## Supporting Pages

### "Use the Ops Agent and OpenTelemetry Protocol (OTLP) \_|\_ Cloud Trace \_\

- URL: [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To grant this role to the service account, run the following gcloud projects add-iam-policy-binding command: gcloud projects add-iam-policy-binding PROJECT ID --member "serviceAccount: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" --role="roles/cloudtrace.agent" You can then run the gcloud projects get-iam-policy command to verify that the change has been made: gcloud projects get-iam-policy PROJECT ID --format="table(bindings.role)" --flatten="bindings[].members" --filter="bindings.members: SERVICE ACCT NAME @ PROJECT ID .iam.gserviceaccount.com" The output now includes roles/cloudtrace.agent : ROLE roles/cloudtrace.agent roles/logging.logWriter roles/monitoring.metricWriter For more information about managing IAM roles, see Manage access to project, folders, and organizations .
- Trivial PromQL queries for the example metrics look like the following: workload googleapis com:otlp test gauge{monitored resource="gce instance"} workload googleapis com:otlp test cumulative{monitored resource="gce instance"} The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.gauge metric: The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.cumulative metric: View metric usage and diagnostics in Cloud Monitoring The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.
- Benefits Before the availability of the OTLP plugin for the Ops Agent, the primary ways to instrument your applications to collect user-defined metrics and traces included the following: Using client libraries that implement the Monitoring API or the Trace API.
- This document describes how can use the Ops Agent and the OpenTelemetry Protocol (OTLP) receiver to collect user-defined metrics and traces from applications instrumented by using OpenTelemetry and running on Compute Engine.

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view trace data by using the Google Cloud console and to or select a trace scope: To select a trace scope: cloudtrace.traceScopes.[get, list] To read the default trace scope: observability.scopes.get You might also be able to get these permissions with custom roles or other predefined roles .
- What's next Create and manage trace scopes Share traces and spans Troubleshoot Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you begin To get the permissions that you need to view trace data by using the Google Cloud console and to or select a trace scope, ask your administrator to grant you the Cloud Trace User ( roles/cloudtrace.user ) IAM role on your project.
- To view an aggregate representation of your trace data, or to find and explore individual traces or traces that contain specific labels, use the Trace Explorer page.

### "Monitor trace quota usage and spans ingested \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/trace-alerting](https://docs.cloud.google.com/trace/docs/trace-alerting)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can create alerting policies in Cloud Monitoring to monitor the number of Cloud Trace spans ingested per month, your quota usage, and your rate of span ingestion.
- If you haven't created your notification channels and if you want to be notified, then click Edit Notification Channels and add your notification channels.
- If you haven't created your notification channels and if you want to be notified, then click Edit Notification Channels and add your notification channels.
- Filter service = cloudtrace.googleapis.com response code = 429 Across time series Time series aggregation sum Rolling window 1 m Rolling window function sum Configure alert trigger Field Value Condition type Threshold Alert trigger Any time series violates Threshold position Above threshold Threshold value 0 Retest window 1 minute Monitor monthly span ingestion To create an alerting policy that triggers when your monthly Cloud Trace spans ingested exceeds a user-defined limit, use the following settings.

