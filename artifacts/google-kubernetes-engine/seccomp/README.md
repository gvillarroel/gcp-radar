# Seccomp

Product: Google Kubernetes Engine
Feature slug: `seccomp`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Seccomp support has graduated to General Availability for Pods and individual containers.

## Lifecycle

- Latest feature date: 2021-04-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke))
- confidential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke))
- constraint (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
