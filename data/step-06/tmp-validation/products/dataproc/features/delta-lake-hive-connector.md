---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.165Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Delta Lake Hive Connector"
feature_slug: "delta-lake-hive-connector"
latest_feature_date: "2020-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images"
keywords:
  - "delta"
  - "lake"
  - "connector"
  - "includes"
  - "hive"
  - "image"
---

# Delta Lake Hive Connector

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc image 1.5 includes the Delta Lake Hive Connector 0.1.0.

## Extended Definition

Dataproc image 1.5 includes the Delta Lake Hive Connector 0.1.0.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)

## Supporting Pages

### "Enable Hive data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Managed Service for Apache Spark cluster Run the following command in a local terminal window or in Cloud Shell to create a Managed Service for Apache Spark cluster . gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version IMAGE VERSION \ --initialization-actions gs://goog-dataproc-initialization-actions- REGION /connectors/connectors.sh, gs://goog-dataproc-initialization-actions- REGION /hive-lineage/hive-lineage.sh \ --metadata hive-bigquery-connector-version= HIVE BQ VERSION Notes: CLUSTER NAME : The name of the cluster.
- IMAGE VERSION The intended image version for the cluster. --initialization-actions : These installation actions, located in Cloud Storage, install the Hive-BigQuery connector and enable Hive data lineage .
- Note: See Important considerations and guidelines when using initialization actions in production. gcloud CLI cluster creation example: gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version IMAGE VERSION \ --initialization-actions gs://goog-dataproc-initialization-actions- REGION /hive-lineage/hive-lineage.sh Replace the following: CLUSTER NAME : The name of the cluster.
- Hive BigQueryStorageHandler CREATE EXTERNAL TABLE us states ( name STRING , post abbr STRING ) STORED AS PARQUET LOCATION 'gs://cloud-samples-data/bigquery/hive-partitioning-samples/autolayout' ; CREATE TABLE us states copy ( name STRING , post abbr STRING ) STORED BY 'com.google.cloud.hive.bigquery.connector.BigQueryStorageHandler' TBLPROPERTIES ( 'bq.table' = ' PROJECT .

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image version.
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image verison.
- Replace the version placeholders in the file to show the Spark and Scala library versions used by your cluster's image version . scalaVersion := " Scala version, for example, 2.11.8 " name := "word-count" organization := "dataproc.codelab" version := "1.0" libraryDependencies ++ = Seq ( "org.scala-lang" % "scala-library" % scalaVersion . value % "provided" , "org.apache.spark" %% "spark-core" % " Spark version, for example, 2.3.1 " % "provided" ) Copy word-count.scala to your local machine.
- Run the command, below, to create a single-node Managed Service for Apache Spark cluster in the specified Compute Engine zone . gcloud dataproc clusters create ${CLUSTER} \ --project=${PROJECT} \ --region=${REGION} \ --single-node The above command installs the default cluster image version .

### "Create a Google Kubernetes Engine custom container image \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- IMAGE= custom container image \ BUILD DIR=$(mktemp -d) \ cd "${BUILD DIR}" Download the BigQuery connector. gcloud storage cp \ gs://spark-lib/bigquery/spark-bigquery-with-dependencies 2.12-0.22.2.jar .
- Create a Python example file. cat >test util.py <<'EOF' def hello(name): print("hello {}".format(name)) def read lines(path): with open(path) as f: return f.readlines() EOF Create an example init script. cat >init-script.sh <<EOF echo "hello world" >/tmp/init-script.out EOF Build and push the image. docker build -t "${IMAGE}" . && docker push "${IMAGE}" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note: The spark: file prefix is needed when creating a cluster, but omitted when submitting a job (see Cluster properties ). gcloud CLI cluster creation example: gcloud dataproc clusters gke create "${DP CLUSTER}" \ --properties=spark:spark.kubernetes.container.image= custom-image \ ... other args ... gcloud CLI job submit example: gcloud dataproc jobs submit spark \ --properties=spark.kubernetes.container.image= custom-image \ ... other args ...
- Base Spark images Managed Service for Apache Spark supports the following base Spark container images: Spark 3.5 : ${REGION}-docker.pkg.dev/cloud-dataproc/spark/dataproc 2.2 Sample custom container image build Sample Dockerfile FROM us - central1 - docker . pkg . dev / cloud - dataproc / spark / dataproc 2 .0 : latest Change to root temporarily so that it has permissions to create dirs and copy files.

