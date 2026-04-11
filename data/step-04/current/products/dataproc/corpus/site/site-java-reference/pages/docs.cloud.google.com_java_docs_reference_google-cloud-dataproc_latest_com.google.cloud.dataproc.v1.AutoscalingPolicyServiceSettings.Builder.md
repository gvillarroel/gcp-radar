---
title: "Class AutoscalingPolicyServiceSettings.Builder (4.85.0) \_|\_ Java client\
  \ libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder
  title: "Class AutoscalingPolicyServiceSettings.Builder (4.85.0) \_|\_ Java client\
    \ libraries \_|\_ Google Cloud Documentation"
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
Class AutoscalingPolicyServiceSettings.Builder (4.85.0)
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
public static class AutoscalingPolicyServiceSettings . Builder extends ClientSettings . Builder<AutoscalingPolicyServiceSettings , AutoscalingPolicyServiceSettings . Builder >
Builder for AutoscalingPolicyServiceSettings.
Inheritance
java.lang.Object >
ClientSettings.Builder >
AutoscalingPolicyServiceSettings.Builder
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
Builder(AutoscalingPolicyServiceSettings settings)
protected Builder ( AutoscalingPolicyServiceSettings settings )
Parameter
Name
Description
settings
AutoscalingPolicyServiceSettings
Builder(AutoscalingPolicyServiceStubSettings.Builder stubSettings)
protected Builder ( AutoscalingPolicyServiceStubSettings . Builder stubSettings )
Parameter
Name
Description
stubSettings
AutoscalingPolicyServiceStubSettings.Builder
Methods
applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater)
public AutoscalingPolicyServiceSettings . Builder applyToAllUnaryMethods ( ApiFunction<UnaryCallSettings . Builder < ? , ? > , Void > settingsUpdater )
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
AutoscalingPolicyServiceSettings.Builder
build()
public AutoscalingPolicyServiceSettings build ()
Returns
Type
Description
AutoscalingPolicyServiceSettings
Overrides
ClientSettings.Builder<SettingsT,B>.build()
Exceptions
Type
Description
IOException
createAutoscalingPolicySettings()
public UnaryCallSettings . Builder<CreateAutoscalingPolicyRequest , AutoscalingPolicy > createAutoscalingPolicySettings ()
Returns the builder for the settings used for calls to createAutoscalingPolicy.
Returns
Type
Description
Builder < CreateAutoscalingPolicyRequest , AutoscalingPolicy >
deleteAutoscalingPolicySettings()
public UnaryCallSettings . Builder<DeleteAutoscalingPolicyRequest , Empty > deleteAutoscalingPolicySettings ()
Returns the builder for the settings used for calls to deleteAutoscalingPolicy.
Returns
Type
Description
Builder < DeleteAutoscalingPolicyRequest , Empty >
getAutoscalingPolicySettings()
public UnaryCallSettings . Builder<GetAutoscalingPolicyRequest , AutoscalingPolicy > getAutoscalingPolicySettings ()
Returns the builder for the settings used for calls to getAutoscalingPolicy.
Returns
Type
Description
Builder < GetAutoscalingPolicyRequest , AutoscalingPolicy >
getIamPolicySettings()
public UnaryCallSettings . Builder<GetIamPolicyRequest , Policy > getIamPolicySettings ()
Returns the builder for the settings used for calls to getIamPolicy.
Returns
Type
Description
Builder < com.google.iam.v1.GetIamPolicyRequest , com.google.iam.v1.Policy >
getStubSettingsBuilder()
public AutoscalingPolicyServiceStubSettings . Builder getStubSettingsBuilder ()
Returns
Type
Description
AutoscalingPolicyServiceStubSettings.Builder
listAutoscalingPoliciesSettings()
public PagedCallSettings . Builder<ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesResponse , AutoscalingPolicyServiceClient . ListAutoscalingPoliciesPagedResponse > listAutoscalingPoliciesSettings ()
Returns the builder for the settings used for calls to listAutoscalingPolicies.
Returns
Type
Description
Builder < ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesResponse , ListAutoscalingPoliciesPagedResponse >
setIamPolicySettings()
public UnaryCallSettings . Builder<SetIamPolicyRequest , Policy > setIamPolicySettings ()
Returns the builder for the settings used for calls to setIamPolicy.
Returns
Type
Description
Builder < com.google.iam.v1.SetIamPolicyRequest , com.google.iam.v1.Policy >
testIamPermissionsSettings()
public UnaryCallSettings . Builder<TestIamPermissionsRequest , TestIamPermissionsResponse > testIamPermissionsSettings ()
Returns the builder for the settings used for calls to testIamPermissions.
Returns
Type
Description
Builder < com.google.iam.v1.TestIamPermissionsRequest , com.google.iam.v1.TestIamPermissionsResponse >
updateAutoscalingPolicySettings()
public UnaryCallSettings . Builder<UpdateAutoscalingPolicyRequest , AutoscalingPolicy > updateAutoscalingPolicySettings ()
Returns the builder for the settings used for calls to updateAutoscalingPolicy.
Returns
Type
Description
Builder < UpdateAutoscalingPolicyRequest , AutoscalingPolicy >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
