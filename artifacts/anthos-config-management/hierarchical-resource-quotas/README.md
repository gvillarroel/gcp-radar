# Hierarchical Resource Quotas

Product: Anthos Config Management
Feature slug: `hierarchical-resource-quotas`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Hierarchy Controller includes preview support for hierarchical resource quotas that apply to a namespace and its descendants.

## Lifecycle

- Latest feature date: 2021-02-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
