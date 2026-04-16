---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:07:05.515Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Auto diagnostics for Dataproc Serverless for Spark batch failures"
feature_slug: "auto-diagnostics-for-dataproc-serverless-for-spark-batch-failures"
latest_feature_date: "2022-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/concepts/overview"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse"
keywords:
  - "auto"
  - "diagnostics"
  - "dataproc"
  - "serverless"
  - "spark"
  - "batch"
  - "failures"
  - "supports"
---

# Auto diagnostics for Dataproc Serverless for Spark batch failures

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark supports automatic diagnostics on batch failure through the spark.dataproc.diagnostics.enabled property.

## Extended Definition

Dataproc Serverless for Spark supports automatic diagnostics on batch failure through the spark.dataproc.diagnostics.enabled property.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/concepts/overview](https://docs.cloud.google.com/dataproc/docs/concepts/overview)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse)

## Supporting Pages

### "Managed Service for Apache Spark cluster deployment overview \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/overview](https://docs.cloud.google.com/dataproc/docs/concepts/overview)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Managed Service for Apache Spark cluster deployment overview Stay organized with collections Save and categorize content based on your preferences. "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Managed Service for Apache Spark cluster deployment mode lets you take advantage of open source data tools for batch processing, querying, streaming, and machine learning.
- Managed Service for Apache Spark automation helps you create clusters quickly, manage them easily, and save money by turning clusters off when you don't need them.
- Advantages of Managed Service for Apache Spark cluster deployment mode When compared to traditional, on-premises products and competing cloud services, Managed Service for Apache Spark has a number of unique advantages for clusters of three to hundreds of nodes: Low cost — Managed Service for Apache Spark is priced at only 1 cent per virtual CPU in your cluster per hour, on top of the other Cloud Platform resources you use.

### "Job output and logs \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Spark driver logs The following tables list the effect of different property settings on the destination of Spark driver logs. spark: spark.submit.deployMode dataproc: dataproc.logging.stackdriver.job.driver.enable dataproc: dataproc.logging.stackdriver.job.yarn.container.enable Driver Output client false (default) true or false Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri Not in Logging client true true or false Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri In Logging: dataproc.job.driver under the job resource cluster false (default) false Not streamed to client Not in Cloud Storage In Logging yarn-userlogs under the cluster resource cluster true true Not streamed to client Not in Cloud Storage In Logging: dataproc.job.yarn.container under the job resource Spark executor logs The following tables list the effect of different property settings on the destination of Spark executor logs. dataproc: dataproc.logging.stackdriver.job.yarn.container.enable Executor log false (default) In Logging: yarn-userlogs under the cluster resource true In Logging dataproc.job.yarn.container under the job resource Spark jobs submitted without using the Managed Service for Apache Spark jobs API This section lists the effect of different property settings on the destination of Spark job logs when jobs are submitted without using the Managed Service for Apache Spark jobs API, for example when submitting a job directly on a cluster node using spark-submit or when using a Jupyter or Zeppelin notebook.
- Managed Service for Apache Spark job driver output The following tables list the effect of different property settings on the destination of Managed Service for Apache Spark job driver output. dataproc: dataproc.logging.stackdriver.job.driver.enable Output false (default) Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri Not in Logging true Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri In Logging: dataproc.job.driver under the job resource.
- A link to job output in Cloud Storage is provided in the Job.driverOutputResourceUri field returned by: a jobs.get API request. a gcloud dataproc jobs describe job-id command. $ gcloud dataproc jobs describe spark-pi ... driverOutputResourceUri: gs://dataproc-nnn/jobs/spark-pi/driveroutput ...

### "ListAutoscalingPoliciesResponse \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback ListAutoscalingPoliciesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "policies" : [ { object ( AutoscalingPolicy ) } ] , "nextPageToken" : string } Fields policies[] object ( AutoscalingPolicy ) Output only.
- JSON representation A response to a request to list autoscaling policies in a project.

