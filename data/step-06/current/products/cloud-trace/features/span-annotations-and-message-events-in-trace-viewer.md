---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.839Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Span annotations and message events in Trace Viewer"
feature_slug: "span-annotations-and-message-events-in-trace-viewer"
latest_feature_date: "2018-01-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/trace-alerting"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
keywords:
  - "span"
  - "annotations"
  - "and"
  - "message"
  - "events"
  - "in"
  - "trace"
  - "viewer"
---

# Span annotations and message events in Trace Viewer

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Trace Viewer displays span annotations and message events written with the Stackdriver Trace API v2.

## Extended Definition

Trace Viewer displays span annotations and message events written with the Stackdriver Trace API v2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/trace-alerting](https://docs.cloud.google.com/trace/docs/trace-alerting)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)

## Supporting Pages

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following screenshot illustrates how the Trace Explorer page renders text-based generative AI events that are attached to the spans: To learn about the sample application that generated the previous screenshot, see Instrument a LangGraph ReAct Agent with OpenTelemetry .
- To learn about which remote Google Cloud MCP servers support trace generation and how to configure your application to instruct these servers to generate spans, see Investigate MCP calls using Trace .
- View attributes, log entries, and events The Details flyout for a span contains a tab for each of the following: Attributes : This tab lists labels that are attached to spans.
- If you don't have the permission to view trace data for a project, then the Google Cloud console displays a warning message and the data from that project isn't displayed.

### "Monitor trace quota usage and spans ingested \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/trace-alerting](https://docs.cloud.google.com/trace/docs/trace-alerting)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Observability Cloud Trace Guides Send feedback Monitor trace quota usage and spans ingested Stay organized with collections Save and categorize content based on your preferences.
- You can create alerting policies in Cloud Monitoring to monitor the number of Cloud Trace spans ingested per month, your quota usage, and your rate of span ingestion.
- Filter service = cloudtrace.googleapis.com response code = 429 Across time series Time series aggregation sum Rolling window 1 m Rolling window function sum Configure alert trigger Field Value Condition type Threshold Alert trigger Any time series violates Threshold position Above threshold Threshold value 0 Retest window 1 minute Monitor monthly span ingestion To create an alerting policy that triggers when your monthly Cloud Trace spans ingested exceeds a user-defined limit, use the following settings.
- Monitor over-quota on Cloud Trace API usage To create an alerting policy that triggers when your monthly Cloud Trace spans ingested exceeds your quota, use the following settings.

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AllLogs > WHERE log name = 'projects/ PROJECT ID /logs/gen ai.client.inference.operation.details' AND timestamp > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 1 DAY ) > SELECT insert id , timestamp , labels , trace , span id , STRING ( labels [ 'gen ai.input.messages ref' ]) AS messages ref uri -- Join completion log entries with the external table. > JOIN PROJECT ID .
- AllLogs > WHERE log name = 'projects/ PROJECT ID /logs/gen ai.client.inference.operation.details' AND timestamp > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 1 DAY ) > SELECT insert id , timestamp , labels , trace , span id , STRING ( labels [ 'gen ai.input.messages ref' ]) AS messages ref uri -- Join completion log entries with the external table. > JOIN PROJECT ID .
- The following example shows part of a log entry that includes object references: { ... "labels" : { "gen ai.system" : "vertex ai" , "event.name" : "gen ai.client.inference.operation.details" , "gen ai.output.messages ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg output.jsonl" , "gen ai.system instructions ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg system instructions.jsonl" , "gen ai.input.messages ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg input.jsonl" } , "logName" : "projects/my-project/logs/gen ai.client.inference.operation.details" , "trace" : "projects/my-project/traces/963761020fc7713e4590cad89ad03229" , "spanId" : "1234512345123451" , ... } In the log entry example, notice the following: The label "event.name": "gen ai.client.inference.operation.details" indicates that the log entry contains references to Cloud Storage objects.
- EXT TABLE NAME ON messages ref uri = FILE NAME > RENAME index AS message idx -- Flatten. > CROSS JOIN UNNEST ( parts ) AS part WITH OFFSET AS part idx -- Print fields. > SELECT insert id , labels , timestamp , trace , span id , role , part . content , part . uri , part . mime type , TO HEX ( MD5 ( part . data )) AS data md5 hex , part . id AS tool id , part . name AS tool name , part . arguments AS tool args , part . response AS tool response , message idx , part idx , > ORDER BY timestamp , message idx , part idx ; > LIMIT 10 ; Replace the following before you run the query: PROJECT ID : The identifier of the project.

