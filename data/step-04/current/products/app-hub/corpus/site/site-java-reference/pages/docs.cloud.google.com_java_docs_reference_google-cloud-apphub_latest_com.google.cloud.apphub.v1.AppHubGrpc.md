---
title: "Class AppHubGrpc (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubGrpc
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubGrpc
  title: "Class AppHubGrpc (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class AppHubGrpc (0.52.0)
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
public final class AppHubGrpc
The App Hub API allows you to manage App Hub resources.
Inheritance
java.lang.Object >
AppHubGrpc
Inherited Members
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
Static Fields
SERVICE_NAME
public static final String SERVICE_NAME
Field Value
Type
Description
String
Static Methods
bindService(AppHubGrpc.AsyncService service)
public static final ServerServiceDefinition bindService ( AppHubGrpc . AsyncService service )
Parameter
Name
Description
service
AppHubGrpc.AsyncService
Returns
Type
Description
io.grpc.ServerServiceDefinition
getCreateApplicationMethod()
public static MethodDescriptor<CreateApplicationRequest , Operation > getCreateApplicationMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < CreateApplicationRequest , Operation >
getCreateServiceMethod()
public static MethodDescriptor<CreateServiceRequest , Operation > getCreateServiceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < CreateServiceRequest , Operation >
getCreateServiceProjectAttachmentMethod()
public static MethodDescriptor<CreateServiceProjectAttachmentRequest , Operation > getCreateServiceProjectAttachmentMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < CreateServiceProjectAttachmentRequest , Operation >
getCreateWorkloadMethod()
public static MethodDescriptor<CreateWorkloadRequest , Operation > getCreateWorkloadMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < CreateWorkloadRequest , Operation >
getDeleteApplicationMethod()
public static MethodDescriptor<DeleteApplicationRequest , Operation > getDeleteApplicationMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < DeleteApplicationRequest , Operation >
getDeleteServiceMethod()
public static MethodDescriptor<DeleteServiceRequest , Operation > getDeleteServiceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < DeleteServiceRequest , Operation >
getDeleteServiceProjectAttachmentMethod()
public static MethodDescriptor<DeleteServiceProjectAttachmentRequest , Operation > getDeleteServiceProjectAttachmentMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < DeleteServiceProjectAttachmentRequest , Operation >
getDeleteWorkloadMethod()
public static MethodDescriptor<DeleteWorkloadRequest , Operation > getDeleteWorkloadMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < DeleteWorkloadRequest , Operation >
getDetachServiceProjectAttachmentMethod()
public static MethodDescriptor<DetachServiceProjectAttachmentRequest , DetachServiceProjectAttachmentResponse > getDetachServiceProjectAttachmentMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < DetachServiceProjectAttachmentRequest , DetachServiceProjectAttachmentResponse >
getGetApplicationMethod()
public static MethodDescriptor<GetApplicationRequest , Application > getGetApplicationMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetApplicationRequest , Application >
getGetDiscoveredServiceMethod()
public static MethodDescriptor<GetDiscoveredServiceRequest , DiscoveredService > getGetDiscoveredServiceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetDiscoveredServiceRequest , DiscoveredService >
getGetDiscoveredWorkloadMethod()
public static MethodDescriptor<GetDiscoveredWorkloadRequest , DiscoveredWorkload > getGetDiscoveredWorkloadMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetDiscoveredWorkloadRequest , DiscoveredWorkload >
getGetServiceMethod()
public static MethodDescriptor<GetServiceRequest , Service > getGetServiceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetServiceRequest , Service >
getGetServiceProjectAttachmentMethod()
public static MethodDescriptor<GetServiceProjectAttachmentRequest , ServiceProjectAttachment > getGetServiceProjectAttachmentMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetServiceProjectAttachmentRequest , ServiceProjectAttachment >
getGetWorkloadMethod()
public static MethodDescriptor<GetWorkloadRequest , Workload > getGetWorkloadMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < GetWorkloadRequest , Workload >
getListApplicationsMethod()
public static MethodDescriptor<ListApplicationsRequest , ListApplicationsResponse > getListApplicationsMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListApplicationsRequest , ListApplicationsResponse >
getListDiscoveredServicesMethod()
public static MethodDescriptor<ListDiscoveredServicesRequest , ListDiscoveredServicesResponse > getListDiscoveredServicesMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListDiscoveredServicesRequest , ListDiscoveredServicesResponse >
getListDiscoveredWorkloadsMethod()
public static MethodDescriptor<ListDiscoveredWorkloadsRequest , ListDiscoveredWorkloadsResponse > getListDiscoveredWorkloadsMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListDiscoveredWorkloadsRequest , ListDiscoveredWorkloadsResponse >
getListServiceProjectAttachmentsMethod()
public static MethodDescriptor<ListServiceProjectAttachmentsRequest , ListServiceProjectAttachmentsResponse > getListServiceProjectAttachmentsMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListServiceProjectAttachmentsRequest , ListServiceProjectAttachmentsResponse >
getListServicesMethod()
public static MethodDescriptor<ListServicesRequest , ListServicesResponse > getListServicesMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListServicesRequest , ListServicesResponse >
getListWorkloadsMethod()
public static MethodDescriptor<ListWorkloadsRequest , ListWorkloadsResponse > getListWorkloadsMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < ListWorkloadsRequest , ListWorkloadsResponse >
getLookupDiscoveredServiceMethod()
public static MethodDescriptor<LookupDiscoveredServiceRequest , LookupDiscoveredServiceResponse > getLookupDiscoveredServiceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < LookupDiscoveredServiceRequest , LookupDiscoveredServiceResponse >
getLookupDiscoveredWorkloadMethod()
public static MethodDescriptor<LookupDiscoveredWorkloadRequest , LookupDiscoveredWorkloadResponse > getLookupDiscoveredWorkloadMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < LookupDiscoveredWorkloadRequest , LookupDiscoveredWorkloadResponse >
getLookupServiceProjectAttachmentMethod()
public static MethodDescriptor<LookupServiceProjectAttachmentRequest , LookupServiceProjectAttachmentResponse > getLookupServiceProjectAttachmentMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < LookupServiceProjectAttachmentRequest , LookupServiceProjectAttachmentResponse >
getServiceDescriptor()
public static ServiceDescriptor getServiceDescriptor ()
Returns
Type
Description
io.grpc.ServiceDescriptor
getUpdateApplicationMethod()
public static MethodDescriptor<UpdateApplicationRequest , Operation > getUpdateApplicationMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < UpdateApplicationRequest , Operation >
getUpdateServiceMethod()
public static MethodDescriptor<UpdateServiceRequest , Operation > getUpdateServiceMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < UpdateServiceRequest , Operation >
getUpdateWorkloadMethod()
public static MethodDescriptor<UpdateWorkloadRequest , Operation > getUpdateWorkloadMethod ()
Returns
Type
Description
io.grpc.MethodDescriptor < UpdateWorkloadRequest , Operation >
newBlockingStub(Channel channel)
public static AppHubGrpc . AppHubBlockingStub newBlockingStub ( Channel channel )
Creates a new blocking-style stub that supports unary and streaming output calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
AppHubGrpc.AppHubBlockingStub
newBlockingV2Stub(Channel channel)
public static AppHubGrpc . AppHubBlockingV2Stub newBlockingV2Stub ( Channel channel )
Creates a new blocking-style stub that supports all types of calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
AppHubGrpc.AppHubBlockingV2Stub
newFutureStub(Channel channel)
public static AppHubGrpc . AppHubFutureStub newFutureStub ( Channel channel )
Creates a new ListenableFuture-style stub that supports unary calls on the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
AppHubGrpc.AppHubFutureStub
newStub(Channel channel)
public static AppHubGrpc . AppHubStub newStub ( Channel channel )
Creates a new async stub that supports all call types for the service
Parameter
Name
Description
channel
io.grpc.Channel
Returns
Type
Description
AppHubGrpc.AppHubStub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
