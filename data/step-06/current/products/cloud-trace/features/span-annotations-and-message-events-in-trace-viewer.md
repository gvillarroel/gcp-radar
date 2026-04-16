---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.011Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Span annotations and message events in Trace Viewer"
feature_slug: "span-annotations-and-message-events-in-trace-viewer"
latest_feature_date: "2018-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/trace-alerting"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
  - "https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan"
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
Coverage: MEDIUM

## Step 02 Summary

Trace Viewer displays span annotations and message events written with the Stackdriver Trace API v2.

## Extended Definition

Trace Viewer displays span annotations and message events written with the Stackdriver Trace API v2.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/trace-alerting](https://docs.cloud.google.com/trace/docs/trace-alerting)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan)

## Supporting Pages

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following screenshot illustrates how the Trace Explorer page renders text-based generative AI events that are attached to the spans: To learn about the sample application that generated the previous screenshot, see Instrument a LangGraph ReAct Agent with OpenTelemetry .
- To learn about which remote Google Cloud MCP servers support trace generation and how to configure your application to instruct these servers to generate spans, see Investigate MCP calls using Trace .
- View attributes, log entries, and events The Details flyout for a span contains a tab for each of the following: Attributes : This tab lists labels that are attached to spans.
- If you don't have the permission to view trace data for a project, then the Google Cloud console displays a warning message and the data from that project isn't displayed.

### "Monitor trace quota usage and spans ingested \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/trace-alerting](https://docs.cloud.google.com/trace/docs/trace-alerting)
- Source ID: `site-docs-root-2`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Trace Guides Send feedback Monitor trace quota usage and spans ingested Stay organized with collections Save and categorize content based on your preferences.
- You can create alerting policies in Cloud Monitoring to monitor the number of Cloud Trace spans ingested per month, your quota usage, and your rate of span ingestion.
- Filter service = cloudtrace.googleapis.com response code = 429 Across time series Time series aggregation sum Rolling window 1 m Rolling window function sum Configure alert trigger Field Value Condition type Threshold Alert trigger Any time series violates Threshold position Above threshold Threshold value 0 Retest window 1 minute Monitor monthly span ingestion To create an alerting policy that triggers when your monthly Cloud Trace spans ingested exceeds a user-defined limit, use the following settings.
- Monitor over-quota on Cloud Trace API usage To create an alerting policy that triggers when your monthly Cloud Trace spans ingested exceeds your quota, use the following settings.

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AllLogs > WHERE log name = 'projects/ PROJECT ID /logs/gen ai.client.inference.operation.details' AND timestamp > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 1 DAY ) > SELECT insert id , timestamp , labels , trace , span id , STRING ( labels [ 'gen ai.input.messages ref' ]) AS messages ref uri -- Join completion log entries with the external table. > JOIN PROJECT ID .
- AllLogs > WHERE log name = 'projects/ PROJECT ID /logs/gen ai.client.inference.operation.details' AND timestamp > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 1 DAY ) > SELECT insert id , timestamp , labels , trace , span id , STRING ( labels [ 'gen ai.input.messages ref' ]) AS messages ref uri -- Join completion log entries with the external table. > JOIN PROJECT ID .
- The following example shows part of a log entry that includes object references: { ... "labels" : { "gen ai.system" : "vertex ai" , "event.name" : "gen ai.client.inference.operation.details" , "gen ai.output.messages ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg output.jsonl" , "gen ai.system instructions ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg system instructions.jsonl" , "gen ai.input.messages ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg input.jsonl" } , "logName" : "projects/my-project/logs/gen ai.client.inference.operation.details" , "trace" : "projects/my-project/traces/963761020fc7713e4590cad89ad03229" , "spanId" : "1234512345123451" , ... } In the log entry example, notice the following: The label "event.name": "gen ai.client.inference.operation.details" indicates that the log entry contains references to Cloud Storage objects.
- EXT TABLE NAME ON messages ref uri = FILE NAME > RENAME index AS message idx -- Flatten. > CROSS JOIN UNNEST ( parts ) AS part WITH OFFSET AS part idx -- Print fields. > SELECT insert id , labels , timestamp , trace , span id , role , part . content , part . uri , part . mime type , TO HEX ( MD5 ( part . data )) AS data md5 hex , part . id AS tool id , part . name AS tool name , part . arguments AS tool args , part . response AS tool response , message idx , part idx , > ORDER BY timestamp , message idx , part idx ; > LIMIT 10 ; Replace the following before you run the query: PROJECT ID : The identifier of the project.

### "Class TraceSpan (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan)
- Source ID: `site-python-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans. start time google.protobuf.timestamp pb2.Timestamp Start time of the span in nanoseconds from the UNIX epoch. end time google.protobuf.timestamp pb2.Timestamp End time of the span in nanoseconds from the UNIX epoch. parent span id int Optional.
- Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations.
- The span name is sanitized and displayed in the Stackdriver Trace tool in the Google Cloud Platform Console.
- When creating your own, we recommend the following formats: - /category/product/key for agents of well-known products (e.g. /db/mongodb/read size ). - short host/path/key for domain-specific keys (e.g. foo.com/myproduct/bar ) Predefined labels include: - /agent - /component - /error/message - /error/name - /http/client city - /http/client country - /http/client protocol - /http/client region - /http/host - /http/method - /http/path - /http/redirected url - /http/request/size - /http/response/size - /http/route - /http/status code - /http/url - /http/user agent - /pid - /stacktrace - /tid Classes LabelsEntry LabelsEntry ( mapping = None , , ignore unknown fields = False , kwargs ) The abstract base class for a message.

