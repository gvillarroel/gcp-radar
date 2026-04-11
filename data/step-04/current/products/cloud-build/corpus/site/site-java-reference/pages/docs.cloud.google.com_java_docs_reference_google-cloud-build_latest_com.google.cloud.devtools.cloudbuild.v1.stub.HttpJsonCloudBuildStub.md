---
title: "Class HttpJsonCloudBuildStub (3.90.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.HttpJsonCloudBuildStub
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.HttpJsonCloudBuildStub
  title: "Class HttpJsonCloudBuildStub (3.90.0) \_|\_ Java client libraries \_|\_\
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
Class HttpJsonCloudBuildStub (3.90.0)
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
public class HttpJsonCloudBuildStub extends CloudBuildStub
REST stub implementation for the CloudBuild service API.
This class is for advanced usage and reflects the underlying API directly.
Inheritance
java.lang.Object >
CloudBuildStub >
HttpJsonCloudBuildStub
Inherited Members
CloudBuildStub.approveBuildCallable()
CloudBuildStub.approveBuildOperationCallable()
CloudBuildStub.cancelBuildCallable()
CloudBuildStub.close()
CloudBuildStub.createBuildCallable()
CloudBuildStub.createBuildOperationCallable()
CloudBuildStub.createBuildTriggerCallable()
CloudBuildStub.createWorkerPoolCallable()
CloudBuildStub.createWorkerPoolOperationCallable()
CloudBuildStub.deleteBuildTriggerCallable()
CloudBuildStub.deleteWorkerPoolCallable()
CloudBuildStub.deleteWorkerPoolOperationCallable()
CloudBuildStub.getBuildCallable()
CloudBuildStub.getBuildTriggerCallable()
CloudBuildStub.getDefaultServiceAccountCallable()
CloudBuildStub.getHttpJsonOperationsStub()
CloudBuildStub.getOperationsStub()
CloudBuildStub.getWorkerPoolCallable()
CloudBuildStub.listBuildTriggersCallable()
CloudBuildStub.listBuildTriggersPagedCallable()
CloudBuildStub.listBuildsCallable()
CloudBuildStub.listBuildsPagedCallable()
CloudBuildStub.listWorkerPoolsCallable()
CloudBuildStub.listWorkerPoolsPagedCallable()
CloudBuildStub.receiveTriggerWebhookCallable()
CloudBuildStub.retryBuildCallable()
CloudBuildStub.retryBuildOperationCallable()
CloudBuildStub.runBuildTriggerCallable()
CloudBuildStub.runBuildTriggerOperationCallable()
CloudBuildStub.updateBuildTriggerCallable()
CloudBuildStub.updateWorkerPoolCallable()
CloudBuildStub.updateWorkerPoolOperationCallable()
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
Static Methods
create(ClientContext clientContext)
public static final HttpJsonCloudBuildStub create ( ClientContext clientContext )
Parameter
Name
Description
clientContext
ClientContext
Returns
Type
Description
HttpJsonCloudBuildStub
Exceptions
Type
Description
IOException
create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
public static final HttpJsonCloudBuildStub create ( ClientContext clientContext , HttpJsonStubCallableFactory callableFactory )
Parameters
Name
Description
clientContext
ClientContext
callableFactory
HttpJsonStubCallableFactory
Returns
Type
Description
HttpJsonCloudBuildStub
Exceptions
Type
Description
IOException
create(CloudBuildStubSettings settings)
public static final HttpJsonCloudBuildStub create ( CloudBuildStubSettings settings )
Parameter
Name
Description
settings
CloudBuildStubSettings
Returns
Type
Description
HttpJsonCloudBuildStub
Exceptions
Type
Description
IOException
getMethodDescriptors()
public static List<ApiMethodDescriptor> getMethodDescriptors ()
Internal Only : This feature is not stable for application use.
Returns
Type
Description
List < ApiMethodDescriptor >
Constructors
HttpJsonCloudBuildStub(CloudBuildStubSettings settings, ClientContext clientContext)
protected HttpJsonCloudBuildStub ( CloudBuildStubSettings settings , ClientContext clientContext )
Constructs an instance of HttpJsonCloudBuildStub, using the given settings. This is protected
so that it is easy to make a subclass, but otherwise, the static factory methods should be
preferred.
Parameters
Name
Description
settings
CloudBuildStubSettings
clientContext
ClientContext
HttpJsonCloudBuildStub(CloudBuildStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
protected HttpJsonCloudBuildStub ( CloudBuildStubSettings settings , ClientContext clientContext , HttpJsonStubCallableFactory callableFactory )
Constructs an instance of HttpJsonCloudBuildStub, using the given settings. This is protected
so that it is easy to make a subclass, but otherwise, the static factory methods should be
preferred.
Parameters
Name
Description
settings
CloudBuildStubSettings
clientContext
ClientContext
callableFactory
HttpJsonStubCallableFactory
Methods
approveBuildCallable()
public UnaryCallable<ApproveBuildRequest , Operation > approveBuildCallable ()
Returns
Type
Description
UnaryCallable < ApproveBuildRequest , Operation >
Overrides
CloudBuildStub.approveBuildCallable()
approveBuildOperationCallable()
public OperationCallable<ApproveBuildRequest , Build , BuildOperationMetadata > approveBuildOperationCallable ()
Returns
Type
Description
OperationCallable < ApproveBuildRequest , Build , BuildOperationMetadata >
Overrides
CloudBuildStub.approveBuildOperationCallable()
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
cancelBuildCallable()
public UnaryCallable<CancelBuildRequest , Build > cancelBuildCallable ()
Returns
Type
Description
UnaryCallable < CancelBuildRequest , Build >
Overrides
CloudBuildStub.cancelBuildCallable()
close()
public final void close ()
Overrides
CloudBuildStub.close()
createBuildCallable()
public UnaryCallable<CreateBuildRequest , Operation > createBuildCallable ()
Returns
Type
Description
UnaryCallable < CreateBuildRequest , Operation >
Overrides
CloudBuildStub.createBuildCallable()
createBuildOperationCallable()
public OperationCallable<CreateBuildRequest , Build , BuildOperationMetadata > createBuildOperationCallable ()
Returns
Type
Description
OperationCallable < CreateBuildRequest , Build , BuildOperationMetadata >
Overrides
CloudBuildStub.createBuildOperationCallable()
createBuildTriggerCallable()
public UnaryCallable<CreateBuildTriggerRequest , BuildTrigger > createBuildTriggerCallable ()
Returns
Type
Description
UnaryCallable < CreateBuildTriggerRequest , BuildTrigger >
Overrides
CloudBuildStub.createBuildTriggerCallable()
createWorkerPoolCallable()
public UnaryCallable<CreateWorkerPoolRequest , Operation > createWorkerPoolCallable ()
Returns
Type
Description
UnaryCallable < CreateWorkerPoolRequest , Operation >
Overrides
CloudBuildStub.createWorkerPoolCallable()
createWorkerPoolOperationCallable()
public OperationCallable<CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata > createWorkerPoolOperationCallable ()
Returns
Type
Description
OperationCallable < CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata >
Overrides
CloudBuildStub.createWorkerPoolOperationCallable()
deleteBuildTriggerCallable()
public UnaryCallable<DeleteBuildTriggerRequest , Empty > deleteBuildTriggerCallable ()
Returns
Type
Description
UnaryCallable < DeleteBuildTriggerRequest , Empty >
Overrides
CloudBuildStub.deleteBuildTriggerCallable()
deleteWorkerPoolCallable()
public UnaryCallable<DeleteWorkerPoolRequest , Operation > deleteWorkerPoolCallable ()
Returns
Type
Description
UnaryCallable < DeleteWorkerPoolRequest , Operation >
Overrides
CloudBuildStub.deleteWorkerPoolCallable()
deleteWorkerPoolOperationCallable()
public OperationCallable<DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata > deleteWorkerPoolOperationCallable ()
Returns
Type
Description
OperationCallable < DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata >
Overrides
CloudBuildStub.deleteWorkerPoolOperationCallable()
getBuildCallable()
public UnaryCallable<GetBuildRequest , Build > getBuildCallable ()
Returns
Type
Description
UnaryCallable < GetBuildRequest , Build >
Overrides
CloudBuildStub.getBuildCallable()
getBuildTriggerCallable()
public UnaryCallable<GetBuildTriggerRequest , BuildTrigger > getBuildTriggerCallable ()
Returns
Type
Description
UnaryCallable < GetBuildTriggerRequest , BuildTrigger >
Overrides
CloudBuildStub.getBuildTriggerCallable()
getDefaultServiceAccountCallable()
public UnaryCallable<GetDefaultServiceAccountRequest , DefaultServiceAccount > getDefaultServiceAccountCallable ()
Returns
Type
Description
UnaryCallable < GetDefaultServiceAccountRequest , DefaultServiceAccount >
Overrides
CloudBuildStub.getDefaultServiceAccountCallable()
getHttpJsonOperationsStub()
public HttpJsonOperationsStub getHttpJsonOperationsStub ()
Returns
Type
Description
HttpJsonOperationsStub
Overrides
CloudBuildStub.getHttpJsonOperationsStub()
getWorkerPoolCallable()
public UnaryCallable<GetWorkerPoolRequest , WorkerPool > getWorkerPoolCallable ()
Returns
Type
Description
UnaryCallable < GetWorkerPoolRequest , WorkerPool >
Overrides
CloudBuildStub.getWorkerPoolCallable()
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
listBuildTriggersCallable()
public UnaryCallable<ListBuildTriggersRequest , ListBuildTriggersResponse > listBuildTriggersCallable ()
Returns
Type
Description
UnaryCallable < ListBuildTriggersRequest , ListBuildTriggersResponse >
Overrides
CloudBuildStub.listBuildTriggersCallable()
listBuildTriggersPagedCallable()
public UnaryCallable<ListBuildTriggersRequest , CloudBuildClient . ListBuildTriggersPagedResponse > listBuildTriggersPagedCallable ()
Returns
Type
Description
UnaryCallable < ListBuildTriggersRequest , ListBuildTriggersPagedResponse >
Overrides
CloudBuildStub.listBuildTriggersPagedCallable()
listBuildsCallable()
public UnaryCallable<ListBuildsRequest , ListBuildsResponse > listBuildsCallable ()
Returns
Type
Description
UnaryCallable < ListBuildsRequest , ListBuildsResponse >
Overrides
CloudBuildStub.listBuildsCallable()
listBuildsPagedCallable()
public UnaryCallable<ListBuildsRequest , CloudBuildClient . ListBuildsPagedResponse > listBuildsPagedCallable ()
Returns
Type
Description
UnaryCallable < ListBuildsRequest , ListBuildsPagedResponse >
Overrides
CloudBuildStub.listBuildsPagedCallable()
listWorkerPoolsCallable()
public UnaryCallable<ListWorkerPoolsRequest , ListWorkerPoolsResponse > listWorkerPoolsCallable ()
Returns
Type
Description
UnaryCallable < ListWorkerPoolsRequest , ListWorkerPoolsResponse >
Overrides
CloudBuildStub.listWorkerPoolsCallable()
listWorkerPoolsPagedCallable()
public UnaryCallable<ListWorkerPoolsRequest , CloudBuildClient . ListWorkerPoolsPagedResponse > listWorkerPoolsPagedCallable ()
Returns
Type
Description
UnaryCallable < ListWorkerPoolsRequest , ListWorkerPoolsPagedResponse >
Overrides
CloudBuildStub.listWorkerPoolsPagedCallable()
receiveTriggerWebhookCallable()
public UnaryCallable<ReceiveTriggerWebhookRequest , ReceiveTriggerWebhookResponse > receiveTriggerWebhookCallable ()
Returns
Type
Description
UnaryCallable < ReceiveTriggerWebhookRequest , ReceiveTriggerWebhookResponse >
Overrides
CloudBuildStub.receiveTriggerWebhookCallable()
retryBuildCallable()
public UnaryCallable<RetryBuildRequest , Operation > retryBuildCallable ()
Returns
Type
Description
UnaryCallable < RetryBuildRequest , Operation >
Overrides
CloudBuildStub.retryBuildCallable()
retryBuildOperationCallable()
public OperationCallable<RetryBuildRequest , Build , BuildOperationMetadata > retryBuildOperationCallable ()
Returns
Type
Description
OperationCallable < RetryBuildRequest , Build , BuildOperationMetadata >
Overrides
CloudBuildStub.retryBuildOperationCallable()
runBuildTriggerCallable()
public UnaryCallable<RunBuildTriggerRequest , Operation > runBuildTriggerCallable ()
Returns
Type
Description
UnaryCallable < RunBuildTriggerRequest , Operation >
Overrides
CloudBuildStub.runBuildTriggerCallable()
runBuildTriggerOperationCallable()
public OperationCallable<RunBuildTriggerRequest , Build , BuildOperationMetadata > runBuildTriggerOperationCallable ()
Returns
Type
Description
OperationCallable < RunBuildTriggerRequest , Build , BuildOperationMetadata >
Overrides
CloudBuildStub.runBuildTriggerOperationCallable()
shutdown()
public void shutdown ()
shutdownNow()
public void shutdownNow ()
updateBuildTriggerCallable()
public UnaryCallable<UpdateBuildTriggerRequest , BuildTrigger > updateBuildTriggerCallable ()
Returns
Type
Description
UnaryCallable < UpdateBuildTriggerRequest , BuildTrigger >
Overrides
CloudBuildStub.updateBuildTriggerCallable()
updateWorkerPoolCallable()
public UnaryCallable<UpdateWorkerPoolRequest , Operation > updateWorkerPoolCallable ()
Returns
Type
Description
UnaryCallable < UpdateWorkerPoolRequest , Operation >
Overrides
CloudBuildStub.updateWorkerPoolCallable()
updateWorkerPoolOperationCallable()
public OperationCallable<UpdateWorkerPoolRequest , WorkerPool , UpdateWorkerPoolOperationMetadata > updateWorkerPoolOperationCallable ()
Returns
Type
Description
OperationCallable < UpdateWorkerPoolRequest , WorkerPool , UpdateWorkerPoolOperationMetadata >
Overrides
CloudBuildStub.updateWorkerPoolOperationCallable()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
