---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.827Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Execution details"
feature_slug: "execution-details"
latest_feature_date: "2021-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.metrics_v1_beta3.MetricsV1Beta3AsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.metrics_v1_beta3.pagers.GetJobExecutionDetailsAsyncPager"
keywords:
  - "execution"
  - "details"
  - "provide"
  - "detailed"
  - "runtime"
  - "information"
  - "dataflow"
  - "job"
---

# Execution details

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Execution details provide detailed runtime information for Dataflow job execution.

## Extended Definition

Execution details provide detailed runtime information for Dataflow job execution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.metrics_v1_beta3.MetricsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.metrics_v1_beta3.MetricsV1Beta3AsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.metrics_v1_beta3.pagers.GetJobExecutionDetailsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.metrics_v1_beta3.pagers.GetJobExecutionDetailsAsyncPager)

## Supporting Pages

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Stage Execution Details Information about the workers and work items within a stage. com. google. dataflow. v1beta3.
- Work Item Details Information about an individual work item execution. com. google. dataflow. v1beta3.
- Job Execution Details Information about the execution of a job. com. google. dataflow. v1beta3.
- Job Execution Info Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job. com. google. dataflow. v1beta3.

### "Class MetricsV1Beta3AsyncClient (0.13.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.metrics_v1_beta3.MetricsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.metrics_v1_beta3.MetricsV1Beta3AsyncClient)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.dataflow v1beta3.services.metrics v1 beta3.pagers.GetStageExecutionDetailsAsyncPager Information about the workers and work items within a stage.
- Returns Type Description google.cloud.dataflow v1beta3.services.metrics v1 beta3.pagers.GetJobExecutionDetailsAsyncPager Information about the execution of a job.
- GetStageExecutionDetailsAsyncPager ) Request detailed information about the execution status of a stage of the job.
- GetJobExecutionDetailsAsyncPager ) Request detailed information about the execution status of the job.

### "Class GetJobExecutionDetailsAsyncPager (0.13.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.metrics_v1_beta3.pagers.GetJobExecutionDetailsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.metrics_v1_beta3.pagers.GetJobExecutionDetailsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataflow v1beta3.types.GetJobExecutionDetailsRequest The initial request object. response google.cloud.dataflow v1beta3.types.JobExecutionDetails The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This class thinly wraps an initial JobExecutionDetails object, and provides an aiter method to iterate through its stages field.
- GetJobExecutionDetailsRequest , response : google . cloud . dataflow v1beta3 . types . metrics .
- GetJobExecutionDetailsRequest , response : google . cloud . dataflow v1beta3 . types . metrics .

