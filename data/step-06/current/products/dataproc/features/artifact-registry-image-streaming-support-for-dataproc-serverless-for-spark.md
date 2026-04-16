---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.607Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Artifact Registry image streaming support for Dataproc Serverless for Spark"
feature_slug: "artifact-registry-image-streaming-support-for-dataproc-serverless-for-spark"
latest_feature_date: "2022-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
keywords:
  - "artifact"
  - "registry"
  - "image"
  - "streaming"
  - "dataproc"
  - "serverless"
  - "spark"
  - "supports"
---

# Artifact Registry image streaming support for Dataproc Serverless for Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark supports Artifact Registry with image streaming.

## Extended Definition

Dataproc Serverless for Spark supports Artifact Registry with image streaming.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)

## Supporting Pages

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable Spark data lineage at the project level, set the following custom project metadata : Key Value DATAPROC LINEAGE ENABLED true DATAPROC CLUSTER SCOPES https://www.googleapis.com/auth/cloud-platform Setting this VM access scope is only necessary for 2.0 image version clusters.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Data lineage is available for all Managed Service for Apache Spark Spark jobs except SparkR and Spark streaming jobs, and supports BigQuery and Cloud Storage data sources.
- Disable Spark data lineage on a job If Spark data lineage is enabled on a cluster, you can disable Spark data lineage on a job by passing the spark.extraListeners property with an empty value ("") when you submit the job. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.extraListeners = '' Submit a Spark job When you submit a supported Spark job on a Managed Service for Apache Spark cluster that was created with Spark data lineage enabled, Managed Service for Apache Spark captures and reports the data lineage information to the Data Lineage API. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.openlineage.namespace = CUSTOM NAMESPACE ,spark.openlineage.appName = CUSTOM APPNAME Notes: Adding the spark.openlineage.namespace and spark.openlineage.appName properties, which are used to uniquely identify the job, is optional.

### "Manage Java and Scala dependencies for Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: gcloud dataproc jobs submit spark \ --cluster=my-cluster \ --region= region \ --properties=spark.jars.packages='com.google.cloud:google-cloud-translate:1.35.0,org.apache.bahir:spark-streaming-pubsub 2.11:2.2.0' When submitting a job directly on your cluster use the spark-submit command with the --packages=[DEPENDENCIES] parameter.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- This configuration instructs Maven to rename the com.google.common package to repackaged.com.google.common and to update all references to the classes from the original package. < ? xml version = "1.0" encoding = "UTF-8" ? > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < properties > < maven . compiler . source>1 .8 < / maven . compiler . source > < maven . compiler . target>1 .8 < / maven . compiler . target > < / properties > < groupId >< ! -- YOUR GROUP ID --></ groupId > < artifactId >< ! -- YOUR ARTIFACT ID --></ artifactId > < version >< ! -- YOUR PACKAGE VERSION --></ version > < dependencies > < dependency > < groupId>org . apache . spark < / groupId > < artifactId>spark - sql 2 .11 < / artifactId > < version >< ! -- YOUR SPARK VERSION --></ version > < scope>provided < / scope > < / dependency > < ! -- YOUR DEPENDENCIES -- > < / dependencies > < build > < plugins > < plugin > < groupId>net . alchim31 . maven < / groupId > < artifactId>scala - maven - plugin < / artifactId > < executions > < execution > < goals > < goal>compile < / goal > < goal>testCompile < / goal > < / goals > < / execution > < / executions > < configuration > < scalaVersion >< ! -- YOUR SCALA VERSION --></ scalaVersion > < / configuration > < / plugin > < plugin > < groupId>org . apache . maven . plugins < / groupId > < artifactId>maven - shade - plugin < / artifactId > < executions > < execution > < phase>package < / phase > < goals > < goal>shade < / goal > < / goals > < configuration > < transformers > < transformer implementation = "org.apache.maven.plugins.shade.resource.ManifestResourceTransformer" > < mainClass >< ! -- YOUR APPLICATION MAIN CLASS --></ mainClass > < / transformer > < ! -- This is needed if you have dependencies that use Service Loader .
- To create a shaded JAR with SBT, add the sbt-assembly plugin to your build definition, first by creating a file called assembly.sbt under the project/ directory: ├── src/ └── build.sbt └── project/ └── assembly.sbt ... then by adding the following line in assembly.sbt : addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "0.14.6") The following is a sample build.sbt configuration file that shades the Guava library, which is located in the com.google.common package : lazy val commonSettings = Seq ( organization := "YOUR GROUP ID" , name := "YOUR ARTIFACT ID" , version := "YOUR PACKAGE VERSION" , scalaVersion := "YOUR SCALA VERSION" , ) lazy val shaded = ( project in file ( "." )) . settings ( commonSettings ) mainClass in ( Compile , packageBin ) := Some ( "YOUR APPLICATION MAIN CLASS" ) libraryDependencies ++= Seq ( "org.apache.spark" % "spark-sql 2.11" % "YOUR SPARK VERSION" % "provided" , // YOUR DEPENDENCIES ) assemblyShadeRules in assembly := Seq ( ShadeRule . rename ( "com.google.common. " - > "repackaged.com.google.common.@1" ). inAll ) To run the build: sbt assembly Notes about build.sbt : The shade rule in the preceding example may not solve all dependency conflicts because SBT uses strict conflict resolution strategies.

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: dataproc:yarn.docker.image=gcr.io/project-id/image:1.0.1 Requirement: You must host your Docker image on Container Registry or Artifact Registry . (Managed Service for Apache Spark cannot fetch containers from other registries).
- DP IMAGE : Managed Service for Apache Spark image version must be 2.0.49 or later ( --image-version=2.0 will use a qualified minor version later than 2.0.49 ). --optional-components=DOCKER : Enables the Docker component on the cluster. --properties flag: dataproc:yarn.docker.enable=true : Required property to enable the Managed Service for Apache Spark Docker on YARN feature. dataproc:yarn.docker.image : Optional property that you can add to specify your DOCKER IMAGE using the following Container Registry image naming format: {hostname}/{project-id}/{image}:{tag} .
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

