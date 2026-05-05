# TLS encryption

Product: Memorystore for Redis
Feature slug: `tls-encryption`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Memorystore for Redis supports TLS encryption.

## Lifecycle

- Latest feature date: 2020-12-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance), [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek))
- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance), [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek))
- certificate (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance), [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance), [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance), [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek))
- kms (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance), [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek))
- security (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption), [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance), [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview), [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption](https://docs.cloud.google.com/memorystore/docs/redis/about-in-transit-encryption)
- [https://docs.cloud.google.com/memorystore/docs/redis/cmek](https://docs.cloud.google.com/memorystore/docs/redis/cmek)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
