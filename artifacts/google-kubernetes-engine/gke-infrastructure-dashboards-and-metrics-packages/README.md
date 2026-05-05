# GKE Infrastructure Dashboards and Metrics Packages

Product: Google Kubernetes Engine
Feature slug: `gke-infrastructure-dashboards-and-metrics-packages`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE can export predefined managed kube-state-metrics data for workloads state and persistent storage to Cloud Monitoring and the Observability tab.

## Lifecycle

- Latest feature date: 2023-11-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-weaviate)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/enterprise-redis)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql)
