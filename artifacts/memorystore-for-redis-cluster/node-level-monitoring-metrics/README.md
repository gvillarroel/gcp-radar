# Node-level monitoring metrics

Product: Memorystore for Redis Cluster
Feature slug: `node-level-monitoring-metrics`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The service supports node-level monitoring metrics; Memorystore for Redis Cluster supports node-level monitoring metrics.

## Lifecycle

- Latest feature date: 2024-11-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection))
- certificate (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection))
- credential (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection))
- iam (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection))
- logging (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection))
- security (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence), [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices), [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence](https://docs.cloud.google.com/memorystore/docs/cluster/about-rdb-persistence)
- [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)
- [https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices](https://docs.cloud.google.com/memorystore/docs/cluster/general-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview](https://docs.cloud.google.com/memorystore/docs/cluster/memorystore-for-redis-cluster-overview)
