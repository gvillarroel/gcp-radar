---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.165Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Presto Coordinator startup timeout"
feature_slug: "presto-coordinator-startup-timeout"
latest_feature_date: "2020-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
keywords:
  - "coordinator"
  - "allows"
  - "startup"
  - "wait"
  - "configuration"
  - "timeout"
  - "presto"
---

# Presto Coordinator startup timeout

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc allows configuration of the startup wait timeout for the Presto Coordinator service.

## Extended Definition

Dataproc allows configuration of the startup wait timeout for the Presto Coordinator service.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Startup Config Configuration to handle the startup of instances during cluster create and update process. com. google. cloud. dataproc. v1.
- Builder Configuration to handle the startup of instances during cluster create and update process. com. google. cloud. dataproc. v1.
- Instance Group Autoscaling Policy Config Configuration for the size bounds of an instance group, including its proportional size to other groups. com. google. cloud. dataproc. v1.
- Node Initialization Action Specifies an executable to run on a fully configured node and a timeout period for executable completion. com. google. cloud. dataproc. v1.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- When this key resource name is provided, the following job arguments of the following job types submitted to the cluster are encrypted using CMEK: FlinkJob args HadoopJob args SparkJob args SparkRJob args PySparkJob args SparkSqlJob scriptVariables and queryList.queries HiveJob scriptVariables and queryList.queries PigJob scriptVariables and queryList.queries PrestoJob scriptVariables and queryList.queries AutoscalingConfig Autoscaling Policy config associated with the cluster.
- Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
- HIVEMETASTORE hivemetastore metric source FLINK flink metric source AuxiliaryNodeGroup Node group identification and configuration information.
- NodeInitializationAction Specifies an executable to run on a fully configured node and a timeout period for executable completion.

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Component gateway logs from journalctl -u google-dataproc-component-gateway /logs/google-dataproc-component-gateway.log Configuration files Item(s) included Location in archive VM metadata /conf/dataproc/metadata Environment variables in /etc/environment /conf/dataproc/environment Managed Service for Apache Spark properties /conf/dataproc/dataproc.properties All files in /etc/google-dataproc/ /conf/dataproc/ All files in /etc/hadoop/conf/ /conf/hadoop/ All files in /etc/hive/conf/ /conf/hive/ All files in /etc/hive-hcatalog/conf/ /conf/hive-hcatalog/ All files in /etc/knox/conf/ /conf/knox/ All files in /etc/pig/conf/ /conf/pig/ All files in /etc/presto/conf/ /conf/presto/ All files in /etc/spark/conf/ /conf/spark/ All files in /etc/tez/conf/ /conf/tez/ All files in /etc/zookeeper/conf/ /conf/zookeeper/ Share the archive file Sensitive log information: If you pass sensitive information in arguments, metadata, or driver output, your logs may contain sensitive information.
- Daemons and services information Command executed Location in archive yarn node -list -all /system/yarn-nodes.log hdfs dfsadmin -report -live -decommissioning /system/hdfs-nodes.log hdfs dfs -du -h /system/hdfs-du.log service --status-all /system/service.log systemctl --type service /system/systemd-services.log curl "http://${HOSTNAME}:8088/jmx" /metrics/resource manager jmx curl "http://${HOSTNAME}:8088/ws/v1/cluster/apps" /metrics/yarn app info curl "http://${HOSTNAME}:8088/ws/v1/cluster/nodes" /metrics/yarn node info curl "http://${HOSTNAME}:9870/jmx" /metrics/namenode jmx JVM information Command executed Location in archive jstack -l "${DATAPROC AGENT PID}" jstack/agent ${DATAPROC AGENT PID}.jstack jstack -l "${PRESTO PID}" jstack/agent ${PRESTO PID}.jstack jstack -l "${JOB DRIVER PID}" jstack/driver ${JOB DRIVER PID}.jstack jinfo "${DATAPROC AGENT PID}" jinfo/agent ${DATAPROC AGENT PID}.jstack jinfo "${PRESTO PID}" jinfo/agent ${PRESTO PID}.jstack jinfo "${JOB DRIVER PID}" jinfo/agent ${JOB DRIVER PID}.jstack Linux system information Command executed Location in archive df -h /system/df.log ps aux /system/ps.log free -m /system/free.log netstat -anp /system/netstat.log sysctl -a /system/sysctl.log uptime /system/uptime.log cat /proc/sys/fs/file-nr /system/fs-file-nr.log ping -c 1 /system/cluster-ping.log Log files Item included Location in archive All logs in /var/log with the following prefixes in their filename: cloud-sql-proxy dataproc druid gcdp google hadoop hdfs hive knox presto spark syslog yarn zookeeper Files are placed in the archive logs folder, and keep their original filenames.
- Item(s) included Location in diagnostics folder Managed Service for Apache Spark properties .../configs/dataproc/dataproc.properties All files in /etc/google-dataproc/ .../configs/dataproc/ All files in /etc/hadoop/conf/ .../configs/hadoop/ All files in /etc/hive/conf/ .../configs/hive/ All files in /etc/hive-hcatalog/conf/ .../configs/hive-hcatalog/ All files in /etc/knox/conf/ .../configs/knox/ All files in /etc/pig/conf/ .../configs/pig/ All files in /etc/presto/conf/ .../configs/presto/ All files in /etc/spark/conf/ .../configs/spark/ All files in /etc/tez/conf/ .../configs/tez/ All files in /etc/zookeeper/conf/ .../configs/zookeeper/ Share checkpoint diagnostic data with support You can enable sharing checkpoint diagnostic data with Google Cloud support in the following ways: Enable sharing at cluster creation : Add the following optional cluster property when you create a cluster : dataproc:diagnostic.capture.access=GOOGLE DATAPROC DIAGNOSE This property automatically shares collected checkpoint diagnostic data with Google Cloud support so that you don't have to manually share after cluster creation each time.
- Command Location in diagnostics folder sysctl -a .../system/sysctl.log cat /proc/sys/fs/file-nr .../system/fs-file-nr.log ping -c 1 .../system/cluster-ping.log cp /etc/hosts .../system/hosts entries.log cp /etc/resolv.conf .../system/resolv.conf Configuration files: Managed Service for Apache Spark saves the following configuration files in the following locations in the checkpoint diagnostic data folder in Cloud Storage.

