---
title: "Class GrpcCloudBuildCallableFactory (3.90.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.GrpcCloudBuildCallableFactory
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.GrpcCloudBuildCallableFactory
  title: "Class GrpcCloudBuildCallableFactory (3.90.0) \_|\_ Java client libraries\
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
Class GrpcCloudBuildCallableFactory (3.90.0)
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
public class GrpcCloudBuildCallableFactory implements GrpcStubCallableFactory
gRPC callable factory implementation for the CloudBuild service API.
This class is for advanced usage.
Inheritance
java.lang.Object >
GrpcCloudBuildCallableFactory
Implements
GrpcStubCallableFactory
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
Constructors
GrpcCloudBuildCallableFactory()
public GrpcCloudBuildCallableFactory ()
Methods
<RequestT,ResponseT,MetadataT>createOperationCallable(GrpcCallSettings<RequestT,Operation> grpcCallSettings, OperationCallSettings<RequestT,ResponseT,MetadataT> callSettings, ClientContext clientContext, OperationsStub operationsStub)
public OperationCallable<RequestT , ResponseT , MetadataT > < RequestT , ResponseT , MetadataT>createOperationCallable ( GrpcCallSettings<RequestT , Operation > grpcCallSettings , OperationCallSettings<RequestT , ResponseT , MetadataT > callSettings , ClientContext clientContext , OperationsStub operationsStub )
Parameters
Name
Description
grpcCallSettings
GrpcCallSettings < RequestT , Operation >
callSettings
OperationCallSettings < RequestT , ResponseT , MetadataT >
clientContext
ClientContext
operationsStub
OperationsStub
Returns
Type
Description
OperationCallable < RequestT , ResponseT , MetadataT >
<RequestT,ResponseT,PagedListResponseT>createPagedCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, PagedCallSettings<RequestT,ResponseT,PagedListResponseT> callSettings, ClientContext clientContext)
public UnaryCallable<RequestT , PagedListResponseT > < RequestT , ResponseT , PagedListResponseT>createPagedCallable ( GrpcCallSettings<RequestT , ResponseT > grpcCallSettings , PagedCallSettings<RequestT , ResponseT , PagedListResponseT > callSettings , ClientContext clientContext )
Parameters
Name
Description
grpcCallSettings
GrpcCallSettings < RequestT , ResponseT >
callSettings
PagedCallSettings < RequestT , ResponseT , PagedListResponseT >
clientContext
ClientContext
Returns
Type
Description
UnaryCallable < RequestT , PagedListResponseT >
<RequestT,ResponseT>createBatchingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, BatchingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
public UnaryCallable<RequestT , ResponseT > < RequestT , ResponseT>createBatchingCallable ( GrpcCallSettings<RequestT , ResponseT > grpcCallSettings , BatchingCallSettings<RequestT , ResponseT > callSettings , ClientContext clientContext )
Parameters
Name
Description
grpcCallSettings
GrpcCallSettings < RequestT , ResponseT >
callSettings
BatchingCallSettings < RequestT , ResponseT >
clientContext
ClientContext
Returns
Type
Description
UnaryCallable < RequestT , ResponseT >
<RequestT,ResponseT>createBidiStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, StreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
public BidiStreamingCallable<RequestT , ResponseT > < RequestT , ResponseT>createBidiStreamingCallable ( GrpcCallSettings<RequestT , ResponseT > grpcCallSettings , StreamingCallSettings<RequestT , ResponseT > callSettings , ClientContext clientContext )
Parameters
Name
Description
grpcCallSettings
GrpcCallSettings < RequestT , ResponseT >
callSettings
StreamingCallSettings < RequestT , ResponseT >
clientContext
ClientContext
Returns
Type
Description
BidiStreamingCallable < RequestT , ResponseT >
<RequestT,ResponseT>createClientStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, StreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
public ClientStreamingCallable<RequestT , ResponseT > < RequestT , ResponseT>createClientStreamingCallable ( GrpcCallSettings<RequestT , ResponseT > grpcCallSettings , StreamingCallSettings<RequestT , ResponseT > callSettings , ClientContext clientContext )
Parameters
Name
Description
grpcCallSettings
GrpcCallSettings < RequestT , ResponseT >
callSettings
StreamingCallSettings < RequestT , ResponseT >
clientContext
ClientContext
Returns
Type
Description
ClientStreamingCallable < RequestT , ResponseT >
<RequestT,ResponseT>createServerStreamingCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, ServerStreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
public ServerStreamingCallable<RequestT , ResponseT > < RequestT , ResponseT>createServerStreamingCallable ( GrpcCallSettings<RequestT , ResponseT > grpcCallSettings , ServerStreamingCallSettings<RequestT , ResponseT > callSettings , ClientContext clientContext )
Parameters
Name
Description
grpcCallSettings
GrpcCallSettings < RequestT , ResponseT >
callSettings
ServerStreamingCallSettings < RequestT , ResponseT >
clientContext
ClientContext
Returns
Type
Description
ServerStreamingCallable < RequestT , ResponseT >
<RequestT,ResponseT>createUnaryCallable(GrpcCallSettings<RequestT,ResponseT> grpcCallSettings, UnaryCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
public UnaryCallable<RequestT , ResponseT > < RequestT , ResponseT>createUnaryCallable ( GrpcCallSettings<RequestT , ResponseT > grpcCallSettings , UnaryCallSettings<RequestT , ResponseT > callSettings , ClientContext clientContext )
Parameters
Name
Description
grpcCallSettings
GrpcCallSettings < RequestT , ResponseT >
callSettings
UnaryCallSettings < RequestT , ResponseT >
clientContext
ClientContext
Returns
Type
Description
UnaryCallable < RequestT , ResponseT >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
