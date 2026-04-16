---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.245Z"
product_name: "Memorystore for Memcached"
product_slug: "memorystore-for-memcached"
feature_name: "Memorystore for Memcached maintenance windows"
feature_slug: "memorystore-for-memcached-maintenance-windows"
latest_feature_date: "2022-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/maintenance-policy"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey"
keywords:
  - "memorystore"
  - "for"
  - "memcached"
  - "maintenance"
  - "windows"
  - "supports"
  - "scheduled"
  - "instances"
---

# Memorystore for Memcached maintenance windows

Product: Memorystore for Memcached
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Memcached supports scheduled maintenance windows for instances.

## Extended Definition

Memorystore for Memcached supports scheduled maintenance windows for instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows)
- [https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance](https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/memcached/maintenance-policy](https://docs.cloud.google.com/memorystore/docs/memcached/maintenance-policy)
- [https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey](https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey)

## Supporting Pages

### "Find and set maintenance windows \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/memcached/find-and-set-maintenance-windows)
- Source ID: `site-iam-reference`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following command also shows what nodes have been updated for your instance. gcloud memcache instances describe INSTANCE NAME --region= REGION --format="table(updateAvailable.yesno(yes="YES",no="NO"),memcacheNodes:format='table(nodeId,updateAvailable.yesno(yes="YES", no="NO"))')" What's next View the permissions required to manage maintenance windows for your Memcached instance.
- Learn more about the deprecation Read the migration guide Home Documentation Databases Memorystore Memorystore for Memcached Guides Send feedback Find and set maintenance windows Stay organized with collections Save and categorize content based on your preferences.
- Reschedule planned maintenance Caution: if you programmatically reschedule maintenance in bulk requests (not natively supported by Memorystore for Memcached), limit batch reschedule sizes to 100 instances per batch.
- Find scheduled maintenance If maintenance has been scheduled for your instance, you can view it using the following instructions: Console Go to the Memorystore for Memcached page in the Google Cloud console.

### About maintenance on Memorystore for Memcached \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance](https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance)
- Source ID: `site-iam-reference`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the Memorystore for Memcached cluster is not fully updated by the scheduled maintenance time, any remaining cluster nodes are updated automatically during the maintenance window.
- FAQ The following are some frequently asked questions about the maintenance policy for Memorystore for Memcached: What is the impact of maintenance on Memcached instances?
- When subscribing you opt into maintenance notifications for all Memorystore instances that have maintenance windows in a given project.
- Leverage the reschedule features to test the update on a non-production instance once the update becomes available Manual maintenance While we expect that automatic maintenance via maintenance windows meets the requirements for the majority of Memorystore users, manual maintenance provides a gcloud interface for updating an instance.

### About maintenance on Memorystore for Memcached \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/maintenance-policy](https://docs.cloud.google.com/memorystore/docs/memcached/maintenance-policy)
- Source ID: `site-iam-reference`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the Memorystore for Memcached cluster is not fully updated by the scheduled maintenance time, any remaining cluster nodes are updated automatically during the maintenance window.
- FAQ The following are some frequently asked questions about the maintenance policy for Memorystore for Memcached: What is the impact of maintenance on Memcached instances?
- When subscribing you opt into maintenance notifications for all Memorystore instances that have maintenance windows in a given project.
- Leverage the reschedule features to test the update on a non-production instance once the update becomes available Manual maintenance While we expect that automatic maintenance via maintenance windows meets the requirements for the majority of Memorystore users, manual maintenance provides a gcloud interface for updating an instance.

### "Migrate from Memorystore for Memcached to Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey](https://docs.cloud.google.com/memorystore/docs/memcached/deprecation/migrate-to-valkey)
- Source ID: `site-api-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then, to determine the node type for your corresponding Memorystore for Valkey instances, use the following table: Memorystore for Memcached node size Memorystore for Valkey node type Total node capacity vCPU count shared-core-nano 1.4 GB 0.5 (Shared) 1 GB – 5 GB standard-small 6.5 GB 2 6 GB – 12 GB highmem-medium 13.0 GB 2 13 GB – 50 GB highmem-xlarge 58.0 GB 8 The shared-core-nano node type is for small workloads.
- For each of your Memorystore for Memcached instances, to determine its node size, check the value that's associated with the Memory per node property.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.
- If your Memorystore for Memcached instances use multiple nodes, then which node type do we recommend for your Memorystore for Valkey instances?

