---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.584Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud Profiler for Serverless Spark"
feature_slug: "cloud-profiler-for-serverless-spark"
latest_feature_date: "2024-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/profiling"
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
keywords:
  - "profiler"
  - "serverless"
  - "spark"
  - "dataproc"
  - "supports"
  - "can"
  - "enabled"
  - "profiling"
---

# Cloud Profiler for Serverless Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark supports Cloud Profiler and can be enabled with profiling properties.

## Extended Definition

Dataproc Serverless for Spark supports Cloud Profiler and can be enabled with profiling properties.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling)
- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)

## Supporting Pages

### "Cloud Profiler \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Profiler Service Version Optional Managed Service for Apache Spark job UUID mapreduce.task.profile.maps Numeric range of map tasks to profile (example: for up to 100, specify "0-100") number range Optional 0-10000 Applies to Hadoop mapreduce jobs only mapreduce.task.profile.reduces Numeric range of reducer tasks to profile (example: for up to 100, specify "0-100") number range Optional 0-10000 Applies to Hadoop mapreduce jobs only PySpark Example Google Cloud CLI PySpark job submit with profiling example: gcloud dataproc jobs submit pyspark python-job-file \ --cluster= cluster-name \ --region= region \ --properties=cloud.profiler.enable=true,cloud.profiler.name= profiler name ,cloud.profiler.service.version= version \ -- job args Two profiles will be created: profiler name -driver to profile spark driver tasks profiler name -executor to profile spark executor tasks For example, if the profiler name is "spark word count job", spark word count job-driver and spark word count job-executor profiles are created.
- Submit a Managed Service for Apache Spark job with Profiler options Submit a Managed Service for Apache Spark Spark or Hadoop job with one or more of the following Profiler options: Option Description Value Required/Optional Default Notes cloud.profiler.enable Enable profiling of the job true or false Required false cloud.profiler.name Name used to create profile on the Profiler Service profile-name Optional Managed Service for Apache Spark job UUID cloud.profiler.service.version A user-supplied string to identify and distinguish profiler results.
- Hadoop Example gcloud CLI Hadoop (teragen mapreduce) job submit with profiling example: gcloud dataproc jobs submit hadoop \ --cluster= cluster-name \ --region= region \ --jar= jar-file \ --properties=cloud.profiler.enable=true,cloud.profiler.name= profiler name ,cloud.profiler.service.version= version \ -- teragen 100000 gs:// bucket-name View profiles View profiles from the Profiler on the Google Cloud console.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disable Spark data lineage on a job If Spark data lineage is enabled on a cluster, you can disable Spark data lineage on a job by passing the spark.extraListeners property with an empty value ("") when you submit the job. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.extraListeners = '' Submit a Spark job When you submit a supported Spark job on a Managed Service for Apache Spark cluster that was created with Spark data lineage enabled, Managed Service for Apache Spark captures and reports the data lineage information to the Data Lineage API. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.openlineage.namespace = CUSTOM NAMESPACE ,spark.openlineage.appName = CUSTOM APPNAME Notes: Adding the spark.openlineage.namespace and spark.openlineage.appName properties, which are used to uniquely identify the job, is optional.
- To enable Spark data lineage on a cluster, create a Managed Service for Apache Spark cluster with the dataproc:dataproc.lineage.enabled cluster property set to true . gcloud CLI example: gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --properties 'dataproc:dataproc.lineage.enabled=true' You can disable Spark data lineage on a cluster by setting the dataproc:dataproc.lineage.enabled property to false when you create the cluster.
- To enable Spark data lineage at the project level, set the following custom project metadata : Key Value DATAPROC LINEAGE ENABLED true DATAPROC CLUSTER SCOPES https://www.googleapis.com/auth/cloud-platform Setting this VM access scope is only necessary for 2.0 image version clusters.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- This setting can slow small jobs. spark.dataproc.sql.catalog.file.index.stats.enabled : This setting can result in driver OOM (Out-Of-Memory) conditions if the Hive partition count is high.

