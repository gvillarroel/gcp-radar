---
title: "Class AutoscalingPolicyServiceClient (4.85.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient
  title: "Class AutoscalingPolicyServiceClient (4.85.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Class AutoscalingPolicyServiceClient (4.85.0)
Stay organized with collections
Save and categorize content based on your preferences.
4.85.0 (latest)
4.84.0
4.82.0
4.80.0
4.79.0
4.78.0
4.77.0
4.75.0
4.73.0
4.72.0
4.71.0
4.70.0
4.69.0
4.67.0
4.65.0
4.64.0
4.61.0
4.60.0
4.59.0
4.57.0
4.56.0
4.55.0
4.54.0
4.53.0
4.52.0
4.51.0
4.50.0
4.49.0
4.48.0
4.46.0
4.45.0
4.44.0
4.43.0
4.42.0
4.41.0
4.40.0
4.39.0
4.38.0
4.37.0
4.36.0
4.34.0
4.33.0
4.32.0
4.31.0
4.30.0
4.29.0
4.28.0
4.27.0
4.26.0
4.25.0
4.24.0
4.21.0
4.20.0
4.19.0
4.18.0
4.17.0
4.16.0
4.15.0
4.14.0
4.13.0
4.12.0
4.11.0
4.10.0
4.9.0
4.8.0
4.6.0
4.5.0
4.4.0
4.3.0
4.2.0
4.1.0
4.0.8
3.1.2
3.0.3
2.3.1
GitHub Repository Product Reference REST Documentation RPC Documentation
Service Description: The API interface for managing autoscaling policies in the Dataproc API.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
AutoscalingPolicy policy = AutoscalingPolicy . newBuilder (). build ();
AutoscalingPolicy response =
autoscalingPolicyServiceClient . createAutoscalingPolicy ( parent , policy );
}
Note: close() needs to be called on the AutoscalingPolicyServiceClient object to clean up
resources such as threads. In the example above, try-with-resources is used, which automatically
calls close().
Methods
Method
Description
Method Variants
CreateAutoscalingPolicy
Creates new autoscaling policy.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createAutoscalingPolicy(CreateAutoscalingPolicyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
createAutoscalingPolicy(LocationName parent, AutoscalingPolicy policy)
createAutoscalingPolicy(RegionName parent, AutoscalingPolicy policy)
createAutoscalingPolicy(String parent, AutoscalingPolicy policy)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createAutoscalingPolicyCallable()
UpdateAutoscalingPolicy
Updates (replaces) autoscaling policy.
Disabled check for update_mask, because all updates will be full replacements.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateAutoscalingPolicy(UpdateAutoscalingPolicyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
updateAutoscalingPolicy(AutoscalingPolicy policy)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateAutoscalingPolicyCallable()
GetAutoscalingPolicy
Retrieves autoscaling policy.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getAutoscalingPolicy(GetAutoscalingPolicyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getAutoscalingPolicy(AutoscalingPolicyName name)
getAutoscalingPolicy(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getAutoscalingPolicyCallable()
ListAutoscalingPolicies
Lists autoscaling policies in the project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listAutoscalingPolicies(ListAutoscalingPoliciesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listAutoscalingPolicies(LocationName parent)
listAutoscalingPolicies(RegionName parent)
listAutoscalingPolicies(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listAutoscalingPoliciesPagedCallable()
listAutoscalingPoliciesCallable()
DeleteAutoscalingPolicy
Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteAutoscalingPolicy(DeleteAutoscalingPolicyRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
deleteAutoscalingPolicy(AutoscalingPolicyName name)
deleteAutoscalingPolicy(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteAutoscalingPolicyCallable()
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
This class can be customized by passing in a custom instance of
AutoscalingPolicyServiceSettings to create(). For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings =
AutoscalingPolicyServiceSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings =
AutoscalingPolicyServiceSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings =
AutoscalingPolicyServiceSettings . newHttpJsonBuilder (). build ();
AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
AutoscalingPolicyServiceClient
Static Methods
create()
public static final AutoscalingPolicyServiceClient create ()
Constructs an instance of AutoscalingPolicyServiceClient with default settings.
Returns
Type
Description
AutoscalingPolicyServiceClient
Exceptions
Type
Description
IOException
create(AutoscalingPolicyServiceSettings settings)
public static final AutoscalingPolicyServiceClient create ( AutoscalingPolicyServiceSettings settings )
Constructs an instance of AutoscalingPolicyServiceClient, using the given settings. The
channels are created based on the settings passed in, or defaults for any settings that are not
set.
Parameter
Name
Description
settings
AutoscalingPolicyServiceSettings
Returns
Type
Description
AutoscalingPolicyServiceClient
Exceptions
Type
Description
IOException
create(AutoscalingPolicyServiceStub stub)
public static final AutoscalingPolicyServiceClient create ( AutoscalingPolicyServiceStub stub )
Constructs an instance of AutoscalingPolicyServiceClient, using the given stub for making
calls. This is for advanced usage - prefer using create(AutoscalingPolicyServiceSettings).
Parameter
Name
Description
stub
AutoscalingPolicyServiceStub
Returns
Type
Description
AutoscalingPolicyServiceClient
Constructors
AutoscalingPolicyServiceClient(AutoscalingPolicyServiceSettings settings)
protected AutoscalingPolicyServiceClient ( AutoscalingPolicyServiceSettings settings )
Constructs an instance of AutoscalingPolicyServiceClient, using the given settings. This is
protected so that it is easy to make a subclass, but otherwise, the static factory methods
should be preferred.
Parameter
Name
Description
settings
AutoscalingPolicyServiceSettings
AutoscalingPolicyServiceClient(AutoscalingPolicyServiceStub stub)
protected AutoscalingPolicyServiceClient ( AutoscalingPolicyServiceStub stub )
Parameter
Name
Description
stub
AutoscalingPolicyServiceStub
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
createAutoscalingPolicy(CreateAutoscalingPolicyRequest request)
public final AutoscalingPolicy createAutoscalingPolicy ( CreateAutoscalingPolicyRequest request )
Creates new autoscaling policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
CreateAutoscalingPolicyRequest request =
CreateAutoscalingPolicyRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPolicy ( AutoscalingPolicy . newBuilder (). build ())
. build ();
AutoscalingPolicy response = autoscalingPolicyServiceClient . createAutoscalingPolicy ( request );
}
Parameter
Name
Description
request
CreateAutoscalingPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AutoscalingPolicy
createAutoscalingPolicy(LocationName parent, AutoscalingPolicy policy)
public final AutoscalingPolicy createAutoscalingPolicy ( LocationName parent , AutoscalingPolicy policy )
Creates new autoscaling policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
AutoscalingPolicy policy = AutoscalingPolicy . newBuilder (). build ();
AutoscalingPolicy response =
autoscalingPolicyServiceClient . createAutoscalingPolicy ( parent , policy );
}
Parameters
Name
Description
parent
LocationName Required. The "resource name" of the region or location, as described in
https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies.create , the resource name of the region
has the following format: projects/{project_id}/regions/{region}
For projects.locations.autoscalingPolicies.create , the resource name of the
location has the following format: projects/{project_id}/locations/{location}
policy
AutoscalingPolicy Required. The autoscaling policy to create.
Returns
Type
Description
AutoscalingPolicy
createAutoscalingPolicy(RegionName parent, AutoscalingPolicy policy)
public final AutoscalingPolicy createAutoscalingPolicy ( RegionName parent , AutoscalingPolicy policy )
Creates new autoscaling policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
RegionName parent = RegionName . of ( "[PROJECT]" , "[REGION]" );
AutoscalingPolicy policy = AutoscalingPolicy . newBuilder (). build ();
AutoscalingPolicy response =
autoscalingPolicyServiceClient . createAutoscalingPolicy ( parent , policy );
}
Parameters
Name
Description
parent
RegionName Required. The "resource name" of the region or location, as described in
https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies.create , the resource name of the region
has the following format: projects/{project_id}/regions/{region}
For projects.locations.autoscalingPolicies.create , the resource name of the
location has the following format: projects/{project_id}/locations/{location}
policy
AutoscalingPolicy Required. The autoscaling policy to create.
Returns
Type
Description
AutoscalingPolicy
createAutoscalingPolicy(String parent, AutoscalingPolicy policy)
public final AutoscalingPolicy createAutoscalingPolicy ( String parent , AutoscalingPolicy policy )
Creates new autoscaling policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
AutoscalingPolicy policy = AutoscalingPolicy . newBuilder (). build ();
AutoscalingPolicy response =
autoscalingPolicyServiceClient . createAutoscalingPolicy ( parent , policy );
}
Parameters
Name
Description
parent
String Required. The "resource name" of the region or location, as described in
https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies.create , the resource name of the region
has the following format: projects/{project_id}/regions/{region}
For projects.locations.autoscalingPolicies.create , the resource name of the
location has the following format: projects/{project_id}/locations/{location}
policy
AutoscalingPolicy Required. The autoscaling policy to create.
Returns
Type
Description
AutoscalingPolicy
createAutoscalingPolicyCallable()
public final UnaryCallable<CreateAutoscalingPolicyRequest , AutoscalingPolicy > createAutoscalingPolicyCallable ()
Creates new autoscaling policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
CreateAutoscalingPolicyRequest request =
CreateAutoscalingPolicyRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPolicy ( AutoscalingPolicy . newBuilder (). build ())
. build ();
ApiFuture<AutoscalingPolicy> future =
autoscalingPolicyServiceClient . createAutoscalingPolicyCallable (). futureCall ( request );
// Do something.
AutoscalingPolicy response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateAutoscalingPolicyRequest , AutoscalingPolicy >
deleteAutoscalingPolicy(AutoscalingPolicyName name)
public final void deleteAutoscalingPolicy ( AutoscalingPolicyName name )
Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by
one or more clusters.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
AutoscalingPolicyName name =
AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName (
"[PROJECT]" , "[LOCATION]" , "[AUTOSCALING_POLICY]" );
autoscalingPolicyServiceClient . deleteAutoscalingPolicy ( name );
}
Parameter
Name
Description
name
AutoscalingPolicyName Required. The "resource name" of the autoscaling policy, as described in
https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies.delete , the resource name of the policy
has the following format:
projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
For projects.locations.autoscalingPolicies.delete , the resource name of the policy
has the following format:
projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
deleteAutoscalingPolicy(DeleteAutoscalingPolicyRequest request)
public final void deleteAutoscalingPolicy ( DeleteAutoscalingPolicyRequest request )
Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by
one or more clusters.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
DeleteAutoscalingPolicyRequest request =
DeleteAutoscalingPolicyRequest . newBuilder ()
. setName (
AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName (
"[PROJECT]" , "[LOCATION]" , "[AUTOSCALING_POLICY]" )
. toString ())
. build ();
autoscalingPolicyServiceClient . deleteAutoscalingPolicy ( request );
}
Parameter
Name
Description
request
DeleteAutoscalingPolicyRequest The request object containing all of the parameters for the API call.
deleteAutoscalingPolicy(String name)
public final void deleteAutoscalingPolicy ( String name )
Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by
one or more clusters.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
String name =
AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName (
"[PROJECT]" , "[LOCATION]" , "[AUTOSCALING_POLICY]" )
. toString ();
autoscalingPolicyServiceClient . deleteAutoscalingPolicy ( name );
}
Parameter
Name
Description
name
String Required. The "resource name" of the autoscaling policy, as described in
https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies.delete , the resource name of the policy
has the following format:
projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
For projects.locations.autoscalingPolicies.delete , the resource name of the policy
has the following format:
projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
deleteAutoscalingPolicyCallable()
public final UnaryCallable<DeleteAutoscalingPolicyRequest , Empty > deleteAutoscalingPolicyCallable ()
Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by
one or more clusters.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
DeleteAutoscalingPolicyRequest request =
DeleteAutoscalingPolicyRequest . newBuilder ()
. setName (
AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName (
"[PROJECT]" , "[LOCATION]" , "[AUTOSCALING_POLICY]" )
. toString ())
. build ();
ApiFuture<Empty> future =
autoscalingPolicyServiceClient . deleteAutoscalingPolicyCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteAutoscalingPolicyRequest , Empty >
getAutoscalingPolicy(AutoscalingPolicyName name)
public final AutoscalingPolicy getAutoscalingPolicy ( AutoscalingPolicyName name )
Retrieves autoscaling policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
AutoscalingPolicyName name =
AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName (
"[PROJECT]" , "[LOCATION]" , "[AUTOSCALING_POLICY]" );
AutoscalingPolicy response = autoscalingPolicyServiceClient . getAutoscalingPolicy ( name );
}
Parameter
Name
Description
name
AutoscalingPolicyName Required. The "resource name" of the autoscaling policy, as described in
https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies.get , the resource name of the policy has
the following format:
projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
For projects.locations.autoscalingPolicies.get , the resource name of the policy has
the following format:
projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
Returns
Type
Description
AutoscalingPolicy
getAutoscalingPolicy(GetAutoscalingPolicyRequest request)
public final AutoscalingPolicy getAutoscalingPolicy ( GetAutoscalingPolicyRequest request )
Retrieves autoscaling policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
GetAutoscalingPolicyRequest request =
GetAutoscalingPolicyRequest . newBuilder ()
. setName (
AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName (
"[PROJECT]" , "[LOCATION]" , "[AUTOSCALING_POLICY]" )
. toString ())
. build ();
AutoscalingPolicy response = autoscalingPolicyServiceClient . getAutoscalingPolicy ( request );
}
Parameter
Name
Description
request
GetAutoscalingPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AutoscalingPolicy
getAutoscalingPolicy(String name)
public final AutoscalingPolicy getAutoscalingPolicy ( String name )
Retrieves autoscaling policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
String name =
AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName (
"[PROJECT]" , "[LOCATION]" , "[AUTOSCALING_POLICY]" )
. toString ();
AutoscalingPolicy response = autoscalingPolicyServiceClient . getAutoscalingPolicy ( name );
}
Parameter
Name
Description
name
String Required. The "resource name" of the autoscaling policy, as described in
https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies.get , the resource name of the policy has
the following format:
projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}
For projects.locations.autoscalingPolicies.get , the resource name of the policy has
the following format:
projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
Returns
Type
Description
AutoscalingPolicy
getAutoscalingPolicyCallable()
public final UnaryCallable<GetAutoscalingPolicyRequest , AutoscalingPolicy > getAutoscalingPolicyCallable ()
Retrieves autoscaling policy.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
GetAutoscalingPolicyRequest request =
GetAutoscalingPolicyRequest . newBuilder ()
. setName (
AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName (
"[PROJECT]" , "[LOCATION]" , "[AUTOSCALING_POLICY]" )
. toString ())
. build ();
ApiFuture<AutoscalingPolicy> future =
autoscalingPolicyServiceClient . getAutoscalingPolicyCallable (). futureCall ( request );
// Do something.
AutoscalingPolicy response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetAutoscalingPolicyRequest , AutoscalingPolicy >
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
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource (
AutoscalingPolicyName . ofProjectRegionAutoscalingPolicyName (
"[PROJECT]" , "[REGION]" , "[AUTOSCALING_POLICY]" )
. toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
Policy response = autoscalingPolicyServiceClient . getIamPolicy ( request );
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
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource (
AutoscalingPolicyName . ofProjectRegionAutoscalingPolicyName (
"[PROJECT]" , "[REGION]" , "[AUTOSCALING_POLICY]" )
. toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
ApiFuture<Policy> future =
autoscalingPolicyServiceClient . getIamPolicyCallable (). futureCall ( request );
// Do something.
Policy response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.GetIamPolicyRequest , com.google.iam.v1.Policy >
getSettings()
public final AutoscalingPolicyServiceSettings getSettings ()
Returns
Type
Description
AutoscalingPolicyServiceSettings
getStub()
public AutoscalingPolicyServiceStub getStub ()
Returns
Type
Description
AutoscalingPolicyServiceStub
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
listAutoscalingPolicies(ListAutoscalingPoliciesRequest request)
public final AutoscalingPolicyServiceClient . ListAutoscalingPoliciesPagedResponse listAutoscalingPolicies ( ListAutoscalingPoliciesRequest request )
Lists autoscaling policies in the project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
ListAutoscalingPoliciesRequest request =
ListAutoscalingPoliciesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( AutoscalingPolicy element :
autoscalingPolicyServiceClient . listAutoscalingPolicies ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListAutoscalingPoliciesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AutoscalingPolicyServiceClient.ListAutoscalingPoliciesPagedResponse
listAutoscalingPolicies(LocationName parent)
public final AutoscalingPolicyServiceClient . ListAutoscalingPoliciesPagedResponse listAutoscalingPolicies ( LocationName parent )
Lists autoscaling policies in the project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( AutoscalingPolicy element :
autoscalingPolicyServiceClient . listAutoscalingPolicies ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. The "resource name" of the region or location, as described in
https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies.list , the resource name of the region has
the following format: projects/{project_id}/regions/{region}
For projects.locations.autoscalingPolicies.list , the resource name of the location
has the following format: projects/{project_id}/locations/{location}
Returns
Type
Description
AutoscalingPolicyServiceClient.ListAutoscalingPoliciesPagedResponse
listAutoscalingPolicies(RegionName parent)
public final AutoscalingPolicyServiceClient . ListAutoscalingPoliciesPagedResponse listAutoscalingPolicies ( RegionName parent )
Lists autoscaling policies in the project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
RegionName parent = RegionName . of ( "[PROJECT]" , "[REGION]" );
for ( AutoscalingPolicy element :
autoscalingPolicyServiceClient . listAutoscalingPolicies ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
RegionName Required. The "resource name" of the region or location, as described in
https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies.list , the resource name of the region has
the following format: projects/{project_id}/regions/{region}
For projects.locations.autoscalingPolicies.list , the resource name of the location
has the following format: projects/{project_id}/locations/{location}
Returns
Type
Description
AutoscalingPolicyServiceClient.ListAutoscalingPoliciesPagedResponse
listAutoscalingPolicies(String parent)
public final AutoscalingPolicyServiceClient . ListAutoscalingPoliciesPagedResponse listAutoscalingPolicies ( String parent )
Lists autoscaling policies in the project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( AutoscalingPolicy element :
autoscalingPolicyServiceClient . listAutoscalingPolicies ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. The "resource name" of the region or location, as described in
https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies.list , the resource name of the region has
the following format: projects/{project_id}/regions/{region}
For projects.locations.autoscalingPolicies.list , the resource name of the location
has the following format: projects/{project_id}/locations/{location}
Returns
Type
Description
AutoscalingPolicyServiceClient.ListAutoscalingPoliciesPagedResponse
listAutoscalingPoliciesCallable()
public final UnaryCallable<ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesResponse > listAutoscalingPoliciesCallable ()
Lists autoscaling policies in the project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
ListAutoscalingPoliciesRequest request =
ListAutoscalingPoliciesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListAutoscalingPoliciesResponse response =
autoscalingPolicyServiceClient . listAutoscalingPoliciesCallable (). call ( request );
for ( AutoscalingPolicy element : response . getPoliciesList ()) {
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
UnaryCallable < ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesResponse >
listAutoscalingPoliciesPagedCallable()
public final UnaryCallable<ListAutoscalingPoliciesRequest , AutoscalingPolicyServiceClient . ListAutoscalingPoliciesPagedResponse > listAutoscalingPoliciesPagedCallable ()
Lists autoscaling policies in the project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
ListAutoscalingPoliciesRequest request =
ListAutoscalingPoliciesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<AutoscalingPolicy> future =
autoscalingPolicyServiceClient . listAutoscalingPoliciesPagedCallable (). futureCall ( request );
// Do something.
for ( AutoscalingPolicy element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesPagedResponse >
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
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource (
AutoscalingPolicyName . ofProjectRegionAutoscalingPolicyName (
"[PROJECT]" , "[REGION]" , "[AUTOSCALING_POLICY]" )
. toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Policy response = autoscalingPolicyServiceClient . setIamPolicy ( request );
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
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource (
AutoscalingPolicyName . ofProjectRegionAutoscalingPolicyName (
"[PROJECT]" , "[REGION]" , "[AUTOSCALING_POLICY]" )
. toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Policy> future =
autoscalingPolicyServiceClient . setIamPolicyCallable (). futureCall ( request );
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
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource (
AutoscalingPolicyName . ofProjectRegionAutoscalingPolicyName (
"[PROJECT]" , "[REGION]" , "[AUTOSCALING_POLICY]" )
. toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
TestIamPermissionsResponse response =
autoscalingPolicyServiceClient . testIamPermissions ( request );
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
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource (
AutoscalingPolicyName . ofProjectRegionAutoscalingPolicyName (
"[PROJECT]" , "[REGION]" , "[AUTOSCALING_POLICY]" )
. toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
ApiFuture<TestIamPermissionsResponse> future =
autoscalingPolicyServiceClient . testIamPermissionsCallable (). futureCall ( request );
// Do something.
TestIamPermissionsResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.TestIamPermissionsRequest , com.google.iam.v1.TestIamPermissionsResponse >
updateAutoscalingPolicy(AutoscalingPolicy policy)
public final AutoscalingPolicy updateAutoscalingPolicy ( AutoscalingPolicy policy )
Updates (replaces) autoscaling policy.
Disabled check for update_mask, because all updates will be full replacements.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
AutoscalingPolicy policy = AutoscalingPolicy . newBuilder (). build ();
AutoscalingPolicy response = autoscalingPolicyServiceClient . updateAutoscalingPolicy ( policy );
}
Parameter
Name
Description
policy
AutoscalingPolicy Required. The updated autoscaling policy.
Returns
Type
Description
AutoscalingPolicy
updateAutoscalingPolicy(UpdateAutoscalingPolicyRequest request)
public final AutoscalingPolicy updateAutoscalingPolicy ( UpdateAutoscalingPolicyRequest request )
Updates (replaces) autoscaling policy.
Disabled check for update_mask, because all updates will be full replacements.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
UpdateAutoscalingPolicyRequest request =
UpdateAutoscalingPolicyRequest . newBuilder ()
. setPolicy ( AutoscalingPolicy . newBuilder (). build ())
. build ();
AutoscalingPolicy response = autoscalingPolicyServiceClient . updateAutoscalingPolicy ( request );
}
Parameter
Name
Description
request
UpdateAutoscalingPolicyRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AutoscalingPolicy
updateAutoscalingPolicyCallable()
public final UnaryCallable<UpdateAutoscalingPolicyRequest , AutoscalingPolicy > updateAutoscalingPolicyCallable ()
Updates (replaces) autoscaling policy.
Disabled check for update_mask, because all updates will be full replacements.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient =
AutoscalingPolicyServiceClient . create ()) {
UpdateAutoscalingPolicyRequest request =
UpdateAutoscalingPolicyRequest . newBuilder ()
. setPolicy ( AutoscalingPolicy . newBuilder (). build ())
. build ();
ApiFuture<AutoscalingPolicy> future =
autoscalingPolicyServiceClient . updateAutoscalingPolicyCallable (). futureCall ( request );
// Do something.
AutoscalingPolicy response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateAutoscalingPolicyRequest , AutoscalingPolicy >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
