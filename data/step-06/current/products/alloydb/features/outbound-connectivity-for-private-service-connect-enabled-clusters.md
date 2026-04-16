---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.489Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Outbound connectivity for Private Service Connect-enabled clusters"
feature_slug: "outbound-connectivity-for-private-service-connect-enabled-clusters"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/about-private-service-connect"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances"
keywords:
  - "outbound"
  - "connectivity"
  - "private"
  - "connect"
  - "enabled"
  - "clusters"
  - "alloydb"
  - "enables"
---

# Outbound connectivity for Private Service Connect-enabled clusters

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Outbound connectivity for Private Service Connect-enabled AlloyDB clusters enables secure outbound connections for operations such as migrations and foreign data wrappers.

## Extended Definition

Outbound connectivity for Private Service Connect-enabled AlloyDB clusters enables secure outbound connections for operations such as migrations and foreign data wrappers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)

## Supporting Pages

### "Private Service Connect overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-service-connect](https://docs.cloud.google.com/alloydb/docs/about-private-service-connect)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Service attachment When you create any AlloyDB instance within a Private Service Connect-enabled cluster, AlloyDB creates a service attachment unique to that instance.
- When you create a Private Service Connect-enabled cluster and instance, you can let AlloyDB automatically create endpoints for you or create the endpoint manually.
- To enable outbound connectivity from an AlloyDB instance to your consumer project, you need to create a network attachment within that VPC and project.
- AlloyDB instances use these network attachments to manage connectivity for outbound operations, such as migration or foreign data wrappers (FDW).

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The project number that needs to be allowlisted on the network attachment to enable outbound connectivity.
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback REST Resource: projects.locations.clusters Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "enabled" : boolean } Fields enabled boolean This flag controls the integration of AlloyDB for PostgreSQL resources like databases, schemas, and tables with Dataplex.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When enabled, this allows authorized users to connect to the instance from the public internet using the executeSql API, even for private IP instances.
- Configurations for setting up PSC interfaces attached to the instance which are used for outbound connectivity.
- The service attachment created when Private Service Connect (PSC) is enabled for the instance.
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.

