---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.167Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Presto default BigQuery catalogs"
feature_slug: "presto-default-bigquery-catalogs"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient"
keywords:
  - "catalogs"
  - "project"
  - "presto"
  - "includes"
  - "default"
  - "cluster"
---

# Presto default BigQuery catalogs

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Presto on Dataproc includes default catalogs for the cluster project's BigQuery datasets and public BigQuery datasets.

## Extended Definition

Presto on Dataproc includes default catalogs for the cluster project's BigQuery datasets and public BigQuery datasets.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)

## Supporting Pages

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Daemons and services information Command executed Location in archive yarn node -list -all /system/yarn-nodes.log hdfs dfsadmin -report -live -decommissioning /system/hdfs-nodes.log hdfs dfs -du -h /system/hdfs-du.log service --status-all /system/service.log systemctl --type service /system/systemd-services.log curl "http://${HOSTNAME}:8088/jmx" /metrics/resource manager jmx curl "http://${HOSTNAME}:8088/ws/v1/cluster/apps" /metrics/yarn app info curl "http://${HOSTNAME}:8088/ws/v1/cluster/nodes" /metrics/yarn node info curl "http://${HOSTNAME}:9870/jmx" /metrics/namenode jmx JVM information Command executed Location in archive jstack -l "${DATAPROC AGENT PID}" jstack/agent ${DATAPROC AGENT PID}.jstack jstack -l "${PRESTO PID}" jstack/agent ${PRESTO PID}.jstack jstack -l "${JOB DRIVER PID}" jstack/driver ${JOB DRIVER PID}.jstack jinfo "${DATAPROC AGENT PID}" jinfo/agent ${DATAPROC AGENT PID}.jstack jinfo "${PRESTO PID}" jinfo/agent ${PRESTO PID}.jstack jinfo "${JOB DRIVER PID}" jinfo/agent ${JOB DRIVER PID}.jstack Linux system information Command executed Location in archive df -h /system/df.log ps aux /system/ps.log free -m /system/free.log netstat -anp /system/netstat.log sysctl -a /system/sysctl.log uptime /system/uptime.log cat /proc/sys/fs/file-nr /system/fs-file-nr.log ping -c 1 /system/cluster-ping.log Log files Item included Location in archive All logs in /var/log with the following prefixes in their filename: cloud-sql-proxy dataproc druid gcdp google hadoop hdfs hive knox presto spark syslog yarn zookeeper Files are placed in the archive logs folder, and keep their original filenames.
- Item(s) included Location in diagnostics folder Managed Service for Apache Spark properties .../configs/dataproc/dataproc.properties All files in /etc/google-dataproc/ .../configs/dataproc/ All files in /etc/hadoop/conf/ .../configs/hadoop/ All files in /etc/hive/conf/ .../configs/hive/ All files in /etc/hive-hcatalog/conf/ .../configs/hive-hcatalog/ All files in /etc/knox/conf/ .../configs/knox/ All files in /etc/pig/conf/ .../configs/pig/ All files in /etc/presto/conf/ .../configs/presto/ All files in /etc/spark/conf/ .../configs/spark/ All files in /etc/tez/conf/ .../configs/tez/ All files in /etc/zookeeper/conf/ .../configs/zookeeper/ Share checkpoint diagnostic data with support You can enable sharing checkpoint diagnostic data with Google Cloud support in the following ways: Enable sharing at cluster creation : Add the following optional cluster property when you create a cluster : dataproc:diagnostic.capture.access=GOOGLE DATAPROC DIAGNOSE This property automatically shares collected checkpoint diagnostic data with Google Cloud support so that you don't have to manually share after cluster creation each time.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback View cluster diagnostic data Stay organized with collections Save and categorize content based on your preferences. "View Managed Service for Apache Spark cluster diagnostic data" You can take advantage of the following Managed Service for Apache Spark diagnostic data collection features to troubleshoot cluster and job issues: Checkpoint diagnostic data : By default, Managed Service for Apache Spark collects checkpoint diagnostic data during the cluster lifecycle.
- Checkpoint data location Managed Service for Apache Spark saves checkpoint diagnostic data in the cluster temp bucket in Cloud Storage in the following folder (the checkpoint diagnostic data folder ): gs:// TEMP BUCKET /google-cloud-dataproc-diagnostic/ CLUSTER UUID You can run the gcloud dataproc clusters describe CLUSTER NAME command to list the cluster temp bucket The default cluster temp bucket has a TTL retention period of 90 days.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- When this key resource name is provided, the following job arguments of the following job types submitted to the cluster are encrypted using CMEK: FlinkJob args HadoopJob args SparkJob args SparkRJob args PySparkJob args SparkSqlJob scriptVariables and queryList.queries HiveJob scriptVariables and queryList.queries PigJob scriptVariables and queryList.queries PrestoJob scriptVariables and queryList.queries AutoscalingConfig Autoscaling Policy config associated with the cluster.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xml For more information, see Cluster properties .
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 node-group-1 ShieldedInstanceConfig Shielded Instance Config for clusters using Compute Engine Shielded VMs .

### "Class ClusterControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . start cluster start cluster ( request : typing .
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . cluster path cluster path ( project : str , location : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create cluster create cluster ( request : typing .
- UpdateClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", cluster=cluster, ) Make the request operation = client. update cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.UpdateClusterRequest , dict]] The request object.
- DiagnoseClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", ) Make the request operation = client. diagnose cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.DiagnoseClusterRequest , dict]] The request object.

