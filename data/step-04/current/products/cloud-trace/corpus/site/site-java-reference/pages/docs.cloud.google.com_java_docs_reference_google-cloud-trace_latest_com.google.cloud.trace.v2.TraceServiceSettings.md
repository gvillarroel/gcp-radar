---
title: "Class TraceServiceSettings (2.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceSettings
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceSettings
  title: "Class TraceServiceSettings (2.88.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class TraceServiceSettings (2.88.0)
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
public class TraceServiceSettings extends ClientSettings<TraceServiceSettings>
Settings class to configure an instance of TraceServiceClient .
The default instance has everything set to sensible defaults:
The default service address (cloudtrace.googleapis.com) and default port (443) are used.
Credentials are acquired automatically through Application Default Credentials.
Retries are configured for idempotent methods but not for non-idempotent methods.
The builder of this class is recursive, so contained classes are themselves builders. When
build() is called, the tree of builders is called to create the complete settings object.
For example, to set the
RetrySettings
of batchWriteSpans:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
TraceServiceSettings . Builder traceServiceSettingsBuilder = TraceServiceSettings . newBuilder ();
traceServiceSettingsBuilder
. batchWriteSpansSettings ()
. setRetrySettings (
traceServiceSettingsBuilder
. batchWriteSpansSettings ()
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
TraceServiceSettings traceServiceSettings = traceServiceSettingsBuilder . build ();
Please refer to the Client Side Retry
Guide for additional support in setting
retries.
Inheritance
java.lang.Object >
ClientSettings >
TraceServiceSettings
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
create(TraceServiceStubSettings stub)
public static final TraceServiceSettings create ( TraceServiceStubSettings stub )
Parameter
Name
Description
stub
TraceServiceStubSettings
Returns
Type
Description
TraceServiceSettings
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
public static TraceServiceSettings . Builder newBuilder ()
Returns a new gRPC builder for this class.
Returns
Type
Description
TraceServiceSettings.Builder
newBuilder(ClientContext clientContext)
public static TraceServiceSettings . Builder newBuilder ( ClientContext clientContext )
Returns a new builder for this class.
Parameter
Name
Description
clientContext
ClientContext
Returns
Type
Description
TraceServiceSettings.Builder
newHttpJsonBuilder()
public static TraceServiceSettings . Builder newHttpJsonBuilder ()
Returns a new REST builder for this class.
Returns
Type
Description
TraceServiceSettings.Builder
Constructors
TraceServiceSettings(TraceServiceSettings.Builder settingsBuilder)
protected TraceServiceSettings ( TraceServiceSettings . Builder settingsBuilder )
Parameter
Name
Description
settingsBuilder
TraceServiceSettings.Builder
Methods
batchWriteSpansSettings()
public UnaryCallSettings<BatchWriteSpansRequest , Empty > batchWriteSpansSettings ()
Returns the object with the settings used for calls to batchWriteSpans.
Returns
Type
Description
UnaryCallSettings < BatchWriteSpansRequest , Empty >
createSpanSettings()
public UnaryCallSettings<Span , Span > createSpanSettings ()
Returns the object with the settings used for calls to createSpan.
Returns
Type
Description
UnaryCallSettings < Span , Span >
toBuilder()
public TraceServiceSettings . Builder toBuilder ()
Returns a builder containing all the values of this settings class.
Returns
Type
Description
TraceServiceSettings.Builder
Overrides
ClientSettings<SettingsT>.<B>toBuilder()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
