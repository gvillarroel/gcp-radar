---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.126Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Artifact Registry image streaming support for Dataproc Serverless for Spark"
feature_slug: "artifact-registry-image-streaming-support-for-dataproc-serverless-for-spark"
latest_feature_date: "2022-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies"
keywords:
  - "streaming"
  - "artifact"
  - "registry"
  - "serverless"
  - "supports"
  - "image"
  - "spark"
---

# Artifact Registry image streaming support for Dataproc Serverless for Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark supports Artifact Registry with image streaming.

## Extended Definition

Dataproc Serverless for Spark supports Artifact Registry with image streaming.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)

## Supporting Pages

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data lineage is available for all Managed Service for Apache Spark Spark jobs except SparkR and Spark streaming jobs, and supports BigQuery and Cloud Storage data sources.
- To enable Spark data lineage at the project level, set the following custom project metadata : Key Value DATAPROC LINEAGE ENABLED true DATAPROC CLUSTER SCOPES https://www.googleapis.com/auth/cloud-platform Setting this VM access scope is only necessary for 2.0 image version clusters.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Set scope on 2.0 image version clusters: Managed Service for Apache Spark cluster VM access cloud-platform scope is required for Spark data lineage.

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Note that the spark-core artifact number is the Scala major.minor version number. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < groupId>dataproc . codelab < / groupId > < artifactId>word - count < / artifactId > < version>1 .0 < / version > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < dependencies > < dependency > < groupId>org . scala - lang < / groupId > < artifactId>scala - library < / artifactId > < version> Scala version , for example , 2.11.8 < / version > < scope>provided < / scope > < / dependency > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - core Scala major . minor . version , for example , 2.11 < / artifactId > < version> Spark version , for example , 2.3.1 < / version > < scope>provided < / scope > < / dependency > < / dependencies > < / project > Copy the WordCount.java code listed, below, to your local machine.
- Replace the version placeholders in the file to show the Spark and Scala library versions used by your cluster's image version . scalaVersion := " Scala version, for example, 2.11.8 " name := "word-count" organization := "dataproc.codelab" version := "1.0" libraryDependencies ++ = Seq ( "org.scala-lang" % "scala-library" % scalaVersion . value % "provided" , "org.apache.spark" %% "spark-core" % " Spark version, for example, 2.3.1 " % "provided" ) Copy word-count.scala to your local machine.
- Run the command, below, to create a single-node Managed Service for Apache Spark cluster in the specified Compute Engine zone . gcloud dataproc clusters create ${CLUSTER} \ --project=${PROJECT} \ --region=${REGION} \ --single-node The above command installs the default cluster image version .
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image version.

### "Manage Java and Scala dependencies for Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This configuration instructs Maven to rename the com.google.common package to repackaged.com.google.common and to update all references to the classes from the original package. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < groupId >< ! -- YOUR GROUP ID --></ groupId > < artifactId >< ! -- YOUR ARTIFACT ID --></ artifactId > < version >< ! -- YOUR PACKAGE VERSION --></ version > < dependencies > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - sql 2 .11 < / artifactId > < version >< ! -- YOUR SPARK VERSION --></ version > < scope>provided < / scope > < / dependency > < ! -- YOUR DEPENDENCIES -- > < / dependencies > < build > < plugins > < plugin > < groupId>net . alchim31 . maven < / groupId > < artifactId>scala - maven - plugin < / artifactId > < executions > < execution > < goals > < goal>compile < / goal > < goal>testCompile < / goal > < / goals > < / execution > < / executions > < configuration > < scalaVersion >< ! -- YOUR SCALA VERSION --></ scalaVersion > < / configuration > < / plugin > < plugin > < groupId>org . apache . maven . plugins < / groupId > < artifactId>maven - shade - plugin < / artifactId > < executions > < execution > < phase>package < / phase > < goals > < goal>shade < / goal > < / goals > < configuration > < transformers > < transformer implementation = "org.apache.maven.plugins.shade.resource.ManifestResourceTransformer" > < mainClass >< ! -- YOUR APPLICATION MAIN CLASS --></ mainClass > < / transformer > < ! -- This is needed if you have dependencies that use Service Loader .
- To create a shaded JAR with SBT, add the sbt-assembly plugin to your build definition, first by creating a file called assembly.sbt under the project/ directory: ├── src/ └── build.sbt └── project/ └── assembly.sbt ... then by adding the following line in assembly.sbt : addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "0.14.6") The following is a sample build.sbt configuration file that shades the Guava library, which is located in the com.google.common package : lazy val commonSettings = Seq ( organization := "YOUR GROUP ID" , name := "YOUR ARTIFACT ID" , version := "YOUR PACKAGE VERSION" , scalaVersion := "YOUR SCALA VERSION" , ) lazy val shaded = ( project in file ( "." )) . settings ( commonSettings ) mainClass in ( Compile , packageBin ) := Some ( "YOUR APPLICATION MAIN CLASS" ) libraryDependencies ++= Seq ( "org.apache.spark" % "spark-sql 2.11" % "YOUR SPARK VERSION" % "provided" , // YOUR DEPENDENCIES ) assemblyShadeRules in assembly := Seq ( ShadeRule . rename ( "com.google.common. " - > "repackaged.com.google.common.@1" ). inAll ) To run the build: sbt assembly Notes about build.sbt : The shade rule in the preceding example may not solve all dependency conflicts because SBT uses strict conflict resolution strategies.
- Example: gcloud dataproc jobs submit spark \ --cluster=my-cluster \ --region= region \ --properties=spark.jars.packages='com.google.cloud:google-cloud-translate:1.35.0,org.apache.bahir:spark-streaming-pubsub 2.11:2.2.0' When submitting a job directly on your cluster use the spark-submit command with the --packages=[DEPENDENCIES] parameter.
- Example: spark-submit --packages='com.google.cloud:google-cloud-translate:1.35.0,org.apache.bahir:spark-streaming-pubsub 2.11:2.2.0' Avoid dependency conflicts The earlier approaches might fail if Spark application dependencies conflict with Hadoop's dependencies.

