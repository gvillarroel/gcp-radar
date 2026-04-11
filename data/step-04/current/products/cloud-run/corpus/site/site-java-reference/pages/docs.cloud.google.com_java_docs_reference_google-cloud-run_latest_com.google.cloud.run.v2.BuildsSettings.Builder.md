---
title: "Class BuildsSettings.Builder (0.88.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsSettings.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsSettings.Builder
  title: "Class BuildsSettings.Builder (0.88.0) \_|\_ Java client libraries \_|\_\
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
Class BuildsSettings.Builder (0.88.0)
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
public static class BuildsSettings . Builder extends ClientSettings . Builder<BuildsSettings , BuildsSettings . Builder >
Builder for BuildsSettings.
Inheritance
java.lang.Object >
ClientSettings.Builder >
BuildsSettings.Builder
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
Builder(BuildsSettings settings)
protected Builder ( BuildsSettings settings )
Parameter
Name
Description
settings
BuildsSettings
Builder(BuildsStubSettings.Builder stubSettings)
protected Builder ( BuildsStubSettings . Builder stubSettings )
Parameter
Name
Description
stubSettings
BuildsStubSettings.Builder
Methods
applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater)
public BuildsSettings . Builder applyToAllUnaryMethods ( ApiFunction<UnaryCallSettings . Builder < ? , ? > , Void > settingsUpdater )
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
BuildsSettings.Builder
build()
public BuildsSettings build ()
Returns
Type
Description
BuildsSettings
Overrides
ClientSettings.Builder<SettingsT,B>.build()
Exceptions
Type
Description
IOException
getStubSettingsBuilder()
public BuildsStubSettings . Builder getStubSettingsBuilder ()
Returns
Type
Description
BuildsStubSettings.Builder
submitBuildSettings()
public UnaryCallSettings . Builder<SubmitBuildRequest , SubmitBuildResponse > submitBuildSettings ()
Returns the builder for the settings used for calls to submitBuild.
Returns
Type
Description
Builder < SubmitBuildRequest , SubmitBuildResponse >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
