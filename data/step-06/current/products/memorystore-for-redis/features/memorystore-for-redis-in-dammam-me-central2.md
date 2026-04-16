---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.271Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Memorystore for Redis in Dammam (me-central2)"
feature_slug: "memorystore-for-redis-in-dammam-me-central2"
latest_feature_date: "2023-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
keywords:
  - "memorystore"
  - "for"
  - "redis"
  - "in"
  - "dammam"
  - "me"
  - "central2"
  - "is"
---

# Memorystore for Redis in Dammam (me-central2)

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis is available in the Dammam region.

## Extended Definition

Memorystore for Redis is available in the Dammam region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)

## Supporting Pages

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 379
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How a failover affects your application When the primary instance fails over to the replica, Memorystore for Redis drops existing connections to the primary endpoint of the instance.
- For information about the metrics that Cloud Monitoring provides for Memorystore for Redis, see Monitor Redis Instances and Supported monitoring metrics for Memorystore for Redis .
- During a failover, if there are connections to the read endpoint, then Memorystore for Redis drops the connections to the replica that's being promoted to the primary instance.
- Memorystore for Redis uses the asynchronous replication protocol to copy any changes that you make to the data on the primary instance to the replicas.

### "Connect to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- Source ID: `site-docs-root`
- Final score: 363
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect to a Redis instance from a Compute Engine VM using telnet You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Connect to a Redis instance Stay organized with collections Save and categorize content based on your preferences.
- Note: If you are looking for the Memorystore for Redis Cluster documentation, see Connect to a Memorystore for Redis Cluster instance .
- To connect to your Redis instance using Telnet, run the following command: telnet localhost 6378 In the Telnet session, ping the Redis instance: Enter: PING Result: PONG Connect from a local machine by using port forwarding It can be helpful to connect to your Redis instance from your local machine during development.

### "Find and set maintenance windows \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)
- Source ID: `site-docs-root-2`
- Final score: 363
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reschedule planned maintenance Caution: if you programmatically reschedule maintenance in bulk requests (not natively supported by Memorystore for Redis), limit batch reschedule sizes to 100 instances per batch.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Find and set maintenance windows Stay organized with collections Save and categorize content based on your preferences.
- Find scheduled maintenance If maintenance has been scheduled for your instance, you can view it using the following instructions: Console Go to the Memorystore for Redis page in the Google Cloud console.
- Set a preferred window for maintenance on an instance Console Go to the Memorystore for Redis page in the Google Cloud console.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 357
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- Connect to a Memorystore for Redis instance You can use any standard Redis client on the following environments to connect to your Memorystore for Redis instance : App Engine flexible environment App Engine standard environment Compute Engine VM instances Cloud Run functions Cloud Run Google Kubernetes Engine clusters Some serverless environments require a Serverless VPC Access connector as a prerequisite for connectivity with Memorystore for Redis.
- Making this experience snappy is critical, and with its in-memory store and data structure like Sorted Set, Memorystore for Redis makes it easy to maintain a sorted list of scores while providing uniqueness of elements.
- With Memorystore for Redis, you can easily achieve your latency and throughput targets by scaling up your Redis instances with minimal impact to your application's availability.

