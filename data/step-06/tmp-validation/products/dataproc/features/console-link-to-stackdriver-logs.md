---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.198Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Console link to Stackdriver logs"
feature_slug: "console-link-to-stackdriver-logs"
latest_feature_date: "2018-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console"
keywords:
  - "link"
  - "stackdriver"
  - "page"
  - "details"
  - "includes"
  - "console"
  - "logs"
  - "cluster"
---

# Console link to Stackdriver logs

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The cluster details page in the Google Cloud console includes a button that links directly to Stackdriver logs for a cluster.

## Extended Definition

The cluster details page in the Google Cloud console includes a button that links directly to Stackdriver logs for a cluster.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console)

## Supporting Pages

### "Job output and logs \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spark driver logs The following tables list the effect of different property settings on the destination of Spark driver logs. spark: spark.submit.deployMode dataproc: dataproc.logging.stackdriver.job.driver.enable dataproc: dataproc.logging.stackdriver.job.yarn.container.enable Driver Output client false (default) true or false Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri Not in Logging client true true or false Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri In Logging: dataproc.job.driver under the job resource cluster false (default) false Not streamed to client Not in Cloud Storage In Logging yarn-userlogs under the cluster resource cluster true true Not streamed to client Not in Cloud Storage In Logging: dataproc.job.yarn.container under the job resource Spark executor logs The following tables list the effect of different property settings on the destination of Spark executor logs. dataproc: dataproc.logging.stackdriver.job.yarn.container.enable Executor log false (default) In Logging: yarn-userlogs under the cluster resource true In Logging dataproc.job.yarn.container under the job resource Spark jobs submitted without using the Managed Service for Apache Spark jobs API This section lists the effect of different property settings on the destination of Spark job logs when jobs are submitted without using the Managed Service for Apache Spark jobs API, for example when submitting a job directly on a cluster node using spark-submit or when using a Jupyter or Zeppelin notebook.
- Note: The following cluster property settings are also required to enable job driver logs in Logging, and are set by default when a cluster is created: dataproc:dataproc.logging.stackdriver.enable=true and dataproc:jobs.file-backed-output.enable=true dataproc:dataproc.logging.stackdriver.job.yarn.container.enable true or false false Must be set at cluster creation time.
- Spark driver logs The following tables list the effect of different property settings on the destination of Spark driver logs for jobs not submitted through the Managed Service for Apache Spark jobs API. spark: spark.submit.deployMode Driver Output client Streamed to client Not in Cloud Storage Not in Logging cluster Not streamed to client Not in Cloud Storage In Logging yarn-userlogs under the cluster resource Spark executor logs When Spark jobs are not submitted through the Managed Service for Apache Spark jobs API, executor logs are in Logging yarn-userlogs under the cluster resource.
- Spark jobs submitted using the Managed Service for Apache Spark jobs API The tables in this section list the effect of different property settings on the destination of Managed Service for Apache Spark job driver output when jobs are submitted through the Managed Service for Apache Spark jobs API, which includes job submission through the Google Cloud console, gcloud CLI, and Cloud Client Libraries.

### "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a cluster by using the Google Cloud console This page shows you how to use the Google Cloud console to create a Managed Service for Apache Spark cluster, run a basic Apache Spark job in the cluster, and then modify the number of workers in the cluster.
- Create a cluster In the Google Cloud console, go to the Managed Service for Apache Spark Clusters page.
- To delete the cluster, on the Cluster details page for example-cluster , click delete Delete .
- On the Cluster details page, click the Configuration tab.

### "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a cluster by using the Google Cloud console This page shows you how to use the Google Cloud console to create a Managed Service for Apache Spark cluster, run a basic Apache Spark job in the cluster, and then modify the number of workers in the cluster.
- Create a cluster In the Google Cloud console, go to the Managed Service for Apache Spark Clusters page.
- To delete the cluster, on the Cluster details page for example-cluster , click delete Delete .
- On the Cluster details page, click the Configuration tab.

