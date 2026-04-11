---
title: "Class TraceServiceClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient
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
Service Description: This file describes an API for collecting and viewing traces and spans
within a trace. A Trace is a collection of spans corresponding to a single operation or set of
operations for an application. A span is an individual timed event which forms a node of the
trace tree. Spans for a single trace may span multiple services.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
String projectId = "projectId-894832108" ;
String traceId = "traceId-1067401920" ;
Trace response = traceServiceClient . getTrace ( projectId , traceId );
}
Note: close() needs to be called on the TraceServiceClient object to clean up resources such
as threads. In the example above, try-with-resources is used, which automatically calls close().
Methods
Method
Description
Method Variants
ListTraces
Returns of a list of traces that match the specified filter conditions.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listTraces(ListTracesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listTraces(String projectId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listTracesPagedCallable()
listTracesCallable()
GetTrace
Gets a single trace by its ID.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getTrace(GetTraceRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getTrace(String projectId, String traceId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getTraceCallable()
PatchTraces
Sends new traces to Stackdriver Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
patchTraces(PatchTracesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
patchTraces(String projectId, Traces traces)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
patchTracesCallable()
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
close()
public final void close ()
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
getTrace(GetTraceRequest request)
public final Trace getTrace ( GetTraceRequest request )
Gets a single trace by its ID.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
GetTraceRequest request =
GetTraceRequest . newBuilder ()
. setProjectId ( "projectId-894832108" )
. setTraceId ( "traceId-1067401920" )
. build ();
Trace response = traceServiceClient . getTrace ( request );
}
Parameter
Name
Description
request
GetTraceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Trace
getTrace(String projectId, String traceId)
public final Trace getTrace ( String projectId , String traceId )
Gets a single trace by its ID.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
String projectId = "projectId-894832108" ;
String traceId = "traceId-1067401920" ;
Trace response = traceServiceClient . getTrace ( projectId , traceId );
}
Parameters
Name
Description
projectId
String Required. ID of the Cloud project where the trace data is stored.
traceId
String Required. ID of the trace to return.
Returns
Type
Description
Trace
getTraceCallable()
public final UnaryCallable<GetTraceRequest , Trace > getTraceCallable ()
Gets a single trace by its ID.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
GetTraceRequest request =
GetTraceRequest . newBuilder ()
. setProjectId ( "projectId-894832108" )
. setTraceId ( "traceId-1067401920" )
. build ();
ApiFuture<Trace> future = traceServiceClient . getTraceCallable (). futureCall ( request );
// Do something.
Trace response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetTraceRequest , Trace >
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
listTraces(ListTracesRequest request)
public final TraceServiceClient . ListTracesPagedResponse listTraces ( ListTracesRequest request )
Returns of a list of traces that match the specified filter conditions.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
ListTracesRequest request =
ListTracesRequest . newBuilder ()
. setProjectId ( "projectId-894832108" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setStartTime ( Timestamp . newBuilder (). build ())
. setEndTime ( Timestamp . newBuilder (). build ())
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( Trace element : traceServiceClient . listTraces ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListTracesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
TraceServiceClient.ListTracesPagedResponse
listTraces(String projectId)
public final TraceServiceClient . ListTracesPagedResponse listTraces ( String projectId )
Returns of a list of traces that match the specified filter conditions.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
String projectId = "projectId-894832108" ;
for ( Trace element : traceServiceClient . listTraces ( projectId ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
projectId
String Required. ID of the Cloud project where the trace data is stored.
Returns
Type
Description
TraceServiceClient.ListTracesPagedResponse
listTracesCallable()
public final UnaryCallable<ListTracesRequest , ListTracesResponse > listTracesCallable ()
Returns of a list of traces that match the specified filter conditions.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
ListTracesRequest request =
ListTracesRequest . newBuilder ()
. setProjectId ( "projectId-894832108" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setStartTime ( Timestamp . newBuilder (). build ())
. setEndTime ( Timestamp . newBuilder (). build ())
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListTracesResponse response = traceServiceClient . listTracesCallable (). call ( request );
for ( Trace element : response . getTracesList ()) {
// doThingsWith(element);
}
String nextPageToken = response . getNextPageToken ();
if ( ! Strings . isNullOrEmpty ( nextPageToken )) {
request = request . toBuilder (). setPageToken ( nextPageToken ). build ();
} else {
break ;
}
}
}
Returns
Type
Description
UnaryCallable < ListTracesRequest , ListTracesResponse >
listTracesPagedCallable()
public final UnaryCallable<ListTracesRequest , TraceServiceClient . ListTracesPagedResponse > listTracesPagedCallable ()
Returns of a list of traces that match the specified filter conditions.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
ListTracesRequest request =
ListTracesRequest . newBuilder ()
. setProjectId ( "projectId-894832108" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setStartTime ( Timestamp . newBuilder (). build ())
. setEndTime ( Timestamp . newBuilder (). build ())
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<Trace> future = traceServiceClient . listTracesPagedCallable (). futureCall ( request );
// Do something.
for ( Trace element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListTracesRequest , ListTracesPagedResponse >
patchTraces(PatchTracesRequest request)
public final void patchTraces ( PatchTracesRequest request )
Sends new traces to Stackdriver Trace or updates existing traces. If the ID of a trace that you
send matches that of an existing trace, any fields in the existing trace and its spans are
overwritten by the provided values, and any new fields provided are merged with the existing
trace data. If the ID does not match, a new trace is created.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
PatchTracesRequest request =
PatchTracesRequest . newBuilder ()
. setProjectId ( "projectId-894832108" )
. setTraces ( Traces . newBuilder (). build ())
. build ();
traceServiceClient . patchTraces ( request );
}
Parameter
Name
Description
request
PatchTracesRequest The request object containing all of the parameters for the API call.
patchTraces(String projectId, Traces traces)
public final void patchTraces ( String projectId , Traces traces )
Sends new traces to Stackdriver Trace or updates existing traces. If the ID of a trace that you
send matches that of an existing trace, any fields in the existing trace and its spans are
overwritten by the provided values, and any new fields provided are merged with the existing
trace data. If the ID does not match, a new trace is created.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
String projectId = "projectId-894832108" ;
Traces traces = Traces . newBuilder (). build ();
traceServiceClient . patchTraces ( projectId , traces );
}
Parameters
Name
Description
projectId
String Required. ID of the Cloud project where the trace data is stored.
traces
Traces Required. The body of the message.
patchTracesCallable()
public final UnaryCallable<PatchTracesRequest , Empty > patchTracesCallable ()
Sends new traces to Stackdriver Trace or updates existing traces. If the ID of a trace that you
send matches that of an existing trace, any fields in the existing trace and its spans are
overwritten by the provided values, and any new fields provided are merged with the existing
trace data. If the ID does not match, a new trace is created.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( TraceServiceClient traceServiceClient = TraceServiceClient . create ()) {
PatchTracesRequest request =
PatchTracesRequest . newBuilder ()
. setProjectId ( "projectId-894832108" )
. setTraces ( Traces . newBuilder (). build ())
. build ();
ApiFuture<Empty> future = traceServiceClient . patchTracesCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < PatchTracesRequest , Empty >
shutdown()
public void shutdown ()
shutdownNow()
public void shutdownNow ()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
