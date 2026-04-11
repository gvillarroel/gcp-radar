---
title: "Class BudgetServiceSettings.Builder (2.88.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceSettings.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceSettings.Builder
  title: "Class BudgetServiceSettings.Builder (2.88.0) \_|\_ Java client libraries\
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
Class BudgetServiceSettings.Builder (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.81.0
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
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.6
2.2.0
2.1.7
public static class BudgetServiceSettings . Builder extends ClientSettings . Builder<BudgetServiceSettings , BudgetServiceSettings . Builder >
Builder for BudgetServiceSettings.
Inheritance
java.lang.Object >
ClientSettings.Builder >
BudgetServiceSettings.Builder
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
Builder(BudgetServiceSettings settings)
protected Builder ( BudgetServiceSettings settings )
Parameter
Name
Description
settings
BudgetServiceSettings
Builder(BudgetServiceStubSettings.Builder stubSettings)
protected Builder ( BudgetServiceStubSettings . Builder stubSettings )
Parameter
Name
Description
stubSettings
BudgetServiceStubSettings.Builder
Methods
applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater)
public BudgetServiceSettings . Builder applyToAllUnaryMethods ( ApiFunction<UnaryCallSettings . Builder < ? , ? > , Void > settingsUpdater )
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
BudgetServiceSettings.Builder
build()
public BudgetServiceSettings build ()
Returns
Type
Description
BudgetServiceSettings
Overrides
ClientSettings.Builder<SettingsT,B>.build()
Exceptions
Type
Description
IOException
createBudgetSettings()
public UnaryCallSettings . Builder<CreateBudgetRequest , Budget > createBudgetSettings ()
Returns the builder for the settings used for calls to createBudget.
Returns
Type
Description
Builder < CreateBudgetRequest , Budget >
deleteBudgetSettings()
public UnaryCallSettings . Builder<DeleteBudgetRequest , Empty > deleteBudgetSettings ()
Returns the builder for the settings used for calls to deleteBudget.
Returns
Type
Description
Builder < DeleteBudgetRequest , Empty >
getBudgetSettings()
public UnaryCallSettings . Builder<GetBudgetRequest , Budget > getBudgetSettings ()
Returns the builder for the settings used for calls to getBudget.
Returns
Type
Description
Builder < GetBudgetRequest , Budget >
getStubSettingsBuilder()
public BudgetServiceStubSettings . Builder getStubSettingsBuilder ()
Returns
Type
Description
BudgetServiceStubSettings.Builder
listBudgetsSettings()
public PagedCallSettings . Builder<ListBudgetsRequest , ListBudgetsResponse , BudgetServiceClient . ListBudgetsPagedResponse > listBudgetsSettings ()
Returns the builder for the settings used for calls to listBudgets.
Returns
Type
Description
Builder < ListBudgetsRequest , ListBudgetsResponse , ListBudgetsPagedResponse >
updateBudgetSettings()
public UnaryCallSettings . Builder<UpdateBudgetRequest , Budget > updateBudgetSettings ()
Returns the builder for the settings used for calls to updateBudget.
Returns
Type
Description
Builder < UpdateBudgetRequest , Budget >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
