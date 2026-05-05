# GKE Sandbox

Product: Google Kubernetes Engine
Feature slug: `gke-sandbox`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE Sandbox protects the host kernel on nodes when containers run untrusted code.

## Lifecycle

- Latest feature date: 2020-01-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- constraint (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
