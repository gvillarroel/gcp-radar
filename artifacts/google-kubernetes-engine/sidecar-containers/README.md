# Sidecar Containers

Product: Google Kubernetes Engine
Feature slug: `sidecar-containers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

InitContainers with restartPolicy: Always start before application containers and remain running for the Pod lifecycle.

## Lifecycle

- Latest feature date: 2025-05-09
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
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
