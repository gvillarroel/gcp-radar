---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.218Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Job cloning"
feature_slug: "job-cloning"
latest_feature_date: "2015-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata"
  - "https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore"
keywords:
  - "existing"
  - "cloning"
  - "clone"
  - "into"
  - "submission"
  - "console"
---

# Job cloning

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The console can clone an existing job into a new job submission form with copied settings.

## Extended Definition

The console can clone an existing job into a new job submission form with copied settings.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)

## Supporting Pages

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- In Cloud Shell, export the metadata from the DPMS instance: gcloud metastore services export gcs $ { DPMS PRIMARY INSTANCE } \ -- location =$ { DPMS PRIMARY REGION } \ -- destination - folder = gs : //$ { BACKUP BUCKET } Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the metadata into the standby DPMS instance in the original region (region A): gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select from completed orders limit 5;" The output includes the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The primary Managed Service for Apache Spark Metastore and standby Managed Service for Apache Spark Metastore have swapped roles again.
- Create a new DPMS instance in the standby region: gcloud metastore services create ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --hive-metastore-version=3.1.2 Set the Hive data bucket as the default warehouse directory: gcloud metastore services update ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --update-hive-metastore-configs="hive.metastore.warehouse.dir=gs:// ${ PROJECT } -warehouse" Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the backed-up metadata into the new Managed Service for Apache Spark Metastore instance: gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Create a Managed Service for Apache Spark cluster in the standby region (region B): gcloud dataproc clusters create ${ HADOOP STANDBY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS STANDBY REGION } /services/ ${ DPMS STANDBY INSTANCE } \ --region= ${ DPMS STANDBY REGION } \ --image-version=2.0 Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select count( ) as num orders from orders;" The num orders output is most important to the tutorial.
- Clone the tutorial's GitHub repository: git clone https://github.com/GoogleCloudPlatform/metastore-disaster-recovery.git Enable the following Google Cloud APIs: gcloud services enable dataproc.googleapis.com metastore.googleapis.com Set some environment variables: export PROJECT =$ ( gcloud info -- format = 'value(config.project)' ) export WAREHOUSE BUCKET =$ { PROJECT } - warehouse export BACKUP BUCKET =$ { PROJECT } - dpms - backups export DPMS PRIMARY REGION = us - central1 export DPMS STANDBY REGION = us - east1 export DPMS PRIMARY INSTANCE = dpms1 export DPMS STANDBY INSTANCE = dpms2 export HADOOP PRIMARY = dataproc - cluster1 export HADOOP STANDBY = dataproc - cluster2 Creating storage for Hive data and Hive Metastore backups In this section, you create Cloud Storage buckets to host the Hive data and Hive Metastore backups.
- This service is responsible for importing the metadata backups from BACKUP BUCKET into the standby metastore: gcloud run deploy dpms - import \ -- image gcr . io / $ { PROJECT } / dpms dr \ -- region $ { DPMS STANDBY REGION } \ -- platform managed \ -- update - env - vars DPMS STANDBY REGION = $ { DPMS STANDBY REGION }, BACKUP BUCKET = $ { BACKUP BUCKET }, DPMS STANDBY INSTANCE = $ { DPMS STANDBY INSTANCE } \ -- allow - unauthenticated \ -- timeout = 10 m Retrieve the deploy URL for the second Cloud Run service: IMPORT RUN URL = $ ( gcloud run services describe dpms - import -- platform managed -- region $ { REGION B } -- format "value(status.address.url)" ) echo $ { IMPORT RUN URL } Jobs scheduling This section shows how to use Cloud Scheduler to trigger the two Cloud Run services.

### Import metadata into Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- Source ID: `site-docs-root-2`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Console In the Google Cloud console, open the Dataproc Metastore page: Open Dataproc Metastore On the Dataproc Metastore page, click the name of the service you want to import metadata into.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to import metadata into Dataproc Metastore: To import metadata: metastore.imports.create on the metastore service.
- Required roles To get the permissions that you need to import metadata into Dataproc Metastore, ask your administrator to grant you the following IAM roles: To import metadata: Dataproc Metastore Editor ( roles/metastore.editor ) on the metadata service.
- Prepare the import files before import Before you can import your files into Dataproc Metastore, you must copy your metadata dump files into Cloud Storage, such as your artifacts Cloud Storage bucket .

