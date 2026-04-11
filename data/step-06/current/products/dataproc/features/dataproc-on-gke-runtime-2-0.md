---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.021Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc on GKE runtime 2.0"
feature_slug: "dataproc-on-gke-runtime-2-0"
latest_feature_date: "2024-09-03"
deprecation_date: "2024-09-03"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn"
keywords:
  - "dataproc"
  - "on"
  - "gke"
  - "runtime"
  - "version"
  - "provides"
  - "spark"
  - "deprecated"
---

# Dataproc on GKE runtime 2.0

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc on GKE runtime version 2.0 provides Spark 3.1 support; deprecated on 2024-09-03.

## Extended Definition

Dataproc on GKE runtime version 2.0 provides Spark 3.1 support; deprecated on 2024-09-03.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)

## Supporting Pages

### "Managed Service for Apache Spark on GKE release versions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spark Engine 3.5 Component 3.5-dataproc-22 3.5-dataproc-17 Apache Spark 3.5.0 3.5.0 Hadoop Libraries 3.3.6 3.3.6 Cloud Storage Connector 3.0.0 3.0.0 Java 11 11 Python 3.8.5 3.8.5 Conda 4.9.2 4.9.2 R 4.3.0 4.3.0 Spark Engine 3.1(Deprecated) Component 3.1-dataproc-17 3.1-dataproc-16 3.1-dataproc-15 3.1-dataproc-14 Apache Spark 3.1.3 3.1.3 3.1.3 3.1.3 Hadoop Libraries 3.2.3 3.2.3 3.2.3 3.2.3 Cloud Storage Connector hadoop3-2.2.13 hadoop3-2.2.13 hadoop3-2.2.11 hadoop3-2.2.11 Java 8 8 8 8 Python 3.8.5 3.8.5 3.8.5 3.8.5 Conda 4.9.2 23.5.0 4.9.2 4.9.2 R 4.3.0 4.3.0 4.2.3 4.2.3 Spark Engine 2.4(Deprecated) Spark 2.4 has reached EOL for support in DPGKE.
- Component 2.4-dataproc-17 2.4-dataproc-16 2.4-dataproc-15 2.4-dataproc-14 Apache Spark 2.4.8 2.4.8 2.4.8 2.4.8 Hadoop Libraries 2.10.2 2.10.2 2.10.2 2.10.2 Cloud Storage Connector hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 Java 8 8 8 8 Python 3.7.4 3.7.4 3.7.4 3.7.4 Conda 4.7.12 22.11.1 22.11.1 22.1.0 R 3.6.3 3.6.3 3.6.3 3.6.3 Spark version formats on Managed Service for Apache Spark on GKE A fully qualified Spark engine release version is expressed as: 3.1-dataproc-[NUMBER] or 3.5-dataproc-[NUMBER] , for example, 3.1-dataproc-17 or 3.5-dataproc-17 .
- 3.5 - Most recent version of Spark engine with a Spark major.minor version of 3.5. dataproc-2.2 - Most recent version of Spark engine that is compatible with Managed Service for Apache Spark 2.2 images. latest - Most recent version of Spark engine.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Managed Service for Apache Spark on GKE release versions Stay organized with collections Save and categorize content based on your preferences.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- September 03, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.116-debian10, 2.0.116-rocky8, 2.0.116-ubuntu18 2.1.64-debian11, 2.1.64-rocky8, 2.1.64-ubuntu20, 2.1.64-ubuntu20-arm 2.2.30-debian12, 2.2.30-rocky9, 2.2.30-ubuntu22, Deprecated Dataproc on GKE runtime versions 2.0 (Spark 3.1) is deprecated.
- Change New sub-minor versions of Dataproc images: 1.5.68-debian10 , 1.5.68-rocky8 , 1.5.68-ubuntu18 2.0.42-debian10 , 2.0.42-rocky8 , 2.0.42-ubuntu18 Deprecated Dataproc Serverless for Spark runtime versions 1.0.2, 1.0.3 and 1.0.4 are unavailable for new batch submissions.
- October 26, 2022 Breaking All Dataproc Serverless for Spark runtime versions prior to 1.0.21 and 2.0.1 will be deprecated on November 2, 2022.
- Deprecated Dataproc Serverless for Spark runtime versions 1.0.22 and 2.0.2 will be deprecated on 11/11/2022.

### "Customize your Spark job runtime environment with Docker on YARN \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-docker-yarn)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Download the Miniconda3 installer. wget https://repo.anaconda.com/miniconda/Miniconda3-py39 4.10.3-Linux-x86 64.sh Python module example: cat >test util.py <<EOF def hello ( name ) : print ( "hello {}" .format ( name )) def read lines ( path ) : with open ( path ) as f: return f.readlines () EOF Build and push the image. docker build -t " ${ IMAGE } " . docker push " ${ IMAGE } " Create a Managed Service for Apache Spark cluster After creating a Docker image that customizes your Spark environment, create a Managed Service for Apache Spark cluster that will use your Docker image when running Spark jobs. gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --image-version= DP IMAGE \ --optional-components=DOCKER \ --properties=dataproc:yarn.docker.enable=true,dataproc:yarn.docker.image= DOCKER IMAGE \ other flags Replace the following; CLUSTER NAME : The cluster name.
- DP IMAGE : Managed Service for Apache Spark image version must be 2.0.49 or later ( --image-version=2.0 will use a qualified minor version later than 2.0.49 ). --optional-components=DOCKER : Enables the Docker component on the cluster. --properties flag: dataproc:yarn.docker.enable=true : Required property to enable the Managed Service for Apache Spark Docker on YARN feature. dataproc:yarn.docker.image : Optional property that you can add to specify your DOCKER IMAGE using the following Container Registry image naming format: {hostname}/{project-id}/{image}:{tag} .
- JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.yarn.appMasterEnv.PYTHONPATH=/opt/python/packages" JOB PROPERTIES = " ${ JOB PROPERTIES } #spark.executorEnv.PYTHONPATH=/opt/python/packages" Notes: See Launching Applications Using Docker Containers information on related properties. gcloud Submit the job to the cluster. gcloud dataproc jobs submit pyspark PYFILE \ --cluster= CLUSTER NAME \ --region= REGION \ --properties=${JOB PROPERTIES} Replace the following; PYFILE : The file path to your PySpark job file.
- Limitations Feature availability or support is not available with: Managed Service for Apache Spark image versions prior to 2.0.49 (not available in 1.5 images) MapReduce jobs (only supported for Spark jobs ) Spark client mode (only supported with Spark cluster mode) Kerberos clusters : cluster creation fails if you create a cluster with Docker on YARN and Kerberos enabled.

