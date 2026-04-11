---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.037Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc job state metric"
feature_slug: "dataproc-job-state-metric"
latest_feature_date: "2022-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient"
keywords:
  - "dataproc"
  - "job"
  - "state"
  - "metric"
  - "provides"
  - "the"
  - "googleapis"
  - "com"
---

# Dataproc job state metric

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc provides the dataproc.googleapis.com/job/state metric for monitoring job states and querying job IDs in MQL.

## Extended Definition

Dataproc provides the dataproc.googleapis.com/job/state metric for monitoring job states and querying job IDs in MQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Job Controller Grpc The JobController provides methods to manage jobs. com. google. cloud. dataproc. v1.
- Async Service The JobController provides methods to manage jobs. com. google. cloud. dataproc. v1.
- The JobController provides methods to manage jobs. com. google. cloud. dataproc. v1.
- Substate The job substate. com. google. cloud. dataproc. v1.

### "Create metric alerts \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- You can modify the query by filtering on the job id to apply it to a specific job: sum by (job id) ({ " name "="dataproc.googleapis.com/job/state", "monitored resource"="cloud dataproc job", "state"="ERROR", "job id"="1234567890" }) != 0 Cluster capacity deviation alert Managed Service for Apache Spark emits the dataproc.googleapis.com/cluster/capacity deviation metric, which reports the difference between the expected node count in the cluster and the active YARN node count.
- Failed Managed Service for Apache Spark job alert You can also use the dataproc.googleapis.com/job/state metric (see Long-running Managed Service for Apache Spark job alert ) to alert you when a Managed Service for Apache Spark job fails.
- Long-running Managed Service for Apache Spark job alert Managed Service for Apache Spark emits the dataproc.googleapis.com/job/state metric, which tracks how long a job has been in different states.
- You can modify the query by filtering on the job id to apply it to a specific job: sum by (job id) ({ " name "="dataproc.googleapis.com/job/state", "monitored resource"="cloud dataproc job", "state"="RUNNING", "job id"="1234567890" }) != 0 Long-running YARN application alert The previous sample shows an alert that is triggered when a Managed Service for Apache Spark job runs longer than a specified duration, but it only applies to jobs submitted to the Managed Service for Apache Spark service using the Google Cloud console, the Google Cloud CLI, or by direct calls to the Managed Service for Apache Spark jobs API.

### "Class JobControllerAsyncClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SubmitJobRequest ( project id="project id value", region="region value", job=job, ) Make the request operation = client. submit job as operation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.SubmitJobRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample submit job as operation(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample cancel job(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample delete job(): Create a client client = dataproc v1 .

