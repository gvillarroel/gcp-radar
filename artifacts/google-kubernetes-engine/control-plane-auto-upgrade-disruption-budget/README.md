# Control plane auto-upgrade disruption budget

Product: Google Kubernetes Engine
Feature slug: `control-plane-auto-upgrade-disruption-budget`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE lets you control control plane auto-upgrade disruption frequency by setting a cluster disruption budget.

## Lifecycle

- Latest feature date: 2026-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cluster-disruption-budget](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cluster-disruption-budget), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cluster-disruption-budget](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cluster-disruption-budget)
