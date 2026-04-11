---
title: "Class AppHubGrpc.AppHubBlockingStub (0.52.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubGrpc.AppHubBlockingStub
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubGrpc.AppHubBlockingStub
  title: "Class AppHubGrpc.AppHubBlockingStub (0.52.0) \_|\_ Java client libraries\
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
Class AppHubGrpc.AppHubBlockingStub (0.52.0)
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
public static final class AppHubGrpc . AppHubBlockingStub extends AbstractBlockingStub<AppHubGrpc . AppHubBlockingStub >
A stub to allow clients to do limited synchronous rpc calls to service AppHub.
The App Hub API allows you to manage App Hub resources.
Inheritance
java.lang.Object >
io.grpc.stub.AbstractStub >
io.grpc.stub.AbstractBlockingStub >
AppHubGrpc.AppHubBlockingStub
Inherited Members
io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)
io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)
io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)
io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)
io.grpc.stub.AbstractStub.getCallOptions()
io.grpc.stub.AbstractStub.getChannel()
io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)
io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)
io.grpc.stub.AbstractStub.withCompression(java.lang.String)
io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)
io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration)
io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)
io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)
io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)
io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)
io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)
io.grpc.stub.AbstractStub.withOnReadyThreshold(int)
io.grpc.stub.AbstractStub.withWaitForReady()
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
build(Channel channel, CallOptions callOptions)
protected AppHubGrpc . AppHubBlockingStub build ( Channel channel , CallOptions callOptions )
Parameters
Name
Description
channel
io.grpc.Channel
callOptions
io.grpc.CallOptions
Returns
Type
Description
AppHubGrpc.AppHubBlockingStub
Overrides
io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)
createApplication(CreateApplicationRequest request)
public Operation createApplication ( CreateApplicationRequest request )
Creates an Application in a host project and location.
Parameter
Name
Description
request
CreateApplicationRequest
Returns
Type
Description
Operation
createService(CreateServiceRequest request)
public Operation createService ( CreateServiceRequest request )
Creates a Service in an Application.
Parameter
Name
Description
request
CreateServiceRequest
Returns
Type
Description
Operation
createServiceProjectAttachment(CreateServiceProjectAttachmentRequest request)
public Operation createServiceProjectAttachment ( CreateServiceProjectAttachmentRequest request )
Attaches a service project to the host project.
Parameter
Name
Description
request
CreateServiceProjectAttachmentRequest
Returns
Type
Description
Operation
createWorkload(CreateWorkloadRequest request)
public Operation createWorkload ( CreateWorkloadRequest request )
Creates a Workload in an Application.
Parameter
Name
Description
request
CreateWorkloadRequest
Returns
Type
Description
Operation
deleteApplication(DeleteApplicationRequest request)
public Operation deleteApplication ( DeleteApplicationRequest request )
Deletes an Application in a host project and location.
Parameter
Name
Description
request
DeleteApplicationRequest
Returns
Type
Description
Operation
deleteService(DeleteServiceRequest request)
public Operation deleteService ( DeleteServiceRequest request )
Deletes a Service from an Application.
Parameter
Name
Description
request
DeleteServiceRequest
Returns
Type
Description
Operation
deleteServiceProjectAttachment(DeleteServiceProjectAttachmentRequest request)
public Operation deleteServiceProjectAttachment ( DeleteServiceProjectAttachmentRequest request )
Deletes a service project attachment.
Parameter
Name
Description
request
DeleteServiceProjectAttachmentRequest
Returns
Type
Description
Operation
deleteWorkload(DeleteWorkloadRequest request)
public Operation deleteWorkload ( DeleteWorkloadRequest request )
Deletes a Workload from an Application.
Parameter
Name
Description
request
DeleteWorkloadRequest
Returns
Type
Description
Operation
detachServiceProjectAttachment(DetachServiceProjectAttachmentRequest request)
public DetachServiceProjectAttachmentResponse detachServiceProjectAttachment ( DetachServiceProjectAttachmentRequest request )
Detaches a service project from a host project.
You can call this API from any service project without needing access to
the host project that it is attached to.
Parameter
Name
Description
request
DetachServiceProjectAttachmentRequest
Returns
Type
Description
DetachServiceProjectAttachmentResponse
getApplication(GetApplicationRequest request)
public Application getApplication ( GetApplicationRequest request )
Gets an Application in a host project and location.
Parameter
Name
Description
request
GetApplicationRequest
Returns
Type
Description
Application
getDiscoveredService(GetDiscoveredServiceRequest request)
public DiscoveredService getDiscoveredService ( GetDiscoveredServiceRequest request )
Gets a Discovered Service in a host project and location.
Parameter
Name
Description
request
GetDiscoveredServiceRequest
Returns
Type
Description
DiscoveredService
getDiscoveredWorkload(GetDiscoveredWorkloadRequest request)
public DiscoveredWorkload getDiscoveredWorkload ( GetDiscoveredWorkloadRequest request )
Gets a Discovered Workload in a host project and location.
Parameter
Name
Description
request
GetDiscoveredWorkloadRequest
Returns
Type
Description
DiscoveredWorkload
getService(GetServiceRequest request)
public Service getService ( GetServiceRequest request )
Gets a Service in an Application.
Parameter
Name
Description
request
GetServiceRequest
Returns
Type
Description
Service
getServiceProjectAttachment(GetServiceProjectAttachmentRequest request)
public ServiceProjectAttachment getServiceProjectAttachment ( GetServiceProjectAttachmentRequest request )
Gets a service project attachment.
Parameter
Name
Description
request
GetServiceProjectAttachmentRequest
Returns
Type
Description
ServiceProjectAttachment
getWorkload(GetWorkloadRequest request)
public Workload getWorkload ( GetWorkloadRequest request )
Gets a Workload in an Application.
Parameter
Name
Description
request
GetWorkloadRequest
Returns
Type
Description
Workload
listApplications(ListApplicationsRequest request)
public ListApplicationsResponse listApplications ( ListApplicationsRequest request )
Lists Applications in a host project and location.
Parameter
Name
Description
request
ListApplicationsRequest
Returns
Type
Description
ListApplicationsResponse
listDiscoveredServices(ListDiscoveredServicesRequest request)
public ListDiscoveredServicesResponse listDiscoveredServices ( ListDiscoveredServicesRequest request )
Lists Discovered Services that can be added to an Application in a host
project and location.
Parameter
Name
Description
request
ListDiscoveredServicesRequest
Returns
Type
Description
ListDiscoveredServicesResponse
listDiscoveredWorkloads(ListDiscoveredWorkloadsRequest request)
public ListDiscoveredWorkloadsResponse listDiscoveredWorkloads ( ListDiscoveredWorkloadsRequest request )
Lists Discovered Workloads that can be added to an Application in a host
project and location.
Parameter
Name
Description
request
ListDiscoveredWorkloadsRequest
Returns
Type
Description
ListDiscoveredWorkloadsResponse
listServiceProjectAttachments(ListServiceProjectAttachmentsRequest request)
public ListServiceProjectAttachmentsResponse listServiceProjectAttachments ( ListServiceProjectAttachmentsRequest request )
Lists service projects attached to the host project.
Parameter
Name
Description
request
ListServiceProjectAttachmentsRequest
Returns
Type
Description
ListServiceProjectAttachmentsResponse
listServices(ListServicesRequest request)
public ListServicesResponse listServices ( ListServicesRequest request )
Lists Services in an Application.
Parameter
Name
Description
request
ListServicesRequest
Returns
Type
Description
ListServicesResponse
listWorkloads(ListWorkloadsRequest request)
public ListWorkloadsResponse listWorkloads ( ListWorkloadsRequest request )
Lists Workloads in an Application.
Parameter
Name
Description
request
ListWorkloadsRequest
Returns
Type
Description
ListWorkloadsResponse
lookupDiscoveredService(LookupDiscoveredServiceRequest request)
public LookupDiscoveredServiceResponse lookupDiscoveredService ( LookupDiscoveredServiceRequest request )
Lists a Discovered Service in a host project and location, with a
given resource URI.
Parameter
Name
Description
request
LookupDiscoveredServiceRequest
Returns
Type
Description
LookupDiscoveredServiceResponse
lookupDiscoveredWorkload(LookupDiscoveredWorkloadRequest request)
public LookupDiscoveredWorkloadResponse lookupDiscoveredWorkload ( LookupDiscoveredWorkloadRequest request )
Lists a Discovered Workload in a host project and location, with a
given resource URI.
Parameter
Name
Description
request
LookupDiscoveredWorkloadRequest
Returns
Type
Description
LookupDiscoveredWorkloadResponse
lookupServiceProjectAttachment(LookupServiceProjectAttachmentRequest request)
public LookupServiceProjectAttachmentResponse lookupServiceProjectAttachment ( LookupServiceProjectAttachmentRequest request )
Lists a service project attachment for a given service project. You can
call this API from any project to find if it is attached to a host project.
Parameter
Name
Description
request
LookupServiceProjectAttachmentRequest
Returns
Type
Description
LookupServiceProjectAttachmentResponse
updateApplication(UpdateApplicationRequest request)
public Operation updateApplication ( UpdateApplicationRequest request )
Updates an Application in a host project and location.
Parameter
Name
Description
request
UpdateApplicationRequest
Returns
Type
Description
Operation
updateService(UpdateServiceRequest request)
public Operation updateService ( UpdateServiceRequest request )
Updates a Service in an Application.
Parameter
Name
Description
request
UpdateServiceRequest
Returns
Type
Description
Operation
updateWorkload(UpdateWorkloadRequest request)
public Operation updateWorkload ( UpdateWorkloadRequest request )
Updates a Workload in an Application.
Parameter
Name
Description
request
UpdateWorkloadRequest
Returns
Type
Description
Operation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
