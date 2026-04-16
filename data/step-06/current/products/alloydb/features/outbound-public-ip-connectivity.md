---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.495Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Outbound public IP connectivity"
feature_slug: "outbound-public-ip-connectivity"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance"
  - "https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization"
keywords:
  - "outbound"
  - "public"
  - "ip"
  - "connectivity"
  - "alloydb"
  - "supports"
  - "primary"
  - "secondary"
---

# Outbound public IP connectivity

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports outbound public IP connectivity on primary and secondary instances.

## Extended Definition

AlloyDB supports outbound public IP connectivity on primary and secondary instances.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)

## Supporting Pages

### "AlloyDB query tuning and optimization \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization](https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- All documented hints in the following tables are available in AlloyDB: pg hint plan hint Purpose ColumnarScan(table) , NoColumnarScan(table) Influences the planner to use columnar engine for the specified table.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback AlloyDB query tuning and optimization Stay organized with collections Save and categorize content based on your preferences.
- This document describes different ways to optimize queries and manage indexes in AlloyDB for PostgreSQL.
- For related information on indexing strategies, see AlloyDB database indexing strategies .

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.
- InstanceNetworkConfig JSON representation { "authorizedExternalNetworks" : [ { object ( AuthorizedNetwork ) } ] , "enablePublicIp" : boolean , "enableOutboundPublicIp" : boolean , "network" : string , "allocatedIpRangeOverride" : string } Fields authorizedExternalNetworks[] object ( AuthorizedNetwork ) Optional.
- Enabling an outbound public IP address to support a database server sending requests out into the internet. network string Output only.
- All outbound public IP addresses configured for the instance. activationPolicy enum ( ActivationPolicy ) Optional.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.
- InstanceNetworkConfig JSON representation { "authorizedExternalNetworks" : [ { object ( AuthorizedNetwork ) } ] , "enablePublicIp" : boolean , "enableOutboundPublicIp" : boolean , "network" : string , "allocatedIpRangeOverride" : string } Fields authorizedExternalNetworks[] object ( AuthorizedNetwork ) Optional.
- Enabling an outbound public IP address to support a database server sending requests out into the internet. network string Output only.
- All outbound public IP addresses configured for the instance. activationPolicy enum ( ActivationPolicy ) Optional.

