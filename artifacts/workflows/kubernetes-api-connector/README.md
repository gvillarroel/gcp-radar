# Kubernetes API connector

Product: Workflows
Feature slug: `kubernetes-api-connector`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This connector lets Workflows interact with Kubernetes objects in a Google Kubernetes Engine cluster.

## Lifecycle

- Latest feature date: 2025-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- allow (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- auth (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- authorization (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- firewall (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- iam (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- identity (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- key (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- kms (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- logging (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- policy (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- role (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- secret (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- security (evidence: [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api), [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- [https://docs.cloud.google.com/workflows/docs/access-kubernetes-api](https://docs.cloud.google.com/workflows/docs/access-kubernetes-api)
- [https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview](https://docs.cloud.google.com/workflows/docs/reference/connectors/gke/Overview)
