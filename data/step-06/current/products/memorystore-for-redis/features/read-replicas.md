---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.275Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Read replicas"
feature_slug: "read-replicas"
latest_feature_date: "2022-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances"
keywords:
  - "read"
  - "replicas"
  - "provide"
  - "only"
  - "replica"
  - "instances"
  - "for"
  - "memorystore"
---

# Read replicas

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Read replicas provide read-only replica instances for Memorystore for Redis; Read replicas provide read-only replica instances for Memorystore for Redis.

## Extended Definition

Read replicas provide read-only replica instances for Memorystore for Redis; Read replicas provide read-only replica instances for Memorystore for Redis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas)
- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)

## Supporting Pages

### About read replicas \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas)
- Source ID: `site-docs-root-2`
- Final score: 380
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Primary endpoint returns READONLY Your writes to the primary endpoint of a Memorystore for Redis instance with read replicas may unexpectedly receive -READONLY You can't write against a read only replica. errors.
- Failovers for instances with read replicas When a primary fails, the Memorystore health monitoring service initiates the failover and the new primary is made available for both reads and writes.
- The read endpoint IP address is located in the original range allocated for your Memorystore instance, not the additional range you provide when enabling read replicas.
- The Standard Tier of Memorystore for Redis provides the ability to scale your application's read queries using read replicas.

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you have primary instances that have read replicas enabled, then Memorystore for Redis doesn't support the manual failover API.
- If you configure an instance to have only one non-read replica, then Memorystore for Redis directs all application connections to the primary endpoint.
- The read replicas in this configuration perform reads as well as provide failover support for HA functionality.
- Memorystore for Redis provides high availability by replicating a primary instance to one or more replicas.

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 296
- Re-rank relevance: N/A

Evidence snippets:
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- In general, the Redis functionality that Memorystore for Redis instances provide is the same as the functionality that locally-hosted Redis instances provide.
- High availability: Memorystore for Redis instances in the Standard Tier are replicated across zones, monitored for health and have fast automatic failover.
- For applications that need scaling of read queries, you can scale the queries across five read replicas using the read endpoint.

### "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 286
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud redis instances create myinstance --region=us-central1 --size=1 --connect-mode=PRIVATE SERVICE ACCESS --network=default --reserved-ip-range=my-reserved-range-1,my-reserved-range-2 Create a Redis instance with read replicas For instructions on how to create a Redis instance with read replicas, see Creating a Redis instance with read replicas .
- The minimum required block size is /29 for instances without read replicas and /28 for instances with read replicas.
- For example: gcloud redis instances create myinstance --region=us-central1 --size=1 --connect-mode=DIRECT PEERING --network=default --reserved-ip-range=10.0.0.0/24 Custom ranges with private services access If you only have one IP address range allocated for your private services access connection , that range is used by default for Memorystore instance creation.
- Memorystore for Redis Click the ID of an instance about which you want to view summary information. gcloud To view summary information about an instance, use the gcloud redis instances describe command: gcloud redis instances describe INSTANCE ID \ --region= REGION ID Make the following replacements: INSTANCE ID : the ID of the instance about which you want to view summary information REGION ID : the region where the instance is located For example: gcloud redis instances describe my-instance \ --region=us-central1 Edit instances To edit an instance: Console Go to the Memorystore for Redis page in the Google Cloud console.

