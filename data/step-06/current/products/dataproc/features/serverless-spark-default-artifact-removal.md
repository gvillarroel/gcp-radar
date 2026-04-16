---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:07:05.478Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Serverless Spark default artifact removal"
feature_slug: "serverless-spark-default-artifact-removal"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/libraries"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
  - "https://docs.cloud.google.com/dataproc/docs/guides/profiling"
keywords:
  - "serverless"
  - "spark"
  - "default"
  - "artifact"
  - "removal"
  - "apache"
  - "supports"
  - "removing"
---

# Serverless Spark default artifact removal

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Serverless for Apache Spark supports removing default runtime artifacts with the dataproc.artifacts.remove property.

## Extended Definition

Serverless for Apache Spark supports removing default runtime artifacts with the dataproc.artifacts.remove property.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/libraries](https://docs.cloud.google.com/dataproc/docs/reference/libraries)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling)

## Supporting Pages

### Managed Service for Apache Spark client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/libraries](https://docs.cloud.google.com/dataproc/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback Managed Service for Apache Spark client libraries Stay organized with collections Save and categorize content based on your preferences.
- Managed Service for Apache Spark Cloud Client Libraries may be in alpha or beta stage.
- ClusterControllerClient ( client options = { "api endpoint" : f " { region } -dataproc.googleapis.com:443" } ) Create the cluster config. cluster = { "project id" : project id , "cluster name" : cluster name , "config" : { "master config" : { "num instances" : 1 , "machine type uri" : "n1-standard-2" }, "worker config" : { "num instances" : 2 , "machine type uri" : "n1-standard-2" }, }, } Create the cluster. operation = cluster client . create cluster ( request = { "project id" : project id , "region" : region , "cluster" : cluster } ) result = operation . result () Output a success message. print ( f "Cluster created successfully: { result . cluster name } " ) Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-data-dataproc on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Cloud Profiler \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling)
- Source ID: `site-iam-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Submit a Managed Service for Apache Spark job with Profiler options Submit a Managed Service for Apache Spark Spark or Hadoop job with one or more of the following Profiler options: Option Description Value Required/Optional Default Notes cloud.profiler.enable Enable profiling of the job true or false Required false cloud.profiler.name Name used to create profile on the Profiler Service profile-name Optional Managed Service for Apache Spark job UUID cloud.profiler.service.version A user-supplied string to identify and distinguish profiler results.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Requirements: Profiler supports only Managed Service for Apache Spark Hadoop and Spark job types (Spark, PySpark, SparkSql, and SparkR).
- Profiler Service Version Optional Managed Service for Apache Spark job UUID mapreduce.task.profile.maps Numeric range of map tasks to profile (example: for up to 100, specify "0-100") number range Optional 0-10000 Applies to Hadoop mapreduce jobs only mapreduce.task.profile.reduces Numeric range of reducer tasks to profile (example: for up to 100, specify "0-100") number range Optional 0-10000 Applies to Hadoop mapreduce jobs only PySpark Example Google Cloud CLI PySpark job submit with profiling example: gcloud dataproc jobs submit pyspark python-job-file \ --cluster= cluster-name \ --region= region \ --properties=cloud.profiler.enable=true,cloud.profiler.name= profiler name ,cloud.profiler.service.version= version \ -- job args Two profiles will be created: profiler name -driver to profile spark driver tasks profiler name -executor to profile spark executor tasks For example, if the profiler name is "spark word count job", spark word count job-driver and spark word count job-executor profiles are created.

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Example: dataproc:yarn.docker.image=gcr.io/project-id/image:1.0.1 Requirement: You must host your Docker image on Container Registry or Artifact Registry . (Managed Service for Apache Spark cannot fetch containers from other registries).
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- DP IMAGE : Managed Service for Apache Spark image version must be 2.0.49 or later ( --image-version=2.0 will use a qualified minor version later than 2.0.49 ). --optional-components=DOCKER : Enables the Docker component on the cluster. --properties flag: dataproc:yarn.docker.enable=true : Required property to enable the Managed Service for Apache Spark Docker on YARN feature. dataproc:yarn.docker.image : Optional property that you can add to specify your DOCKER IMAGE using the following Container Registry image naming format: {hostname}/{project-id}/{image}:{tag} .

