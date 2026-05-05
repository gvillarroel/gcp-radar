# node type changes after creation

Product: Memorystore for Redis Cluster
Feature slug: `node-type-changes-after-creation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

You can change the node type of an instance after creating it.

## Lifecycle

- Latest feature date: 2025-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification), [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication))
- auth (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification), [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication))
- certificate (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification), [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication))
- credential (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification), [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication))
- encrypt (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification), [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication))
- iam (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification), [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication))
- key (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification), [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication))
- private (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification), [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication))
- token (evidence: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification), [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances), [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection), [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication))

## Official Evidence

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)
- [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)
- [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances)
