---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.720Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "maintenance windows"
feature_slug: "maintenance-windows"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/reschedule_cluster_maintenance"
keywords:
  - "maintenance"
  - "windows"
  - "you"
  - "can"
  - "find"
  - "and"
  - "set"
  - "for"
---

# maintenance windows

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

You can find and set maintenance windows for Memorystore for Redis Cluster; Memorystore for Redis Cluster supports maintenance windows in Preview.

## Extended Definition

You can find and set maintenance windows for Memorystore for Redis Cluster; Memorystore for Redis Cluster supports maintenance windows in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)
- [https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas)
- [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/reschedule_cluster_maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/reschedule_cluster_maintenance)

## Supporting Pages

### "About maintenance \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/about-maintenance)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Upcoming maintenance notifications To ensure you stay informed about maintenance events on your cluster, you can set up email notifications regarding upcoming maintenance at least one week before it's scheduled.
- After you schedule maintenance for your cluster, you can either start the update for your cluster immediately or defer the update for up to two weeks from the originally scheduled maintenance date and time.
- After you configure a maintenance window for a cluster, Memorystore for Redis Cluster schedules automatic maintenance in the future according to the preferences that you set for maintenance windows.
- If you subscribe to maintenance notifications and set a maintenance window, then Memorystore for Redis Cluster notifies you by email at least one week before a maintenance event.

### "About cross-region replication \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Settings that a secondary cluster copies from the primary cluster When you create a secondary cluster, this cluster copies the following settings from the primary cluster: Shard count IAM authentication mode In-transit encryption mode Cluster configurations Redis version Node type Persistence mode Override default settings When you create a secondary cluster, you can use the following settings to override the default settings: Zone distribution configuration Replica count Maintenance windows Deletion protection Automated backups Update cluster settings When you update the settings for your cluster in Memorystore for Redis Cluster, you can change some settings only on the primary cluster.
- Shard count Cluster configurations Persistence mode Redis version Node type Configure local settings You configure the following settings locally: Deletion protection Replica count Maintenance windows Cluster endpoints Automated backups Best practices for switching primary and secondary clusters When you perform a switchover , we recommend that you follow the instructions in this section.
- You can perform a switchover for the following reasons: Test your disaster recovery setup Switch over during an actual disaster recovery scenario Perform a migration of your workload After you complete the switchover, Memorystore for Redis Cluster reverses the direction of replication.
- Benefits Benefits of cross-region replication on Memorystore for Redis Cluster include the following: Disaster recovery : If the primary cluster's region becomes unavailable, then you can detach or switch over to a secondary cluster in another region to serve read and write requests.

### "High availability and replicas \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas](https://docs.cloud.google.com/memorystore/docs/cluster/ha-and-replicas)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using recommended best practices allows your OSS Redis client to automatically and gracefully handle the role (automatic failovers), and slot assignment changes (node replacement, consumer scale out/in) for your cluster without any downtime.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback High availability and replicas Stay organized with collections Save and categorize content based on your preferences.
- Failover and node repair duration Automatic failovers can take time on the order of tens of seconds for unplanned events such as a primary node process crash, or a hardware failure.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/reschedule_cluster_maintenance](https://docs.cloud.google.com/memorystore/docs/cluster/reference/mcp/tools_list/reschedule_cluster_maintenance)
- Source ID: `site-api-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique id} . metadata object { createTime : The time the operation was created. endTime : The time the operation finished running. target : Server-defined resource path for the target of the operation. verb : Name of the verb executed by the operation. statusDetail : Human-readable status of the operation, if any. cancelRequested : Identifies whether the user has requested cancellation of the operation.
- All type URL strings must be legal URI references with the additional restriction (for the text format) that the content of the reference must consist only of alphanumeric characters, percent-encoded escapes, and characters in the following set (not including the outer backticks): /-. !$&() +,;= .
- Example: type.googleapis.com/google.protobuf.StringValue This string must contain at least one / character, and the content after the last / must be the fully-qualified name of the type in canonical form, without a leading dot.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Reference Send feedback MCP Tools Reference: redis.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

