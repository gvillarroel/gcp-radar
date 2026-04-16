---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.634Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud Storage default filesystem"
feature_slug: "cloud-storage-default-filesystem"
latest_feature_date: "2020-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager"
keywords:
  - "storage"
  - "default"
  - "filesystem"
  - "dataproc"
  - "clusters"
  - "can"
  - "set"
  - "configuring"
---

# Cloud Storage default filesystem

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc clusters can set Cloud Storage as the default filesystem by configuring core:fs.defaultFS to a gs:// location.

## Extended Definition

Dataproc clusters can set Cloud Storage as the default filesystem by configuring core:fs.defaultFS to a gs:// location.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- SINGLE NODE https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/single-node-clusters ZERO SCALE Clusters that can use only secondary workers and be scaled down to zero secondary worker nodes.
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.

### "Job output and logs \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spark driver logs The following tables list the effect of different property settings on the destination of Spark driver logs. spark: spark.submit.deployMode dataproc: dataproc.logging.stackdriver.job.driver.enable dataproc: dataproc.logging.stackdriver.job.yarn.container.enable Driver Output client false (default) true or false Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri Not in Logging client true true or false Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri In Logging: dataproc.job.driver under the job resource cluster false (default) false Not streamed to client Not in Cloud Storage In Logging yarn-userlogs under the cluster resource cluster true true Not streamed to client Not in Cloud Storage In Logging: dataproc.job.yarn.container under the job resource Spark executor logs The following tables list the effect of different property settings on the destination of Spark executor logs. dataproc: dataproc.logging.stackdriver.job.yarn.container.enable Executor log false (default) In Logging: yarn-userlogs under the cluster resource true In Logging dataproc.job.yarn.container under the job resource Spark jobs submitted without using the Managed Service for Apache Spark jobs API This section lists the effect of different property settings on the destination of Spark job logs when jobs are submitted without using the Managed Service for Apache Spark jobs API, for example when submitting a job directly on a cluster node using spark-submit or when using a Jupyter or Zeppelin notebook.
- Managed Service for Apache Spark job driver output The following tables list the effect of different property settings on the destination of Managed Service for Apache Spark job driver output. dataproc: dataproc.logging.stackdriver.job.driver.enable Output false (default) Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri Not in Logging true Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri In Logging: dataproc.job.driver under the job resource.
- Note: The following cluster property settings are also required to enable job driver logs in Logging, and are set by default when a cluster is created: dataproc:dataproc.logging.stackdriver.enable=true and dataproc:jobs.file-backed-output.enable=true dataproc:dataproc.logging.stackdriver.job.yarn.container.enable true or false false Must be set at cluster creation time.
- A link to job output in Cloud Storage is provided in the Job.driverOutputResourceUri field returned by: a jobs.get API request. a gcloud dataproc jobs describe job-id command. $ gcloud dataproc jobs describe spark-pi ... driverOutputResourceUri: gs://dataproc-nnn/jobs/spark-pi/driveroutput ...

### "Class ListClustersAsyncPager (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager)
- Source ID: `site-python-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListClustersRequest The initial request object. response google.cloud.dataproc v1.types.ListClustersResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListClustersResponse ], ], request : google . cloud . dataproc v1 . types . clusters .
- ListClustersResponse ], ], request : google . cloud . dataproc v1 . types . clusters .
- ListClustersRequest , response : google . cloud . dataproc v1 . types . clusters .

