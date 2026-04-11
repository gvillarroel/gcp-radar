---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.569Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log sink export system metrics"
feature_slug: "log-sink-export-system-metrics"
latest_feature_date: "2018-11-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/api/v2/resource-list"
keywords:
  - "log"
  - "sink"
  - "export"
  - "system"
  - "metrics"
  - "logging"
  - "provides"
  - "to"
---

# Log sink export system metrics

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging provides export system metrics to show success and error metrics for log sinks.

## Extended Definition

Cloud Logging provides export system metrics to show success and error metrics for log sinks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list)

## Supporting Pages

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- System-defined metrics Logging provides a set of metrics for usage values such as the number of log entries stored in log buckets in your project, or the number of bytes you've exported.
- In Cloud Monitoring, log-based metrics use the following naming patterns: System: logging.googleapis.com/ SYSTEM METRIC NAME User-defined: logging.googleapis.com/user/ USER METRIC NAME Note that user-defined log-based metrics include the string user .
- For each stream, the backend system for log-based metrics uses the following rules to determine what value to write to the time series stored by Monitoring: When the aggregated count for an interval is non-zero, that value is written to the time series.
- By default, user-defined log-based metrics are calculated from all logs received by the Logging API for the Google Cloud project, regardless of any inclusion filters or exclusion filters that might apply to the Google Cloud project.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- December 08, 2020 Fixed Cloud Logging calculates the system logs-based metrics byte count and log entry count on stored logs only, unlike user-defined logs-based metrics which are calculated on both stored and excluded logs.
- Feature Exporting logs from organizations, folders, and billing accounts : The gcloud logging command-line tool now supports creating log sinks to export audit logs from organizations, folders, and billing accounts.
- June 30, 2020 Feature Cloud Logging now contains a Logs Dashboard page that provides a high-level overview into the health of your systems running within a project.
- November 01, 2018 Feature You can now view error and success metrics for your log sinks using export system metrics .

