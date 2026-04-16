---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.412Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Extended task timeout for Cloud Run jobs"
feature_slug: "extended-task-timeout-for-cloud-run-jobs"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.pagers.ListJobsAsyncPager"
keywords:
  - "extended"
  - "task"
  - "timeouts"
  - "timeout"
  - "jobs"
---

# Extended task timeout for Cloud Run jobs

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run jobs support task timeouts of up to 168 hours.

## Extended Definition

Cloud Run jobs support task timeouts of up to 168 hours.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.pagers.ListJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.pagers.ListJobsAsyncPager)

## Supporting Pages

### "Class JobsAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JobsAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.
- This corresponds to the job id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class JobsClient (0.16.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient)
- Source ID: `site-python-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JobsClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict] The request object.
- This corresponds to the job id field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 def sample list jobs(): Create a client client = run v2 .

### "Class ListJobsAsyncPager (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.pagers.ListJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.pagers.ListJobsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.run v2.types.ListJobsRequest The initial request object. response google.cloud.run v2.types.ListJobsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListJobsAsyncPager (0.16.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListJobs requests and continue to iterate through the jobs field on the corresponding responses.
- 0.16.0 (latest) 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.19 0.9.1 0.8.1 0.7.1 0.6.0 0.5.0 0.4.2 0.3.0 0.2.1 0.1.0 ListJobsAsyncPager ( method : typing .

