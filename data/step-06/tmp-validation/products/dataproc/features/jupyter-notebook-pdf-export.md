---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.166Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Jupyter notebook PDF export"
feature_slug: "jupyter-notebook-pdf-export"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/logging"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/overview"
keywords:
  - "exporting"
  - "notebooks"
  - "notebook"
  - "export"
  - "jupyter"
  - "supports"
---

# Jupyter notebook PDF export

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Jupyter on Dataproc supports exporting notebooks as PDF files.

## Extended Definition

Jupyter on Dataproc supports exporting notebooks as PDF files.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)

## Supporting Pages

### Managed Service for Apache Spark logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- Source ID: `site-iam-reference`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- Log Type Log Name Description Notes Master daemon logs hadoop-hdfs hadoop-hdfs-namenode hadoop-hdfs-secondarynamenode hadoop-hdfs-zkfc hadoop-yarn-resourcemanager hadoop-yarn-timelineserver hive-metastore hive-server2 hadoop-mapred-historyserver zookeeper Journal node HDFS namenode HDFS secondary namenode Zookeeper failover controller YARN resource manager YARN timeline server Hive metastore Hive server2 Mapreduce job history server Zookeeper server Worker daemon logs hadoop-hdfs-datanode hadoop-yarn-nodemanager HDFS datanode YARN nodemanager System logs autoscaler google.dataproc.agent google.dataproc.startup Managed Service for Apache Spark autoscaler log Managed Service for Apache Spark agent log Managed Service for Apache Spark startup script log + initialization action log Extended (additional) logs knox gateway-audit zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server All logs inside /var/log/ subdirectories matching: knox (includes gateway-audit.log) zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server Setting the dataproc:dataproc.logging.extended.enabled=false property disables the collection of extended logs on the cluster VM syslogs syslog Syslogs from cluster's master and worker nodes Setting the dataproc:dataproc.logging.syslog.enabled=false property disables the collection of VM syslogs on the cluster Access cluster logs in Cloud Logging You can access Managed Service for Apache Spark cluster logs using the Logs Explorer , the gcloud logging command, or the Logging API .
- Managed Service for Apache Spark cluster logs in Logging Managed Service for Apache Spark exports the following Apache Hadoop, Spark, Hive, Zookeeper, and other Managed Service for Apache Spark cluster logs to Cloud Logging.

### Dataproc Metastore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Rely on standard OAuth authentication used by other Google Cloud products, which supports using granular Identity and Access Management roles to enable access control for individual resources.
- In addition to Zonal HA, Dataproc Metastore 2 supports regional HA and Disaster Recovery (DR).