### "Monitored resources and services \_|\_ Cloud Logging \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The format is "projects/project id" monitored resource type : The type field of the monitored resource in the log entry that is destined for the log bucket. logging exclusion Log Exclusion An exclusion in Cloud Logging. project id : The identifier of the GCP project associated with this resource, such as "my-project". name : The unique name of the exclusion. logging log Log stream A Google Cloud Logging log. project id : The identifier of the GCP project associated with this resource, such as "my-project". name : Unique identifier of the log. logging sink Logging export sink An export sink in Cloud Logging. project id : The identifier of the GCP project associated with this resource, such as "my-project". name : The unique name of the sink. destination : The destination of the sink. lustre.googleapis.com/Instance Lustre instance A Lustre Instance. resource container : The identifier of the GCP consumer project associated with this resource, such as 'my-project'. location : The Google Cloud location in which the managed instance is running. instance id : The ID of the managed instance. managed service Managed Service A service managed by Google Service Management. project id : The identifier of the GCP project associated with this resource, such as "my-project". service name : The name of the service. producer project id : The id of the project which produces and owns this service. managedflink.googleapis.com/Deployment Managed Flink Deployment A managed Flink cluster. resource container : The identifier of the GCP project associated with this resource. location : The location of the GCP project associated with this resource. deployment id : The user-specified or system generated deployment identifier. managedflink.googleapis.com/Job Managed Flink Job A job running on a deployment. resource container : The identifier of the GCP project associated with this resource. location : The location of the GCP project associated with this resource. deployment id : The user-specified or system generated deployment identifier. job id : The system-generated job identifier. managedkafka.googleapis.com/Cluster Apache Kafka Cluster A Managed Kafka cluster. resource container : The identifier of the project or container associated with this cluster. location : The region in which the cluster is created. cluster id : The user-specified cluster id. managedkafka.googleapis.com/ConnectCluster Apache Kafka Connect Cluster A Managed Kafka Connect cluster. resource container : The identifier of the project or container associated with this cluster. location : The region in which the cluster is created. cluster id : The user-specified cluster id. managedkafka.googleapis.com/Location Apache Kafka Location A Managed Kafka location. resource container : The identifier of the project or container associated with this location. location : The location in the API. managedkafka.googleapis.com/SchemaRegistry Apache Kafka Schema Registry A Managed Kafka Schema Registry. resource container : The identifier of the GCP project associated with this schema registry. location : The region in which the schema registry is created. schema registry id : The user-specified schema registry id. memcache.googleapis.com/MemcacheNode Memorystore Memcached Node Node of a Memorystore Memcached instance. resource container : The identifier of the GCP project associated with this resource, such as 'my-project'. service : The API service name. location : Google Cloud zone where the Memcached node is located. memcache region : Cloud region where this memcache node is located, e.g. us-east1 or us-west1.
- Won't be exposed to customer. instance id : Customer given identifier unique among Memcached instances in the region that this node belongs to. node id : Name of this Memcached node which is unique within a single Memcached instance. uid : A string to uniquely distinguish an instance of custom root. memorystore.googleapis.com/Instance Memorystore Instance An instance hosted on Google Cloud Memorystore. resource container : The identifier of the GCP consumer project associated with this resource, such as 'my-project'. location : The Google Cloud region in which the managed instance is running. instance id : The ID of the managed instance. instance uid : Identifier assigned by Google to uniquely distinguish an instance. mesh Mesh A mesh serves as the "key" to deliver configuration to data plane proxy instances. project id : The identifier of the GCP project associated with this resource, such as "my-project". location : The location of the control plane mesh : The name of the mesh metastore.googleapis.com/Federation Dataproc Metastore Federation A Dataproc Metastore Federation. resource container : The ID of the customer project. location : The region that the federation is hosted in. federation id : The federation ID. metastore.googleapis.com/Service Dataproc Metastore Service A Dataproc Metastore Service. resource container : The ID of the customer project. location : The region that the service is hosted in. service id : The service ID. metric Metric Type A Stackdriver Monitoring metric type. project id : The identifier of the GCP project associated with this resource, such as "my-project". name : The name of the metric type, such as "logging.googleapis.com/my-metric-name". microsoft ad domain Microsoft Active Directory Domain A Microsoft Active Directory Domain hosted and managed by Google Cloud Platform project id : The identifier of the GCP project associated with this resource, such as "my-project". fqdn : The fully qualified domain name of the Active Directory Domain location : The location where Active Directory Domain resources (like VMs, etc.) are present. ml job Cloud ML Job A Cloud Machine Learning job. project id : The identifier of the GCP project associated with this resource, such as "my-project". job id : The job identifier. task name : The task name. mobilitybilling.googleapis.com/Project Google Maps Platform - Mobility Billing A top-level resource for Mobility Billing metrics and logs. resource container : The identifier of the GCP container associated with this resource. location : The region in which the Mobility Billing instance is running. modelarmor.googleapis.com/SanitizeOperation Model Armor Sanitize Operation A resource that represents the Model Armor sanitize operations. resource container : The identifier of the GCP resource container associated with this resource, such as "my project" or "organizations/5678". location : The GCP location. template id : The template ID. modelarmor.googleapis.com/Template Model Armor Template A resource that represents the Model Armor template operations. resource container : The identifier of the GCP resource container associated with this resource, such as "my project" or "organizations/5678". location : The GCP location. template id : The template ID. nat gateway Cloud NAT Gateway A Cloud NAT Gateway. project id : The identifier of the GCP project associated with this resource, such as "my-project". region : The region where the NAT gateway is located. router id : Identifier of the router under which the NAT gateway is defined. gateway name : The name of the NAT gateway. netapp cloud volume NetApp Cloud Volume A specific volume in the NetApp Cloud Volumes service. project id : The identifier of the GCP project associated with this resource, such as "my-project". location : The Google Cloud location in which the NetApp Cloud Volume instance is running. volume id : The ID of a NetApp Volume. network security policy Network Security Policy A network security policy. project id : The identifier of the GCP project associated with this resource, such as "my-project". location : The region where the security policy resides.
- Can be 'UNKNOWN' if the backend wasn't assigned. backend scope type : The type of the scope of the backend group, one of ['ZONE'; 'REGION'; 'UNKNOWN' - in case the backend wasn't assigned]. livestream.googleapis.com/Channel Live Stream API Channel A Live Stream API Channel. resource container : The identifier of the GCP project associated with this channel resource. location : The GCP location where the channel resource resides. channel id : ID of the channel resource. loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule External Passthrough Network Load Balancer Rule A set of definitions for multi protocol network load balancing behavior. project id : The identifier of the GCP project associated with this resource, such as "my-project". region : The Google Cloud Platform region of the backend instance that connected to network load balancing forwarding rule. backend network name : The network name of the NIC of the instance that received the Net LB flow. backend target type : The type of the backend target that handled the connection. backend service name : The name of the backend service that handled the connection. primary target pool : The name of the primary target pool. target pool : The name of the target pool. forwarding rule name : The name of the forwarding rule. backend group name : The name of the backend group that handled the connection. backend group type : The type of the backend group that handled the connection. backend group scope : The scope (zone or region) of the backend group that handled the connection. backend subnetwork name : The name of the subnetwork of the instance that handled the connection. backend zone : The zone of the endpoint (VM instance) that handled the connection. loadbalancing.googleapis.com/InternalNetworkLoadBalancerRule Internal Passthrough Network Load Balancer Rule A set of definitions for multi protocol internal load balancing behavior. project id : The identifier of the GCP project associated with this resource, such as "my-project". region : The Google Cloud Platform region of the backend instance that connected to network load balancing forwarding rule. backend network name : The network name of the NIC of the instance that received the Net LB flow. backend service name : The name of the backend service that handled the connection. forwarding rule name : The name of the forwarding rule. backend group name : The name of the backend group that handled the connection. backend group type : The type of the backend group that handled the connection. backend group scope : The scope (zone or region) of the backend group that handled the connection. backend subnetwork name : The name of the subnetwork of the instance that handled the connection. logging bucket Logging Bucket An export bucket in Cloud Logging. project id : The identifier of the GCP project associated with this resource, such as "my-project". bucket id : The name of the log bucket. location : The location of the log bucket. source resource container : The source resource container (e.g. project, folder, organization) of the log entry that is destined for the log bucket.
- It contains audit logs about Node Pool operations. project id : The identifier of the GCP project associated with this resource, such as "my-project". nodepool name : The name of the GKE Node Pool. location : The location in which the GKE Cluster is running. cluster name : The name of the GKE Cluster to which this Node Pool belongs. gkebackup.googleapis.com/BackupPlan GKE Backup Plan A backup plan provides configuration, location, and management functions for a sequence of backups. resource container : The identifier of the Google Cloud container associated with the resource. location : The Google Cloud location where this backupPlan resides. backup plan id : The name of the backupPlan. gkebackup.googleapis.com/RestorePlan GKE Restore Plan A restore plan defines the configuration of a series of restore operations to be performed against backups which belong to the specified backup plan. resource container : The identifier of the Google Cloud container associated with the resource. location : The Google Cloud location where this restorePlan resides. restore plan id : The name of the restorePlan. global Global A resource type used to indicate that a log is not associated with any specific resource. project id : The identifier of the GCP project associated with this resource, such as "my-project". healthcare pipeline job Healthcare Pipeline Job A Cloud Healthcare Pipeline Job. project id : The identifier of the GCP project associated with this resource, such as "my-project". location : The Google Cloud location of the dataset that contains the Pipeline Job. dataset id : The ID of the dataset. pipeline job id : The ID of the Pipeline Job. http external regional lb rule Regional External Application Load Balancer Rule A resource descriptor for regional external Application Load Balancer behavior. project id : The identifier of the Google Cloud project associated with this resource, such as 'my-project'. network name : The name of the customer network in which the Load Balancer resides. region : The region under which the Load Balancer is defined. url map name : The name of the urlmap. forwarding rule name : The name of the forwarding rule. target proxy name : The name of the target HTTP/S proxy. matched url path rule : The prefix of URL defined in urlmap tree. 'UNMATCHED' for the sink default rule. backend target name : The name of the backend target or service. backend target type : The type of the backend target.

