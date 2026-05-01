# vm.max_map_count sysctl configuration

Product: Google Kubernetes Engine
Feature slug: `vm-max-map-count-sysctl-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE Standard node pools can use node system configuration to set the vm.max_map_count Linux kernel attribute.

## Lifecycle

- Latest feature date: 2023-12-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- authorization
- confidential
- iam
- key
- kms
- logging
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/automatically-bootstrapping-gke-nodes-with-daemonsets)
