---
title: "Class AppHubClient (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient
  title: "Class AppHubClient (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class AppHubClient (0.52.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.52.0 (latest)
0.51.0
0.49.0
0.47.0
0.46.0
0.45.0
0.44.0
0.42.0
0.40.0
0.39.0
0.38.0
0.37.0
0.36.0
0.34.0
0.32.0
0.31.0
0.28.0
0.27.0
0.26.0
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
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.0
0.1.0
GitHub Repository Product Reference RPC Documentation
Service Description: The App Hub API allows you to manage App Hub resources.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LocationName name = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
LookupServiceProjectAttachmentResponse response =
appHubClient . lookupServiceProjectAttachment ( name );
}
Note: close() needs to be called on the AppHubClient object to clean up resources such as
threads. In the example above, try-with-resources is used, which automatically calls close().
Methods
Method
Description
Method Variants
LookupServiceProjectAttachment
Lists a service project attachment for a given service project. You can call this API from any project to find if it is attached to a host project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
lookupServiceProjectAttachment(LookupServiceProjectAttachmentRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
lookupServiceProjectAttachment(LocationName name)
lookupServiceProjectAttachment(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
lookupServiceProjectAttachmentCallable()
ListServiceProjectAttachments
Lists service projects attached to the host project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listServiceProjectAttachments(ListServiceProjectAttachmentsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listServiceProjectAttachments(LocationName parent)
listServiceProjectAttachments(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listServiceProjectAttachmentsPagedCallable()
listServiceProjectAttachmentsCallable()
CreateServiceProjectAttachment
Attaches a service project to the host project.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createServiceProjectAttachmentAsync(CreateServiceProjectAttachmentRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createServiceProjectAttachmentAsync(LocationName parent, ServiceProjectAttachment serviceProjectAttachment, String serviceProjectAttachmentId)
createServiceProjectAttachmentAsync(String parent, ServiceProjectAttachment serviceProjectAttachment, String serviceProjectAttachmentId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createServiceProjectAttachmentOperationCallable()
createServiceProjectAttachmentCallable()
GetServiceProjectAttachment
Gets a service project attachment.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getServiceProjectAttachment(GetServiceProjectAttachmentRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getServiceProjectAttachment(ServiceProjectAttachmentName name)
getServiceProjectAttachment(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getServiceProjectAttachmentCallable()
DeleteServiceProjectAttachment
Deletes a service project attachment.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteServiceProjectAttachmentAsync(DeleteServiceProjectAttachmentRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteServiceProjectAttachmentAsync(ServiceProjectAttachmentName name)
deleteServiceProjectAttachmentAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteServiceProjectAttachmentOperationCallable()
deleteServiceProjectAttachmentCallable()
DetachServiceProjectAttachment
Detaches a service project from a host project. You can call this API from any service project without needing access to the host project that it is attached to.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
detachServiceProjectAttachment(DetachServiceProjectAttachmentRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
detachServiceProjectAttachment(LocationName name)
detachServiceProjectAttachment(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
detachServiceProjectAttachmentCallable()
ListDiscoveredServices
Lists Discovered Services that can be added to an Application in a host project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listDiscoveredServices(ListDiscoveredServicesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listDiscoveredServices(LocationName parent)
listDiscoveredServices(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listDiscoveredServicesPagedCallable()
listDiscoveredServicesCallable()
GetDiscoveredService
Gets a Discovered Service in a host project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getDiscoveredService(GetDiscoveredServiceRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getDiscoveredService(DiscoveredServiceName name)
getDiscoveredService(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getDiscoveredServiceCallable()
LookupDiscoveredService
Lists a Discovered Service in a host project and location, with a given resource URI.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
lookupDiscoveredService(LookupDiscoveredServiceRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
lookupDiscoveredService(LocationName parent, String uri)
lookupDiscoveredService(String parent, String uri)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
lookupDiscoveredServiceCallable()
ListServices
Lists Services in an Application.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listServices(ListServicesRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listServices(ApplicationName parent)
listServices(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listServicesPagedCallable()
listServicesCallable()
CreateService
Creates a Service in an Application.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createServiceAsync(CreateServiceRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createServiceAsync(ApplicationName parent, Service service, String serviceId)
createServiceAsync(String parent, Service service, String serviceId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createServiceOperationCallable()
createServiceCallable()
GetService
Gets a Service in an Application.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getService(GetServiceRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getService(ServiceName name)
getService(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getServiceCallable()
UpdateService
Updates a Service in an Application.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateServiceAsync(UpdateServiceRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
updateServiceAsync(Service service, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateServiceOperationCallable()
updateServiceCallable()
DeleteService
Deletes a Service from an Application.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteServiceAsync(DeleteServiceRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteServiceAsync(ServiceName name)
deleteServiceAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteServiceOperationCallable()
deleteServiceCallable()
ListDiscoveredWorkloads
Lists Discovered Workloads that can be added to an Application in a host project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listDiscoveredWorkloads(ListDiscoveredWorkloadsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listDiscoveredWorkloads(LocationName parent)
listDiscoveredWorkloads(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listDiscoveredWorkloadsPagedCallable()
listDiscoveredWorkloadsCallable()
GetDiscoveredWorkload
Gets a Discovered Workload in a host project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getDiscoveredWorkload(GetDiscoveredWorkloadRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getDiscoveredWorkload(DiscoveredWorkloadName name)
getDiscoveredWorkload(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getDiscoveredWorkloadCallable()
LookupDiscoveredWorkload
Lists a Discovered Workload in a host project and location, with a given resource URI.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
lookupDiscoveredWorkload(LookupDiscoveredWorkloadRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
lookupDiscoveredWorkload(LocationName parent, String uri)
lookupDiscoveredWorkload(String parent, String uri)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
lookupDiscoveredWorkloadCallable()
ListWorkloads
Lists Workloads in an Application.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listWorkloads(ListWorkloadsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listWorkloads(ApplicationName parent)
listWorkloads(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listWorkloadsPagedCallable()
listWorkloadsCallable()
CreateWorkload
Creates a Workload in an Application.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createWorkloadAsync(CreateWorkloadRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createWorkloadAsync(ApplicationName parent, Workload workload, String workloadId)
createWorkloadAsync(String parent, Workload workload, String workloadId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createWorkloadOperationCallable()
createWorkloadCallable()
GetWorkload
Gets a Workload in an Application.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getWorkload(GetWorkloadRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getWorkload(WorkloadName name)
getWorkload(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getWorkloadCallable()
UpdateWorkload
Updates a Workload in an Application.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateWorkloadAsync(UpdateWorkloadRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
updateWorkloadAsync(Workload workload, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateWorkloadOperationCallable()
updateWorkloadCallable()
DeleteWorkload
Deletes a Workload from an Application.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteWorkloadAsync(DeleteWorkloadRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteWorkloadAsync(WorkloadName name)
deleteWorkloadAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteWorkloadOperationCallable()
deleteWorkloadCallable()
ListApplications
Lists Applications in a host project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listApplications(ListApplicationsRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
listApplications(LocationName parent)
listApplications(String parent)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listApplicationsPagedCallable()
listApplicationsCallable()
CreateApplication
Creates an Application in a host project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
createApplicationAsync(CreateApplicationRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
createApplicationAsync(LocationName parent, Application application, String applicationId)
createApplicationAsync(String parent, Application application, String applicationId)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
createApplicationOperationCallable()
createApplicationCallable()
GetApplication
Gets an Application in a host project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getApplication(GetApplicationRequest request)
"Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method.
getApplication(ApplicationName name)
getApplication(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getApplicationCallable()
UpdateApplication
Updates an Application in a host project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
updateApplicationAsync(UpdateApplicationRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
updateApplicationAsync(Application application, FieldMask updateMask)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
updateApplicationOperationCallable()
updateApplicationCallable()
DeleteApplication
Deletes an Application in a host project and location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
deleteApplicationAsync(DeleteApplicationRequest request)
Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service.
deleteApplicationAsync(ApplicationName name)
deleteApplicationAsync(String name)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
deleteApplicationOperationCallable()
deleteApplicationCallable()
ListLocations
Lists information about the supported locations for this service.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
listLocations(ListLocationsRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
listLocationsPagedCallable()
listLocationsCallable()
GetLocation
Gets information about a location.
Request object method variants only take one parameter, a request object, which must be constructed before the call.
getLocation(GetLocationRequest request)
Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service.
getLocationCallable()
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
This class can be customized by passing in a custom instance of AppHubSettings to create().
For example:
To customize credentials:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
AppHubSettings appHubSettings =
AppHubSettings . newBuilder ()
. setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials ))
. build ();
AppHubClient appHubClient = AppHubClient . create ( appHubSettings );
To customize the endpoint:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
AppHubSettings appHubSettings = AppHubSettings . newBuilder (). setEndpoint ( myEndpoint ). build ();
AppHubClient appHubClient = AppHubClient . create ( appHubSettings );
To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over
the wire:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
AppHubSettings appHubSettings = AppHubSettings . newHttpJsonBuilder (). build ();
AppHubClient appHubClient = AppHubClient . create ( appHubSettings );
Please refer to the GitHub repository's samples for more quickstart code snippets.
Inheritance
java.lang.Object >
AppHubClient
Static Methods
create()
public static final AppHubClient create ()
Constructs an instance of AppHubClient with default settings.
Returns
Type
Description
AppHubClient
Exceptions
Type
Description
IOException
create(AppHubSettings settings)
public static final AppHubClient create ( AppHubSettings settings )
Constructs an instance of AppHubClient, using the given settings. The channels are created
based on the settings passed in, or defaults for any settings that are not set.
Parameter
Name
Description
settings
AppHubSettings
Returns
Type
Description
AppHubClient
Exceptions
Type
Description
IOException
create(AppHubStub stub)
public static final AppHubClient create ( AppHubStub stub )
Constructs an instance of AppHubClient, using the given stub for making calls. This is for
advanced usage - prefer using create(AppHubSettings).
Parameter
Name
Description
stub
AppHubStub
Returns
Type
Description
AppHubClient
Constructors
AppHubClient(AppHubSettings settings)
protected AppHubClient ( AppHubSettings settings )
Constructs an instance of AppHubClient, using the given settings. This is protected so that it
is easy to make a subclass, but otherwise, the static factory methods should be preferred.
Parameter
Name
Description
settings
AppHubSettings
AppHubClient(AppHubStub stub)
protected AppHubClient ( AppHubStub stub )
Parameter
Name
Description
stub
AppHubStub
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
createApplicationAsync(CreateApplicationRequest request)
public final OperationFuture<Application , OperationMetadata > createApplicationAsync ( CreateApplicationRequest request )
Creates an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateApplicationRequest request =
CreateApplicationRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setApplicationId ( "applicationId-1011352949" )
. setApplication ( Application . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
Application response = appHubClient . createApplicationAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateApplicationRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Application , OperationMetadata >
createApplicationAsync(LocationName parent, Application application, String applicationId)
public final OperationFuture<Application , OperationMetadata > createApplicationAsync ( LocationName parent , Application application , String applicationId )
Creates an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
Application application = Application . newBuilder (). build ();
String applicationId = "applicationId-1011352949" ;
Application response =
appHubClient . createApplicationAsync ( parent , application , applicationId ). get ();
}
Parameters
Name
Description
parent
LocationName Required. Project and location to create Application in. Expected format:
projects/{project}/locations/{location} .
application
Application Required. The resource being created
applicationId
String Required. The Application identifier. Must contain only lowercase letters,
numbers or hyphens, with the first character a letter, the last a letter or a number, and a
63 character maximum.
Returns
Type
Description
OperationFuture < Application , OperationMetadata >
createApplicationAsync(String parent, Application application, String applicationId)
public final OperationFuture<Application , OperationMetadata > createApplicationAsync ( String parent , Application application , String applicationId )
Creates an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
Application application = Application . newBuilder (). build ();
String applicationId = "applicationId-1011352949" ;
Application response =
appHubClient . createApplicationAsync ( parent , application , applicationId ). get ();
}
Parameters
Name
Description
parent
String Required. Project and location to create Application in. Expected format:
projects/{project}/locations/{location} .
application
Application Required. The resource being created
applicationId
String Required. The Application identifier. Must contain only lowercase letters,
numbers or hyphens, with the first character a letter, the last a letter or a number, and a
63 character maximum.
Returns
Type
Description
OperationFuture < Application , OperationMetadata >
createApplicationCallable()
public final UnaryCallable<CreateApplicationRequest , Operation > createApplicationCallable ()
Creates an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateApplicationRequest request =
CreateApplicationRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setApplicationId ( "applicationId-1011352949" )
. setApplication ( Application . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future = appHubClient . createApplicationCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateApplicationRequest , Operation >
createApplicationOperationCallable()
public final OperationCallable<CreateApplicationRequest , Application , OperationMetadata > createApplicationOperationCallable ()
Creates an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateApplicationRequest request =
CreateApplicationRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setApplicationId ( "applicationId-1011352949" )
. setApplication ( Application . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
OperationFuture<Application , OperationMetadata > future =
appHubClient . createApplicationOperationCallable (). futureCall ( request );
// Do something.
Application response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateApplicationRequest , Application , OperationMetadata >
createServiceAsync(ApplicationName parent, Service service, String serviceId)
public final OperationFuture<Service , OperationMetadata > createServiceAsync ( ApplicationName parent , Service service , String serviceId )
Creates a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ApplicationName parent = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" );
Service service = Service . newBuilder (). build ();
String serviceId = "serviceId-194185552" ;
Service response = appHubClient . createServiceAsync ( parent , service , serviceId ). get ();
}
Parameters
Name
Description
parent
ApplicationName Required. Fully qualified name of the parent Application to create the Service
in. Expected format: projects/{project}/locations/{location}/applications/{application} .
service
Service Required. The resource being created.
serviceId
String Required. The Service identifier. Must contain only lowercase letters, numbers
or hyphens, with the first character a letter, the last a letter or a number, and a 63
character maximum.
Returns
Type
Description
OperationFuture < Service , OperationMetadata >
createServiceAsync(CreateServiceRequest request)
public final OperationFuture<Service , OperationMetadata > createServiceAsync ( CreateServiceRequest request )
Creates a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateServiceRequest request =
CreateServiceRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setServiceId ( "serviceId-194185552" )
. setService ( Service . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
Service response = appHubClient . createServiceAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateServiceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Service , OperationMetadata >
createServiceAsync(String parent, Service service, String serviceId)
public final OperationFuture<Service , OperationMetadata > createServiceAsync ( String parent , Service service , String serviceId )
Creates a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ();
Service service = Service . newBuilder (). build ();
String serviceId = "serviceId-194185552" ;
Service response = appHubClient . createServiceAsync ( parent , service , serviceId ). get ();
}
Parameters
Name
Description
parent
String Required. Fully qualified name of the parent Application to create the Service
in. Expected format: projects/{project}/locations/{location}/applications/{application} .
service
Service Required. The resource being created.
serviceId
String Required. The Service identifier. Must contain only lowercase letters, numbers
or hyphens, with the first character a letter, the last a letter or a number, and a 63
character maximum.
Returns
Type
Description
OperationFuture < Service , OperationMetadata >
createServiceCallable()
public final UnaryCallable<CreateServiceRequest , Operation > createServiceCallable ()
Creates a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateServiceRequest request =
CreateServiceRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setServiceId ( "serviceId-194185552" )
. setService ( Service . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future = appHubClient . createServiceCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateServiceRequest , Operation >
createServiceOperationCallable()
public final OperationCallable<CreateServiceRequest , Service , OperationMetadata > createServiceOperationCallable ()
Creates a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateServiceRequest request =
CreateServiceRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setServiceId ( "serviceId-194185552" )
. setService ( Service . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
OperationFuture<Service , OperationMetadata > future =
appHubClient . createServiceOperationCallable (). futureCall ( request );
// Do something.
Service response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateServiceRequest , Service , OperationMetadata >
createServiceProjectAttachmentAsync(CreateServiceProjectAttachmentRequest request)
public final OperationFuture<ServiceProjectAttachment , OperationMetadata > createServiceProjectAttachmentAsync ( CreateServiceProjectAttachmentRequest request )
Attaches a service project to the host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateServiceProjectAttachmentRequest request =
CreateServiceProjectAttachmentRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setServiceProjectAttachmentId ( "serviceProjectAttachmentId-1738589598" )
. setServiceProjectAttachment ( ServiceProjectAttachment . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
ServiceProjectAttachment response =
appHubClient . createServiceProjectAttachmentAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateServiceProjectAttachmentRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < ServiceProjectAttachment , OperationMetadata >
createServiceProjectAttachmentAsync(LocationName parent, ServiceProjectAttachment serviceProjectAttachment, String serviceProjectAttachmentId)
public final OperationFuture<ServiceProjectAttachment , OperationMetadata > createServiceProjectAttachmentAsync ( LocationName parent , ServiceProjectAttachment serviceProjectAttachment , String serviceProjectAttachmentId )
Attaches a service project to the host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
ServiceProjectAttachment serviceProjectAttachment =
ServiceProjectAttachment . newBuilder (). build ();
String serviceProjectAttachmentId = "serviceProjectAttachmentId-1738589598" ;
ServiceProjectAttachment response =
appHubClient
. createServiceProjectAttachmentAsync (
parent , serviceProjectAttachment , serviceProjectAttachmentId )
. get ();
}
Parameters
Name
Description
parent
LocationName Required. Host project ID and location to which service project is being
attached. Only global location is supported. Expected format:
projects/{project}/locations/{location} .
serviceProjectAttachment
ServiceProjectAttachment Required. The resource being created.
serviceProjectAttachmentId
String Required. The service project attachment identifier must
contain the project id of the service project specified in the
service_project_attachment.service_project field.
Returns
Type
Description
OperationFuture < ServiceProjectAttachment , OperationMetadata >
createServiceProjectAttachmentAsync(String parent, ServiceProjectAttachment serviceProjectAttachment, String serviceProjectAttachmentId)
public final OperationFuture<ServiceProjectAttachment , OperationMetadata > createServiceProjectAttachmentAsync ( String parent , ServiceProjectAttachment serviceProjectAttachment , String serviceProjectAttachmentId )
Attaches a service project to the host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
ServiceProjectAttachment serviceProjectAttachment =
ServiceProjectAttachment . newBuilder (). build ();
String serviceProjectAttachmentId = "serviceProjectAttachmentId-1738589598" ;
ServiceProjectAttachment response =
appHubClient
. createServiceProjectAttachmentAsync (
parent , serviceProjectAttachment , serviceProjectAttachmentId )
. get ();
}
Parameters
Name
Description
parent
String Required. Host project ID and location to which service project is being
attached. Only global location is supported. Expected format:
projects/{project}/locations/{location} .
serviceProjectAttachment
ServiceProjectAttachment Required. The resource being created.
serviceProjectAttachmentId
String Required. The service project attachment identifier must
contain the project id of the service project specified in the
service_project_attachment.service_project field.
Returns
Type
Description
OperationFuture < ServiceProjectAttachment , OperationMetadata >
createServiceProjectAttachmentCallable()
public final UnaryCallable<CreateServiceProjectAttachmentRequest , Operation > createServiceProjectAttachmentCallable ()
Attaches a service project to the host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateServiceProjectAttachmentRequest request =
CreateServiceProjectAttachmentRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setServiceProjectAttachmentId ( "serviceProjectAttachmentId-1738589598" )
. setServiceProjectAttachment ( ServiceProjectAttachment . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future =
appHubClient . createServiceProjectAttachmentCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateServiceProjectAttachmentRequest , Operation >
createServiceProjectAttachmentOperationCallable()
public final OperationCallable<CreateServiceProjectAttachmentRequest , ServiceProjectAttachment , OperationMetadata > createServiceProjectAttachmentOperationCallable ()
Attaches a service project to the host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateServiceProjectAttachmentRequest request =
CreateServiceProjectAttachmentRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setServiceProjectAttachmentId ( "serviceProjectAttachmentId-1738589598" )
. setServiceProjectAttachment ( ServiceProjectAttachment . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
OperationFuture<ServiceProjectAttachment , OperationMetadata > future =
appHubClient . createServiceProjectAttachmentOperationCallable (). futureCall ( request );
// Do something.
ServiceProjectAttachment response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateServiceProjectAttachmentRequest , ServiceProjectAttachment , OperationMetadata >
createWorkloadAsync(ApplicationName parent, Workload workload, String workloadId)
public final OperationFuture<Workload , OperationMetadata > createWorkloadAsync ( ApplicationName parent , Workload workload , String workloadId )
Creates a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ApplicationName parent = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" );
Workload workload = Workload . newBuilder (). build ();
String workloadId = "workloadId-186277134" ;
Workload response = appHubClient . createWorkloadAsync ( parent , workload , workloadId ). get ();
}
Parameters
Name
Description
parent
ApplicationName Required. Fully qualified name of the Application to create Workload in. Expected
format: projects/{project}/locations/{location}/applications/{application} .
workload
Workload Required. The resource being created.
workloadId
String Required. The Workload identifier. Must contain only lowercase letters,
numbers or hyphens, with the first character a letter, the last a letter or a number, and a
63 character maximum.
Returns
Type
Description
OperationFuture < Workload , OperationMetadata >
createWorkloadAsync(CreateWorkloadRequest request)
public final OperationFuture<Workload , OperationMetadata > createWorkloadAsync ( CreateWorkloadRequest request )
Creates a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateWorkloadRequest request =
CreateWorkloadRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setWorkloadId ( "workloadId-186277134" )
. setWorkload ( Workload . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
Workload response = appHubClient . createWorkloadAsync ( request ). get ();
}
Parameter
Name
Description
request
CreateWorkloadRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Workload , OperationMetadata >
createWorkloadAsync(String parent, Workload workload, String workloadId)
public final OperationFuture<Workload , OperationMetadata > createWorkloadAsync ( String parent , Workload workload , String workloadId )
Creates a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ();
Workload workload = Workload . newBuilder (). build ();
String workloadId = "workloadId-186277134" ;
Workload response = appHubClient . createWorkloadAsync ( parent , workload , workloadId ). get ();
}
Parameters
Name
Description
parent
String Required. Fully qualified name of the Application to create Workload in. Expected
format: projects/{project}/locations/{location}/applications/{application} .
workload
Workload Required. The resource being created.
workloadId
String Required. The Workload identifier. Must contain only lowercase letters,
numbers or hyphens, with the first character a letter, the last a letter or a number, and a
63 character maximum.
Returns
Type
Description
OperationFuture < Workload , OperationMetadata >
createWorkloadCallable()
public final UnaryCallable<CreateWorkloadRequest , Operation > createWorkloadCallable ()
Creates a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateWorkloadRequest request =
CreateWorkloadRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setWorkloadId ( "workloadId-186277134" )
. setWorkload ( Workload . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future = appHubClient . createWorkloadCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < CreateWorkloadRequest , Operation >
createWorkloadOperationCallable()
public final OperationCallable<CreateWorkloadRequest , Workload , OperationMetadata > createWorkloadOperationCallable ()
Creates a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
CreateWorkloadRequest request =
CreateWorkloadRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setWorkloadId ( "workloadId-186277134" )
. setWorkload ( Workload . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
OperationFuture<Workload , OperationMetadata > future =
appHubClient . createWorkloadOperationCallable (). futureCall ( request );
// Do something.
Workload response = future . get ();
}
Returns
Type
Description
OperationCallable < CreateWorkloadRequest , Workload , OperationMetadata >
deleteApplicationAsync(ApplicationName name)
public final OperationFuture<Empty , OperationMetadata > deleteApplicationAsync ( ApplicationName name )
Deletes an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ApplicationName name = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" );
appHubClient . deleteApplicationAsync ( name ). get ();
}
Parameter
Name
Description
name
ApplicationName Required. Fully qualified name of the Application to delete. Expected format:
projects/{project}/locations/{location}/applications/{application} .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteApplicationAsync(DeleteApplicationRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteApplicationAsync ( DeleteApplicationRequest request )
Deletes an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteApplicationRequest request =
DeleteApplicationRequest . newBuilder ()
. setName ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setRequestId ( "requestId693933066" )
. build ();
appHubClient . deleteApplicationAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteApplicationRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteApplicationAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteApplicationAsync ( String name )
Deletes an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ();
appHubClient . deleteApplicationAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. Fully qualified name of the Application to delete. Expected format:
projects/{project}/locations/{location}/applications/{application} .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteApplicationCallable()
public final UnaryCallable<DeleteApplicationRequest , Operation > deleteApplicationCallable ()
Deletes an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteApplicationRequest request =
DeleteApplicationRequest . newBuilder ()
. setName ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future = appHubClient . deleteApplicationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteApplicationRequest , Operation >
deleteApplicationOperationCallable()
public final OperationCallable<DeleteApplicationRequest , Empty , OperationMetadata > deleteApplicationOperationCallable ()
Deletes an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteApplicationRequest request =
DeleteApplicationRequest . newBuilder ()
. setName ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setRequestId ( "requestId693933066" )
. build ();
OperationFuture<Empty , OperationMetadata > future =
appHubClient . deleteApplicationOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteApplicationRequest , Empty , OperationMetadata >
deleteServiceAsync(DeleteServiceRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteServiceAsync ( DeleteServiceRequest request )
Deletes a Service from an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteServiceRequest request =
DeleteServiceRequest . newBuilder ()
. setName (
ServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[SERVICE]" )
. toString ())
. setRequestId ( "requestId693933066" )
. build ();
appHubClient . deleteServiceAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteServiceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteServiceAsync(ServiceName name)
public final OperationFuture<Empty , OperationMetadata > deleteServiceAsync ( ServiceName name )
Deletes a Service from an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ServiceName name = ServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[SERVICE]" );
appHubClient . deleteServiceAsync ( name ). get ();
}
Parameter
Name
Description
name
ServiceName Required. Fully qualified name of the Service to delete from an Application.
Expected format:
projects/{project}/locations/{location}/applications/{application}/services/{service} .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteServiceAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteServiceAsync ( String name )
Deletes a Service from an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name =
ServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[SERVICE]" ). toString ();
appHubClient . deleteServiceAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. Fully qualified name of the Service to delete from an Application.
Expected format:
projects/{project}/locations/{location}/applications/{application}/services/{service} .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteServiceCallable()
public final UnaryCallable<DeleteServiceRequest , Operation > deleteServiceCallable ()
Deletes a Service from an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteServiceRequest request =
DeleteServiceRequest . newBuilder ()
. setName (
ServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[SERVICE]" )
. toString ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future = appHubClient . deleteServiceCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteServiceRequest , Operation >
deleteServiceOperationCallable()
public final OperationCallable<DeleteServiceRequest , Empty , OperationMetadata > deleteServiceOperationCallable ()
Deletes a Service from an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteServiceRequest request =
DeleteServiceRequest . newBuilder ()
. setName (
ServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[SERVICE]" )
. toString ())
. setRequestId ( "requestId693933066" )
. build ();
OperationFuture<Empty , OperationMetadata > future =
appHubClient . deleteServiceOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteServiceRequest , Empty , OperationMetadata >
deleteServiceProjectAttachmentAsync(DeleteServiceProjectAttachmentRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteServiceProjectAttachmentAsync ( DeleteServiceProjectAttachmentRequest request )
Deletes a service project attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteServiceProjectAttachmentRequest request =
DeleteServiceProjectAttachmentRequest . newBuilder ()
. setName (
ServiceProjectAttachmentName . of (
"[PROJECT]" , "[LOCATION]" , "[SERVICE_PROJECT_ATTACHMENT]" )
. toString ())
. setRequestId ( "requestId693933066" )
. build ();
appHubClient . deleteServiceProjectAttachmentAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteServiceProjectAttachmentRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteServiceProjectAttachmentAsync(ServiceProjectAttachmentName name)
public final OperationFuture<Empty , OperationMetadata > deleteServiceProjectAttachmentAsync ( ServiceProjectAttachmentName name )
Deletes a service project attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ServiceProjectAttachmentName name =
ServiceProjectAttachmentName . of (
"[PROJECT]" , "[LOCATION]" , "[SERVICE_PROJECT_ATTACHMENT]" );
appHubClient . deleteServiceProjectAttachmentAsync ( name ). get ();
}
Parameter
Name
Description
name
ServiceProjectAttachmentName Required. Fully qualified name of the service project attachment to delete.
Expected format:
projects/{project}/locations/{location}/serviceProjectAttachments/{serviceProjectAttachment} .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteServiceProjectAttachmentAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteServiceProjectAttachmentAsync ( String name )
Deletes a service project attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name =
ServiceProjectAttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[SERVICE_PROJECT_ATTACHMENT]" )
. toString ();
appHubClient . deleteServiceProjectAttachmentAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. Fully qualified name of the service project attachment to delete.
Expected format:
projects/{project}/locations/{location}/serviceProjectAttachments/{serviceProjectAttachment} .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteServiceProjectAttachmentCallable()
public final UnaryCallable<DeleteServiceProjectAttachmentRequest , Operation > deleteServiceProjectAttachmentCallable ()
Deletes a service project attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteServiceProjectAttachmentRequest request =
DeleteServiceProjectAttachmentRequest . newBuilder ()
. setName (
ServiceProjectAttachmentName . of (
"[PROJECT]" , "[LOCATION]" , "[SERVICE_PROJECT_ATTACHMENT]" )
. toString ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future =
appHubClient . deleteServiceProjectAttachmentCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteServiceProjectAttachmentRequest , Operation >
deleteServiceProjectAttachmentOperationCallable()
public final OperationCallable<DeleteServiceProjectAttachmentRequest , Empty , OperationMetadata > deleteServiceProjectAttachmentOperationCallable ()
Deletes a service project attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteServiceProjectAttachmentRequest request =
DeleteServiceProjectAttachmentRequest . newBuilder ()
. setName (
ServiceProjectAttachmentName . of (
"[PROJECT]" , "[LOCATION]" , "[SERVICE_PROJECT_ATTACHMENT]" )
. toString ())
. setRequestId ( "requestId693933066" )
. build ();
OperationFuture<Empty , OperationMetadata > future =
appHubClient . deleteServiceProjectAttachmentOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteServiceProjectAttachmentRequest , Empty , OperationMetadata >
deleteWorkloadAsync(DeleteWorkloadRequest request)
public final OperationFuture<Empty , OperationMetadata > deleteWorkloadAsync ( DeleteWorkloadRequest request )
Deletes a Workload from an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteWorkloadRequest request =
DeleteWorkloadRequest . newBuilder ()
. setName (
WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" )
. toString ())
. setRequestId ( "requestId693933066" )
. build ();
appHubClient . deleteWorkloadAsync ( request ). get ();
}
Parameter
Name
Description
request
DeleteWorkloadRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteWorkloadAsync(WorkloadName name)
public final OperationFuture<Empty , OperationMetadata > deleteWorkloadAsync ( WorkloadName name )
Deletes a Workload from an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
WorkloadName name = WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" );
appHubClient . deleteWorkloadAsync ( name ). get ();
}
Parameter
Name
Description
name
WorkloadName Required. Fully qualified name of the Workload to delete from an Application.
Expected format:
projects/{project}/locations/{location}/applications/{application}/workloads/{workload} .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteWorkloadAsync(String name)
public final OperationFuture<Empty , OperationMetadata > deleteWorkloadAsync ( String name )
Deletes a Workload from an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name =
WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" ). toString ();
appHubClient . deleteWorkloadAsync ( name ). get ();
}
Parameter
Name
Description
name
String Required. Fully qualified name of the Workload to delete from an Application.
Expected format:
projects/{project}/locations/{location}/applications/{application}/workloads/{workload} .
Returns
Type
Description
OperationFuture < Empty , OperationMetadata >
deleteWorkloadCallable()
public final UnaryCallable<DeleteWorkloadRequest , Operation > deleteWorkloadCallable ()
Deletes a Workload from an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteWorkloadRequest request =
DeleteWorkloadRequest . newBuilder ()
. setName (
WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" )
. toString ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future = appHubClient . deleteWorkloadCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
UnaryCallable < DeleteWorkloadRequest , Operation >
deleteWorkloadOperationCallable()
public final OperationCallable<DeleteWorkloadRequest , Empty , OperationMetadata > deleteWorkloadOperationCallable ()
Deletes a Workload from an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DeleteWorkloadRequest request =
DeleteWorkloadRequest . newBuilder ()
. setName (
WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" )
. toString ())
. setRequestId ( "requestId693933066" )
. build ();
OperationFuture<Empty , OperationMetadata > future =
appHubClient . deleteWorkloadOperationCallable (). futureCall ( request );
// Do something.
future . get ();
}
Returns
Type
Description
OperationCallable < DeleteWorkloadRequest , Empty , OperationMetadata >
detachServiceProjectAttachment(DetachServiceProjectAttachmentRequest request)
public final DetachServiceProjectAttachmentResponse detachServiceProjectAttachment ( DetachServiceProjectAttachmentRequest request )
Detaches a service project from a host project. You can call this API from any service project
without needing access to the host project that it is attached to.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DetachServiceProjectAttachmentRequest request =
DetachServiceProjectAttachmentRequest . newBuilder ()
. setName ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. build ();
DetachServiceProjectAttachmentResponse response =
appHubClient . detachServiceProjectAttachment ( request );
}
Parameter
Name
Description
request
DetachServiceProjectAttachmentRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
DetachServiceProjectAttachmentResponse
detachServiceProjectAttachment(LocationName name)
public final DetachServiceProjectAttachmentResponse detachServiceProjectAttachment ( LocationName name )
Detaches a service project from a host project. You can call this API from any service project
without needing access to the host project that it is attached to.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LocationName name = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
DetachServiceProjectAttachmentResponse response =
appHubClient . detachServiceProjectAttachment ( name );
}
Parameter
Name
Description
name
LocationName Required. Service project id and location to detach from a host project. Only
global location is supported. Expected format: projects/{project}/locations/{location} .
Returns
Type
Description
DetachServiceProjectAttachmentResponse
detachServiceProjectAttachment(String name)
public final DetachServiceProjectAttachmentResponse detachServiceProjectAttachment ( String name )
Detaches a service project from a host project. You can call this API from any service project
without needing access to the host project that it is attached to.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
DetachServiceProjectAttachmentResponse response =
appHubClient . detachServiceProjectAttachment ( name );
}
Parameter
Name
Description
name
String Required. Service project id and location to detach from a host project. Only
global location is supported. Expected format: projects/{project}/locations/{location} .
Returns
Type
Description
DetachServiceProjectAttachmentResponse
detachServiceProjectAttachmentCallable()
public final UnaryCallable<DetachServiceProjectAttachmentRequest , DetachServiceProjectAttachmentResponse > detachServiceProjectAttachmentCallable ()
Detaches a service project from a host project. You can call this API from any service project
without needing access to the host project that it is attached to.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DetachServiceProjectAttachmentRequest request =
DetachServiceProjectAttachmentRequest . newBuilder ()
. setName ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. build ();
ApiFuture<DetachServiceProjectAttachmentResponse> future =
appHubClient . detachServiceProjectAttachmentCallable (). futureCall ( request );
// Do something.
DetachServiceProjectAttachmentResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < DetachServiceProjectAttachmentRequest , DetachServiceProjectAttachmentResponse >
getApplication(ApplicationName name)
public final Application getApplication ( ApplicationName name )
Gets an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ApplicationName name = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" );
Application response = appHubClient . getApplication ( name );
}
Parameter
Name
Description
name
ApplicationName Required. Fully qualified name of the Application to fetch. Expected format:
projects/{project}/locations/{location}/applications/{application} .
Returns
Type
Description
Application
getApplication(GetApplicationRequest request)
public final Application getApplication ( GetApplicationRequest request )
Gets an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetApplicationRequest request =
GetApplicationRequest . newBuilder ()
. setName ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. build ();
Application response = appHubClient . getApplication ( request );
}
Parameter
Name
Description
request
GetApplicationRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Application
getApplication(String name)
public final Application getApplication ( String name )
Gets an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ();
Application response = appHubClient . getApplication ( name );
}
Parameter
Name
Description
name
String Required. Fully qualified name of the Application to fetch. Expected format:
projects/{project}/locations/{location}/applications/{application} .
Returns
Type
Description
Application
getApplicationCallable()
public final UnaryCallable<GetApplicationRequest , Application > getApplicationCallable ()
Gets an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetApplicationRequest request =
GetApplicationRequest . newBuilder ()
. setName ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. build ();
ApiFuture<Application> future = appHubClient . getApplicationCallable (). futureCall ( request );
// Do something.
Application response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetApplicationRequest , Application >
getDiscoveredService(DiscoveredServiceName name)
public final DiscoveredService getDiscoveredService ( DiscoveredServiceName name )
Gets a Discovered Service in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DiscoveredServiceName name =
DiscoveredServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[DISCOVERED_SERVICE]" );
DiscoveredService response = appHubClient . getDiscoveredService ( name );
}
Parameter
Name
Description
name
DiscoveredServiceName Required. Fully qualified name of the Discovered Service to fetch. Expected format:
projects/{project}/locations/{location}/discoveredServices/{discoveredService} .
Returns
Type
Description
DiscoveredService
getDiscoveredService(GetDiscoveredServiceRequest request)
public final DiscoveredService getDiscoveredService ( GetDiscoveredServiceRequest request )
Gets a Discovered Service in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetDiscoveredServiceRequest request =
GetDiscoveredServiceRequest . newBuilder ()
. setName (
DiscoveredServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[DISCOVERED_SERVICE]" )
. toString ())
. build ();
DiscoveredService response = appHubClient . getDiscoveredService ( request );
}
Parameter
Name
Description
request
GetDiscoveredServiceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
DiscoveredService
getDiscoveredService(String name)
public final DiscoveredService getDiscoveredService ( String name )
Gets a Discovered Service in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name =
DiscoveredServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[DISCOVERED_SERVICE]" ). toString ();
DiscoveredService response = appHubClient . getDiscoveredService ( name );
}
Parameter
Name
Description
name
String Required. Fully qualified name of the Discovered Service to fetch. Expected format:
projects/{project}/locations/{location}/discoveredServices/{discoveredService} .
Returns
Type
Description
DiscoveredService
getDiscoveredServiceCallable()
public final UnaryCallable<GetDiscoveredServiceRequest , DiscoveredService > getDiscoveredServiceCallable ()
Gets a Discovered Service in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetDiscoveredServiceRequest request =
GetDiscoveredServiceRequest . newBuilder ()
. setName (
DiscoveredServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[DISCOVERED_SERVICE]" )
. toString ())
. build ();
ApiFuture<DiscoveredService> future =
appHubClient . getDiscoveredServiceCallable (). futureCall ( request );
// Do something.
DiscoveredService response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetDiscoveredServiceRequest , DiscoveredService >
getDiscoveredWorkload(DiscoveredWorkloadName name)
public final DiscoveredWorkload getDiscoveredWorkload ( DiscoveredWorkloadName name )
Gets a Discovered Workload in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
DiscoveredWorkloadName name =
DiscoveredWorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[DISCOVERED_WORKLOAD]" );
DiscoveredWorkload response = appHubClient . getDiscoveredWorkload ( name );
}
Parameter
Name
Description
name
DiscoveredWorkloadName Required. Fully qualified name of the Discovered Workload to fetch. Expected
format: projects/{project}/locations/{location}/discoveredWorkloads/{discoveredWorkload} .
Returns
Type
Description
DiscoveredWorkload
getDiscoveredWorkload(GetDiscoveredWorkloadRequest request)
public final DiscoveredWorkload getDiscoveredWorkload ( GetDiscoveredWorkloadRequest request )
Gets a Discovered Workload in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetDiscoveredWorkloadRequest request =
GetDiscoveredWorkloadRequest . newBuilder ()
. setName (
DiscoveredWorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[DISCOVERED_WORKLOAD]" )
. toString ())
. build ();
DiscoveredWorkload response = appHubClient . getDiscoveredWorkload ( request );
}
Parameter
Name
Description
request
GetDiscoveredWorkloadRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
DiscoveredWorkload
getDiscoveredWorkload(String name)
public final DiscoveredWorkload getDiscoveredWorkload ( String name )
Gets a Discovered Workload in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name =
DiscoveredWorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[DISCOVERED_WORKLOAD]" ). toString ();
DiscoveredWorkload response = appHubClient . getDiscoveredWorkload ( name );
}
Parameter
Name
Description
name
String Required. Fully qualified name of the Discovered Workload to fetch. Expected
format: projects/{project}/locations/{location}/discoveredWorkloads/{discoveredWorkload} .
Returns
Type
Description
DiscoveredWorkload
getDiscoveredWorkloadCallable()
public final UnaryCallable<GetDiscoveredWorkloadRequest , DiscoveredWorkload > getDiscoveredWorkloadCallable ()
Gets a Discovered Workload in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetDiscoveredWorkloadRequest request =
GetDiscoveredWorkloadRequest . newBuilder ()
. setName (
DiscoveredWorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[DISCOVERED_WORKLOAD]" )
. toString ())
. build ();
ApiFuture<DiscoveredWorkload> future =
appHubClient . getDiscoveredWorkloadCallable (). futureCall ( request );
// Do something.
DiscoveredWorkload response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetDiscoveredWorkloadRequest , DiscoveredWorkload >
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
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource (
ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
Policy response = appHubClient . getIamPolicy ( request );
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
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetIamPolicyRequest request =
GetIamPolicyRequest . newBuilder ()
. setResource (
ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setOptions ( GetPolicyOptions . newBuilder (). build ())
. build ();
ApiFuture<Policy> future = appHubClient . getIamPolicyCallable (). futureCall ( request );
// Do something.
Policy response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.GetIamPolicyRequest , com.google.iam.v1.Policy >
getLocation(GetLocationRequest request)
public final Location getLocation ( GetLocationRequest request )
Gets information about a location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetLocationRequest request = GetLocationRequest . newBuilder (). setName ( "name3373707" ). build ();
Location response = appHubClient . getLocation ( request );
}
Parameter
Name
Description
request
com.google.cloud.location.GetLocationRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
com.google.cloud.location.Location
getLocationCallable()
public final UnaryCallable<GetLocationRequest , Location > getLocationCallable ()
Gets information about a location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetLocationRequest request = GetLocationRequest . newBuilder (). setName ( "name3373707" ). build ();
ApiFuture<Location> future = appHubClient . getLocationCallable (). futureCall ( request );
// Do something.
Location response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.cloud.location.GetLocationRequest , com.google.cloud.location.Location >
getOperationsClient()
public final OperationsClient getOperationsClient ()
Returns the OperationsClient that can be used to query the status of a long-running operation
returned by another API method call.
Returns
Type
Description
OperationsClient
getService(GetServiceRequest request)
public final Service getService ( GetServiceRequest request )
Gets a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetServiceRequest request =
GetServiceRequest . newBuilder ()
. setName (
ServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[SERVICE]" )
. toString ())
. build ();
Service response = appHubClient . getService ( request );
}
Parameter
Name
Description
request
GetServiceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Service
getService(ServiceName name)
public final Service getService ( ServiceName name )
Gets a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ServiceName name = ServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[SERVICE]" );
Service response = appHubClient . getService ( name );
}
Parameter
Name
Description
name
ServiceName Required. Fully qualified name of the Service to fetch. Expected format:
projects/{project}/locations/{location}/applications/{application}/services/{service} .
Returns
Type
Description
Service
getService(String name)
public final Service getService ( String name )
Gets a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name =
ServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[SERVICE]" ). toString ();
Service response = appHubClient . getService ( name );
}
Parameter
Name
Description
name
String Required. Fully qualified name of the Service to fetch. Expected format:
projects/{project}/locations/{location}/applications/{application}/services/{service} .
Returns
Type
Description
Service
getServiceCallable()
public final UnaryCallable<GetServiceRequest , Service > getServiceCallable ()
Gets a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetServiceRequest request =
GetServiceRequest . newBuilder ()
. setName (
ServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[SERVICE]" )
. toString ())
. build ();
ApiFuture<Service> future = appHubClient . getServiceCallable (). futureCall ( request );
// Do something.
Service response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetServiceRequest , Service >
getServiceProjectAttachment(GetServiceProjectAttachmentRequest request)
public final ServiceProjectAttachment getServiceProjectAttachment ( GetServiceProjectAttachmentRequest request )
Gets a service project attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetServiceProjectAttachmentRequest request =
GetServiceProjectAttachmentRequest . newBuilder ()
. setName (
ServiceProjectAttachmentName . of (
"[PROJECT]" , "[LOCATION]" , "[SERVICE_PROJECT_ATTACHMENT]" )
. toString ())
. build ();
ServiceProjectAttachment response = appHubClient . getServiceProjectAttachment ( request );
}
Parameter
Name
Description
request
GetServiceProjectAttachmentRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
ServiceProjectAttachment
getServiceProjectAttachment(ServiceProjectAttachmentName name)
public final ServiceProjectAttachment getServiceProjectAttachment ( ServiceProjectAttachmentName name )
Gets a service project attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ServiceProjectAttachmentName name =
ServiceProjectAttachmentName . of (
"[PROJECT]" , "[LOCATION]" , "[SERVICE_PROJECT_ATTACHMENT]" );
ServiceProjectAttachment response = appHubClient . getServiceProjectAttachment ( name );
}
Parameter
Name
Description
name
ServiceProjectAttachmentName Required. Fully qualified name of the service project attachment to retrieve.
Expected format:
projects/{project}/locations/{location}/serviceProjectAttachments/{serviceProjectAttachment} .
Returns
Type
Description
ServiceProjectAttachment
getServiceProjectAttachment(String name)
public final ServiceProjectAttachment getServiceProjectAttachment ( String name )
Gets a service project attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name =
ServiceProjectAttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[SERVICE_PROJECT_ATTACHMENT]" )
. toString ();
ServiceProjectAttachment response = appHubClient . getServiceProjectAttachment ( name );
}
Parameter
Name
Description
name
String Required. Fully qualified name of the service project attachment to retrieve.
Expected format:
projects/{project}/locations/{location}/serviceProjectAttachments/{serviceProjectAttachment} .
Returns
Type
Description
ServiceProjectAttachment
getServiceProjectAttachmentCallable()
public final UnaryCallable<GetServiceProjectAttachmentRequest , ServiceProjectAttachment > getServiceProjectAttachmentCallable ()
Gets a service project attachment.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetServiceProjectAttachmentRequest request =
GetServiceProjectAttachmentRequest . newBuilder ()
. setName (
ServiceProjectAttachmentName . of (
"[PROJECT]" , "[LOCATION]" , "[SERVICE_PROJECT_ATTACHMENT]" )
. toString ())
. build ();
ApiFuture<ServiceProjectAttachment> future =
appHubClient . getServiceProjectAttachmentCallable (). futureCall ( request );
// Do something.
ServiceProjectAttachment response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetServiceProjectAttachmentRequest , ServiceProjectAttachment >
getSettings()
public final AppHubSettings getSettings ()
Returns
Type
Description
AppHubSettings
getStub()
public AppHubStub getStub ()
Returns
Type
Description
AppHubStub
getWorkload(GetWorkloadRequest request)
public final Workload getWorkload ( GetWorkloadRequest request )
Gets a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetWorkloadRequest request =
GetWorkloadRequest . newBuilder ()
. setName (
WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" )
. toString ())
. build ();
Workload response = appHubClient . getWorkload ( request );
}
Parameter
Name
Description
request
GetWorkloadRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
Workload
getWorkload(WorkloadName name)
public final Workload getWorkload ( WorkloadName name )
Gets a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
WorkloadName name = WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" );
Workload response = appHubClient . getWorkload ( name );
}
Parameter
Name
Description
name
WorkloadName Required. Fully qualified name of the Workload to fetch. Expected format:
projects/{project}/locations/{location}/applications/{application}/workloads/{workload} .
Returns
Type
Description
Workload
getWorkload(String name)
public final Workload getWorkload ( String name )
Gets a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name =
WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" ). toString ();
Workload response = appHubClient . getWorkload ( name );
}
Parameter
Name
Description
name
String Required. Fully qualified name of the Workload to fetch. Expected format:
projects/{project}/locations/{location}/applications/{application}/workloads/{workload} .
Returns
Type
Description
Workload
getWorkloadCallable()
public final UnaryCallable<GetWorkloadRequest , Workload > getWorkloadCallable ()
Gets a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
GetWorkloadRequest request =
GetWorkloadRequest . newBuilder ()
. setName (
WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" )
. toString ())
. build ();
ApiFuture<Workload> future = appHubClient . getWorkloadCallable (). futureCall ( request );
// Do something.
Workload response = future . get ();
}
Returns
Type
Description
UnaryCallable < GetWorkloadRequest , Workload >
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
listApplications(ListApplicationsRequest request)
public final AppHubClient . ListApplicationsPagedResponse listApplications ( ListApplicationsRequest request )
Lists Applications in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListApplicationsRequest request =
ListApplicationsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( Application element : appHubClient . listApplications ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListApplicationsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AppHubClient.ListApplicationsPagedResponse
listApplications(LocationName parent)
public final AppHubClient . ListApplicationsPagedResponse listApplications ( LocationName parent )
Lists Applications in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( Application element : appHubClient . listApplications ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. Project and location to list Applications on. Expected format:
projects/{project}/locations/{location} .
Returns
Type
Description
AppHubClient.ListApplicationsPagedResponse
listApplications(String parent)
public final AppHubClient . ListApplicationsPagedResponse listApplications ( String parent )
Lists Applications in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( Application element : appHubClient . listApplications ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. Project and location to list Applications on. Expected format:
projects/{project}/locations/{location} .
Returns
Type
Description
AppHubClient.ListApplicationsPagedResponse
listApplicationsCallable()
public final UnaryCallable<ListApplicationsRequest , ListApplicationsResponse > listApplicationsCallable ()
Lists Applications in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListApplicationsRequest request =
ListApplicationsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListApplicationsResponse response = appHubClient . listApplicationsCallable (). call ( request );
for ( Application element : response . getApplicationsList ()) {
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
UnaryCallable < ListApplicationsRequest , ListApplicationsResponse >
listApplicationsPagedCallable()
public final UnaryCallable<ListApplicationsRequest , AppHubClient . ListApplicationsPagedResponse > listApplicationsPagedCallable ()
Lists Applications in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListApplicationsRequest request =
ListApplicationsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<Application> future =
appHubClient . listApplicationsPagedCallable (). futureCall ( request );
// Do something.
for ( Application element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListApplicationsRequest , ListApplicationsPagedResponse >
listDiscoveredServices(ListDiscoveredServicesRequest request)
public final AppHubClient . ListDiscoveredServicesPagedResponse listDiscoveredServices ( ListDiscoveredServicesRequest request )
Lists Discovered Services that can be added to an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListDiscoveredServicesRequest request =
ListDiscoveredServicesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( DiscoveredService element : appHubClient . listDiscoveredServices ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListDiscoveredServicesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AppHubClient.ListDiscoveredServicesPagedResponse
listDiscoveredServices(LocationName parent)
public final AppHubClient . ListDiscoveredServicesPagedResponse listDiscoveredServices ( LocationName parent )
Lists Discovered Services that can be added to an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( DiscoveredService element : appHubClient . listDiscoveredServices ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. Project and location to list Discovered Services on. Expected format:
projects/{project}/locations/{location} .
Returns
Type
Description
AppHubClient.ListDiscoveredServicesPagedResponse
listDiscoveredServices(String parent)
public final AppHubClient . ListDiscoveredServicesPagedResponse listDiscoveredServices ( String parent )
Lists Discovered Services that can be added to an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( DiscoveredService element : appHubClient . listDiscoveredServices ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. Project and location to list Discovered Services on. Expected format:
projects/{project}/locations/{location} .
Returns
Type
Description
AppHubClient.ListDiscoveredServicesPagedResponse
listDiscoveredServicesCallable()
public final UnaryCallable<ListDiscoveredServicesRequest , ListDiscoveredServicesResponse > listDiscoveredServicesCallable ()
Lists Discovered Services that can be added to an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListDiscoveredServicesRequest request =
ListDiscoveredServicesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListDiscoveredServicesResponse response =
appHubClient . listDiscoveredServicesCallable (). call ( request );
for ( DiscoveredService element : response . getDiscoveredServicesList ()) {
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
UnaryCallable < ListDiscoveredServicesRequest , ListDiscoveredServicesResponse >
listDiscoveredServicesPagedCallable()
public final UnaryCallable<ListDiscoveredServicesRequest , AppHubClient . ListDiscoveredServicesPagedResponse > listDiscoveredServicesPagedCallable ()
Lists Discovered Services that can be added to an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListDiscoveredServicesRequest request =
ListDiscoveredServicesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<DiscoveredService> future =
appHubClient . listDiscoveredServicesPagedCallable (). futureCall ( request );
// Do something.
for ( DiscoveredService element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListDiscoveredServicesRequest , ListDiscoveredServicesPagedResponse >
listDiscoveredWorkloads(ListDiscoveredWorkloadsRequest request)
public final AppHubClient . ListDiscoveredWorkloadsPagedResponse listDiscoveredWorkloads ( ListDiscoveredWorkloadsRequest request )
Lists Discovered Workloads that can be added to an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListDiscoveredWorkloadsRequest request =
ListDiscoveredWorkloadsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( DiscoveredWorkload element :
appHubClient . listDiscoveredWorkloads ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListDiscoveredWorkloadsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AppHubClient.ListDiscoveredWorkloadsPagedResponse
listDiscoveredWorkloads(LocationName parent)
public final AppHubClient . ListDiscoveredWorkloadsPagedResponse listDiscoveredWorkloads ( LocationName parent )
Lists Discovered Workloads that can be added to an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( DiscoveredWorkload element : appHubClient . listDiscoveredWorkloads ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. Project and location to list Discovered Workloads on. Expected format:
projects/{project}/locations/{location} .
Returns
Type
Description
AppHubClient.ListDiscoveredWorkloadsPagedResponse
listDiscoveredWorkloads(String parent)
public final AppHubClient . ListDiscoveredWorkloadsPagedResponse listDiscoveredWorkloads ( String parent )
Lists Discovered Workloads that can be added to an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( DiscoveredWorkload element : appHubClient . listDiscoveredWorkloads ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. Project and location to list Discovered Workloads on. Expected format:
projects/{project}/locations/{location} .
Returns
Type
Description
AppHubClient.ListDiscoveredWorkloadsPagedResponse
listDiscoveredWorkloadsCallable()
public final UnaryCallable<ListDiscoveredWorkloadsRequest , ListDiscoveredWorkloadsResponse > listDiscoveredWorkloadsCallable ()
Lists Discovered Workloads that can be added to an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListDiscoveredWorkloadsRequest request =
ListDiscoveredWorkloadsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListDiscoveredWorkloadsResponse response =
appHubClient . listDiscoveredWorkloadsCallable (). call ( request );
for ( DiscoveredWorkload element : response . getDiscoveredWorkloadsList ()) {
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
UnaryCallable < ListDiscoveredWorkloadsRequest , ListDiscoveredWorkloadsResponse >
listDiscoveredWorkloadsPagedCallable()
public final UnaryCallable<ListDiscoveredWorkloadsRequest , AppHubClient . ListDiscoveredWorkloadsPagedResponse > listDiscoveredWorkloadsPagedCallable ()
Lists Discovered Workloads that can be added to an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListDiscoveredWorkloadsRequest request =
ListDiscoveredWorkloadsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<DiscoveredWorkload> future =
appHubClient . listDiscoveredWorkloadsPagedCallable (). futureCall ( request );
// Do something.
for ( DiscoveredWorkload element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListDiscoveredWorkloadsRequest , ListDiscoveredWorkloadsPagedResponse >
listLocations(ListLocationsRequest request)
public final AppHubClient . ListLocationsPagedResponse listLocations ( ListLocationsRequest request )
Lists information about the supported locations for this service.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
for ( Location element : appHubClient . listLocations ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
com.google.cloud.location.ListLocationsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AppHubClient.ListLocationsPagedResponse
listLocationsCallable()
public final UnaryCallable<ListLocationsRequest , ListLocationsResponse > listLocationsCallable ()
Lists information about the supported locations for this service.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
while ( true ) {
ListLocationsResponse response = appHubClient . listLocationsCallable (). call ( request );
for ( Location element : response . getLocationsList ()) {
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
UnaryCallable < com.google.cloud.location.ListLocationsRequest , com.google.cloud.location.ListLocationsResponse >
listLocationsPagedCallable()
public final UnaryCallable<ListLocationsRequest , AppHubClient . ListLocationsPagedResponse > listLocationsPagedCallable ()
Lists information about the supported locations for this service.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListLocationsRequest request =
ListLocationsRequest . newBuilder ()
. setName ( "name3373707" )
. setFilter ( "filter-1274492040" )
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. build ();
ApiFuture<Location> future = appHubClient . listLocationsPagedCallable (). futureCall ( request );
// Do something.
for ( Location element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < com.google.cloud.location.ListLocationsRequest , ListLocationsPagedResponse >
listServiceProjectAttachments(ListServiceProjectAttachmentsRequest request)
public final AppHubClient . ListServiceProjectAttachmentsPagedResponse listServiceProjectAttachments ( ListServiceProjectAttachmentsRequest request )
Lists service projects attached to the host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListServiceProjectAttachmentsRequest request =
ListServiceProjectAttachmentsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( ServiceProjectAttachment element :
appHubClient . listServiceProjectAttachments ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListServiceProjectAttachmentsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AppHubClient.ListServiceProjectAttachmentsPagedResponse
listServiceProjectAttachments(LocationName parent)
public final AppHubClient . ListServiceProjectAttachmentsPagedResponse listServiceProjectAttachments ( LocationName parent )
Lists service projects attached to the host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
for ( ServiceProjectAttachment element :
appHubClient . listServiceProjectAttachments ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
LocationName Required. Host project ID and location to list service project attachments. Only
global location is supported. Expected format: projects/{project}/locations/{location} .
Returns
Type
Description
AppHubClient.ListServiceProjectAttachmentsPagedResponse
listServiceProjectAttachments(String parent)
public final AppHubClient . ListServiceProjectAttachmentsPagedResponse listServiceProjectAttachments ( String parent )
Lists service projects attached to the host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
for ( ServiceProjectAttachment element :
appHubClient . listServiceProjectAttachments ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. Host project ID and location to list service project attachments. Only
global location is supported. Expected format: projects/{project}/locations/{location} .
Returns
Type
Description
AppHubClient.ListServiceProjectAttachmentsPagedResponse
listServiceProjectAttachmentsCallable()
public final UnaryCallable<ListServiceProjectAttachmentsRequest , ListServiceProjectAttachmentsResponse > listServiceProjectAttachmentsCallable ()
Lists service projects attached to the host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListServiceProjectAttachmentsRequest request =
ListServiceProjectAttachmentsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListServiceProjectAttachmentsResponse response =
appHubClient . listServiceProjectAttachmentsCallable (). call ( request );
for ( ServiceProjectAttachment element : response . getServiceProjectAttachmentsList ()) {
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
UnaryCallable < ListServiceProjectAttachmentsRequest , ListServiceProjectAttachmentsResponse >
listServiceProjectAttachmentsPagedCallable()
public final UnaryCallable<ListServiceProjectAttachmentsRequest , AppHubClient . ListServiceProjectAttachmentsPagedResponse > listServiceProjectAttachmentsPagedCallable ()
Lists service projects attached to the host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListServiceProjectAttachmentsRequest request =
ListServiceProjectAttachmentsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<ServiceProjectAttachment> future =
appHubClient . listServiceProjectAttachmentsPagedCallable (). futureCall ( request );
// Do something.
for ( ServiceProjectAttachment element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListServiceProjectAttachmentsRequest , ListServiceProjectAttachmentsPagedResponse >
listServices(ApplicationName parent)
public final AppHubClient . ListServicesPagedResponse listServices ( ApplicationName parent )
Lists Services in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ApplicationName parent = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" );
for ( Service element : appHubClient . listServices ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
ApplicationName Required. Fully qualified name of the parent Application to list Services for.
Expected format: projects/{project}/locations/{location}/applications/{application} .
Returns
Type
Description
AppHubClient.ListServicesPagedResponse
listServices(ListServicesRequest request)
public final AppHubClient . ListServicesPagedResponse listServices ( ListServicesRequest request )
Lists Services in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListServicesRequest request =
ListServicesRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( Service element : appHubClient . listServices ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListServicesRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AppHubClient.ListServicesPagedResponse
listServices(String parent)
public final AppHubClient . ListServicesPagedResponse listServices ( String parent )
Lists Services in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ();
for ( Service element : appHubClient . listServices ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. Fully qualified name of the parent Application to list Services for.
Expected format: projects/{project}/locations/{location}/applications/{application} .
Returns
Type
Description
AppHubClient.ListServicesPagedResponse
listServicesCallable()
public final UnaryCallable<ListServicesRequest , ListServicesResponse > listServicesCallable ()
Lists Services in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListServicesRequest request =
ListServicesRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListServicesResponse response = appHubClient . listServicesCallable (). call ( request );
for ( Service element : response . getServicesList ()) {
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
UnaryCallable < ListServicesRequest , ListServicesResponse >
listServicesPagedCallable()
public final UnaryCallable<ListServicesRequest , AppHubClient . ListServicesPagedResponse > listServicesPagedCallable ()
Lists Services in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListServicesRequest request =
ListServicesRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<Service> future = appHubClient . listServicesPagedCallable (). futureCall ( request );
// Do something.
for ( Service element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListServicesRequest , ListServicesPagedResponse >
listWorkloads(ApplicationName parent)
public final AppHubClient . ListWorkloadsPagedResponse listWorkloads ( ApplicationName parent )
Lists Workloads in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ApplicationName parent = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" );
for ( Workload element : appHubClient . listWorkloads ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
ApplicationName Required. Fully qualified name of the parent Application to list Workloads for.
Expected format: projects/{project}/locations/{location}/applications/{application} .
Returns
Type
Description
AppHubClient.ListWorkloadsPagedResponse
listWorkloads(ListWorkloadsRequest request)
public final AppHubClient . ListWorkloadsPagedResponse listWorkloads ( ListWorkloadsRequest request )
Lists Workloads in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListWorkloadsRequest request =
ListWorkloadsRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( Workload element : appHubClient . listWorkloads ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
request
ListWorkloadsRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
AppHubClient.ListWorkloadsPagedResponse
listWorkloads(String parent)
public final AppHubClient . ListWorkloadsPagedResponse listWorkloads ( String parent )
Lists Workloads in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ();
for ( Workload element : appHubClient . listWorkloads ( parent ). iterateAll ()) {
// doThingsWith(element);
}
}
Parameter
Name
Description
parent
String Required. Fully qualified name of the parent Application to list Workloads for.
Expected format: projects/{project}/locations/{location}/applications/{application} .
Returns
Type
Description
AppHubClient.ListWorkloadsPagedResponse
listWorkloadsCallable()
public final UnaryCallable<ListWorkloadsRequest , ListWorkloadsResponse > listWorkloadsCallable ()
Lists Workloads in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListWorkloadsRequest request =
ListWorkloadsRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
while ( true ) {
ListWorkloadsResponse response = appHubClient . listWorkloadsCallable (). call ( request );
for ( Workload element : response . getWorkloadsList ()) {
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
UnaryCallable < ListWorkloadsRequest , ListWorkloadsResponse >
listWorkloadsPagedCallable()
public final UnaryCallable<ListWorkloadsRequest , AppHubClient . ListWorkloadsPagedResponse > listWorkloadsPagedCallable ()
Lists Workloads in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
ListWorkloadsRequest request =
ListWorkloadsRequest . newBuilder ()
. setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
ApiFuture<Workload> future = appHubClient . listWorkloadsPagedCallable (). futureCall ( request );
// Do something.
for ( Workload element : future . get (). iterateAll ()) {
// doThingsWith(element);
}
}
Returns
Type
Description
UnaryCallable < ListWorkloadsRequest , ListWorkloadsPagedResponse >
lookupDiscoveredService(LocationName parent, String uri)
public final LookupDiscoveredServiceResponse lookupDiscoveredService ( LocationName parent , String uri )
Lists a Discovered Service in a host project and location, with a given resource URI.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
String uri = "uri116076" ;
LookupDiscoveredServiceResponse response = appHubClient . lookupDiscoveredService ( parent , uri );
}
Parameters
Name
Description
parent
LocationName Required. Host project ID and location to lookup Discovered Service in. Expected
format: projects/{project}/locations/{location} .
uri
String Required. Resource URI to find DiscoveredService for. Accepts both project number
and project ID and does translation when needed.
Returns
Type
Description
LookupDiscoveredServiceResponse
lookupDiscoveredService(LookupDiscoveredServiceRequest request)
public final LookupDiscoveredServiceResponse lookupDiscoveredService ( LookupDiscoveredServiceRequest request )
Lists a Discovered Service in a host project and location, with a given resource URI.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LookupDiscoveredServiceRequest request =
LookupDiscoveredServiceRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setUri ( "uri116076" )
. build ();
LookupDiscoveredServiceResponse response = appHubClient . lookupDiscoveredService ( request );
}
Parameter
Name
Description
request
LookupDiscoveredServiceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
LookupDiscoveredServiceResponse
lookupDiscoveredService(String parent, String uri)
public final LookupDiscoveredServiceResponse lookupDiscoveredService ( String parent , String uri )
Lists a Discovered Service in a host project and location, with a given resource URI.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
String uri = "uri116076" ;
LookupDiscoveredServiceResponse response = appHubClient . lookupDiscoveredService ( parent , uri );
}
Parameters
Name
Description
parent
String Required. Host project ID and location to lookup Discovered Service in. Expected
format: projects/{project}/locations/{location} .
uri
String Required. Resource URI to find DiscoveredService for. Accepts both project number
and project ID and does translation when needed.
Returns
Type
Description
LookupDiscoveredServiceResponse
lookupDiscoveredServiceCallable()
public final UnaryCallable<LookupDiscoveredServiceRequest , LookupDiscoveredServiceResponse > lookupDiscoveredServiceCallable ()
Lists a Discovered Service in a host project and location, with a given resource URI.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LookupDiscoveredServiceRequest request =
LookupDiscoveredServiceRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setUri ( "uri116076" )
. build ();
ApiFuture<LookupDiscoveredServiceResponse> future =
appHubClient . lookupDiscoveredServiceCallable (). futureCall ( request );
// Do something.
LookupDiscoveredServiceResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < LookupDiscoveredServiceRequest , LookupDiscoveredServiceResponse >
lookupDiscoveredWorkload(LocationName parent, String uri)
public final LookupDiscoveredWorkloadResponse lookupDiscoveredWorkload ( LocationName parent , String uri )
Lists a Discovered Workload in a host project and location, with a given resource URI.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LocationName parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
String uri = "uri116076" ;
LookupDiscoveredWorkloadResponse response =
appHubClient . lookupDiscoveredWorkload ( parent , uri );
}
Parameters
Name
Description
parent
LocationName Required. Host project ID and location to lookup Discovered Workload in. Expected
format: projects/{project}/locations/{location} .
uri
String Required. Resource URI to find Discovered Workload for. Accepts both project number
and project ID and does translation when needed.
Returns
Type
Description
LookupDiscoveredWorkloadResponse
lookupDiscoveredWorkload(LookupDiscoveredWorkloadRequest request)
public final LookupDiscoveredWorkloadResponse lookupDiscoveredWorkload ( LookupDiscoveredWorkloadRequest request )
Lists a Discovered Workload in a host project and location, with a given resource URI.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LookupDiscoveredWorkloadRequest request =
LookupDiscoveredWorkloadRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setUri ( "uri116076" )
. build ();
LookupDiscoveredWorkloadResponse response = appHubClient . lookupDiscoveredWorkload ( request );
}
Parameter
Name
Description
request
LookupDiscoveredWorkloadRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
LookupDiscoveredWorkloadResponse
lookupDiscoveredWorkload(String parent, String uri)
public final LookupDiscoveredWorkloadResponse lookupDiscoveredWorkload ( String parent , String uri )
Lists a Discovered Workload in a host project and location, with a given resource URI.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
String uri = "uri116076" ;
LookupDiscoveredWorkloadResponse response =
appHubClient . lookupDiscoveredWorkload ( parent , uri );
}
Parameters
Name
Description
parent
String Required. Host project ID and location to lookup Discovered Workload in. Expected
format: projects/{project}/locations/{location} .
uri
String Required. Resource URI to find Discovered Workload for. Accepts both project number
and project ID and does translation when needed.
Returns
Type
Description
LookupDiscoveredWorkloadResponse
lookupDiscoveredWorkloadCallable()
public final UnaryCallable<LookupDiscoveredWorkloadRequest , LookupDiscoveredWorkloadResponse > lookupDiscoveredWorkloadCallable ()
Lists a Discovered Workload in a host project and location, with a given resource URI.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LookupDiscoveredWorkloadRequest request =
LookupDiscoveredWorkloadRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setUri ( "uri116076" )
. build ();
ApiFuture<LookupDiscoveredWorkloadResponse> future =
appHubClient . lookupDiscoveredWorkloadCallable (). futureCall ( request );
// Do something.
LookupDiscoveredWorkloadResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < LookupDiscoveredWorkloadRequest , LookupDiscoveredWorkloadResponse >
lookupServiceProjectAttachment(LocationName name)
public final LookupServiceProjectAttachmentResponse lookupServiceProjectAttachment ( LocationName name )
Lists a service project attachment for a given service project. You can call this API from any
project to find if it is attached to a host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LocationName name = LocationName . of ( "[PROJECT]" , "[LOCATION]" );
LookupServiceProjectAttachmentResponse response =
appHubClient . lookupServiceProjectAttachment ( name );
}
Parameter
Name
Description
name
LocationName Required. Service project ID and location to lookup service project attachment for.
Only global location is supported. Expected format:
projects/{project}/locations/{location} .
Returns
Type
Description
LookupServiceProjectAttachmentResponse
lookupServiceProjectAttachment(LookupServiceProjectAttachmentRequest request)
public final LookupServiceProjectAttachmentResponse lookupServiceProjectAttachment ( LookupServiceProjectAttachmentRequest request )
Lists a service project attachment for a given service project. You can call this API from any
project to find if it is attached to a host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LookupServiceProjectAttachmentRequest request =
LookupServiceProjectAttachmentRequest . newBuilder ()
. setName ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. build ();
LookupServiceProjectAttachmentResponse response =
appHubClient . lookupServiceProjectAttachment ( request );
}
Parameter
Name
Description
request
LookupServiceProjectAttachmentRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
LookupServiceProjectAttachmentResponse
lookupServiceProjectAttachment(String name)
public final LookupServiceProjectAttachmentResponse lookupServiceProjectAttachment ( String name )
Lists a service project attachment for a given service project. You can call this API from any
project to find if it is attached to a host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
String name = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ();
LookupServiceProjectAttachmentResponse response =
appHubClient . lookupServiceProjectAttachment ( name );
}
Parameter
Name
Description
name
String Required. Service project ID and location to lookup service project attachment for.
Only global location is supported. Expected format:
projects/{project}/locations/{location} .
Returns
Type
Description
LookupServiceProjectAttachmentResponse
lookupServiceProjectAttachmentCallable()
public final UnaryCallable<LookupServiceProjectAttachmentRequest , LookupServiceProjectAttachmentResponse > lookupServiceProjectAttachmentCallable ()
Lists a service project attachment for a given service project. You can call this API from any
project to find if it is attached to a host project.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
LookupServiceProjectAttachmentRequest request =
LookupServiceProjectAttachmentRequest . newBuilder ()
. setName ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. build ();
ApiFuture<LookupServiceProjectAttachmentResponse> future =
appHubClient . lookupServiceProjectAttachmentCallable (). futureCall ( request );
// Do something.
LookupServiceProjectAttachmentResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < LookupServiceProjectAttachmentRequest , LookupServiceProjectAttachmentResponse >
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
try ( AppHubClient appHubClient = AppHubClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource (
ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
Policy response = appHubClient . setIamPolicy ( request );
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
try ( AppHubClient appHubClient = AppHubClient . create ()) {
SetIamPolicyRequest request =
SetIamPolicyRequest . newBuilder ()
. setResource (
ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. setPolicy ( Policy . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. build ();
ApiFuture<Policy> future = appHubClient . setIamPolicyCallable (). futureCall ( request );
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
try ( AppHubClient appHubClient = AppHubClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource (
ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
TestIamPermissionsResponse response = appHubClient . testIamPermissions ( request );
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
try ( AppHubClient appHubClient = AppHubClient . create ()) {
TestIamPermissionsRequest request =
TestIamPermissionsRequest . newBuilder ()
. setResource (
ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ())
. addAllPermissions ( new ArrayList<String> ())
. build ();
ApiFuture<TestIamPermissionsResponse> future =
appHubClient . testIamPermissionsCallable (). futureCall ( request );
// Do something.
TestIamPermissionsResponse response = future . get ();
}
Returns
Type
Description
UnaryCallable < com.google.iam.v1.TestIamPermissionsRequest , com.google.iam.v1.TestIamPermissionsResponse >
updateApplicationAsync(Application application, FieldMask updateMask)
public final OperationFuture<Application , OperationMetadata > updateApplicationAsync ( Application application , FieldMask updateMask )
Updates an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
Application application = Application . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Application response = appHubClient . updateApplicationAsync ( application , updateMask ). get ();
}
Parameters
Name
Description
application
Application Required. The resource being updated.
updateMask
FieldMask Required. Field mask is used to specify the fields to be overwritten in the
Application resource by the update. The fields specified in the update_mask are relative to
the resource, not the full request. The API changes the values of the fields as specified
in the update_mask. The API ignores the values of all fields not covered by the
update_mask. You can also unset a field by not specifying it in the updated message, but
adding the field to the mask. This clears whatever value the field previously had.
Returns
Type
Description
OperationFuture < Application , OperationMetadata >
updateApplicationAsync(UpdateApplicationRequest request)
public final OperationFuture<Application , OperationMetadata > updateApplicationAsync ( UpdateApplicationRequest request )
Updates an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
UpdateApplicationRequest request =
UpdateApplicationRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setApplication ( Application . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
Application response = appHubClient . updateApplicationAsync ( request ). get ();
}
Parameter
Name
Description
request
UpdateApplicationRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Application , OperationMetadata >
updateApplicationCallable()
public final UnaryCallable<UpdateApplicationRequest , Operation > updateApplicationCallable ()
Updates an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
UpdateApplicationRequest request =
UpdateApplicationRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setApplication ( Application . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future = appHubClient . updateApplicationCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateApplicationRequest , Operation >
updateApplicationOperationCallable()
public final OperationCallable<UpdateApplicationRequest , Application , OperationMetadata > updateApplicationOperationCallable ()
Updates an Application in a host project and location.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
UpdateApplicationRequest request =
UpdateApplicationRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setApplication ( Application . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
OperationFuture<Application , OperationMetadata > future =
appHubClient . updateApplicationOperationCallable (). futureCall ( request );
// Do something.
Application response = future . get ();
}
Returns
Type
Description
OperationCallable < UpdateApplicationRequest , Application , OperationMetadata >
updateServiceAsync(Service service, FieldMask updateMask)
public final OperationFuture<Service , OperationMetadata > updateServiceAsync ( Service service , FieldMask updateMask )
Updates a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
Service service = Service . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Service response = appHubClient . updateServiceAsync ( service , updateMask ). get ();
}
Parameters
Name
Description
service
Service Required. The resource being updated.
updateMask
FieldMask Required. Field mask is used to specify the fields to be overwritten in the
Service resource by the update. The fields specified in the update_mask are relative to the
resource, not the full request. The API changes the values of the fields as specified in
the update_mask. The API ignores the values of all fields not covered by the update_mask.
You can also unset a field by not specifying it in the updated message, but adding the
field to the mask. This clears whatever value the field previously had.
Returns
Type
Description
OperationFuture < Service , OperationMetadata >
updateServiceAsync(UpdateServiceRequest request)
public final OperationFuture<Service , OperationMetadata > updateServiceAsync ( UpdateServiceRequest request )
Updates a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
UpdateServiceRequest request =
UpdateServiceRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setService ( Service . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
Service response = appHubClient . updateServiceAsync ( request ). get ();
}
Parameter
Name
Description
request
UpdateServiceRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Service , OperationMetadata >
updateServiceCallable()
public final UnaryCallable<UpdateServiceRequest , Operation > updateServiceCallable ()
Updates a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
UpdateServiceRequest request =
UpdateServiceRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setService ( Service . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future = appHubClient . updateServiceCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateServiceRequest , Operation >
updateServiceOperationCallable()
public final OperationCallable<UpdateServiceRequest , Service , OperationMetadata > updateServiceOperationCallable ()
Updates a Service in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
UpdateServiceRequest request =
UpdateServiceRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setService ( Service . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
OperationFuture<Service , OperationMetadata > future =
appHubClient . updateServiceOperationCallable (). futureCall ( request );
// Do something.
Service response = future . get ();
}
Returns
Type
Description
OperationCallable < UpdateServiceRequest , Service , OperationMetadata >
updateWorkloadAsync(UpdateWorkloadRequest request)
public final OperationFuture<Workload , OperationMetadata > updateWorkloadAsync ( UpdateWorkloadRequest request )
Updates a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
UpdateWorkloadRequest request =
UpdateWorkloadRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setWorkload ( Workload . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
Workload response = appHubClient . updateWorkloadAsync ( request ). get ();
}
Parameter
Name
Description
request
UpdateWorkloadRequest The request object containing all of the parameters for the API call.
Returns
Type
Description
OperationFuture < Workload , OperationMetadata >
updateWorkloadAsync(Workload workload, FieldMask updateMask)
public final OperationFuture<Workload , OperationMetadata > updateWorkloadAsync ( Workload workload , FieldMask updateMask )
Updates a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
Workload workload = Workload . newBuilder (). build ();
FieldMask updateMask = FieldMask . newBuilder (). build ();
Workload response = appHubClient . updateWorkloadAsync ( workload , updateMask ). get ();
}
Parameters
Name
Description
workload
Workload Required. The resource being updated.
updateMask
FieldMask Required. Field mask is used to specify the fields to be overwritten in the
Workload resource by the update. The fields specified in the update_mask are relative to
the resource, not the full request. The API changes the values of the fields as specified
in the update_mask. The API ignores the values of all fields not covered by the
update_mask. You can also unset a field by not specifying it in the updated message, but
adding the field to the mask. This clears whatever value the field previously had.
Returns
Type
Description
OperationFuture < Workload , OperationMetadata >
updateWorkloadCallable()
public final UnaryCallable<UpdateWorkloadRequest , Operation > updateWorkloadCallable ()
Updates a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
UpdateWorkloadRequest request =
UpdateWorkloadRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setWorkload ( Workload . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
ApiFuture<Operation> future = appHubClient . updateWorkloadCallable (). futureCall ( request );
// Do something.
Operation response = future . get ();
}
Returns
Type
Description
UnaryCallable < UpdateWorkloadRequest , Operation >
updateWorkloadOperationCallable()
public final OperationCallable<UpdateWorkloadRequest , Workload , OperationMetadata > updateWorkloadOperationCallable ()
Updates a Workload in an Application.
Sample code:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( AppHubClient appHubClient = AppHubClient . create ()) {
UpdateWorkloadRequest request =
UpdateWorkloadRequest . newBuilder ()
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setWorkload ( Workload . newBuilder (). build ())
. setRequestId ( "requestId693933066" )
. build ();
OperationFuture<Workload , OperationMetadata > future =
appHubClient . updateWorkloadOperationCallable (). futureCall ( request );
// Do something.
Workload response = future . get ();
}
Returns
Type
Description
OperationCallable < UpdateWorkloadRequest , Workload , OperationMetadata >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
