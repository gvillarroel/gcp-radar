---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.995Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace sinks"
feature_slug: "trace-sinks"
latest_feature_date: "2026-02-17"
deprecation_date: "2026-02-18"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/analytics-migrate"
  - "https://docs.cloud.google.com/trace/docs/trace-alerting"
  - "https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace"
  - "https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces"
keywords:
  - "trace"
  - "sinks"
  - "export"
  - "spans"
  - "to"
  - "external"
  - "destinations"
  - "such"
---

# Trace sinks

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Trace sinks export trace spans to external destinations such as BigQuery; deprecated on 2026-02-18.

## Extended Definition

Trace sinks export trace spans to external destinations such as BigQuery; deprecated on 2026-02-18.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/analytics-migrate](https://docs.cloud.google.com/trace/docs/analytics-migrate)
- [https://docs.cloud.google.com/trace/docs/trace-alerting](https://docs.cloud.google.com/trace/docs/trace-alerting)
- [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace)
- [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces)

## Supporting Pages

### "Migrate to Observability Analytics \_|\_ Cloud Trace \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/trace/docs/analytics-migrate](https://docs.cloud.google.com/trace/docs/analytics-migrate)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using sinks to export trace data to BigQuery , then this document applies to you.
- The usage of sinks to export trace data is no longer recommended.
- Delete trace sinks and unnecessary datasets: To list existing trace sinks, execute the gcloud alpha trace sinks list command: gcloud alpha trace sinks list For each sink, execute the gcloud alpha trace sinks delete command: gcloud alpha trace sinks delete SINK NAME Optional: Delete any unnecessary BigQuery datasets.
- In the Views menu, go to the Traces section, and then select Trace.Spans.

### "Monitor trace quota usage and spans ingested \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/trace-alerting](https://docs.cloud.google.com/trace/docs/trace-alerting)
- Source ID: `site-docs-root-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filter service = cloudtrace.googleapis.com response code = 429 Across time series Time series aggregation sum Rolling window 1 m Rolling window function sum Configure alert trigger Field Value Condition type Threshold Alert trigger Any time series violates Threshold position Above threshold Threshold value 0 Retest window 1 minute Monitor monthly span ingestion To create an alerting policy that triggers when your monthly Cloud Trace spans ingested exceeds a user-defined limit, use the following settings.
- Home Documentation Observability Cloud Trace Guides Send feedback Monitor trace quota usage and spans ingested Stay organized with collections Save and categorize content based on your preferences.
- Monitor over-quota on Cloud Trace API usage To create an alerting policy that triggers when your monthly Cloud Trace spans ingested exceeds your quota, use the following settings.
- You can create alerting policies in Cloud Monitoring to monitor the number of Cloud Trace spans ingested per month, your quota usage, and your rate of span ingestion.

### "MCP Tools Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Trace JSON representation { "projectId" : string , "traceId" : string , "spans" : [ { object ( TraceSpan ) } ] } Fields projectId string Project ID of the Cloud project where the trace data is stored. traceId string Globally unique identifier for the trace.
- For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans. startTime string ( Timestamp format) Start time of the span in seconds and nanoseconds from the UNIX epoch.
- Curl Request curl --location 'https://cloudtrace.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get trace", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema The request message for the GetTrace method.
- Home Documentation Observability Cloud Trace Reference Send feedback MCP Tools Reference: cloudtrace.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Trace JSON representation { "projectId" : string , "traceId" : string , "spans" : [ { object ( TraceSpan ) } ] } Fields projectId string Project ID of the Cloud project where the trace data is stored. traceId string Globally unique identifier for the trace.
- For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans. startTime string ( Timestamp format) Start time of the span in seconds and nanoseconds from the UNIX epoch.
- Curl Request curl --location 'https://cloudtrace.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list traces", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema The request message for the ListTraces method.
- ListTracesResponse JSON representation { "traces" : [ { object ( Trace ) } ] , "nextPageToken" : string } Fields traces[] object ( Trace ) List of trace records as specified by the view parameter. nextPageToken string If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces.

