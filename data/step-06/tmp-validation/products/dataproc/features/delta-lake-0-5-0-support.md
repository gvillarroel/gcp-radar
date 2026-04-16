---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.165Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Delta Lake 0.5.0 support"
feature_slug: "delta-lake-0-5-0-support"
latest_feature_date: "2020-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-federation"
keywords:
  - "delta"
  - "lake"
  - "includes"
  - "version"
  - "image"
---

# Delta Lake 0.5.0 support

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc image 1.5 includes Delta Lake version 0.5.0.

## Extended Definition

Dataproc image 1.5 includes Delta Lake version 0.5.0.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-federation](https://docs.cloud.google.com/dataproc-metastore/docs/create-federation)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Attempt to create a Managed Service for Apache Spark cluster with an expired custom image or a custom image that will expire within 10 days. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --region= REGION \ ... other flags The gcloud CLI will issue an error message that includes the cluster dataproc:dataproc.custom.image.expiration.token property name and token value. dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE Copy the TOKEN VALUE string to the clipboard.
- Then, run the generate custom image.py script to have Managed Service for Apache Spark generate and save your custom image. python3 generate custom image.py \ --image-name= CUSTOM IMAGE NAME \ [--family= CUSTOM IMAGE FAMILY NAME ] \ --dataproc-version= IMAGE VERSION \ --customization-script= LOCAL PATH \ --zone= ZONE \ --gcs-bucket= gs:// BUCKET NAME \ [--no-smoke-test] Required flags --image-name : the output name for your custom image.
- If your project is part of a shared VPC , you must specify the full subnetwork URL in the following format: projects/ HOST PROJECT ID /regions/ REGION /subnetworks/ SUBNET . --optional-components : This flag is available only when using base image versions 2.3 and later.

### "Create an Apache Iceberg table with metadata in BigLake metastore \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- Source ID: `site-iam-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- By default, Managed Service for Apache Spark cluster VMs, created with a 2.2 (default) or later image version, have internal IP addresses only .
- In a local terminal window or in Cloud Shell , run the following curl command to download the iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file to the current directory. curl -o iceberg-spark-runtime-3.5 2.12-1.6.1.jar https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar Uses the gcloud CLI to copy the local iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file from the current directory to your bucket in Cloud Storage. gcloud storage cp iceberg-spark-runtime-3.5 2.12-1.6.1.jar gs:// BUCKET / Submit the Spark SQL job Select a tab to follow the instructions to submit the Spark SQL job to the Managed Service for Apache Spark service using the gcloud CLI, Google Cloud console, or Managed Service for Apache Spark REST API. gcloud Run the following gcloud dataproc jobs submit spark-sql command locally in a local terminal window or in Cloud Shell to submit the Spark SQL job to create the Iceberg table. gcloud dataproc jobs submit spark-sql \ --project= PROJECT ID \ --cluster= CLUSTER NAME \ --region= REGION \ --jars="gs:// BUCKET /1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " \ --properties="spark.sql.catalog.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit Request JSON body: { "projectId": " PROJECT ID ", "job": { "placement": { "clusterName": " CLUSTER NAME " }, "statusHistory": [], "reference": { "jobId": "", "projectId": " PROJECT ID " }, "sparkSqlJob": { "properties": { "spark.sql.catalog." CATALOG NAME ": "org.apache.iceberg.spark.SparkCatalog", "spark.sql.catalog." CATALOG NAME ".catalog-impl": "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog", "spark.sql.catalog." CATALOG NAME ".gcp project": " PROJECT ID ", "spark.sql.catalog." CATALOG NAME ".gcp location": " LOCATION ", "spark.sql.catalog." CATALOG NAME ".warehouse": "gs:// BUCKET / WAREHOUSE FOLDER " }, "jarFileUris": [ "gs:// BUCKET /iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " ], "scriptVariables": {}, "queryFileUri": "gs:// BUCKET /iceberg-table.sql" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- OSS database to BigQuery dataset mapping Note the following mapping between open source database and BigQuery dataset terms: OSS database BigQuery dataset Namespace, Database Dataset Partitioned or Unpartitioned Table Table View View Create an Iceberg table This section shows you how to create an Iceberg table with metadata in BigLake metastore by submitting a Spark SQL code to the Managed Service for Apache Spark service , the Spark SQL CLI , and the Zeppelin component web interface, which run on a Managed Service for Apache Spark cluster.

### "Create a metadata federation service \_|\_ Dataproc Metastore \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-federation](https://docs.cloud.google.com/dataproc-metastore/docs/create-federation)
- Source ID: `site-docs-root-2`
- Final score: 75
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The following command doesn't support the --dataproc-metastore flag. gcloud dataproc clusters create CLUSTER NAME \ --region= LOCATION \ --project= PROJECT ID \ --scopes=https://www.googleapis.com/auth/cloud-platform \ --image-version= IMAGE VERSION \ --service-account= SERVICE ACCOUNT \ --optional-components=DOCKER \ --initialization-actions=gs://metastore-init-actions/metastore-grpc-proxy/metastore-grpc-proxy.sh \ --metadata="proxy-uri= FEDERATION URI ,hive-version= FEDERATION VERSION " \ --properties="hive:hive.metastore.uris=thrift://localhost:9083,hive:hive.metastore.warehouse.dir= WAREHOUSE DIR " Replace the following: CLUSTER NAME : the name of your new Managed Service for Apache Spark cluster.
- Make sure the Managed Service for Apache Spark image that you're using in this command is compatible with the Hive version used with your federation service.
- IMAGE VERSION : the Managed Service for Apache Spark image version that you want to use.
- For more information, see Managed Service for Apache Spark image version list .

