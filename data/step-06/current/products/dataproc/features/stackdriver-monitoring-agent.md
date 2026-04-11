---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.121Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Stackdriver monitoring agent"
feature_slug: "stackdriver-monitoring-agent"
latest_feature_date: "2016-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "stackdriver"
  - "monitoring"
  - "agent"
  - "the"
  - "is"
  - "installed"
  - "by"
  - "default"
---

# Stackdriver monitoring agent

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The Stackdriver monitoring agent is installed by default on Dataproc clusters and can be enabled or disabled through cluster properties.

## Extended Definition

The Stackdriver monitoring agent is installed by default on Dataproc clusters and can be enabled or disabled through cluster properties.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- December 16, 2016 Feature Google Stackdriver Agent Installed – The Stackdriver monitoring agent is now installed by default on Cloud Dataproc clusters.
- December 11, 2023 Announcement Announcing the GA release of Dataproc on Compute Engine image version 2.2 : 2.2.0-debian12, 2.2.0-rocky9, 2.2.0-ubuntu22 The 2.2.0 release includes the following components: Debian-12 / Ubuntu-2204 / RockyLinux 9 Apache Hadoop 3.3.6 Apache Spark 3.5.0 Spark-BigQuery Connector 0.34.0 Cloud Storage Connector 3.0.0 Trino 432 Apache Flink 1.17.0 Apache Ranger 2.4.0 Apache Solr 9.2.1 R 4.2 Hue 4.11.0 JupyterLab Notebook 3.6 Change Monitoring-agent-defaults metrics are not available in Dataproc on Compute Engine image version 2.2 clusters unless the Ops Agent is installed.
- December 16, 2015 Feature Cloud Dataproc clusters now have vim , git , and bash-completion installed by default The Cloud Dataproc API now has an official Maven artifact , Javadocs , and a downloadable .zip file GCP Console Properties can now be specified when submitting a job, and can be seen in the Configuration tab of a job A Clone button has been added that allows you to easily copy all information about a job to a new job submission form The left-side icons for Clusters and Jobs are now custom icons rather than generic ones An Image version field has been added to the bottom of the create cluster form that allows you to select a specific Cloud Dataproc image version when creating a cluster A VM Instances tab has been added on the cluster detail page, which you can use to display a list of all VMs in a cluster and easily SSH into the master node An Initialization Actions field has been added to the bottom of the create cluster form, which allows you to specify initialization actions when creating a cluster Paths to Cloud Storage buckets that are displayed in error messages are now clickable links.
- Change Image 2.0 preview The Anaconda optional component is no longer available or required when using the Jupyter optional component (Miniconda is installed and activated by default).

### Managed Service for Apache Spark metrics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Note: monitoring-agent-defaults are not available in 2.2 image version clusters unless the Ops Agent is installed.
- Statistical measure Sample metric Sample metric name Max hivemetastore:API:GetDatabase:Max hivemetastore/get database/max Min hivemetastore:API:GetDatabase:Min hivemetastore/get database/min Mean hivemetastore:API:GetDatabase:Mean hivemetastore/get database/mean Count hivemetastore:API:GetDatabase:Count hivemetastore/get database/count 50thPercentile hivemetastore:API:GetDatabase:50thPercentile hivemetastore/get database/median 75thPercentile hivemetastore:API:GetDatabase:75thPercentile hivemetastore/get database/75th percentile 95thPercentile hivemetastore:API:GetDatabase:95thPercentile hivemetastore/get database/95th percentile 98thPercentile hivemetastore:API:GetDatabase:98thPercentile hivemetastore/get database/98th percentile 99thPercentile hivemetastore:API:GetDatabase:99thPercentile hivemetastore/get database/99th percentile 999thPercentile hivemetastore:API:GetDatabase:999thPercentile hivemetastore/get database/999th percentile StdDev hivemetastore:API:GetDatabase:StdDev hivemetastore/get database/stddev FifteenMinuteRate hivemetastore:API:GetDatabase:FifteenMinuteRate hivemetastore/get database/15min rate FiveMinuteRate hivemetastore:API:GetDatabase:FiveMinuteRate hivemetastore/get database/5min rate OneMinuteRate hivemetastore:API:GetDatabase:OneMinuteRate hivemetastore/get database/1min rate MeanRate hivemetastore:API:GetDatabase:MeanRate hivemetastore/get database/mean rate Managed Service for Apache Spark monitoring agent metrics Managed Service for Apache Spark collects the following Managed Service for Apache Spark monitoring agent metrics when you set --metric-sources=monitoring-agent-defaults .
- The metric source name is case insensitive, for example, either "yarn" or "YARN" is acceptable. monitoring-agent-defaults are not available in 2.2 image version clusters.
- Specify one or more of the following metric sources: spark , flink , hdfs , yarn , spark-history-server , hiveserver2 , hivemetastore , and monitoring-agent-defaults .

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- If this source is enabled, Dataproc enables the monitoring agent in Compute Engine, and collects monitoring agent metrics, which are published with an agent.googleapis.com prefix.
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.
- The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xml For more information, see Cluster properties .
- Enums PRIVATE IPV6 GOOGLE ACCESS UNSPECIFIED If unspecified, Compute Engine default behavior will apply, which is the same as INHERIT FROM SUBNETWORK .

