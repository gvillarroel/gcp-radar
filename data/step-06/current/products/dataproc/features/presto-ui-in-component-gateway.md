---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.092Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Presto UI in Component Gateway"
feature_slug: "presto-ui-in-component-gateway"
latest_feature_date: "2019-12-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder"
keywords:
  - "presto"
  - "ui"
  - "in"
  - "component"
  - "gateway"
  - "can"
  - "expose"
  - "the"
---

# Presto UI in Component Gateway

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Component Gateway can expose the Presto UI when the Presto optional component is enabled.

## Extended Definition

Component Gateway can expose the Presto UI when the Presto optional component is enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- May 18, 2023 Announcement New sub-minor versions of Dataproc images: 2.0.64-debian10, 2.0.64-rocky8, 2.0.64-ubuntu18 2.1.12-debian11, 2.1.12-rocky8, 2.1.12-ubuntu20 Feature You can now use --properties=dataproc:componentgateway.ha.enabled=true to enable the Dataproc Component Gateway and Knox along with the Spark History Server (SHS) UI in HA mode .
- Fixed Image 1.5: Fixed a bug that prevented users from logging on to the Presto UI when using Component Gateway.
- Feature Expose Presto UI in under component gateway when Presto Dataproc Optional Component is enabled.
- October 28, 2022 Announcement The following preview Dataproc image versions are available: 2.1.0-RC2-debian11 2.1.0-RC2-rocky8 2.1.0-RC2-ubuntu20 The following component versions are available for use with the 2.1.0-RC2 images (the HBase and Druid components are not supported in 2.1 image versions): Apache Atlas 2.2.0 Apache Flink 1.15.0 Apache Hadoop 3.3.3 Apache Hive 3.1.3 Apache Hive WebHCat 3.1.3 Apache Kafka 3.1.0 Apache Pig 0.18.0-SNAPSHOT Apache Spark 3.3.0 Apache Sqoop v1 1.5.0-SNAPSHOT Apache Sqoop v2 1.99.6 Apache Tez 0.10.1 Cloud Storage Connector hadoop3-2.2.8 Conscrypt 2.5.2 Docker 20.10 Hue 4.10.0 Java temurin-11-jdk JupyterLab Notebook 3.4 Oozie 5.2.1 Presto 376 Python 3.10 R 4.1 Ranger 2.2.0 Scala 2.12.14 Solr 9.0.0 Zeppelin Notebook 0.10.1 Zookeeper 3.8.0 Security Dataproc Serverless for Spark runtime version 2.0.1 upgrades Apache Commons Text to 1.10.0 , addressing CVE-2022-42889 Libraries Dataproc Serverless for Spark runtime version 2.0.1 upgrades the following components: Spark to 3.3.1 SLF4J to 2.0.3 Announcement Dataproc Serverless for Spark now now uses runtime version 1.0.21 and 2.0.1 .

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId":" PROJECT ", "clusterName":" DP CLUSTER ", "status":{ "state":"RUNNING", "stateStartTime":"2022-04-01T19:16:39.865716Z" }, "clusterUuid":"98060b77-...", "statusHistory":[ { "state":"CREATING", "stateStartTime":"2022-04-01T19:14:27.340544Z" } ], "labels":{ "goog-dataproc-cluster-name":" DP CLUSTER ", "goog-dataproc-cluster-uuid":"98060b77-...", "goog-dataproc-location":" REGION ", "goog-dataproc-environment":"prod" }, "virtualClusterConfig":{ "stagingBucket":" BUCKET ", "kubernetesClusterConfig":{ "kubernetesNamespace":"dp-cluster", "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"3.1-..." }, "properties":{ "dpgke:dpgke.unstable.outputOnly.endpoints.sparkHistoryServer":"https://...", "spark:spark.eventLog.dir":"gs:// BUCKET /.../spark-job-history", "spark:spark.eventLog.enabled":"true" } } }, "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } } } Submit a Spark job After your Managed Service for Apache Spark on GKE virtual cluster is running, submit a Spark job using the Google Cloud console, gcloud CLI , or the Managed Service for Apache Spark jobs.submit API (by using direct HTTP requests or the Cloud Client Libraries ).
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters Request JSON body: { "clusterName":" DP CLUSTER ", "projectId":" PROJECT ", "virtualClusterConfig":{ "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } }, "kubernetesClusterConfig":{ "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"latest" } } }, "stagingBucket":" BUCKET " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Note: In the following examples, the job jars are pre-installed and run "locally" on the Managed Service for Apache Spark virtual cluster. gcloud CLI Spark job example: gcloud dataproc jobs submit spark \ --region=${REGION} \ --cluster=${DP CLUSTER} \ --class=org.apache.spark.examples.SparkPi \ --jars=local:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 1000 gcloud CLI PySpark job example: gcloud dataproc jobs submit pyspark \ --region=${REGION} \ --cluster=${DP CLUSTER} \ local:///usr/lib/spark/examples/src/main/python/pi.py \ -- 10 gcloud CLI SparkR job example: gcloud dataproc jobs submit spark-r \ --region=${REGION} \ --cluster=${DP CLUSTER} \ local:///usr/lib/spark/examples/src/main/r/dataframe.R Clean up Delete any of the following resources used in this quickstart that you do not want to continue to use.
- You can use an identifier, such as 3 , 3.1 , or latest , or you can specify the full subminor version, such as 3.1-dataproc-5 . --staging-bucket : Delete this flag to have Managed Service for Apache Spark on GKE create a staging bucket. --pools : This flag is used to specify a new or existing node pool that Managed Service for Apache Spark will create or use to perform the workload.

### "Interface AutoscalingPolicyOrBuilder (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder)
- Source ID: `site-java-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AlgorithmCase getAlgorithmCase () Returns Type Description AutoscalingPolicy.AlgorithmCase getBasicAlgorithm() public abstract BasicAutoscalingAlgorithm getBasicAlgorithm () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description BasicAutoscalingAlgorithm The basicAlgorithm. getBasicAlgorithmOrBuilder() public abstract BasicAutoscalingAlgorithmOrBuilder getBasicAlgorithmOrBuilder () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description BasicAutoscalingAlgorithmOrBuilder getClusterType() public abstract AutoscalingPolicy .
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Returns Type Description InstanceGroupAutoscalingPolicyConfigOrBuilder hasBasicAlgorithm() public abstract boolean hasBasicAlgorithm () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description boolean Whether the basicAlgorithm field is set. hasSecondaryWorkerConfig() public abstract boolean hasSecondaryWorkerConfig () Optional.
- Describes how the autoscaler will operate for secondary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary worker config = 5 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description InstanceGroupAutoscalingPolicyConfig The secondaryWorkerConfig. getSecondaryWorkerConfigOrBuilder() public abstract InstanceGroupAutoscalingPolicyConfigOrBuilder getSecondaryWorkerConfigOrBuilder () Optional.
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Returns Type Description InstanceGroupAutoscalingPolicyConfig The workerConfig. getWorkerConfigOrBuilder() public abstract InstanceGroupAutoscalingPolicyConfigOrBuilder getWorkerConfigOrBuilder () Required.

