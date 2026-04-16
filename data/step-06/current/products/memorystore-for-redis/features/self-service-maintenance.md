---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.273Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Self-service maintenance"
feature_slug: "self-service-maintenance"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/reschedule_maintenance"
keywords:
  - "self"
  - "maintenance"
  - "memorystore"
  - "for"
  - "redis"
  - "offers"
---

# Self-service maintenance

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis offers self-service maintenance.

## Extended Definition

Memorystore for Redis offers self-service maintenance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance](https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/reschedule_maintenance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/reschedule_maintenance)

## Supporting Pages

### About maintenance \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance](https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance)
- Source ID: `site-docs-root-2`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About maintenance Stay organized with collections Save and categorize content based on your preferences.
- Caution: When Memorystore for Redis applies maintenance to an instance that has read replicas, Memorystore for Redis first applies the new maintenance version to the read replicas.
- FAQ The following are some frequently asked questions about the maintenance policy for Memorystore for Redis: What is the impact of maintenance on Standard Tier instances?
- In addition, the client application can't connect to the read replicas until Memorystore for Redis completes maintenance on the primary instance.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Memorystore for Redis offers several advantages over self-managed Redis: Deploy what fits your needs.
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- Connect to a Memorystore for Redis instance You can use any standard Redis client on the following environments to connect to your Memorystore for Redis instance : App Engine flexible environment App Engine standard environment Compute Engine VM instances Cloud Run functions Cloud Run Google Kubernetes Engine clusters Some serverless environments require a Serverless VPC Access connector as a prerequisite for connectivity with Memorystore for Redis.
- Making this experience snappy is critical, and with its in-memory store and data structure like Sorted Set, Memorystore for Redis makes it easy to maintain a sorted list of scores while providing uniqueness of elements.

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- A failover occurs when you perform the following tasks: Scale your instance Upgrade the Redis version of an instance Initiate a manual failover Perform a maintenance update If you implement retry logic in your application to handle connection drops because of failovers, then your instance probably won't see a significant performance impact.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback High availability for Memorystore for Redis Stay organized with collections Save and categorize content based on your preferences.
- How a failover affects your application When the primary instance fails over to the replica, Memorystore for Redis drops existing connections to the primary endpoint of the instance.
- For information about the metrics that Cloud Monitoring provides for Memorystore for Redis, see Monitor Redis Instances and Supported monitoring metrics for Memorystore for Redis .

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/reschedule_maintenance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/reschedule_maintenance)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tool: reschedule maintenance Reschedule maintenance for a Memorystore for Redis instance.
- Curl Request curl --location 'https://redis.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "reschedule maintenance", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for RescheduleMaintenance .
- Home Documentation Databases Memorystore Memorystore for Redis Reference Send feedback MCP Tools Reference: redis.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- Redis instance resource name using the form: projects/{project id}/locations/{location id}/instances/{instance id} where location id refers to a GCP region. rescheduleType enum ( RescheduleType ) Required.

