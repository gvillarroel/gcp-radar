# Dataplane V2

Product: Google Kubernetes Engine
Feature slug: `dataplane-v2`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataplane V2 is generally available in newly created GKE clusters running version 1.20.6-gke.700 and later; Dataplane V2 is available in beta for newly created clusters on supported GKE versions.

## Lifecycle

- Latest feature date: 2021-05-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters))
- audit (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
