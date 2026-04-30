# Confidential Hyperdisk Balanced volumes

Product: Google Kubernetes Engine
Feature slug: `confidential-hyperdisk-balanced-volumes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Hyperdisk Balanced volumes can be created in Confidential mode for custom boot disks and persistent volumes and attached to Confidential GKE Nodes.

## Lifecycle

- Latest feature date: 2024-11-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- confidential
- encrypt
- key
- kms
- logging
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)
