---
title: "Configure BigLake metastore for Managed Service for Apache Spark and Spark\
  \ using Iceberg 1.9 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc
  title: "Configure BigLake metastore for Managed Service for Apache Spark and Spark\
    \ using Iceberg 1.9 \_|\_ Google Cloud Documentation"
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
Configure BigLake metastore for Managed Service for Apache Spark and Spark using Iceberg 1.9
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to configure the custom Iceberg
catalog for BigQuery in BigLake metastore with either
Managed Service for Apache Spark or
Managed Service for Apache Spark . This lets you create a
single, shared metastore that works across open source engines, such as
Apache Spark or Apache Flink.
Before you begin
Enable billing for your Google Cloud project. Learn how to
check if billing is enabled on a project .
Enable the BigQuery, and Managed Service for Apache Spark APIs.
Enable the APIs
Understand BigLake metastore .
Required roles
To get the permissions that
you need to configure BigLake metastore,
ask your administrator to grant you the
following IAM roles:
Create a Managed Service for Apache Spark cluster:
Dataproc Worker ( roles/dataproc.worker )
on the Compute Engine default service account in the project
Create BigLake metastore tables:
Dataproc Worker ( roles/dataproc.worker )
on the Dataproc VM service account in the project
BigQuery Data Editor ( roles/bigquery.dataEditor )
on the Dataproc VM service account in the project
Storage Object User ( roles/storage.objectUser )
on the Dataproc VM service account in the project
Query BigLake metastore tables:
BigQuery Data Viewer ( roles/bigquery.dataViewer )
on the project
BigQuery User ( roles/bigquery.user )
on the project
Storage Object Viewer ( roles/storage.objectViewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Configure your metastore with Managed Service for Apache Spark
You can configure BigLake metastore with Managed Service for Apache Spark using either
Spark or Flink:
Spark
Configure a new cluster. To create a new Managed Service for Apache Spark cluster,
run the following gcloud dataproc clusters create command ,
which contains the settings that you need to use BigLake metastore:
gcloud dataproc clusters create CLUSTER_NAME \
--project = PROJECT_ID \
--region = LOCATION \
--single-node
Replace the following:
CLUSTER_NAME : a name for your
Managed Service for Apache Spark cluster.
PROJECT_ID : the ID of the Google Cloud project
where you're creating the cluster.
LOCATION : the Compute Engine region
where you're creating the cluster.
Submit a Spark job using one of the following
methods:
Google Cloud CLI
gcloud dataproc jobs submit spark-sql \
--project = PROJECT_ID \
--cluster = CLUSTER_NAME \
--region = REGION \
--jars = https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5_2.12/1.6.1/iceberg-spark-runtime-3.5_2.12-1.6.1.jar, BIGLAKE_ICEBERG_CATALOG_JAR \
--properties = spark.sql.catalog. CATALOG_NAME = org.apache.iceberg.spark.SparkCatalog, \
spark.sql.catalog. CATALOG_NAME .catalog-impl = org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog, \
spark.sql.catalog. CATALOG_NAME .gcp_project = PROJECT_ID , \
spark.sql.catalog. CATALOG_NAME .gcp_location = LOCATION , \
spark.sql.catalog. CATALOG_NAME .warehouse = WAREHOUSE_DIRECTORY \
--execute = " SPARK_SQL_COMMAND "
Replace the following:
PROJECT_ID : the ID of the Google Cloud project
that contains the Managed Service for Apache Spark cluster.
CLUSTER_NAME : the name of the
Managed Service for Apache Spark cluster that you're using to run the
Spark SQL job.
REGION : the Compute Engine
region where your cluster is
located.
BIGLAKE_ICEBERG_CATALOG_JAR : the
Cloud Storage URI of the Iceberg custom
catalog plugin to use. Depending on your Iceberg
version number, select one of the following:
Iceberg 1.9.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.9.1-1.0.1.jar
Iceberg 1.6.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.6.1-1.0.2.jar
LOCATION : the location of the
BigQuery resources.
CATALOG_NAME : the name of the
Spark catalog to use with your SQL job.
WAREHOUSE_DIRECTORY : the
Cloud Storage folder that contains your data warehouse.
This value starts with gs:// .
SPARK_SQL_COMMAND : the
Spark SQL query that you want to run. This query
includes the commands to create your resources. For example, to create a
namespace and table.
spark-sql CLI
In the Google Cloud console, go to the VM Instances page.
Go to VM Instances
To connect to a Managed Service for Apache Spark VM instance, click SSH
in the row that lists the Managed Service for Apache Spark cluster main VM
instance name, which is the cluster name followed by an -m
suffix. The output is similar to the following:
Connected, host fingerprint: ssh-rsa ...
Linux cluster-1-m 3.16.0-0.bpo.4-amd64 ...
...
example-cluster@cluster-1-m:~$
In the terminal, run the following BigLake metastore initialization
command:
spark-sql \
--jars https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5_2.12/1.6.1/iceberg-spark-runtime-3.5_2.12-1.6.1.jar, BIGLAKE_ICEBERG_CATALOG_JAR \
--conf spark.sql.catalog. CATALOG_NAME = org.apache.iceberg.spark.SparkCatalog \
--conf spark.sql.catalog. CATALOG_NAME .catalog-impl = org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog \
--conf spark.sql.catalog. CATALOG_NAME .gcp_project = PROJECT_ID \
--conf spark.sql.catalog. CATALOG_NAME .gcp_location = LOCATION \
--conf spark.sql.catalog. CATALOG_NAME .warehouse = WAREHOUSE_DIRECTORY
Replace the following:
BIGLAKE_ICEBERG_CATALOG_JAR : the
Cloud Storage URI of the Iceberg
custom catalog plugin to use. Depending on your
Iceberg version number, select one of the
following:
Iceberg 1.9.1 : gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.9.1-1.0.1.jar
Iceberg 1.6.1 : gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.6.1-1.0.2.jar
CATALOG_NAME : the name of the
Spark catalog to that you're using with your
SQL job.
PROJECT_ID : the Google Cloud project
ID of the BigLake metastore catalog that your
Spark catalog links with.
LOCATION : the Google Cloud location
of the BigLake metastore.
WAREHOUSE_DIRECTORY : the
Cloud Storage folder that contains your data warehouse.
This value starts with gs:// .
After you successfully connect to the cluster, your
Spark terminal displays the spark-sql prompt,
which you can use to submit Spark jobs.
spark-sql (default)>
Flink
Create a Managed Service for Apache Spark cluster with the optional Flink component enabled ,
and ensure that you're using Managed Service for Apache Spark 2.2 or later.
In the Google Cloud console, go to the VM instances page.
Go to VM instances
In the list of virtual machine instances, click SSH to connect to the
main Managed Service for Apache Spark cluster VM instance, which is listed as the
cluster name followed by an -m suffix.
Configure the Iceberg custom catalog plugin for
BigLake metastore:
FLINK_VERSION = 1 .19
ICEBERG_VERSION = 1 .6.1
cd /usr/lib/flink
sudo wget -c https://repo.maven.apache.org/maven2/org/apache/iceberg/iceberg-flink-runtime- ${ FLINK_VERSION } / ${ ICEBERG_VERSION } /iceberg-flink-runtime- ${ FLINK_VERSION } - ${ ICEBERG_VERSION } .jar -P lib
sudo gcloud storage cp gs://spark-lib/bigquery/iceberg-bigquery-catalog- ${ ICEBERG_VERSION } -1.0.2.jar lib/
Start the Flink session on YARN:
HADOOP_CLASSPATH = ` hadoop classpath `
sudo bin/yarn-session.sh -nm flink-dataproc -d
sudo bin/sql-client.sh embedded \
-s yarn-session
Create a catalog in Flink:
CREATE CATALOG CATALOG_NAME WITH (
'type' = 'iceberg' ,
'warehouse' = ' WAREHOUSE_DIRECTORY ' ,
'catalog-impl' = 'org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog' ,
'gcp_project' = ' PROJECT_ID ' ,
'gcp_location' = ' LOCATION '
);
Replace the following:
CATALOG_NAME : the Flink
catalog identifier, which is linked to a BigLake metastore catalog.
WAREHOUSE_DIRECTORY : the base path for
the warehouse directory (the Cloud Storage folder where
Flink creates files). This value starts with
gs:// .
PROJECT_ID : the project ID of the
BigLake metastore catalog that the Flink catalog
links with.
LOCATION : the
location of the BigQuery
resources.
Your Flink session is now connected to
BigLake metastore, and you can run Flink SQL commands.
Manage BigLake metastore resources
Now that you're connected to BigLake metastore, you can create and view
resources based on the metadata stored in BigLake metastore.
For example, try running the following commands in your interactive
Flink SQL session to create an
Iceberg database and table.
Use the custom Iceberg catalog:
USE CATALOG CATALOG_NAME ;
Replace CATALOG_NAME with your
Flink catalog identifier.
Create a database, which creates a dataset in BigQuery:
CREATE DATABASE IF NOT EXISTS DATABASE_NAME ;
Replace DATABASE_NAME with the name of your new
database.
Use the database that you created:
USE DATABASE_NAME ;
Create an Iceberg table. The following creates an
example sales table:
CREATE TABLE IF NOT EXISTS ICEBERG_TABLE_NAME (
order_number BIGINT ,
price DECIMAL ( 32 , 2 ),
buyer ROW first_name STRING , last_name STRING > ,
order_time TIMESTAMP ( 3 )
);
Replace ICEBERG_TABLE_NAME with a name for your new
table.
View table metadata:
DESCRIBE EXTENDED ICEBERG_TABLE_NAME ;
List tables in the database:
SHOW TABLES ;
Ingest data into your table
After you create an Iceberg table in the previous section,
you can use Flink DataGen as a data source to ingest
real-time data into your table. The following steps are an example of this
workflow:
Create a temporary table using DataGen:
CREATE TEMPORARY TABLE DATABASE_NAME . TEMP_TABLE_NAME
WITH (
'connector' = 'datagen' ,
'rows-per-second' = '10' ,
'fields.order_number.kind' = 'sequence' ,
'fields.order_number.start' = '1' ,
'fields.order_number.end' = '1000000' ,
'fields.price.min' = '0' ,
'fields.price.max' = '10000' ,
'fields.buyer.first_name.length' = '10' ,
'fields.buyer.last_name.length' = '10'
)
LIKE DATABASE_NAME . ICEBERG_TABLE_NAME ( EXCLUDING ALL );
Replace the following:
DATABASE_NAME : the name of the database to store
your temporary table.
TEMP_TABLE_NAME : a name for your temporary table.
ICEBERG_TABLE_NAME : the name of the
Iceberg table that you created in the previous
section.
Set the parallelism to 1:
SET 'parallelism.default' = '1' ;
Set the checkpoint interval:
SET 'execution.checkpointing.interval' = '10second' ;
Set the checkpoint:
SET 'state.checkpoints.dir' = 'hdfs:///flink/checkpoints' ;
Start the real-time streaming job:
INSERT INTO ICEBERG_TABLE_NAME SELECT * FROM TEMP_TABLE_NAME ;
The output is similar to the following:
[INFO] Submitting SQL update statement to the cluster...
[INFO] SQL update statement has been successfully submitted to the cluster:
Job ID: 0de23327237ad8a811d37748acd9c10b
To check the status of the streaming job, do the following:
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Select your cluster.
Click the Web interfaces tab.
Click the YARN ResourceManager link.
In the YARN ResourceManager interface, find your
Flink session, and click the ApplicationMaster
link under Tracking UI .
In the Status column, confirm that your job status is Running .
Query streaming data in the Flink SQL client:
SELECT * FROM ICEBERG_TABLE_NAME
/*+ OPTIONS('streaming'='true', 'monitor-interval'='3s')*/
ORDER BY order_time desc
LIMIT 20 ;
Query streaming data in BigQuery:
SELECT * FROM ` DATABASE_NAME . ICEBERG_TABLE_NAME `
ORDER BY order_time desc
LIMIT 20 ;
Terminate the streaming job in the Flink SQL client:
STOP JOB ' JOB_ID ' ;
Replace JOB_ID with the job ID that was displayed in
the output when you created the streaming job.
Configure your metastore with Managed Service for Apache Spark
You can configure BigLake metastore with Managed Service for Apache Spark
using either Spark SQL or PySpark.
Spark SQL
Create a SQL file with the Spark SQL commands that
you want to run in BigLake metastore. For example, this command creates
a namespace and a table:
CREATE NAMESPACE ` CATALOG_NAME ` . NAMESPACE_NAME ;
CREATE TABLE ` CATALOG_NAME ` . NAMESPACE_NAME . TABLE_NAME ( id int , data string ) USING ICEBERG LOCATION ' WAREHOUSE_DIRECTORY ' ;
Replace the following:
CATALOG_NAME : the catalog name that references
your Spark table.
NAMESPACE_NAME : the namespace name that
references your Spark table.
TABLE_NAME : a table name for
your Spark table.
WAREHOUSE_DIRECTORY : the URI of the
Cloud Storage folder where your data warehouse is stored.
Submit a Spark SQL batch job by running the
following
gcloud dataproc batches submit spark-sql command :
gcloud dataproc batches submit spark-sql SQL_SCRIPT_PATH \
--project = PROJECT_ID \
--region = REGION \
--subnet = projects/ PROJECT_ID /regions/ REGION /subnetworks/ SUBNET_NAME \
--deps-bucket = BUCKET_PATH \
--properties = "spark.sql.catalog. CATALOG_NAME =org.apache.iceberg.spark.SparkCatalog, \
spark.sql.catalog. CATALOG_NAME .catalog-impl=org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog, \
spark.sql.catalog. CATALOG_NAME .gcp_project= PROJECT_ID , \
spark.sql.catalog. CATALOG_NAME .gcp_location= LOCATION , \
.sql.catalog. CATALOG_NAME .warehouse= WAREHOUSE_DIRECTORY "
Replace the following:
SQL_SCRIPT_PATH : the path to the SQL file that
the batch job uses.
PROJECT_ID : the ID of the Google Cloud project
to run the batch job in.
REGION : the region where your workload runs.
SUBNET_NAME (optional): the name of a VPC subnet
in the REGION that meets the
session subnet requirements .
BUCKET_PATH : the location of the
Cloud Storage bucket to upload workload dependencies.
The WAREHOUSE_DIRECTORY is located in this bucket.
The gs:// URI prefix of the bucket is not required. You can specify the
bucket path or bucket name, for example, mybucketname1 .
LOCATION : the location to run the batch job in.
For more information on submitting Spark batch jobs,
see Run a Spark batch workload .
PySpark
Create a python file with the PySpark commands that you want to run in
BigLake metastore.
For example, the following command sets up a Spark
environment to interact with Iceberg tables stored
in BigLake metastore. The command then creates a new namespace and an
Iceberg table within that namespace.
from pyspark . sql import SparkSession
spark = SparkSession . builder \
. appName ( "BigLake Metastore Iceberg" ) \
. config ( "spark.sql.catalog. CATALOG_NAME " , "org.apache.iceberg.spark.SparkCatalog" ) \
. config ( "spark.sql.catalog. CATALOG_NAME .catalog-impl" , "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog" ) \
. config ( "spark.sql.catalog. CATALOG_NAME .gcp_project" , " PROJECT_ID " ) \
. config ( "spark.sql.catalog. CATALOG_NAME .gcp_location" , " LOCATION " ) \
. config ( "spark.sql.catalog. CATALOG_NAME .warehouse" , " WAREHOUSE_DIRECTORY " ) \
. getOrCreate ()
spark . sql ( "USE ` CATALOG_NAME `;" )
spark . sql ( "CREATE NAMESPACE IF NOT EXISTS NAMESPACE_NAME ;" )
spark . sql ( "USE NAMESPACE_NAME ;" )
spark . sql ( "CREATE TABLE TABLE_NAME (id int, data string) USING ICEBERG LOCATION ' WAREHOUSE_DIRECTORY ';" )
Replace the following:
PROJECT_ID : the ID of the Google Cloud project
to run the batch job in.
LOCATION : the location
where the BigQuery resources are located.
CATALOG_NAME : the catalog name that references
your Spark table.
TABLE_NAME : a table name for
your Spark table.
WAREHOUSE_DIRECTORY : the URI of the
Cloud Storage folder where your data warehouse is stored.
NAMESPACE_NAME : the namespace name that
references your Spark table.
Submit the batch job using the following
gcloud dataproc batches submit pyspark command :
gcloud dataproc batches submit pyspark PYTHON_SCRIPT_PATH \
--version = 2 .2 \
--project = PROJECT_ID \
--region = REGION \
--deps-bucket = BUCKET_PATH \
--properties = "spark.sql.catalog. CATALOG_NAME =org.apache.iceberg.spark.SparkCatalog,spark.sql.catalog. CATALOG_NAME .catalog-impl=org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog,spark.sql.catalog. CATALOG_NAME .gcp_project= PROJECT_ID ,spark.sql.catalog. CATALOG_NAME .gcp_location= LOCATION ,spark.sql.catalog. CATALOG_NAME .warehouse= WAREHOUSE_DIRECTORY "
Replace the following:
PYTHON_SCRIPT_PATH : the path to the Python script
that the batch job uses.
PROJECT_ID : the ID of the Google Cloud project
to run the batch job in.
REGION : the region where your workload runs.
BUCKET_PATH : the location of the
Cloud Storage bucket to upload workload dependencies.
The gs:// URI prefix of the bucket is not required. You can specify
the bucket path or bucket name, for example, mybucketname1 .
For more information on submitting PySpark batch jobs, see the
PySpark gcloud reference .
What's next
Create and manage metastore resources .
Set up optional BigLake metastore features .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
