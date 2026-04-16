---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.604Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Serverless for Spark runtime versions 1.0.22 and 2.0.2"
feature_slug: "dataproc-serverless-for-spark-runtime-versions-1-0-22-and-2-0-2"
latest_feature_date: "2022-11-11"
deprecation_date: "2022-11-11"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
keywords:
  - "dataproc"
  - "serverless"
  - "spark"
  - "runtime"
  - "versions"
  - "22"
  - "were"
  - "deprecated"
---

# Dataproc Serverless for Spark runtime versions 1.0.22 and 2.0.2

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark runtime versions 1.0.22 and 2.0.2 were deprecated for new batch submissions; deprecated on 2022-11-11.

## Extended Definition

Dataproc Serverless for Spark runtime versions 1.0.22 and 2.0.2 were deprecated for new batch submissions; deprecated on 2022-11-11.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)

## Supporting Pages

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- DP IMAGE : Managed Service for Apache Spark image version must be 2.0.49 or later ( --image-version=2.0 will use a qualified minor version later than 2.0.49 ). --optional-components=DOCKER : Enables the Docker component on the cluster. --properties flag: dataproc:yarn.docker.enable=true : Required property to enable the Managed Service for Apache Spark Docker on YARN feature. dataproc:yarn.docker.image : Optional property that you can add to specify your DOCKER IMAGE using the following Container Registry image naming format: {hostname}/{project-id}/{image}:{tag} .
- JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.yarn.appMasterEnv.PYTHONPATH=/opt/python/packages" JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.executorEnv.PYTHONPATH=/opt/python/packages" Notes: See Launching Applications Using Docker Containers information on related properties. gcloud Submit the job to the cluster. gcloud dataproc jobs submit pyspark PYFILE \ --cluster= CLUSTER NAME \ --region= REGION \ --properties=${JOB PROPERTIES} Replace the following; PYFILE : The file path to your PySpark job file.

### "Managed Service for Apache Spark on GKE release versions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Spark Engine 3.5 Component 3.5-dataproc-22 3.5-dataproc-17 Apache Spark 3.5.0 3.5.0 Hadoop Libraries 3.3.6 3.3.6 Cloud Storage Connector 3.0.0 3.0.0 Java 11 11 Python 3.8.5 3.8.5 Conda 4.9.2 4.9.2 R 4.3.0 4.3.0 Spark Engine 3.1(Deprecated) Component 3.1-dataproc-17 3.1-dataproc-16 3.1-dataproc-15 3.1-dataproc-14 Apache Spark 3.1.3 3.1.3 3.1.3 3.1.3 Hadoop Libraries 3.2.3 3.2.3 3.2.3 3.2.3 Cloud Storage Connector hadoop3-2.2.13 hadoop3-2.2.13 hadoop3-2.2.11 hadoop3-2.2.11 Java 8 8 8 8 Python 3.8.5 3.8.5 3.8.5 3.8.5 Conda 4.9.2 23.5.0 4.9.2 4.9.2 R 4.3.0 4.3.0 4.2.3 4.2.3 Spark Engine 2.4(Deprecated) Spark 2.4 has reached EOL for support in DPGKE.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Component 2.4-dataproc-17 2.4-dataproc-16 2.4-dataproc-15 2.4-dataproc-14 Apache Spark 2.4.8 2.4.8 2.4.8 2.4.8 Hadoop Libraries 2.10.2 2.10.2 2.10.2 2.10.2 Cloud Storage Connector hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 Java 8 8 8 8 Python 3.7.4 3.7.4 3.7.4 3.7.4 Conda 4.7.12 22.11.1 22.11.1 22.1.0 R 3.6.3 3.6.3 3.6.3 3.6.3 Spark version formats on Managed Service for Apache Spark on GKE A fully qualified Spark engine release version is expressed as: 3.1-dataproc-[NUMBER] or 3.5-dataproc-[NUMBER] , for example, 3.1-dataproc-17 or 3.5-dataproc-17 .
- 3.5 - Most recent version of Spark engine with a Spark major.minor version of 3.5. dataproc-2.2 - Most recent version of Spark engine that is compatible with Managed Service for Apache Spark 2.2 images. latest - Most recent version of Spark engine.

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Replace the version placeholders in the file to show the Spark and Scala library versions used by your cluster's image version . scalaVersion := " Scala version, for example, 2.11.8 " name := "word-count" organization := "dataproc.codelab" version := "1.0" libraryDependencies ++ = Seq ( "org.scala-lang" % "scala-library" % scalaVersion . value % "provided" , "org.apache.spark" %% "spark-core" % " Spark version, for example, 2.3.1 " % "provided" ) Copy word-count.scala to your local machine.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Create a set of directories with the path src/main/java/dataproc/codelab : mkdir -p src/main/java/dataproc/codelab Copy WordCount.java to your local machine into src/main/java/dataproc/codelab : cp WordCount.java src/main/java/dataproc/codelab WordCount.java is a Spark job in Java that reads text files from Cloud Storage, performs a word count, then writes the text file results to Cloud Storage. package dataproc.codelab ; import java.util.Arrays ; import org.apache.spark.SparkConf ; import org.apache.spark.api.java.JavaPairRDD ; import org.apache.spark.api.java.JavaRDD ; import org.apache.spark.api.java.JavaSparkContext ; import scala.Tuple2 ; public class WordCount { public static void main ( String [] args ) { if ( args . length != 2 ) { throw new IllegalArgumentException ( "Exactly 2 arguments are required: <inputUri> <outputUri>" ); } String inputPath = args [ 0 ] ; String outputPath = args [ 1 ] ; JavaSparkContext sparkContext = new JavaSparkContext ( new SparkConf (). setAppName ( "Word Count" )); JavaRDD<String> lines = sparkContext . textFile ( inputPath ); JavaRDD<String> words = lines . flatMap ( ( String line ) - > Arrays . asList ( line . split ( " " )). iterator () ); JavaPairRDD<String , Integer > wordCounts = words . mapToPair ( ( String word ) - > new Tuple2 <> ( word , 1 ) ). reduceByKey ( ( Integer count1 , Integer count2 ) - > count1 + count2 ); wordCounts . saveAsTextFile ( outputPath ); } } Build the package. mvn clean package If the build is successful, a target/word-count-1.0.jar is created.
- Note that the spark-core artifact number is the Scala major.minor version number. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < groupId>dataproc . codelab < / groupId > < artifactId>word - count < / artifactId > < version>1 .0 < / version > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < dependencies > < dependency > < groupId>org . scala - lang < / groupId > < artifactId>scala - library < / artifactId > < version> Scala version , for example , 2.11.8 < / version > < scope>provided < / scope > < / dependency > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - core Scala major . minor . version , for example , 2.11 < / artifactId > < version> Spark version , for example , 2.3.1 < / version > < scope>provided < / scope > < / dependency > < / dependencies > < / project > Copy the WordCount.java code listed, below, to your local machine.

