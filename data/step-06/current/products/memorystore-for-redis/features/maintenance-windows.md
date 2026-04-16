---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.274Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Maintenance Windows"
feature_slug: "maintenance-windows"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows"
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/reschedule_maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/rest"
keywords:
  - "maintenance"
  - "windows"
  - "let"
  - "you"
  - "schedule"
  - "memorystore"
  - "for"
  - "redis"
---

# Maintenance Windows

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Maintenance Windows let you schedule Memorystore for Redis maintenance during a preferred window; Maintenance Windows let you schedule Memorystore for Redis maintenance during a preferred window.

## Extended Definition

Maintenance Windows let you schedule Memorystore for Redis maintenance during a preferred window; Maintenance Windows let you schedule Memorystore for Redis maintenance during a preferred window.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)
- [https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance](https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/reschedule_maintenance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/reschedule_maintenance)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/rest](https://docs.cloud.google.com/memorystore/docs/redis/reference/rest)

## Supporting Pages

### "Find and set maintenance windows \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)
- Source ID: `site-docs-root-2`
- Final score: 348
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reschedule planned maintenance Caution: if you programmatically reschedule maintenance in bulk requests (not natively supported by Memorystore for Redis), limit batch reschedule sizes to 100 instances per batch.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Find and set maintenance windows Stay organized with collections Save and categorize content based on your preferences.
- Find scheduled maintenance If maintenance has been scheduled for your instance, you can view it using the following instructions: Console Go to the Memorystore for Redis page in the Google Cloud console.
- Memorystore for Redis Click the instance ID of the instance that you want to view scheduled maintenance for.

### About maintenance \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance](https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance)
- Source ID: `site-docs-root-2`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About maintenance Stay organized with collections Save and categorize content based on your preferences.
- In addition, the client application can't connect to the read replicas until Memorystore for Redis completes maintenance on the primary instance.
- When subscribing you opt-in to maintenance notifications for all Memorystore instances that have maintenance windows in a given project.
- Do both of these at least 7 days before Memorystore schedules a maintenance update for your instance.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/reschedule_maintenance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/reschedule_maintenance)
- Source ID: `site-api-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tool: reschedule maintenance Reschedule maintenance for a Memorystore for Redis instance.
- Curl Request curl --location 'https://redis.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "reschedule maintenance", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for RescheduleMaintenance .
- Home Documentation Databases Memorystore Memorystore for Redis Reference Send feedback MCP Tools Reference: redis.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Redis instance resource name using the form: projects/{project id}/locations/{location id}/instances/{instance id} where location id refers to a GCP region. rescheduleType enum ( RescheduleType ) Required.

### Google Cloud Memorystore for Redis API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/rest](https://docs.cloud.google.com/memorystore/docs/redis/reference/rest)
- Source ID: `site-api-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.instances Methods create POST /v1beta1/{parent=projects/ /locations/ }/instances Creates a Redis instance based on the specified tier and memory size. delete DELETE /v1beta1/{name=projects/ /locations/ /instances/ } Deletes a specific Redis instance. export POST /v1beta1/{name=projects/ /locations/ /instances/ }:export Export Redis instance data into a Redis RDB format file in Cloud Storage. failover POST /v1beta1/{name=projects/ /locations/ /instances/ }:failover Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance. get GET /v1beta1/{name=projects/ /locations/ /instances/ } Gets the details of a specific Redis instance. getAuthString GET /v1beta1/{name=projects/ /locations/ /instances/ }/authString Gets the AUTH string for a Redis instance. import POST /v1beta1/{name=projects/ /locations/ /instances/ }:import Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. list GET /v1beta1/{parent=projects/ /locations/ }/instances Lists all Redis instances owned by a project in either the specified location (region) or all locations. patch PATCH /v1beta1/{instance.name=projects/ /locations/ /instances/ } Updates the metadata and configuration of a specific Redis instance. rescheduleMaintenance POST /v1beta1/{name=projects/ /locations/ /instances/ }:rescheduleMaintenance Reschedule maintenance for a given instance in a given project and location. upgrade POST /v1beta1/{name=projects/ /locations/ /instances/ }:upgrade Upgrades Redis instance to the newer Redis version specified in the request.
- REST Resource: v1.projects.locations.instances Methods create POST /v1/{parent=projects/ /locations/ }/instances Creates a Redis instance based on the specified tier and memory size. delete DELETE /v1/{name=projects/ /locations/ /instances/ } Deletes a specific Redis instance. export POST /v1/{name=projects/ /locations/ /instances/ }:export Export Redis instance data into a Redis RDB format file in Cloud Storage. failover POST /v1/{name=projects/ /locations/ /instances/ }:failover Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance. get GET /v1/{name=projects/ /locations/ /instances/ } Gets the details of a specific Redis instance. getAuthString GET /v1/{name=projects/ /locations/ /instances/ }/authString Gets the AUTH string for a Redis instance. import POST /v1/{name=projects/ /locations/ /instances/ }:import Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. list GET /v1/{parent=projects/ /locations/ }/instances Lists all Redis instances owned by a project in either the specified location (region) or all locations. patch PATCH /v1/{instance.name=projects/ /locations/ /instances/ } Updates the metadata and configuration of a specific Redis instance. rescheduleMaintenance POST /v1/{name=projects/ /locations/ /instances/ }:rescheduleMaintenance Reschedule maintenance for a given instance in a given project and location. upgrade POST /v1/{name=projects/ /locations/ /instances/ }:upgrade Upgrades Redis instance to the newer Redis version specified in the request.
- Home Documentation Databases Memorystore Memorystore for Redis Reference Send feedback Google Cloud Memorystore for Redis API Stay organized with collections Save and categorize content based on your preferences.
- REST Resource: v1beta1.projects.locations REST Resource: v1beta1.projects.locations.instances REST Resource: v1beta1.projects.locations.operations REST Resource: v1.projects.locations REST Resource: v1.projects.locations.instances REST Resource: v1.projects.locations.operations Service: redis.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

