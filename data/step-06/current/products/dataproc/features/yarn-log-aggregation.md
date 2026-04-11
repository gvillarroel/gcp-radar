---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.090Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "YARN log aggregation"
feature_slug: "yarn-log-aggregation"
latest_feature_date: "2020-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/data-catalog-sync"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output"
  - "https://docs.cloud.google.com/dataproc/docs/guides/logging"
keywords:
  - "yarn"
  - "log"
  - "aggregation"
  - "dataproc"
  - "can"
  - "aggregate"
  - "logs"
  - "to"
---

# YARN log aggregation

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc can aggregate YARN logs to a Dataproc temporary bucket and lets users configure the remote aggregated log directory.

## Extended Definition

Dataproc can aggregate YARN logs to a Dataproc temporary bucket and lets users configure the remote aggregated log directory.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/data-catalog-sync](https://docs.cloud.google.com/dataproc-metastore/docs/data-catalog-sync)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)

## Supporting Pages

### Sync Dataproc Metastore to Data Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/data-catalog-sync](https://docs.cloud.google.com/dataproc-metastore/docs/data-catalog-sync)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the resource mapping between Dataproc Metastore and Data Catalog: Dataproc Metastore Resource Data Catalog Resource Instance Entry group Entry Database Entry Table Entry Column Schema Considerations It can take up to 6 hours before your Dataproc Metastore metadata is fully synced with Data Catalog.
- How Data Catalog sync works with Dataproc Metastore You can enable Dataproc Metastore to Data Catalog sync when you create or update a Dataproc Metastore service using the Google Cloud console.
- If you suspect that there is a problem with the sync, check the metadata publishing logs in Dataproc Metastore Cloud Logging with the filter textPayload= ".
- For example, by using Data Catalog, you can tag and search for specific Dataproc Metastore resources, such as databases and tables.

### "Job output and logs \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-job-output)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spark driver logs The following tables list the effect of different property settings on the destination of Spark driver logs. spark: spark.submit.deployMode dataproc: dataproc.logging.stackdriver.job.driver.enable dataproc: dataproc.logging.stackdriver.job.yarn.container.enable Driver Output client false (default) true or false Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri Not in Logging client true true or false Streamed to client In Cloud Storage at the Managed Service for Apache Spark-generated driverOutputResourceUri In Logging: dataproc.job.driver under the job resource cluster false (default) false Not streamed to client Not in Cloud Storage In Logging yarn-userlogs under the cluster resource cluster true true Not streamed to client Not in Cloud Storage In Logging: dataproc.job.yarn.container under the job resource Spark executor logs The following tables list the effect of different property settings on the destination of Spark executor logs. dataproc: dataproc.logging.stackdriver.job.yarn.container.enable Executor log false (default) In Logging: yarn-userlogs under the cluster resource true In Logging dataproc.job.yarn.container under the job resource Spark jobs submitted without using the Managed Service for Apache Spark jobs API This section lists the effect of different property settings on the destination of Spark job logs when jobs are submitted without using the Managed Service for Apache Spark jobs API, for example when submitting a job directly on a cluster node using spark-submit or when using a Jupyter or Zeppelin notebook.
- Note: The following cluster property settings are also required to enable job driver logs in Logging, and are set by default when a cluster is created: dataproc:dataproc.logging.stackdriver.enable=true and dataproc:jobs.file-backed-output.enable=true dataproc:dataproc.logging.stackdriver.job.yarn.container.enable true or false false Must be set at cluster creation time.
- Spark driver logs The following tables list the effect of different property settings on the destination of Spark driver logs for jobs not submitted through the Managed Service for Apache Spark jobs API. spark: spark.submit.deployMode Driver Output client Streamed to client Not in Cloud Storage Not in Logging cluster Not streamed to client Not in Cloud Storage In Logging yarn-userlogs under the cluster resource Spark executor logs When Spark jobs are not submitted through the Managed Service for Apache Spark jobs API, executor logs are in Logging yarn-userlogs under the cluster resource.
- The Spark driver runs the job on the Managed Service for Apache Spark cluster in Spark client or cluster mode : client mode: the Spark driver runs the job in the spark-submit process, and Spark logs are sent to the Managed Service for Apache Spark job driver. cluster mode: the Spark driver runs the job in a YARN container.

### Managed Service for Apache Spark logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Log Type Log Name Description Notes Master daemon logs hadoop-hdfs hadoop-hdfs-namenode hadoop-hdfs-secondarynamenode hadoop-hdfs-zkfc hadoop-yarn-resourcemanager hadoop-yarn-timelineserver hive-metastore hive-server2 hadoop-mapred-historyserver zookeeper Journal node HDFS namenode HDFS secondary namenode Zookeeper failover controller YARN resource manager YARN timeline server Hive metastore Hive server2 Mapreduce job history server Zookeeper server Worker daemon logs hadoop-hdfs-datanode hadoop-yarn-nodemanager HDFS datanode YARN nodemanager System logs autoscaler google.dataproc.agent google.dataproc.startup Managed Service for Apache Spark autoscaler log Managed Service for Apache Spark agent log Managed Service for Apache Spark startup script log + initialization action log Extended (additional) logs knox gateway-audit zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server All logs inside /var/log/ subdirectories matching: knox (includes gateway-audit.log) zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server Setting the dataproc:dataproc.logging.extended.enabled=false property disables the collection of extended logs on the cluster VM syslogs syslog Syslogs from cluster's master and worker nodes Setting the dataproc:dataproc.logging.syslog.enabled=false property disables the collection of VM syslogs on the cluster Access cluster logs in Cloud Logging You can access Managed Service for Apache Spark cluster logs using the Logs Explorer , the gcloud logging command, or the Logging API .
- The following command uses cluster labels to filter the returned log entries. gcloud logging read <<'EOF' "resource.type=cloud dataproc cluster resource.labels.region= cluster-region resource.labels.cluster name= cluster-name resource.labels.cluster uuid= cluster-uuid " EOF Sample output (partial): jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-cluster-name-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager --- jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-component-gateway-cluster-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager Run gcloud dataproc clusters describe cluster-name --region= region to list cluster labels that you can use to filter logging results.
- The following command uses cluster labels to filter the returned log entries. gcloud logging read \ "resource.type=cloud dataproc job \ resource.labels.region= cluster-region \ resource.labels.job id= my-job-id " Sample output (partial): jsonPayload: class: org.apache.hadoop.hdfs.StateChange filename: hadoop-hdfs-namenode-test-dataproc-resize-cluster-20190410-38an-m-0.log ,,, logName: projects/project-id/logs/hadoop-hdfs-namenode --- jsonPayload: class: SecurityLogger.org.apache.hadoop.security.authorize.ServiceAuthorizationManager filename: cluster-name-dataproc-resize-cluster-20190410-38an-m-0.log ... logName: projects/google.com:hadoop-cloud-dev/logs/hadoop-hdfs-namenode REST API You can use the Logging REST API to list log entries (see entries.list ).
- Example: Job driver log after running a Logs Explorer query with the following selections: Resource: Cloud Dataproc Job Log name: dataproc.job.driver Example: YARN container log after running a Logs Explorer query with the following selections: Resource: Cloud Dataproc Job Log name: dataproc.job.yarn.container gcloud You can read job log entries using the gcloud logging read command.

