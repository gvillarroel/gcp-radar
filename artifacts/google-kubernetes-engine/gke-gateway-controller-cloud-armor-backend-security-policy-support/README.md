# GKE Gateway controller Cloud Armor backend security policy support

Product: Google Kubernetes Engine
Feature slug: `gke-gateway-controller-cloud-armor-backend-security-policy-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The GKE Gateway controller now supports Cloud Armor backend security policies for internal Gateways.

## Lifecycle

- Latest feature date: 2024-10-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- audit (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- constraint (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails)
