---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.611Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Private Service Connect"
feature_slug: "alloydb-private-service-connect"
latest_feature_date: "2024-05-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/about-private-service-connect"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances"
keywords:
  - "multiple VPC networks"
  - "AlloyDB for PostgreSQL PSC"
  - "PSC endpoint"
  - "AlloyDB PSC"
  - "AlloyDB Private Service Connect"
  - "private service endpoint"
  - "PSC"
  - "Private Service Connect"
---

# AlloyDB Private Service Connect

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

Private Service Connect is generally available for AlloyDB for PostgreSQL to enable access from multiple VPC networks.

## Extended Definition

Private Service Connect is generally available for AlloyDB for PostgreSQL to enable access from multiple VPC networks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)

## Supporting Pages

### "Private Service Connect overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: The page is an overview of Private Service Connect for AlloyDB and defines its purpose, connectivity model, and supported targets, directly describing this feature.

Evidence snippets:
- You can use Private Service Connect for the following purposes: Connect to an AlloyDB for PostgreSQL instance from multiple Virtual Private Cloud (VPC) networks that belong to different groups, teams, projects, or organizations.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Private Service Connect overview Stay organized with collections Save and categorize content based on your preferences.
- Allowed Private Service Connect projects When you create an AlloyDB instance, you can define which projects from your VPC network can access the AlloyDB instance within the AlloyDB cluster.
- Service connection policy A service connection policy lets you authorize AlloyDB to create a Private Service Connect connection between AlloyDB and consumer VPC networks.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance. pscDnsName string Output only.
- The configuration for Private Service Connect (PSC) for the instance. networkConfig object ( InstanceNetworkConfig ) Optional.
- The service attachment created when Private Service Connect (PSC) is enabled for the instance.
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance. pscDnsName string Output only.
- The configuration for Private Service Connect (PSC) for the instance. networkConfig object ( InstanceNetworkConfig ) Optional.
- The service attachment created when Private Service Connect (PSC) is enabled for the instance.
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.

