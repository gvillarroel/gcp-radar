---
title: "Class DataFusionClient (1.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient
  title: "Class DataFusionClient (1.88.0) \_|\_ Java client libraries \_|\_ Google\
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
Class DataFusionClient (1.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.88.0 (latest)
1.87.0
1.85.0
1.83.0
1.82.0
1.81.0
1.80.0
1.78.0
1.76.0
1.75.0
1.74.0
1.73.0
1.72.0
1.70.0
1.68.0
1.67.0
1.64.0
1.63.0
1.62.0
1.60.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.51.0
1.49.0
1.48.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.39.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.27.0
1.24.0
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.4.0
1.1.1
GitHub Repository Product Reference REST Documentation
Service Description: Service for creating and managing Data Fusion instances. Data Fusion enables
ETL developers to build code-free, data integration pipelines via a point-and-click UI.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
GetInstanceRequest request =
GetInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
Instance response = dataFusionClient . getInstance ( request );
}
Note: close() needs to be called on the DataFusionClient object to clean up resources such as
threads. In the example above, try-with-resources is used, which automatically calls close().
Methods
Method
Description
Method Variants
ListAvailableVersions
Lists possible versions for Data Fusion instances in the specified project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listAvailableVersions(ListAvailableVersionsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listAvailableVersions(LocationName parent)
listAvailableVersions(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listAvailableVersionsPagedCallable()
listAvailableVersionsCallable()
ListInstances
Lists Data Fusion instances in the specified project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listInstances(ListInstancesRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listInstancesPagedCallable()
listInstancesCallable()
GetInstance
Gets details of a single Data Fusion instance.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getInstance(GetInstanceRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getInstanceCallable()
CreateInstance
Creates a new Data Fusion instance in the specified project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createInstanceAsync(CreateInstanceRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createInstanceAsync(LocationName parent, Instance instance, String instanceId)
createInstanceAsync(String parent, Instance instance, String instanceId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createInstanceOperationCallable()
createInstanceCallable()
DeleteInstance
Deletes a single Date Fusion instance.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteInstanceAsync(DeleteInstanceRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteInstanceAsync(InstanceName name)
deleteInstanceAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteInstanceOperationCallable()
deleteInstanceCallable()
UpdateInstance
Updates a single Data Fusion instance.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateInstanceAsync(UpdateInstanceRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
updateInstanceAsync(Instance instance, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateInstanceOperationCallable()
updateInstanceCallable()
RestartInstance
Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
restartInstanceAsync(RestartInstanceRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
restartInstanceOperationCallable()
restartInstanceCallable()
See the individual methods for example code.
Many parameters require resource names to be formatted in a particular way. To assist with
these names, this class includes a format method for each type of name, and additionally a parse
method to extract the individual identifiers contained within names that are returned.
This class can be customized by passing in a custom instance of DataFusionSettings to
create(). For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
DataFusionSettings dataFusionSettings =
DataFusionSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
DataFusionClient dataFusionClient = DataFusionClient . create ( dataFusionSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
DataFusionSettings dataFusionSettings =
DataFusionSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
DataFusionClient dataFusionClient = DataFusionClient . create ( dataFusionSettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
DataFusionSettings dataFusionSettings = DataFusionSettings . newHttpJsonBuilder (). build ();
DataFusionClient dataFusionClient = DataFusionClient . create ( dataFusionSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
DataFusionClient
Static Methods
create()
public static final DataFusionClient create ()
Constructs an instance of DataFusionClient with default settings.
Returns
Type
Description
DataFusionClient
Exceptions
Type
Description
IOException
create(DataFusionSettings settings)
public static final DataFusionClient create ( DataFusionSettings settings )
Constructs an instance of DataFusionClient, using the given settings. The channels are created
based on the settings passed in, or defaults for any settings that are not set.
Parameter
Name
Description
settings
DataFusionSettings
Returns
Type
Description
DataFusionClient
Exceptions
Type
Description
IOException
create(DataFusionStub stub)
public static final DataFusionClient create ( DataFusionStub stub )
Constructs an instance of DataFusionClient, using the given stub for making calls. This is for
advanced usage - prefer using create(DataFusionSettings).
Parameter
Name
Description
stub
DataFusionStub
Returns
Type
Description
DataFusionClient
Constructors
DataFusionClient(DataFusionSettings settings)
protected DataFusionClient ( DataFusionSettings settings )
Constructs an instance of DataFusionClient, using the given settings. This is protected so that
it is easy to make a subclass, but otherwise, the static factory methods should be preferred.
Parameter
Name
Description
settings
DataFusionSettings
DataFusionClient(DataFusionStub stub)
protected DataFusionClient ( DataFusionStub stub )
Parameter
Name
Description
stub
DataFusionStub
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
createInstanceAsync(CreateInstanceRequest request)
public final OperationFuture<Instance , OperationMetadata > createInstanceAsync ( CreateInstanceRequest request )
Creates a new Data Fusion instance in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
CreateInstanceRequest request =
CreateInstanceRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setInstanceId ( "instanceId902024336" )
. setInstance ( Instance . newBuilder (). build ())
. build ();
Instance response = dataFusionClient . createInstanceAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateInstanceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
createInstanceAsync(LocationName parent, Instance instance, String instanceId)
public final OperationFuture<Instance , OperationMetadata > createInstanceAsync ( LocationName parent , Instance instance , String instanceId )
Creates a new Data Fusion instance in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
Instance instance = Instance . newBuilder (). build ();
String instanceId = "instanceId902024336" ;
Instance response = dataFusionClient . createInstanceAsync ( parent , instance , instanceId ). get ();
}
Parameters
Name
Description
parent
LocationName Required. The instance's project and location in the format
projects/{project}/locations/{location}.
instance
Instance An instance resource.
instanceId
String Required. The name of the instance to create.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
createInstanceAsync(String parent, Instance instance, String instanceId)
public final OperationFuture<Instance , OperationMetadata > createInstanceAsync ( String parent , Instance instance , String instanceId )
Creates a new Data Fusion instance in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
Instance instance = Instance . newBuilder (). build ();
String instanceId = "instanceId902024336" ;
Instance response = dataFusionClient . createInstanceAsync ( parent , instance , instanceId ). get ();
}
Parameters
Name
Description
parent
String Required. The instance's project and location in the format
projects/{project}/locations/{location}.
instance
Instance An instance resource.
instanceId
String Required. The name of the instance to create.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
createInstanceCallable()
public final UnaryCallable<CreateInstanceRequest , Operation > createInstanceCallable ()
Creates a new Data Fusion instance in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
CreateInstanceRequest request =
CreateInstanceRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setInstanceId ( "instanceId902024336" )
. setInstance ( Instance . newBuilder (). build ())
. build ();
ApiFuture<Operation> future = dataFusionClient . createInstanceCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateInstanceRequest , Operation >
createInstanceOperationCallable()
public final OperationCallable<CreateInstanceRequest , Instance , OperationMetadata > createInstanceOperationCallable ()
Creates a new Data Fusion instance in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
CreateInstanceRequest request =
CreateInstanceRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setInstanceId ( "instanceId902024336" )
. setInstance ( Instance . newBuilder (). build ())
. build ();
OperationFuture<Instance , OperationMetadata > future =
dataFusionClient . createInstanceOperationCallable (). futureCall ( request );
// Do something.
Instance response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateInstanceRequest , Instance , OperationMetadata >
deleteInstanceAsync(DeleteInstanceRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteInstanceAsync ( DeleteInstanceRequest request )
Deletes a single Date Fusion instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
DeleteInstanceRequest request =
DeleteInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
dataFusionClient . deleteInstanceAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteInstanceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteInstanceAsync(InstanceName name)
public final OperationFuture<Empty , OperationMetadata > deleteInstanceAsync ( InstanceName name )
Deletes a single Date Fusion instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
InstanceName name = InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" );
dataFusionClient . deleteInstanceAsync ( name ). get ();
}
Parameter
Name
Description
name
InstanceName Required. The instance resource name in the format
projects/{project}/locations/{location}/instances/{instance}
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteInstanceAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteInstanceAsync ( String name )
Deletes a single Date Fusion instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
String name = InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ();
dataFusionClient . deleteInstanceAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. The instance resource name in the format
projects/{project}/locations/{location}/instances/{instance}
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteInstanceCallable()
public final UnaryCallable<DeleteInstanceRequest , Operation > deleteInstanceCallable ()
Deletes a single Date Fusion instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
DeleteInstanceRequest request =
DeleteInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
ApiFuture<Operation> future = dataFusionClient . deleteInstanceCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteInstanceRequest , Operation >
deleteInstanceOperationCallable()
public final OperationCallable<DeleteInstanceRequest , Empty , OperationMetadata > deleteInstanceOperationCallable ()
Deletes a single Date Fusion instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
DeleteInstanceRequest request =
DeleteInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
OperationFuture<Empty , OperationMetadata > future =
dataFusionClient . deleteInstanceOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteInstanceRequest , Empty , OperationMetadata >
getHttpJsonOperationsClient()
public final OperationsClient getHttpJsonOperationsClient ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Returns the OperationsClient that can be used to query the status of a long-running operation
returned by another API method call.
Returns
Type
Description
OperationsClient
getInstance(GetInstanceRequest request)
public final Instance getInstance ( GetInstanceRequest request )
Gets details of a single Data Fusion instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
GetInstanceRequest request =
GetInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
Instance response = dataFusionClient . getInstance ( request );
}
Parameter
Name
Description
request
GetInstanceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Instance
getInstanceCallable()
public final UnaryCallable<GetInstanceRequest , Instance > getInstanceCallable ()
Gets details of a single Data Fusion instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
GetInstanceRequest request =
GetInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
ApiFuture<Instance> future = dataFusionClient . getInstanceCallable (). futureCall ( request );
// Do something.
Instance response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetInstanceRequest , Instance >
getOperationsClient()
public final OperationsClient getOperationsClient ()
Returns the OperationsClient that can be used to query the status of a long-running operation
returned by another API method call.
Returns
Type
Description
OperationsClient
getSettings()
public final DataFusionSettings getSettings ()
Returns
Type
Description
DataFusionSettings
getStub()
public DataFusionStub getStub ()
Returns
Type
Description
DataFusionStub
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
listAvailableVersions(ListAvailableVersionsRequest request)
public final DataFusionClient . ListAvailableVersionsPagedResponse listAvailableVersions ( ListAvailableVersionsRequest request )
Lists possible versions for Data Fusion instances in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
ListAvailableVersionsRequest request =
ListAvailableVersionsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setLatestPatchOnly ( true )
. build ();
for ( Version element : dataFusionClient . listAvailableVersions ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListAvailableVersionsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
DataFusionClient.ListAvailableVersionsPagedResponse
listAvailableVersions(LocationName parent)
public final DataFusionClient . ListAvailableVersionsPagedResponse listAvailableVersions ( LocationName parent )
Lists possible versions for Data Fusion instances in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( Version element : dataFusionClient . listAvailableVersions ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. The project and location for which to retrieve instance information in
the format projects/{project}/locations/{location}.
Returns
Type
Description
DataFusionClient.ListAvailableVersionsPagedResponse
listAvailableVersions(String parent)
public final DataFusionClient . ListAvailableVersionsPagedResponse listAvailableVersions ( String parent )
Lists possible versions for Data Fusion instances in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( Version element : dataFusionClient . listAvailableVersions ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The project and location for which to retrieve instance information in
the format projects/{project}/locations/{location}.
Returns
Type
Description
DataFusionClient.ListAvailableVersionsPagedResponse
listAvailableVersionsCallable()
public final UnaryCallable<ListAvailableVersionsRequest , ListAvailableVersionsResponse > listAvailableVersionsCallable ()
Lists possible versions for Data Fusion instances in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
ListAvailableVersionsRequest request =
ListAvailableVersionsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setLatestPatchOnly ( true )
. build ();
while ( true ) {
ListAvailableVersionsResponse response =
dataFusionClient . listAvailableVersionsCallable (). call ( request );
for ( Version element : response . getAvailableVersionsList ()) {
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
UnaryCallable < ListAvailableVersionsRequest , ListAvailableVersionsResponse >
listAvailableVersionsPagedCallable()
public final UnaryCallable<ListAvailableVersionsRequest , DataFusionClient . ListAvailableVersionsPagedResponse > listAvailableVersionsPagedCallable ()
Lists possible versions for Data Fusion instances in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
ListAvailableVersionsRequest request =
ListAvailableVersionsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setLatestPatchOnly ( true )
. build ();
ApiFuture<Version> future =
dataFusionClient . listAvailableVersionsPagedCallable (). futureCall ( request );
// Do something.
for ( Version element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListAvailableVersionsRequest , ListAvailableVersionsPagedResponse >
listInstances(ListInstancesRequest request)
public final DataFusionClient . ListInstancesPagedResponse listInstances ( ListInstancesRequest request )
Lists Data Fusion instances in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
ListInstancesRequest request =
ListInstancesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( Instance element : dataFusionClient . listInstances ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListInstancesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
DataFusionClient.ListInstancesPagedResponse
listInstancesCallable()
public final UnaryCallable<ListInstancesRequest , ListInstancesResponse > listInstancesCallable ()
Lists Data Fusion instances in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
ListInstancesRequest request =
ListInstancesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListInstancesResponse response = dataFusionClient . listInstancesCallable (). call ( request );
for ( Instance element : response . getInstancesList ()) {
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
UnaryCallable < ListInstancesRequest , ListInstancesResponse >
listInstancesPagedCallable()
public final UnaryCallable<ListInstancesRequest , DataFusionClient . ListInstancesPagedResponse > listInstancesPagedCallable ()
Lists Data Fusion instances in the specified project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
ListInstancesRequest request =
ListInstancesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<Instance> future =
dataFusionClient . listInstancesPagedCallable (). futureCall ( request );
// Do something.
for ( Instance element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListInstancesRequest , ListInstancesPagedResponse >
restartInstanceAsync(RestartInstanceRequest request)
public final OperationFuture<Instance , OperationMetadata > restartInstanceAsync ( RestartInstanceRequest request )
Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
RestartInstanceRequest request =
RestartInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
Instance response = dataFusionClient . restartInstanceAsync ( request ). get ();
}
Parameter
Name
Description
request
RestartInstanceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
restartInstanceCallable()
public final UnaryCallable<RestartInstanceRequest , Operation > restartInstanceCallable ()
Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
RestartInstanceRequest request =
RestartInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
ApiFuture<Operation> future = dataFusionClient . restartInstanceCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < RestartInstanceRequest , Operation >
restartInstanceOperationCallable()
public final OperationCallable<RestartInstanceRequest , Instance , OperationMetadata > restartInstanceOperationCallable ()
Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
RestartInstanceRequest request =
RestartInstanceRequest . newBuilder ()
. setName ( InstanceName . of ( "[PROJECT]" , "[LOCATION]" , "[INSTANCE]" ). toString ())
. build ();
OperationFuture<Instance , OperationMetadata > future =
dataFusionClient . restartInstanceOperationCallable (). futureCall ( request );
// Do something.
Instance response = future . get ();
}
Returns
Type
Description
OperationCallable < RestartInstanceRequest , Instance , OperationMetadata >
shutdown()
public void shutdown ()
shutdownNow()
public void shutdownNow ()
updateInstanceAsync(Instance instance, FieldMask updateMask)
public final OperationFuture<Instance , OperationMetadata > updateInstanceAsync ( Instance instance , FieldMask updateMask )
Updates a single Data Fusion instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
Instance instance = Instance . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Instance response = dataFusionClient . updateInstanceAsync ( instance , updateMask ). get ();
}
Parameters
Name
Description
instance
Instance Required. The instance resource that replaces the resource on the server.
Currently, Data Fusion only allows replacing labels, options, and stack driver settings.
All other fields will be ignored.
updateMask
FieldMask Field mask is used to specify the fields that the update will overwrite in an
instance resource. The fields specified in the update_mask are relative to the resource,
not the full request. A field will be overwritten if it is in the mask. If the user does
not provide a mask, all the supported fields (labels, options, and version currently) will
be overwritten.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
updateInstanceAsync(UpdateInstanceRequest request)
public final OperationFuture<Instance , OperationMetadata > updateInstanceAsync ( UpdateInstanceRequest request )
Updates a single Data Fusion instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
UpdateInstanceRequest request =
UpdateInstanceRequest . newBuilder ()
. setInstance ( Instance . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Instance response = dataFusionClient . updateInstanceAsync ( request ). get ();
}
Parameter
Name
Description
request
UpdateInstanceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Instance , OperationMetadata >
updateInstanceCallable()
public final UnaryCallable<UpdateInstanceRequest , Operation > updateInstanceCallable ()
Updates a single Data Fusion instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
UpdateInstanceRequest request =
UpdateInstanceRequest . newBuilder ()
. setInstance ( Instance . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Operation> future = dataFusionClient . updateInstanceCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateInstanceRequest , Operation >
updateInstanceOperationCallable()
public final OperationCallable<UpdateInstanceRequest , Instance , OperationMetadata > updateInstanceOperationCallable ()
Updates a single Data Fusion instance.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) {
UpdateInstanceRequest request =
UpdateInstanceRequest . newBuilder ()
. setInstance ( Instance . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
OperationFuture<Instance , OperationMetadata > future =
dataFusionClient . updateInstanceOperationCallable (). futureCall ( request );
// Do something.
Instance response = future . get ();
}
Returns
Type
Description
OperationCallable < UpdateInstanceRequest , Instance , OperationMetadata >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
