---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.490Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Active queries"
feature_slug: "active-queries"
latest_feature_date: "2025-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "active"
  - "queries"
  - "provides"
  - "visibility"
  - "into"
  - "currently"
  - "running"
  - "alloydb"
---

# Active queries

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Active queries provides visibility into currently running queries in AlloyDB.

## Extended Definition

Active queries provides visibility into currently running queries in AlloyDB.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Union field track active queries . track active queries can be only one of the following: trackActiveQueries boolean Track actively running queries on the instance.
- ObservabilityInstanceConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field preserve comments can be only one of the following: "preserveComments" : boolean // End of list of possible types for union field preserve comments . // Union field track wait events can be only one of the following: "trackWaitEvents" : boolean // End of list of possible types for union field track wait events . // Union field track wait event types can be only one of the following: "trackWaitEventTypes" : boolean // End of list of possible types for union field track wait event types . // Union field max query string length can be only one of the following: "maxQueryStringLength" : integer // End of list of possible types for union field max query string length . // Union field record application tags can be only one of the following: "recordApplicationTags" : boolean // End of list of possible types for union field record application tags . // Union field query plans per minute can be only one of the following: "queryPlansPerMinute" : integer // End of list of possible types for union field query plans per minute . // Union field track active queries can be only one of the following: "trackActiveQueries" : boolean // End of list of possible types for union field track active queries . } Fields Union field enabled . enabled can be only one of the following: enabled boolean Observability feature status for an instance.
- Curl Request curl --location 'https://alloydb.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list instances", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Message for requesting list of Instances ListInstancesRequest JSON representation { "parent" : string , "pageSize" : integer , "pageToken" : string , "filter" : string , "orderBy" : string } Fields parent string Required.
- Possible values: "STATE UNSPECIFIED" - An invalid state as the default case. "ACTIVE" - The connection has been created successfully. "FAILED" - The connection is not functional since some resources on the connection fail to be created. "CREATING" - The connection is being created. "DELETING" - The connection is being deleted. "CREATE REPAIRING" - The connection is being repaired to complete creation. "DELETE REPAIRING" - The connection is being repaired to complete deletion. consumerNetworkStatus string Output only.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following tools to connect to and manage your databases: AlloyDB Studio: a web-based tool built directly into the Google Google Cloud console that lets you explore and manage your data using an interactive SQL interface.
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.
- For more information, see Create a ScaNN index . google ml integration : provides access to the AI functions, which enables ML model invocation from AlloyDB for tasks such as generating embeddings, semantic ranking, AI-based filters and joins, and text generation and summarization.
- Automatic memory and storage management systems take advantage of the Google-built, cloud-based environment that AlloyDB runs on, continuously allocating and releasing memory and storage as needed to keep your cluster running with optimal performance and resource efficiency.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Union field track active queries . track active queries can be only one of the following: trackActiveQueries boolean Track actively running queries on the instance.
- ObservabilityInstanceConfig JSON representation { // Union field enabled can be only one of the following: "enabled" : boolean // End of list of possible types for union field enabled . // Union field preserve comments can be only one of the following: "preserveComments" : boolean // End of list of possible types for union field preserve comments . // Union field track wait events can be only one of the following: "trackWaitEvents" : boolean // End of list of possible types for union field track wait events . // Union field track wait event types can be only one of the following: "trackWaitEventTypes" : boolean // End of list of possible types for union field track wait event types . // Union field max query string length can be only one of the following: "maxQueryStringLength" : integer // End of list of possible types for union field max query string length . // Union field record application tags can be only one of the following: "recordApplicationTags" : boolean // End of list of possible types for union field record application tags . // Union field query plans per minute can be only one of the following: "queryPlansPerMinute" : integer // End of list of possible types for union field query plans per minute . // Union field track active queries can be only one of the following: "trackActiveQueries" : boolean // End of list of possible types for union field track active queries . } Fields Union field enabled . enabled can be only one of the following: enabled boolean Observability feature status for an instance.
- Curl Request curl --location 'https://alloydb.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get instance", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Message for getting a Instance GetInstanceRequest JSON representation { "name" : string , "view" : enum ( InstanceView ) } Fields name string Required.
- Possible values: "STATE UNSPECIFIED" - An invalid state as the default case. "ACTIVE" - The connection has been created successfully. "FAILED" - The connection is not functional since some resources on the connection fail to be created. "CREATING" - The connection is being created. "DELETING" - The connection is being deleted. "CREATE REPAIRING" - The connection is being repaired to complete creation. "DELETE REPAIRING" - The connection is being repaired to complete deletion. consumerNetworkStatus string Output only.

