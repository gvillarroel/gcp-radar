# Compact placement policy for node auto-provisioning

Product: Google Kubernetes Engine
Feature slug: `compact-placement-policy-for-node-auto-provisioning`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Node auto-provisioning can use a custom resource policy as a compact placement policy.

## Lifecycle

- Latest feature date: 2024-11-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential
- constraint
- iam
- key
- kms
- logging
- policy

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_node_pool)
