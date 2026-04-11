---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.755Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Pub/Sub triggers"
feature_slug: "cloud-build-pub-sub-triggers"
latest_feature_date: "2021-03-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder"
keywords:
  - "build"
  - "pub"
  - "sub"
  - "triggers"
  - "can"
  - "execute"
  - "builds"
  - "in"
---

# Cloud Build Pub/Sub triggers

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build can execute builds in response to events published to a Pub/Sub topic.

## Extended Definition

Cloud Build can execute builds in response to events published to a Pub/Sub topic.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 312
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 1st gen 2nd gen Cloud Build Pub/Sub triggers enable you to execute builds in response to Google Cloud events published over Pub/Sub.
- Filters can be used to precisely control builds that are executed in response to incoming Pub/Sub messages.
- Filters can be used to precisely control builds that are executed in response to incoming Pub/Sub messages.
- In the example below, the trigger is configured to respond to builds with a Cloud Storage event associated with a new binary pushed to an existing storage bucket: gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' EVENT TYPE = "$(body.message.attributes.eventType)" , ' \ ' BUCKET ID = "$(body.message.attributes.bucketId)" , ' \ ' OBJECT ID = "$(body.message.attributes.objectId)" ' \ -- subscription - filter = ' EVENT TYPE == "OBJECT FINALIZE" && OBJECT ID . matches ( "<object-id>" ) && BUCKET ID . matches ( "<bucket-id>" ) ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.

### "Class CloudBuildSettings.Builder (3.90.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description Builder < ApproveBuildRequest , Operation > build() public CloudBuildSettings build () Returns Type Description CloudBuildSettings Overrides ClientSettings.Builder<SettingsT,B>.build() Exceptions Type Description IOException cancelBuildSettings() public UnaryCallSettings .
- Returns Type Description Builder < ListBuildTriggersRequest , ListBuildTriggersResponse , ListBuildTriggersPagedResponse > listBuildsSettings() public PagedCallSettings .
- 3.90.0 (latest) 3.89.0 3.87.0 3.85.0 3.84.0 3.83.0 3.82.0 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.74.0 3.72.0 3.70.0 3.69.0 3.66.0 3.65.0 3.64.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.6 3.4.1 3.3.12 public static class CloudBuildSettings .
- Builder stubSettings ) Parameter Name Description stubSettings CloudBuildStubSettings.Builder Methods applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater) public CloudBuildSettings .

### "Class CloudBuildStubSettings.Builder (3.90.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description Builder < ApproveBuildRequest , Operation > build() public CloudBuildStubSettings build () Returns Type Description CloudBuildStubSettings Overrides StubSettings.Builder<SettingsT,B>.<B>build() Exceptions Type Description IOException cancelBuildSettings() public UnaryCallSettings .
- Returns Type Description Builder < ListBuildTriggersRequest , ListBuildTriggersResponse , ListBuildTriggersPagedResponse > listBuildsSettings() public PagedCallSettings .
- Inheritance java.lang.Object > StubSettings.Builder > CloudBuildStubSettings.Builder Inherited Members StubSettings.Builder.<B>build() StubSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) StubSettings.Builder.getApiKey() StubSettings.Builder.getBackgroundExecutorProvider() StubSettings.Builder.getClock() StubSettings.Builder.getCredentialsProvider() StubSettings.Builder.getEndpoint() StubSettings.Builder.getExecutorProvider() StubSettings.Builder.getGdchApiAudience() StubSettings.Builder.getHeaderProvider() StubSettings.Builder.getInternalHeaderProvider() StubSettings.Builder.getMtlsEndpoint() StubSettings.Builder.getQuotaProjectId() StubSettings.Builder.getStreamWatchdogCheckInterval() StubSettings.Builder.getStreamWatchdogCheckIntervalDuration() StubSettings.Builder.getStreamWatchdogProvider() StubSettings.Builder.getTracerFactory() StubSettings.Builder.getTransportChannelProvider() StubSettings.Builder.self() StubSettings.Builder.setApiKey(String) StubSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) StubSettings.Builder.setClock(ApiClock) StubSettings.Builder.setCredentialsProvider(CredentialsProvider) StubSettings.Builder.setEndpoint(String) StubSettings.Builder.setExecutorProvider(ExecutorProvider) StubSettings.Builder.setGdchApiAudience(String) StubSettings.Builder.setHeaderProvider(HeaderProvider) StubSettings.Builder.setInternalHeaderProvider(HeaderProvider) StubSettings.Builder.setMtlsEndpoint(String) StubSettings.Builder.setQuotaProjectId(String) StubSettings.Builder.setStreamWatchdogCheckInterval(Duration) StubSettings.Builder.setStreamWatchdogCheckIntervalDuration(Duration) StubSettings.Builder.setStreamWatchdogProvider(WatchdogProvider) StubSettings.Builder.setSwitchToMtlsEndpointAllowed(boolean) StubSettings.Builder.setTracerFactory(ApiTracerFactory) StubSettings.Builder.setTransportChannelProvider(TransportChannelProvider) StubSettings.Builder.setUniverseDomain(String) StubSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(CloudBuildStubSettings settings) protected Builder ( CloudBuildStubSettings settings ) Parameter Name Description settings CloudBuildStubSettings Methods applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater) public CloudBuildStubSettings .
- 3.90.0 (latest) 3.89.0 3.87.0 3.85.0 3.84.0 3.83.0 3.82.0 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.74.0 3.72.0 3.70.0 3.69.0 3.66.0 3.65.0 3.64.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.6 3.4.1 3.3.12 public static class CloudBuildStubSettings .

