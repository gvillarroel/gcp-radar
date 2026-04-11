---
title: "Class AutoscalingPolicyServiceSettings (4.85.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings
  title: "Class AutoscalingPolicyServiceSettings (4.85.0) \_|\_ Java client libraries\
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
Class AutoscalingPolicyServiceSettings (4.85.0)
Stay organized with collections
Save and categorize content based on your preferences.
4.85.0 (latest)
4.84.0
4.82.0
4.80.0
4.79.0
4.78.0
4.77.0
4.75.0
4.73.0
4.72.0
4.71.0
4.70.0
4.69.0
4.67.0
4.65.0
4.64.0
4.61.0
4.60.0
4.59.0
4.57.0
4.56.0
4.55.0
4.54.0
4.53.0
4.52.0
4.51.0
4.50.0
4.49.0
4.48.0
4.46.0
4.45.0
4.44.0
4.43.0
4.42.0
4.41.0
4.40.0
4.39.0
4.38.0
4.37.0
4.36.0
4.34.0
4.33.0
4.32.0
4.31.0
4.30.0
4.29.0
4.28.0
4.27.0
4.26.0
4.25.0
4.24.0
4.21.0
4.20.0
4.19.0
4.18.0
4.17.0
4.16.0
4.15.0
4.14.0
4.13.0
4.12.0
4.11.0
4.10.0
4.9.0
4.8.0
4.6.0
4.5.0
4.4.0
4.3.0
4.2.0
4.1.0
4.0.8
3.1.2
3.0.3
2.3.1
public class AutoscalingPolicyServiceSettings extends ClientSettings<AutoscalingPolicyServiceSettings>
Settings class to configure an instance of AutoscalingPolicyServiceClient .
The default instance has everything set to sensible defaults:
The default service address (dataproc.googleapis.com) and default port (443) are used.
Credentials are acquired automatically through Application Default Credentials.
Retries are configured for idempotent methods but not for non-idempotent methods.
The builder of this class is recursive, so contained classes are themselves builders. When
build() is called, the tree of builders is called to create the complete settings object.
For example, to set the
RetrySettings
of createAutoscalingPolicy:
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
AutoscalingPolicyServiceSettings . Builder autoscalingPolicyServiceSettingsBuilder =
AutoscalingPolicyServiceSettings . newBuilder ();
autoscalingPolicyServiceSettingsBuilder
. createAutoscalingPolicySettings ()
. setRetrySettings (
autoscalingPolicyServiceSettingsBuilder
. createAutoscalingPolicySettings ()
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
AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings =
autoscalingPolicyServiceSettingsBuilder . build ();
Please refer to the Client Side Retry
Guide for additional support in setting
retries.
Inheritance
java.lang.Object >
ClientSettings >
AutoscalingPolicyServiceSettings
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
create(AutoscalingPolicyServiceStubSettings stub)
public static final AutoscalingPolicyServiceSettings create ( AutoscalingPolicyServiceStubSettings stub )
Parameter
Name
Description
stub
AutoscalingPolicyServiceStubSettings
Returns
Type
Description
AutoscalingPolicyServiceSettings
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
public static AutoscalingPolicyServiceSettings . Builder newBuilder ()
Returns a new gRPC builder for this class.
Returns
Type
Description
AutoscalingPolicyServiceSettings.Builder
newBuilder(ClientContext clientContext)
public static AutoscalingPolicyServiceSettings . Builder newBuilder ( ClientContext clientContext )
Returns a new builder for this class.
Parameter
Name
Description
clientContext
ClientContext
Returns
Type
Description
AutoscalingPolicyServiceSettings.Builder
newHttpJsonBuilder()
public static AutoscalingPolicyServiceSettings . Builder newHttpJsonBuilder ()
Returns a new REST builder for this class.
Returns
Type
Description
AutoscalingPolicyServiceSettings.Builder
Constructors
AutoscalingPolicyServiceSettings(AutoscalingPolicyServiceSettings.Builder settingsBuilder)
protected AutoscalingPolicyServiceSettings ( AutoscalingPolicyServiceSettings . Builder settingsBuilder )
Parameter
Name
Description
settingsBuilder
AutoscalingPolicyServiceSettings.Builder
Methods
createAutoscalingPolicySettings()
public UnaryCallSettings<CreateAutoscalingPolicyRequest , AutoscalingPolicy > createAutoscalingPolicySettings ()
Returns the object with the settings used for calls to createAutoscalingPolicy.
Returns
Type
Description
UnaryCallSettings < CreateAutoscalingPolicyRequest , AutoscalingPolicy >
deleteAutoscalingPolicySettings()
public UnaryCallSettings<DeleteAutoscalingPolicyRequest , Empty > deleteAutoscalingPolicySettings ()
Returns the object with the settings used for calls to deleteAutoscalingPolicy.
Returns
Type
Description
UnaryCallSettings < DeleteAutoscalingPolicyRequest , Empty >
getAutoscalingPolicySettings()
public UnaryCallSettings<GetAutoscalingPolicyRequest , AutoscalingPolicy > getAutoscalingPolicySettings ()
Returns the object with the settings used for calls to getAutoscalingPolicy.
Returns
Type
Description
UnaryCallSettings < GetAutoscalingPolicyRequest , AutoscalingPolicy >
getIamPolicySettings()
public UnaryCallSettings<GetIamPolicyRequest , Policy > getIamPolicySettings ()
Returns the object with the settings used for calls to getIamPolicy.
Returns
Type
Description
UnaryCallSettings < com.google.iam.v1.GetIamPolicyRequest , com.google.iam.v1.Policy >
listAutoscalingPoliciesSettings()
public PagedCallSettings<ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesResponse , AutoscalingPolicyServiceClient . ListAutoscalingPoliciesPagedResponse > listAutoscalingPoliciesSettings ()
Returns the object with the settings used for calls to listAutoscalingPolicies.
Returns
Type
Description
PagedCallSettings < ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesResponse , ListAutoscalingPoliciesPagedResponse >
setIamPolicySettings()
public UnaryCallSettings<SetIamPolicyRequest , Policy > setIamPolicySettings ()
Returns the object with the settings used for calls to setIamPolicy.
Returns
Type
Description
UnaryCallSettings < com.google.iam.v1.SetIamPolicyRequest , com.google.iam.v1.Policy >
testIamPermissionsSettings()
public UnaryCallSettings<TestIamPermissionsRequest , TestIamPermissionsResponse > testIamPermissionsSettings ()
Returns the object with the settings used for calls to testIamPermissions.
Returns
Type
Description
UnaryCallSettings < com.google.iam.v1.TestIamPermissionsRequest , com.google.iam.v1.TestIamPermissionsResponse >
toBuilder()
public AutoscalingPolicyServiceSettings . Builder toBuilder ()
Returns a builder containing all the values of this settings class.
Returns
Type
Description
AutoscalingPolicyServiceSettings.Builder
Overrides
ClientSettings<SettingsT>.<B>toBuilder()
updateAutoscalingPolicySettings()
public UnaryCallSettings<UpdateAutoscalingPolicyRequest , AutoscalingPolicy > updateAutoscalingPolicySettings ()
Returns the object with the settings used for calls to updateAutoscalingPolicy.
Returns
Type
Description
UnaryCallSettings < UpdateAutoscalingPolicyRequest , AutoscalingPolicy >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
