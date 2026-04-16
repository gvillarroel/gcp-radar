---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.992Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Cloud Trace API MCP server"
feature_slug: "cloud-trace-api-mcp-server"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/reference/mcp/mcp"
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace"
  - "https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces"
keywords:
  - "trace"
  - "api"
  - "mcp"
  - "server"
  - "the"
  - "lets"
  - "agents"
  - "and"
---

# Cloud Trace API MCP server

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

The Cloud Trace API MCP server lets agents and AI applications interact with trace data.

## Extended Definition

The Cloud Trace API MCP server lets agents and AI applications interact with trace data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp)
- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace)
- [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces)

## Supporting Pages

### "MCP Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp)
- Source ID: `site-docs-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The cloudtrace.googleapis.com MCP server has the following tools: MCP Tools list traces Use this as the primary tool to retrieve and examine distributed traces from Google Cloud Trace.
- Curl Request curl --location 'https://cloudtrace.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/list", "jsonrpc": "2.0", "id": 1 }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- An MCP server that provides tools for Cloud Trace Server Endpoints An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection.
- The cloudtrace.googleapis.com MCP server has the following MCP endpoint: https://cloudtrace.googleapis.com/mcp MCP Tools An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn about which remote Google Cloud MCP servers support trace generation and how to configure your application to instruct these servers to generate spans, see Investigate MCP calls using Trace .
- For each project, verify that your IAM role lets you view trace data and then ensure that the Scope element lists the project's default view for trace data.
- For example, some remote Google Cloud MCP servers can generate a trace span when they receive a tools/call operation.
- View calls to remote MCP servers To view spans written by MCP servers, filter your trace data by the span name.

### "MCP Tools Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace)
- Source ID: `site-docs-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://cloudtrace.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get trace", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema The request message for the GetTrace method.
- Home Documentation Observability Cloud Trace Reference Send feedback MCP Tools Reference: cloudtrace.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans. startTime string ( Timestamp format) Start time of the span in seconds and nanoseconds from the UNIX epoch.
- For example, two spans with the same name may be distinguished using RPC CLIENT and RPC SERVER to identify queueing latency associated with the span. name string Name of the span.

### "MCP Tools Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces)
- Source ID: `site-docs-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://cloudtrace.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list traces", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema The request message for the ListTraces method.
- Home Documentation Observability Cloud Trace Reference Send feedback MCP Tools Reference: cloudtrace.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- ListTracesResponse JSON representation { "traces" : [ { object ( Trace ) } ] , "nextPageToken" : string } Fields traces[] object ( Trace ) List of trace records as specified by the view parameter. nextPageToken string If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces.
- Can be one of the following: trace id name ( name field of root span in the trace) duration (difference between end time and start time fields of the root span) start ( start time field of the root span) Descending order can be specified by appending desc to the sort field (for example, name desc ).

