---
title: "Class ExportServiceClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ExportServiceClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ExportServiceClient
  title: "Class ExportServiceClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\
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
Class ExportServiceClient (2.88.0)
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
2.3.5
2.2.0
2.1.10
GitHub Repository Product Reference
Service Description: Service allows existing Cloud Profiler customers to export their profile
data out of Google Cloud.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ExportServiceClient exportServiceClient = ExportServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
for ( Profile element : exportServiceClient . listProfiles ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Note: close() needs to be called on the ExportServiceClient object to clean up resources such
as threads. In the example above, try-with-resources is used, which automatically calls close().
Methods
Method
Description
Method Variants
ListProfiles
Lists profiles which have been collected so far and for which the caller has permission to view.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listProfiles(ListProfilesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listProfiles(ProjectName parent)
listProfiles(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listProfilesPagedCallable()
listProfilesCallable()
See the individual methods for example code.
Many parameters require resource names to be formatted in a particular way. To assist with
these names, this class includes a format method for each type of name, and additionally a parse
method to extract the individual identifiers contained within names that are returned.
This class can be customized by passing in a custom instance of ExportServiceSettings to
create(). For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
ExportServiceSettings exportServiceSettings =
ExportServiceSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
ExportServiceClient exportServiceClient = ExportServiceClient . create ( exportServiceSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
ExportServiceSettings exportServiceSettings =
ExportServiceSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
ExportServiceClient exportServiceClient = ExportServiceClient . create ( exportServiceSettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
ExportServiceSettings exportServiceSettings =
ExportServiceSettings . newHttpJsonBuilder (). build ();
ExportServiceClient exportServiceClient = ExportServiceClient . create ( exportServiceSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
ExportServiceClient
Static Methods
create()
public static final ExportServiceClient create ()
Constructs an instance of ExportServiceClient with default settings.
Returns
Type
Description
ExportServiceClient
Exceptions
Type
Description
IOException
create(ExportServiceSettings settings)
public static final ExportServiceClient create ( ExportServiceSettings settings )
Constructs an instance of ExportServiceClient, using the given settings. The channels are
created based on the settings passed in, or defaults for any settings that are not set.
Parameter
Name
Description
settings
ExportServiceSettings
Returns
Type
Description
ExportServiceClient
Exceptions
Type
Description
IOException
create(ExportServiceStub stub)
public static final ExportServiceClient create ( ExportServiceStub stub )
Constructs an instance of ExportServiceClient, using the given stub for making calls. This is
for advanced usage - prefer using create(ExportServiceSettings).
Parameter
Name
Description
stub
ExportServiceStub
Returns
Type
Description
ExportServiceClient
Constructors
ExportServiceClient(ExportServiceSettings settings)
protected ExportServiceClient ( ExportServiceSettings settings )
Constructs an instance of ExportServiceClient, using the given settings. This is protected so
that it is easy to make a subclass, but otherwise, the static factory methods should be
preferred.
Parameter
Name
Description
settings
ExportServiceSettings
ExportServiceClient(ExportServiceStub stub)
protected ExportServiceClient ( ExportServiceStub stub )
Parameter
Name
Description
stub
ExportServiceStub
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
public final ExportServiceSettings getSettings ()
Returns
Type
Description
ExportServiceSettings
getStub()
public ExportServiceStub getStub ()
Returns
Type
Description
ExportServiceStub
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
listProfiles(ListProfilesRequest request)
public final ExportServiceClient . ListProfilesPagedResponse listProfiles ( ListProfilesRequest request )
Lists profiles which have been collected so far and for which the caller has permission to
view.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ExportServiceClient exportServiceClient = ExportServiceClient . create ()) {
ListProfilesRequest request =
ListProfilesRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Profile element : exportServiceClient . listProfiles ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListProfilesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ExportServiceClient.ListProfilesPagedResponse
listProfiles(ProjectName parent)
public final ExportServiceClient . ListProfilesPagedResponse listProfiles ( ProjectName parent )
Lists profiles which have been collected so far and for which the caller has permission to
view.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ExportServiceClient exportServiceClient = ExportServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
for ( Profile element : exportServiceClient . listProfiles ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
ProjectName Required. The parent, which owns this collection of profiles. Format:
projects/{user_project_id}
Returns
Type
Description
ExportServiceClient.ListProfilesPagedResponse
listProfiles(String parent)
public final ExportServiceClient . ListProfilesPagedResponse listProfiles ( String parent )
Lists profiles which have been collected so far and for which the caller has permission to
view.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ExportServiceClient exportServiceClient = ExportServiceClient . create ()) {
String parent = ProjectName . of ( "[PROJECT]" ). toString ();
for ( Profile element : exportServiceClient . listProfiles ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The parent, which owns this collection of profiles. Format:
projects/{user_project_id}
Returns
Type
Description
ExportServiceClient.ListProfilesPagedResponse
listProfilesCallable()
public final UnaryCallable<ListProfilesRequest , ListProfilesResponse > listProfilesCallable ()
Lists profiles which have been collected so far and for which the caller has permission to
view.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ExportServiceClient exportServiceClient = ExportServiceClient . create ()) {
ListProfilesRequest request =
ListProfilesRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListProfilesResponse response = exportServiceClient . listProfilesCallable (). call ( request );
for ( Profile element : response . getProfilesList ()) {
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
UnaryCallable < ListProfilesRequest , ListProfilesResponse >
listProfilesPagedCallable()
public final UnaryCallable<ListProfilesRequest , ExportServiceClient . ListProfilesPagedResponse > listProfilesPagedCallable ()
Lists profiles which have been collected so far and for which the caller has permission to
view.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( ExportServiceClient exportServiceClient = ExportServiceClient . create ()) {
ListProfilesRequest request =
ListProfilesRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Profile> future =
exportServiceClient . listProfilesPagedCallable (). futureCall ( request );
// Do something.
for ( Profile element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListProfilesRequest , ListProfilesPagedResponse >
shutdown()
public void shutdown ()
shutdownNow()
public void shutdownNow ()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
