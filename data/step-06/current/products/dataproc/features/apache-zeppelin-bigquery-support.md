---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.693Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Apache Zeppelin BigQuery support"
feature_slug: "apache-zeppelin-bigquery-support"
latest_feature_date: "2016-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies"
  - "https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg"
keywords:
  - "apache"
  - "zeppelin"
  - "bigquery"
  - "dataproc"
  - "packaged"
  - "upgrade"
  - "adds"
---

# Apache Zeppelin BigQuery support

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc-packaged Apache Zeppelin upgrade adds support for Google BigQuery.

## Extended Definition

The Dataproc-packaged Apache Zeppelin upgrade adds support for Google BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)

## Supporting Pages

### "Manage Java and Scala dependencies for Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a shaded JAR with SBT, add the sbt-assembly plugin to your build definition, first by creating a file called assembly.sbt under the project/ directory: ├── src/ └── build.sbt └── project/ └── assembly.sbt ... then by adding the following line in assembly.sbt : addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "0.14.6") The following is a sample build.sbt configuration file that shades the Guava library, which is located in the com.google.common package : lazy val commonSettings = Seq ( organization := "YOUR GROUP ID" , name := "YOUR ARTIFACT ID" , version := "YOUR PACKAGE VERSION" , scalaVersion := "YOUR SCALA VERSION" , ) lazy val shaded = ( project in file ( "." )) . settings ( commonSettings ) mainClass in ( Compile , packageBin ) := Some ( "YOUR APPLICATION MAIN CLASS" ) libraryDependencies ++= Seq ( "org.apache.spark" % "spark-sql 2.11" % "YOUR SPARK VERSION" % "provided" , // YOUR DEPENDENCIES ) assemblyShadeRules in assembly := Seq ( ShadeRule . rename ( "com.google.common. " - > "repackaged.com.google.common.@1" ). inAll ) To run the build: sbt assembly Notes about build.sbt : The shade rule in the preceding example may not solve all dependency conflicts because SBT uses strict conflict resolution strategies.
- This configuration instructs Maven to rename the com.google.common package to repackaged.com.google.common and to update all references to the classes from the original package. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < groupId >< ! -- YOUR GROUP ID --></ groupId > < artifactId >< ! -- YOUR ARTIFACT ID --></ artifactId > < version >< ! -- YOUR PACKAGE VERSION --></ version > < dependencies > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - sql 2 .11 < / artifactId > < version >< ! -- YOUR SPARK VERSION --></ version > < scope>provided < / scope > < / dependency > < ! -- YOUR DEPENDENCIES -- > < / dependencies > < build > < plugins > < plugin > < groupId>net . alchim31 . maven < / groupId > < artifactId>scala - maven - plugin < / artifactId > < executions > < execution > < goals > < goal>compile < / goal > < goal>testCompile < / goal > < / goals > < / execution > < / executions > < configuration > < scalaVersion >< ! -- YOUR SCALA VERSION --></ scalaVersion > < / configuration > < / plugin > < plugin > < groupId>org . apache . maven . plugins < / groupId > < artifactId>maven - shade - plugin < / artifactId > < executions > < execution > < phase>package < / phase > < goals > < goal>shade < / goal > < / goals > < configuration > < transformers > < transformer implementation = "org.apache.maven.plugins.shade.resource.ManifestResourceTransformer" > < mainClass >< ! -- YOUR APPLICATION MAIN CLASS --></ mainClass > < / transformer > < ! -- This is needed if you have dependencies that use Service Loader .
- Most Google Cloud client libraries do . -- > < transformer implementation = "org.apache.maven.plugins.shade.resource.ServicesResourceTransformer" / > < / transformers > < filters > < filter > < artifact > : </ artifact > < excludes > < exclude>META - INF / maven / </ exclude > < exclude>META - INF / .SF</exclude> <exclude>META-INF/ .DSA</exclude> <exclude>META-INF/ .RSA</exclude> </excludes> </filter> </filters> <relocations> <relocation> <pattern>com</pattern> <shadedPattern>repackaged.com.google.common</shadedPattern> <includes> <include>com.google.common. </ include > < / includes > < / relocation > < / relocations > < / configuration > < / execution > < / executions > < / plugin > < / plugins > < / build > < / project > To run the build: mvn package Notes about pom.xml : ManifestResourceTransformer processes attributes in the uber JAR's manifest file ( MANIFEST.MF ).
- The next example shades the Guava and Protobuf libraries. assemblyShadeRules in assembly := Seq ( ShadeRule . rename ( "com.google.common. " - > "repackaged.com.google.common.@1" ). inAll , ShadeRule . rename ( "com.google.protobuf. " - > "repackaged.com.google.protobuf.@1" ). inAll ) Submit the uber JAR to Managed Service for Apache Spark After you have created a shaded uber JAR that contains your Spark applications and its dependencies, you are ready to submit a job to Managed Service for Apache Spark.

