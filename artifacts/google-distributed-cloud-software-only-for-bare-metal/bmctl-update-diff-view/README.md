# bmctl update diff view

Product: Google Distributed Cloud (software only) for bare metal
Feature slug: `bmctl-update-diff-view`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The bmctl update command can show differences between the cluster YAML configuration and the deployed Cluster and NodePool resources.

## Lifecycle

- Latest feature date: 2024-08-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms), [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)
