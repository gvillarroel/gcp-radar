# Basic Tier data preservation during scaling and maintenance

Product: Memorystore for Redis
Feature slug: `basic-tier-data-preservation-during-scaling-and-maintenance`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Basic Tier instances preserve data during scaling and maintenance operations instead of flushing the cache.

## Lifecycle

- Latest feature date: 2022-03-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance](https://docs.cloud.google.com/memorystore/docs/redis/about-maintenance)
- [https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots](https://docs.cloud.google.com/memorystore/docs/redis/about-rdb-snapshots)
- [https://docs.cloud.google.com/memorystore/docs/redis/about-scaling-instances](https://docs.cloud.google.com/memorystore/docs/redis/about-scaling-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices)
