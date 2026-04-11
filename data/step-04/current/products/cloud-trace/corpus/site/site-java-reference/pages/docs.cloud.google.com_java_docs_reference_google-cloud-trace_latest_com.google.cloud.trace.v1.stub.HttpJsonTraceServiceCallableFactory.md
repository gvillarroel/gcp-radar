---
title: "Class HttpJsonTraceServiceCallableFactory (2.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.stub.HttpJsonTraceServiceCallableFactory
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.stub.HttpJsonTraceServiceCallableFactory
  title: "Class HttpJsonTraceServiceCallableFactory (2.88.0) \_|\_ Java client libraries\
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
Class HttpJsonTraceServiceCallableFactory (2.88.0)
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
2.3.7
2.2.0
2.1.13
public class HttpJsonTraceServiceCallableFactory implements HttpJsonStubCallableFactory<Operation , OperationsStub >
REST callable factory implementation for the TraceService service API.
This class is for advanced usage.
Inheritance
java.lang.Object >
HttpJsonTraceServiceCallableFactory
Implements
com.google.api.gax.httpjson.HttpJsonStubCallableFactory<com.google.longrunning.Operation,com.google.api.gax.httpjson.longrunning.stub.OperationsStub>
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
HttpJsonTraceServiceCallableFactory()
public HttpJsonTraceServiceCallableFactory ()
Methods
<RequestT,ResponseT,MetadataT>createOperationCallable(HttpJsonCallSettings<RequestT,Operation> httpJsonCallSettings, OperationCallSettings<RequestT,ResponseT,MetadataT> callSettings, ClientContext clientContext, OperationsStub operationsStub)
public OperationCallable<RequestT , ResponseT , MetadataT > < RequestT , ResponseT , MetadataT>createOperationCallable ( HttpJsonCallSettings<RequestT , Operation > httpJsonCallSettings , OperationCallSettings<RequestT , ResponseT , MetadataT > callSettings , ClientContext clientContext , OperationsStub operationsStub )
Parameters
Name
Description
httpJsonCallSettings
HttpJsonCallSettings < RequestT , Operation >
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
<RequestT,ResponseT,PagedListResponseT>createPagedCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, PagedCallSettings<RequestT,ResponseT,PagedListResponseT> callSettings, ClientContext clientContext)
public UnaryCallable<RequestT , PagedListResponseT > < RequestT , ResponseT , PagedListResponseT>createPagedCallable ( HttpJsonCallSettings<RequestT , ResponseT > httpJsonCallSettings , PagedCallSettings<RequestT , ResponseT , PagedListResponseT > callSettings , ClientContext clientContext )
Parameters
Name
Description
httpJsonCallSettings
HttpJsonCallSettings < RequestT , ResponseT >
callSettings
PagedCallSettings < RequestT , ResponseT , PagedListResponseT >
clientContext
ClientContext
Returns
Type
Description
UnaryCallable < RequestT , PagedListResponseT >
<RequestT,ResponseT>createBatchingCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, BatchingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
public UnaryCallable<RequestT , ResponseT > < RequestT , ResponseT>createBatchingCallable ( HttpJsonCallSettings<RequestT , ResponseT > httpJsonCallSettings , BatchingCallSettings<RequestT , ResponseT > callSettings , ClientContext clientContext )
Parameters
Name
Description
httpJsonCallSettings
HttpJsonCallSettings < RequestT , ResponseT >
callSettings
BatchingCallSettings < RequestT , ResponseT >
clientContext
ClientContext
Returns
Type
Description
UnaryCallable < RequestT , ResponseT >
<RequestT,ResponseT>createServerStreamingCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, ServerStreamingCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
public ServerStreamingCallable<RequestT , ResponseT > < RequestT , ResponseT>createServerStreamingCallable ( HttpJsonCallSettings<RequestT , ResponseT > httpJsonCallSettings , ServerStreamingCallSettings<RequestT , ResponseT > callSettings , ClientContext clientContext )
Parameters
Name
Description
httpJsonCallSettings
HttpJsonCallSettings < RequestT , ResponseT >
callSettings
ServerStreamingCallSettings < RequestT , ResponseT >
clientContext
ClientContext
Returns
Type
Description
ServerStreamingCallable < RequestT , ResponseT >
<RequestT,ResponseT>createUnaryCallable(HttpJsonCallSettings<RequestT,ResponseT> httpJsonCallSettings, UnaryCallSettings<RequestT,ResponseT> callSettings, ClientContext clientContext)
public UnaryCallable<RequestT , ResponseT > < RequestT , ResponseT>createUnaryCallable ( HttpJsonCallSettings<RequestT , ResponseT > httpJsonCallSettings , UnaryCallSettings<RequestT , ResponseT > callSettings , ClientContext clientContext )
Parameters
Name
Description
httpJsonCallSettings
HttpJsonCallSettings < RequestT , ResponseT >
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
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
