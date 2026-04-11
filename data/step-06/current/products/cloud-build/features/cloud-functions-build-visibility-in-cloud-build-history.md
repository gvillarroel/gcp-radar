---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.757Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Functions build visibility in Cloud Build History"
feature_slug: "cloud-functions-build-visibility-in-cloud-build-history"
latest_feature_date: "2021-01-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings"
keywords:
  - "functions"
  - "build"
  - "visibility"
  - "in"
  - "history"
  - "regionalized"
  - "builds"
  - "are"
---

# Cloud Functions build visibility in Cloud Build History

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Regionalized Cloud Functions builds are now visible in the Cloud Build History UI.

## Extended Definition

Regionalized Cloud Functions builds are now visible in the Cloud Build History UI.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings)

## Supporting Pages

### "Class CloudBuildSettings.Builder (3.90.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inheritance java.lang.Object > ClientSettings.Builder > CloudBuildSettings.Builder Inherited Members ClientSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) ClientSettings.Builder.build() ClientSettings.Builder.getApiKey() ClientSettings.Builder.getBackgroundExecutorProvider() ClientSettings.Builder.getClock() ClientSettings.Builder.getCredentialsProvider() ClientSettings.Builder.getEndpoint() ClientSettings.Builder.getExecutorProvider() ClientSettings.Builder.getGdchApiAudience() ClientSettings.Builder.getHeaderProvider() ClientSettings.Builder.getInternalHeaderProvider() ClientSettings.Builder.getQuotaProjectId() ClientSettings.Builder.getStubSettings() ClientSettings.Builder.getTransportChannelProvider() ClientSettings.Builder.getWatchdogCheckInterval() ClientSettings.Builder.getWatchdogCheckIntervalDuration() ClientSettings.Builder.getWatchdogProvider() ClientSettings.Builder.self() ClientSettings.Builder.setApiKey(String) ClientSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) ClientSettings.Builder.setClock(ApiClock) ClientSettings.Builder.setCredentialsProvider(CredentialsProvider) ClientSettings.Builder.setEndpoint(String) ClientSettings.Builder.setExecutorProvider(ExecutorProvider) ClientSettings.Builder.setGdchApiAudience(String) ClientSettings.Builder.setHeaderProvider(HeaderProvider) ClientSettings.Builder.setInternalHeaderProvider(HeaderProvider) ClientSettings.Builder.setQuotaProjectId(String) ClientSettings.Builder.setTransportChannelProvider(TransportChannelProvider) ClientSettings.Builder.setUniverseDomain(String) ClientSettings.Builder.setWatchdogCheckInterval(Duration) ClientSettings.Builder.setWatchdogCheckIntervalDuration(Duration) ClientSettings.Builder.setWatchdogProvider(WatchdogProvider) ClientSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(CloudBuildSettings settings) protected Builder ( CloudBuildSettings settings ) Parameter Name Description settings CloudBuildSettings Builder(CloudBuildStubSettings.Builder stubSettings) protected Builder ( CloudBuildStubSettings .
- 3.90.0 (latest) 3.89.0 3.87.0 3.85.0 3.84.0 3.83.0 3.82.0 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.74.0 3.72.0 3.70.0 3.69.0 3.66.0 3.65.0 3.64.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.6 3.4.1 3.3.12 public static class CloudBuildSettings .
- Returns Type Description Builder < ApproveBuildRequest , Operation > build() public CloudBuildSettings build () Returns Type Description CloudBuildSettings Overrides ClientSettings.Builder<SettingsT,B>.build() Exceptions Type Description IOException cancelBuildSettings() public UnaryCallSettings .
- Builder stubSettings ) Parameter Name Description stubSettings CloudBuildStubSettings.Builder Methods applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater) public CloudBuildSettings .

