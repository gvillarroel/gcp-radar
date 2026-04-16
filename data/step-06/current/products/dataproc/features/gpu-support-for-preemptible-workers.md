---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.653Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "GPU support for preemptible workers"
feature_slug: "gpu-support-for-preemptible-workers"
latest_feature_date: "2020-02-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
keywords:
  - "gpu"
  - "preemptible"
  - "workers"
  - "dataproc"
  - "supports"
  - "attaching"
  - "gpus"
  - "worker"
---

# GPU support for preemptible workers

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports attaching GPUs to preemptible worker nodes.

## Extended Definition

Dataproc supports attaching GPUs to preemptible worker nodes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)

## Supporting Pages

### "Scale GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- If minNumInstances is set, cluster creation will succeed if the number of primary workers created is at least equal to the minNumInstances number.
- The default value for master and worker groups is NON PREEMPTIBLE .
- This configuration is applicable to only secondary workers for now.
- JSON representation { "numInstances" : integer , "instanceNames" : [ string ] , "imageUri" : string , "machineTypeUri" : string , "diskConfig" : { object ( DiskConfig ) } , "isPreemptible" : boolean , "preemptibility" : enum ( Preemptibility ) , "managedGroupConfig" : { object ( ManagedGroupConfig ) } , "accelerators" : [ { object ( AcceleratorConfig ) } ] , "minCpuPlatform" : string , "minNumInstances" : integer , "instanceFlexibilityPolicy" : { object ( InstanceFlexibilityPolicy ) } , "startupConfig" : { object ( StartupConfig ) } } Fields numInstances integer Optional.

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- Complete filling in or confirming the other cluster creation fields, then click Create . gcloud Run the following gcloud dataproc clusters create command locally in a terminal window or in Cloud Shell . gcloud dataproc clusters create CLUSTER NAME \ --project= PROJECT ID \ --region= REGION \ --image-version= IMAGE \ --properties= PROPERTIES Notes: CLUSTER NAME : The cluster name, which must be unique within a project.
- Complete filling in or confirming the other job submission fields, then click Submit . gcloud Run the following gcloud dataproc jobs submit command locally in a terminal window or in Cloud Shell . gcloud dataproc jobs submit SPARK JOB TYPE \ --cluster= CLUSTER NAME \ --region= REGION \ --properties= PROPERTIES Notes: SPARK JOB TYPE : Specify spark , pyspark , spark-sql or spark-r .

