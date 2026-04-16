---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.173Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud Profiler for Dataproc jobs"
feature_slug: "cloud-profiler-for-dataproc-jobs"
latest_feature_date: "2020-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/profiling"
  - "https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
keywords:
  - "profiling"
  - "profiler"
  - "metadata"
  - "enable"
  - "jobs"
---

# Cloud Profiler for Dataproc jobs

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc jobs can enable Cloud Profiler and set profiling metadata through job properties.

## Extended Definition

Dataproc jobs can enable Cloud Profiler and set profiling metadata through job properties.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling)
- [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)

## Supporting Pages

### "Cloud Profiler \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Profiler Service Version Optional Managed Service for Apache Spark job UUID mapreduce.task.profile.maps Numeric range of map tasks to profile (example: for up to 100, specify "0-100") number range Optional 0-10000 Applies to Hadoop mapreduce jobs only mapreduce.task.profile.reduces Numeric range of reducer tasks to profile (example: for up to 100, specify "0-100") number range Optional 0-10000 Applies to Hadoop mapreduce jobs only PySpark Example Google Cloud CLI PySpark job submit with profiling example: gcloud dataproc jobs submit pyspark python-job-file \ --cluster= cluster-name \ --region= region \ --properties=cloud.profiler.enable=true,cloud.profiler.name= profiler name ,cloud.profiler.service.version= version \ -- job args Two profiles will be created: profiler name -driver to profile spark driver tasks profiler name -executor to profile spark executor tasks For example, if the profiler name is "spark word count job", spark word count job-driver and spark word count job-executor profiles are created.
- Hadoop Example gcloud CLI Hadoop (teragen mapreduce) job submit with profiling example: gcloud dataproc jobs submit hadoop \ --cluster= cluster-name \ --region= region \ --jar= jar-file \ --properties=cloud.profiler.enable=true,cloud.profiler.name= profiler name ,cloud.profiler.service.version= version \ -- teragen 100000 gs:// bucket-name View profiles View profiles from the Profiler on the Google Cloud console.
- Enable profiling Complete the following steps to enable and use the Profiler on your Managed Service for Apache Spark Spark and Hadoop jobs.
- Submit a Managed Service for Apache Spark job with Profiler options Submit a Managed Service for Apache Spark Spark or Hadoop job with one or more of the following Profiler options: Option Description Value Required/Optional Default Notes cloud.profiler.enable Enable profiling of the job true or false Required false cloud.profiler.name Name used to create profile on the Profiler Service profile-name Optional Managed Service for Apache Spark job UUID cloud.profiler.service.version A user-supplied string to identify and distinguish profiler results.

### "Create an Apache Iceberg table with metadata in BigLake metastore \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- Source ID: `site-iam-reference`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This document shows you how to create an Apache Iceberg table with metadata in BigLake metastore using the Managed Service for Apache Spark Jobs service, the Spark SQL CLI or the Zeppelin web interface running on a Managed Service for Apache Spark cluster.
- REST You can use the Managed Service for Apache Spark jobs.submit API to submit the Spark SQL job to Managed Service for Apache Spark to create an Iceberg table with metadata in BigLake metastore.
- In a local terminal window or in Cloud Shell , run the following curl command to download the iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file to the current directory. curl -o iceberg-spark-runtime-3.5 2.12-1.6.1.jar https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar Uses the gcloud CLI to copy the local iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file from the current directory to your bucket in Cloud Storage. gcloud storage cp iceberg-spark-runtime-3.5 2.12-1.6.1.jar gs:// BUCKET / Submit the Spark SQL job Select a tab to follow the instructions to submit the Spark SQL job to the Managed Service for Apache Spark service using the gcloud CLI, Google Cloud console, or Managed Service for Apache Spark REST API. gcloud Run the following gcloud dataproc jobs submit spark-sql command locally in a local terminal window or in Cloud Shell to submit the Spark SQL job to create the Iceberg table. gcloud dataproc jobs submit spark-sql \ --project= PROJECT ID \ --cluster= CLUSTER NAME \ --region= REGION \ --jars="gs:// BUCKET /1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " \ --properties="spark.sql.catalog.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit Request JSON body: { "projectId": " PROJECT ID ", "job": { "placement": { "clusterName": " CLUSTER NAME " }, "statusHistory": [], "reference": { "jobId": "", "projectId": " PROJECT ID " }, "sparkSqlJob": { "properties": { "spark.sql.catalog." CATALOG NAME ": "org.apache.iceberg.spark.SparkCatalog", "spark.sql.catalog." CATALOG NAME ".catalog-impl": "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog", "spark.sql.catalog." CATALOG NAME ".gcp project": " PROJECT ID ", "spark.sql.catalog." CATALOG NAME ".gcp location": " LOCATION ", "spark.sql.catalog." CATALOG NAME ".warehouse": "gs:// BUCKET / WAREHOUSE FOLDER " }, "jarFileUris": [ "gs:// BUCKET /iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " ], "scriptVariables": {}, "queryFileUri": "gs:// BUCKET /iceberg-table.sql" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- In Cloud Shell, export the metadata from the DPMS instance: gcloud metastore services export gcs $ { DPMS PRIMARY INSTANCE } \ -- location =$ { DPMS PRIMARY REGION } \ -- destination - folder = gs : //$ { BACKUP BUCKET } Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the metadata into the standby DPMS instance in the original region (region A): gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select from completed orders limit 5;" The output includes the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The primary Managed Service for Apache Spark Metastore and standby Managed Service for Apache Spark Metastore have swapped roles again.
- Create a new DPMS instance in the standby region: gcloud metastore services create ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --hive-metastore-version=3.1.2 Set the Hive data bucket as the default warehouse directory: gcloud metastore services update ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --update-hive-metastore-configs="hive.metastore.warehouse.dir=gs:// ${ PROJECT } -warehouse" Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the backed-up metadata into the new Managed Service for Apache Spark Metastore instance: gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Create a Managed Service for Apache Spark cluster in the standby region (region B): gcloud dataproc clusters create ${ HADOOP STANDBY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS STANDBY REGION } /services/ ${ DPMS STANDBY INSTANCE } \ --region= ${ DPMS STANDBY REGION } \ --image-version=2.0 Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select count( ) as num orders from orders;" The num orders output is most important to the tutorial.
- This service is responsible for importing the metadata backups from BACKUP BUCKET into the standby metastore: gcloud run deploy dpms - import \ -- image gcr . io / $ { PROJECT } / dpms dr \ -- region $ { DPMS STANDBY REGION } \ -- platform managed \ -- update - env - vars DPMS STANDBY REGION = $ { DPMS STANDBY REGION }, BACKUP BUCKET = $ { BACKUP BUCKET }, DPMS STANDBY INSTANCE = $ { DPMS STANDBY INSTANCE } \ -- allow - unauthenticated \ -- timeout = 10 m Retrieve the deploy URL for the second Cloud Run service: IMPORT RUN URL = $ ( gcloud run services describe dpms - import -- platform managed -- region $ { REGION B } -- format "value(status.address.url)" ) echo $ { IMPORT RUN URL } Jobs scheduling This section shows how to use Cloud Scheduler to trigger the two Cloud Run services.
- In Cloud Shell, create an App Engine application, which Cloud Scheduler requires: gcloud app create --region= ${ REGION A } Create a Cloud Scheduler job to schedule the metadata exports from the primary metastore: gcloud scheduler jobs create http dpms - export \ -- schedule " /15 " \ -- http - method = post \ -- uri =$ { EXPORT RUN URL } / export \ The Cloud Scheduler job makes an http request to the Cloud Run service every 15 minutes.

