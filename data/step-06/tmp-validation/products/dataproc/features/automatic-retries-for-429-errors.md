---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.210Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Automatic retries for 429 errors"
feature_slug: "automatic-retries-for-429-errors"
latest_feature_date: "2016-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient"
keywords:
  - "retries"
  - "errors"
  - "cause"
  - "rate"
  - "retry"
  - "automatic"
---

# Automatic retries for 429 errors

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Automatic retries for 429 errors cause Dataproc to retry rate-limit errors from Google APIs with backoff.

## Extended Definition

Automatic retries for 429 errors cause Dataproc to retry rate-limit errors from Google APIs with backoff.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)

## Supporting Pages

### "Class AutoscalingPolicyServiceClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient)
- Source ID: `site-python-reference`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} - For projects.locations.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} - For projects.locations.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.list , the resource name of the region has the following format: projects/{project id}/regions/{region} - For projects.locations.autoscalingPolicies.list , the resource name of the location has the following format: projects/{project id}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the policy field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class ClusterControllerClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)
- Source ID: `site-python-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- For example, to change the number of workers in a cluster to 5, the update mask parameter would be specified as config.worker config.num instances , and the PATCH request body would specify the new value, as follows: :: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update mask parameter would be config.secondary worker config.num instances , and the PATCH request body would be set as follows: :: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } Note: Currently, only the following fields can be updated: .. raw:: html Mask Purpose labels Update labels config.worker config.num instances Resize primary worker group config.secondary worker config.num instances Resize secondary worker group config.autoscaling config.policy uri Use, stop using, or change autoscaling policies This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Example filter: status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = This corresponds to the filter field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the cluster name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the cluster name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class AutoscalingPolicyServiceAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} - For projects.locations.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} - For projects.locations.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.list , the resource name of the region has the following format: projects/{project id}/regions/{region} - For projects.locations.autoscalingPolicies.list , the resource name of the location has the following format: projects/{project id}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the policy field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

