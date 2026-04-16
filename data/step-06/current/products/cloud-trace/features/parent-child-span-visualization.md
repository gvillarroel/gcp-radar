---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.012Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Parent-child span visualization"
feature_slug: "parent-child-span-visualization"
latest_feature_date: "2017-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan"
  - "https://docs.cloud.google.com/trace/docs/reference/v1/rest/v1/projects.traces"
  - "https://docs.cloud.google.com/trace/docs/reference/trace-schema"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceClient"
keywords:
  - "parent"
  - "child"
  - "span"
  - "visualization"
  - "trace"
  - "viewer"
  - "visualizes"
  - "relationships"
---

# Parent-child span visualization

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Trace Viewer visualizes parent-child relationships between trace spans and lets users expand or collapse parent spans.

## Extended Definition

Trace Viewer visualizes parent-child relationships between trace spans and lets users expand or collapse parent spans.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan)
- [https://docs.cloud.google.com/trace/docs/reference/v1/rest/v1/projects.traces](https://docs.cloud.google.com/trace/docs/reference/v1/rest/v1/projects.traces)
- [https://docs.cloud.google.com/trace/docs/reference/trace-schema](https://docs.cloud.google.com/trace/docs/reference/trace-schema)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceClient)

## Supporting Pages

### "Class TraceSpan (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.types.TraceSpan)
- Source ID: `site-python-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Can be used to specify additional relationships between spans in addition to a parent/child relationship.
- For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans. start time google.protobuf.timestamp pb2.Timestamp Start time of the span in nanoseconds from the UNIX epoch. end time google.protobuf.timestamp pb2.Timestamp End time of the span in nanoseconds from the UNIX epoch. parent span id int Optional.
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.0 1.9.1 1.8.0 1.7.3 1.6.2 1.5.1 1.4.0 1.3.4 1.2.0 1.1.0 1.0.0 0.24.2 0.23.0 0.22.1 TraceSpan ( mapping = None , , ignore unknown fields = False , kwargs ) A span represents a single timed event within a trace.
- Home Documentation Developer tools Python Client libraries Send feedback Class TraceSpan (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

### REST Resource: projects.traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/reference/v1/rest/v1/projects.traces](https://docs.cloud.google.com/trace/docs/reference/v1/rest/v1/projects.traces)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Can be used to specify additional relationships between spans in addition to a parent/child relationship.
- JSON representation { "spanId" : string , "kind" : enum ( SpanKind ) , "name" : string , "startTime" : string , "endTime" : string , "parentSpanId" : string , "labels" : { string : string , ... } } Fields spanId string ( uint64 format) Identifier for the span.
- For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans. startTime string ( Timestamp format) Start time of the span in seconds and nanoseconds from the UNIX epoch.
- JSON representation { "projectId" : string , "traceId" : string , "spans" : [ { object ( TraceSpan ) } ] } Fields projectId string Project ID of the Cloud project where the trace data is stored. traceId string Globally unique identifier for the trace.

### Storage schema for trace data \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/reference/trace-schema](https://docs.cloud.google.com/trace/docs/reference/trace-schema)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The parent-child relationship between spans is used by visualization tools to construct the tree structure. name string Required.
- OpenTelemetry libraries automatically record the value of the tracestate header when they generate spans. parent span id string Optional.
- The trace id is used by visualization and analysis tools to identify the spans associated with a trace.
- That API doesn't validate that the data conforms to the declared schema. apphub record without repeated fields Application-specific labels are available when trace spans are generated by App Hub applications, when those applications run on supported infrastructure or have been instrumented .

### "Class TraceServiceClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceClient)
- Source ID: `site-java-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Links . newBuilder (). build ()) . setStatus ( Status . newBuilder (). build ()) . setSameProcessAsParentSpan ( BoolValue . newBuilder (). build ()) . setChildSpanCount ( Int32Value . newBuilder (). build ()) . build (); Span response = traceServiceClient . createSpan ( request ); } Parameter Name Description request Span The request object containing all of the parameters for the API call.
- Links . newBuilder (). build ()) . setStatus ( Status . newBuilder (). build ()) . setSameProcessAsParentSpan ( BoolValue . newBuilder (). build ()) . setChildSpanCount ( Int32Value . newBuilder (). build ()) . build (); ApiFuture<Span> future = traceServiceClient . createSpanCallable (). futureCall ( request ); // Do something.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) { Span request = Span . newBuilder () . setName ( SpanName . of ( "[PROJECT]" , "[TRACE]" , "[SPAN]" ). toString ()) . setSpanId ( "spanId-896182779" ) . setParentSpanId ( "parentSpanId1059234639" ) . setDisplayName ( TruncatableString . newBuilder (). build ()) . setStartTime ( Timestamp . newBuilder (). build ()) . setEndTime ( Timestamp . newBuilder (). build ()) . setAttributes ( Span .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) { Span request = Span . newBuilder () . setName ( SpanName . of ( "[PROJECT]" , "[TRACE]" , "[SPAN]" ). toString ()) . setSpanId ( "spanId-896182779" ) . setParentSpanId ( "parentSpanId1059234639" ) . setDisplayName ( TruncatableString . newBuilder (). build ()) . setStartTime ( Timestamp . newBuilder (). build ()) . setEndTime ( Timestamp . newBuilder (). build ()) . setAttributes ( Span .

