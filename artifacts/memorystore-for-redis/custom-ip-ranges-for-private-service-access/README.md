# Custom IP ranges for private service access

Product: Memorystore for Redis
Feature slug: `custom-ip-ranges-for-private-service-access`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Users can specify an IP address range for the private service access connection mode.

## Lifecycle

- Latest feature date: 2021-05-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances), [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints))
- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances), [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints))
- constraint (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances), [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances), [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances), [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints))
- permission (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances), [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints))
- policy (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances), [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints))
- private (evidence: [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking), [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances), [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection), [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection)
- [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking)
