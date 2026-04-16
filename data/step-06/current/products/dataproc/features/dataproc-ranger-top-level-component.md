---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.645Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Ranger Top-Level Component"
feature_slug: "dataproc-ranger-top-level-component"
latest_feature_date: "2020-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/guides/logging"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "dataproc"
  - "ranger"
  - "top"
  - "level"
  - "component"
  - "provides"
---

# Dataproc Ranger Top-Level Component

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc Ranger Top-Level Component provides Ranger as a top-level Dataproc component.

## Extended Definition

The Dataproc Ranger Top-Level Component provides Ranger as a top-level Dataproc component.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Async Service The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Session Template Controller Grpc The SessionTemplateController provides methods to manage session templates. com. google. cloud. dataproc. v1.

### Managed Service for Apache Spark logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- Source ID: `site-iam-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Log Type Log Name Description Notes Master daemon logs hadoop-hdfs hadoop-hdfs-namenode hadoop-hdfs-secondarynamenode hadoop-hdfs-zkfc hadoop-yarn-resourcemanager hadoop-yarn-timelineserver hive-metastore hive-server2 hadoop-mapred-historyserver zookeeper Journal node HDFS namenode HDFS secondary namenode Zookeeper failover controller YARN resource manager YARN timeline server Hive metastore Hive server2 Mapreduce job history server Zookeeper server Worker daemon logs hadoop-hdfs-datanode hadoop-yarn-nodemanager HDFS datanode YARN nodemanager System logs autoscaler google.dataproc.agent google.dataproc.startup Managed Service for Apache Spark autoscaler log Managed Service for Apache Spark agent log Managed Service for Apache Spark startup script log + initialization action log Extended (additional) logs knox gateway-audit zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server All logs inside /var/log/ subdirectories matching: knox (includes gateway-audit.log) zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server Setting the dataproc:dataproc.logging.extended.enabled=false property disables the collection of extended logs on the cluster VM syslogs syslog Syslogs from cluster's master and worker nodes Setting the dataproc:dataproc.logging.syslog.enabled=false property disables the collection of VM syslogs on the cluster Access cluster logs in Cloud Logging You can access Managed Service for Apache Spark cluster logs using the Logs Explorer , the gcloud logging command, or the Logging API .
- The following command uses cluster labels to filter the returned log entries. gcloud logging read <<'EOF' "resource.type=cloud dataproc cluster resource.labels.region= cluster-region resource.labels.cluster name= cluster-name resource.labels.cluster uuid= cluster-uuid " EOF Sample output (partial): jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-cluster-name-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager --- jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-component-gateway-cluster-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager Run gcloud dataproc clusters describe cluster-name --region= region to list cluster labels that you can use to filter logging results.
- Example: Set the DEBUG logging level when submitting a Spark job that reads Cloud Storage files. gcloud dataproc jobs submit spark ...\ --driver-log-levels org.apache.spark=DEBUG,com.google.cloud.hadoop.gcsio=DEBUG Example: Set the root logger level to WARN , com.example logger level to INFO . gcloud dataproc jobs submit hadoop ...\ --driver-log-levels root=WARN,com.example=INFO Spark executor logging levels To configure Spark executor logging levels: Prepare a log4j config file, and then upload it to Cloud Storage Copy and customize the default log4j config located in /etc/spark/conf/ .
- Example: Managed Service for Apache Spark image version 2.0 with Spark 3.1 to set log4j.logger.org.apache.spark : gcloud dataproc clusters create ... \ --properties spark-log4j:log4j.logger.org.apache.spark=DEBUG Example: Managed Service for Apache Spark image version 2.1 with Spark 3.3 to set logger.sparkRoot.level : gcloud dataproc clusters create ...\ --properties spark-log4j:logger.sparkRoot.level=debug Job driver logging levels Managed Service for Apache Spark uses a default logging level of INFO for job driver programs.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
- ANACONDA The Anaconda component is no longer supported or applicable to supported Dataproc on Compute Engine image versions .

