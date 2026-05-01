# Pod affinity namespace selection

Product: Google Kubernetes Engine
Feature slug: `pod-affinity-namespace-selection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Pod affinity rules can select namespaces by label selector instead of only by explicit namespace names.

## Lifecycle

- Latest feature date: 2021-10-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- key
- kms
- policy
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-elasticsearch](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/deploy-elasticsearch)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
