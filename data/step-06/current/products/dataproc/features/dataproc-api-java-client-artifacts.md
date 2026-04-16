---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.709Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc API Java client artifacts"
feature_slug: "dataproc-api-java-client-artifacts"
latest_feature_date: "2015-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder"
keywords:
  - "dataproc"
  - "java"
  - "client"
  - "artifacts"
  - "published"
  - "official"
  - "maven"
  - "javadocs"
---

# Dataproc API Java client artifacts

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc API is published with official Maven artifacts, Javadocs, and downloadable client files for Java users.

## Extended Definition

The Dataproc API is published with official Maven artifacts, Javadocs, and downloadable client files for Java users.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder)

## Supporting Pages

### "google-cloud-dataproc overview (4.85.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview)
- Source ID: `site-java-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Dataproc Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Dataproc for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- Home Documentation Developer tools Java Client libraries Send feedback google-cloud-dataproc overview (4.85.0) Stay organized with collections Save and categorize content based on your preferences.
- Managing Library Versions We recommend using the com.google.cloud:libraries-bom installation method detailed above to streamline dependency management across multiple Cloud Java client libraries.
- Choosing the Right Version ID Each Cloud Java client library may contain packages tied to specific Version IDs (e.g., v1 , v2alpha ).

### "Class AutoscalingPolicyServiceClient (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient)
- Source ID: `site-java-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings = AutoscalingPolicyServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings = AutoscalingPolicyServiceSettings . newBuilder (). setEndpoint ( myEndpoint ). build (); AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings ); To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings = AutoscalingPolicyServiceSettings . newHttpJsonBuilder (). build (); AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { ListAutoscalingPoliciesRequest request = ListAutoscalingPoliciesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<AutoscalingPolicy> future = autoscalingPolicyServiceClient . listAutoscalingPoliciesPagedCallable (). futureCall ( request ); // Do something. for ( AutoscalingPolicy element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesPagedResponse > setIamPolicy(SetIamPolicyRequest request) public final Policy setIamPolicy ( SetIamPolicyRequest request ) Sets the access control policy on the specified resource.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { DeleteAutoscalingPolicyRequest request = DeleteAutoscalingPolicyRequest . newBuilder () . setName ( AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName ( "[PROJECT]" , "[LOCATION]" , "[AUTOSCALING POLICY]" ) . toString ()) . build (); ApiFuture<Empty> future = autoscalingPolicyServiceClient . deleteAutoscalingPolicyCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteAutoscalingPolicyRequest , Empty > getAutoscalingPolicy(AutoscalingPolicyName name) public final AutoscalingPolicy getAutoscalingPolicy ( AutoscalingPolicyName name ) Retrieves autoscaling policy.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { DeleteAutoscalingPolicyRequest request = DeleteAutoscalingPolicyRequest . newBuilder () . setName ( AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName ( "[PROJECT]" , "[LOCATION]" , "[AUTOSCALING POLICY]" ) . toString ()) . build (); autoscalingPolicyServiceClient . deleteAutoscalingPolicy ( request ); } Parameter Name Description request DeleteAutoscalingPolicyRequest The request object containing all of the parameters for the API call. deleteAutoscalingPolicy(String name) public final void deleteAutoscalingPolicy ( String name ) Deletes an autoscaling policy.

### "Class AutoscalingPolicyServiceSettings.Builder (4.85.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inheritance java.lang.Object > ClientSettings.Builder > AutoscalingPolicyServiceSettings.Builder Inherited Members ClientSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) ClientSettings.Builder.build() ClientSettings.Builder.getApiKey() ClientSettings.Builder.getBackgroundExecutorProvider() ClientSettings.Builder.getClock() ClientSettings.Builder.getCredentialsProvider() ClientSettings.Builder.getEndpoint() ClientSettings.Builder.getExecutorProvider() ClientSettings.Builder.getGdchApiAudience() ClientSettings.Builder.getHeaderProvider() ClientSettings.Builder.getInternalHeaderProvider() ClientSettings.Builder.getQuotaProjectId() ClientSettings.Builder.getStubSettings() ClientSettings.Builder.getTransportChannelProvider() ClientSettings.Builder.getWatchdogCheckInterval() ClientSettings.Builder.getWatchdogCheckIntervalDuration() ClientSettings.Builder.getWatchdogProvider() ClientSettings.Builder.self() ClientSettings.Builder.setApiKey(String) ClientSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) ClientSettings.Builder.setClock(ApiClock) ClientSettings.Builder.setCredentialsProvider(CredentialsProvider) ClientSettings.Builder.setEndpoint(String) ClientSettings.Builder.setExecutorProvider(ExecutorProvider) ClientSettings.Builder.setGdchApiAudience(String) ClientSettings.Builder.setHeaderProvider(HeaderProvider) ClientSettings.Builder.setInternalHeaderProvider(HeaderProvider) ClientSettings.Builder.setQuotaProjectId(String) ClientSettings.Builder.setTransportChannelProvider(TransportChannelProvider) ClientSettings.Builder.setUniverseDomain(String) ClientSettings.Builder.setWatchdogCheckInterval(Duration) ClientSettings.Builder.setWatchdogCheckIntervalDuration(Duration) ClientSettings.Builder.setWatchdogProvider(WatchdogProvider) ClientSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(AutoscalingPolicyServiceSettings settings) protected Builder ( AutoscalingPolicyServiceSettings settings ) Parameter Name Description settings AutoscalingPolicyServiceSettings Builder(AutoscalingPolicyServiceStubSettings.Builder stubSettings) protected Builder ( AutoscalingPolicyServiceStubSettings .
- Parameter Name Description settingsUpdater ApiFunction < Builder < ? , ? >, java.lang.Void > Returns Type Description AutoscalingPolicyServiceSettings.Builder build() public AutoscalingPolicyServiceSettings build () Returns Type Description AutoscalingPolicyServiceSettings Overrides ClientSettings.Builder<SettingsT,B>.build() Exceptions Type Description IOException createAutoscalingPolicySettings() public UnaryCallSettings .
- Home Documentation Developer tools Java Client libraries Send feedback Class AutoscalingPolicyServiceSettings.Builder (4.85.0) Stay organized with collections Save and categorize content based on your preferences.
- Builder<ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesResponse , AutoscalingPolicyServiceClient .

