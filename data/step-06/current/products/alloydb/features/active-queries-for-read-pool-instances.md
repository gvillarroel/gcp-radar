---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.498Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Active queries for read pool instances"
feature_slug: "active-queries-for-read-pool-instances"
latest_feature_date: "2024-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
keywords:
  - "active"
  - "queries"
  - "read"
  - "pool"
  - "instances"
  - "monitoring"
  - "can"
  - "used"
---

# Active queries for read pool instances

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Active queries monitoring can be used on AlloyDB read pool instances.

## Extended Definition

Active queries monitoring can be used on AlloyDB read pool instances.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)

## Supporting Pages

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones). gceZone string The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances.
- ObservabilityInstanceConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field preserve comments can be only one of the following: "preserveComments" : boolean // End of list of possible types for union field preserve comments . // Union field track wait events can be only one of the following: "trackWaitEvents" : boolean // End of list of possible types for union field track wait events . // Union field track wait event types can be only one of the following: "trackWaitEventTypes" : boolean // End of list of possible types for union field track wait event types . // Union field max query string length can be only one of the following: "maxQueryStringLength" : integer // End of list of possible types for union field max query string length . // Union field record application tags can be only one of the following: "recordApplicationTags" : boolean // End of list of possible types for union field record application tags . // Union field query plans per minute can be only one of the following: "queryPlansPerMinute" : integer // End of list of possible types for union field query plans per minute . // Union field track active queries can be only one of the following: "trackActiveQueries" : boolean // End of list of possible types for union field track active queries . } Fields Union field enabled . enabled can be only one of the following: enabled boolean Observability feature status for an instance.
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.
- List of available read-only VMs in this instance, including the standby for a PRIMARY instance. queryInsightsConfig object ( QueryInsightsInstanceConfig ) Configuration for query insights. observabilityConfig object ( ObservabilityInstanceConfig ) Configuration for observability. readPoolConfig object ( ReadPoolConfig ) Read pool instance configuration.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable managed connection pooling in your read pool instance, add the --enable-connection-pooling flag to the gcloud alloydb instances create command: gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --enable-connection-pooling To create a read pool instance for a public IP-enabled cluster, add the --assign-inbound-public-ip= ASSIGN IPV4 parameter. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --assign-inbound-public-ip = ASSIGN IPV4 Optionally, you can pass the comma separated list of CIDR blocks, such as 64.233.160.0/16 to the --authorized-external-networks parameter to set authorized external networks on your instance.
- Use the gcloud alloydb instances create command to create a read pool instance. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID Replace the following: INSTANCE ID : The ID of the instance you are creating.
- Note: You can have a maximum of 20 nodes across all the read pool instances in a cluster.
- Note that you cannot have more than 20 nodes across all read pool instances in a cluster.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones). gceZone string The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances.
- ObservabilityInstanceConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field preserve comments can be only one of the following: "preserveComments" : boolean // End of list of possible types for union field preserve comments . // Union field track wait events can be only one of the following: "trackWaitEvents" : boolean // End of list of possible types for union field track wait events . // Union field track wait event types can be only one of the following: "trackWaitEventTypes" : boolean // End of list of possible types for union field track wait event types . // Union field max query string length can be only one of the following: "maxQueryStringLength" : integer // End of list of possible types for union field max query string length . // Union field record application tags can be only one of the following: "recordApplicationTags" : boolean // End of list of possible types for union field record application tags . // Union field query plans per minute can be only one of the following: "queryPlansPerMinute" : integer // End of list of possible types for union field query plans per minute . // Union field track active queries can be only one of the following: "trackActiveQueries" : boolean // End of list of possible types for union field track active queries . } Fields Union field enabled . enabled can be only one of the following: enabled boolean Observability feature status for an instance.
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.
- List of available read-only VMs in this instance, including the standby for a PRIMARY instance. queryInsightsConfig object ( QueryInsightsInstanceConfig ) Configuration for query insights. observabilityConfig object ( ObservabilityInstanceConfig ) Configuration for observability. readPoolConfig object ( ReadPoolConfig ) Read pool instance configuration.

