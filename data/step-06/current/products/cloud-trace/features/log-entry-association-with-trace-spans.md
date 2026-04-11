---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.838Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Log entry association with trace spans"
feature_slug: "log-entry-association-with-trace-spans"
latest_feature_date: "2018-02-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
  - "https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset"
keywords:
  - "log"
  - "entry"
  - "association"
  - "with"
  - "trace"
  - "spans"
  - "viewer"
  - "can"
---

# Log entry association with trace spans

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Trace Viewer can associate Cloud Logging entries with trace spans when the span_id field is set.

## Extended Definition

Trace Viewer can associate Cloud Logging entries with trace spans when the span_id field is set.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)

## Supporting Pages

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- The following screenshot illustrates how the Trace Explorer page renders text-based generative AI events that are attached to the spans: To learn about the sample application that generated the previous screenshot, see Instrument a LangGraph ReAct Agent with OpenTelemetry .
- When you are investigating an issue, you might want to view a specific trace or only spans with certain properties: To restrict which spans are shown, apply filters .
- A circle on a latency bar indicates a log entry or event is associated with the span.
- You also can search the spans and attributes in the trace for keywords .

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows part of a log entry that includes object references: { ... "labels" : { "gen ai.system" : "vertex ai" , "event.name" : "gen ai.client.inference.operation.details" , "gen ai.output.messages ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg output.jsonl" , "gen ai.system instructions ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg system instructions.jsonl" , "gen ai.input.messages ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg input.jsonl" } , "logName" : "projects/my-project/logs/gen ai.client.inference.operation.details" , "trace" : "projects/my-project/traces/963761020fc7713e4590cad89ad03229" , "spanId" : "1234512345123451" , ... } In the log entry example, notice the following: The label "event.name": "gen ai.client.inference.operation.details" indicates that the log entry contains references to Cloud Storage objects.
- Enable the APIs To get the permissions that you need to configure the system so that you can view your multimodal prompts and responses in BigQuery, ask your administrator to grant you the following IAM roles on project: Logs Configuration Writer ( roles/logging.configWriter ) Storage Admin ( roles/storage.admin ) BigQuery Connection Admin ( roles/bigquery.connectionAdmin ) BigQuery Data Viewer ( roles/bigquery.dataViewer ) BigQuery Studio User ( roles/bigquery.studioUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, the following example illustrates how prompts and responses appear, and how OpenTelemetry: Attributes are summarized: Before you begin To get the permissions that you need to view your multimodal prompts and responses, ask your administrator to grant you the following IAM roles on project: Cloud Trace User ( roles/cloudtrace.user ) Logs Viewer ( roles/logging.viewer ) Storage Object Viewer ( roles/storage.objectViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- AllLogs > WHERE log name = 'projects/ PROJECT ID /logs/gen ai.client.inference.operation.details' AND timestamp > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 1 DAY ) > SELECT insert id , timestamp , labels , trace , span id , STRING ( labels [ 'gen ai.input.messages ref' ]) AS messages ref uri -- Join completion log entries with the external table. > JOIN PROJECT ID .

### Analyze trace data with BigQuery \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get the permissions that you need to create a link on an observability dataset, ask your administrator to grant you the following IAM roles on your project: Observability Editor ( roles/observability.editor ) BigQuery User ( roles/bigquery.user ) Logs Viewer ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Use BigQuery Studio To open BigQuery from the Observability Analytics page and then query your trace data, do the following: In the Google Cloud console, go to the manage search Log Analytics page: Go to Log Analytics If you use the search bar to find this page, then select the result whose subheading is Logging .
- Logs Viewer ( roles/logging.viewer ) on your project BigQuery User ( roles/bigquery.user ) on your project BigQuery Job User ( roles/bigquery.jobUser ) on your project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Home Documentation Observability Cloud Trace Guides Send feedback Analyze trace data with BigQuery Stay organized with collections Save and categorize content based on your preferences.

