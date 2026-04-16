---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.133Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Enhanced Query Insights for read pool instances"
feature_slug: "enhanced-query-insights-for-read-pool-instances"
latest_feature_date: "2024-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance"
keywords:
  - "enhanced"
  - "insights"
  - "instances"
  - "used"
  - "pool"
  - "query"
  - "read"
---

# Enhanced Query Insights for read pool instances

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Enhanced Query Insights can be used on AlloyDB read pool instances.

## Extended Definition

Enhanced Query Insights can be used on AlloyDB read pool instances.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)

## Supporting Pages

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AlloyDB stores query insights data for its primary and read pool instances for 30 days.
- You must enable advanced query insights features on a primary instance before enabling them on a read pool instance.
- Storing data for primary instances consumes about 180 GB and might increase based on the number of read pool nodes present in the cluster.
- Benefits of advanced query insights features The following advanced query insights features are available to help you detect and fix query performance problems: Prebuilt dashboards that help you identify query performance problems early and let you identify, diagnose, and resolve issues in a single page on the Google Cloud console.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.
- List of available read-only VMs in this instance, including the standby for a PRIMARY instance. queryInsightsConfig object ( QueryInsightsInstanceConfig ) Configuration for query insights. observabilityConfig object ( ObservabilityInstanceConfig ) Configuration for observability. readPoolConfig object ( ReadPoolConfig ) Read pool instance configuration.
- Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones). gceZone string The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances.
- QueryInsightsInstanceConfig JSON representation { "queryStringLength" : integer , // Union field record application tags can be only one of the following: "recordApplicationTags" : boolean // End of list of possible types for union field record application tags . // Union field record client address can be only one of the following: "recordClientAddress" : boolean // End of list of possible types for union field record client address . // Union field query plans per minute can be only one of the following: "queryPlansPerMinute" : integer // End of list of possible types for union field query plans per minute . } Fields queryStringLength integer ( uint32 format) Query string length.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.
- List of available read-only VMs in this instance, including the standby for a PRIMARY instance. queryInsightsConfig object ( QueryInsightsInstanceConfig ) Configuration for query insights. observabilityConfig object ( ObservabilityInstanceConfig ) Configuration for observability. readPoolConfig object ( ReadPoolConfig ) Read pool instance configuration.
- Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones). gceZone string The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances.
- QueryInsightsInstanceConfig JSON representation { "queryStringLength" : integer , // Union field record application tags can be only one of the following: "recordApplicationTags" : boolean // End of list of possible types for union field record application tags . // Union field record client address can be only one of the following: "recordClientAddress" : boolean // End of list of possible types for union field record client address . // Union field query plans per minute can be only one of the following: "queryPlansPerMinute" : integer // End of list of possible types for union field query plans per minute . } Fields queryStringLength integer ( uint32 format) Query string length.

