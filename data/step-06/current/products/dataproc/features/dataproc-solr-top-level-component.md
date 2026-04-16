---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.646Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Solr Top-Level Component"
feature_slug: "dataproc-solr-top-level-component"
latest_feature_date: "2020-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
keywords:
  - "dataproc"
  - "solr"
  - "top"
  - "level"
  - "component"
  - "provides"
---

# Dataproc Solr Top-Level Component

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc Solr Top-Level Component provides Solr as a top-level Dataproc component.

## Extended Definition

The Dataproc Solr Top-Level Component provides Solr as a top-level Dataproc component.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)

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

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Enable sharing after cluster creation : You can enable sharing checkpoint data with Google Cloud support after cluster creation by providing read access to checkpoint data to the service account used by the Google Cloud support, as follows: If uniform bucket-level access is enabled on the temp bucket, add IAM policy binding: gcloud storage buckets add-iam-policy-binding gs:// TEMP BUCKET \ --member=serviceAccount:cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com \ --role=roles/storage.objectViewer If object-level access control is enabled on the temp bucket, run the following command to share checkpoint diagnostic data: gcloud storage objects update \ gs:// TEMP BUCKET /google-cloud-dataproc-diagnostic/ CLUSTER UUID \ --add-acl-grant=entity=user-cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com,role=READER --recursive Disable checkpoint diagnostic data collection To disable the collection of checkpoint diagnostic data on a cluster, set dataproc:diagnostic.capture.enabled=false when you create the cluster.
- Component gateway logs from journalctl -u google-dataproc-component-gateway /logs/google-dataproc-component-gateway.log Configuration files Item(s) included Location in archive VM metadata /conf/dataproc/metadata Environment variables in /etc/environment /conf/dataproc/environment Managed Service for Apache Spark properties /conf/dataproc/dataproc.properties All files in /etc/google-dataproc/ /conf/dataproc/ All files in /etc/hadoop/conf/ /conf/hadoop/ All files in /etc/hive/conf/ /conf/hive/ All files in /etc/hive-hcatalog/conf/ /conf/hive-hcatalog/ All files in /etc/knox/conf/ /conf/knox/ All files in /etc/pig/conf/ /conf/pig/ All files in /etc/presto/conf/ /conf/presto/ All files in /etc/spark/conf/ /conf/spark/ All files in /etc/tez/conf/ /conf/tez/ All files in /etc/zookeeper/conf/ /conf/zookeeper/ Share the archive file Sensitive log information: If you pass sensitive information in arguments, metadata, or driver output, your logs may contain sensitive information.
- REGION : The cluster's region, for example, us-central1 . --tarball-access = GOOGLE DATAPROC DIAGNOSE This flag provides access to the diagnostic tar file to Google Cloud support .
- Daemons and services information Command executed Location in archive yarn node -list -all /system/yarn-nodes.log hdfs dfsadmin -report -live -decommissioning /system/hdfs-nodes.log hdfs dfs -du -h /system/hdfs-du.log service --status-all /system/service.log systemctl --type service /system/systemd-services.log curl "http://${HOSTNAME}:8088/jmx" /metrics/resource manager jmx curl "http://${HOSTNAME}:8088/ws/v1/cluster/apps" /metrics/yarn app info curl "http://${HOSTNAME}:8088/ws/v1/cluster/nodes" /metrics/yarn node info curl "http://${HOSTNAME}:9870/jmx" /metrics/namenode jmx JVM information Command executed Location in archive jstack -l "${DATAPROC AGENT PID}" jstack/agent ${DATAPROC AGENT PID}.jstack jstack -l "${PRESTO PID}" jstack/agent ${PRESTO PID}.jstack jstack -l "${JOB DRIVER PID}" jstack/driver ${JOB DRIVER PID}.jstack jinfo "${DATAPROC AGENT PID}" jinfo/agent ${DATAPROC AGENT PID}.jstack jinfo "${PRESTO PID}" jinfo/agent ${PRESTO PID}.jstack jinfo "${JOB DRIVER PID}" jinfo/agent ${JOB DRIVER PID}.jstack Linux system information Command executed Location in archive df -h /system/df.log ps aux /system/ps.log free -m /system/free.log netstat -anp /system/netstat.log sysctl -a /system/sysctl.log uptime /system/uptime.log cat /proc/sys/fs/file-nr /system/fs-file-nr.log ping -c 1 /system/cluster-ping.log Log files Item included Location in archive All logs in /var/log with the following prefixes in their filename: cloud-sql-proxy dataproc druid gcdp google hadoop hdfs hive knox presto spark syslog yarn zookeeper Files are placed in the archive logs folder, and keep their original filenames.