### "Create an Apache Iceberg table with metadata in BigLake metastore \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- Source ID: `site-iam-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Copy the following PySpark code into your Zeppelin notebook after filling in the variables. %pyspark from pyspark.sql import SparkSession project id = " PROJECT ID " catalog = " CATALOG NAME " namespace = " NAMESPACE " location = " LOCATION " warehouse dir = "gs:// BUCKET / WAREHOUSE DIRECTORY " spark = SparkSession.builder \ .appName ( "BigQuery Metastore Iceberg" ) \ .config ( f "spark.sql.catalog.{catalog}" , "org.apache.iceberg.spark.SparkCatalog" ) \ .config ( f "spark.sql.catalog.{catalog}.catalog-impl" , "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog" ) \ .config ( f "spark.sql.catalog.{catalog}.gcp project" , f "{project id}" ) \ .config ( f "spark.sql.catalog.{catalog}.gcp location" , f "{location}" ) \ .config ( f "spark.sql.catalog.{catalog}.warehouse" , f "{warehouse dir}" ) \ .getOrCreate () spark.sql ( f "USE {catalog};" ) spark.sql ( f "CREATE NAMESPACE IF NOT EXISTS {namespace};" ) spark.sql ( f "USE {namespace}`;" ) \# Create table and display schema ( without LOCATION ) spark.sql ( "DROP TABLE IF EXISTS example iceberg table" ) spark.sql ( "CREATE TABLE example iceberg table (id int, data string) USING ICEBERG" ) spark.sql ( "DESCRIBE example iceberg table;" ) \# Insert table data. spark.sql ( "INSERT INTO example iceberg table VALUES (1, 'first row');" ) \# Alter table, then display schema. spark.sql ( "ALTER TABLE example iceberg table ADD COLUMNS (newDoubleCol double);" ) \# Select and display the contents of the table. spark.sql ( "SELECT FROM example iceberg table" ) .show () Replace the following: PROJECT ID : Your Google Cloud project ID.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit Request JSON body: { "projectId": " PROJECT ID ", "job": { "placement": { "clusterName": " CLUSTER NAME " }, "statusHistory": [], "reference": { "jobId": "", "projectId": " PROJECT ID " }, "sparkSqlJob": { "properties": { "spark.sql.catalog." CATALOG NAME ": "org.apache.iceberg.spark.SparkCatalog", "spark.sql.catalog." CATALOG NAME ".catalog-impl": "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog", "spark.sql.catalog." CATALOG NAME ".gcp project": " PROJECT ID ", "spark.sql.catalog." CATALOG NAME ".gcp location": " LOCATION ", "spark.sql.catalog." CATALOG NAME ".warehouse": "gs:// BUCKET / WAREHOUSE FOLDER " }, "jarFileUris": [ "gs:// BUCKET /iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " ], "scriptVariables": {}, "queryFileUri": "gs:// BUCKET /iceberg-table.sql" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- OSS database to BigQuery dataset mapping Note the following mapping between open source database and BigQuery dataset terms: OSS database BigQuery dataset Namespace, Database Dataset Partitioned or Unpartitioned Table Table View View Create an Iceberg table This section shows you how to create an Iceberg table with metadata in BigLake metastore by submitting a Spark SQL code to the Managed Service for Apache Spark service , the Spark SQL CLI , and the Zeppelin component web interface, which run on a Managed Service for Apache Spark cluster.
- In a local terminal window or in Cloud Shell , run the following curl command to download the iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file to the current directory. curl -o iceberg-spark-runtime-3.5 2.12-1.6.1.jar https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar Uses the gcloud CLI to copy the local iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file from the current directory to your bucket in Cloud Storage. gcloud storage cp iceberg-spark-runtime-3.5 2.12-1.6.1.jar gs:// BUCKET / Submit the Spark SQL job Select a tab to follow the instructions to submit the Spark SQL job to the Managed Service for Apache Spark service using the gcloud CLI, Google Cloud console, or Managed Service for Apache Spark REST API. gcloud Run the following gcloud dataproc jobs submit spark-sql command locally in a local terminal window or in Cloud Shell to submit the Spark SQL job to create the Iceberg table. gcloud dataproc jobs submit spark-sql \ --project= PROJECT ID \ --cluster= CLUSTER NAME \ --region= REGION \ --jars="gs:// BUCKET /1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " \ --properties="spark.sql.catalog.

### Use Apache Iceberg tables with Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)
- Source ID: `site-docs-root-2`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Use Apache Iceberg tables with Dataproc Metastore Stay organized with collections Save and categorize content based on your preferences.
- This page explains how to use Apache Iceberg tables with a Dataproc Metastore service attached to a Managed Service for Apache Spark cluster.
- Attach Dataproc Metastore to a Managed Service for Apache Spark cluster .
- Create an external table (overlay a Hive table on top of the Iceberg table): CREATE EXTERNAL TABLE hadoop table STORED BY 'org.apache.iceberg.mr.hive.HiveIcebergStorageHandler' LOCATION 'gs://<gcs-bucket-name>/hive-warehouse/<database-name>' TBLPROPERTIES ( 'iceberg.catalog' = 'gs://<gcs-bucket-name>/hive-warehouse/<database-name>' ); Check the table schema and whether the table format is Iceberg: describe formatted hadoop table; Read the data from the table: select from hadoop table; Use Iceberg table on Presto Presto queries use the Hive connector to get partition locations, so you must configure Presto accordingly to read and write data on the Iceberg table.

