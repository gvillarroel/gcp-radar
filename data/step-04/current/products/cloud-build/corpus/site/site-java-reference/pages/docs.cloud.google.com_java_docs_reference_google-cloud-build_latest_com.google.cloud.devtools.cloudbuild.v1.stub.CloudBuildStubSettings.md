---
title: "Class CloudBuildStubSettings (3.90.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings
  title: "Class CloudBuildStubSettings (3.90.0) \_|\_ Java client libraries \_|\_\
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
Class CloudBuildStubSettings (3.90.0)
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
public class CloudBuildStubSettings extends StubSettings<CloudBuildStubSettings>
Settings class to configure an instance of CloudBuildStub .
The default instance has everything set to sensible defaults:
The default service address (cloudbuild.googleapis.com) and default port (443) are used.
Credentials are acquired automatically through Application Default Credentials.
Retries are configured for idempotent methods but not for non-idempotent methods.
The builder of this class is recursive, so contained classes are themselves builders. When
build() is called, the tree of builders is called to create the complete settings object.
For example, to set the
RetrySettings
of getBuild:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
CloudBuildStubSettings . Builder cloudBuildSettingsBuilder = CloudBuildStubSettings . newBuilder ();
cloudBuildSettingsBuilder
. getBuildSettings ()
. setRetrySettings (
cloudBuildSettingsBuilder
. getBuildSettings ()
. getRetrySettings ()
. toBuilder ()
. setInitialRetryDelayDuration ( Duration . ofSeconds ( 1 ))
. setInitialRpcTimeoutDuration ( Duration . ofSeconds ( 5 ))
. setMaxAttempts ( 5 )
. setMaxRetryDelayDuration ( Duration . ofSeconds ( 30 ))
. setMaxRpcTimeoutDuration ( Duration . ofSeconds ( 60 ))
. setRetryDelayMultiplier ( 1.3 )
. setRpcTimeoutMultiplier ( 1.5 )
. setTotalTimeoutDuration ( Duration . ofSeconds ( 300 ))
. build ());
CloudBuildStubSettings cloudBuildSettings = cloudBuildSettingsBuilder . build ();
Please refer to the Client Side Retry
Guide for additional support in setting
retries.
To configure the RetrySettings of a Long Running Operation method, create an
OperationTimedPollAlgorithm object and update the RPC's polling algorithm. For example, to
configure the RetrySettings for createBuild:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
CloudBuildStubSettings . Builder cloudBuildSettingsBuilder = CloudBuildStubSettings . newBuilder ();
TimedRetryAlgorithm timedRetryAlgorithm =
OperationalTimedPollAlgorithm . create (
RetrySettings . newBuilder ()
. setInitialRetryDelayDuration ( Duration . ofMillis ( 500 ))
. setRetryDelayMultiplier ( 1.5 )
. setMaxRetryDelayDuration ( Duration . ofMillis ( 5000 ))
. setTotalTimeoutDuration ( Duration . ofHours ( 24 ))
. build ());
cloudBuildSettingsBuilder
. createClusterOperationSettings ()
. setPollingAlgorithm ( timedRetryAlgorithm )
. build ();
Inheritance
java.lang.Object >
StubSettings >
CloudBuildStubSettings
Inherited Members
StubSettings.getApiKey()
StubSettings.getBackgroundExecutorProvider()
StubSettings.getClock()
StubSettings.getCredentialsProvider()
StubSettings.getEndpoint()
StubSettings.getExecutorProvider()
StubSettings.getGdchApiAudience()
StubSettings.getHeaderProvider()
StubSettings.getInternalHeaderProvider()
StubSettings.getLibraryMetadata()
StubSettings.getMtlsEndpoint()
StubSettings.getQuotaProjectId()
StubSettings.getServiceName()
StubSettings.getStreamWatchdogCheckInterval()
StubSettings.getStreamWatchdogCheckIntervalDuration()
StubSettings.getStreamWatchdogProvider()
StubSettings.getTracerFactory()
StubSettings.getTransportChannelProvider()
StubSettings.getUniverseDomain()
StubSettings.toBuilder()
StubSettings.toString()
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
Static Methods
defaultApiClientHeaderProviderBuilder()
public static ApiClientHeaderProvider . Builder defaultApiClientHeaderProviderBuilder ()
Returns
Type
Description
Builder
defaultCredentialsProviderBuilder()
public static GoogleCredentialsProvider . Builder defaultCredentialsProviderBuilder ()
Returns a builder for the default credentials for this service.
Returns
Type
Description
Builder
defaultExecutorProviderBuilder()
public static InstantiatingExecutorProvider . Builder defaultExecutorProviderBuilder ()
Returns a builder for the default ExecutorProvider for this service.
Returns
Type
Description
Builder
defaultGrpcApiClientHeaderProviderBuilder()
public static ApiClientHeaderProvider . Builder defaultGrpcApiClientHeaderProviderBuilder ()
Returns
Type
Description
Builder
defaultGrpcTransportProviderBuilder()
public static InstantiatingGrpcChannelProvider . Builder defaultGrpcTransportProviderBuilder ()
Returns a builder for the default gRPC ChannelProvider for this service.
Returns
Type
Description
Builder
defaultHttpJsonApiClientHeaderProviderBuilder()
public static ApiClientHeaderProvider . Builder defaultHttpJsonApiClientHeaderProviderBuilder ()
Returns
Type
Description
Builder
defaultHttpJsonTransportProviderBuilder()
public static InstantiatingHttpJsonChannelProvider . Builder defaultHttpJsonTransportProviderBuilder ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Returns a builder for the default REST ChannelProvider for this service.
Returns
Type
Description
Builder
defaultTransportChannelProvider()
public static TransportChannelProvider defaultTransportChannelProvider ()
Returns
Type
Description
TransportChannelProvider
getDefaultEndpoint()
public static String getDefaultEndpoint ()
Obsolete
Use getEndpoint() instead
This feature is stable for usage in this major version, but may be deprecated in a future release.
Returns the default service endpoint.
Returns
Type
Description
String
getDefaultMtlsEndpoint()
public static String getDefaultMtlsEndpoint ()
Returns the default mTLS service endpoint.
Returns
Type
Description
String
getDefaultServiceScopes()
public static List<String> getDefaultServiceScopes ()
Returns the default service scopes.
Returns
Type
Description
List < String >
newBuilder()
public static CloudBuildStubSettings . Builder newBuilder ()
Returns a new gRPC builder for this class.
Returns
Type
Description
CloudBuildStubSettings.Builder
newBuilder(ClientContext clientContext)
public static CloudBuildStubSettings . Builder newBuilder ( ClientContext clientContext )
Returns a new builder for this class.
Parameter
Name
Description
clientContext
ClientContext
Returns
Type
Description
CloudBuildStubSettings.Builder
newHttpJsonBuilder()
public static CloudBuildStubSettings . Builder newHttpJsonBuilder ()
Returns a new REST builder for this class.
Returns
Type
Description
CloudBuildStubSettings.Builder
Constructors
CloudBuildStubSettings(CloudBuildStubSettings.Builder settingsBuilder)
protected CloudBuildStubSettings ( CloudBuildStubSettings . Builder settingsBuilder )
Parameter
Name
Description
settingsBuilder
CloudBuildStubSettings.Builder
Methods
approveBuildOperationSettings()
public OperationCallSettings<ApproveBuildRequest , Build , BuildOperationMetadata > approveBuildOperationSettings ()
Returns the object with the settings used for calls to approveBuild.
Returns
Type
Description
OperationCallSettings < ApproveBuildRequest , Build , BuildOperationMetadata >
approveBuildSettings()
public UnaryCallSettings<ApproveBuildRequest , Operation > approveBuildSettings ()
Returns the object with the settings used for calls to approveBuild.
Returns
Type
Description
UnaryCallSettings < ApproveBuildRequest , Operation >
cancelBuildSettings()
public UnaryCallSettings<CancelBuildRequest , Build > cancelBuildSettings ()
Returns the object with the settings used for calls to cancelBuild.
Returns
Type
Description
UnaryCallSettings < CancelBuildRequest , Build >
createBuildOperationSettings()
public OperationCallSettings<CreateBuildRequest , Build , BuildOperationMetadata > createBuildOperationSettings ()
Returns the object with the settings used for calls to createBuild.
Returns
Type
Description
OperationCallSettings < CreateBuildRequest , Build , BuildOperationMetadata >
createBuildSettings()
public UnaryCallSettings<CreateBuildRequest , Operation > createBuildSettings ()
Returns the object with the settings used for calls to createBuild.
Returns
Type
Description
UnaryCallSettings < CreateBuildRequest , Operation >
createBuildTriggerSettings()
public UnaryCallSettings<CreateBuildTriggerRequest , BuildTrigger > createBuildTriggerSettings ()
Returns the object with the settings used for calls to createBuildTrigger.
Returns
Type
Description
UnaryCallSettings < CreateBuildTriggerRequest , BuildTrigger >
createStub()
public CloudBuildStub createStub ()
Returns
Type
Description
CloudBuildStub
Exceptions
Type
Description
IOException
createWorkerPoolOperationSettings()
public OperationCallSettings<CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata > createWorkerPoolOperationSettings ()
Returns the object with the settings used for calls to createWorkerPool.
Returns
Type
Description
OperationCallSettings < CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata >
createWorkerPoolSettings()
public UnaryCallSettings<CreateWorkerPoolRequest , Operation > createWorkerPoolSettings ()
Returns the object with the settings used for calls to createWorkerPool.
Returns
Type
Description
UnaryCallSettings < CreateWorkerPoolRequest , Operation >
deleteBuildTriggerSettings()
public UnaryCallSettings<DeleteBuildTriggerRequest , Empty > deleteBuildTriggerSettings ()
Returns the object with the settings used for calls to deleteBuildTrigger.
Returns
Type
Description
UnaryCallSettings < DeleteBuildTriggerRequest , Empty >
deleteWorkerPoolOperationSettings()
public OperationCallSettings<DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata > deleteWorkerPoolOperationSettings ()
Returns the object with the settings used for calls to deleteWorkerPool.
Returns
Type
Description
OperationCallSettings < DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata >
deleteWorkerPoolSettings()
public UnaryCallSettings<DeleteWorkerPoolRequest , Operation > deleteWorkerPoolSettings ()
Returns the object with the settings used for calls to deleteWorkerPool.
Returns
Type
Description
UnaryCallSettings < DeleteWorkerPoolRequest , Operation >
getBuildSettings()
public UnaryCallSettings<GetBuildRequest , Build > getBuildSettings ()
Returns the object with the settings used for calls to getBuild.
Returns
Type
Description
UnaryCallSettings < GetBuildRequest , Build >
getBuildTriggerSettings()
public UnaryCallSettings<GetBuildTriggerRequest , BuildTrigger > getBuildTriggerSettings ()
Returns the object with the settings used for calls to getBuildTrigger.
Returns
Type
Description
UnaryCallSettings < GetBuildTriggerRequest , BuildTrigger >
getDefaultServiceAccountSettings()
public UnaryCallSettings<GetDefaultServiceAccountRequest , DefaultServiceAccount > getDefaultServiceAccountSettings ()
Returns the object with the settings used for calls to getDefaultServiceAccount.
Returns
Type
Description
UnaryCallSettings < GetDefaultServiceAccountRequest , DefaultServiceAccount >
getLibraryMetadata()
protected LibraryMetadata getLibraryMetadata ()
Returns
Type
Description
LibraryMetadata
Overrides
StubSettings<SettingsT>.getLibraryMetadata()
getServiceName()
public String getServiceName ()
Returns the default service name.
Returns
Type
Description
String
Overrides
StubSettings<SettingsT>.getServiceName()
getWorkerPoolSettings()
public UnaryCallSettings<GetWorkerPoolRequest , WorkerPool > getWorkerPoolSettings ()
Returns the object with the settings used for calls to getWorkerPool.
Returns
Type
Description
UnaryCallSettings < GetWorkerPoolRequest , WorkerPool >
listBuildTriggersSettings()
public PagedCallSettings<ListBuildTriggersRequest , ListBuildTriggersResponse , CloudBuildClient . ListBuildTriggersPagedResponse > listBuildTriggersSettings ()
Returns the object with the settings used for calls to listBuildTriggers.
Returns
Type
Description
PagedCallSettings < ListBuildTriggersRequest , ListBuildTriggersResponse , ListBuildTriggersPagedResponse >
listBuildsSettings()
public PagedCallSettings<ListBuildsRequest , ListBuildsResponse , CloudBuildClient . ListBuildsPagedResponse > listBuildsSettings ()
Returns the object with the settings used for calls to listBuilds.
Returns
Type
Description
PagedCallSettings < ListBuildsRequest , ListBuildsResponse , ListBuildsPagedResponse >
listWorkerPoolsSettings()
public PagedCallSettings<ListWorkerPoolsRequest , ListWorkerPoolsResponse , CloudBuildClient . ListWorkerPoolsPagedResponse > listWorkerPoolsSettings ()
Returns the object with the settings used for calls to listWorkerPools.
Returns
Type
Description
PagedCallSettings < ListWorkerPoolsRequest , ListWorkerPoolsResponse , ListWorkerPoolsPagedResponse >
receiveTriggerWebhookSettings()
public UnaryCallSettings<ReceiveTriggerWebhookRequest , ReceiveTriggerWebhookResponse > receiveTriggerWebhookSettings ()
Returns the object with the settings used for calls to receiveTriggerWebhook.
Returns
Type
Description
UnaryCallSettings < ReceiveTriggerWebhookRequest , ReceiveTriggerWebhookResponse >
retryBuildOperationSettings()
public OperationCallSettings<RetryBuildRequest , Build , BuildOperationMetadata > retryBuildOperationSettings ()
Returns the object with the settings used for calls to retryBuild.
Returns
Type
Description
OperationCallSettings < RetryBuildRequest , Build , BuildOperationMetadata >
retryBuildSettings()
public UnaryCallSettings<RetryBuildRequest , Operation > retryBuildSettings ()
Returns the object with the settings used for calls to retryBuild.
Returns
Type
Description
UnaryCallSettings < RetryBuildRequest , Operation >
runBuildTriggerOperationSettings()
public OperationCallSettings<RunBuildTriggerRequest , Build , BuildOperationMetadata > runBuildTriggerOperationSettings ()
Returns the object with the settings used for calls to runBuildTrigger.
Returns
Type
Description
OperationCallSettings < RunBuildTriggerRequest , Build , BuildOperationMetadata >
runBuildTriggerSettings()
public UnaryCallSettings<RunBuildTriggerRequest , Operation > runBuildTriggerSettings ()
Returns the object with the settings used for calls to runBuildTrigger.
Returns
Type
Description
UnaryCallSettings < RunBuildTriggerRequest , Operation >
toBuilder()
public CloudBuildStubSettings . Builder toBuilder ()
Returns a builder containing all the values of this settings class.
Returns
Type
Description
CloudBuildStubSettings.Builder
Overrides
StubSettings<SettingsT>.toBuilder()
updateBuildTriggerSettings()
public UnaryCallSettings<UpdateBuildTriggerRequest , BuildTrigger > updateBuildTriggerSettings ()
Returns the object with the settings used for calls to updateBuildTrigger.
Returns
Type
Description
UnaryCallSettings < UpdateBuildTriggerRequest , BuildTrigger >
updateWorkerPoolOperationSettings()
public OperationCallSettings<UpdateWorkerPoolRequest , WorkerPool , UpdateWorkerPoolOperationMetadata > updateWorkerPoolOperationSettings ()
Returns the object with the settings used for calls to updateWorkerPool.
Returns
Type
Description
OperationCallSettings < UpdateWorkerPoolRequest , WorkerPool , UpdateWorkerPoolOperationMetadata >
updateWorkerPoolSettings()
public UnaryCallSettings<UpdateWorkerPoolRequest , Operation > updateWorkerPoolSettings ()
Returns the object with the settings used for calls to updateWorkerPool.
Returns
Type
Description
UnaryCallSettings < UpdateWorkerPoolRequest , Operation >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
