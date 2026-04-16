---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.107Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Gemini-assisted troubleshooting for Serverless Spark"
feature_slug: "gemini-assisted-troubleshooting-for-serverless-spark"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies"
keywords:
  - "assisted"
  - "gemini"
  - "troubleshooting"
  - "workloads"
  - "serverless"
  - "includes"
  - "spark"
---

# Gemini-assisted troubleshooting for Serverless Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark includes Gemini-assisted troubleshooting for supported Spark workloads.

## Extended Definition

Dataproc Serverless for Spark includes Gemini-assisted troubleshooting for supported Spark workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)

## Supporting Pages

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Gemini CLI generates a transform hive to bigquery.py file that is similar to the following: import argparse from pyspark.sql import SparkSession from data transformer import add insertion time column def transform hive to bigquery ( spark : SparkSession , hive database : str , hive table : str , bq table : str , bq temp gcs bucket : str ): """ Reads a Hive table, adds an insertion time column, and writes to a BigQuery table.
- Input the following prompt to Gemini CLI: Create a PySpark transform hive to bigquery.py script to extract and transform a Hive table, adding an insertion time column using the add insertion time column function in @data transformer.py.
- BQ TABLE \ --bq temp gcs bucket = BUCKET NAME Migrate a table from Postgres to MySQL This section shows how to prompt Gemini to generate a Java Spark application that migrates a table from a Postgres database to a MySQL database.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- The improved Cloud Storage connector minimizes metadata operations to reduce costs, while an optimized file output committer unlocks performance and reliability for Spark workloads.
- Create a set of directories with the path src/main/java/dataproc/codelab : mkdir -p src/main/java/dataproc/codelab Copy WordCount.java to your local machine into src/main/java/dataproc/codelab : cp WordCount.java src/main/java/dataproc/codelab WordCount.java is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab ; import java.util.Arrays ; import org.apache.spark.SparkConf ; import org.apache.spark.api.java.JavaPairRDD ; import org.apache.spark.api.java.JavaRDD ; import org.apache.spark.api.java.JavaSparkContext ; import scala.Tuple2 ; public class WordCount { public static void main ( String [] args ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputUri> <outputUri>" ); } String inputPath = args [ 0 ] ; String outputPath = args [ 1 ] ; JavaSparkContext sparkContext = new JavaSparkContext ( new SparkConf (). setAppName ( "Word Count" )); JavaRDD<String> lines = sparkContext . textFile ( inputPath ); JavaRDD<String> words = lines . flatMap ( ( String line ) - > Arrays . asList ( line . split ( " " )). iterator () ); JavaPairRDD<String , Integer > wordCounts = words . mapToPair ( ( String word ) - > new Tuple2 <> ( word , 1 ) ). reduceByKey ( ( Integer count1 , Integer count2 ) - > count1 + count2 ); wordCounts . saveAsTextFile ( outputPath ); } } Build the package. mvn clean package If the build is successful, a target/word-count-1.0.jar is created.
- Note that the spark-core artifact number is the Scala major.minor version number. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < groupId>dataproc . codelab < / groupId > < artifactId>word - count < / artifactId > < version>1 .0 < / version > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < dependencies > < dependency > < groupId>org . scala - lang < / groupId > < artifactId>scala - library < / artifactId > < version> Scala version , for example , 2.11.8 < / version > < scope>provided < / scope > < / dependency > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - core Scala major . minor . version , for example , 2.11 < / artifactId > < version> Spark version , for example , 2.3.1 < / version > < scope>provided < / scope > < / dependency > < / dependencies > < / project > Copy the WordCount.java code listed, below, to your local machine.

### "Manage Java and Scala dependencies for Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- This configuration instructs Maven to rename the com.google.common package to repackaged.com.google.common and to update all references to the classes from the original package. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < groupId >< ! -- YOUR GROUP ID --></ groupId > < artifactId >< ! -- YOUR ARTIFACT ID --></ artifactId > < version >< ! -- YOUR PACKAGE VERSION --></ version > < dependencies > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - sql 2 .11 < / artifactId > < version >< ! -- YOUR SPARK VERSION --></ version > < scope>provided < / scope > < / dependency > < ! -- YOUR DEPENDENCIES -- > < / dependencies > < build > < plugins > < plugin > < groupId>net . alchim31 . maven < / groupId > < artifactId>scala - maven - plugin < / artifactId > < executions > < execution > < goals > < goal>compile < / goal > < goal>testCompile < / goal > < / goals > < / execution > < / executions > < configuration > < scalaVersion >< ! -- YOUR SCALA VERSION --></ scalaVersion > < / configuration > < / plugin > < plugin > < groupId>org . apache . maven . plugins < / groupId > < artifactId>maven - shade - plugin < / artifactId > < executions > < execution > < phase>package < / phase > < goals > < goal>shade < / goal > < / goals > < configuration > < transformers > < transformer implementation = "org.apache.maven.plugins.shade.resource.ManifestResourceTransformer" > < mainClass >< ! -- YOUR APPLICATION MAIN CLASS --></ mainClass > < / transformer > < ! -- This is needed if you have dependencies that use Service Loader .
- To create a shaded JAR with SBT, add the sbt-assembly plugin to your build definition, first by creating a file called assembly.sbt under the project/ directory: ├── src/ └── build.sbt └── project/ └── assembly.sbt ... then by adding the following line in assembly.sbt : addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "0.14.6") The following is a sample build.sbt configuration file that shades the Guava library, which is located in the com.google.common package : lazy val commonSettings = Seq ( organization := "YOUR GROUP ID" , name := "YOUR ARTIFACT ID" , version := "YOUR PACKAGE VERSION" , scalaVersion := "YOUR SCALA VERSION" , ) lazy val shaded = ( project in file ( "." )) . settings ( commonSettings ) mainClass in ( Compile , packageBin ) := Some ( "YOUR APPLICATION MAIN CLASS" ) libraryDependencies ++= Seq ( "org.apache.spark" % "spark-sql 2.11" % "YOUR SPARK VERSION" % "provided" , // YOUR DEPENDENCIES ) assemblyShadeRules in assembly := Seq ( ShadeRule . rename ( "com.google.common. " - > "repackaged.com.google.common.@1" ). inAll ) To run the build: sbt assembly Notes about build.sbt : The shade rule in the preceding example may not solve all dependency conflicts because SBT uses strict conflict resolution strategies.
- Most Google Cloud client libraries do . -- > < transformer implementation = "org.apache.maven.plugins.shade.resource.ServicesResourceTransformer" / > < / transformers > < filters > < filter > < artifact > : </ artifact > < excludes > < exclude>META - INF / maven / </ exclude > < exclude>META - INF / .SF</exclude> <exclude>META-INF/ .DSA</exclude> <exclude>META-INF/ .RSA</exclude> </excludes> </filter> </filters> <relocations> <relocation> <pattern>com</pattern> <shadedPattern>repackaged.com.google.common</shadedPattern> <includes> <include>com.google.common. </ include > < / includes > < / relocation > < / relocations > < / configuration > < / execution > < / executions > < / plugin > < / plugins > < / build > < / project > To run the build: mvn package Notes about pom.xml : ManifestResourceTransformer processes attributes in the uber JAR's manifest file ( MANIFEST.MF ).

