---
title: "Class RepositoryManagerClient (3.90.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v2.RepositoryManagerClient
  title: "Class RepositoryManagerClient (3.90.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class RepositoryManagerClient (3.90.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.90.0 (latest)
3.89.0
3.87.0
3.85.0
3.84.0
3.83.0
3.82.0
3.80.0
3.78.0
3.77.0
3.76.0
3.75.0
3.74.0
3.72.0
3.70.0
3.69.0
3.66.0
3.65.0
3.64.0
3.62.0
3.61.0
3.60.0
3.59.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.51.0
3.50.0
3.49.0
3.48.0
3.47.0
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.39.0
3.38.0
3.37.0
3.36.0
3.35.0
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.26.0
3.25.0
3.24.0
3.23.0
3.22.0
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.0
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.6
3.4.1
3.3.12
GitHub Repository Product Reference
Service Description: Manages connections to source code repositories.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ConnectionName name = ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" );
Connection response = repositoryManagerClient . getConnection ( name );
}
Note: close() needs to be called on the RepositoryManagerClient object to clean up resources
such as threads. In the example above, try-with-resources is used, which automatically calls
close().
Methods
Method
Description
Method Variants
CreateConnection
Creates a Connection.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createConnectionAsync(CreateConnectionRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createConnectionAsync(LocationName parent, Connection connection, String connectionId)
createConnectionAsync(String parent, Connection connection, String connectionId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createConnectionOperationCallable()
createConnectionCallable()
GetConnection
Gets details of a single connection.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getConnection(GetConnectionRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getConnection(ConnectionName name)
getConnection(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getConnectionCallable()
ListConnections
Lists Connections in a given project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listConnections(ListConnectionsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listConnections(LocationName parent)
listConnections(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listConnectionsPagedCallable()
listConnectionsCallable()
UpdateConnection
Updates a single connection.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateConnectionAsync(UpdateConnectionRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
updateConnectionAsync(Connection connection, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateConnectionOperationCallable()
updateConnectionCallable()
DeleteConnection
Deletes a single connection.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteConnectionAsync(DeleteConnectionRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteConnectionAsync(ConnectionName name)
deleteConnectionAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteConnectionOperationCallable()
deleteConnectionCallable()
CreateRepository
Creates a Repository.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createRepositoryAsync(CreateRepositoryRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createRepositoryAsync(ConnectionName parent, Repository repository, String repositoryId)
createRepositoryAsync(String parent, Repository repository, String repositoryId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createRepositoryOperationCallable()
createRepositoryCallable()
BatchCreateRepositories
Creates multiple repositories inside a connection.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
batchCreateRepositoriesAsync(ConnectionName parent, List<CreateRepositoryRequest> requests)
batchCreateRepositoriesAsync(String parent, List<CreateRepositoryRequest> requests)
batchCreateRepositoriesAsync(BatchCreateRepositoriesRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
batchCreateRepositoriesOperationCallable()
batchCreateRepositoriesCallable()
GetRepository
Gets details of a single repository.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getRepository(GetRepositoryRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getRepository(RepositoryName name)
getRepository(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getRepositoryCallable()
ListRepositories
Lists Repositories in a given connection.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listRepositories(ListRepositoriesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listRepositories(ConnectionName parent)
listRepositories(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listRepositoriesPagedCallable()
listRepositoriesCallable()
DeleteRepository
Deletes a single repository.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteRepositoryAsync(DeleteRepositoryRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteRepositoryAsync(RepositoryName name)
deleteRepositoryAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteRepositoryOperationCallable()
deleteRepositoryCallable()
FetchReadWriteToken
Fetches read/write token of a given repository.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
fetchReadWriteToken(FetchReadWriteTokenRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
fetchReadWriteToken(RepositoryName repository)
fetchReadWriteToken(String repository)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
fetchReadWriteTokenCallable()
FetchReadToken
Fetches read token of a given repository.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
fetchReadToken(FetchReadTokenRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
fetchReadToken(RepositoryName repository)
fetchReadToken(String repository)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
fetchReadTokenCallable()
FetchLinkableRepositories
FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
fetchLinkableRepositories(FetchLinkableRepositoriesRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
fetchLinkableRepositoriesPagedCallable()
fetchLinkableRepositoriesCallable()
FetchGitRefs
Fetch the list of branches or tags for a given repository.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
fetchGitRefs(FetchGitRefsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
fetchGitRefs(RepositoryName repository)
fetchGitRefs(String repository)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
fetchGitRefsCallable()
SetIamPolicy
Sets the access control policy on the specified resource. Replacesany existing policy.
Can return NOT_FOUND , INVALID_ARGUMENT , and PERMISSION_DENIED errors.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
setIamPolicy(SetIamPolicyRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
setIamPolicyCallable()
GetIamPolicy
Gets the access control policy for a resource. Returns an empty policyif the resource exists and does not have a policy set.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getIamPolicy(GetIamPolicyRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getIamPolicyCallable()
TestIamPermissions
Returns permissions that a caller has on the specified resource. If theresource does not exist, this will return an empty set ofpermissions, not a NOT_FOUND error.
Note: This operation is designed to be used for buildingpermission-aware UIs and command-line tools, not for authorizationchecking. This operation may "fail open" without warning.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
testIamPermissions(TestIamPermissionsRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
testIamPermissionsCallable()
See the individual methods for example code.
Many parameters require resource names to be formatted in a particular way. To assist with
these names, this class includes a format method for each type of name, and additionally a parse
method to extract the individual identifiers contained within names that are returned.
This class can be customized by passing in a custom instance of RepositoryManagerSettings to
create(). For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
RepositoryManagerSettings repositoryManagerSettings =
RepositoryManagerSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
RepositoryManagerClient repositoryManagerClient =
RepositoryManagerClient . create ( repositoryManagerSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
RepositoryManagerSettings repositoryManagerSettings =
RepositoryManagerSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
RepositoryManagerClient repositoryManagerClient =
RepositoryManagerClient . create ( repositoryManagerSettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
RepositoryManagerSettings repositoryManagerSettings =
RepositoryManagerSettings . newHttpJsonBuilder (). build ();
RepositoryManagerClient repositoryManagerClient =
RepositoryManagerClient . create ( repositoryManagerSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
RepositoryManagerClient
Static Methods
create()
public static final RepositoryManagerClient create ()
Constructs an instance of RepositoryManagerClient with default settings.
Returns
Type
Description
RepositoryManagerClient
Exceptions
Type
Description
IOException
create(RepositoryManagerSettings settings)
public static final RepositoryManagerClient create ( RepositoryManagerSettings settings )
Constructs an instance of RepositoryManagerClient, using the given settings. The channels are
created based on the settings passed in, or defaults for any settings that are not set.
Parameter
Name
Description
settings
RepositoryManagerSettings
Returns
Type
Description
RepositoryManagerClient
Exceptions
Type
Description
IOException
create(RepositoryManagerStub stub)
public static final RepositoryManagerClient create ( RepositoryManagerStub stub )
Constructs an instance of RepositoryManagerClient, using the given stub for making calls. This
is for advanced usage - prefer using create(RepositoryManagerSettings).
Parameter
Name
Description
stub
RepositoryManagerStub
Returns
Type
Description
RepositoryManagerClient
Constructors
RepositoryManagerClient(RepositoryManagerSettings settings)
protected RepositoryManagerClient ( RepositoryManagerSettings settings )
Constructs an instance of RepositoryManagerClient, using the given settings. This is protected
so that it is easy to make a subclass, but otherwise, the static factory methods should be
preferred.
Parameter
Name
Description
settings
RepositoryManagerSettings
RepositoryManagerClient(RepositoryManagerStub stub)
protected RepositoryManagerClient ( RepositoryManagerStub stub )
Parameter
Name
Description
stub
RepositoryManagerStub
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
batchCreateRepositoriesAsync(BatchCreateRepositoriesRequest request)
public final OperationFuture<BatchCreateRepositoriesResponse , OperationMetadata > batchCreateRepositoriesAsync ( BatchCreateRepositoriesRequest request )
Creates multiple repositories inside a connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
BatchCreateRepositoriesRequest request =
BatchCreateRepositoriesRequest . newBuilder ()
. setParent ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. addAllRequests ( new ArrayList<CreateRepositoryRequest> ())
. build ();
BatchCreateRepositoriesResponse response =
repositoryManagerClient . batchCreateRepositoriesAsync ( request ). get ();
}
Parameter
Name
Description
request
BatchCreateRepositoriesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < BatchCreateRepositoriesResponse , OperationMetadata >
batchCreateRepositoriesAsync(ConnectionName parent, List<CreateRepositoryRequest> requests)
public final OperationFuture<BatchCreateRepositoriesResponse , OperationMetadata > batchCreateRepositoriesAsync ( ConnectionName parent , List<CreateRepositoryRequest> requests )
Creates multiple repositories inside a connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ConnectionName parent = ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" );
List<CreateRepositoryRequest> requests = new ArrayList <> ();
BatchCreateRepositoriesResponse response =
repositoryManagerClient . batchCreateRepositoriesAsync ( parent , requests ). get ();
}
Parameters
Name
Description
parent
ConnectionName Required. The connection to contain all the repositories being created. Format:
projects/*/locations/*/connections/* The parent field in the
CreateRepositoryRequest messages must either be empty or match this field.
requests
List < CreateRepositoryRequest > Required. The request messages specifying the repositories to create.
Returns
Type
Description
OperationFuture < BatchCreateRepositoriesResponse , OperationMetadata >
batchCreateRepositoriesAsync(String parent, List<CreateRepositoryRequest> requests)
public final OperationFuture<BatchCreateRepositoriesResponse , OperationMetadata > batchCreateRepositoriesAsync ( String parent , List<CreateRepositoryRequest> requests )
Creates multiple repositories inside a connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String parent = ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ();
List<CreateRepositoryRequest> requests = new ArrayList <> ();
BatchCreateRepositoriesResponse response =
repositoryManagerClient . batchCreateRepositoriesAsync ( parent , requests ). get ();
}
Parameters
Name
Description
parent
String Required. The connection to contain all the repositories being created. Format:
projects/*/locations/*/connections/* The parent field in the
CreateRepositoryRequest messages must either be empty or match this field.
requests
List < CreateRepositoryRequest > Required. The request messages specifying the repositories to create.
Returns
Type
Description
OperationFuture < BatchCreateRepositoriesResponse , OperationMetadata >
batchCreateRepositoriesCallable()
public final UnaryCallable<BatchCreateRepositoriesRequest , Operation > batchCreateRepositoriesCallable ()
Creates multiple repositories inside a connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
BatchCreateRepositoriesRequest request =
BatchCreateRepositoriesRequest . newBuilder ()
. setParent ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. addAllRequests ( new ArrayList<CreateRepositoryRequest> ())
. build ();
ApiFuture<Operation> future =
repositoryManagerClient . batchCreateRepositoriesCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < BatchCreateRepositoriesRequest , Operation >
batchCreateRepositoriesOperationCallable()
public final OperationCallable<BatchCreateRepositoriesRequest , BatchCreateRepositoriesResponse , OperationMetadata > batchCreateRepositoriesOperationCallable ()
Creates multiple repositories inside a connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
BatchCreateRepositoriesRequest request =
BatchCreateRepositoriesRequest . newBuilder ()
. setParent ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. addAllRequests ( new ArrayList<CreateRepositoryRequest> ())
. build ();
OperationFuture<BatchCreateRepositoriesResponse , OperationMetadata > future =
repositoryManagerClient . batchCreateRepositoriesOperationCallable (). futureCall ( request );
// Do something.
BatchCreateRepositoriesResponse response = future . get ();
}
Returns
Type
Description
OperationCallable < BatchCreateRepositoriesRequest , BatchCreateRepositoriesResponse , OperationMetadata >
close()
public final void close ()
createConnectionAsync(CreateConnectionRequest request)
public final OperationFuture<Connection , OperationMetadata > createConnectionAsync ( CreateConnectionRequest request )
Creates a Connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
CreateConnectionRequest request =
CreateConnectionRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setConnection ( Connection . newBuilder (). build ())
. setConnectionId ( "connectionId1923106969" )
. build ();
Connection response = repositoryManagerClient . createConnectionAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateConnectionRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Connection , OperationMetadata >
createConnectionAsync(LocationName parent, Connection connection, String connectionId)
public final OperationFuture<Connection , OperationMetadata > createConnectionAsync ( LocationName parent , Connection connection , String connectionId )
Creates a Connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
Connection connection = Connection . newBuilder (). build ();
String connectionId = "connectionId1923106969" ;
Connection response =
repositoryManagerClient . createConnectionAsync ( parent , connection , connectionId ). get ();
}
Parameters
Name
Description
parent
LocationName Required. Project and location where the connection will be created. Format:
projects/*/locations/* .
connection
Connection Required. The Connection to create.
connectionId
String Required. The ID to use for the Connection, which will become the final
component of the Connection's resource name. Names must be unique per-project per-location.
Allows alphanumeric characters and any of -._~%!$&amp;'()&#42;+,;=@.
Returns
Type
Description
OperationFuture < Connection , OperationMetadata >
createConnectionAsync(String parent, Connection connection, String connectionId)
public final OperationFuture<Connection , OperationMetadata > createConnectionAsync ( String parent , Connection connection , String connectionId )
Creates a Connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
Connection connection = Connection . newBuilder (). build ();
String connectionId = "connectionId1923106969" ;
Connection response =
repositoryManagerClient . createConnectionAsync ( parent , connection , connectionId ). get ();
}
Parameters
Name
Description
parent
String Required. Project and location where the connection will be created. Format:
projects/*/locations/* .
connection
Connection Required. The Connection to create.
connectionId
String Required. The ID to use for the Connection, which will become the final
component of the Connection's resource name. Names must be unique per-project per-location.
Allows alphanumeric characters and any of -._~%!$&amp;'()&#42;+,;=@.
Returns
Type
Description
OperationFuture < Connection , OperationMetadata >
createConnectionCallable()
public final UnaryCallable<CreateConnectionRequest , Operation > createConnectionCallable ()
Creates a Connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
CreateConnectionRequest request =
CreateConnectionRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setConnection ( Connection . newBuilder (). build ())
. setConnectionId ( "connectionId1923106969" )
. build ();
ApiFuture<Operation> future =
repositoryManagerClient . createConnectionCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateConnectionRequest , Operation >
createConnectionOperationCallable()
public final OperationCallable<CreateConnectionRequest , Connection , OperationMetadata > createConnectionOperationCallable ()
Creates a Connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
CreateConnectionRequest request =
CreateConnectionRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setConnection ( Connection . newBuilder (). build ())
. setConnectionId ( "connectionId1923106969" )
. build ();
OperationFuture<Connection , OperationMetadata > future =
repositoryManagerClient . createConnectionOperationCallable (). futureCall ( request );
// Do something.
Connection response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateConnectionRequest , Connection , OperationMetadata >
createRepositoryAsync(ConnectionName parent, Repository repository, String repositoryId)
public final OperationFuture<Repository , OperationMetadata > createRepositoryAsync ( ConnectionName parent , Repository repository , String repositoryId )
Creates a Repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ConnectionName parent = ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" );
Repository repository = Repository . newBuilder (). build ();
String repositoryId = "repositoryId2113747461" ;
Repository response =
repositoryManagerClient . createRepositoryAsync ( parent , repository , repositoryId ). get ();
}
Parameters
Name
Description
parent
ConnectionName Required. The connection to contain the repository. If the request is part of a
BatchCreateRepositoriesRequest, this field should be empty or match the parent specified
there.
repository
Repository Required. The repository to create.
repositoryId
String Required. The ID to use for the repository, which will become the final
component of the repository's resource name. This ID should be unique in the connection.
Allows alphanumeric characters and any of -._~%!$&amp;'()&#42;+,;=@.
Returns
Type
Description
OperationFuture < Repository , OperationMetadata >
createRepositoryAsync(CreateRepositoryRequest request)
public final OperationFuture<Repository , OperationMetadata > createRepositoryAsync ( CreateRepositoryRequest request )
Creates a Repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
CreateRepositoryRequest request =
CreateRepositoryRequest . newBuilder ()
. setParent ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setRepository ( Repository . newBuilder (). build ())
. setRepositoryId ( "repositoryId2113747461" )
. build ();
Repository response = repositoryManagerClient . createRepositoryAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateRepositoryRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Repository , OperationMetadata >
createRepositoryAsync(String parent, Repository repository, String repositoryId)
public final OperationFuture<Repository , OperationMetadata > createRepositoryAsync ( String parent , Repository repository , String repositoryId )
Creates a Repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String parent = ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ();
Repository repository = Repository . newBuilder (). build ();
String repositoryId = "repositoryId2113747461" ;
Repository response =
repositoryManagerClient . createRepositoryAsync ( parent , repository , repositoryId ). get ();
}
Parameters
Name
Description
parent
String Required. The connection to contain the repository. If the request is part of a
BatchCreateRepositoriesRequest, this field should be empty or match the parent specified
there.
repository
Repository Required. The repository to create.
repositoryId
String Required. The ID to use for the repository, which will become the final
component of the repository's resource name. This ID should be unique in the connection.
Allows alphanumeric characters and any of -._~%!$&amp;'()&#42;+,;=@.
Returns
Type
Description
OperationFuture < Repository , OperationMetadata >
createRepositoryCallable()
public final UnaryCallable<CreateRepositoryRequest , Operation > createRepositoryCallable ()
Creates a Repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
CreateRepositoryRequest request =
CreateRepositoryRequest . newBuilder ()
. setParent ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setRepository ( Repository . newBuilder (). build ())
. setRepositoryId ( "repositoryId2113747461" )
. build ();
ApiFuture<Operation> future =
repositoryManagerClient . createRepositoryCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateRepositoryRequest , Operation >
createRepositoryOperationCallable()
public final OperationCallable<CreateRepositoryRequest , Repository , OperationMetadata > createRepositoryOperationCallable ()
Creates a Repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
CreateRepositoryRequest request =
CreateRepositoryRequest . newBuilder ()
. setParent ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setRepository ( Repository . newBuilder (). build ())
. setRepositoryId ( "repositoryId2113747461" )
. build ();
OperationFuture<Repository , OperationMetadata > future =
repositoryManagerClient . createRepositoryOperationCallable (). futureCall ( request );
// Do something.
Repository response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateRepositoryRequest , Repository , OperationMetadata >
deleteConnectionAsync(ConnectionName name)
public final OperationFuture<Empty , OperationMetadata > deleteConnectionAsync ( ConnectionName name )
Deletes a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ConnectionName name = ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" );
repositoryManagerClient . deleteConnectionAsync ( name ). get ();
}
Parameter
Name
Description
name
ConnectionName Required. The name of the Connection to delete. Format:
projects/*/locations/*/connections/* .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteConnectionAsync(DeleteConnectionRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteConnectionAsync ( DeleteConnectionRequest request )
Deletes a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
DeleteConnectionRequest request =
DeleteConnectionRequest . newBuilder ()
. setName ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setEtag ( "etag3123477" )
. setValidateOnly ( true )
. build ();
repositoryManagerClient . deleteConnectionAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteConnectionRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteConnectionAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteConnectionAsync ( String name )
Deletes a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String name = ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ();
repositoryManagerClient . deleteConnectionAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. The name of the Connection to delete. Format:
projects/*/locations/*/connections/* .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteConnectionCallable()
public final UnaryCallable<DeleteConnectionRequest , Operation > deleteConnectionCallable ()
Deletes a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
DeleteConnectionRequest request =
DeleteConnectionRequest . newBuilder ()
. setName ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setEtag ( "etag3123477" )
. setValidateOnly ( true )
. build ();
ApiFuture<Operation> future =
repositoryManagerClient . deleteConnectionCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteConnectionRequest , Operation >
deleteConnectionOperationCallable()
public final OperationCallable<DeleteConnectionRequest , Empty , OperationMetadata > deleteConnectionOperationCallable ()
Deletes a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
DeleteConnectionRequest request =
DeleteConnectionRequest . newBuilder ()
. setName ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setEtag ( "etag3123477" )
. setValidateOnly ( true )
. build ();
OperationFuture<Empty , OperationMetadata > future =
repositoryManagerClient . deleteConnectionOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteConnectionRequest , Empty , OperationMetadata >
deleteRepositoryAsync(DeleteRepositoryRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteRepositoryAsync ( DeleteRepositoryRequest request )
Deletes a single repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
DeleteRepositoryRequest request =
DeleteRepositoryRequest . newBuilder ()
. setName (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" )
. toString ())
. setEtag ( "etag3123477" )
. setValidateOnly ( true )
. build ();
repositoryManagerClient . deleteRepositoryAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteRepositoryRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteRepositoryAsync(RepositoryName name)
public final OperationFuture<Empty , OperationMetadata > deleteRepositoryAsync ( RepositoryName name )
Deletes a single repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
RepositoryName name =
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" );
repositoryManagerClient . deleteRepositoryAsync ( name ). get ();
}
Parameter
Name
Description
name
RepositoryName Required. The name of the Repository to delete. Format:
projects/*/locations/*/connections/*/repositories/* .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteRepositoryAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteRepositoryAsync ( String name )
Deletes a single repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String name =
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" ). toString ();
repositoryManagerClient . deleteRepositoryAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. The name of the Repository to delete. Format:
projects/*/locations/*/connections/*/repositories/* .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteRepositoryCallable()
public final UnaryCallable<DeleteRepositoryRequest , Operation > deleteRepositoryCallable ()
Deletes a single repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
DeleteRepositoryRequest request =
DeleteRepositoryRequest . newBuilder ()
. setName (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" )
. toString ())
. setEtag ( "etag3123477" )
. setValidateOnly ( true )
. build ();
ApiFuture<Operation> future =
repositoryManagerClient . deleteRepositoryCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteRepositoryRequest , Operation >
deleteRepositoryOperationCallable()
public final OperationCallable<DeleteRepositoryRequest , Empty , OperationMetadata > deleteRepositoryOperationCallable ()
Deletes a single repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
DeleteRepositoryRequest request =
DeleteRepositoryRequest . newBuilder ()
. setName (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" )
. toString ())
. setEtag ( "etag3123477" )
. setValidateOnly ( true )
. build ();
OperationFuture<Empty , OperationMetadata > future =
repositoryManagerClient . deleteRepositoryOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteRepositoryRequest , Empty , OperationMetadata >
fetchGitRefs(FetchGitRefsRequest request)
public final FetchGitRefsResponse fetchGitRefs ( FetchGitRefsRequest request )
Fetch the list of branches or tags for a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
FetchGitRefsRequest request =
FetchGitRefsRequest . newBuilder ()
. setRepository (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" )
. toString ())
. build ();
FetchGitRefsResponse response = repositoryManagerClient . fetchGitRefs ( request );
}
Parameter
Name
Description
request
FetchGitRefsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
FetchGitRefsResponse
fetchGitRefs(RepositoryName repository)
public final FetchGitRefsResponse fetchGitRefs ( RepositoryName repository )
Fetch the list of branches or tags for a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
RepositoryName repository =
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" );
FetchGitRefsResponse response = repositoryManagerClient . fetchGitRefs ( repository );
}
Parameter
Name
Description
repository
RepositoryName Required. The resource name of the repository in the format
projects/*/locations/*/connections/*/repositories/* .
Returns
Type
Description
FetchGitRefsResponse
fetchGitRefs(String repository)
public final FetchGitRefsResponse fetchGitRefs ( String repository )
Fetch the list of branches or tags for a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String repository =
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" ). toString ();
FetchGitRefsResponse response = repositoryManagerClient . fetchGitRefs ( repository );
}
Parameter
Name
Description
repository
String Required. The resource name of the repository in the format
projects/*/locations/*/connections/*/repositories/* .
Returns
Type
Description
FetchGitRefsResponse
fetchGitRefsCallable()
public final UnaryCallable<FetchGitRefsRequest , FetchGitRefsResponse > fetchGitRefsCallable ()
Fetch the list of branches or tags for a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
FetchGitRefsRequest request =
FetchGitRefsRequest . newBuilder ()
. setRepository (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" )
. toString ())
. build ();
ApiFuture<FetchGitRefsResponse> future =
repositoryManagerClient . fetchGitRefsCallable (). futureCall ( request );
// Do something.
FetchGitRefsResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < FetchGitRefsRequest , FetchGitRefsResponse >
fetchLinkableRepositories(FetchLinkableRepositoriesRequest request)
public final RepositoryManagerClient . FetchLinkableRepositoriesPagedResponse fetchLinkableRepositories ( FetchLinkableRepositoriesRequest request )
FetchLinkableRepositories get repositories from SCM that are accessible and could be added to
the connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
FetchLinkableRepositoriesRequest request =
FetchLinkableRepositoriesRequest . newBuilder ()
. setConnection (
ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Repository element :
repositoryManagerClient . fetchLinkableRepositories ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
FetchLinkableRepositoriesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
RepositoryManagerClient.FetchLinkableRepositoriesPagedResponse
fetchLinkableRepositoriesCallable()
public final UnaryCallable<FetchLinkableRepositoriesRequest , FetchLinkableRepositoriesResponse > fetchLinkableRepositoriesCallable ()
FetchLinkableRepositories get repositories from SCM that are accessible and could be added to
the connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
FetchLinkableRepositoriesRequest request =
FetchLinkableRepositoriesRequest . newBuilder ()
. setConnection (
ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
FetchLinkableRepositoriesResponse response =
repositoryManagerClient . fetchLinkableRepositoriesCallable (). call ( request );
for ( Repository element : response . getRepositoriesList ()) {
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
UnaryCallable < FetchLinkableRepositoriesRequest , FetchLinkableRepositoriesResponse >
fetchLinkableRepositoriesPagedCallable()
public final UnaryCallable<FetchLinkableRepositoriesRequest , RepositoryManagerClient . FetchLinkableRepositoriesPagedResponse > fetchLinkableRepositoriesPagedCallable ()
FetchLinkableRepositories get repositories from SCM that are accessible and could be added to
the connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
FetchLinkableRepositoriesRequest request =
FetchLinkableRepositoriesRequest . newBuilder ()
. setConnection (
ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Repository> future =
repositoryManagerClient . fetchLinkableRepositoriesPagedCallable (). futureCall ( request );
// Do something.
for ( Repository element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < FetchLinkableRepositoriesRequest , FetchLinkableRepositoriesPagedResponse >
fetchReadToken(FetchReadTokenRequest request)
public final FetchReadTokenResponse fetchReadToken ( FetchReadTokenRequest request )
Fetches read token of a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
FetchReadTokenRequest request =
FetchReadTokenRequest . newBuilder ()
. setRepository (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" )
. toString ())
. build ();
FetchReadTokenResponse response = repositoryManagerClient . fetchReadToken ( request );
}
Parameter
Name
Description
request
FetchReadTokenRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
FetchReadTokenResponse
fetchReadToken(RepositoryName repository)
public final FetchReadTokenResponse fetchReadToken ( RepositoryName repository )
Fetches read token of a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
RepositoryName repository =
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" );
FetchReadTokenResponse response = repositoryManagerClient . fetchReadToken ( repository );
}
Parameter
Name
Description
repository
RepositoryName Required. The resource name of the repository in the format
projects/*/locations/*/connections/*/repositories/* .
Returns
Type
Description
FetchReadTokenResponse
fetchReadToken(String repository)
public final FetchReadTokenResponse fetchReadToken ( String repository )
Fetches read token of a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String repository =
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" ). toString ();
FetchReadTokenResponse response = repositoryManagerClient . fetchReadToken ( repository );
}
Parameter
Name
Description
repository
String Required. The resource name of the repository in the format
projects/*/locations/*/connections/*/repositories/* .
Returns
Type
Description
FetchReadTokenResponse
fetchReadTokenCallable()
public final UnaryCallable<FetchReadTokenRequest , FetchReadTokenResponse > fetchReadTokenCallable ()
Fetches read token of a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
FetchReadTokenRequest request =
FetchReadTokenRequest . newBuilder ()
. setRepository (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" )
. toString ())
. build ();
ApiFuture<FetchReadTokenResponse> future =
repositoryManagerClient . fetchReadTokenCallable (). futureCall ( request );
// Do something.
FetchReadTokenResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < FetchReadTokenRequest , FetchReadTokenResponse >
fetchReadWriteToken(FetchReadWriteTokenRequest request)
public final FetchReadWriteTokenResponse fetchReadWriteToken ( FetchReadWriteTokenRequest request )
Fetches read/write token of a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
FetchReadWriteTokenRequest request =
FetchReadWriteTokenRequest . newBuilder ()
. setRepository (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" )
. toString ())
. build ();
FetchReadWriteTokenResponse response = repositoryManagerClient . fetchReadWriteToken ( request );
}
Parameter
Name
Description
request
FetchReadWriteTokenRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
FetchReadWriteTokenResponse
fetchReadWriteToken(RepositoryName repository)
public final FetchReadWriteTokenResponse fetchReadWriteToken ( RepositoryName repository )
Fetches read/write token of a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
RepositoryName repository =
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" );
FetchReadWriteTokenResponse response =
repositoryManagerClient . fetchReadWriteToken ( repository );
}
Parameter
Name
Description
repository
RepositoryName Required. The resource name of the repository in the format
projects/*/locations/*/connections/*/repositories/* .
Returns
Type
Description
FetchReadWriteTokenResponse
fetchReadWriteToken(String repository)
public final FetchReadWriteTokenResponse fetchReadWriteToken ( String repository )
Fetches read/write token of a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String repository =
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" ). toString ();
FetchReadWriteTokenResponse response =
repositoryManagerClient . fetchReadWriteToken ( repository );
}
Parameter
Name
Description
repository
String Required. The resource name of the repository in the format
projects/*/locations/*/connections/*/repositories/* .
Returns
Type
Description
FetchReadWriteTokenResponse
fetchReadWriteTokenCallable()
public final UnaryCallable<FetchReadWriteTokenRequest , FetchReadWriteTokenResponse > fetchReadWriteTokenCallable ()
Fetches read/write token of a given repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
FetchReadWriteTokenRequest request =
FetchReadWriteTokenRequest . newBuilder ()
. setRepository (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" )
. toString ())
. build ();
ApiFuture<FetchReadWriteTokenResponse> future =
repositoryManagerClient . fetchReadWriteTokenCallable (). futureCall ( request );
// Do something.
FetchReadWriteTokenResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < FetchReadWriteTokenRequest , FetchReadWriteTokenResponse >
getConnection(ConnectionName name)
public final Connection getConnection ( ConnectionName name )
Gets details of a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ConnectionName name = ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" );
Connection response = repositoryManagerClient . getConnection ( name );
}
Parameter
Name
Description
name
ConnectionName Required. The name of the Connection to retrieve. Format:
projects/*/locations/*/connections/* .
Returns
Type
Description
Connection
getConnection(GetConnectionRequest request)
public final Connection getConnection ( GetConnectionRequest request )
Gets details of a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
GetConnectionRequest request =
GetConnectionRequest . newBuilder ()
. setName ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. build ();
Connection response = repositoryManagerClient . getConnection ( request );
}
Parameter
Name
Description
request
GetConnectionRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Connection
getConnection(String name)
public final Connection getConnection ( String name )
Gets details of a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String name = ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ();
Connection response = repositoryManagerClient . getConnection ( name );
}
Parameter
Name
Description
name
String Required. The name of the Connection to retrieve. Format:
projects/*/locations/*/connections/* .
Returns
Type
Description
Connection
getConnectionCallable()
public final UnaryCallable<GetConnectionRequest , Connection > getConnectionCallable ()
Gets details of a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
GetConnectionRequest request =
GetConnectionRequest . newBuilder ()
. setName ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. build ();
ApiFuture<Connection> future =
repositoryManagerClient . getConnectionCallable (). futureCall ( request );
// Do something.
Connection response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetConnectionRequest , Connection >
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
getIamPolicy(GetIamPolicyRequest request)
public final Policy getIamPolicy ( GetIamPolicyRequest request )
Gets the access control policy for a resource. Returns an empty policyif the resource exists
and does not have a policy set.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
Policy response = repositoryManagerClient . getIamPolicy ( request );
}
Parameter
Name
Description
request
com.google.iam.v1.GetIamPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.iam.v1.Policy
getIamPolicyCallable()
public final UnaryCallable<GetIamPolicyRequest , Policy > getIamPolicyCallable ()
Gets the access control policy for a resource. Returns an empty policyif the resource exists
and does not have a policy set.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
ApiFuture<Policy> future = repositoryManagerClient . getIamPolicyCallable (). futureCall ( request );
// Do something.
Policy response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.GetIamPolicyRequest , com.google.iam.v1.Policy >
getOperationsClient()
public final OperationsClient getOperationsClient ()
Returns the OperationsClient that can be used to query the status of a long-running operation
returned by another API method call.
Returns
Type
Description
OperationsClient
getRepository(GetRepositoryRequest request)
public final Repository getRepository ( GetRepositoryRequest request )
Gets details of a single repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
GetRepositoryRequest request =
GetRepositoryRequest . newBuilder ()
. setName (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" )
. toString ())
. build ();
Repository response = repositoryManagerClient . getRepository ( request );
}
Parameter
Name
Description
request
GetRepositoryRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Repository
getRepository(RepositoryName name)
public final Repository getRepository ( RepositoryName name )
Gets details of a single repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
RepositoryName name =
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" );
Repository response = repositoryManagerClient . getRepository ( name );
}
Parameter
Name
Description
name
RepositoryName Required. The name of the Repository to retrieve. Format:
projects/*/locations/*/connections/*/repositories/* .
Returns
Type
Description
Repository
getRepository(String name)
public final Repository getRepository ( String name )
Gets details of a single repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String name =
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" ). toString ();
Repository response = repositoryManagerClient . getRepository ( name );
}
Parameter
Name
Description
name
String Required. The name of the Repository to retrieve. Format:
projects/*/locations/*/connections/*/repositories/* .
Returns
Type
Description
Repository
getRepositoryCallable()
public final UnaryCallable<GetRepositoryRequest , Repository > getRepositoryCallable ()
Gets details of a single repository.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
GetRepositoryRequest request =
GetRepositoryRequest . newBuilder ()
. setName (
RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" , "[REPOSITORY]" )
. toString ())
. build ();
ApiFuture<Repository> future =
repositoryManagerClient . getRepositoryCallable (). futureCall ( request );
// Do something.
Repository response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetRepositoryRequest , Repository >
getSettings()
public final RepositoryManagerSettings getSettings ()
Returns
Type
Description
RepositoryManagerSettings
getStub()
public RepositoryManagerStub getStub ()
Returns
Type
Description
RepositoryManagerStub
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
listConnections(ListConnectionsRequest request)
public final RepositoryManagerClient . ListConnectionsPagedResponse listConnections ( ListConnectionsRequest request )
Lists Connections in a given project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ListConnectionsRequest request =
ListConnectionsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Connection element : repositoryManagerClient . listConnections ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListConnectionsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
RepositoryManagerClient.ListConnectionsPagedResponse
listConnections(LocationName parent)
public final RepositoryManagerClient . ListConnectionsPagedResponse listConnections ( LocationName parent )
Lists Connections in a given project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( Connection element : repositoryManagerClient . listConnections ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. The parent, which owns this collection of Connections. Format:
projects/*/locations/* .
Returns
Type
Description
RepositoryManagerClient.ListConnectionsPagedResponse
listConnections(String parent)
public final RepositoryManagerClient . ListConnectionsPagedResponse listConnections ( String parent )
Lists Connections in a given project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( Connection element : repositoryManagerClient . listConnections ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The parent, which owns this collection of Connections. Format:
projects/*/locations/* .
Returns
Type
Description
RepositoryManagerClient.ListConnectionsPagedResponse
listConnectionsCallable()
public final UnaryCallable<ListConnectionsRequest , ListConnectionsResponse > listConnectionsCallable ()
Lists Connections in a given project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ListConnectionsRequest request =
ListConnectionsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListConnectionsResponse response =
repositoryManagerClient . listConnectionsCallable (). call ( request );
for ( Connection element : response . getConnectionsList ()) {
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
UnaryCallable < ListConnectionsRequest , ListConnectionsResponse >
listConnectionsPagedCallable()
public final UnaryCallable<ListConnectionsRequest , RepositoryManagerClient . ListConnectionsPagedResponse > listConnectionsPagedCallable ()
Lists Connections in a given project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ListConnectionsRequest request =
ListConnectionsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Connection> future =
repositoryManagerClient . listConnectionsPagedCallable (). futureCall ( request );
// Do something.
for ( Connection element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListConnectionsRequest , ListConnectionsPagedResponse >
listRepositories(ConnectionName parent)
public final RepositoryManagerClient . ListRepositoriesPagedResponse listRepositories ( ConnectionName parent )
Lists Repositories in a given connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ConnectionName parent = ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" );
for ( Repository element : repositoryManagerClient . listRepositories ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
ConnectionName Required. The parent, which owns this collection of Repositories. Format:
projects/*/locations/*/connections/* .
Returns
Type
Description
RepositoryManagerClient.ListRepositoriesPagedResponse
listRepositories(ListRepositoriesRequest request)
public final RepositoryManagerClient . ListRepositoriesPagedResponse listRepositories ( ListRepositoriesRequest request )
Lists Repositories in a given connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ListRepositoriesRequest request =
ListRepositoriesRequest . newBuilder ()
. setParent ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. build ();
for ( Repository element : repositoryManagerClient . listRepositories ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListRepositoriesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
RepositoryManagerClient.ListRepositoriesPagedResponse
listRepositories(String parent)
public final RepositoryManagerClient . ListRepositoriesPagedResponse listRepositories ( String parent )
Lists Repositories in a given connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
String parent = ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ();
for ( Repository element : repositoryManagerClient . listRepositories ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The parent, which owns this collection of Repositories. Format:
projects/*/locations/*/connections/* .
Returns
Type
Description
RepositoryManagerClient.ListRepositoriesPagedResponse
listRepositoriesCallable()
public final UnaryCallable<ListRepositoriesRequest , ListRepositoriesResponse > listRepositoriesCallable ()
Lists Repositories in a given connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ListRepositoriesRequest request =
ListRepositoriesRequest . newBuilder ()
. setParent ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. build ();
while ( true ) {
ListRepositoriesResponse response =
repositoryManagerClient . listRepositoriesCallable (). call ( request );
for ( Repository element : response . getRepositoriesList ()) {
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
UnaryCallable < ListRepositoriesRequest , ListRepositoriesResponse >
listRepositoriesPagedCallable()
public final UnaryCallable<ListRepositoriesRequest , RepositoryManagerClient . ListRepositoriesPagedResponse > listRepositoriesPagedCallable ()
Lists Repositories in a given connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
ListRepositoriesRequest request =
ListRepositoriesRequest . newBuilder ()
. setParent ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. build ();
ApiFuture<Repository> future =
repositoryManagerClient . listRepositoriesPagedCallable (). futureCall ( request );
// Do something.
for ( Repository element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListRepositoriesRequest , ListRepositoriesPagedResponse >
setIamPolicy(SetIamPolicyRequest request)
public final Policy setIamPolicy ( SetIamPolicyRequest request )
Sets the access control policy on the specified resource. Replacesany existing policy.
Can return NOT_FOUND , INVALID_ARGUMENT , and PERMISSION_DENIED errors.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Policy response = repositoryManagerClient . setIamPolicy ( request );
}
Parameter
Name
Description
request
com.google.iam.v1.SetIamPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.iam.v1.Policy
setIamPolicyCallable()
public final UnaryCallable<SetIamPolicyRequest , Policy > setIamPolicyCallable ()
Sets the access control policy on the specified resource. Replacesany existing policy.
Can return NOT_FOUND , INVALID_ARGUMENT , and PERMISSION_DENIED errors.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Policy> future = repositoryManagerClient . setIamPolicyCallable (). futureCall ( request );
// Do something.
Policy response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.SetIamPolicyRequest , com.google.iam.v1.Policy >
shutdown()
public void shutdown ()
shutdownNow()
public void shutdownNow ()
testIamPermissions(TestIamPermissionsRequest request)
public final TestIamPermissionsResponse testIamPermissions ( TestIamPermissionsRequest request )
Returns permissions that a caller has on the specified resource. If theresource does not exist,
this will return an empty set ofpermissions, not a NOT_FOUND error.
Note: This operation is designed to be used for buildingpermission-aware UIs and
command-line tools, not for authorizationchecking. This operation may "fail open" without
warning.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
TestIamPermissionsResponse response = repositoryManagerClient . testIamPermissions ( request );
}
Parameter
Name
Description
request
com.google.iam.v1.TestIamPermissionsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.iam.v1.TestIamPermissionsResponse
testIamPermissionsCallable()
public final UnaryCallable<TestIamPermissionsRequest , TestIamPermissionsResponse > testIamPermissionsCallable ()
Returns permissions that a caller has on the specified resource. If theresource does not exist,
this will return an empty set ofpermissions, not a NOT_FOUND error.
Note: This operation is designed to be used for buildingpermission-aware UIs and
command-line tools, not for authorizationchecking. This operation may "fail open" without
warning.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource ( ConnectionName . of ( "[PROJECT]" , "[LOCATION]" , "[CONNECTION]" ). toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
ApiFuture<TestIamPermissionsResponse> future =
repositoryManagerClient . testIamPermissionsCallable (). futureCall ( request );
// Do something.
TestIamPermissionsResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.TestIamPermissionsRequest , com.google.iam.v1.TestIamPermissionsResponse >
updateConnectionAsync(Connection connection, FieldMask updateMask)
public final OperationFuture<Connection , OperationMetadata > updateConnectionAsync ( Connection connection , FieldMask updateMask )
Updates a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
Connection connection = Connection . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Connection response =
repositoryManagerClient . updateConnectionAsync ( connection , updateMask ). get ();
}
Parameters
Name
Description
connection
Connection Required. The Connection to update.
updateMask
FieldMask The list of fields to be updated.
Returns
Type
Description
OperationFuture < Connection , OperationMetadata >
updateConnectionAsync(UpdateConnectionRequest request)
public final OperationFuture<Connection , OperationMetadata > updateConnectionAsync ( UpdateConnectionRequest request )
Updates a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
UpdateConnectionRequest request =
UpdateConnectionRequest . newBuilder ()
. setConnection ( Connection . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setAllowMissing ( true )
. setEtag ( "etag3123477" )
. build ();
Connection response = repositoryManagerClient . updateConnectionAsync ( request ). get ();
}
Parameter
Name
Description
request
UpdateConnectionRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Connection , OperationMetadata >
updateConnectionCallable()
public final UnaryCallable<UpdateConnectionRequest , Operation > updateConnectionCallable ()
Updates a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
UpdateConnectionRequest request =
UpdateConnectionRequest . newBuilder ()
. setConnection ( Connection . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setAllowMissing ( true )
. setEtag ( "etag3123477" )
. build ();
ApiFuture<Operation> future =
repositoryManagerClient . updateConnectionCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateConnectionRequest , Operation >
updateConnectionOperationCallable()
public final OperationCallable<UpdateConnectionRequest , Connection , OperationMetadata > updateConnectionOperationCallable ()
Updates a single connection.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( RepositoryManagerClient repositoryManagerClient = RepositoryManagerClient . create ()) {
UpdateConnectionRequest request =
UpdateConnectionRequest . newBuilder ()
. setConnection ( Connection . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setAllowMissing ( true )
. setEtag ( "etag3123477" )
. build ();
OperationFuture<Connection , OperationMetadata > future =
repositoryManagerClient . updateConnectionOperationCallable (). futureCall ( request );
// Do something.
Connection response = future . get ();
}
Returns
Type
Description
OperationCallable < UpdateConnectionRequest , Connection , OperationMetadata >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
