---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.200Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Primary instance zone visibility"
feature_slug: "primary-instance-zone-visibility"
latest_feature_date: "2022-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance"
keywords:
  - "zone"
  - "visibility"
  - "view"
  - "primary"
  - "instance"
  - "lets"
---

# Primary instance zone visibility

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB lets you view which zones host a primary instance's active and standby VMs.

## Extended Definition

AlloyDB lets you view which zones host a primary instance's active and standby VMs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)

## Supporting Pages

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- High availability By default, an AlloyDB cluster offers availability (HA) through its primary instance's redundant nodes, located in two different zones, with automatic failover.
- Clusters operating in non-production environments that don't require HA can optionally use basic, single-zone primary instances instead.
- The following diagram illustrates the AlloyDB resource hierarchy, featuring a cluster scaled with a primary instance and multiple load-balanced read pool instances: Cluster: a top-level resource that acts as a logical container for your databases, logs, and other metadata within a region.
- AlloyDB pricing varies based on your configuration settings and depends on the following factors: Instance resources: the machine type (number of vCPUs and amount of RAM) selected for your primary and read pool instances.

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- On the Overview page, go to the Instances in your cluster section, and click Edit primary or Edit read pool .
- Create a read pool instance with a schedule-based policy To create a read pool instance with a schedule-based automatic scaling policy that defines a minimum number of nodes for a specific time window, run the following command: Note: If you have an existing autoscaling policy that has --autoscaler-max-node-count set , then this becomes an optional field. gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: MAX NODE COUNT : the maximum number of nodes that the autoscaler can create in the read pool instance.
- Create a read pool instance with CPU and schedule-based policies To create a read pool instance with both CPU-based and schedule-based automatic scaling policies, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace TARGET CPU USAGE with the target CPU utilization for your read pool instance, expressed as a decimal value between 0.0 and 1.0.
- Note: This approach is best suited for development environments because it lets you change the machine type more quickly, but it can result in longer instance downtime. gcloud beta alloydb instances update INSTANCE ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --update-mode = FORCE APPLY The instance experiences approximately one minute of downtime.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.
- Curl Request curl --location 'https://alloydb.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get instance", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Message for getting a Instance GetInstanceRequest JSON representation { "name" : string , "view" : enum ( InstanceView ) } Fields name string Required.
- List of available read-only VMs in this instance, including the standby for a PRIMARY instance. queryInsightsConfig object ( QueryInsightsInstanceConfig ) Configuration for query insights. observabilityConfig object ( ObservabilityInstanceConfig ) Configuration for observability. readPoolConfig object ( ReadPoolConfig ) Read pool instance configuration.
- Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones). gceZone string The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances.

