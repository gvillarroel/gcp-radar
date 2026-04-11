---
title: "Class BuildsSettings (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsSettings
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsSettings
  title: "Class BuildsSettings (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class BuildsSettings (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
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
0.14.0
0.13.0
0.12.0
0.11.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.5
0.2.1
0.1.2
public class BuildsSettings extends ClientSettings<BuildsSettings>
Settings class to configure an instance of BuildsClient .
The default instance has everything set to sensible defaults:
The default service address (run.googleapis.com) and default port (443) are used.
Credentials are acquired automatically through Application Default Credentials.
Retries are configured for idempotent methods but not for non-idempotent methods.
The builder of this class is recursive, so contained classes are themselves builders. When
build() is called, the tree of builders is called to create the complete settings object.
For example, to set the
RetrySettings
of submitBuild:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
BuildsSettings . Builder buildsSettingsBuilder = BuildsSettings . newBuilder ();
buildsSettingsBuilder
. submitBuildSettings ()
. setRetrySettings (
buildsSettingsBuilder
. submitBuildSettings ()
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
BuildsSettings buildsSettings = buildsSettingsBuilder . build ();
Please refer to the Client Side Retry
Guide for additional support in setting
retries.
Inheritance
java.lang.Object >
ClientSettings >
BuildsSettings
Inherited Members
ClientSettings.<B>toBuilder()
ClientSettings.getApiKey()
ClientSettings.getBackgroundExecutorProvider()
ClientSettings.getClock()
ClientSettings.getCredentialsProvider()
ClientSettings.getEndpoint()
ClientSettings.getExecutorProvider()
ClientSettings.getGdchApiAudience()
ClientSettings.getHeaderProvider()
ClientSettings.getInternalHeaderProvider()
ClientSettings.getQuotaProjectId()
ClientSettings.getStubSettings()
ClientSettings.getTransportChannelProvider()
ClientSettings.getUniverseDomain()
ClientSettings.getWatchdogCheckInterval()
ClientSettings.getWatchdogCheckIntervalDuration()
ClientSettings.getWatchdogProvider()
ClientSettings.toString()
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
create(BuildsStubSettings stub)
public static final BuildsSettings create ( BuildsStubSettings stub )
Parameter
Name
Description
stub
BuildsStubSettings
Returns
Type
Description
BuildsSettings
Exceptions
Type
Description
IOException
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
defaultGrpcTransportProviderBuilder()
public static InstantiatingGrpcChannelProvider . Builder defaultGrpcTransportProviderBuilder ()
Returns a builder for the default gRPC ChannelProvider for this service.
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
Returns the default service endpoint.
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
public static BuildsSettings . Builder newBuilder ()
Returns a new gRPC builder for this class.
Returns
Type
Description
BuildsSettings.Builder
newBuilder(ClientContext clientContext)
public static BuildsSettings . Builder newBuilder ( ClientContext clientContext )
Returns a new builder for this class.
Parameter
Name
Description
clientContext
ClientContext
Returns
Type
Description
BuildsSettings.Builder
newHttpJsonBuilder()
public static BuildsSettings . Builder newHttpJsonBuilder ()
Returns a new REST builder for this class.
Returns
Type
Description
BuildsSettings.Builder
Constructors
BuildsSettings(BuildsSettings.Builder settingsBuilder)
protected BuildsSettings ( BuildsSettings . Builder settingsBuilder )
Parameter
Name
Description
settingsBuilder
BuildsSettings.Builder
Methods
submitBuildSettings()
public UnaryCallSettings<SubmitBuildRequest , SubmitBuildResponse > submitBuildSettings ()
Returns the object with the settings used for calls to submitBuild.
Returns
Type
Description
UnaryCallSettings < SubmitBuildRequest , SubmitBuildResponse >
toBuilder()
public BuildsSettings . Builder toBuilder ()
Returns a builder containing all the values of this settings class.
Returns
Type
Description
BuildsSettings.Builder
Overrides
ClientSettings<SettingsT>.<B>toBuilder()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
