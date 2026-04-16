---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.722Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "On-demand backups"
feature_slug: "on-demand-backups"
latest_feature_date: "2025-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/backups"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption"
keywords:
  - "on"
  - "demand"
  - "backups"
  - "the"
  - "supports"
---

# On-demand backups

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

The service supports on-demand backups.

## Extended Definition

The service supports on-demand backups.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/backups](https://docs.cloud.google.com/memorystore/docs/cluster/backups)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption)

## Supporting Pages

### "Backups overview \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/backups](https://docs.cloud.google.com/memorystore/docs/cluster/backups)
- Source ID: `site-iam-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automated and on-demand backups You can initiate backups in two different ways: Automated backups (Recommended): you can configure a backup schedule for a cluster that initiates periodic backups.
- On-demand backups : you can initiate a backup operation that begins immediately.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback Backups overview Stay organized with collections Save and categorize content based on your preferences.

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek](https://docs.cloud.google.com/memorystore/docs/cluster/about-cmek)
- Source ID: `site-iam-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Enable or restore the primary CMEK key version If you enable or restore the primary key version of your CMEK, then the following conditions apply for backups and persistence: You can create on-demand and automated backups again.
- Rotate the primary CMEK key version If you rotate the primary key version of your CMEK and create a new primary key version, then the following conditions apply for backups and persistence: The latest primary key version of your CMEK encrypts new backups.
- Persistence : Memorystore for Redis Cluster supports two types of persistence: RDB persistence: The Redis database (RDB) feature protects your data by saving snapshots of your data on durable storage.
- If you enable the primary key version of your CMEK, but you disable or destroy an older key version, then the following conditions apply for backups and persistence: You can create backups.

### "About cross-region replication \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Settings that a secondary cluster copies from the primary cluster When you create a secondary cluster, this cluster copies the following settings from the primary cluster: Shard count IAM authentication mode In-transit encryption mode Cluster configurations Redis version Node type Persistence mode Override default settings When you create a secondary cluster, you can use the following settings to override the default settings: Zone distribution configuration Replica count Maintenance windows Deletion protection Automated backups Update cluster settings When you update the settings for your cluster in Memorystore for Redis Cluster, you can change some settings only on the primary cluster.
- Shard count Cluster configurations Persistence mode Redis version Node type Configure local settings You configure the following settings locally: Deletion protection Replica count Maintenance windows Cluster endpoints Automated backups Best practices for switching primary and secondary clusters When you perform a switchover , we recommend that you follow the instructions in this section.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- You can perform a switchover for the following reasons: Test your disaster recovery setup Switch over during an actual disaster recovery scenario Perform a migration of your workload After you complete the switchover, Memorystore for Redis Cluster reverses the direction of replication.

### "About in-transit encryption \_|\_ Memorystore for Redis Cluster \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/cluster/about-in-transit-encryption)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In-transit encryption prerequisites To use in-transit encryption with Memorystore for Redis Cluster, you need the following: A Redis client that supports TLS or a third-party TLS sidecar.
- In addition to Memorystore for Redis Cluster conducting a weekly server-side certificate rotation, for the customer-managed CA mode, you can rotate the certificates on-demand.
- Memorystore for Redis Cluster supports the TLS protocol, versions 1.2 and later.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

