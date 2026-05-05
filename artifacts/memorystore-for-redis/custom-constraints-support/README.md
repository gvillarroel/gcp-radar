# Custom constraints support

Product: Memorystore for Redis
Feature slug: `custom-constraints-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Custom constraints can be used to manage Memorystore for Redis resources.

## Lifecycle

- Latest feature date: 2024-10-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek), [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices))
- allow (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek), [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices))
- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek), [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices))
- constraint (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek), [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek), [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek), [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices))
- kms (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek), [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices))
- policy (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek), [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices))
- private (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek), [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/redis/about-cmek](https://docs.cloud.google.com/memorystore/docs/redis/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek)
- [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- [https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices](https://docs.cloud.google.com/memorystore/docs/redis/memory-management-best-practices)
