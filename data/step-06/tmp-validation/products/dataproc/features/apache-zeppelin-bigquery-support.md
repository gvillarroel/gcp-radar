---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.209Z"
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
  - "https://docs.cloud.google.com/dataproc/docs/guides/logging"
keywords:
  - "packaged"
  - "upgrade"
  - "zeppelin"
  - "apache"
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

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)

## Supporting Pages

### "Manage Java and Scala dependencies for Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

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
- OSS database to BigQuery dataset mapping Note the following mapping between open source database and BigQuery dataset terms: OSS database BigQuery dataset Namespace, Database Dataset Partitioned or Unpartitioned Table Table View View Create an Iceberg table This section shows you how to create an Iceberg table with metadata in BigLake metastore by submitting a Spark SQL code to the Managed Service for Apache Spark service , the Spark SQL CLI , and the Zeppelin component web interface, which run on a Managed Service for Apache Spark cluster.
- This document shows you how to create an Apache Iceberg table with metadata in BigLake metastore using the Managed Service for Apache Spark Jobs service, the Spark SQL CLI or the Zeppelin web interface running on a Managed Service for Apache Spark cluster.
- Zeppelin web interface The following steps show you how to to create an Iceberg table with table metadata stored in BigLake metastore using the Zeppelin web interface running on the master node of a Managed Service for Apache Spark cluster .

### Managed Service for Apache Spark logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- Source ID: `site-iam-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Log Type Log Name Description Notes Master daemon logs hadoop-hdfs hadoop-hdfs-namenode hadoop-hdfs-secondarynamenode hadoop-hdfs-zkfc hadoop-yarn-resourcemanager hadoop-yarn-timelineserver hive-metastore hive-server2 hadoop-mapred-historyserver zookeeper Journal node HDFS namenode HDFS secondary namenode Zookeeper failover controller YARN resource manager YARN timeline server Hive metastore Hive server2 Mapreduce job history server Zookeeper server Worker daemon logs hadoop-hdfs-datanode hadoop-yarn-nodemanager HDFS datanode YARN nodemanager System logs autoscaler google.dataproc.agent google.dataproc.startup Managed Service for Apache Spark autoscaler log Managed Service for Apache Spark agent log Managed Service for Apache Spark startup script log + initialization action log Extended (additional) logs knox gateway-audit zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server All logs inside /var/log/ subdirectories matching: knox (includes gateway-audit.log) zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server Setting the dataproc:dataproc.logging.extended.enabled=false property disables the collection of extended logs on the cluster VM syslogs syslog Syslogs from cluster's master and worker nodes Setting the dataproc:dataproc.logging.syslog.enabled=false property disables the collection of VM syslogs on the cluster Access cluster logs in Cloud Logging You can access Managed Service for Apache Spark cluster logs using the Logs Explorer , the gcloud logging command, or the Logging API .
- The following command uses cluster labels to filter the returned log entries. gcloud logging read <<'EOF' "resource.type=cloud dataproc cluster resource.labels.region= cluster-region resource.labels.cluster name= cluster-name resource.labels.cluster uuid= cluster-uuid " EOF Sample output (partial): jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-cluster-name-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager --- jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-component-gateway-cluster-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager Run gcloud dataproc clusters describe cluster-name --region= region to list cluster labels that you can use to filter logging results.
- The following command uses cluster labels to filter the returned log entries. gcloud logging read \ "resource.type=cloud dataproc job \ resource.labels.region= cluster-region \ resource.labels.job id= my-job-id " Sample output (partial): jsonPayload: class: org.apache.hadoop.hdfs.StateChange filename: hadoop-hdfs-namenode-test-dataproc-resize-cluster-20190410-38an-m-0.log ,,, logName: projects/project-id/logs/hadoop-hdfs-namenode --- jsonPayload: class: SecurityLogger.org.apache.hadoop.security.authorize.ServiceAuthorizationManager filename: cluster-name-dataproc-resize-cluster-20190410-38an-m-0.log ... logName: projects/google.com:hadoop-cloud-dev/logs/hadoop-hdfs-namenode REST API You can use the Logging REST API to list log entries (see entries.list ).
- Example: Set the DEBUG logging level when submitting a Spark job that reads Cloud Storage files. gcloud dataproc jobs submit spark ...\ --driver-log-levels org.apache.spark=DEBUG,com.google.cloud.hadoop.gcsio=DEBUG Example: Set the root logger level to WARN , com.example logger level to INFO . gcloud dataproc jobs submit hadoop ...\ --driver-log-levels root=WARN,com.example=INFO Spark executor logging levels To configure Spark executor logging levels: Prepare a log4j config file, and then upload it to Cloud Storage Copy and customize the default log4j config located in /etc/spark/conf/ .

