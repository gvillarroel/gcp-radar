---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.499Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Configurable auto-failover check threshold"
feature_slug: "configurable-auto-failover-check-threshold"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/high-availability"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances"
keywords:
  - "configurable"
  - "auto"
  - "failover"
  - "check"
  - "threshold"
  - "high"
  - "availability"
  - "configurations"
---

# Configurable auto-failover check threshold

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

High availability configurations can customize how many failed checks occur before auto-failover starts.

## Extended Definition

High availability configurations can customize how many failed checks occur before auto-failover starts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)

## Supporting Pages

### "AlloyDB high availability overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/high-availability](https://docs.cloud.google.com/alloydb/docs/high-availability)
- Source ID: `site-docs-reference-2`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback AlloyDB high availability overview Stay organized with collections Save and categorize content based on your preferences.
- Primary and secondary instances An AlloyDB primary instance configured with high availability includes an active node and a standby node, which are located in different zones.
- Failover If the active node becomes unavailable, AlloyDB automatically fails over the primary instance to its standby node, which becomes the new active node.
- WAL replication from the primary instance pauses temporarily during failover and resumes automatically after the primary instance is recovered.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Specified at creation time. machineConfig object ( MachineConfig ) Configurations for the machines that host the underlying database engine. availabilityType enum ( AvailabilityType ) Availability type of an Instance.
- Configurations for setting up PSC service automation.
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.
- PscAutoConnectionConfig JSON representation { "consumerProject" : string , "consumerNetwork" : string , "ipAddress" : string , "status" : string , "consumerNetworkStatus" : string } Fields consumerProject string The consumer project to which the PSC service automation endpoint will be created. consumerNetwork string The consumer network for the PSC service automation, example: "projects/vpc-host-project/global/networks/default".

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Specified at creation time. machineConfig object ( MachineConfig ) Configurations for the machines that host the underlying database engine. availabilityType enum ( AvailabilityType ) Availability type of an Instance.
- Configurations for setting up PSC service automation.
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.
- PscAutoConnectionConfig JSON representation { "consumerProject" : string , "consumerNetwork" : string , "ipAddress" : string , "status" : string , "consumerNetworkStatus" : string } Fields consumerProject string The consumer project to which the PSC service automation endpoint will be created. consumerNetwork string The consumer network for the PSC service automation, example: "projects/vpc-host-project/global/networks/default".

