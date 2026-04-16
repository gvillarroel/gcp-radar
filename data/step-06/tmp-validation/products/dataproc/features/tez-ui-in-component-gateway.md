---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.184Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Tez UI in Component Gateway"
feature_slug: "tez-ui-in-component-gateway"
latest_feature_date: "2019-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/logging"
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "gateway"
  - "component"
  - "access"
  - "supports"
---

# Tez UI in Component Gateway

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Component Gateway supports access to the Tez UI; Component Gateway supports access to the Tez UI.

## Extended Definition

Component Gateway supports access to the Tez UI; Component Gateway supports access to the Tez UI.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### Managed Service for Apache Spark logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- Source ID: `site-iam-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Log Type Log Name Description Notes Master daemon logs hadoop-hdfs hadoop-hdfs-namenode hadoop-hdfs-secondarynamenode hadoop-hdfs-zkfc hadoop-yarn-resourcemanager hadoop-yarn-timelineserver hive-metastore hive-server2 hadoop-mapred-historyserver zookeeper Journal node HDFS namenode HDFS secondary namenode Zookeeper failover controller YARN resource manager YARN timeline server Hive metastore Hive server2 Mapreduce job history server Zookeeper server Worker daemon logs hadoop-hdfs-datanode hadoop-yarn-nodemanager HDFS datanode YARN nodemanager System logs autoscaler google.dataproc.agent google.dataproc.startup Managed Service for Apache Spark autoscaler log Managed Service for Apache Spark agent log Managed Service for Apache Spark startup script log + initialization action log Extended (additional) logs knox gateway-audit zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server All logs inside /var/log/ subdirectories matching: knox (includes gateway-audit.log) zeppelin ranger-usersync jupyter notebook jupyter kernel gateway spark-history-server Setting the dataproc:dataproc.logging.extended.enabled=false property disables the collection of extended logs on the cluster VM syslogs syslog Syslogs from cluster's master and worker nodes Setting the dataproc:dataproc.logging.syslog.enabled=false property disables the collection of VM syslogs on the cluster Access cluster logs in Cloud Logging You can access Managed Service for Apache Spark cluster logs using the Logs Explorer , the gcloud logging command, or the Logging API .
- The following command uses cluster labels to filter the returned log entries. gcloud logging read <<'EOF' "resource.type=cloud dataproc cluster resource.labels.region= cluster-region resource.labels.cluster name= cluster-name resource.labels.cluster uuid= cluster-uuid " EOF Sample output (partial): jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-cluster-name-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager --- jsonPayload: class: org.apache.hadoop.yarn.server.resourcemanager.ResourceTrackerService filename: hadoop-yarn-resourcemanager-component-gateway-cluster-m.log ... logName: projects/project-id/logs/hadoop-yarn-resourcemanager Run gcloud dataproc clusters describe cluster-name --region= region to list cluster labels that you can use to filter logging results.
- Component logging levels Set Spark, Hadoop, Flink, and other Managed Service for Apache Spark component logging levels with component-specific log4j cluster properties , such as hadoop-log4j , when you create a cluster .
- Spark and Hive component version logging levels: The Spark 3.3.X and Hive 3.X components use log4j2 properties, while previous versions of these components use log4j properties (see Apache Log4j2 ).

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Component gateway logs from journalctl -u google-dataproc-component-gateway /logs/google-dataproc-component-gateway.log Configuration files Item(s) included Location in archive VM metadata /conf/dataproc/metadata Environment variables in /etc/environment /conf/dataproc/environment Managed Service for Apache Spark properties /conf/dataproc/dataproc.properties All files in /etc/google-dataproc/ /conf/dataproc/ All files in /etc/hadoop/conf/ /conf/hadoop/ All files in /etc/hive/conf/ /conf/hive/ All files in /etc/hive-hcatalog/conf/ /conf/hive-hcatalog/ All files in /etc/knox/conf/ /conf/knox/ All files in /etc/pig/conf/ /conf/pig/ All files in /etc/presto/conf/ /conf/presto/ All files in /etc/spark/conf/ /conf/spark/ All files in /etc/tez/conf/ /conf/tez/ All files in /etc/zookeeper/conf/ /conf/zookeeper/ Share the archive file Sensitive log information: If you pass sensitive information in arguments, metadata, or driver output, your logs may contain sensitive information.
- Item(s) included Location in diagnostics folder Managed Service for Apache Spark properties .../configs/dataproc/dataproc.properties All files in /etc/google-dataproc/ .../configs/dataproc/ All files in /etc/hadoop/conf/ .../configs/hadoop/ All files in /etc/hive/conf/ .../configs/hive/ All files in /etc/hive-hcatalog/conf/ .../configs/hive-hcatalog/ All files in /etc/knox/conf/ .../configs/knox/ All files in /etc/pig/conf/ .../configs/pig/ All files in /etc/presto/conf/ .../configs/presto/ All files in /etc/spark/conf/ .../configs/spark/ All files in /etc/tez/conf/ .../configs/tez/ All files in /etc/zookeeper/conf/ .../configs/zookeeper/ Share checkpoint diagnostic data with support You can enable sharing checkpoint diagnostic data with Google Cloud support in the following ways: Enable sharing at cluster creation : Add the following optional cluster property when you create a cluster : dataproc:diagnostic.capture.access=GOOGLE DATAPROC DIAGNOSE This property automatically shares collected checkpoint diagnostic data with Google Cloud support so that you don't have to manually share after cluster creation each time.
- Enable sharing after cluster creation : You can enable sharing checkpoint data with Google Cloud support after cluster creation by providing read access to checkpoint data to the service account used by the Google Cloud support, as follows: If uniform bucket-level access is enabled on the temp bucket, add IAM policy binding: gcloud storage buckets add-iam-policy-binding gs:// TEMP BUCKET \ --member=serviceAccount:cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com \ --role=roles/storage.objectViewer If object-level access control is enabled on the temp bucket, run the following command to share checkpoint diagnostic data: gcloud storage objects update \ gs:// TEMP BUCKET /google-cloud-dataproc-diagnostic/ CLUSTER UUID \ --add-acl-grant=entity=user-cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com,role=READER --recursive Disable checkpoint diagnostic data collection To disable the collection of checkpoint diagnostic data on a cluster, set dataproc:diagnostic.capture.enabled=false when you create the cluster.
- Bucket access and scope of shared content : The access setting on the Cloud Storage bucket that contains the diagnostic tar file determines the scope of the content shared with Google Cloud support: Uniform bucket-level access : If uniform bucket-level access is enabled on the Managed Service for Apache Spark staging bucket or, if a TARBALL DIR is specified, on the bucket that contains the TARBALL DIR , all of the bucket contents are shared with Google Cloud support.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- JSON representation { "zoneUri" : string , "autoZoneExcludeZoneUris" : [ string ] , "networkUri" : string , "subnetworkUri" : string , "privateIpv6GoogleAccess" : enum ( PrivateIpv6GoogleAccess ) , "serviceAccount" : string , "serviceAccountScopes" : [ string ] , "tags" : [ string ] , "metadata" : { string : string , ... } , "reservationAffinity" : { object ( ReservationAffinity ) } , "nodeGroupAffinity" : { object ( NodeGroupAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "confidentialInstanceConfig" : { object ( ConfidentialInstanceConfig ) } , "resourceManagerTags" : { string : string , ... } , "internalIpOnly" : boolean } Fields zoneUri string Optional.
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/regions/[region]/subnetworks/sub0 projects/[projectId]/regions/[region]/subnetworks/sub0 sub0 privateIpv6GoogleAccess enum ( PrivateIpv6GoogleAccess ) Optional.
- EndpointConfig Endpoint config for this cluster JSON representation { "httpPorts" : { string : string , ... } , "enableHttpPortAccess" : boolean } Fields httpPorts map (key: string, value: string) Output only.

