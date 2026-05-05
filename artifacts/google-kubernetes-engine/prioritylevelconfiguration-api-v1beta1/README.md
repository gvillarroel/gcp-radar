# PriorityLevelConfiguration API v1beta1

Product: Google Kubernetes Engine
Feature slug: `prioritylevelconfiguration-api-v1beta1`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The PriorityLevelConfiguration API v1beta1 defines Kubernetes API priority levels and is deprecated in favor of v1beta2; PriorityLevelConfiguration API v1beta1 is a Kubernetes beta API for API flow control priority levels; deprecated on 2022-09-14.

## Lifecycle

- Latest feature date: 2022-09-14
- Deprecation date: 2022-09-14
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/ray-kueue-dws)
