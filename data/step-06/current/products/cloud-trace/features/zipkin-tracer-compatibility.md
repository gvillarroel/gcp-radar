---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.014Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Zipkin tracer compatibility"
feature_slug: "zipkin-tracer-compatibility"
latest_feature_date: "2017-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient"
  - "https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces"
  - "https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace"
  - "https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient"
keywords:
  - "zipkin"
  - "tracer"
  - "compatibility"
  - "stackdriver"
  - "trace"
  - "is"
  - "compatible"
  - "with"
---

# Zipkin tracer compatibility

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Stackdriver Trace is compatible with Zipkin tracers.

## Extended Definition

Stackdriver Trace is compatible with Zipkin tracers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient)
- [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces)
- [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient)

## Supporting Pages

### "Class TraceServiceClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient)
- Source ID: `site-java-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) { ListTracesRequest request = ListTracesRequest . newBuilder () . setProjectId ( "projectId-894832108" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setStartTime ( Timestamp . newBuilder (). build ()) . setEndTime ( Timestamp . newBuilder (). build ()) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Trace> future = traceServiceClient . listTracesPagedCallable (). futureCall ( request ); // Do something. for ( Trace element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListTracesRequest , ListTracesPagedResponse > patchTraces(PatchTracesRequest request) public final void patchTraces ( PatchTracesRequest request ) Sends new traces to Stackdriver Trace or updates existing traces.
- Request object method variants only take one parameter, a request object, which must be constructed before the call. getTrace(GetTraceRequest request) "Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method. getTrace(String projectId, String traceId) Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service. getTraceCallable() PatchTraces Sends new traces to Stackdriver Trace or updates existing traces.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) { ListTracesRequest request = ListTracesRequest . newBuilder () . setProjectId ( "projectId-894832108" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setStartTime ( Timestamp . newBuilder (). build ()) . setEndTime ( Timestamp . newBuilder (). build ()) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); while ( true ) { ListTracesResponse response = traceServiceClient . listTracesCallable (). call ( request ); for ( Trace element : response . getTracesList ()) { // doThingsWith(element); } String nextPageToken = response . getNextPageToken (); if ( !
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) { ListTracesRequest request = ListTracesRequest . newBuilder () . setProjectId ( "projectId-894832108" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setStartTime ( Timestamp . newBuilder (). build ()) . setEndTime ( Timestamp . newBuilder (). build ()) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); for ( Trace element : traceServiceClient . listTraces ( request ). iterateAll ()) { // doThingsWith(element); } } Parameter Name Description request ListTracesRequest The request object containing all of the parameters for the API call.

### "MCP Tools Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Trace Reference Send feedback MCP Tools Reference: cloudtrace.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- This will only return the root trace span, to gather full information call get trace with that id.
- Curl Request curl --location 'https://cloudtrace.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list traces", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema The request message for the ListTraces method.
- ListTracesResponse JSON representation { "traces" : [ { object ( Trace ) } ] , "nextPageToken" : string } Fields traces[] object ( Trace ) List of trace records as specified by the view parameter. nextPageToken string If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces.

### "MCP Tools Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/get_trace)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Trace Reference Send feedback MCP Tools Reference: cloudtrace.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Curl Request curl --location 'https://cloudtrace.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get trace", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema The request message for the GetTrace method.
- Trace JSON representation { "projectId" : string , "traceId" : string , "spans" : [ { object ( TraceSpan ) } ] } Fields projectId string Project ID of the Cloud project where the trace data is stored. traceId string Globally unique identifier for the trace.
- For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans. startTime string ( Timestamp format) Start time of the span in seconds and nanoseconds from the UNIX epoch.

### "Class TraceServiceAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.TraceServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This corresponds to the trace id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the traces field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data.
- If a Callable is given, it will be called with the same set of initialization arguments as used in the TraceServiceTransport constructor.