### "Class CloudBuildStubSettings.Builder (3.90.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inheritance java.lang.Object > StubSettings.Builder > CloudBuildStubSettings.Builder Inherited Members StubSettings.Builder.<B>build() StubSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) StubSettings.Builder.getApiKey() StubSettings.Builder.getBackgroundExecutorProvider() StubSettings.Builder.getClock() StubSettings.Builder.getCredentialsProvider() StubSettings.Builder.getEndpoint() StubSettings.Builder.getExecutorProvider() StubSettings.Builder.getGdchApiAudience() StubSettings.Builder.getHeaderProvider() StubSettings.Builder.getInternalHeaderProvider() StubSettings.Builder.getMtlsEndpoint() StubSettings.Builder.getQuotaProjectId() StubSettings.Builder.getStreamWatchdogCheckInterval() StubSettings.Builder.getStreamWatchdogCheckIntervalDuration() StubSettings.Builder.getStreamWatchdogProvider() StubSettings.Builder.getTracerFactory() StubSettings.Builder.getTransportChannelProvider() StubSettings.Builder.self() StubSettings.Builder.setApiKey(String) StubSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) StubSettings.Builder.setClock(ApiClock) StubSettings.Builder.setCredentialsProvider(CredentialsProvider) StubSettings.Builder.setEndpoint(String) StubSettings.Builder.setExecutorProvider(ExecutorProvider) StubSettings.Builder.setGdchApiAudience(String) StubSettings.Builder.setHeaderProvider(HeaderProvider) StubSettings.Builder.setInternalHeaderProvider(HeaderProvider) StubSettings.Builder.setMtlsEndpoint(String) StubSettings.Builder.setQuotaProjectId(String) StubSettings.Builder.setStreamWatchdogCheckInterval(Duration) StubSettings.Builder.setStreamWatchdogCheckIntervalDuration(Duration) StubSettings.Builder.setStreamWatchdogProvider(WatchdogProvider) StubSettings.Builder.setSwitchToMtlsEndpointAllowed(boolean) StubSettings.Builder.setTracerFactory(ApiTracerFactory) StubSettings.Builder.setTransportChannelProvider(TransportChannelProvider) StubSettings.Builder.setUniverseDomain(String) StubSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(CloudBuildStubSettings settings) protected Builder ( CloudBuildStubSettings settings ) Parameter Name Description settings CloudBuildStubSettings Methods applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater) public CloudBuildStubSettings .
- 3.90.0 (latest) 3.89.0 3.87.0 3.85.0 3.84.0 3.83.0 3.82.0 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.74.0 3.72.0 3.70.0 3.69.0 3.66.0 3.65.0 3.64.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.6 3.4.1 3.3.12 public static class CloudBuildStubSettings .
- Returns Type Description Builder < ApproveBuildRequest , Operation > build() public CloudBuildStubSettings build () Returns Type Description CloudBuildStubSettings Overrides StubSettings.Builder<SettingsT,B>.<B>build() Exceptions Type Description IOException cancelBuildSettings() public UnaryCallSettings .
- Parameter Name Description settingsUpdater ApiFunction < Builder < ? , ? >, java.lang.Void > Returns Type Description CloudBuildStubSettings.Builder approveBuildOperationSettings() public OperationCallSettings .

### "Class CloudBuildSettings (3.90.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings)
- Source ID: `site-java-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder cloudBuildSettingsBuilder = CloudBuildSettings . newBuilder (); TimedRetryAlgorithm timedRetryAlgorithm = OperationalTimedPollAlgorithm . create ( RetrySettings . newBuilder () . setInitialRetryDelayDuration ( Duration . ofMillis ( 500 )) . setRetryDelayMultiplier ( 1.5 ) . setMaxRetryDelayDuration ( Duration . ofMillis ( 5000 )) . setTotalTimeoutDuration ( Duration . ofHours ( 24 )) . build ()); cloudBuildSettingsBuilder . createClusterOperationSettings () . setPollingAlgorithm ( timedRetryAlgorithm ) . build (); Inheritance java.lang.Object > ClientSettings > CloudBuildSettings Inherited Members ClientSettings.<B>toBuilder() ClientSettings.getApiKey() ClientSettings.getBackgroundExecutorProvider() ClientSettings.getClock() ClientSettings.getCredentialsProvider() ClientSettings.getEndpoint() ClientSettings.getExecutorProvider() ClientSettings.getGdchApiAudience() ClientSettings.getHeaderProvider() ClientSettings.getInternalHeaderProvider() ClientSettings.getQuotaProjectId() ClientSettings.getStubSettings() ClientSettings.getTransportChannelProvider() ClientSettings.getUniverseDomain() ClientSettings.getWatchdogCheckInterval() ClientSettings.getWatchdogCheckIntervalDuration() ClientSettings.getWatchdogProvider() ClientSettings.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods create(CloudBuildStubSettings stub) public static final CloudBuildSettings create ( CloudBuildStubSettings stub ) Parameter Name Description stub CloudBuildStubSettings Returns Type Description CloudBuildSettings Exceptions Type Description IOException defaultApiClientHeaderProviderBuilder() public static ApiClientHeaderProvider .
- Builder cloudBuildSettingsBuilder = CloudBuildSettings . newBuilder (); cloudBuildSettingsBuilder . getBuildSettings () . setRetrySettings ( cloudBuildSettingsBuilder . getBuildSettings () . getRetrySettings () . toBuilder () . setInitialRetryDelayDuration ( Duration . ofSeconds ( 1 )) . setInitialRpcTimeoutDuration ( Duration . ofSeconds ( 5 )) . setMaxAttempts ( 5 ) . setMaxRetryDelayDuration ( Duration . ofSeconds ( 30 )) . setMaxRpcTimeoutDuration ( Duration . ofSeconds ( 60 )) . setRetryDelayMultiplier ( 1.3 ) . setRpcTimeoutMultiplier ( 1.5 ) . setTotalTimeoutDuration ( Duration . ofSeconds ( 300 )) . build ()); CloudBuildSettings cloudBuildSettings = cloudBuildSettingsBuilder . build (); Please refer to the Client Side Retry Guide for additional support in setting retries.
- 3.90.0 (latest) 3.89.0 3.87.0 3.85.0 3.84.0 3.83.0 3.82.0 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.74.0 3.72.0 3.70.0 3.69.0 3.66.0 3.65.0 3.64.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.6 3.4.1 3.3.12 public class CloudBuildSettings extends ClientSettings<CloudBuildSettings> Settings class to configure an instance of CloudBuildClient .
- For example, to configure the RetrySettings for createBuild: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library CloudBuildSettings .

