---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.011Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Stackdriver Trace API v2"
feature_slug: "stackdriver-trace-api-v2"
latest_feature_date: "2017-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient"
  - "https://docs.cloud.google.com/trace/docs/reference/v2/rest"
keywords:
  - "stackdriver"
  - "trace"
  - "api"
  - "v2"
  - "provides"
  - "the"
  - "next"
  - "version"
---

# Stackdriver Trace API v2

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Stackdriver Trace API v2 provides the next version of the Trace API.

## Extended Definition

Stackdriver Trace API v2 provides the next version of the Trace API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient)
- [https://docs.cloud.google.com/trace/docs/reference/v2/rest](https://docs.cloud.google.com/trace/docs/reference/v2/rest)

## Supporting Pages

### "Class TraceServiceClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient)
- Source ID: `site-java-reference`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) { ListTracesRequest request = ListTracesRequest . newBuilder () . setProjectId ( "projectId-894832108" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setStartTime ( Timestamp . newBuilder (). build ()) . setEndTime ( Timestamp . newBuilder (). build ()) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Trace> future = traceServiceClient . listTracesPagedCallable (). futureCall ( request ); // Do something. for ( Trace element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListTracesRequest , ListTracesPagedResponse > patchTraces(PatchTracesRequest request) public final void patchTraces ( PatchTracesRequest request ) Sends new traces to Stackdriver Trace or updates existing traces.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) { PatchTracesRequest request = PatchTracesRequest . newBuilder () . setProjectId ( "projectId-894832108" ) . setTraces ( Traces . newBuilder (). build ()) . build (); traceServiceClient . patchTraces ( request ); } Parameter Name Description request PatchTracesRequest The request object containing all of the parameters for the API call. patchTraces(String projectId, Traces traces) public final void patchTraces ( String projectId , Traces traces ) Sends new traces to Stackdriver Trace or updates existing traces.
- Request object method variants only take one parameter, a request object, which must be constructed before the call. getTrace(GetTraceRequest request) "Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method. getTrace(String projectId, String traceId) Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service. getTraceCallable() PatchTraces Sends new traces to Stackdriver Trace or updates existing traces.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) { PatchTracesRequest request = PatchTracesRequest . newBuilder () . setProjectId ( "projectId-894832108" ) . setTraces ( Traces . newBuilder (). build ()) . build (); ApiFuture<Empty> future = traceServiceClient . patchTracesCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < PatchTracesRequest , Empty > shutdown() public void shutdown () shutdownNow() public void shutdownNow () Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class TraceServiceAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import trace v2 async def sample batch write spans(): Create a client client = trace v2.TraceServiceAsyncClient() Initialize request argument(s) spans = trace v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import trace v2 async def sample create span(): Create a client client = trace v2.TraceServiceAsyncClient() Initialize request argument(s) request = trace v2.
- There might be gaps or overlaps between spans in a trace. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Span ( name="name value", span id="span id value", ) Make the request response = await client. create span (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.trace v2.types.Span , dict]] The request object.

### "Class TraceServiceClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v2.services.trace_service.TraceServiceClient)
- Source ID: `site-python-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import trace v2 def sample batch write spans(): Create a client client = trace v2.TraceServiceClient() Initialize request argument(s) spans = trace v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import trace v2 def sample create span(): Create a client client = trace v2.TraceServiceClient() Initialize request argument(s) request = trace v2.
- There might be gaps or overlaps between spans in a trace. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Span ( name="name value", span id="span id value", ) Make the request response = client. create span (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.trace v2.types.Span , dict] The request object.

### Cloud Trace API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/reference/v2/rest](https://docs.cloud.google.com/trace/docs/reference/v2/rest)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- This service provides the following discovery documents: https://cloudtrace.googleapis.com/$discovery/rest?version=v2 https://cloudtrace.googleapis.com/$discovery/rest?version=v2beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudtrace.googleapis.com REST Resource: v2beta1.projects.traceSinks Methods create POST /v2beta1/{parent=projects/ }/traceSinks Creates a sink that exports trace spans to a destination. delete DELETE /v2beta1/{name=projects/ /traceSinks/ } Deletes a sink. get GET /v2beta1/{name=projects/ /traceSinks/ } Get a trace sink by name under the parent resource (GCP project). list GET /v2beta1/{parent=projects/ }/traceSinks List all sinks for the parent resource (GCP project). patch PATCH /v2beta1/{name=projects/ /traceSinks/ } Updates a sink.
- REST Resource: v2beta1.projects.traceSinks REST Resource: v2.projects.traces REST Resource: v2.projects.traces.spans Service: cloudtrace.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This library is used to interact with the Cloud Trace API directly.

