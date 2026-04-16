---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.578Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "BigLake Iceberg REST catalog support"
feature_slug: "biglake-iceberg-rest-catalog-support"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg"
keywords:
  - "biglake"
  - "iceberg"
  - "rest"
  - "catalog"
  - "dataproc"
  - "optional"
  - "component"
  - "supports"
---

# BigLake Iceberg REST catalog support

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc Iceberg optional component supports the BigLake Iceberg REST catalog in Compute Engine image versions 2.2 and 2.3.

## Extended Definition

The Dataproc Iceberg optional component supports the BigLake Iceberg REST catalog in Compute Engine image versions 2.2 and 2.3.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse)
- [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)

## Supporting Pages

### "Create an Apache Iceberg table with metadata in BigLake metastore \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In a local terminal window or in Cloud Shell , run the following curl command to download the iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file to the current directory. curl -o iceberg-spark-runtime-3.5 2.12-1.6.1.jar https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar Uses the gcloud CLI to copy the local iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file from the current directory to your bucket in Cloud Storage. gcloud storage cp iceberg-spark-runtime-3.5 2.12-1.6.1.jar gs:// BUCKET / Submit the Spark SQL job Select a tab to follow the instructions to submit the Spark SQL job to the Managed Service for Apache Spark service using the gcloud CLI, Google Cloud console, or Managed Service for Apache Spark REST API. gcloud Run the following gcloud dataproc jobs submit spark-sql command locally in a local terminal window or in Cloud Shell to submit the Spark SQL job to create the Iceberg table. gcloud dataproc jobs submit spark-sql \ --project= PROJECT ID \ --cluster= CLUSTER NAME \ --region= REGION \ --jars="gs:// BUCKET /1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " \ --properties="spark.sql.catalog.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit Request JSON body: { "projectId": " PROJECT ID ", "job": { "placement": { "clusterName": " CLUSTER NAME " }, "statusHistory": [], "reference": { "jobId": "", "projectId": " PROJECT ID " }, "sparkSqlJob": { "properties": { "spark.sql.catalog." CATALOG NAME ": "org.apache.iceberg.spark.SparkCatalog", "spark.sql.catalog." CATALOG NAME ".catalog-impl": "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog", "spark.sql.catalog." CATALOG NAME ".gcp project": " PROJECT ID ", "spark.sql.catalog." CATALOG NAME ".gcp location": " LOCATION ", "spark.sql.catalog." CATALOG NAME ".warehouse": "gs:// BUCKET / WAREHOUSE FOLDER " }, "jarFileUris": [ "gs:// BUCKET /iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " ], "scriptVariables": {}, "queryFileUri": "gs:// BUCKET /iceberg-table.sql" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- USER catalog.warehouse": "gs:// BUCKET / WAREHOUSE FOLDER " }, "jarFileUris": [ "gs:// BUCKET /iceberg-spark-runtime-3.5 2.12-1.6.1.jar", " BIGLAKE ICEBERG CATALOG JAR " ] }, "driverControlFilesUri": "gs://dataproc-...", "driverOutputResourceUri": "gs://dataproc-.../driveroutput", "jobUuid": "...", "region": " REGION " } To monitor job progress and view job output, go to the Managed Service for Apache Spark Jobs page in the Google Cloud console, then click the Job ID to open the Job details page.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit" Select-Object -Expand Content You should receive a JSON response similar to the following: { "reference": { "projectId": " PROJECT ID ", "jobId": "..." }, "placement": { "clusterName": " CLUSTER NAME ", "clusterUuid": "..." }, "status": { "state": "PENDING", "stateStartTime": "..." }, "submittedBy": " USER ", "sparkSqlJob": { "queryFileUri": "gs:// BUCKET /iceberg-table.sql", "properties": { "spark.sql.catalog.

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure a Spark session In your Jupyter Notebook, create a Spark session configured to use the BigQuery Iceberg REST Catalog. import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1beta/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , 'gs:// GCS BUCKET ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.hadoop.HadoopFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () Replace the following: CATALOG NAME : a name for your Iceberg catalog, for example, bq iceberg catalog .
- To create the cluster, run the following gcloud command: gcloud beta dataproc clusters create CLUSTER NAME \ --project = PROJECT ID \ --region = REGION \ --image-version = 2 .3-debian12 \ --optional-components = ICEBERG,JUPYTER \ --enable-component-gateway Replace the following: CLUSTER NAME : the name for your Managed Service for Apache Spark cluster.
- Query the table using the retrieved snapshot ID. df = ( spark . read . format ( "iceberg" ) . option ( "versionAsOf" , oldest snapshot id ) . load ( "base table" ) ) df . show () The output shows the state of the table after the MERGE operation but before any UPDATE or DELETE operations. +---+ id +---+ 0 1 2 3 4 5 6 +---+ What's next Learn more about the BigQuery Iceberg REST Catalog .
- In the BigQuery Iceberg REST Catalog, a namespace corresponds to a BigQuery dataset. spark . sql ( "CREATE NAMESPACE IF NOT EXISTS NAMESPACE NAME " ) spark . sql ( "USE NAMESPACE NAME " ) Replace NAMESPACE NAME with the name for your namespace, for example, spark bq lakehouse .

### Use Apache Iceberg tables with Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)
- Source ID: `site-docs-root-2`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an external table (overlay a Hive table on top of the Iceberg table): CREATE EXTERNAL TABLE hadoop table STORED BY 'org.apache.iceberg.mr.hive.HiveIcebergStorageHandler' LOCATION 'gs://<gcs-bucket-name>/hive-warehouse/<database-name>' TBLPROPERTIES ( 'iceberg.catalog' = 'gs://<gcs-bucket-name>/hive-warehouse/<database-name>' ); Check the table schema and whether the table format is Iceberg: describe formatted hadoop table; Read the data from the table: select from hadoop table; Use Iceberg table on Presto Presto queries use the Hive connector to get partition locations, so you must configure Presto accordingly to read and write data on the Iceberg table.
- Presto Configurations Under each Managed Service for Apache Spark cluster node, create a file named iceberg.properties /etc/presto/conf/catalog/iceberg.properties and configure the hive.metastore.uri as follows: connector.name=iceberg hive.metastore.uri=thrift://<example.net:9083> Replace example.net:9083 with the correct host and port for your Hive metastore Thrift service.
- Create Iceberg table on Presto Open the Presto client and use the "Iceberg" connector to get the metastore: --catalog iceberg --schema default Create a table to insert and update data.
- Create a table called example under default database: val catalog = new HiveCatalog(); catalog.setConf(spark.sparkContext.hadoopConfiguration); catalog.initialize("hive", new HashMapString,String); val name = TableIdentifier.of("default","example"); Insert sample data: val df1 = Seq((1,"Vincent","Computer Science"),(2,"Dan", "Economics"),(3,"Bob", "Politics"),(4,"Cindy", "UX Design")).toDF("id","name","major"); val df1 schema = SparkSchemaUtil.convert(df1.schema); Specify partition strategy based on column id : val partition spec=PartitionSpec.builderFor(df1 schema).identity("id").build; Create the table: val table=catalog.createTable(name,df1 schema,partition spec); Add the Iceberg Storage Handler and SerDe as the table property: table.updateProperties().set("engine.hive.enabled", "true").commit(); Write the data to the table: df1.write.format("iceberg").mode("overwrite").save("default.example"); Read the data: val read df1 = spark . read . format ( "iceberg" ) . load ( "default.example" ); read df1 . show ; Change the table schema.

