---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.217Z"
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
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings"
keywords:
  - "artifacts"
  - "published"
  - "official"
  - "javadocs"
  - "maven"
  - "java"
  - "client"
---

# Dataproc API Java client artifacts

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc API is published with official Maven artifacts, Javadocs, and downloadable client files for Java users.

## Extended Definition

The Dataproc API is published with official Maven artifacts, Javadocs, and downloadable client files for Java users.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings)

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
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings = AutoscalingPolicyServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings = AutoscalingPolicyServiceSettings . newBuilder (). setEndpoint ( myEndpoint ). build (); AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings ); To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings = AutoscalingPolicyServiceSettings . newHttpJsonBuilder (). build (); AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { ListAutoscalingPoliciesRequest request = ListAutoscalingPoliciesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<AutoscalingPolicy> future = autoscalingPolicyServiceClient . listAutoscalingPoliciesPagedCallable (). futureCall ( request ); // Do something. for ( AutoscalingPolicy element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesPagedResponse > setIamPolicy(SetIamPolicyRequest request) public final Policy setIamPolicy ( SetIamPolicyRequest request ) Sets the access control policy on the specified resource.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { DeleteAutoscalingPolicyRequest request = DeleteAutoscalingPolicyRequest . newBuilder () . setName ( AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName ( "[PROJECT]" , "[LOCATION]" , "[AUTOSCALING POLICY]" ) . toString ()) . build (); ApiFuture<Empty> future = autoscalingPolicyServiceClient . deleteAutoscalingPolicyCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteAutoscalingPolicyRequest , Empty > getAutoscalingPolicy(AutoscalingPolicyName name) public final AutoscalingPolicy getAutoscalingPolicy ( AutoscalingPolicyName name ) Retrieves autoscaling policy.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { DeleteAutoscalingPolicyRequest request = DeleteAutoscalingPolicyRequest . newBuilder () . setName ( AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName ( "[PROJECT]" , "[LOCATION]" , "[AUTOSCALING POLICY]" ) . toString ()) . build (); autoscalingPolicyServiceClient . deleteAutoscalingPolicy ( request ); } Parameter Name Description request DeleteAutoscalingPolicyRequest The request object containing all of the parameters for the API call. deleteAutoscalingPolicy(String name) public final void deleteAutoscalingPolicy ( String name ) Deletes an autoscaling policy.

### "Class AutoscalingPolicyServiceSettings (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceSettings)
- Source ID: `site-java-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Inheritance java.lang.Object > ClientSettings > AutoscalingPolicyServiceSettings Inherited Members ClientSettings.<B>toBuilder() ClientSettings.getApiKey() ClientSettings.getBackgroundExecutorProvider() ClientSettings.getClock() ClientSettings.getCredentialsProvider() ClientSettings.getEndpoint() ClientSettings.getExecutorProvider() ClientSettings.getGdchApiAudience() ClientSettings.getHeaderProvider() ClientSettings.getInternalHeaderProvider() ClientSettings.getQuotaProjectId() ClientSettings.getStubSettings() ClientSettings.getTransportChannelProvider() ClientSettings.getUniverseDomain() ClientSettings.getWatchdogCheckInterval() ClientSettings.getWatchdogCheckIntervalDuration() ClientSettings.getWatchdogProvider() ClientSettings.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods create(AutoscalingPolicyServiceStubSettings stub) public static final AutoscalingPolicyServiceSettings create ( AutoscalingPolicyServiceStubSettings stub ) Parameter Name Description stub AutoscalingPolicyServiceStubSettings Returns Type Description AutoscalingPolicyServiceSettings Exceptions Type Description IOException defaultApiClientHeaderProviderBuilder() public static ApiClientHeaderProvider .
- For example, to set the RetrySettings of createAutoscalingPolicy: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AutoscalingPolicyServiceSettings .
- Home Documentation Developer tools Java Client libraries Send feedback Class AutoscalingPolicyServiceSettings (4.85.0) Stay organized with collections Save and categorize content based on your preferences.
- Builder autoscalingPolicyServiceSettingsBuilder = AutoscalingPolicyServiceSettings . newBuilder (); autoscalingPolicyServiceSettingsBuilder . createAutoscalingPolicySettings () . setRetrySettings ( autoscalingPolicyServiceSettingsBuilder . createAutoscalingPolicySettings () . getRetrySettings () . toBuilder () . setInitialRetryDelayDuration ( Duration . ofSeconds ( 1 )) . setInitialRpcTimeoutDuration ( Duration . ofSeconds ( 5 )) . setMaxAttempts ( 5 ) . setMaxRetryDelayDuration ( Duration . ofSeconds ( 30 )) . setMaxRpcTimeoutDuration ( Duration . ofSeconds ( 60 )) . setRetryDelayMultiplier ( 1.3 ) . setRpcTimeoutMultiplier ( 1.5 ) . setTotalTimeoutDuration ( Duration . ofSeconds ( 300 )) . build ()); AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings = autoscalingPolicyServiceSettingsBuilder . build (); Please refer to the Client Side Retry Guide for additional support in setting retries.

