---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.841Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace UI scatter plots"
feature_slug: "trace-ui-scatter-plots"
latest_feature_date: "2017-02-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.stub.TraceServiceStubSettings.Builder"
keywords:
  - "trace"
  - "ui"
  - "scatter"
  - "plots"
  - "the"
  - "stackdriver"
  - "includes"
  - "plot"
---

# Trace UI scatter plots

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

The Stackdriver Trace UI includes a scatter-plot selection tool for identifying, viewing, and comparing traces.

## Extended Definition

The Stackdriver Trace UI includes a scatter-plot selection tool for identifying, viewing, and comparing traces.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.stub.TraceServiceStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.stub.TraceServiceStubSettings.Builder)

## Supporting Pages

### "Class TraceServiceSettings.Builder (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Inheritance java.lang.Object > ClientSettings.Builder > TraceServiceSettings.Builder Inherited Members ClientSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) ClientSettings.Builder.build() ClientSettings.Builder.getApiKey() ClientSettings.Builder.getBackgroundExecutorProvider() ClientSettings.Builder.getClock() ClientSettings.Builder.getCredentialsProvider() ClientSettings.Builder.getEndpoint() ClientSettings.Builder.getExecutorProvider() ClientSettings.Builder.getGdchApiAudience() ClientSettings.Builder.getHeaderProvider() ClientSettings.Builder.getInternalHeaderProvider() ClientSettings.Builder.getQuotaProjectId() ClientSettings.Builder.getStubSettings() ClientSettings.Builder.getTransportChannelProvider() ClientSettings.Builder.getWatchdogCheckInterval() ClientSettings.Builder.getWatchdogCheckIntervalDuration() ClientSettings.Builder.getWatchdogProvider() ClientSettings.Builder.self() ClientSettings.Builder.setApiKey(String) ClientSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) ClientSettings.Builder.setClock(ApiClock) ClientSettings.Builder.setCredentialsProvider(CredentialsProvider) ClientSettings.Builder.setEndpoint(String) ClientSettings.Builder.setExecutorProvider(ExecutorProvider) ClientSettings.Builder.setGdchApiAudience(String) ClientSettings.Builder.setHeaderProvider(HeaderProvider) ClientSettings.Builder.setInternalHeaderProvider(HeaderProvider) ClientSettings.Builder.setQuotaProjectId(String) ClientSettings.Builder.setTransportChannelProvider(TransportChannelProvider) ClientSettings.Builder.setUniverseDomain(String) ClientSettings.Builder.setWatchdogCheckInterval(Duration) ClientSettings.Builder.setWatchdogCheckIntervalDuration(Duration) ClientSettings.Builder.setWatchdogProvider(WatchdogProvider) ClientSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(TraceServiceSettings settings) protected Builder ( TraceServiceSettings settings ) Parameter Name Description settings TraceServiceSettings Builder(TraceServiceStubSettings.Builder stubSettings) protected Builder ( TraceServiceStubSettings .
- Returns Type Description Builder < PatchTracesRequest , Empty > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Builder<PatchTracesRequest , Empty > patchTracesSettings () Returns the builder for the settings used for calls to patchTraces.
- Builder<GetTraceRequest , Trace > getTraceSettings () Returns the builder for the settings used for calls to getTrace.

