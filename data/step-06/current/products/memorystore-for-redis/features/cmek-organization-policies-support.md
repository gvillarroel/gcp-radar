---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.269Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "CMEK organization policies support"
feature_slug: "cmek-organization-policies-support"
latest_feature_date: "2024-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-cmek"
  - "https://docs.cloud.google.com/memorystore/docs/redis/cmek"
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations"
  - "https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints"
keywords:
  - "cmek"
  - "organization"
  - "policies"
  - "are"
  - "supported"
  - "for"
  - "memorystore"
  - "redis"
---

# CMEK organization policies support

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

CMEK organization policies are supported for Memorystore for Redis.

## Extended Definition

CMEK organization policies are supported for Memorystore for Redis.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek)
- [https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations](https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations)
- [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)

## Supporting Pages

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Because both Memorystore for Redis and Memorystore for Redis Cluster share the same endpoint ( redis.googleapis.com ), you can't enforce CMEK for instances independently from clusters in Memorystore for Redis Cluster.
- Pricing Memorystore for Redis bills for a CMEK-enabled instance just like any other instance; there are no additional costs.
- About CMEK organization policy constraints Memorystore for Redis supports organization policy constraints for CMEK.
- About service accounts When creating an instance with CMEK, you must grant the cloudkms.cryptoKeyEncrypterDecrypter role to the Memorystore for Redis service account that has the following format: service- PROJECT NUMBER @cloud-redis.iam.gserviceaccount.com Granting this permission allows the service account to request key access from Cloud KMS.

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek)
- Source ID: `site-iam-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Because both Memorystore for Redis and Memorystore for Redis Cluster share the same endpoint ( redis.googleapis.com ), you can't enforce CMEK for instances independently from clusters in Memorystore for Redis Cluster.
- Pricing Memorystore for Redis bills for a CMEK-enabled instance just like any other instance; there are no additional costs.
- About CMEK organization policy constraints Memorystore for Redis supports organization policy constraints for CMEK.
- About service accounts When creating an instance with CMEK, you must grant the cloudkms.cryptoKeyEncrypterDecrypter role to the Memorystore for Redis service account that has the following format: service- PROJECT NUMBER @cloud-redis.iam.gserviceaccount.com Granting this permission allows the service account to request key access from Cloud KMS.

### "Supported Redis configurations \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations](https://docs.cloud.google.com/memorystore/docs/redis/supported-redis-configurations)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Supported Redis configurations Stay organized with collections Save and categorize content based on your preferences.
- This page describes maxmemory policies and other Redis configurations available for Memorystore for Redis.
- For additional information about the open source Redis maxmemory policies, see the open source Redis LRU cache page noeviction allkeys-lru volatile-lru (default) allkeys-random volatile-random volatile-ttl volatile-lfu (Redis version 4.0 and higher) allkeys-lfu (Redis version 4.0 and higher) notify-keyspace-events Allows clients to subscribe to notifications on certain keyspace events.
- 0 (default) Integers >= 120 Unit = seconds Unmodifiable configuration parameters The following table lists the Redis configuration parameters that you cannot modify in Memorystore for Redis and their default values.

### "Manage Memorystore for Redis resources with custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You could test this constraint by running the gcloud redis instances create command with replica-count set to 2 as demonstrated in the following snippet: gcloud redis instances create redis-test-instance \ --project=my-project \ --tier=standard \ --size=16 \ --region=us-central1 \ --redis-version=redis 7 0 \ --network=projects/my-project/global/networks/default \ --connect-mode=PRIVATE SERVICE ACCESS \ --read-replicas-mode=READ REPLICAS ENABLED \ --replica-count=2 The output is similar to the following: Operation denied by custom org policies: ["customConstraints/custom.restrictInstanceToOnereplica": "Prevent users from creating Redis instances with more than one replica"] Memorystore for Redis supported resources and operations The following Memorystore for Redis custom constraint fields are available to use when you create or update a Memorystore for Redis resource .
- Memorystore for Redis Instance resource.alternativeLocationId resource.authEnabled resource.authorizedNetwork resource.availableMaintenanceVersions resource.connectMode resource.customerManagedKey resource.displayName resource.locationId resource.maintenancePolicy.description resource.maintenancePolicy.weeklyMaintenanceWindow.day resource.maintenanceVersion resource.memorySizeGb resource.name resource.persistenceConfig.persistenceMode resource.persistenceConfig.rdbSnapshotPeriod resource.persistenceConfig.rdbSnapshotStartTime resource.readReplicasMode resource.redisConfigs resource.redisVersion resource.replicaCount resource.reservedIpRange resource.secondaryIpRange resource.suspensionReasons resource.tier resource.transitEncryptionMode Example custom constraints The following table provides an example custom constraint that restricts Redis instance to one replica: Description Constraint syntax Restrict Redis instances with one replicas name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictInstanceToOnereplica resourceTypes : - redis.googleapis.com/Instance methodTypes : - CREATE - UPDATE condition : "resource.replicaCount >= 2" actionType : DENY displayName : Restrict Redis instances to one replica description : Prevent users from creating Redis instances with more than one replica What's next See Introduction to the Organization Policy Service to learn more about organization policies.
- Policy inheritance By default, organization policies are inherited by the descendants of the resources on which you enforce the policy.
- Benefits You can use a custom organization policy to allow or deny specific Memorystore for Redis resources.

