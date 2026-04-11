---
title: "Class TraceServiceClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceClient
  title: "Class TraceServiceClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Class TraceServiceClient (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.80.0
2.78.0
2.76.0
2.75.0
2.74.0
2.73.0
2.72.0
2.70.0
2.68.0
2.67.0
2.64.0
2.63.0
2.62.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.7
2.2.0
2.1.13
GitHub Repository Product Reference
Service Description: Service for collecting and viewing traces and spans within a trace.
A trace is a collection of spans corresponding to a single operation or a set of operations in
an application.
A span is an individual timed event which forms a node of the trace tree. A single trace can
contain spans from multiple services.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
ProjectName name = ProjectName . of ( "[PROJECT]" );
List<Span> spans = new ArrayList <> ();
traceServiceClient . batchWriteSpans ( name , spans );
}
Note: close() needs to be called on the TraceServiceClient object to clean up resources such
as threads. In the example above, try-with-resources is used, which automatically calls close().
Methods
Method
Description
Method Variants
BatchWriteSpans
Batch writes new spans to new or existing traces. You cannot update existing spans.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
batchWriteSpans(BatchWriteSpansRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
batchWriteSpans(ProjectName name, List<Span> spans)
batchWriteSpans(String name, List<Span> spans)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
batchWriteSpansCallable()
CreateSpan
Creates a new span.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createSpan(Span request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createSpanCallable()
See the individual methods for example code.
Many parameters require resource names to be formatted in a particular way. To assist with
these names, this class includes a format method for each type of name, and additionally a parse
method to extract the individual identifiers contained within names that are returned.
This class can be customized by passing in a custom instance of TraceServiceSettings to
create(). For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
TraceServiceSettings traceServiceSettings =
TraceServiceSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
TraceServiceClient traceServiceClient = TraceServiceClient . create ( traceServiceSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
TraceServiceSettings traceServiceSettings =
TraceServiceSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
TraceServiceClient traceServiceClient = TraceServiceClient . create ( traceServiceSettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
TraceServiceSettings traceServiceSettings = TraceServiceSettings . newHttpJsonBuilder (). build ();
TraceServiceClient traceServiceClient = TraceServiceClient . create ( traceServiceSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
TraceServiceClient
Static Methods
create()
public static final TraceServiceClient create ()
Constructs an instance of TraceServiceClient with default settings.
Returns
Type
Description
TraceServiceClient
Exceptions
Type
Description
IOException
create(TraceServiceSettings settings)
public static final TraceServiceClient create ( TraceServiceSettings settings )
Constructs an instance of TraceServiceClient, using the given settings. The channels are
created based on the settings passed in, or defaults for any settings that are not set.
Parameter
Name
Description
settings
TraceServiceSettings
Returns
Type
Description
TraceServiceClient
Exceptions
Type
Description
IOException
create(TraceServiceStub stub)
public static final TraceServiceClient create ( TraceServiceStub stub )
Constructs an instance of TraceServiceClient, using the given stub for making calls. This is
for advanced usage - prefer using create(TraceServiceSettings).
Parameter
Name
Description
stub
TraceServiceStub
Returns
Type
Description
TraceServiceClient
Constructors
TraceServiceClient(TraceServiceSettings settings)
protected TraceServiceClient ( TraceServiceSettings settings )
Constructs an instance of TraceServiceClient, using the given settings. This is protected so
that it is easy to make a subclass, but otherwise, the static factory methods should be
preferred.
Parameter
Name
Description
settings
TraceServiceSettings
TraceServiceClient(TraceServiceStub stub)
protected TraceServiceClient ( TraceServiceStub stub )
Parameter
Name
Description
stub
TraceServiceStub
Methods
awaitTermination(long duration, TimeUnit unit)
public boolean awaitTermination ( long duration , TimeUnit unit )
Parameters
Name
Description
duration
long
unit
TimeUnit
Returns
Type
Description
boolean
Exceptions
Type
Description
InterruptedException
batchWriteSpans(BatchWriteSpansRequest request)
public final void batchWriteSpans ( BatchWriteSpansRequest request )
Batch writes new spans to new or existing traces. You cannot update existing spans.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
BatchWriteSpansRequest request =
BatchWriteSpansRequest . newBuilder ()
. setName ( ProjectName . of ( "[PROJECT]" ). toString ())
. addAllSpans ( new ArrayList<Span> ())
. build ();
traceServiceClient . batchWriteSpans ( request );
}
Parameter
Name
Description
request
BatchWriteSpansRequest The request object containing all of the parameters for the API call.
batchWriteSpans(ProjectName name, List<Span> spans)
public final void batchWriteSpans ( ProjectName name , List<Span> spans )
Batch writes new spans to new or existing traces. You cannot update existing spans.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
ProjectName name = ProjectName . of ( "[PROJECT]" );
List<Span> spans = new ArrayList <> ();
traceServiceClient . batchWriteSpans ( name , spans );
}
Parameters
Name
Description
name
ProjectName Required. The name of the project where the spans belong. The format is
projects/[PROJECT_ID] .
spans
List < Span > Required. A list of new spans. The span names must not match existing spans,
otherwise the results are undefined.
batchWriteSpans(String name, List<Span> spans)
public final void batchWriteSpans ( String name , List<Span> spans )
Batch writes new spans to new or existing traces. You cannot update existing spans.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
String name = ProjectName . of ( "[PROJECT]" ). toString ();
List<Span> spans = new ArrayList <> ();
traceServiceClient . batchWriteSpans ( name , spans );
}
Parameters
Name
Description
name
String Required. The name of the project where the spans belong. The format is
projects/[PROJECT_ID] .
spans
List < Span > Required. A list of new spans. The span names must not match existing spans,
otherwise the results are undefined.
batchWriteSpansCallable()
public final UnaryCallable<BatchWriteSpansRequest , Empty > batchWriteSpansCallable ()
Batch writes new spans to new or existing traces. You cannot update existing spans.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
BatchWriteSpansRequest request =
BatchWriteSpansRequest . newBuilder ()
. setName ( ProjectName . of ( "[PROJECT]" ). toString ())
. addAllSpans ( new ArrayList<Span> ())
. build ();
ApiFuture<Empty> future = traceServiceClient . batchWriteSpansCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < BatchWriteSpansRequest , Empty >
close()
public final void close ()
createSpan(Span request)
public final Span createSpan ( Span request )
Creates a new span.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
Span request =
Span . newBuilder ()
. setName ( SpanName . of ( "[PROJECT]" , "[TRACE]" , "[SPAN]" ). toString ())
. setSpanId ( "spanId-896182779" )
. setParentSpanId ( "parentSpanId1059234639" )
. setDisplayName ( TruncatableString . newBuilder (). build ())
. setStartTime ( Timestamp . newBuilder (). build ())
. setEndTime ( Timestamp . newBuilder (). build ())
. setAttributes ( Span . Attributes . newBuilder (). build ())
. setStackTrace ( StackTrace . newBuilder (). build ())
. setTimeEvents ( Span . TimeEvents . newBuilder (). build ())
. setLinks ( Span . Links . newBuilder (). build ())
. setStatus ( Status . newBuilder (). build ())
. setSameProcessAsParentSpan ( BoolValue . newBuilder (). build ())
. setChildSpanCount ( Int32Value . newBuilder (). build ())
. build ();
Span response = traceServiceClient . createSpan ( request );
}
Parameter
Name
Description
request
Span The request object containing all of the parameters for the API call.
Returns
Type
Description
Span
createSpanCallable()
public final UnaryCallable<Span , Span > createSpanCallable ()
Creates a new span.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
Span request =
Span . newBuilder ()
. setName ( SpanName . of ( "[PROJECT]" , "[TRACE]" , "[SPAN]" ). toString ())
. setSpanId ( "spanId-896182779" )
. setParentSpanId ( "parentSpanId1059234639" )
. setDisplayName ( TruncatableString . newBuilder (). build ())
. setStartTime ( Timestamp . newBuilder (). build ())
. setEndTime ( Timestamp . newBuilder (). build ())
. setAttributes ( Span . Attributes . newBuilder (). build ())
. setStackTrace ( StackTrace . newBuilder (). build ())
. setTimeEvents ( Span . TimeEvents . newBuilder (). build ())
. setLinks ( Span . Links . newBuilder (). build ())
. setStatus ( Status . newBuilder (). build ())
. setSameProcessAsParentSpan ( BoolValue . newBuilder (). build ())
. setChildSpanCount ( Int32Value . newBuilder (). build ())
. build ();
ApiFuture<Span> future = traceServiceClient . createSpanCallable (). futureCall ( request );
// Do something.
Span response = future . get ();
}
Returns
Type
Description
UnaryCallable < Span , Span >
getSettings()
public final TraceServiceSettings getSettings ()
Returns
Type
Description
TraceServiceSettings
getStub()
public TraceServiceStub getStub ()
Returns
Type
Description
TraceServiceStub
isShutdown()
public boolean isShutdown ()
Returns
Type
Description
boolean
isTerminated()
public boolean isTerminated ()
Returns
Type
Description
boolean
shutdown()
public void shutdown ()
shutdownNow()
public void shutdownNow ()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
