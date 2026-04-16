---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.269Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Custom constraints support"
feature_slug: "custom-constraints-support"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints"
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-cmek"
  - "https://docs.cloud.google.com/memorystore/docs/redis/cmek"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices"
keywords:
  - "custom"
  - "constraints"
  - "can"
  - "be"
  - "used"
  - "to"
  - "manage"
  - "memorystore"
---

# Custom constraints support

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Custom constraints can be used to manage Memorystore for Redis resources.

## Extended Definition

Custom constraints can be used to manage Memorystore for Redis resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek)
- [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices)

## Supporting Pages

### "Manage Memorystore for Redis resources with custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 361
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Redis Instance resource.alternativeLocationId resource.authEnabled resource.authorizedNetwork resource.availableMaintenanceVersions resource.connectMode resource.customerManagedKey resource.displayName resource.locationId resource.maintenancePolicy.description resource.maintenancePolicy.weeklyMaintenanceWindow.day resource.maintenanceVersion resource.memorySizeGb resource.name resource.persistenceConfig.persistenceMode resource.persistenceConfig.rdbSnapshotPeriod resource.persistenceConfig.rdbSnapshotStartTime resource.readReplicasMode resource.redisConfigs resource.redisVersion resource.replicaCount resource.reservedIpRange resource.secondaryIpRange resource.suspensionReasons resource.tier resource.transitEncryptionMode Example custom constraints The following table provides an example custom constraint that restricts Redis instance to one replica: Description Constraint syntax Restrict Redis instances with one replicas name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictInstanceToOnereplica resourceTypes : - redis.googleapis.com/Instance methodTypes : - CREATE - UPDATE condition : "resource.replicaCount >= 2" actionType : DENY displayName : Restrict Redis instances to one replica description : Prevent users from creating Redis instances with more than one replica What's next See Introduction to the Organization Policy Service to learn more about organization policies.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Manage Memorystore for Redis resources with custom constraints Stay organized with collections Save and categorize content based on your preferences.
- Benefits You can use a custom organization policy to allow or deny specific Memorystore for Redis resources.
- You could test this constraint by running the gcloud redis instances create command with replica-count set to 2 as demonstrated in the following snippet: gcloud redis instances create redis-test-instance \ --project=my-project \ --tier=standard \ --size=16 \ --region=us-central1 \ --redis-version=redis 7 0 \ --network=projects/my-project/global/networks/default \ --connect-mode=PRIVATE SERVICE ACCESS \ --read-replicas-mode=READ REPLICAS ENABLED \ --replica-count=2 The output is similar to the following: Operation denied by custom org policies: ["customConstraints/custom.restrictInstanceToOnereplica": "Prevent users from creating Redis instances with more than one replica"] Memorystore for Redis supported resources and operations The following Memorystore for Redis custom constraint fields are available to use when you create or update a Memorystore for Redis resource .

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek)
- Source ID: `site-docs-root-2`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Memorystore for Redis.
- If Memorystore for Redis can't access any key version being used (for example, you disable all key versions), then Memorystore for Redis shuts down the instance.
- If the Memorystore for Redis API is in the Deny policy list of services for this constraint, then you can't create non-CMEK-protected instances. constraints/gcp.restrictCmekCryptoKeyProjects : use this constraint to limit which Cloud KMS keys you can use for CMEK protection.
- Note: Because both Memorystore for Redis and Memorystore for Redis Cluster share the same endpoint ( redis.googleapis.com ), you can't enforce CMEK for instances independently from clusters in Memorystore for Redis Cluster.

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek)
- Source ID: `site-iam-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Memorystore for Redis.
- If Memorystore for Redis can't access any key version being used (for example, you disable all key versions), then Memorystore for Redis shuts down the instance.
- If the Memorystore for Redis API is in the Deny policy list of services for this constraint, then you can't create non-CMEK-protected instances. constraints/gcp.restrictCmekCryptoKeyProjects : use this constraint to limit which Cloud KMS keys you can use for CMEK protection.
- Note: Because both Memorystore for Redis and Memorystore for Redis Cluster share the same endpoint ( redis.googleapis.com ), you can't enforce CMEK for instances independently from clusters in Memorystore for Redis Cluster.

### "Memory management best practices \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Memory management best practices Stay organized with collections Save and categorize content based on your preferences.
- System memory is managed automatically by Memorystore to handle memory usage spikes caused by memory intensive operations and memory fragmentation which is common in open source Redis.
- Memory fragmentation Memory fragmentation can cause your Memorystore instance to run out of memory even when the used memory to maxmemory-gb ratio is low.
- A Memorystore for Redis instance, if not correctly managed and configured, can experience memory pressure which can impact application performance.

