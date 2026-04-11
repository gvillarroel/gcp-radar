---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.016Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "BigLake Iceberg REST catalog support"
feature_slug: "biglake-iceberg-rest-catalog-support"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg"
keywords:
  - "biglake"
  - "iceberg"
  - "rest"
  - "catalog"
  - "the"
  - "dataproc"
  - "optional"
  - "component"
---

# BigLake Iceberg REST catalog support

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The Dataproc Iceberg optional component supports the BigLake Iceberg REST catalog in Compute Engine image versions 2.2 and 2.3.

## Extended Definition

The Dataproc Iceberg optional component supports the BigLake Iceberg REST catalog in Compute Engine image versions 2.2 and 2.3.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)

## Supporting Pages

### "Create an Apache Iceberg table with metadata in BigLake metastore \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In a local terminal window or in Cloud Shell , run the following curl command to download the iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file to the current directory. curl -o iceberg-spark-runtime-3.5 2.12-1.6.1.jar https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar Uses the gcloud CLI to copy the local iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file from the current directory to your bucket in Cloud Storage. gcloud storage cp iceberg-spark-runtime-3.5 2.12-1.6.1.jar gs:// BUCKET / Submit the Spark SQL job Select a tab to follow the instructions to submit the Spark SQL job to the Managed Service for Apache Spark service using the gcloud CLI, Google Cloud console, or Managed Service for Apache Spark REST API. gcloud Run the following gcloud dataproc jobs submit spark-sql command locally in a local terminal window or in Cloud Shell to submit the Spark SQL job to create the Iceberg table. gcloud dataproc jobs submit spark-sql \ --project= PROJECT ID \ --cluster= CLUSTER NAME \ --region= REGION \ --jars="gs:// BUCKET /1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " \ --properties="spark.sql.catalog.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit Request JSON body: { "projectId": " PROJECT ID ", "job": { "placement": { "clusterName": " CLUSTER NAME " }, "statusHistory": [], "reference": { "jobId": "", "projectId": " PROJECT ID " }, "sparkSqlJob": { "properties": { "spark.sql.catalog." CATALOG NAME ": "org.apache.iceberg.spark.SparkCatalog", "spark.sql.catalog." CATALOG NAME ".catalog-impl": "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog", "spark.sql.catalog." CATALOG NAME ".gcp project": " PROJECT ID ", "spark.sql.catalog." CATALOG NAME ".gcp location": " LOCATION ", "spark.sql.catalog." CATALOG NAME ".warehouse": "gs:// BUCKET / WAREHOUSE FOLDER " }, "jarFileUris": [ "gs:// BUCKET /iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " ], "scriptVariables": {}, "queryFileUri": "gs:// BUCKET /iceberg-table.sql" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- USER catalog.warehouse": "gs:// BUCKET / WAREHOUSE FOLDER " }, "jarFileUris": [ "gs:// BUCKET /iceberg-spark-runtime-3.5 2.12-1.6.1.jar", " BIGLAKE ICEBERG CATALOG JAR " ] }, "driverControlFilesUri": "gs://dataproc-...", "driverOutputResourceUri": "gs://dataproc-.../driveroutput", "jobUuid": "...", "region": " REGION " } To monitor job progress and view job output, go to the Managed Service for Apache Spark Jobs page in the Google Cloud console, then click the Job ID to open the Job details page.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit" Select-Object -Expand Content You should receive a JSON response similar to the following: { "reference": { "projectId": " PROJECT ID ", "jobId": "..." }, "placement": { "clusterName": " CLUSTER NAME ", "clusterUuid": "..." }, "status": { "state": "PENDING", "stateStartTime": "..." }, "submittedBy": " USER ", "sparkSqlJob": { "queryFileUri": "gs:// BUCKET /iceberg-table.sql", "properties": { "spark.sql.catalog.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Announcement New Dataproc Serverless for Spark runtime versions : 1.2.56 2.2.56 2.3.7 Feature Dataproc on Compute Engine: Image versions 2.2 and 2.3 : The Iceberg optional component supports the BigLake Iceberg REST catalog.
- July 01, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.110 1.2.54 2.2.54 2.3.5 June 20, 2025 Change Dataproc Serverless for Spark: The built-in Iceberg now supports the BigLake Iceberg REST catalog on the 2.2 runtime.
- Note: The Dataproc Presto Optional Component must be enabled when the cluster is created to submit a Presto job to the cluster.
- October 28, 2022 Announcement The following preview Dataproc image versions are available: 2.1.0-RC2-debian11 2.1.0-RC2-rocky8 2.1.0-RC2-ubuntu20 The following component versions are available for use with the 2.1.0-RC2 images (the HBase and Druid components are not supported in 2.1 image versions): Apache Atlas 2.2.0 Apache Flink 1.15.0 Apache Hadoop 3.3.3 Apache Hive 3.1.3 Apache Hive WebHCat 3.1.3 Apache Kafka 3.1.0 Apache Pig 0.18.0-SNAPSHOT Apache Spark 3.3.0 Apache Sqoop v1 1.5.0-SNAPSHOT Apache Sqoop v2 1.99.6 Apache Tez 0.10.1 Cloud Storage Connector hadoop3-2.2.8 Conscrypt 2.5.2 Docker 20.10 Hue 4.10.0 Java temurin-11-jdk JupyterLab Notebook 3.4 Oozie 5.2.1 Presto 376 Python 3.10 R 4.1 Ranger 2.2.0 Scala 2.12.14 Solr 9.0.0 Zeppelin Notebook 0.10.1 Zookeeper 3.8.0 Security Dataproc Serverless for Spark runtime version 2.0.1 upgrades Apache Commons Text to 1.10.0 , addressing CVE-2022-42889 Libraries Dataproc Serverless for Spark runtime version 2.0.1 upgrades the following components: Spark to 3.3.1 SLF4J to 2.0.3 Announcement Dataproc Serverless for Spark now now uses runtime version 1.0.21 and 2.0.1 .

