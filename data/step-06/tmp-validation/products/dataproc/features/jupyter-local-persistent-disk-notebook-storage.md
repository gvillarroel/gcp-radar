---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.161Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Jupyter local persistent disk notebook storage"
feature_slug: "jupyter-local-persistent-disk-notebook-storage"
latest_feature_date: "2020-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/logging"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop"
keywords:
  - "notebook"
  - "jupyter"
  - "persistent"
  - "local"
  - "disk"
  - "storage"
  - "supports"
---

# Jupyter local persistent disk notebook storage

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Jupyter on Dataproc supports notebooks stored on VM persistent disk alongside Cloud Storage-backed notebooks.

## Extended Definition

Jupyter on Dataproc supports notebooks stored on VM persistent disk alongside Cloud Storage-backed notebooks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud KMS key resource name to use for persistent disk encryption for all instances in the cluster.
- The Cloud KMS key resource name to use for cluster persistent disk and job argument encryption.
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).

### Managed Service for Apache Spark logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Log Type Log Name Description Notes Master daemon logs hadoop-hdfs hadoop-hdfs-namenode hadoop-hdfs-secondarynamenode hadoop-hdfs-zkfc hadoop-yarn-resourcemanager hadoop-yarn-timelineserver hive-metastore hive-server2 hadoop-mapred-historyserver zookeeper Journal node HDFS namenode HDFS secondary namenode Zookeeper failover controller YARN resource manager YARN timeline server Hive metastore Hive server2 Mapreduce job history server Zookeeper server Worker daemon logs hadoop-hdfs-datanode hadoop-yarn-nodemanager HDFS datanode YARN nodemanager System logs autoscaler google.dataproc.agent google.dataproc.startup Managed Service for Apache Spark autoscaler log Managed Service for Apache Spark agent log Managed Service for Apache Spark startup script log + initialization action log Extended (additional) logs knox gateway-audit zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server All logs inside /var/log/ subdirectories matching: knox (includes gateway-audit.log) zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server Setting the dataproc:dataproc.logging.extended.enabled=false property disables the collection of extended logs on the cluster VM syslogs syslog Syslogs from cluster's master and worker nodes Setting the dataproc:dataproc.logging.syslog.enabled=false property disables the collection of VM syslogs on the cluster Access cluster logs in Cloud Logging You can access Managed Service for Apache Spark cluster logs using the Logs Explorer , the gcloud logging command, or the Logging API .
- Example: gcloud dataproc jobs submit spark ...\ --file gs://my-bucket/path/spark-log4j.properties \ --properties spark.executor.extraJavaOptions=-Dlog4j.configuration=file:spark-log4j.properties Spark downloads the Cloud Storage properties file to the job's local working directory, referenced as file:<name> in -Dlog4j.configuration .
- Example: Set the DEBUG logging level when submitting a Spark job that reads Cloud Storage files. gcloud dataproc jobs submit spark ...\ --driver-log-levels org.apache.spark=DEBUG,com.google.cloud.hadoop.gcsio=DEBUG Example: Set the root logger level to WARN , com.example logger level to INFO . gcloud dataproc jobs submit hadoop ...\ --driver-log-levels root=WARN,com.example=INFO Spark executor logging levels To configure Spark executor logging levels: Prepare a log4j config file, and then upload it to Cloud Storage Copy and customize the default log4j config located in /etc/spark/conf/ .
- For more information on CMEK support, see Manage the keys that protect Log Router data and Manage the keys that protect Logging storage data .

### "Stop and start clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Limitations You cannot stop: clusters with secondary workers clusters with local ssds When a cluster is stopped, you cannot: update the cluster submit jobs to the cluster access notebooks running on the cluster using the Managed Service for Apache Spark component gateway Starting a cluster When you restart a stopped cluster, any initialization actions won't be re-run.
- However, you continue to pay for any associated cluster resources, such as persistent disks .

