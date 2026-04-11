---
title: "Class CloudBuildStub (3.90.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStub
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStub
  title: "Class CloudBuildStub (3.90.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class CloudBuildStub (3.90.0)
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
public abstract class CloudBuildStub implements BackgroundResource
Base stub class for the CloudBuild service API.
This class is for advanced usage and reflects the underlying API directly.
Inheritance
java.lang.Object >
CloudBuildStub
Implements
BackgroundResource
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
CloudBuildStub()
public CloudBuildStub ()
Methods
approveBuildCallable()
public UnaryCallable<ApproveBuildRequest , Operation > approveBuildCallable ()
Returns
Type
Description
UnaryCallable < ApproveBuildRequest , Operation >
approveBuildOperationCallable()
public OperationCallable<ApproveBuildRequest , Build , BuildOperationMetadata > approveBuildOperationCallable ()
Returns
Type
Description
OperationCallable < ApproveBuildRequest , Build , BuildOperationMetadata >
cancelBuildCallable()
public UnaryCallable<CancelBuildRequest , Build > cancelBuildCallable ()
Returns
Type
Description
UnaryCallable < CancelBuildRequest , Build >
close()
public abstract void close ()
createBuildCallable()
public UnaryCallable<CreateBuildRequest , Operation > createBuildCallable ()
Returns
Type
Description
UnaryCallable < CreateBuildRequest , Operation >
createBuildOperationCallable()
public OperationCallable<CreateBuildRequest , Build , BuildOperationMetadata > createBuildOperationCallable ()
Returns
Type
Description
OperationCallable < CreateBuildRequest , Build , BuildOperationMetadata >
createBuildTriggerCallable()
public UnaryCallable<CreateBuildTriggerRequest , BuildTrigger > createBuildTriggerCallable ()
Returns
Type
Description
UnaryCallable < CreateBuildTriggerRequest , BuildTrigger >
createWorkerPoolCallable()
public UnaryCallable<CreateWorkerPoolRequest , Operation > createWorkerPoolCallable ()
Returns
Type
Description
UnaryCallable < CreateWorkerPoolRequest , Operation >
createWorkerPoolOperationCallable()
public OperationCallable<CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata > createWorkerPoolOperationCallable ()
Returns
Type
Description
OperationCallable < CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata >
deleteBuildTriggerCallable()
public UnaryCallable<DeleteBuildTriggerRequest , Empty > deleteBuildTriggerCallable ()
Returns
Type
Description
UnaryCallable < DeleteBuildTriggerRequest , Empty >
deleteWorkerPoolCallable()
public UnaryCallable<DeleteWorkerPoolRequest , Operation > deleteWorkerPoolCallable ()
Returns
Type
Description
UnaryCallable < DeleteWorkerPoolRequest , Operation >
deleteWorkerPoolOperationCallable()
public OperationCallable<DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata > deleteWorkerPoolOperationCallable ()
Returns
Type
Description
OperationCallable < DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata >
getBuildCallable()
public UnaryCallable<GetBuildRequest , Build > getBuildCallable ()
Returns
Type
Description
UnaryCallable < GetBuildRequest , Build >
getBuildTriggerCallable()
public UnaryCallable<GetBuildTriggerRequest , BuildTrigger > getBuildTriggerCallable ()
Returns
Type
Description
UnaryCallable < GetBuildTriggerRequest , BuildTrigger >
getDefaultServiceAccountCallable()
public UnaryCallable<GetDefaultServiceAccountRequest , DefaultServiceAccount > getDefaultServiceAccountCallable ()
Returns
Type
Description
UnaryCallable < GetDefaultServiceAccountRequest , DefaultServiceAccount >
getHttpJsonOperationsStub()
public OperationsStub getHttpJsonOperationsStub ()
Returns
Type
Description
OperationsStub
getOperationsStub()
public OperationsStub getOperationsStub ()
Returns
Type
Description
OperationsStub
getWorkerPoolCallable()
public UnaryCallable<GetWorkerPoolRequest , WorkerPool > getWorkerPoolCallable ()
Returns
Type
Description
UnaryCallable < GetWorkerPoolRequest , WorkerPool >
listBuildTriggersCallable()
public UnaryCallable<ListBuildTriggersRequest , ListBuildTriggersResponse > listBuildTriggersCallable ()
Returns
Type
Description
UnaryCallable < ListBuildTriggersRequest , ListBuildTriggersResponse >
listBuildTriggersPagedCallable()
public UnaryCallable<ListBuildTriggersRequest , CloudBuildClient . ListBuildTriggersPagedResponse > listBuildTriggersPagedCallable ()
Returns
Type
Description
UnaryCallable < ListBuildTriggersRequest , ListBuildTriggersPagedResponse >
listBuildsCallable()
public UnaryCallable<ListBuildsRequest , ListBuildsResponse > listBuildsCallable ()
Returns
Type
Description
UnaryCallable < ListBuildsRequest , ListBuildsResponse >
listBuildsPagedCallable()
public UnaryCallable<ListBuildsRequest , CloudBuildClient . ListBuildsPagedResponse > listBuildsPagedCallable ()
Returns
Type
Description
UnaryCallable < ListBuildsRequest , ListBuildsPagedResponse >
listWorkerPoolsCallable()
public UnaryCallable<ListWorkerPoolsRequest , ListWorkerPoolsResponse > listWorkerPoolsCallable ()
Returns
Type
Description
UnaryCallable < ListWorkerPoolsRequest , ListWorkerPoolsResponse >
listWorkerPoolsPagedCallable()
public UnaryCallable<ListWorkerPoolsRequest , CloudBuildClient . ListWorkerPoolsPagedResponse > listWorkerPoolsPagedCallable ()
Returns
Type
Description
UnaryCallable < ListWorkerPoolsRequest , ListWorkerPoolsPagedResponse >
receiveTriggerWebhookCallable()
public UnaryCallable<ReceiveTriggerWebhookRequest , ReceiveTriggerWebhookResponse > receiveTriggerWebhookCallable ()
Returns
Type
Description
UnaryCallable < ReceiveTriggerWebhookRequest , ReceiveTriggerWebhookResponse >
retryBuildCallable()
public UnaryCallable<RetryBuildRequest , Operation > retryBuildCallable ()
Returns
Type
Description
UnaryCallable < RetryBuildRequest , Operation >
retryBuildOperationCallable()
public OperationCallable<RetryBuildRequest , Build , BuildOperationMetadata > retryBuildOperationCallable ()
Returns
Type
Description
OperationCallable < RetryBuildRequest , Build , BuildOperationMetadata >
runBuildTriggerCallable()
public UnaryCallable<RunBuildTriggerRequest , Operation > runBuildTriggerCallable ()
Returns
Type
Description
UnaryCallable < RunBuildTriggerRequest , Operation >
runBuildTriggerOperationCallable()
public OperationCallable<RunBuildTriggerRequest , Build , BuildOperationMetadata > runBuildTriggerOperationCallable ()
Returns
Type
Description
OperationCallable < RunBuildTriggerRequest , Build , BuildOperationMetadata >
updateBuildTriggerCallable()
public UnaryCallable<UpdateBuildTriggerRequest , BuildTrigger > updateBuildTriggerCallable ()
Returns
Type
Description
UnaryCallable < UpdateBuildTriggerRequest , BuildTrigger >
updateWorkerPoolCallable()
public UnaryCallable<UpdateWorkerPoolRequest , Operation > updateWorkerPoolCallable ()
Returns
Type
Description
UnaryCallable < UpdateWorkerPoolRequest , Operation >
updateWorkerPoolOperationCallable()
public OperationCallable<UpdateWorkerPoolRequest , WorkerPool , UpdateWorkerPoolOperationMetadata > updateWorkerPoolOperationCallable ()
Returns
Type
Description
OperationCallable < UpdateWorkerPoolRequest , WorkerPool , UpdateWorkerPoolOperationMetadata >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
