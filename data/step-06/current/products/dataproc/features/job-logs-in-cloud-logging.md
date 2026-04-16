---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.662Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Job Logs in Cloud Logging"
feature_slug: "job-logs-in-cloud-logging"
latest_feature_date: "2019-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/logging"
  - "https://docs.cloud.google.com/dataproc/docs/guides/logging"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging"
keywords:
  - "job"
  - "logs"
  - "logging"
  - "lets"
  - "users"
  - "send"
  - "manage"
  - "dataproc"
---

# Job Logs in Cloud Logging

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Job Logs in Cloud Logging lets users send and manage Dataproc job driver and YARN container logs in Cloud Logging.

## Extended Definition

Job Logs in Cloud Logging lets users send and manage Dataproc job driver and YARN container logs in Cloud Logging.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/logging](https://docs.cloud.google.com/dataproc-metastore/docs/logging)
- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging)

## Supporting Pages

### Managed Service for Apache Spark logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Log Type Log Name Description Notes Master daemon logs hadoop-hdfs hadoop-hdfs-namenode hadoop-hdfs-secondarynamenode hadoop-hdfs-zkfc hadoop-yarn-resourcemanager hadoop-yarn-timelineserver hive-metastore hive-server2 hadoop-mapred-historyserver zookeeper Journal node HDFS namenode HDFS secondary namenode Zookeeper failover controller YARN resource manager YARN timeline server Hive metastore Hive server2 Mapreduce job history server Zookeeper server Worker daemon logs hadoop-hdfs-datanode hadoop-yarn-nodemanager HDFS datanode YARN nodemanager System logs autoscaler google.dataproc.agent google.dataproc.startup Managed Service for Apache Spark autoscaler log Managed Service for Apache Spark agent log Managed Service for Apache Spark startup script log + initialization action log Extended (additional) logs knox gateway-audit zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server All logs inside /var/log/ subdirectories matching: knox (includes gateway-audit.log) zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server Setting the dataproc:dataproc.logging.extended.enabled=false property disables the collection of extended logs on the cluster VM syslogs syslog Syslogs from cluster's master and worker nodes Setting the dataproc:dataproc.logging.syslog.enabled=false property disables the collection of VM syslogs on the cluster Access cluster logs in Cloud Logging You can access Managed Service for Apache Spark cluster logs using the Logs Explorer , the gcloud logging command, or the Logging API .
- The following command uses cluster labels to filter the returned log entries. gcloud logging read <<'EOF' "resource.type=cloud dataproc cluster resource.labels.region= cluster-region resource.labels.cluster name= cluster-name resource.labels.cluster uuid= cluster-uuid " EOF Sample output (partial): jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-cluster-name-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager --- jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-component-gateway-cluster-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager Run gcloud dataproc clusters describe cluster-name --region= region to list cluster labels that you can use to filter logging results.
- The following command uses cluster labels to filter the returned log entries. gcloud logging read \ "resource.type=cloud dataproc job \ resource.labels.region= cluster-region \ resource.labels.job id= my-job-id " Sample output (partial): jsonPayload: class: org.apache.hadoop.hdfs.StateChange filename: hadoop-hdfs-namenode-test-dataproc-resize-cluster-20190410-38an-m-0.log ,,, logName: projects/project-id/logs/hadoop-hdfs-namenode --- jsonPayload: class: SecurityLogger.org.apache.hadoop.security.authorize.ServiceAuthorizationManager filename: cluster-name-dataproc-resize-cluster-20190410-38an-m-0.log ... logName: projects/google.com:hadoop-cloud-dev/logs/hadoop-hdfs-namenode REST API You can use the Logging REST API to list log entries (see entries.list ).
- Example: Managed Service for Apache Spark image version 2.0 with Spark 3.1 to set log4j.logger.org.apache.spark : gcloud dataproc clusters create ... \ --properties spark-log4j:log4j.logger.org.apache.spark=DEBUG Example: Managed Service for Apache Spark image version 2.1 with Spark 3.3 to set logger.sparkRoot.level : gcloud dataproc clusters create ...\ --properties spark-log4j:logger.sparkRoot.level=debug Job driver logging levels Managed Service for Apache Spark uses a default logging level of INFO for job driver programs.

### "Enable GKE logging \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can search for Spark driver and executor logs in Cloud Logging using the following labels: dataproc.googleapis.com/cluster-uuid = Managed Service for Apache Spark cluster UUID dataproc.googleapis.com/job-uuid = Managed Service for Apache Spark job UUID dataproc.googleapis.com/role Sample queries: labels."k8s-pod/dataproc googleapis com/cluster-uuid"=" Managed Service for Apache Spark cluster UUID " labels."k8s-pod/dataproc googleapis com/job-uuid"=" Managed Service for Apache Spark job UUID " labels."k8s-pod/dataproc googleapis com/role"="driver" What's next Learn how to access Managed Service for Apache Spark on GKE job and cluster logs in Logging .
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Enable GKE logging Stay organized with collections Save and categorize content based on your preferences.
- Job driver logs See Managed Service for Apache Spark job logs in Logging for information on configuring and viewing Managed Service for Apache Spark on GKE Spark job driver logs.
- Cloud Logging Enable Logging to view, search, filter, and archive Managed Service for Apache Spark on GKE logs in Cloud Logging.

### Cloud Logging \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/logging](https://docs.cloud.google.com/dataproc-metastore/docs/logging)
- Source ID: `site-docs-root-2`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Log Type Log Name logName query Request logs metastore.googleapis.com/requests logName=(projects/$PROJECT ID/logs/metastore.googleapis.com%2Frequests) System logs metastore.googleapis.com/system logName=(projects/$PROJECT ID/logs/metastore.googleapis.com%2Fsystem) What's next Cloud Logging documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Console In the Google Cloud console, go to the Cloud Logging > Logs (Logs Explorer) page: Go to the Logs Explorer page Select an existing Dataproc Metastore Google Cloud project.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Cloud Logging Stay organized with collections Save and categorize content based on your preferences.
- Access job logs in Logging When you run Dataproc Metastore, a Hive metastore process output is streamed to the Google Cloud console.

