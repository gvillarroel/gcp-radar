---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.692Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Stackdriver logging toggle"
feature_slug: "stackdriver-logging-toggle"
latest_feature_date: "2016-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/logging"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/logging"
keywords:
  - "stackdriver"
  - "logging"
  - "toggle"
  - "lets"
  - "users"
  - "disable"
  - "dataproc"
  - "clusters"
---

# Stackdriver logging toggle

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Stackdriver logging toggle lets users disable Stackdriver logging on Dataproc clusters through a cluster property.

## Extended Definition

The Stackdriver logging toggle lets users disable Stackdriver logging on Dataproc clusters through a cluster property.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc-metastore/docs/logging](https://docs.cloud.google.com/dataproc-metastore/docs/logging)

## Supporting Pages

### Managed Service for Apache Spark logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- Source ID: `site-iam-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Log Type Log Name Description Notes Master daemon logs hadoop-hdfs hadoop-hdfs-namenode hadoop-hdfs-secondarynamenode hadoop-hdfs-zkfc hadoop-yarn-resourcemanager hadoop-yarn-timelineserver hive-metastore hive-server2 hadoop-mapred-historyserver zookeeper Journal node HDFS namenode HDFS secondary namenode Zookeeper failover controller YARN resource manager YARN timeline server Hive metastore Hive server2 Mapreduce job history server Zookeeper server Worker daemon logs hadoop-hdfs-datanode hadoop-yarn-nodemanager HDFS datanode YARN nodemanager System logs autoscaler google.dataproc.agent google.dataproc.startup Managed Service for Apache Spark autoscaler log Managed Service for Apache Spark agent log Managed Service for Apache Spark startup script log + initialization action log Extended (additional) logs knox gateway-audit zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server All logs inside /var/log/ subdirectories matching: knox (includes gateway-audit.log) zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server Setting the dataproc:dataproc.logging.extended.enabled=false property disables the collection of extended logs on the cluster VM syslogs syslog Syslogs from cluster's master and worker nodes Setting the dataproc:dataproc.logging.syslog.enabled=false property disables the collection of VM syslogs on the cluster Access cluster logs in Cloud Logging You can access Managed Service for Apache Spark cluster logs using the Logs Explorer , the gcloud logging command, or the Logging API .
- The following command uses cluster labels to filter the returned log entries. gcloud logging read <<'EOF' "resource.type=cloud dataproc cluster resource.labels.region= cluster-region resource.labels.cluster name= cluster-name resource.labels.cluster uuid= cluster-uuid " EOF Sample output (partial): jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-cluster-name-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager --- jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-component-gateway-cluster-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager Run gcloud dataproc clusters describe cluster-name --region= region to list cluster labels that you can use to filter logging results.
- Example: Managed Service for Apache Spark image version 2.0 with Spark 3.1 to set log4j.logger.org.apache.spark : gcloud dataproc clusters create ... \ --properties spark-log4j:log4j.logger.org.apache.spark=DEBUG Example: Managed Service for Apache Spark image version 2.1 with Spark 3.3 to set logger.sparkRoot.level : gcloud dataproc clusters create ...\ --properties spark-log4j:logger.sparkRoot.level=debug Job driver logging levels Managed Service for Apache Spark uses a default logging level of INFO for job driver programs.
- The following command uses cluster labels to filter the returned log entries. gcloud logging read \ "resource.type=cloud dataproc job \ resource.labels.region= cluster-region \ resource.labels.job id= my-job-id " Sample output (partial): jsonPayload: class: org.apache.hadoop.hdfs.StateChange filename: hadoop-hdfs-namenode-test-dataproc-resize-cluster-20190410-38an-m-0.log ,,, logName: projects/project-id/logs/hadoop-hdfs-namenode --- jsonPayload: class: SecurityLogger.org.apache.hadoop.security.authorize.ServiceAuthorizationManager filename: cluster-name-dataproc-resize-cluster-20190410-38an-m-0.log ... logName: projects/google.com:hadoop-cloud-dev/logs/hadoop-hdfs-namenode REST API You can use the Logging REST API to list log entries (see entries.list ).

### Cloud Logging \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/logging](https://docs.cloud.google.com/dataproc-metastore/docs/logging)
- Source ID: `site-docs-root-2`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console In the Google Cloud console, go to the Cloud Logging > Logs (Logs Explorer) page: Go to the Logs Explorer page Select an existing Dataproc Metastore Google Cloud project.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Cloud Logging Stay organized with collections Save and categorize content based on your preferences.
- Access job logs in Logging When you run Dataproc Metastore, a Hive metastore process output is streamed to the Google Cloud console.
- Dataproc Metastore service logs in Logging Dataproc Metastore exports request and system logs to Cloud Logging.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- Attempt to create a Managed Service for Apache Spark cluster with an expired custom image or a custom image that will expire within 10 days. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --region= REGION \ ... other flags The gcloud CLI will issue an error message that includes the cluster dataproc:dataproc.custom.image.expiration.token property name and token value. dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE Copy the TOKEN VALUE string to the clipboard.
- Use the gcloud CLI to create the Managed Service for Apache Spark cluster again, adding the copied TOKEN VALUE as a cluster property. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --properties=dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE \ --region= REGION \ ... other flags Cluster creation with the custom image should succeed.

