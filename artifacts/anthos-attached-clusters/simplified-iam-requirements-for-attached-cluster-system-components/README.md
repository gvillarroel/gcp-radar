# Simplified IAM requirements for attached cluster system components

Product: Anthos Attached Clusters
Feature slug: `simplified-iam-requirements-for-attached-cluster-system-components`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Anthos Attached Clusters no longer requires manual Google IAM bindings for key system components such as gke-telemetry-agent, Google Managed Service for Prometheus collectors, and the Binary Authorization agent.

## Lifecycle

- Latest feature date: 2023-12-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/attach-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/reference/supported-versions)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/attach-cluster)
