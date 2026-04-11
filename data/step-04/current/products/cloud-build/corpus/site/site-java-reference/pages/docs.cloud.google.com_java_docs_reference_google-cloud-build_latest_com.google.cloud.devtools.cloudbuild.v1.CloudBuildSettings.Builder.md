---
title: "Class CloudBuildSettings.Builder (3.90.0) \_|\_ Java client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder
  title: "Class CloudBuildSettings.Builder (3.90.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
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
Class CloudBuildSettings.Builder (3.90.0)
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
public static class CloudBuildSettings . Builder extends ClientSettings . Builder<CloudBuildSettings , CloudBuildSettings . Builder >
Builder for CloudBuildSettings.
Inheritance
java.lang.Object >
ClientSettings.Builder >
CloudBuildSettings.Builder
Inherited Members
ClientSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>)
ClientSettings.Builder.build()
ClientSettings.Builder.getApiKey()
ClientSettings.Builder.getBackgroundExecutorProvider()
ClientSettings.Builder.getClock()
ClientSettings.Builder.getCredentialsProvider()
ClientSettings.Builder.getEndpoint()
ClientSettings.Builder.getExecutorProvider()
ClientSettings.Builder.getGdchApiAudience()
ClientSettings.Builder.getHeaderProvider()
ClientSettings.Builder.getInternalHeaderProvider()
ClientSettings.Builder.getQuotaProjectId()
ClientSettings.Builder.getStubSettings()
ClientSettings.Builder.getTransportChannelProvider()
ClientSettings.Builder.getWatchdogCheckInterval()
ClientSettings.Builder.getWatchdogCheckIntervalDuration()
ClientSettings.Builder.getWatchdogProvider()
ClientSettings.Builder.self()
ClientSettings.Builder.setApiKey(String)
ClientSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider)
ClientSettings.Builder.setClock(ApiClock)
ClientSettings.Builder.setCredentialsProvider(CredentialsProvider)
ClientSettings.Builder.setEndpoint(String)
ClientSettings.Builder.setExecutorProvider(ExecutorProvider)
ClientSettings.Builder.setGdchApiAudience(String)
ClientSettings.Builder.setHeaderProvider(HeaderProvider)
ClientSettings.Builder.setInternalHeaderProvider(HeaderProvider)
ClientSettings.Builder.setQuotaProjectId(String)
ClientSettings.Builder.setTransportChannelProvider(TransportChannelProvider)
ClientSettings.Builder.setUniverseDomain(String)
ClientSettings.Builder.setWatchdogCheckInterval(Duration)
ClientSettings.Builder.setWatchdogCheckIntervalDuration(Duration)
ClientSettings.Builder.setWatchdogProvider(WatchdogProvider)
ClientSettings.Builder.toString()
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Constructors
Builder()
protected Builder ()
Builder(ClientContext clientContext)
protected Builder ( ClientContext clientContext )
Parameter
Name
Description
clientContext
ClientContext
Builder(CloudBuildSettings settings)
protected Builder ( CloudBuildSettings settings )
Parameter
Name
Description
settings
CloudBuildSettings
Builder(CloudBuildStubSettings.Builder stubSettings)
protected Builder ( CloudBuildStubSettings . Builder stubSettings )
Parameter
Name
Description
stubSettings
CloudBuildStubSettings.Builder
Methods
applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater)
public CloudBuildSettings . Builder applyToAllUnaryMethods ( ApiFunction<UnaryCallSettings . Builder < ? , ? > , Void > settingsUpdater )
Applies the given settings updater function to all of the unary API methods in this service.
Note: This method does not support applying settings to streaming methods.
Parameter
Name
Description
settingsUpdater
ApiFunction < Builder < ? , ? >, java.lang.Void >
Returns
Type
Description
CloudBuildSettings.Builder
approveBuildOperationSettings()
public OperationCallSettings . Builder<ApproveBuildRequest , Build , BuildOperationMetadata > approveBuildOperationSettings ()
Returns the builder for the settings used for calls to approveBuild.
Returns
Type
Description
Builder < ApproveBuildRequest , Build , BuildOperationMetadata >
approveBuildSettings()
public UnaryCallSettings . Builder<ApproveBuildRequest , Operation > approveBuildSettings ()
Returns the builder for the settings used for calls to approveBuild.
Returns
Type
Description
Builder < ApproveBuildRequest , Operation >
build()
public CloudBuildSettings build ()
Returns
Type
Description
CloudBuildSettings
Overrides
ClientSettings.Builder<SettingsT,B>.build()
Exceptions
Type
Description
IOException
cancelBuildSettings()
public UnaryCallSettings . Builder<CancelBuildRequest , Build > cancelBuildSettings ()
Returns the builder for the settings used for calls to cancelBuild.
Returns
Type
Description
Builder < CancelBuildRequest , Build >
createBuildOperationSettings()
public OperationCallSettings . Builder<CreateBuildRequest , Build , BuildOperationMetadata > createBuildOperationSettings ()
Returns the builder for the settings used for calls to createBuild.
Returns
Type
Description
Builder < CreateBuildRequest , Build , BuildOperationMetadata >
createBuildSettings()
public UnaryCallSettings . Builder<CreateBuildRequest , Operation > createBuildSettings ()
Returns the builder for the settings used for calls to createBuild.
Returns
Type
Description
Builder < CreateBuildRequest , Operation >
createBuildTriggerSettings()
public UnaryCallSettings . Builder<CreateBuildTriggerRequest , BuildTrigger > createBuildTriggerSettings ()
Returns the builder for the settings used for calls to createBuildTrigger.
Returns
Type
Description
Builder < CreateBuildTriggerRequest , BuildTrigger >
createWorkerPoolOperationSettings()
public OperationCallSettings . Builder<CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata > createWorkerPoolOperationSettings ()
Returns the builder for the settings used for calls to createWorkerPool.
Returns
Type
Description
Builder < CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata >
createWorkerPoolSettings()
public UnaryCallSettings . Builder<CreateWorkerPoolRequest , Operation > createWorkerPoolSettings ()
Returns the builder for the settings used for calls to createWorkerPool.
Returns
Type
Description
Builder < CreateWorkerPoolRequest , Operation >
deleteBuildTriggerSettings()
public UnaryCallSettings . Builder<DeleteBuildTriggerRequest , Empty > deleteBuildTriggerSettings ()
Returns the builder for the settings used for calls to deleteBuildTrigger.
Returns
Type
Description
Builder < DeleteBuildTriggerRequest , Empty >
deleteWorkerPoolOperationSettings()
public OperationCallSettings . Builder<DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata > deleteWorkerPoolOperationSettings ()
Returns the builder for the settings used for calls to deleteWorkerPool.
Returns
Type
Description
Builder < DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata >
deleteWorkerPoolSettings()
public UnaryCallSettings . Builder<DeleteWorkerPoolRequest , Operation > deleteWorkerPoolSettings ()
Returns the builder for the settings used for calls to deleteWorkerPool.
Returns
Type
Description
Builder < DeleteWorkerPoolRequest , Operation >
getBuildSettings()
public UnaryCallSettings . Builder<GetBuildRequest , Build > getBuildSettings ()
Returns the builder for the settings used for calls to getBuild.
Returns
Type
Description
Builder < GetBuildRequest , Build >
getBuildTriggerSettings()
public UnaryCallSettings . Builder<GetBuildTriggerRequest , BuildTrigger > getBuildTriggerSettings ()
Returns the builder for the settings used for calls to getBuildTrigger.
Returns
Type
Description
Builder < GetBuildTriggerRequest , BuildTrigger >
getDefaultServiceAccountSettings()
public UnaryCallSettings . Builder<GetDefaultServiceAccountRequest , DefaultServiceAccount > getDefaultServiceAccountSettings ()
Returns the builder for the settings used for calls to getDefaultServiceAccount.
Returns
Type
Description
Builder < GetDefaultServiceAccountRequest , DefaultServiceAccount >
getStubSettingsBuilder()
public CloudBuildStubSettings . Builder getStubSettingsBuilder ()
Returns
Type
Description
CloudBuildStubSettings.Builder
getWorkerPoolSettings()
public UnaryCallSettings . Builder<GetWorkerPoolRequest , WorkerPool > getWorkerPoolSettings ()
Returns the builder for the settings used for calls to getWorkerPool.
Returns
Type
Description
Builder < GetWorkerPoolRequest , WorkerPool >
listBuildTriggersSettings()
public PagedCallSettings . Builder<ListBuildTriggersRequest , ListBuildTriggersResponse , CloudBuildClient . ListBuildTriggersPagedResponse > listBuildTriggersSettings ()
Returns the builder for the settings used for calls to listBuildTriggers.
Returns
Type
Description
Builder < ListBuildTriggersRequest , ListBuildTriggersResponse , ListBuildTriggersPagedResponse >
listBuildsSettings()
public PagedCallSettings . Builder<ListBuildsRequest , ListBuildsResponse , CloudBuildClient . ListBuildsPagedResponse > listBuildsSettings ()
Returns the builder for the settings used for calls to listBuilds.
Returns
Type
Description
Builder < ListBuildsRequest , ListBuildsResponse , ListBuildsPagedResponse >
listWorkerPoolsSettings()
public PagedCallSettings . Builder<ListWorkerPoolsRequest , ListWorkerPoolsResponse , CloudBuildClient . ListWorkerPoolsPagedResponse > listWorkerPoolsSettings ()
Returns the builder for the settings used for calls to listWorkerPools.
Returns
Type
Description
Builder < ListWorkerPoolsRequest , ListWorkerPoolsResponse , ListWorkerPoolsPagedResponse >
receiveTriggerWebhookSettings()
public UnaryCallSettings . Builder<ReceiveTriggerWebhookRequest , ReceiveTriggerWebhookResponse > receiveTriggerWebhookSettings ()
Returns the builder for the settings used for calls to receiveTriggerWebhook.
Returns
Type
Description
Builder < ReceiveTriggerWebhookRequest , ReceiveTriggerWebhookResponse >
retryBuildOperationSettings()
public OperationCallSettings . Builder<RetryBuildRequest , Build , BuildOperationMetadata > retryBuildOperationSettings ()
Returns the builder for the settings used for calls to retryBuild.
Returns
Type
Description
Builder < RetryBuildRequest , Build , BuildOperationMetadata >
retryBuildSettings()
public UnaryCallSettings . Builder<RetryBuildRequest , Operation > retryBuildSettings ()
Returns the builder for the settings used for calls to retryBuild.
Returns
Type
Description
Builder < RetryBuildRequest , Operation >
runBuildTriggerOperationSettings()
public OperationCallSettings . Builder<RunBuildTriggerRequest , Build , BuildOperationMetadata > runBuildTriggerOperationSettings ()
Returns the builder for the settings used for calls to runBuildTrigger.
Returns
Type
Description
Builder < RunBuildTriggerRequest , Build , BuildOperationMetadata >
runBuildTriggerSettings()
public UnaryCallSettings . Builder<RunBuildTriggerRequest , Operation > runBuildTriggerSettings ()
Returns the builder for the settings used for calls to runBuildTrigger.
Returns
Type
Description
Builder < RunBuildTriggerRequest , Operation >
updateBuildTriggerSettings()
public UnaryCallSettings . Builder<UpdateBuildTriggerRequest , BuildTrigger > updateBuildTriggerSettings ()
Returns the builder for the settings used for calls to updateBuildTrigger.
Returns
Type
Description
Builder < UpdateBuildTriggerRequest , BuildTrigger >
updateWorkerPoolOperationSettings()
public OperationCallSettings . Builder<UpdateWorkerPoolRequest , WorkerPool , UpdateWorkerPoolOperationMetadata > updateWorkerPoolOperationSettings ()
Returns the builder for the settings used for calls to updateWorkerPool.
Returns
Type
Description
Builder < UpdateWorkerPoolRequest , WorkerPool , UpdateWorkerPoolOperationMetadata >
updateWorkerPoolSettings()
public UnaryCallSettings . Builder<UpdateWorkerPoolRequest , Operation > updateWorkerPoolSettings ()
Returns the builder for the settings used for calls to updateWorkerPool.
Returns
Type
Description
Builder < UpdateWorkerPoolRequest , Operation >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
