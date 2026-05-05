# Version upgrade on read-replica instances

Product: Memorystore for Redis
Feature slug: `version-upgrade-on-read-replica-instances`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Instances that use read replicas support version upgrade operations.

## Lifecycle

- Latest feature date: 2022-02-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas), [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances))
- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas), [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances))
- constraint (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas), [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas), [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances))
- iam (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas), [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas), [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances))
- policy (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas), [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances))
- private (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas), [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- [https://docs.cloud.google.com/memorystore/docs/redis/supported-versions](https://docs.cloud.google.com/memorystore/docs/redis/supported-versions)
