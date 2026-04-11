---
title: "Class BuildsClient (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsClient
  title: "Class BuildsClient (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class BuildsClient (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.5
0.2.1
0.1.2
GitHub Repository Product Reference REST Documentation RPC Documentation
Service Description: Cloud Run Build Control Plane API
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( BuildsClient buildsClient = BuildsClient . create ()) {
SubmitBuildRequest request =
SubmitBuildRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setImageUri ( "imageUri-859610607" )
. setServiceAccount ( "serviceAccount1079137720" )
. setWorkerPool (
BuildWorkerPoolName . of ( "[PROJECT]" , "[LOCATION]" , "[WORKER_POOL]" ). toString ())
. addAllTags ( new ArrayList<String> ())
. setMachineType ( "machineType-218117087" )
. setReleaseTrack ( LaunchStage . forNumber ( 0 ))
. setClient ( "client-1357712437" )
. build ();
SubmitBuildResponse response = buildsClient . submitBuild ( request );
}
Note: close() needs to be called on the BuildsClient object to clean up resources such as
threads. In the example above, try-with-resources is used, which automatically calls close().
Methods
Method
Description
Method Variants
SubmitBuild
Submits a build in a given project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
submitBuild(SubmitBuildRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
submitBuildCallable()
See the individual methods for example code.
Many parameters require resource names to be formatted in a particular way. To assist with
these names, this class includes a format method for each type of name, and additionally a parse
method to extract the individual identifiers contained within names that are returned.
This class can be customized by passing in a custom instance of BuildsSettings to create().
For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
BuildsSettings buildsSettings =
BuildsSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
BuildsClient buildsClient = BuildsClient . create ( buildsSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
BuildsSettings buildsSettings = BuildsSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
BuildsClient buildsClient = BuildsClient . create ( buildsSettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
BuildsSettings buildsSettings = BuildsSettings . newHttpJsonBuilder (). build ();
BuildsClient buildsClient = BuildsClient . create ( buildsSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
BuildsClient
Static Methods
create()
public static final BuildsClient create ()
Constructs an instance of BuildsClient with default settings.
Returns
Type
Description
BuildsClient
Exceptions
Type
Description
IOException
create(BuildsSettings settings)
public static final BuildsClient create ( BuildsSettings settings )
Constructs an instance of BuildsClient, using the given settings. The channels are created
based on the settings passed in, or defaults for any settings that are not set.
Parameter
Name
Description
settings
BuildsSettings
Returns
Type
Description
BuildsClient
Exceptions
Type
Description
IOException
create(BuildsStub stub)
public static final BuildsClient create ( BuildsStub stub )
Constructs an instance of BuildsClient, using the given stub for making calls. This is for
advanced usage - prefer using create(BuildsSettings).
Parameter
Name
Description
stub
BuildsStub
Returns
Type
Description
BuildsClient
Constructors
BuildsClient(BuildsSettings settings)
protected BuildsClient ( BuildsSettings settings )
Constructs an instance of BuildsClient, using the given settings. This is protected so that it
is easy to make a subclass, but otherwise, the static factory methods should be preferred.
Parameter
Name
Description
settings
BuildsSettings
BuildsClient(BuildsStub stub)
protected BuildsClient ( BuildsStub stub )
Parameter
Name
Description
stub
BuildsStub
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
public final BuildsSettings getSettings ()
Returns
Type
Description
BuildsSettings
getStub()
public BuildsStub getStub ()
Returns
Type
Description
BuildsStub
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
submitBuild(SubmitBuildRequest request)
public final SubmitBuildResponse submitBuild ( SubmitBuildRequest request )
Submits a build in a given project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( BuildsClient buildsClient = BuildsClient . create ()) {
SubmitBuildRequest request =
SubmitBuildRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setImageUri ( "imageUri-859610607" )
. setServiceAccount ( "serviceAccount1079137720" )
. setWorkerPool (
BuildWorkerPoolName . of ( "[PROJECT]" , "[LOCATION]" , "[WORKER_POOL]" ). toString ())
. addAllTags ( new ArrayList<String> ())
. setMachineType ( "machineType-218117087" )
. setReleaseTrack ( LaunchStage . forNumber ( 0 ))
. setClient ( "client-1357712437" )
. build ();
SubmitBuildResponse response = buildsClient . submitBuild ( request );
}
Parameter
Name
Description
request
SubmitBuildRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
SubmitBuildResponse
submitBuildCallable()
public final UnaryCallable<SubmitBuildRequest , SubmitBuildResponse > submitBuildCallable ()
Submits a build in a given project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( BuildsClient buildsClient = BuildsClient . create ()) {
SubmitBuildRequest request =
SubmitBuildRequest . newBuilder ()
. setParent ( "parent-995424086" )
. setImageUri ( "imageUri-859610607" )
. setServiceAccount ( "serviceAccount1079137720" )
. setWorkerPool (
BuildWorkerPoolName . of ( "[PROJECT]" , "[LOCATION]" , "[WORKER_POOL]" ). toString ())
. addAllTags ( new ArrayList<String> ())
. setMachineType ( "machineType-218117087" )
. setReleaseTrack ( LaunchStage . forNumber ( 0 ))
. setClient ( "client-1357712437" )
. build ();
ApiFuture<SubmitBuildResponse> future =
buildsClient . submitBuildCallable (). futureCall ( request );
// Do something.
SubmitBuildResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < SubmitBuildRequest , SubmitBuildResponse >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
