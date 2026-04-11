---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.842Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Zipkin tracer compatibility"
feature_slug: "zipkin-tracer-compatibility"
latest_feature_date: "2017-02-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesFixedSizeCollection"
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
Coverage: LOW

## Step 02 Summary

Stackdriver Trace is compatible with Zipkin tracers.

## Extended Definition

Stackdriver Trace is compatible with Zipkin tracers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesFixedSizeCollection)

## Supporting Pages

### "MCP Tools Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Observability Cloud Trace Reference Send feedback MCP Tools Reference: cloudtrace.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- This will only return the root trace span, to gather full information call get trace with that id.
- Curl Request curl --location 'https://cloudtrace.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list traces", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema The request message for the ListTraces method.
- ListTracesResponse JSON representation { "traces" : [ { object ( Trace ) } ] , "nextPageToken" : string } Fields traces[] object ( Trace ) List of trace records as specified by the view parameter. nextPageToken string If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces.

### "Class TraceServiceClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient)
- Source ID: `site-java-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) { ListTracesRequest request = ListTracesRequest . newBuilder () . setProjectId ( "projectId-894832108" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setStartTime ( Timestamp . newBuilder (). build ()) . setEndTime ( Timestamp . newBuilder (). build ()) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Trace> future = traceServiceClient . listTracesPagedCallable (). futureCall ( request ); // Do something. for ( Trace element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListTracesRequest , ListTracesPagedResponse > patchTraces(PatchTracesRequest request) public final void patchTraces ( PatchTracesRequest request ) Sends new traces to Stackdriver Trace or updates existing traces.
- Request object method variants only take one parameter, a request object, which must be constructed before the call. getTrace(GetTraceRequest request) "Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method. getTrace(String projectId, String traceId) Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service. getTraceCallable() PatchTraces Sends new traces to Stackdriver Trace or updates existing traces.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) { ListTracesRequest request = ListTracesRequest . newBuilder () . setProjectId ( "projectId-894832108" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setStartTime ( Timestamp . newBuilder (). build ()) . setEndTime ( Timestamp . newBuilder (). build ()) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); while ( true ) { ListTracesResponse response = traceServiceClient . listTracesCallable (). call ( request ); for ( Trace element : response . getTracesList ()) { // doThingsWith(element); } String nextPageToken = response . getNextPageToken (); if ( !
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) { ListTracesRequest request = ListTracesRequest . newBuilder () . setProjectId ( "projectId-894832108" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setStartTime ( Timestamp . newBuilder (). build ()) . setEndTime ( Timestamp . newBuilder (). build ()) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); for ( Trace element : traceServiceClient . listTraces ( request ). iterateAll ()) { // doThingsWith(element); } } Parameter Name Description request ListTracesRequest The request object containing all of the parameters for the API call.

### "Class TraceServiceClient.ListTracesFixedSizeCollection (2.88.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Class TraceServiceClient.ListTracesFixedSizeCollection (2.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListTracesFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > TraceServiceClient.ListTracesFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<TraceServiceClient.ListTracesPage> pages, int collectionSize) protected TraceServiceClient .
- ListTracesPage > pages , int collectionSize ) Parameters Name Description pages List < ListTracesPage > collectionSize int Returns Type Description TraceServiceClient.ListTracesFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListTracesFixedSizeCollection extends AbstractFixedSizeCollection<ListTracesRequest , ListTracesResponse , Trace , TraceServiceClient .

