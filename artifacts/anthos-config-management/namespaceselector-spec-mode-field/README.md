# NamespaceSelector spec.mode field

Product: Anthos Config Management
Feature slug: `namespaceselector-spec-mode-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The NamespaceSelector CRD adds the preview spec.mode field to select namespace-scoped resources across declared and dynamically present namespaces.

## Lifecycle

- Latest feature date: 2023-12-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)
