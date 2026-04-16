---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.276Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Version upgrade on read-replica instances"
feature_slug: "version-upgrade-on-read-replica-instances"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/redis/supported-versions"
  - "https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances"
keywords:
  - "version"
  - "upgrade"
  - "on"
  - "read"
  - "replica"
  - "instances"
  - "that"
  - "use"
---

# Version upgrade on read-replica instances

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Instances that use read replicas support version upgrade operations.

## Extended Definition

Instances that use read replicas support version upgrade operations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas)
- [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
- [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)

## Supporting Pages

### About read replicas \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas)
- Source ID: `site-docs-root-2`
- Final score: 251
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Read replicas can only be enabled on instances that use Redis version 5.0 or higher.
- Failure modes for read replicas Instances with read replicas can run into various failures and unhealthy conditions that impact the application.
- Behavior of enabling read replicas on an existing instance Enabling read replicas is an exclusive operation, meaning you cannot perform other update operation instance modifications as a part of the same operation that enables read replicas.
- Enable read replicas on an existing instance Before you enable read replicas on an existing Memorystore for Redis instance, we strongly recommend that you reduce the write traffic to the primary node.

### Supported versions \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the features listed in this section, instances that run Redis version 7.0 with in-transit encryption see improved performance .
- No Redis version 6.x The following table outlines Memorystore for Redis support of some major features introduced by OSS Redis version 6.x: Feature Description Supported in Memorystore for Redis Threaded I/O With Redis 6.x, if multiple vCPUs are available, then some I/O operations can run in parallel.
- Yes Redis version 4.0 The following table outlines Memorystore for Redis support of some major features introduced by OSS Redis version 4.0: Feature Description Supported in Memorystore for Redis Cache eviction improvements Supports the Least Frequently Used (LFU) eviction policy.
- Version support policy Memorystore for Redis supports one patch version for every major OSS Redis version that's listed in the Current versions section of this page.

### "Manage Memorystore for Redis resources with custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Redis Instance resource.alternativeLocationId resource.authEnabled resource.authorizedNetwork resource.availableMaintenanceVersions resource.connectMode resource.customerManagedKey resource.displayName resource.locationId resource.maintenancePolicy.description resource.maintenancePolicy.weeklyMaintenanceWindow.day resource.maintenanceVersion resource.memorySizeGb resource.name resource.persistenceConfig.persistenceMode resource.persistenceConfig.rdbSnapshotPeriod resource.persistenceConfig.rdbSnapshotStartTime resource.readReplicasMode resource.redisConfigs resource.redisVersion resource.replicaCount resource.reservedIpRange resource.secondaryIpRange resource.suspensionReasons resource.tier resource.transitEncryptionMode Example custom constraints The following table provides an example custom constraint that restricts Redis instance to one replica: Description Constraint syntax Restrict Redis instances with one replicas name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictInstanceToOnereplica resourceTypes : - redis.googleapis.com/Instance methodTypes : - CREATE - UPDATE condition : "resource.replicaCount >= 2" actionType : DENY displayName : Restrict Redis instances to one replica description : Prevent users from creating Redis instances with more than one replica What's next See Introduction to the Organization Policy Service to learn more about organization policies.
- You could test this constraint by running the gcloud redis instances create command with replica-count set to 2 as demonstrated in the following snippet: gcloud redis instances create redis-test-instance \ --project=my-project \ --tier=standard \ --size=16 \ --region=us-central1 \ --redis-version=redis 7 0 \ --network=projects/my-project/global/networks/default \ --connect-mode=PRIVATE SERVICE ACCESS \ --read-replicas-mode=READ REPLICAS ENABLED \ --replica-count=2 The output is similar to the following: Operation denied by custom org policies: ["customConstraints/custom.restrictInstanceToOnereplica": "Prevent users from creating Redis instances with more than one replica"] Memorystore for Redis supported resources and operations The following Memorystore for Redis custom constraint fields are available to use when you create or update a Memorystore for Redis resource .
- For example, assume that a constraint requires that Redis instances should not have more than one replica.
- To verify that the custom constraint exists, use the gcloud org-policies list-custom-constraints command: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID Replace ORGANIZATION ID with the ID of your organization resource.

### "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- To choose one of the available OSS Redis versions for Memorystore for Redis, use the --redis-version flag with one of the following values: redis 7 2 redis 7 0 (Default) redis 6 X redis 5 0 redis 4 0 redis 3 2 For example: gcloud redis instances create myinstance --size=5 --region=us-central1 \ --zone=us-central1-a --redis-version=redis 6 X Networking You can create Redis instances using one of two connection modes : --connect-mode=PRIVATE SERVICE ACCESS or --connect-mode=DIRECT PEERING .
- For example: gcloud redis instances create myinstance --size=5 --region=us-central1 --project=my-service-project \ --network=projects/my-host-project/global/networks/my-host-shared-vpc \ --connect-mode=private-service-access Create a Redis instance that uses a centralized IP address range Centralized IP address range management is provided by using private services access .
- For example: gcloud redis instances create myinstance --region=us-central1 --size=1 --connect-mode=DIRECT PEERING --network=default --reserved-ip-range=10.0.0.0/24 Custom ranges with private services access If you only have one IP address range allocated for your private services access connection , that range is used by default for Memorystore instance creation.
- For example: gcloud redis instances create myinstance --region=us-central1 --size=1 --connect-mode=PRIVATE SERVICE ACCESS --network=default --reserved-ip-range=my-reserved-range-1,my-reserved-range-2 Create a Redis instance with read replicas For instructions on how to create a Redis instance with read replicas, see Creating a Redis instance with read replicas .

