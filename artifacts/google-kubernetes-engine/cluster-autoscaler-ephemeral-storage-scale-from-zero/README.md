# Cluster Autoscaler ephemeral storage scale-from-zero

Product: Google Kubernetes Engine
Feature slug: `cluster-autoscaler-ephemeral-storage-scale-from-zero`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cluster Autoscaler can scale from zero node pools when Pods require ephemeral storage.

## Lifecycle

- Latest feature date: 2021-02-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- confidential
- encrypt
- key
- kms
- logging
- policy

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-auto-provisioning)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