### Use Apache Iceberg tables with Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create an external table (overlay a Hive table on top of the Iceberg table): CREATE EXTERNAL TABLE hadoop table STORED BY 'org.apache.iceberg.mr.hive.HiveIcebergStorageHandler' LOCATION 'gs://<gcs-bucket-name>/hive-warehouse/<database-name>' TBLPROPERTIES ( 'iceberg.catalog' = 'gs://<gcs-bucket-name>/hive-warehouse/<database-name>' ); Check the table schema and whether the table format is Iceberg: describe formatted hadoop table; Read the data from the table: select from hadoop table; Use Iceberg table on Presto Presto queries use the Hive connector to get partition locations, so you must configure Presto accordingly to read and write data on the Iceberg table.
- Presto Configurations Under each Managed Service for Apache Spark cluster node, create a file named iceberg.properties /etc/presto/conf/catalog/iceberg.properties and configure the hive.metastore.uri as follows: connector.name=iceberg hive.metastore.uri=thrift://<example.net:9083> Replace example.net:9083 with the correct host and port for your Hive metastore Thrift service.
- Create Iceberg table on Presto Open the Presto client and use the "Iceberg" connector to get the metastore: --catalog iceberg --schema default Create a table to insert and update data.
- Create a table called example under default database: val catalog = new HiveCatalog(); catalog.setConf(spark.sparkContext.hadoopConfiguration); catalog.initialize("hive", new HashMapString,String); val name = TableIdentifier.of("default","example"); Insert sample data: val df1 = Seq((1,"Vincent","Computer Science"),(2,"Dan", "Economics"),(3,"Bob", "Politics"),(4,"Cindy", "UX Design")).toDF("id","name","major"); val df1 schema = SparkSchemaUtil.convert(df1.schema); Specify partition strategy based on column id : val partition spec=PartitionSpec.builderFor(df1 schema).identity("id").build; Create the table: val table=catalog.createTable(name,df1 schema,partition spec); Add the Iceberg Storage Handler and SerDe as the table property: table.updateProperties().set("engine.hive.enabled", "true").commit(); Write the data to the table: df1.write.format("iceberg").mode("overwrite").save("default.example"); Read the data: val read df1 = spark . read . format ( "iceberg" ) . load ( "default.example" ); read df1 . show ; Change the table schema.

