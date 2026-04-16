---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.659Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Autoscaling"
feature_slug: "autoscaling"
latest_feature_date: "2019-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient"
keywords:
  - "autoscaling"
  - "automatically"
  - "resizes"
  - "dataproc"
  - "clusters"
  - "meet"
  - "workload"
  - "demands"
---

# Autoscaling

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Autoscaling automatically resizes Dataproc clusters to meet workload demands; Autoscaling automatically resizes Dataproc clusters to meet workload demands.

## Extended Definition

Autoscaling automatically resizes Dataproc clusters to meet workload demands; Autoscaling automatically resizes Dataproc clusters to meet workload demands.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient)

## Supporting Pages

### "Class AutoscalingPolicyServiceClient (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient)
- Source ID: `site-java-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings = AutoscalingPolicyServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings = AutoscalingPolicyServiceSettings . newBuilder (). setEndpoint ( myEndpoint ). build (); AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings ); To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AutoscalingPolicyServiceSettings autoscalingPolicyServiceSettings = AutoscalingPolicyServiceSettings . newHttpJsonBuilder (). build (); AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ( autoscalingPolicyServiceSettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { ListAutoscalingPoliciesRequest request = ListAutoscalingPoliciesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<AutoscalingPolicy> future = autoscalingPolicyServiceClient . listAutoscalingPoliciesPagedCallable (). futureCall ( request ); // Do something. for ( AutoscalingPolicy element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesPagedResponse > setIamPolicy(SetIamPolicyRequest request) public final Policy setIamPolicy ( SetIamPolicyRequest request ) Sets the access control policy on the specified resource.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { DeleteAutoscalingPolicyRequest request = DeleteAutoscalingPolicyRequest . newBuilder () . setName ( AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName ( "[PROJECT]" , "[LOCATION]" , "[AUTOSCALING POLICY]" ) . toString ()) . build (); ApiFuture<Empty> future = autoscalingPolicyServiceClient . deleteAutoscalingPolicyCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteAutoscalingPolicyRequest , Empty > getAutoscalingPolicy(AutoscalingPolicyName name) public final AutoscalingPolicy getAutoscalingPolicy ( AutoscalingPolicyName name ) Retrieves autoscaling policy.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { DeleteAutoscalingPolicyRequest request = DeleteAutoscalingPolicyRequest . newBuilder () . setName ( AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName ( "[PROJECT]" , "[LOCATION]" , "[AUTOSCALING POLICY]" ) . toString ()) . build (); autoscalingPolicyServiceClient . deleteAutoscalingPolicy ( request ); } Parameter Name Description request DeleteAutoscalingPolicyRequest The request object containing all of the parameters for the API call. deleteAutoscalingPolicy(String name) public final void deleteAutoscalingPolicy ( String name ) Deletes an autoscaling policy.

### "Class AutoscalingPolicyServiceAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample create autoscaling policy(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample delete autoscaling policy(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample list autoscaling policies(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample update autoscaling policy(): Create a client client = dataproc v1 .

### "Class AutoscalingPolicyServiceClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient)
- Source ID: `site-python-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.create , the resource name of the region has the following format: projects/{project id}/regions/{region} - For projects.locations.autoscalingPolicies.create , the resource name of the location has the following format: projects/{project id}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set. policy google.cloud.dataproc v1.types.AutoscalingPolicy Required.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample create autoscaling policy(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample delete autoscaling policy(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample list autoscaling policies(): Create a client client = dataproc v1 .