### "Class TraceServiceSettings.Builder (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v2.TraceServiceSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Inheritance java.lang.Object > ClientSettings.Builder > TraceServiceSettings.Builder Inherited Members ClientSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) ClientSettings.Builder.build() ClientSettings.Builder.getApiKey() ClientSettings.Builder.getBackgroundExecutorProvider() ClientSettings.Builder.getClock() ClientSettings.Builder.getCredentialsProvider() ClientSettings.Builder.getEndpoint() ClientSettings.Builder.getExecutorProvider() ClientSettings.Builder.getGdchApiAudience() ClientSettings.Builder.getHeaderProvider() ClientSettings.Builder.getInternalHeaderProvider() ClientSettings.Builder.getQuotaProjectId() ClientSettings.Builder.getStubSettings() ClientSettings.Builder.getTransportChannelProvider() ClientSettings.Builder.getWatchdogCheckInterval() ClientSettings.Builder.getWatchdogCheckIntervalDuration() ClientSettings.Builder.getWatchdogProvider() ClientSettings.Builder.self() ClientSettings.Builder.setApiKey(String) ClientSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) ClientSettings.Builder.setClock(ApiClock) ClientSettings.Builder.setCredentialsProvider(CredentialsProvider) ClientSettings.Builder.setEndpoint(String) ClientSettings.Builder.setExecutorProvider(ExecutorProvider) ClientSettings.Builder.setGdchApiAudience(String) ClientSettings.Builder.setHeaderProvider(HeaderProvider) ClientSettings.Builder.setInternalHeaderProvider(HeaderProvider) ClientSettings.Builder.setQuotaProjectId(String) ClientSettings.Builder.setTransportChannelProvider(TransportChannelProvider) ClientSettings.Builder.setUniverseDomain(String) ClientSettings.Builder.setWatchdogCheckInterval(Duration) ClientSettings.Builder.setWatchdogCheckIntervalDuration(Duration) ClientSettings.Builder.setWatchdogProvider(WatchdogProvider) ClientSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(TraceServiceSettings settings) protected Builder ( TraceServiceSettings settings ) Parameter Name Description settings TraceServiceSettings Builder(TraceServiceStubSettings.Builder stubSettings) protected Builder ( TraceServiceStubSettings .
- Builder getStubSettingsBuilder () Returns Type Description TraceServiceStubSettings.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Returns Type Description Builder < BatchWriteSpansRequest , Empty > build() public TraceServiceSettings build () Returns Type Description TraceServiceSettings Overrides ClientSettings.Builder<SettingsT,B>.build() Exceptions Type Description IOException createSpanSettings() public UnaryCallSettings .
- Builder stubSettings ) Parameter Name Description stubSettings TraceServiceStubSettings.Builder Methods applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater) public TraceServiceSettings .

### "Class TraceServiceStubSettings.Builder (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.stub.TraceServiceStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.stub.TraceServiceStubSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Inheritance java.lang.Object > StubSettings.Builder > TraceServiceStubSettings.Builder Inherited Members StubSettings.Builder.<B>build() StubSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) StubSettings.Builder.getApiKey() StubSettings.Builder.getBackgroundExecutorProvider() StubSettings.Builder.getClock() StubSettings.Builder.getCredentialsProvider() StubSettings.Builder.getEndpoint() StubSettings.Builder.getExecutorProvider() StubSettings.Builder.getGdchApiAudience() StubSettings.Builder.getHeaderProvider() StubSettings.Builder.getInternalHeaderProvider() StubSettings.Builder.getMtlsEndpoint() StubSettings.Builder.getQuotaProjectId() StubSettings.Builder.getStreamWatchdogCheckInterval() StubSettings.Builder.getStreamWatchdogCheckIntervalDuration() StubSettings.Builder.getStreamWatchdogProvider() StubSettings.Builder.getTracerFactory() StubSettings.Builder.getTransportChannelProvider() StubSettings.Builder.self() StubSettings.Builder.setApiKey(String) StubSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) StubSettings.Builder.setClock(ApiClock) StubSettings.Builder.setCredentialsProvider(CredentialsProvider) StubSettings.Builder.setEndpoint(String) StubSettings.Builder.setExecutorProvider(ExecutorProvider) StubSettings.Builder.setGdchApiAudience(String) StubSettings.Builder.setHeaderProvider(HeaderProvider) StubSettings.Builder.setInternalHeaderProvider(HeaderProvider) StubSettings.Builder.setMtlsEndpoint(String) StubSettings.Builder.setQuotaProjectId(String) StubSettings.Builder.setStreamWatchdogCheckInterval(Duration) StubSettings.Builder.setStreamWatchdogCheckIntervalDuration(Duration) StubSettings.Builder.setStreamWatchdogProvider(WatchdogProvider) StubSettings.Builder.setSwitchToMtlsEndpointAllowed(boolean) StubSettings.Builder.setTracerFactory(ApiTracerFactory) StubSettings.Builder.setTransportChannelProvider(TransportChannelProvider) StubSettings.Builder.setUniverseDomain(String) StubSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(TraceServiceStubSettings settings) protected Builder ( TraceServiceStubSettings settings ) Parameter Name Description settings TraceServiceStubSettings Methods applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater) public TraceServiceStubSettings .
- Builder<PatchTracesRequest , Empty > patchTracesSettings () Returns the builder for the settings used for calls to patchTraces.
- Builder<GetTraceRequest , Trace > getTraceSettings () Returns the builder for the settings used for calls to getTrace.
- ListTracesPagedResponse > listTracesSettings () Returns the builder for the settings used for calls to listTraces.

