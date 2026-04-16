---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.694Z"
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
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient"
keywords:
  - "automatic"
  - "retries"
  - "429"
  - "errors"
  - "cause"
  - "dataproc"
  - "retry"
  - "rate"
---

# Automatic retries for 429 errors

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Automatic retries for 429 errors cause Dataproc to retry rate-limit errors from Google APIs with backoff.

## Extended Definition

Automatic retries for 429 errors cause Dataproc to retry rate-limit errors from Google APIs with backoff.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient)

## Supporting Pages

### "Class AutoscalingPolicyServiceClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceClient)
- Source ID: `site-python-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} - For projects.locations.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} - For projects.locations.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.list , the resource name of the region has the following format: projects/{project id}/regions/{region} - For projects.locations.autoscalingPolicies.list , the resource name of the location has the following format: projects/{project id}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the policy field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class AutoscalingPolicyServiceAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} - For projects.locations.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project id}/regions/{region}/autoscalingPolicies/{policy id} - For projects.locations.autoscalingPolicies.get , the resource name of the policy has the following format: projects/{project id}/locations/{location}/autoscalingPolicies/{policy id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The "resource name" of the region or location, as described in https://cloud.google.com/apis/design/resource names . - For projects.regions.autoscalingPolicies.list , the resource name of the region has the following format: projects/{project id}/regions/{region} - For projects.locations.autoscalingPolicies.list , the resource name of the location has the following format: projects/{project id}/locations/{location} This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the policy field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class JobControllerClient (5.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient)
- Source ID: `site-python-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example filter: status.state = ACTIVE AND labels.env = staging AND labels.starred = This corresponds to the filter field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the job id field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the job id field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the job id field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

