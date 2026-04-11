---
title: "Class SchemaServiceClient (1.149.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.SchemaServiceClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.SchemaServiceClient
  title: "Class SchemaServiceClient (1.149.0) \_|\_ Java client libraries \_|\_ Google\
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
Class SchemaServiceClient (1.149.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.149.0 (latest)
1.148.0
1.147.0
1.145.0
1.143.1
1.142.0
1.141.5
1.140.2
1.139.4
1.138.0
1.137.1
1.136.1
1.135.0
1.134.2
1.133.1
1.132.2
1.131.0
1.130.0
1.129.6
1.127.3
1.126.6
1.125.13
1.123.18
1.122.2
1.121.1
1.120.24
1.119.1
1.118.0
1.117.0
1.116.4
1.115.5
GitHub Repository Product Reference
Service Description: Service for doing schema-related operations.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
Schema schema = Schema . newBuilder (). build ();
String schemaId = "schemaId-697673060" ;
Schema response = schemaServiceClient . createSchema ( parent , schema , schemaId );
}
Note: close() needs to be called on the SchemaServiceClient object to clean up resources such
as threads. In the example above, try-with-resources is used, which automatically calls close().
Methods
Method
Description
Method Variants
CreateSchema
Creates a schema.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createSchema(CreateSchemaRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
createSchema(ProjectName parent, Schema schema, String schemaId)
createSchema(String parent, Schema schema, String schemaId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createSchemaCallable()
GetSchema
Gets a schema.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getSchema(GetSchemaRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getSchema(SchemaName name)
getSchema(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getSchemaCallable()
ListSchemas
Lists schemas in a project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listSchemas(ListSchemasRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listSchemas(ProjectName parent)
listSchemas(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listSchemasPagedCallable()
listSchemasCallable()
ListSchemaRevisions
Lists all schema revisions for the named schema.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listSchemaRevisions(ListSchemaRevisionsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listSchemaRevisions(SchemaName name)
listSchemaRevisions(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listSchemaRevisionsPagedCallable()
listSchemaRevisionsCallable()
CommitSchema
Commits a new schema revision to an existing schema.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
commitSchema(CommitSchemaRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
commitSchema(SchemaName name, Schema schema)
commitSchema(String name, Schema schema)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
commitSchemaCallable()
RollbackSchema
Creates a new schema revision that is a copy of the provided revision_id.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
rollbackSchema(RollbackSchemaRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
rollbackSchema(SchemaName name, String revisionId)
rollbackSchema(String name, String revisionId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
rollbackSchemaCallable()
DeleteSchemaRevision
Deletes a specific schema revision.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteSchemaRevision(DeleteSchemaRevisionRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
deleteSchemaRevision(SchemaName name, String revisionId)
deleteSchemaRevision(String name, String revisionId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteSchemaRevisionCallable()
DeleteSchema
Deletes a schema.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteSchema(DeleteSchemaRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
deleteSchema(SchemaName name)
deleteSchema(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteSchemaCallable()
ValidateSchema
Validates a schema.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
validateSchema(ValidateSchemaRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
validateSchema(ProjectName parent, Schema schema)
validateSchema(String parent, Schema schema)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
validateSchemaCallable()
ValidateMessage
Validates a message against a schema.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
validateMessage(ValidateMessageRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
validateMessageCallable()
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
This class can be customized by passing in a custom instance of SchemaServiceSettings to
create(). For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
SchemaServiceSettings schemaServiceSettings =
SchemaServiceSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ( schemaServiceSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
SchemaServiceSettings schemaServiceSettings =
SchemaServiceSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ( schemaServiceSettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
SchemaServiceSettings schemaServiceSettings =
SchemaServiceSettings . newHttpJsonBuilder (). build ();
SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ( schemaServiceSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
SchemaServiceClient
Static Methods
create()
public static final SchemaServiceClient create ()
Constructs an instance of SchemaServiceClient with default settings.
Returns
Type
Description
SchemaServiceClient
Exceptions
Type
Description
IOException
create(SchemaServiceSettings settings)
public static final SchemaServiceClient create ( SchemaServiceSettings settings )
Constructs an instance of SchemaServiceClient, using the given settings. The channels are
created based on the settings passed in, or defaults for any settings that are not set.
Parameter
Name
Description
settings
SchemaServiceSettings
Returns
Type
Description
SchemaServiceClient
Exceptions
Type
Description
IOException
create(SchemaServiceStub stub)
public static final SchemaServiceClient create ( SchemaServiceStub stub )
Constructs an instance of SchemaServiceClient, using the given stub for making calls. This is
for advanced usage - prefer using create(SchemaServiceSettings).
Parameter
Name
Description
stub
SchemaServiceStub
Returns
Type
Description
SchemaServiceClient
Constructors
SchemaServiceClient(SchemaServiceSettings settings)
protected SchemaServiceClient ( SchemaServiceSettings settings )
Constructs an instance of SchemaServiceClient, using the given settings. This is protected so
that it is easy to make a subclass, but otherwise, the static factory methods should be
preferred.
Parameter
Name
Description
settings
SchemaServiceSettings
SchemaServiceClient(SchemaServiceStub stub)
protected SchemaServiceClient ( SchemaServiceStub stub )
Parameter
Name
Description
stub
SchemaServiceStub
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
commitSchema(CommitSchemaRequest request)
public final Schema commitSchema ( CommitSchemaRequest request )
Commits a new schema revision to an existing schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
CommitSchemaRequest request =
CommitSchemaRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setSchema ( Schema . newBuilder (). build ())
. build ();
Schema response = schemaServiceClient . commitSchema ( request );
}
Parameter
Name
Description
request
CommitSchemaRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Schema
commitSchema(SchemaName name, Schema schema)
public final Schema commitSchema ( SchemaName name , Schema schema )
Commits a new schema revision to an existing schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
SchemaName name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" );
Schema schema = Schema . newBuilder (). build ();
Schema response = schemaServiceClient . commitSchema ( name , schema );
}
Parameters
Name
Description
name
SchemaName Required. The name of the schema we are revising. Format is
projects/{project}/schemas/{schema} .
schema
Schema Required. The schema revision to commit.
Returns
Type
Description
Schema
commitSchema(String name, Schema schema)
public final Schema commitSchema ( String name , Schema schema )
Commits a new schema revision to an existing schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
String name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ();
Schema schema = Schema . newBuilder (). build ();
Schema response = schemaServiceClient . commitSchema ( name , schema );
}
Parameters
Name
Description
name
String Required. The name of the schema we are revising. Format is
projects/{project}/schemas/{schema} .
schema
Schema Required. The schema revision to commit.
Returns
Type
Description
Schema
commitSchemaCallable()
public final UnaryCallable<CommitSchemaRequest , Schema > commitSchemaCallable ()
Commits a new schema revision to an existing schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
CommitSchemaRequest request =
CommitSchemaRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setSchema ( Schema . newBuilder (). build ())
. build ();
ApiFuture<Schema> future = schemaServiceClient . commitSchemaCallable (). futureCall ( request );
// Do something.
Schema response = future . get ();
}
Returns
Type
Description
UnaryCallable < CommitSchemaRequest , Schema >
createSchema(CreateSchemaRequest request)
public final Schema createSchema ( CreateSchemaRequest request )
Creates a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
CreateSchemaRequest request =
CreateSchemaRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setSchema ( Schema . newBuilder (). build ())
. setSchemaId ( "schemaId-697673060" )
. build ();
Schema response = schemaServiceClient . createSchema ( request );
}
Parameter
Name
Description
request
CreateSchemaRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Schema
createSchema(ProjectName parent, Schema schema, String schemaId)
public final Schema createSchema ( ProjectName parent , Schema schema , String schemaId )
Creates a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
Schema schema = Schema . newBuilder (). build ();
String schemaId = "schemaId-697673060" ;
Schema response = schemaServiceClient . createSchema ( parent , schema , schemaId );
}
Parameters
Name
Description
parent
ProjectName Required. The name of the project in which to create the schema. Format is
projects/{project-id} .
schema
Schema Required. The schema object to create.
This schema's name parameter is ignored. The schema object returned by CreateSchema
will have a name made using the given parent and schema_id .
schemaId
String The ID to use for the schema, which will become the final component of the
schema's resource name.
See https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names for resource name
constraints.
Returns
Type
Description
Schema
createSchema(String parent, Schema schema, String schemaId)
public final Schema createSchema ( String parent , Schema schema , String schemaId )
Creates a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
String parent = ProjectName . of ( "[PROJECT]" ). toString ();
Schema schema = Schema . newBuilder (). build ();
String schemaId = "schemaId-697673060" ;
Schema response = schemaServiceClient . createSchema ( parent , schema , schemaId );
}
Parameters
Name
Description
parent
String Required. The name of the project in which to create the schema. Format is
projects/{project-id} .
schema
Schema Required. The schema object to create.
This schema's name parameter is ignored. The schema object returned by CreateSchema
will have a name made using the given parent and schema_id .
schemaId
String The ID to use for the schema, which will become the final component of the
schema's resource name.
See https://cloud.google.com/pubsub/docs/pubsub-basics#resource_names for resource name
constraints.
Returns
Type
Description
Schema
createSchemaCallable()
public final UnaryCallable<CreateSchemaRequest , Schema > createSchemaCallable ()
Creates a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
CreateSchemaRequest request =
CreateSchemaRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setSchema ( Schema . newBuilder (). build ())
. setSchemaId ( "schemaId-697673060" )
. build ();
ApiFuture<Schema> future = schemaServiceClient . createSchemaCallable (). futureCall ( request );
// Do something.
Schema response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateSchemaRequest , Schema >
deleteSchema(DeleteSchemaRequest request)
public final void deleteSchema ( DeleteSchemaRequest request )
Deletes a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
DeleteSchemaRequest request =
DeleteSchemaRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. build ();
schemaServiceClient . deleteSchema ( request );
}
Parameter
Name
Description
request
DeleteSchemaRequest The request object containing all of the parameters for the API call.
deleteSchema(SchemaName name)
public final void deleteSchema ( SchemaName name )
Deletes a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
SchemaName name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" );
schemaServiceClient . deleteSchema ( name );
}
Parameter
Name
Description
name
SchemaName Required. Name of the schema to delete. Format is
projects/{project}/schemas/{schema} .
deleteSchema(String name)
public final void deleteSchema ( String name )
Deletes a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
String name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ();
schemaServiceClient . deleteSchema ( name );
}
Parameter
Name
Description
name
String Required. Name of the schema to delete. Format is
projects/{project}/schemas/{schema} .
deleteSchemaCallable()
public final UnaryCallable<DeleteSchemaRequest , Empty > deleteSchemaCallable ()
Deletes a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
DeleteSchemaRequest request =
DeleteSchemaRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. build ();
ApiFuture<Empty> future = schemaServiceClient . deleteSchemaCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteSchemaRequest , Empty >
deleteSchemaRevision(DeleteSchemaRevisionRequest request)
public final Schema deleteSchemaRevision ( DeleteSchemaRevisionRequest request )
Deletes a specific schema revision.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
DeleteSchemaRevisionRequest request =
DeleteSchemaRevisionRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setRevisionId ( "revisionId-1507445162" )
. build ();
Schema response = schemaServiceClient . deleteSchemaRevision ( request );
}
Parameter
Name
Description
request
DeleteSchemaRevisionRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Schema
deleteSchemaRevision(SchemaName name, String revisionId)
public final Schema deleteSchemaRevision ( SchemaName name , String revisionId )
Deletes a specific schema revision.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
SchemaName name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" );
String revisionId = "revisionId-1507445162" ;
Schema response = schemaServiceClient . deleteSchemaRevision ( name , revisionId );
}
Parameters
Name
Description
name
SchemaName Required. The name of the schema revision to be deleted, with a revision ID
explicitly included.
Example: projects/123/schemas/my-schema@c7cfa2a8
revisionId
String Optional. This field is deprecated and should not be used for specifying the
revision ID. The revision ID should be specified via the name parameter.
Returns
Type
Description
Schema
deleteSchemaRevision(String name, String revisionId)
public final Schema deleteSchemaRevision ( String name , String revisionId )
Deletes a specific schema revision.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
String name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ();
String revisionId = "revisionId-1507445162" ;
Schema response = schemaServiceClient . deleteSchemaRevision ( name , revisionId );
}
Parameters
Name
Description
name
String Required. The name of the schema revision to be deleted, with a revision ID
explicitly included.
Example: projects/123/schemas/my-schema@c7cfa2a8
revisionId
String Optional. This field is deprecated and should not be used for specifying the
revision ID. The revision ID should be specified via the name parameter.
Returns
Type
Description
Schema
deleteSchemaRevisionCallable()
public final UnaryCallable<DeleteSchemaRevisionRequest , Schema > deleteSchemaRevisionCallable ()
Deletes a specific schema revision.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
DeleteSchemaRevisionRequest request =
DeleteSchemaRevisionRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setRevisionId ( "revisionId-1507445162" )
. build ();
ApiFuture<Schema> future =
schemaServiceClient . deleteSchemaRevisionCallable (). futureCall ( request );
// Do something.
Schema response = future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteSchemaRevisionRequest , Schema >
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
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
Policy response = schemaServiceClient . getIamPolicy ( request );
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
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
ApiFuture<Policy> future = schemaServiceClient . getIamPolicyCallable (). futureCall ( request );
// Do something.
Policy response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.GetIamPolicyRequest , com.google.iam.v1.Policy >
getSchema(GetSchemaRequest request)
public final Schema getSchema ( GetSchemaRequest request )
Gets a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
GetSchemaRequest request =
GetSchemaRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setView ( SchemaView . forNumber ( 0 ))
. build ();
Schema response = schemaServiceClient . getSchema ( request );
}
Parameter
Name
Description
request
GetSchemaRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Schema
getSchema(SchemaName name)
public final Schema getSchema ( SchemaName name )
Gets a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
SchemaName name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" );
Schema response = schemaServiceClient . getSchema ( name );
}
Parameter
Name
Description
name
SchemaName Required. The name of the schema to get. Format is
projects/{project}/schemas/{schema} .
Returns
Type
Description
Schema
getSchema(String name)
public final Schema getSchema ( String name )
Gets a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
String name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ();
Schema response = schemaServiceClient . getSchema ( name );
}
Parameter
Name
Description
name
String Required. The name of the schema to get. Format is
projects/{project}/schemas/{schema} .
Returns
Type
Description
Schema
getSchemaCallable()
public final UnaryCallable<GetSchemaRequest , Schema > getSchemaCallable ()
Gets a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
GetSchemaRequest request =
GetSchemaRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setView ( SchemaView . forNumber ( 0 ))
. build ();
ApiFuture<Schema> future = schemaServiceClient . getSchemaCallable (). futureCall ( request );
// Do something.
Schema response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetSchemaRequest , Schema >
getSettings()
public final SchemaServiceSettings getSettings ()
Returns
Type
Description
SchemaServiceSettings
getStub()
public SchemaServiceStub getStub ()
Returns
Type
Description
SchemaServiceStub
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
listSchemaRevisions(ListSchemaRevisionsRequest request)
public final SchemaServiceClient . ListSchemaRevisionsPagedResponse listSchemaRevisions ( ListSchemaRevisionsRequest request )
Lists all schema revisions for the named schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ListSchemaRevisionsRequest request =
ListSchemaRevisionsRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setView ( SchemaView . forNumber ( 0 ))
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Schema element : schemaServiceClient . listSchemaRevisions ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListSchemaRevisionsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
SchemaServiceClient.ListSchemaRevisionsPagedResponse
listSchemaRevisions(SchemaName name)
public final SchemaServiceClient . ListSchemaRevisionsPagedResponse listSchemaRevisions ( SchemaName name )
Lists all schema revisions for the named schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
SchemaName name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" );
for ( Schema element : schemaServiceClient . listSchemaRevisions ( name ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
name
SchemaName Required. The name of the schema to list revisions for.
Returns
Type
Description
SchemaServiceClient.ListSchemaRevisionsPagedResponse
listSchemaRevisions(String name)
public final SchemaServiceClient . ListSchemaRevisionsPagedResponse listSchemaRevisions ( String name )
Lists all schema revisions for the named schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
String name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ();
for ( Schema element : schemaServiceClient . listSchemaRevisions ( name ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
name
String Required. The name of the schema to list revisions for.
Returns
Type
Description
SchemaServiceClient.ListSchemaRevisionsPagedResponse
listSchemaRevisionsCallable()
public final UnaryCallable<ListSchemaRevisionsRequest , ListSchemaRevisionsResponse > listSchemaRevisionsCallable ()
Lists all schema revisions for the named schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ListSchemaRevisionsRequest request =
ListSchemaRevisionsRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setView ( SchemaView . forNumber ( 0 ))
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListSchemaRevisionsResponse response =
schemaServiceClient . listSchemaRevisionsCallable (). call ( request );
for ( Schema element : response . getSchemasList ()) {
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
UnaryCallable < ListSchemaRevisionsRequest , ListSchemaRevisionsResponse >
listSchemaRevisionsPagedCallable()
public final UnaryCallable<ListSchemaRevisionsRequest , SchemaServiceClient . ListSchemaRevisionsPagedResponse > listSchemaRevisionsPagedCallable ()
Lists all schema revisions for the named schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ListSchemaRevisionsRequest request =
ListSchemaRevisionsRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setView ( SchemaView . forNumber ( 0 ))
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Schema> future =
schemaServiceClient . listSchemaRevisionsPagedCallable (). futureCall ( request );
// Do something.
for ( Schema element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListSchemaRevisionsRequest , ListSchemaRevisionsPagedResponse >
listSchemas(ListSchemasRequest request)
public final SchemaServiceClient . ListSchemasPagedResponse listSchemas ( ListSchemasRequest request )
Lists schemas in a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ListSchemasRequest request =
ListSchemasRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setView ( SchemaView . forNumber ( 0 ))
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Schema element : schemaServiceClient . listSchemas ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListSchemasRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
SchemaServiceClient.ListSchemasPagedResponse
listSchemas(ProjectName parent)
public final SchemaServiceClient . ListSchemasPagedResponse listSchemas ( ProjectName parent )
Lists schemas in a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
for ( Schema element : schemaServiceClient . listSchemas ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
ProjectName Required. The name of the project in which to list schemas. Format is
projects/{project-id} .
Returns
Type
Description
SchemaServiceClient.ListSchemasPagedResponse
listSchemas(String parent)
public final SchemaServiceClient . ListSchemasPagedResponse listSchemas ( String parent )
Lists schemas in a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
String parent = ProjectName . of ( "[PROJECT]" ). toString ();
for ( Schema element : schemaServiceClient . listSchemas ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The name of the project in which to list schemas. Format is
projects/{project-id} .
Returns
Type
Description
SchemaServiceClient.ListSchemasPagedResponse
listSchemasCallable()
public final UnaryCallable<ListSchemasRequest , ListSchemasResponse > listSchemasCallable ()
Lists schemas in a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ListSchemasRequest request =
ListSchemasRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setView ( SchemaView . forNumber ( 0 ))
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListSchemasResponse response = schemaServiceClient . listSchemasCallable (). call ( request );
for ( Schema element : response . getSchemasList ()) {
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
UnaryCallable < ListSchemasRequest , ListSchemasResponse >
listSchemasPagedCallable()
public final UnaryCallable<ListSchemasRequest , SchemaServiceClient . ListSchemasPagedResponse > listSchemasPagedCallable ()
Lists schemas in a project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ListSchemasRequest request =
ListSchemasRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setView ( SchemaView . forNumber ( 0 ))
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Schema> future = schemaServiceClient . listSchemasPagedCallable (). futureCall ( request );
// Do something.
for ( Schema element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListSchemasRequest , ListSchemasPagedResponse >
rollbackSchema(RollbackSchemaRequest request)
public final Schema rollbackSchema ( RollbackSchemaRequest request )
Creates a new schema revision that is a copy of the provided revision_id.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
RollbackSchemaRequest request =
RollbackSchemaRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setRevisionId ( "revisionId-1507445162" )
. build ();
Schema response = schemaServiceClient . rollbackSchema ( request );
}
Parameter
Name
Description
request
RollbackSchemaRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Schema
rollbackSchema(SchemaName name, String revisionId)
public final Schema rollbackSchema ( SchemaName name , String revisionId )
Creates a new schema revision that is a copy of the provided revision_id.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
SchemaName name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" );
String revisionId = "revisionId-1507445162" ;
Schema response = schemaServiceClient . rollbackSchema ( name , revisionId );
}
Parameters
Name
Description
name
SchemaName Required. The schema being rolled back with revision id.
revisionId
String Required. The revision ID to roll back to. It must be a revision of the same
schema.
Example: c7cfa2a8
Returns
Type
Description
Schema
rollbackSchema(String name, String revisionId)
public final Schema rollbackSchema ( String name , String revisionId )
Creates a new schema revision that is a copy of the provided revision_id.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
String name = SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ();
String revisionId = "revisionId-1507445162" ;
Schema response = schemaServiceClient . rollbackSchema ( name , revisionId );
}
Parameters
Name
Description
name
String Required. The schema being rolled back with revision id.
revisionId
String Required. The revision ID to roll back to. It must be a revision of the same
schema.
Example: c7cfa2a8
Returns
Type
Description
Schema
rollbackSchemaCallable()
public final UnaryCallable<RollbackSchemaRequest , Schema > rollbackSchemaCallable ()
Creates a new schema revision that is a copy of the provided revision_id.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
RollbackSchemaRequest request =
RollbackSchemaRequest . newBuilder ()
. setName ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setRevisionId ( "revisionId-1507445162" )
. build ();
ApiFuture<Schema> future = schemaServiceClient . rollbackSchemaCallable (). futureCall ( request );
// Do something.
Schema response = future . get ();
}
Returns
Type
Description
UnaryCallable < RollbackSchemaRequest , Schema >
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
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Policy response = schemaServiceClient . setIamPolicy ( request );
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
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Policy> future = schemaServiceClient . setIamPolicyCallable (). futureCall ( request );
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
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
TestIamPermissionsResponse response = schemaServiceClient . testIamPermissions ( request );
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
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource ( SchemaName . of ( "[PROJECT]" , "[SCHEMA]" ). toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
ApiFuture<TestIamPermissionsResponse> future =
schemaServiceClient . testIamPermissionsCallable (). futureCall ( request );
// Do something.
TestIamPermissionsResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.TestIamPermissionsRequest , com.google.iam.v1.TestIamPermissionsResponse >
validateMessage(ValidateMessageRequest request)
public final ValidateMessageResponse validateMessage ( ValidateMessageRequest request )
Validates a message against a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ValidateMessageRequest request =
ValidateMessageRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setMessage ( ByteString . EMPTY )
. setEncoding ( Encoding . forNumber ( 0 ))
. build ();
ValidateMessageResponse response = schemaServiceClient . validateMessage ( request );
}
Parameter
Name
Description
request
ValidateMessageRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ValidateMessageResponse
validateMessageCallable()
public final UnaryCallable<ValidateMessageRequest , ValidateMessageResponse > validateMessageCallable ()
Validates a message against a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ValidateMessageRequest request =
ValidateMessageRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setMessage ( ByteString . EMPTY )
. setEncoding ( Encoding . forNumber ( 0 ))
. build ();
ApiFuture<ValidateMessageResponse> future =
schemaServiceClient . validateMessageCallable (). futureCall ( request );
// Do something.
ValidateMessageResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < ValidateMessageRequest , ValidateMessageResponse >
validateSchema(ProjectName parent, Schema schema)
public final ValidateSchemaResponse validateSchema ( ProjectName parent , Schema schema )
Validates a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ProjectName parent = ProjectName . of ( "[PROJECT]" );
Schema schema = Schema . newBuilder (). build ();
ValidateSchemaResponse response = schemaServiceClient . validateSchema ( parent , schema );
}
Parameters
Name
Description
parent
ProjectName Required. The name of the project in which to validate schemas. Format is
projects/{project-id} .
schema
Schema Required. The schema object to validate.
Returns
Type
Description
ValidateSchemaResponse
validateSchema(ValidateSchemaRequest request)
public final ValidateSchemaResponse validateSchema ( ValidateSchemaRequest request )
Validates a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ValidateSchemaRequest request =
ValidateSchemaRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setSchema ( Schema . newBuilder (). build ())
. build ();
ValidateSchemaResponse response = schemaServiceClient . validateSchema ( request );
}
Parameter
Name
Description
request
ValidateSchemaRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ValidateSchemaResponse
validateSchema(String parent, Schema schema)
public final ValidateSchemaResponse validateSchema ( String parent , Schema schema )
Validates a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
String parent = ProjectName . of ( "[PROJECT]" ). toString ();
Schema schema = Schema . newBuilder (). build ();
ValidateSchemaResponse response = schemaServiceClient . validateSchema ( parent , schema );
}
Parameters
Name
Description
parent
String Required. The name of the project in which to validate schemas. Format is
projects/{project-id} .
schema
Schema Required. The schema object to validate.
Returns
Type
Description
ValidateSchemaResponse
validateSchemaCallable()
public final UnaryCallable<ValidateSchemaRequest , ValidateSchemaResponse > validateSchemaCallable ()
Validates a schema.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( SchemaServiceClient schemaServiceClient = SchemaServiceClient . create ()) {
ValidateSchemaRequest request =
ValidateSchemaRequest . newBuilder ()
. setParent ( ProjectName . of ( "[PROJECT]" ). toString ())
. setSchema ( Schema . newBuilder (). build ())
. build ();
ApiFuture<ValidateSchemaResponse> future =
schemaServiceClient . validateSchemaCallable (). futureCall ( request );
// Do something.
ValidateSchemaResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < ValidateSchemaRequest , ValidateSchemaResponse >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
