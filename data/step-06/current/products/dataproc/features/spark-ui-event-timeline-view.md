---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.019Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Spark UI Event Timeline view"
feature_slug: "spark-ui-event-timeline-view"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices"
keywords:
  - "spark"
  - "ui"
  - "event"
  - "timeline"
  - "view"
  - "the"
  - "for"
  - "dataproc"
---

# Spark UI Event Timeline view

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The Spark UI for Dataproc Serverless batches and interactive sessions includes an Event Timeline view for troubleshooting.

## Extended Definition

The Spark UI for Dataproc Serverless batches and interactive sessions includes an Event Timeline view for troubleshooting.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)

## Supporting Pages

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId":" PROJECT ", "clusterName":" DP CLUSTER ", "status":{ "state":"RUNNING", "stateStartTime":"2022-04-01T19:16:39.865716Z" }, "clusterUuid":"98060b77-...", "statusHistory":[ { "state":"CREATING", "stateStartTime":"2022-04-01T19:14:27.340544Z" } ], "labels":{ "goog-dataproc-cluster-name":" DP CLUSTER ", "goog-dataproc-cluster-uuid":"98060b77-...", "goog-dataproc-location":" REGION ", "goog-dataproc-environment":"prod" }, "virtualClusterConfig":{ "stagingBucket":" BUCKET ", "kubernetesClusterConfig":{ "kubernetesNamespace":"dp-cluster", "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"3.1-..." }, "properties":{ "dpgke:dpgke.unstable.outputOnly.endpoints.sparkHistoryServer":"https://...", "spark:spark.eventLog.dir":"gs:// BUCKET /.../spark-job-history", "spark:spark.eventLog.enabled":"true" } } }, "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } } } Submit a Spark job After your Managed Service for Apache Spark on GKE virtual cluster is running, submit a Spark job using the Google Cloud console, gcloud CLI , or the Managed Service for Apache Spark jobs.submit API (by using direct HTTP requests or the Cloud Client Libraries ).
- Note: In the following examples, the job jars are pre-installed and run "locally" on the Managed Service for Apache Spark virtual cluster. gcloud CLI Spark job example: gcloud dataproc jobs submit spark \ --region=${REGION} \ --cluster=${DP CLUSTER} \ --class=org.apache.spark.examples.SparkPi \ --jars=local:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 1000 gcloud CLI PySpark job example: gcloud dataproc jobs submit pyspark \ --region=${REGION} \ --cluster=${DP CLUSTER} \ local:///usr/lib/spark/examples/src/main/python/pi.py \ -- 10 gcloud CLI SparkR job example: gcloud dataproc jobs submit spark-r \ --region=${REGION} \ --cluster=${DP CLUSTER} \ local:///usr/lib/spark/examples/src/main/r/dataframe.R Clean up Delete any of the following resources used in this quickstart that you do not want to continue to use.
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- Run the command: gcloud dataproc clusters gke create ${DP CLUSTER} \ --region=${REGION} \ --gke-cluster=${GKE CLUSTER} \ --spark-engine-version=latest \ --staging-bucket=${BUCKET} \ --pools="name=${DP POOLNAME},roles=default" \ --setup-workload-identity \ --history-server-cluster=${PHS CLUSTER} Notes: --spark-engine-version : The Spark image version used on the Managed Service for Apache Spark cluster.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Change New Dataproc on Compute Engine subminor image versions : 2.0.142-debian10, 2.0.142-rocky8, 2.0.142-ubuntu18 2.1.90-debian11, 2.1.90-rocky8, 2.1.90-ubuntu20, 2.1.90-ubuntu20-arm 2.2.58-debian12, 2.2.58-rocky9, 2.2.58-ubuntu22 May 22, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.104 1.2.48 2.2.48 May 15, 2025 Change New Dataproc on Compute Engine subminor image versions : 2.0.141-debian10, 2.0.141-rocky8, 2.0.141-ubuntu18 2.1.89-debian11, 2.1.89-rocky8, 2.1.89-ubuntu20, 2.1.89-ubuntu20-arm 2.2.57-debian12, 2.2.57-rocky9, 2.2.57-ubuntu22 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.103 1.2.47 2.2.47 May 12, 2025 Feature Dataproc Serverless for Spark: Spark UI for Dataproc Serverless batches and interactive sessions , which lets you monitor and debug your serverless Spark workloads, now features Event Timeline and Task Quantile views for enhanced troubleshooting.
- October 28, 2022 Announcement The following preview Dataproc image versions are available: 2.1.0-RC2-debian11 2.1.0-RC2-rocky8 2.1.0-RC2-ubuntu20 The following component versions are available for use with the 2.1.0-RC2 images (the HBase and Druid components are not supported in 2.1 image versions): Apache Atlas 2.2.0 Apache Flink 1.15.0 Apache Hadoop 3.3.3 Apache Hive 3.1.3 Apache Hive WebHCat 3.1.3 Apache Kafka 3.1.0 Apache Pig 0.18.0-SNAPSHOT Apache Spark 3.3.0 Apache Sqoop v1 1.5.0-SNAPSHOT Apache Sqoop v2 1.99.6 Apache Tez 0.10.1 Cloud Storage Connector hadoop3-2.2.8 Conscrypt 2.5.2 Docker 20.10 Hue 4.10.0 Java temurin-11-jdk JupyterLab Notebook 3.4 Oozie 5.2.1 Presto 376 Python 3.10 R 4.1 Ranger 2.2.0 Scala 2.12.14 Solr 9.0.0 Zeppelin Notebook 0.10.1 Zookeeper 3.8.0 Security Dataproc Serverless for Spark runtime version 2.0.1 upgrades Apache Commons Text to 1.10.0 , addressing CVE-2022-42889 Libraries Dataproc Serverless for Spark runtime version 2.0.1 upgrades the following components: Spark to 3.3.1 SLF4J to 2.0.3 Announcement Dataproc Serverless for Spark now now uses runtime version 1.0.21 and 2.0.1 .
- Change New sub-minor versions of Cloud Dataproc images: 1.2.86-debian9, 1.3.46-debian9, 1.4.17-debian9, 1.5.0-RC2-debian9, 1.3.46-ubuntu18, 1.4.17-ubuntu18, 1.5.0-RC2-ubuntu18 Change Added a warning when clusters are created with component gateway and kerberos as they are not currently supported together Change 1.3 image update - Upgraded Hive to version 2.3.6 Change 1.4 image update - Fixed a bug in the Jupyter component that prevented creating text files using the Jupyter and JupyterLab UIs Change 1.5 preview image update: Updated Anaconda to version 2019.10 Updated Miniconda to version 4.7.12.1 Upgrade Hue to version 4.5.0 Upgraded Scala to version 2.12.10 Upgrade Hadoop to version 2.10.0 Unset java.net.preferIPv4Stack=true property in Hadoop November 26, 2019 Issue 1.3 and 1.4 images: Cloud Dataproc images in the 1.3 and 1.4 minor version tracks are affected by an issue that causes the YARN Timeline Server to excessively log without proper rotation.
- October 03, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.150-debian10, 2.0.150-ubuntu18, 2.0.150-rocky8 2.1.99-debian11, 2.1.99-ubuntu20, 2.1.99-ubuntu20-arm, 2.1.99-rocky8 2.2.67-debian12, 2.2.67-ubuntu22, 2.2.67-ubuntu22-arm, 2.2.67-rocky9 2.3.14-debian12, 2.3.14-ubuntu22, 2.3.14-ubuntu22-arm, 2.3.14-ml-ubuntu22, 2.3.14-rocky9 September 15, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.149-debian10, 2.0.149-ubuntu18, 2.0.149-rocky8 2.1.98-debian11, 2.1.98-ubuntu20, 2.1.98-ubuntu20-arm, 2.1.98-rocky8 2.2.66-debian12, 2.2.66-ubuntu22, 2.2.66-ubuntu22-arm, 2.2.66-rocky9 2.3.13-debian12, 2.3.13-ubuntu22, 2.3.13-ubuntu22-arm, 2.3.13-ml-ubuntu22, 2.3.13-rocky9 September 11, 2025 Announcement New Serverless for Apache Spark runtime versions : 1.2.61 2.2.61 2.3.12 3.0.0-RC4 September 08, 2025 Announcement Announcing the Preview release of Dataproc on Compute Engine image version 3.0.0-RC1 : Spark 4.0.0 Hadoop 3.4.1 Hive 4.1.0 Tez 0.10.5 Cloud Storage Connector 3.1.4 Conda 24.11 Java 17 Python 3.11 R 4.3 Scala 2.13 Announcement Announcing the Preview release of Serverless for Apache Spark 3.0.0-RC3 runtime : Spark 4.0.0 BigQuery Spark Connector 0.42.3 Cloud Storage Connector 3.1.5 Conda 25.3.0 Java 21 Python 3.12 R 4.4 Scala 2.13 Announcement New Dataproc on Compute Engine subminor image versions : 2.3.11-debian12, 2.3.11-ubuntu22, 2.3.11-ubuntu22-arm, 2.3.11-ml-ubuntu22, 2.3.11-rocky9 September 05, 2025 Announcement New Dataproc Serverless for Spark runtime versions: 1.2.60 2.2.60 2.3.11 September 02, 2025 Feature Multi-tenant clusters are now available in Preview.

### "Managed Service for Apache Spark best practices for production \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For production environments, associate your cluster with a specific major.minor Managed Service for Apache Spark image version, as shown in the following gcloud CLI command. gcloud dataproc clusters create CLUSTER NAME \ --region= region \ --image-version=2.0 Dataproc resolves the major.minor version to the latest sub-minor version version ( 2.0 is resolved to 2.0.x ).
- Control initialization action locations Initialization actions allow you to automatically run scripts or install components when you create a Managed Service for Apache Spark cluster (see the dataproc-initialization-actions GitHub repository for common Managed Service for Apache Spark initialization actions).
- Benefits of submitting jobs to Managed Service for Apache Spark: No complicated networking settings required - the API is widely reachable Easy to manage IAM permissions and roles Track job status easily - no Managed Service for Apache Spark job metadata to complicate results.
- Managed Service for Apache Spark preview image versions New minor versions of Managed Service for Apache Spark images are available in a preview version prior to release in the standard minor image version track.

