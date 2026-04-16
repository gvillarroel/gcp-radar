---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.653Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ROUND_HALF_EVEN rounding mode"
feature_slug: "round-half-even-rounding-mode"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc"
keywords:
  - "round"
  - "half"
  - "even"
  - "rounding"
  - "mode"
  - "bigquery"
  - "supports"
  - "parameterized"
---

# ROUND_HALF_EVEN rounding mode

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports the ROUND_HALF_EVEN rounding mode for parameterized NUMERIC and BIGNUMERIC columns.

## Extended Definition

BigQuery supports the ROUND_HALF_EVEN rounding mode for parameterized NUMERIC and BIGNUMERIC columns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)

## Supporting Pages

### "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- Source ID: `site-docs-reference-required-15`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Inspect one of the columns (or series) of the DataFrame: bq df [ "body mass g" ] Compute the mean of this series: average body mass = bq df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Find the heaviest species using the groupby operation to calculate the mean body mass g: ( bq df [ "body mass g" ] . groupby ( by = bq df [ "species" ]) . mean () . sort values ( ascending = False ) . head ( 10 ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Run queries using the BigQuery DataFrames bigframes.pandas APIs Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.

### "Download table data in the Arrow data format \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-arrow-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- ArrowRecordBatch deserializedBatch = MessageSerializer . deserializeRecordBatch ( new ReadChannel ( new ByteArrayReadableSeekableByteChannel ( batch . getSerializedRecordBatch (). toByteArray ())), allocator ); loader . load ( deserializedBatch ); // Release buffers from batch (they are still held in the vectors in root). deserializedBatch . close (); System . out . println ( root . contentToTSVString ()); // Release buffers from vectors in root. root . clear (); } @Override public void close () { root . close (); allocator . close (); } } public static void main ( String ... args ) throws Exception { // Sets your Google Cloud Platform project ID. // String projectId = "YOUR PROJECT ID"; String projectId = args [ 0 ] ; Integer snapshotMillis = null ; if ( args . length > 1 ) { snapshotMillis = Integer . parseInt ( args [ 1 ] ); } try ( BigQueryReadClient client = BigQueryReadClient . create ()) { String parent = String . format ( "projects/%s" , projectId ); // This example uses baby name data from the public datasets.
- String srcTable = String . format ( "projects/%s/datasets/%s/tables/%s" , "bigquery-public-data" , "usa names" , "usa 1910 current" ); // We specify the columns to be projected by adding them to the selected fields, // and set a simple filter to restrict which rows are transmitted.
- Explore further For detailed documentation that includes this code sample, see the following: BigQuery Storage API Client Libraries Code sample Java Before trying this sample, follow the Java setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Download table data in the Arrow data format Stay organized with collections Save and categorize content based on your preferences.

### "Configure BigLake metastore for Managed Service for Apache Spark and Spark\

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- Source ID: `site-docs-reference-5`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Configure the Iceberg custom catalog plugin for BigLake metastore: FLINK VERSION = 1 .19 ICEBERG VERSION = 1 .6.1 cd /usr/lib/flink sudo wget -c https://repo.maven.apache.org/maven2/org/apache/iceberg/iceberg-flink-runtime- ${ FLINK VERSION } / ${ ICEBERG VERSION } /iceberg-flink-runtime- ${ FLINK VERSION } - ${ ICEBERG VERSION } .jar -P lib sudo gcloud storage cp gs://spark-lib/bigquery/iceberg-bigquery-catalog- ${ ICEBERG VERSION } -1.0.2.jar lib/ Start the Flink session on YARN: HADOOP CLASSPATH = hadoop classpath sudo bin/yarn-session.sh -nm flink-dataproc -d sudo bin/sql-client.sh embedded \ -s yarn-session Create a catalog in Flink: CREATE CATALOG CATALOG NAME WITH ( 'type' = 'iceberg' , 'warehouse' = ' WAREHOUSE DIRECTORY ' , 'catalog-impl' = 'org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog' , 'gcp project' = ' PROJECT ID ' , 'gcp location' = ' LOCATION ' ); Replace the following: CATALOG NAME : the Flink catalog identifier, which is linked to a BigLake metastore catalog.
- Required roles To get the permissions that you need to configure BigLake metastore, ask your administrator to grant you the following IAM roles: Create a Managed Service for Apache Spark cluster: Dataproc Worker ( roles/dataproc.worker ) on the Compute Engine default service account in the project Create BigLake metastore tables: Dataproc Worker ( roles/dataproc.worker ) on the Dataproc VM service account in the project BigQuery Data Editor ( roles/bigquery.dataEditor ) on the Dataproc VM service account in the project Storage Object User ( roles/storage.objectUser ) on the Dataproc VM service account in the project Query BigLake metastore tables: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project BigQuery User ( roles/bigquery.user ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Depending on your Iceberg version number, select one of the following: Iceberg 1.9.1 : gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.9.1-1.0.1.jar Iceberg 1.6.1 : gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.6.1-1.0.2.jar CATALOG NAME : the name of the Spark catalog to that you're using with your SQL job.
- Depending on your Iceberg version number, select one of the following: Iceberg 1.9.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.9.1-1.0.1.jar Iceberg 1.6.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.6.1-1.0.2.jar LOCATION : the location of the BigQuery resources.

