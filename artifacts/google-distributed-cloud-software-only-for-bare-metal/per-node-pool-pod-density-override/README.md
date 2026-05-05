# Per-node-pool pod density override

Product: Google Distributed Cloud (software only) for bare metal
Feature slug: `per-node-pool-pod-density-override`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

You can override the cluster-level pod density setting for individual node pools.

## Lifecycle

- Latest feature date: 2025-09-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/add-remove-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/config-samples)
