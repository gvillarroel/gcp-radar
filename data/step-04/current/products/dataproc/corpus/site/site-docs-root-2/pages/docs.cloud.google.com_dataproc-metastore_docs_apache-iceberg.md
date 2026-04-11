---
title: "Use Apache Iceberg tables with Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg
  title: "Use Apache Iceberg tables with Dataproc Metastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
Use Apache Iceberg tables with Dataproc Metastore
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to use Apache Iceberg tables with a
Dataproc Metastore service attached to a Managed Service for Apache Spark
cluster. Apache Iceberg is an open table
format for large analytical datasets.
Compatibilities
Iceberg tables support the following features.
Note: Writing an Iceberg table on Hive is not supported. Instead, you can create
an Iceberg table, insert data on Spark, and then read it on Hive.
Drivers
Select
Insert
Create Table
Spark
✓
✓
✓
Hive
✓
✓
Presto
✓
✓
✓
Before you begin
Create a Dataproc Metastore
service .
Attach Dataproc Metastore to a Managed Service for Apache Spark
cluster .
Use Iceberg table with Spark
The following example shows you should use Iceberg tables with Spark.
Iceberg tables support read and write operations. For more information, see
Apache Iceberg - Spark .
Spark Configurations
First, start the Spark shell and use a Cloud Storage bucket to store data.
In order to include Iceberg in the Spark installation, add the Iceberg Spark
Runtime JAR file to the Spark's JARs folder. To download the JAR file, see
Apache Iceberg Downloads .
The following command starts the Spark shell with support for Apache Iceberg:
$ spark-shell --conf spark.sql.warehouse.dir=gs:// BUCKET_NAME /spark-warehouse --jars /path/to/iceberg-spark-runtime.jar
Use Hive Catalog to create Iceberg tables
Set up Hive Catalog configurations to create Iceberg tables in the Spark Scala:
import org.apache.iceberg.hive.HiveCatalog
import org.apache.iceberg.catalog._
import org.apache.iceberg.Schema
import org.apache.iceberg.types.Types._
import org.apache.iceberg.PartitionSpec
import org.apache.iceberg.spark.SparkSchemaUtil
import org.apache.spark.sql._
import java.util.HashMap
Create a table to insert and update data. The following is an example.
Create a table called example under default database:
val catalog = new HiveCatalog();
catalog.setConf(spark.sparkContext.hadoopConfiguration);
catalog.initialize("hive", new HashMap[String,String]());
val name = TableIdentifier.of("default","example");
Insert sample data:
val df1 = Seq((1,"Vincent","Computer Science"),(2,"Dan", "Economics"),(3,"Bob", "Politics"),(4,"Cindy", "UX Design")).toDF("id","name","major");
val df1_schema = SparkSchemaUtil.convert(df1.schema);
Specify partition strategy based on column id :
val partition_spec=PartitionSpec.builderFor(df1_schema).identity("id").build;
Create the table:
val table=catalog.createTable(name,df1_schema,partition_spec);
Add the Iceberg Storage Handler and SerDe as the table property:
table.updateProperties().set("engine.hive.enabled", "true").commit();
Write the data to the table:
df1.write.format("iceberg").mode("overwrite").save("default.example");
Read the data:
val read_df1 = spark . read . format ( "iceberg" ) . load ( "default.example" );
read_df1 . show ;
Change the table schema. The following is an example.
Get the table and add a new column grade :
val table = catalog . loadTable ( TableIdentifier . of ( "default" , "example" ));
table . updateSchema . addColumn ( "grade" , StringType . get ()) . commit ();
Check the new table schema:
table.schema.toString;
Insert more data and view the schema evolution. The following is an example.
Add new data to the table:
val df2=Seq((5,"Amy","UX Design","Sophomore")).toDF("id","name","major","grade");
df2.write.format("iceberg").mode("append").save("default.example");
val df3=Seq((6,"Rachael","Economics","Freshman")).toDF("id","name","major","grade");
df3.write.format("iceberg").mode("append").save("default.example");
Check the inserted new data:
val read_df2 = spark . read . format ( "iceberg" ) . load ( "default.example" );
read_df2 . show ;
View the table history:
spark . read . format ( "iceberg" ) . load ( "default.example.history" ) . show ( truncate = false );
View the snapshots:
spark . read . format ( "iceberg" ) . load ( "default.example.snapshots" ) . show ( truncate = false );
View the manifest files:
spark . read . format ( "iceberg" ) . load ( "default.example.manifests" ) . show ( truncate = false );
View the data files:
spark . read . format ( "iceberg" ) . load ( "default.example.files" ) . show ( truncate = false );
Assume you made a mistake by adding the row with the value of id=6 and
want to go back to see a correct version of the table:
spark . read . format ( "iceberg" ) . option ( "snapshot-id" , "2273922295095144317" ) . load ( "default.example" ) . show ();
Replace snapshot-id with the version you want to go back to.
Use Hadoop Tables to create Iceberg tables
Set up Hadoop Table configurations to create Iceberg tables in the Spark Scala:
import org.apache.hadoop.conf.Configuration
import org.apache.iceberg.hadoop.HadoopTables
import org.apache.iceberg.Table
import org.apache.iceberg.Schema
import org.apache.iceberg.types.Types._
import org.apache.iceberg.PartitionSpec
import org.apache.iceberg.spark.SparkSchemaUtil
import org.apache.spark.sql._
Create a table to insert and update data. The following is an example.
Create a table called example under default database:
val conf = new Configuration();
val tables = new HadoopTables(conf);
Insert sample data:
val df1 = Seq((1,"Vincent","Computer Science"),(2,"Dan", "Economics"),(3,"Bob", "Politics"),(4,"Cindy", "UX Design")).toDF("id","name","major");
val df1_schema = SparkSchemaUtil.convert(df1.schema);
Specify partition strategy based on column id :
val partition_spec=PartitionSpec.builderFor(df1_schema).identity("id").build;
Create the table:
val table_location = "gs://<gcs-bucket-name>/hive-warehouse/<database-name>" ;
val table = tables . create ( df1_schema , partition_spec , table_location );
Write the data to the table:
df1.write.format("iceberg").mode("overwrite").save(table_location);
Read the data:
val read_df1 = spark . read . format ( "iceberg" ) . load ( table_location );
read_df1 . show ;
Change the table schema. The following is an example.
Get the table and add a new column grade :
val table = tables . load ( table_location );
table . updateSchema . addColumn ( "grade" , StringType . get ()) . commit ();
Check the new table schema:
table.schema.toString;
Insert more data and view the schema evolution. The following is an example.
Add new data to the table:
val df2=Seq((5,"Amy","UX Design","Sophomore")).toDF("id","name","major","grade");
df2.write.format("iceberg").mode("append").save(table_location);
val df3=Seq((6,"Rachael","Economics","Freshman")).toDF("id","name","major","grade");
df3.write.format("iceberg").mode("append").save(table_location);
Check the inserted new data:
val read_df2 = spark . read . format ( "iceberg" ) . load ( table_location );
read_df2 . show ;
View the table history:
spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#history" ) . show ( truncate = false );
View the snapshots:
spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#snapshots" ) . show ( truncate = false );
View the manifest files:
spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#manifests" ) . show ( truncate = false );
View the data files:
spark . read . format ( "iceberg" ) . load ( "gs://<gcs-bucket-name>/hive-warehouse/<database-name>#files" ) . show ( truncate = false );
Go back to see a specific version of the table:
spark . read . format ( "iceberg" ) . option ( "snapshot-id" , "3943776515926014142L" ) . format ( "iceberg" ) . load ( table_location ) . show ;
Replace snapshot-id with the version you want to go back to and add "L"
to the end. For example, "3943776515926014142L" .
Use Iceberg table on Hive
Iceberg supports tables read using Hive by using a StorageHandler . Note
that only Hive 2.x and 3.1.2 versions are supported. For more information, see
Apache Iceberg - Hive . In
addition, add the Iceberg Hive Runtime JAR file to the Hive classpath. To
download the JAR file, see Apache Iceberg Downloads .
In order to overlay a Hive table on top of an Iceberg table, you must create the
Iceberg table using either a Hive Catalog or a Hadoop Table. In addition, you
must configure Hive accordingly to read data from the Iceberg table.
Read Iceberg table (Hive Catalog) on Hive
Open the Hive client and set up configurations to read Iceberg tables on Hive
client session:
add jar /path/to/iceberg-hive-runtime.jar;
set iceberg.engine.hive.enabled=true;
set engine.hive.enabled=true;
set iceberg.mr.catalog=hive;
set hive.vectorized.execution.enabled=false;
Read table schema and data. The following is an example.
Check the table schema and whether the table format is Iceberg:
describe formatted example;
Read the data from the table:
select * from example;
Read Iceberg table (Hadoop Table) on Hive
Open the Hive client and set up configurations to read Iceberg tables on Hive
client session:
add jar /path/to/iceberg-hive-runtime.jar;
set engine.hive.enabled=true;
set hive.vectorized.execution.enabled=false;
Read table schema and data. The following is an example.
Create an external table (overlay a Hive table on top of the Iceberg table):
CREATE EXTERNAL TABLE hadoop_table
STORED BY 'org.apache.iceberg.mr.hive.HiveIcebergStorageHandler'
LOCATION 'gs://<gcs-bucket-name>/hive-warehouse/<database-name>'
TBLPROPERTIES ( 'iceberg.catalog' = 'gs://<gcs-bucket-name>/hive-warehouse/<database-name>' );
Check the table schema and whether the table format is Iceberg:
describe formatted hadoop_table;
Read the data from the table:
select * from hadoop_table;
Use Iceberg table on Presto
Presto queries use the Hive connector to get partition locations, so you must
configure Presto accordingly to read and write data on the Iceberg table. For
more information, see Presto/Trino - Hive Connector
and Presto/Trino - Iceberg Connector .
Presto Configurations
Under each Managed Service for Apache Spark cluster node, create a file named
iceberg.properties /etc/presto/conf/catalog/iceberg.properties and
configure the hive.metastore.uri as follows:
connector.name=iceberg
hive.metastore.uri=thrift://<example.net:9083>
Replace example.net:9083 with the correct host and port for your Hive
metastore Thrift service.
Restart the Presto service to push the configurations:
sudo systemctl restart presto.service
Note: You can use presto-admin tool
to update all the nodes in Batch.
Create Iceberg table on Presto
Open the Presto client and use the "Iceberg" connector to get the
metastore:
--catalog iceberg --schema default
Create a table to insert and update data. The following is an example.
Create a table called example under default database:
CREATE TABLE iceberg.default.example (
id integer,
name VARCHAR,
major VARCHAR,
grade VARCHAR)
WITH (partitioning = ARRAY['major', 'grade']);
Insert sample data:
INSERT INTO iceberg.default.example
VALUES (1, 'Vincent', 'Computer Science', 'Junior'), (2,'Dan', 'Economics', 'Senior'), (3,'Bob', 'Politics', 'Freshman');
Read data from the table:
SELECT * FROM iceberg.default.example;
Insert more new data to check snapshots:
INSERT INTO example
VALUES (4, 'Cindy', 'UX Design', 'Junior');
INSERT INTO example
VALUES (5, 'Amy', 'UX Design', 'Sophomore');
View the snapshots:
SELECT snapshot_id FROM iceberg.default."example$snapshots";
By adding the command ORDER BY committed_at DESC LIMIT 1; , you can find the latest snapshot ID.
Roll back to a specific version of the table:
CALL iceberg.system.rollback_to_snapshot('default', 'example', 8424394414541782448);
Replace snapshot-id with the version you want to go back to.
What's next
Manage a service .
Import metadata into a service .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