### "Create an Apache Iceberg table with metadata in BigLake metastore \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- Source ID: `site-iam-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Copy the following PySpark code into your Zeppelin notebook after filling in the variables. %pyspark from pyspark.sql import SparkSession project id = " PROJECT ID " catalog = " CATALOG NAME " namespace = " NAMESPACE " location = " LOCATION " warehouse dir = "gs:// BUCKET / WAREHOUSE DIRECTORY " spark = SparkSession.builder \ .appName ( "BigQuery Metastore Iceberg" ) \ .config ( f "spark.sql.catalog.{catalog}" , "org.apache.iceberg.spark.SparkCatalog" ) \ .config ( f "spark.sql.catalog.{catalog}.catalog-impl" , "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog" ) \ .config ( f "spark.sql.catalog.{catalog}.gcp project" , f "{project id}" ) \ .config ( f "spark.sql.catalog.{catalog}.gcp location" , f "{location}" ) \ .config ( f "spark.sql.catalog.{catalog}.warehouse" , f "{warehouse dir}" ) \ .getOrCreate () spark.sql ( f "USE {catalog};" ) spark.sql ( f "CREATE NAMESPACE IF NOT EXISTS {namespace};" ) spark.sql ( f "USE {namespace}`;" ) \# Create table and display schema ( without LOCATION ) spark.sql ( "DROP TABLE IF EXISTS example iceberg table" ) spark.sql ( "CREATE TABLE example iceberg table (id int, data string) USING ICEBERG" ) spark.sql ( "DESCRIBE example iceberg table;" ) \# Insert table data. spark.sql ( "INSERT INTO example iceberg table VALUES (1, 'first row');" ) \# Alter table, then display schema. spark.sql ( "ALTER TABLE example iceberg table ADD COLUMNS (newDoubleCol double);" ) \# Select and display the contents of the table. spark.sql ( "SELECT FROM example iceberg table" ) .show () Replace the following: PROJECT ID : Your Google Cloud project ID.
- In a local terminal window or in Cloud Shell , run the following curl command to download the iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file to the current directory. curl -o iceberg-spark-runtime-3.5 2.12-1.6.1.jar https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar Uses the gcloud CLI to copy the local iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file from the current directory to your bucket in Cloud Storage. gcloud storage cp iceberg-spark-runtime-3.5 2.12-1.6.1.jar gs:// BUCKET / Submit the Spark SQL job Select a tab to follow the instructions to submit the Spark SQL job to the Managed Service for Apache Spark service using the gcloud CLI, Google Cloud console, or Managed Service for Apache Spark REST API. gcloud Run the following gcloud dataproc jobs submit spark-sql command locally in a local terminal window or in Cloud Shell to submit the Spark SQL job to create the Iceberg table. gcloud dataproc jobs submit spark-sql \ --project= PROJECT ID \ --cluster= CLUSTER NAME \ --region= REGION \ --jars="gs:// BUCKET /1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " \ --properties="spark.sql.catalog.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit Request JSON body: { "projectId": " PROJECT ID ", "job": { "placement": { "clusterName": " CLUSTER NAME " }, "statusHistory": [], "reference": { "jobId": "", "projectId": " PROJECT ID " }, "sparkSqlJob": { "properties": { "spark.sql.catalog." CATALOG NAME ": "org.apache.iceberg.spark.SparkCatalog", "spark.sql.catalog." CATALOG NAME ".catalog-impl": "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog", "spark.sql.catalog." CATALOG NAME ".gcp project": " PROJECT ID ", "spark.sql.catalog." CATALOG NAME ".gcp location": " LOCATION ", "spark.sql.catalog." CATALOG NAME ".warehouse": "gs:// BUCKET / WAREHOUSE FOLDER " }, "jarFileUris": [ "gs:// BUCKET /iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " ], "scriptVariables": {}, "queryFileUri": "gs:// BUCKET /iceberg-table.sql" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- SET CATALOG NAME = CATALOG NAME ; SET BUCKET = BUCKET ; SET WAREHOUSE FOLDER = WAREHOUSE FOLDER ; USE ${CATALOG NAME}; CREATE NAMESPACE IF NOT EXISTS ${CATALOG NAME}.example namespace; DROP TABLE IF EXISTS ${CATALOG NAME}.example namespace.example table; CREATE TABLE ${CATALOG NAME}.example namespace.example table (id int, data string) USING ICEBERG LOCATION 'gs://${BUCKET}/${WAREHOUSE FOLDER}'; INSERT INTO ${CATALOG NAME}.example namespace.example table VALUES (1, 'first row'); ALTER TABLE ${CATALOG NAME}.example namespace.example table ADD COLUMNS (newDoubleCol double); DESCRIBE TABLE ${CATALOG NAME}.example namespace.example table; Replace the following: CATALOG NAME : Iceberg catalog name.

