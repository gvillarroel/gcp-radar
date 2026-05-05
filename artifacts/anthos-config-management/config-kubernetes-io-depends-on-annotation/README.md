# config.kubernetes.io/depends-on annotation

Product: Anthos Config Management
Feature slug: `config-kubernetes-io-depends-on-annotation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This annotation lets users specify apply and delete ordering between resource objects.

## Lifecycle

- Latest feature date: 2022-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects))
- audit (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)
