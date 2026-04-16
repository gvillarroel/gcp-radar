---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.111Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Spark Enhancements in Google Cloud console"
feature_slug: "dataproc-spark-enhancements-in-google-cloud-console"
latest_feature_date: "2024-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-cluster"
keywords:
  - "enhancements"
  - "available"
  - "console"
  - "creation"
  - "cluster"
  - "spark"
---

# Dataproc Spark Enhancements in Google Cloud console

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Spark Enhancements are available in the Google Cloud console cluster and job creation pages.

## Extended Definition

Dataproc Spark Enhancements are available in the Google Cloud console cluster and job creation pages.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)

## Supporting Pages

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable enhancements at cluster creation You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable Managed Service for Apache Spark Spark performance enhancements when you create a Managed Service for Apache Spark cluster with image versions 2.0.69+, 2.1.17+, 2.2.0+, and later image releases.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- Managed Service for Apache Spark Spark performance enhancements include: Spark Optimizer enhancements: Optimizer rules written for better Spark plans Improved performance of the Managed Service for Apache Spark BigQuery connector when used in Spark jobs Spark Execution enhancements: Spark execution engine improvements Other Managed Service for Apache Spark performance improvements: See Managed Service for Apache Spark cluster caching , which helps reduce the amount of time spent accessing data in Cloud Storage.

### "Create a Managed Service for Apache Spark partial cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: Managed Service for Apache Spark partial cluster creation is not available in the Google Cloud console. gcloud To create a Managed Service for Apache Spark partial cluster on the command line, run the following gcloud dataproc clusters create command locally in a terminal window or in Cloud Shell . gcloud dataproc clusters create CLUSTER NAME \ --project= PROJECT \ --region= REGION \ --num-workers= NUM WORKERS \ --min-num-workers= MIN NUM WORKERS \ other args ...
- Note: You can click the Equivalent REST or command line links at the bottom of the left panel of the Managed Service for Apache Spark Google Cloud console Create a cluster page to have the Console construct an equivalent API REST request or gcloud CLI command to use in your code or from the command line to create a cluster.
- To mitigate the effects of the unavailability of user-specified VMs in specific regions at specific times ( stockouts ), Managed Service for Apache Spark lets you request the creation of a partial cluster by specifying a minimum number of primary workers that is acceptable to allow cluster creation.
- Single node clusters are not available for creation.

### "Create a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT /regions/ REGION /operations/b5706e31......", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.ClusterOperationMetadata", "clusterName": " CLUSTER NAME ", "clusterUuid": "5fe882b2-...", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2019-11-21T00:37:56.220Z" }, "operationType": "CREATE", "description": "Create cluster with 2 workers", "warnings": [ "For PD-Standard without local SSDs, we strongly recommend provisioning 1TB ..."" ] } } Note: You can click the Equivalent REST or command line links at the bottom of the left panel of the Managed Service for Apache Spark Google Cloud console Create a cluster page to have the Console construct an equivalent API REST request or gcloud tool command to use in your code or from the command line to create a cluster.
- Note: You can click the Equivalent REST or command line links at the bottom of the left panel on the Managed Service for Apache Spark Google Cloud console Create a cluster page to have the Console construct an equivalent API REST request or gcloud tool command to use in your code or from the command line to create a cluster.
- Console Open the Managed Service for Apache Spark Create a cluster page in the Google Cloud console in your browser, then click Create in the cluster on Compute engine row in the Create a Dataproc cluster on Compute Engine page.
- Managed Service for Apache Spark prevents the creation of clusters with image versions prior to 1.3.95, 1.4.77, 1.5.53, and 2.0.27, which were affected by Apache Log4j security vulnerabilities .

