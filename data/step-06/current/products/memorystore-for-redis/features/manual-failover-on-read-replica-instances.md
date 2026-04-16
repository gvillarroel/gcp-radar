---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.275Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Manual failover on read-replica instances"
feature_slug: "manual-failover-on-read-replica-instances"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-manual-failover"
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/redis/monitor-instances"
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
keywords:
  - "manual"
  - "failover"
  - "on"
  - "read"
  - "replica"
  - "instances"
  - "that"
  - "use"
---

# Manual failover on read-replica instances

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Instances that use read replicas support manual failover operations.

## Extended Definition

Instances that use read replicas support manual failover operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-manual-failover](https://docs.cloud.google.com/memorystore/docs/redis/about-manual-failover)
- [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas)
- [https://docs.cloud.google.com/memorystore/docs/redis/monitor-instances](https://docs.cloud.google.com/memorystore/docs/redis/monitor-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)

## Supporting Pages

### About manual failover \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-manual-failover](https://docs.cloud.google.com/memorystore/docs/redis/about-manual-failover)
- Source ID: `site-docs-root-2`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To set the data protection mode, use one of the following commands: gcloud redis instances failover INSTANCE NAME --data-protection-mode=limited-data-loss or gcloud redis instances failover INSTANCE NAME --data-protection-mode=force-data-loss How data protection modes work The limited-data-loss mode minimizes data loss by verifying that the difference in data between the primary and replica is below 30 MB before initiating the failover.
- Potential issues blocking a manual failover Running a manual failover on a Basic Tier instance does not work because Basic Tier instances do not have replicas to which the primary can failover.
- The chart represents a failover by showing how the lines switch from one to zero, and zero to one, respectively. gcloud verification Before you initiate a manual failover, use the following command to check which zone your primary node is in: gcloud redis instances describe [INSTANCE ID] --region=[REGION] Your primary node is in the zone labeled currentLocationId .
- After you complete a manual failover, you can confirm that your primary node switched to a new zone by running the gcloud redis instances describe command again and checking that the currentLocationId changed zones.

### About read replicas \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas)
- Source ID: `site-docs-root-2`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Read replicas can only be enabled on instances that use Redis version 5.0 or higher.
- Failovers for instances with read replicas When a primary fails, the Memorystore health monitoring service initiates the failover and the new primary is made available for both reads and writes.
- Failure modes for read replicas Instances with read replicas can run into various failures and unhealthy conditions that impact the application.
- Some of the client connections to the read endpoint also undergo disconnects from the read replica that is promoted to primary during failover.

### Monitor Redis instances \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/monitor-instances](https://docs.cloud.google.com/memorystore/docs/redis/monitor-instances)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing instance uptime, restart, and failover information in Google Cloud Observability To view instance uptime information, use Metrics Explorer: Go to the Google Cloud console, login and navigate to the project with your Redis instances: Go to Google Cloud console Select Monitoring from the left navigation menu.
- Viewing operations per second To view an instance's operations per second, use Metrics Explorer: Go to the Google Cloud console, login and navigate to the project with your Redis instances: Go to Google Cloud console Select Monitoring from the left navigation menu.
- In addition to the types of monitoring covered here, Memorystore for Redis is compatible with open source Redis, so you can use existing Redis monitoring tools from Compute Engine VMs to monitor your instances.
- You can identify a failover by looking for a spot on the graph where the primary instance's line drops off to zero and the replica's line continues to rise, indicating it has become the new primary instance.

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you have primary instances that have read replicas enabled, then Memorystore for Redis doesn't support the manual failover API.
- During a failover, if there are connections to the read endpoint, then Memorystore for Redis drops the connections to the replica that's being promoted to the primary instance.
- A failover occurs when you perform the following tasks: Scale your instance Upgrade the Redis version of an instance Initiate a manual failover Perform a maintenance update If you implement retry logic in your application to handle connection drops because of failovers, then your instance probably won't see a significant performance impact.
- In addition to including retry logic, we recommend that you test how a failover affects your application by testing the application with a manual failover .

