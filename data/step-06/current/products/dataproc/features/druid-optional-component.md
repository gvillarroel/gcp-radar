---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.099Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Druid optional component"
feature_slug: "druid-optional-component"
latest_feature_date: "2019-03-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
keywords:
  - "druid"
  - "optional"
  - "component"
  - "the"
  - "lets"
  - "users"
  - "install"
  - "apache"
---

# Druid optional component

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The Druid optional component lets users install Apache Druid when creating a Dataproc cluster.

## Extended Definition

The Druid optional component lets users install Apache Druid when creating a Dataproc cluster.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Announcing the Alpha release of the Cloud Dataproc Druid Optional Component , which allows you to install Apache Druid on your Cloud Dataproc cluster when you create the cluster.
- Announcing the Beta release of the Cloud Dataproc Zookeeper Optional Component , which allows you to install Apache Zookeeper on your Cloud Dataproc cluster when you create the cluster.
- October 28, 2022 Announcement The following preview Dataproc image versions are available: 2.1.0-RC2-debian11 2.1.0-RC2-rocky8 2.1.0-RC2-ubuntu20 The following component versions are available for use with the 2.1.0-RC2 images (the HBase and Druid components are not supported in 2.1 image versions): Apache Atlas 2.2.0 Apache Flink 1.15.0 Apache Hadoop 3.3.3 Apache Hive 3.1.3 Apache Hive WebHCat 3.1.3 Apache Kafka 3.1.0 Apache Pig 0.18.0-SNAPSHOT Apache Spark 3.3.0 Apache Sqoop v1 1.5.0-SNAPSHOT Apache Sqoop v2 1.99.6 Apache Tez 0.10.1 Cloud Storage Connector hadoop3-2.2.8 Conscrypt 2.5.2 Docker 20.10 Hue 4.10.0 Java temurin-11-jdk JupyterLab Notebook 3.4 Oozie 5.2.1 Presto 376 Python 3.10 R 4.1 Ranger 2.2.0 Scala 2.12.14 Solr 9.0.0 Zeppelin Notebook 0.10.1 Zookeeper 3.8.0 Security Dataproc Serverless for Spark runtime version 2.0.1 upgrades Apache Commons Text to 1.10.0 , addressing CVE-2022-42889 Libraries Dataproc Serverless for Spark runtime version 2.0.1 upgrades the following components: Spark to 3.3.1 SLF4J to 2.0.3 Announcement Dataproc Serverless for Spark now now uses runtime version 1.0.21 and 2.0.1 .
- December 11, 2023 Announcement Announcing the GA release of Dataproc on Compute Engine image version 2.2 : 2.2.0-debian12, 2.2.0-rocky9, 2.2.0-ubuntu22 The 2.2.0 release includes the following components: Debian-12 / Ubuntu-2204 / RockyLinux 9 Apache Hadoop 3.3.6 Apache Spark 3.5.0 Spark-BigQuery Connector 0.34.0 Cloud Storage Connector 3.0.0 Trino 432 Apache Flink 1.17.0 Apache Ranger 2.4.0 Apache Solr 9.2.1 R 4.2 Hue 4.11.0 JupyterLab Notebook 3.6 Change Monitoring-agent-defaults metrics are not available in Dataproc on Compute Engine image version 2.2 clusters unless the Ops Agent is installed.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Using optional components: 2.2 and earlier base images: By default, all of the Managed Service for Apache Spark optional components (OS packages and configs) are installed on the custom image.
- A list of optional components , such as SOLR, RANGER, TRINO, DOCKER, FLINK, HIVE WEBHCAT, ZEPPELIN, HUDI, ICEBERG, and PIG (PIG is available as an optional component in image versions 2.3 and later), to install in the image.
- Note: You must also list or select the optional components when you createthe cluster using the Google Cloud console, Google Cloud CLI, or Managed Service for Apache Spark API.
- 2.3 and later base images: Only the selected optional components are installed on the custom image (see the generate custom image.py --optional-components flag ).

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId":" PROJECT ", "clusterName":" DP CLUSTER ", "status":{ "state":"RUNNING", "stateStartTime":"2022-04-01T19:16:39.865716Z" }, "clusterUuid":"98060b77-...", "statusHistory":[ { "state":"CREATING", "stateStartTime":"2022-04-01T19:14:27.340544Z" } ], "labels":{ "goog-dataproc-cluster-name":" DP CLUSTER ", "goog-dataproc-cluster-uuid":"98060b77-...", "goog-dataproc-location":" REGION ", "goog-dataproc-environment":"prod" }, "virtualClusterConfig":{ "stagingBucket":" BUCKET ", "kubernetesClusterConfig":{ "kubernetesNamespace":"dp-cluster", "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"3.1-..." }, "properties":{ "dpgke:dpgke.unstable.outputOnly.endpoints.sparkHistoryServer":"https://...", "spark:spark.eventLog.dir":"gs:// BUCKET /.../spark-job-history", "spark:spark.eventLog.enabled":"true" } } }, "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } } } Submit a Spark job After your Managed Service for Apache Spark on GKE virtual cluster is running, submit a Spark job using the Google Cloud console, gcloud CLI , or the Managed Service for Apache Spark jobs.submit API (by using direct HTTP requests or the Cloud Client Libraries ).
- Note: In the following examples, the job jars are pre-installed and run "locally" on the Managed Service for Apache Spark virtual cluster. gcloud CLI Spark job example: gcloud dataproc jobs submit spark \ --region=${REGION} \ --cluster=${DP CLUSTER} \ --class=org.apache.spark.examples.SparkPi \ --jars=local:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 1000 gcloud CLI PySpark job example: gcloud dataproc jobs submit pyspark \ --region=${REGION} \ --cluster=${DP CLUSTER} \ local:///usr/lib/spark/examples/src/main/python/pi.py \ -- 10 gcloud CLI SparkR job example: gcloud dataproc jobs submit spark-r \ --region=${REGION} \ --cluster=${DP CLUSTER} \ local:///usr/lib/spark/examples/src/main/r/dataframe.R Clean up Delete any of the following resources used in this quickstart that you do not want to continue to use.
- Create a virtual cluster A Managed Service for Apache Spark on GKE virtual cluster is created as the deployment platform for Managed Service for Apache Spark components.
- BUCKET : (Optional) You can specify the name of a Cloud Storage bucket , which Managed Service for Apache Spark will use to stage artifacts.

