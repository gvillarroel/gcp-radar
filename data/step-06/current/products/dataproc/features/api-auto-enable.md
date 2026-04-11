---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.131Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "API auto-enable"
feature_slug: "api-auto-enable"
latest_feature_date: "2016-02-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient"
keywords:
  - "api"
  - "auto"
  - "enable"
  - "automatically"
  - "enables"
  - "required"
  - "dependent"
  - "apis"
---

# API auto-enable

Product: Dataproc
Coverage: LOW

## Step 02 Summary

API auto-enable automatically enables required dependent APIs when the Cloud Dataproc API is enabled.

## Extended Definition

API auto-enable automatically enables required dependent APIs when the Cloud Dataproc API is enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- API auto-enable - Enabling the Cloud Dataproc API now automatically enables required dependent APIs, such as Cloud Storage and Google Compute Engine Fixed Resolved several issues that occasionally caused some clusters to hang being scaled down.
- Features and improvements: Regional and multi-zonal workloads are used by default to increase obtainability of compute resources Faster startup than previous runtimes Fast resource cleanup that allows faster release of VPC IPs after workload completion End-user credentials are used for all workloads by default New bigquery Spark catalog, pre-configured for out-of-the-box BigQuery native table interactions New Spark Serverless-specific IAM roles New dataproc-rm.googleapis.com API enablement is required November 22, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.154-debian10, 2.0.154-ubuntu18, 2.0.154-rocky8 2.1.103-debian11, 2.1.103-ubuntu20, 2.1.103-ubuntu20-arm, 2.1.103-rocky8 2.2.71-debian12, 2.2.71-ubuntu22, 2.2.71-ubuntu22-arm, 2.2.71-rocky9 2.3.18-debian12, 2.3.18-ubuntu22, 2.3.18-ubuntu22-arm, 2.3.18-ml-ubuntu22, 2.3.18-rocky9 Change Dataproc on Compute Engine : Updated Cloud Storage connector: Updated to 3.1.10 in image version 2.3.18 .
- February 04, 2026 Announcement Upcoming Spark data lineage changes See the upcoming May, 2026 Dataproc and Serverless for Apache Spark release notes for an announcement of a change that will automatically enable Dataproc Spark data lineage and Serverless for Apache Spark data lineage when you enable the Data Lineage API (see Control lineage ingestion for a service ) without requiring additional project, cluster, batch workload, or interactive session settings.
- Auto retries on 429 errors - HTTP 429 (rate limit) errors from Google APIs will now be automatically retried with a backoff.

### "Class AutoscalingPolicyServiceClient (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyServiceClient)
- Source ID: `site-java-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { ListAutoscalingPoliciesRequest request = ListAutoscalingPoliciesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<AutoscalingPolicy> future = autoscalingPolicyServiceClient . listAutoscalingPoliciesPagedCallable (). futureCall ( request ); // Do something. for ( AutoscalingPolicy element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListAutoscalingPoliciesRequest , ListAutoscalingPoliciesPagedResponse > setIamPolicy(SetIamPolicyRequest request) public final Policy setIamPolicy ( SetIamPolicyRequest request ) Sets the access control policy on the specified resource.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { DeleteAutoscalingPolicyRequest request = DeleteAutoscalingPolicyRequest . newBuilder () . setName ( AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName ( "[PROJECT]" , "[LOCATION]" , "[AUTOSCALING POLICY]" ) . toString ()) . build (); ApiFuture<Empty> future = autoscalingPolicyServiceClient . deleteAutoscalingPolicyCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteAutoscalingPolicyRequest , Empty > getAutoscalingPolicy(AutoscalingPolicyName name) public final AutoscalingPolicy getAutoscalingPolicy ( AutoscalingPolicyName name ) Retrieves autoscaling policy.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { DeleteAutoscalingPolicyRequest request = DeleteAutoscalingPolicyRequest . newBuilder () . setName ( AutoscalingPolicyName . ofProjectLocationAutoscalingPolicyName ( "[PROJECT]" , "[LOCATION]" , "[AUTOSCALING POLICY]" ) . toString ()) . build (); autoscalingPolicyServiceClient . deleteAutoscalingPolicy ( request ); } Parameter Name Description request DeleteAutoscalingPolicyRequest The request object containing all of the parameters for the API call. deleteAutoscalingPolicy(String name) public final void deleteAutoscalingPolicy ( String name ) Deletes an autoscaling policy.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AutoscalingPolicyServiceClient autoscalingPolicyServiceClient = AutoscalingPolicyServiceClient . create ()) { SetIamPolicyRequest request = SetIamPolicyRequest . newBuilder () . setResource ( AutoscalingPolicyName . ofProjectRegionAutoscalingPolicyName ( "[PROJECT]" , "[REGION]" , "[AUTOSCALING POLICY]" ) . toString ()) . setPolicy ( Policy . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . build (); Policy response = autoscalingPolicyServiceClient . setIamPolicy ( request ); } Parameter Name Description request com.google.iam.v1.SetIamPolicyRequest The request object containing all of the parameters for the API call.

### "Class AutoscalingPolicyServiceAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.create , the resource name of the region has the following format: projects/{project id}/regions/{region} - For projects.locations.autoscalingPolicies.create , the resource name of the location has the following format: projects/{project id}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set. policy AutoscalingPolicy Required.
- The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} - For projects.locations.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} - For projects.locations.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.list , the resource name of the region has the following format: projects/{project id}/regions/{region} - For projects.locations.autoscalingPolicies.list , the resource name of the location has the following format: projects/{project id}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

