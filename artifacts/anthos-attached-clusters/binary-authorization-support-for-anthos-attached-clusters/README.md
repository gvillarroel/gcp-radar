# Binary Authorization support for Anthos attached clusters

Product: Anthos Attached Clusters
Feature slug: `binary-authorization-support-for-anthos-attached-clusters`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Introduced Binary Authorization as a deploy-time security control to enforce image signing and signature validation for attached clusters.

## Lifecycle

- Latest feature date: 2023-09-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/enable-binary-authorization)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/connect-to-cluster)
