---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.117Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Premium compute tier for Serverless Spark"
feature_slug: "premium-compute-tier-for-serverless-spark"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/explore-data"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
keywords:
  - "premium"
  - "higher"
  - "tier"
  - "workloads"
  - "serverless"
  - "compute"
  - "spark"
---

# Premium compute tier for Serverless Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless Spark workloads support a premium compute tier for higher performance per core.

## Extended Definition

Dataproc Serverless Spark workloads support a premium compute tier for higher performance per core.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/explore-data](https://docs.cloud.google.com/dataproc/docs/guides/explore-data)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- CLUSTER TIER PREMIUM Premium Dataproc cluster.
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/explore-data](https://docs.cloud.google.com/dataproc/docs/guides/explore-data)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- You can use Managed Service for Apache Spark to process high-volume streams from a service like Pub/Sub or Apache Kafka and land the data in the bronze tier.
- Use the following PySpark script to create a SparkSession, configure it for Cloud Storage access, and read the raw CSV file into a DataFrame. from pyspark.sql import SparkSession --- Configuration --- gcs bucket = " BUCKET NAME " raw path = f "gs:// { gcs bucket } /raw/shakespeare/shakespeare.csv" For local development only. service account key path = "/path/to/your/service-account-key.json" --- Spark Session Initialization --- spark = SparkSession . builder \ . appName ( "DataprocETL-RawIngestion" ) \ . config ( "spark.jars" , "https://storage.googleapis.com/hadoop-lib/gcs/gcs-connector-hadoop3-latest.jar" ) \ . getOrCreate () --- Authentication for local development --- This step is not necessary when running on a Dataproc cluster with the service account attached to the cluster VMs. spark . conf . set ( "google.cloud.auth.service.account.json.keyfile" , service account key path ) --- Read Raw Data from Cloud Storage --- Read the raw CSV data into a DataFrame. inferSchema=True scans the data to determine column types. raw df = spark . read . csv ( raw path , header = True , inferSchema = True ) --- Initial Exploration --- print ( "Raw data count:" , raw df . count ()) print ( "Schema:" ) raw df . printSchema () print ( "Sample of raw data:" ) raw df . show ( 10 , truncate = False ) --- Stop Spark Session --- spark . stop () Run the script as a Managed Service for Apache Spark job to ingest and explore the raw data.
- Create it in the same region as your Managed Service for Apache Spark cluster to optimize performance. gsutil mb -l REGION gs:// BUCKET NAME / Export the bigquery-public-data:samples.shakespeare table to your Cloud Storage bucket in CSV format. bq extract \ --destination format CSV \ "bigquery-public-data:samples.shakespeare" \ "gs:// BUCKET NAME /raw/shakespeare/shakespeare.csv" This command starts an export job that writes the table's contents to the specified Cloud Storage path.

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Run the command, below, to create a single-node Managed Service for Apache Spark cluster in the specified Compute Engine zone . gcloud dataproc clusters create ${CLUSTER} \ --project=${PROJECT} \ --region=${REGION} \ --single-node The above command installs the default cluster image version .
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine Managed Service for Apache Spark Cloud Storage To generate a cost estimate based on your projected usage, use the pricing calculator .
- The improved Cloud Storage connector minimizes metadata operations to reduce costs, while an optimized file output committer unlocks performance and reliability for Spark workloads.

