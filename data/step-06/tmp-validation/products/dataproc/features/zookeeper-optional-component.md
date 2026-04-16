---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.187Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Zookeeper optional component"
feature_slug: "zookeeper-optional-component"
latest_feature_date: "2019-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
keywords:
  - "zookeeper"
  - "install"
  - "apache"
  - "optional"
  - "component"
  - "when"
  - "users"
  - "lets"
---

# Zookeeper optional component

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Zookeeper optional component lets users install Apache Zookeeper when creating a Dataproc cluster.

## Extended Definition

The Zookeeper optional component lets users install Apache Zookeeper when creating a Dataproc cluster.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "imageVersion" : string , "properties" : { string : string , ... } , "optionalComponents" : [ enum ( Component ) ] } Fields imageVersion string Optional.
- An optional list of Compute Engine zones where the Dataproc cluster will not be located when Auto Zone is enabled.
- Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } . optionalComponents[] enum ( Component ) Optional.
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Using optional components: 2.2 and earlier base images: By default, all of the Managed Service for Apache Spark optional components (OS packages and configs) are installed on the custom image.
- Note: You must also list or select the optional components when you createthe cluster using the Google Cloud console, Google Cloud CLI, or Managed Service for Apache Spark API.
- Example: Google Cloud CLI cluster creation command : gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags If the component name is not specified when you create the cluster, the optional component, including any custom OS packages and configs, will be deleted.
- If your project is part of a shared VPC , you must specify the full subnetwork URL in the following format: projects/ HOST PROJECT ID /regions/ REGION /subnetworks/ SUBNET . --optional-components : This flag is available only when using base image versions 2.3 and later.

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Item(s) included Location in diagnostics folder Managed Service for Apache Spark properties .../configs/dataproc/dataproc.properties All files in /etc/google-dataproc/ .../configs/dataproc/ All files in /etc/hadoop/conf/ .../configs/hadoop/ All files in /etc/hive/conf/ .../configs/hive/ All files in /etc/hive-hcatalog/conf/ .../configs/hive-hcatalog/ All files in /etc/knox/conf/ .../configs/knox/ All files in /etc/pig/conf/ .../configs/pig/ All files in /etc/presto/conf/ .../configs/presto/ All files in /etc/spark/conf/ .../configs/spark/ All files in /etc/tez/conf/ .../configs/tez/ All files in /etc/zookeeper/conf/ .../configs/zookeeper/ Share checkpoint diagnostic data with support You can enable sharing checkpoint diagnostic data with Google Cloud support in the following ways: Enable sharing at cluster creation : Add the following optional cluster property when you create a cluster : dataproc:diagnostic.capture.access=GOOGLE DATAPROC DIAGNOSE This property automatically shares collected checkpoint diagnostic data with Google Cloud support so that you don't have to manually share after cluster creation each time.
- Component gateway logs from journalctl -u google-dataproc-component-gateway /logs/google-dataproc-component-gateway.log Configuration files Item(s) included Location in archive VM metadata /conf/dataproc/metadata Environment variables in /etc/environment /conf/dataproc/environment Managed Service for Apache Spark properties /conf/dataproc/dataproc.properties All files in /etc/google-dataproc/ /conf/dataproc/ All files in /etc/hadoop/conf/ /conf/hadoop/ All files in /etc/hive/conf/ /conf/hive/ All files in /etc/hive-hcatalog/conf/ /conf/hive-hcatalog/ All files in /etc/knox/conf/ /conf/knox/ All files in /etc/pig/conf/ /conf/pig/ All files in /etc/presto/conf/ /conf/presto/ All files in /etc/spark/conf/ /conf/spark/ All files in /etc/tez/conf/ /conf/tez/ All files in /etc/zookeeper/conf/ /conf/zookeeper/ Share the archive file Sensitive log information: If you pass sensitive information in arguments, metadata, or driver output, your logs may contain sensitive information.
- Optional: Run the diagnostic script The gcloud dataproc clusters diagnose command can fail or time-out if a cluster is in an error state and cannot accept diagnose tasks from the Managed Service for Apache Spark server.
- Daemons and services information Command executed Location in archive yarn node -list -all /system/yarn-nodes.log hdfs dfsadmin -report -live -decommissioning /system/hdfs-nodes.log hdfs dfs -du -h /system/hdfs-du.log service --status-all /system/service.log systemctl --type service /system/systemd-services.log curl "http://${HOSTNAME}:8088/jmx" /metrics/resource manager jmx curl "http://${HOSTNAME}:8088/ws/v1/cluster/apps" /metrics/yarn app info curl "http://${HOSTNAME}:8088/ws/v1/cluster/nodes" /metrics/yarn node info curl "http://${HOSTNAME}:9870/jmx" /metrics/namenode jmx JVM information Command executed Location in archive jstack -l "${DATAPROC AGENT PID}" jstack/agent ${DATAPROC AGENT PID}.jstack jstack -l "${PRESTO PID}" jstack/agent ${PRESTO PID}.jstack jstack -l "${JOB DRIVER PID}" jstack/driver ${JOB DRIVER PID}.jstack jinfo "${DATAPROC AGENT PID}" jinfo/agent ${DATAPROC AGENT PID}.jstack jinfo "${PRESTO PID}" jinfo/agent ${PRESTO PID}.jstack jinfo "${JOB DRIVER PID}" jinfo/agent ${JOB DRIVER PID}.jstack Linux system information Command executed Location in archive df -h /system/df.log ps aux /system/ps.log free -m /system/free.log netstat -anp /system/netstat.log sysctl -a /system/sysctl.log uptime /system/uptime.log cat /proc/sys/fs/file-nr /system/fs-file-nr.log ping -c 1 /system/cluster-ping.log Log files Item included Location in archive All logs in /var/log with the following prefixes in their filename: cloud-sql-proxy dataproc druid gcdp google hadoop hdfs hive knox presto spark syslog yarn zookeeper Files are placed in the archive logs folder, and keep their original filenames.

