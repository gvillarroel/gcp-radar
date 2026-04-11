---
title: "Additional BigLake metastore features \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/bqms-features
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/bqms-features
  title: "Additional BigLake metastore features \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
BigLake
Guides
Send feedback
Additional BigLake metastore features
Stay organized with collections
Save and categorize content based on your preferences.
To customize your BigLake metastore configuration, you can use the following
additional features:
Apache Spark Iceberg procedures
The filter option for unsupported tables
BigQuery connection overrides
Access control policies for BigLake metastore Iceberg
tables
Use Iceberg Spark procedures
To use Iceberg Spark procedures ,
you must include Iceberg SQL extensions
in your Spark configuration. For example, you can
create a procedure to roll back to a previous state.
Use interactive Spark-SQL to roll back to a previous state
You can use an Iceberg Spark
procedure to create, modify, and roll back a table to its previous state. For
example:
Create a Spark table:
spark-sql \
--jars https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5_2.12/1.6.1/iceberg-spark-runtime-3.5_2.12-1.6.1.jar, BIGLAKE_ICEBERG_CATALOG_JAR \
--conf spark.sql.extensions = org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions \
--conf spark.sql.catalog. CATALOG_NAME = org.apache.iceberg.spark.SparkCatalog \
--conf spark.sql.catalog. CATALOG_NAME .catalog-impl = org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog \
--conf spark.sql.catalog. CATALOG_NAME .gcp_project = PROJECT_ID \
--conf spark.sql.catalog. CATALOG_NAME .warehouse = WAREHOUSE_DIRECTORY
Replace the following:
BIGLAKE_ICEBERG_CATALOG_JAR : the Cloud Storage
URI of the Iceberg custom catalog plugin to use.
Depending on your Iceberg version number, select one of the following:
Iceberg 1.9.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.9.1-1.0.1.jar
Iceberg 1.6.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.6.1-1.0.2.jar
CATALOG_NAME : the catalog name that references
your Spark table.
PROJECT_ID : the ID of the Google Cloud project.
WAREHOUSE_DIRECTORY : the URI of the
Cloud Storage folder where your data warehouse is stored.
USE ` CATALOG_NAME ` ;
CREATE NAMESPACE NAMESPACE_NAME ;
USE NAMESPACE NAMESPACE_NAME ;
CREATE TABLE NAMESPACE_NAME . TABLE_NAME ( id int , data string ) USING ICEBERG LOCATION ' WAREHOUSE_DIRECTORY ' ;
INSERT INTO NAMESPACE_NAME . TABLE_NAME VALUES ( 1 , "first row" );
DESCRIBE EXTENDED TABLE_NAME ;
Replace the following:
NAMESPACE_NAME : the namespace name that
references your Spark table.
TABLE_NAME : a table name that references
your Spark table.
The output contains details about the table configuration:
...
Table Properties [ current-snapshot-id = 1659239298328512231 ,format = iceberg/parquet,format-version = 2 ,write.parquet.compression-codec = zstd ]
...
Alter the table again, and then roll it back to the previously created
snapshot 1659239298328512231 :
ALTER TABLE TABLE_NAME ADD COLUMNS ( newDoubleCol double ) ;
INSERT INTO TABLE_NAME VALUES ( 2 , "second row" , 2 .5 ) ;
SELECT * FROM TABLE_NAME ;
CALL CATALOG_NAME .system.set_current_snapshot ( ' NAMESPACE_NAME . TABLE_NAME ' , SNAPSHOT_ID ) ;
SELECT * FROM TABLE_NAME ;
Replace the following:
SNAPSHOT_ID : the ID of the snapshot you are
rolling back to.
The output is similar to the following:
1 first row
Time taken: 0 .997 seconds, Fetched 1 row ( s )
Filter unsupported tables from table listing functions
When you use Spark SQL with the BigLake metastore
catalog, the SHOW TABLES command shows all the tables in the specified
namespace, even those that aren't compatible with
Spark.
To only display supported tables, turn on the filter_unsupported_tables
option:
spark-sql
--jars https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5_2.12/1.6.1/iceberg-spark-runtime-3.5_2.12-1.6.1.jar, BIGLAKE_ICEBERG_CATALOG_JAR \
--conf spark.sql.catalog. CATALOG_NAME = org.apache.iceberg.spark.SparkCatalog \
--conf spark.sql.catalog. CATALOG_NAME .catalog-impl = org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog \
--conf spark.sql.catalog. CATALOG_NAME .gcp_project = PROJECT_ID \
--conf spark.sql.catalog. CATALOG_NAME .gcp_location = LOCATION \
--conf spark.sql.catalog. CATALOG_NAME .warehouse = WAREHOUSE_DIRECTORY \
--conf spark.sql.catalog. CATALOG_NAME .filter_unsupported_tables = "true"
Replace the following:
BIGLAKE_ICEBERG_CATALOG_JAR : the Cloud Storage
URI of the Iceberg custom catalog plugin to use. Depending
on your Iceberg version number, select one of the following:
Iceberg 1.9.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.9.1-1.0.1.jar
Iceberg 1.6.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.6.1-1.0.2.jar
CATALOG_NAME : the name of the
Spark catalog to use.
PROJECT_ID : the ID of the Google Cloud project
to use.
LOCATION : the location of the BigQuery
resources.
WAREHOUSE_DIRECTORY : the Cloud Storage
folder to use as the data warehouse.
Set a BigQuery connection override
You can use BigQuery connections to access data stored
outside of BigQuery, such as in Cloud Storage.
To set a BigQuery connection
override that provides access to a Cloud Storage bucket, complete
the following steps:
In your BigQuery project, create a new connection to your
Cloud Storage resource. This connection defines how
BigQuery accesses your data.
Grant the user or service account accessing the data the
roles/bigquery.connectionUser role on the connection.
Make sure that the connection resource shares the same location as the
target resources in BigQuery. For more information, see
Manage connections .
Specify the connection in your Iceberg table with the
bq_connection property:
CREATE TABLE TABLE_NAME ( id int , data string ) USING ICEBERG LOCATION ' WAREHOUSE_DIRECTORY ' TBLPROPERTIES ( 'bq_connection' = 'projects/ PROJECT_ID /locations/ LOCATION /connections/ CONNECTION_ID ' );
Replace the following:
TABLE_NAME : a table name for
your Spark table.
WAREHOUSE_DIRECTORY : the URI of the
Cloud Storage bucket that stores your data.
PROJECT_ID : the ID of the Google Cloud project
to use.
LOCATION : the location
of the connection.
CONNECTION_ID : the ID of the connection.
Set access control policies
You can enable fine-grained access control (FGAC) on BigLake metastore
Iceberg tables by configuring access control policies. You
can only set access control policies on tables that use a
BigQuery connection override . You can set
these policies in the following ways:
Column-level security
Row-level security
Data masking
After you configure your FGAC policies, you can query the table from
Spark using the following example:
from pyspark.sql import SparkSession
# Create a Spark session
spark = SparkSession . builder \
. appName ( "BigLake Metastore Iceberg" ) \
. config ( "spark.sql.catalog. CATALOG_NAME " , "org.apache.iceberg.spark.SparkCatalog" ) \
. config ( "spark.sql.catalog. CATALOG_NAME .catalog-impl" , "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog" ) \
. config ( "spark.sql.catalog. CATALOG_NAME .gcp_project" , " PROJECT_ID " ) \
. config ( "spark.sql.catalog. CATALOG_NAME .gcp_location" , " LOCATION " ) \
. config ( "spark.sql.catalog. CATALOG_NAME .warehouse" , " WAREHOUSE_DIRECTORY " ) \
. getOrCreate ()
spark . sql ( "USE ` CATALOG_NAME `;" )
# Configure spark for storing temp results
spark . conf . set ( "viewsEnabled" , "true" )
spark . sql ( "CREATE namespace if not exists MATERIALIZATION_NAMESPACE " );
spark . conf . set ( "materializationDataset" , " MATERIALIZATION_NAMESPACE " )
spark . sql ( "USE NAMESPACE DATASET_NAME ;" )
sql = """SELECT * FROM DATASET_NAME . ICEBERG_TABLE_NAME """
df = spark . read . format ( "bigquery" ) . load ( sql )
df . show ()
Replace the following:
CATALOG_NAME : the name of your catalog.
PROJECT_ID : the ID of the project that contains your
BigQuery resources.
LOCATION : the
location of the BigQuery resources.
WAREHOUSE_DIRECTORY : the URI of the
Cloud Storage folder that contains your data warehouse.
MATERIALIZATION_NAMESPACE : the namespace where you
want to store temporary results.
DATASET_NAME : the name of your dataset that contains
the table that you are querying.
ICEBERG_TABLE_NAME : the name of the table that you're
querying.
What's next
Create and manage resources in BigLake metastore .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
