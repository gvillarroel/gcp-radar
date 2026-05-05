# Migration from previous-generation Anthos Attached Clusters

Product: Anthos Attached Clusters
Feature slug: `migration-from-previous-generation-anthos-attached-clusters`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Added support for migrating existing EKS and AKS clusters from the previous-generation Anthos Attached Clusters product.

## Lifecycle

- Latest feature date: 2022-12-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/connect-to-cluster))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/install-cloud-logging)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/cluster-prerequisites)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/connect-to-cluster)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
