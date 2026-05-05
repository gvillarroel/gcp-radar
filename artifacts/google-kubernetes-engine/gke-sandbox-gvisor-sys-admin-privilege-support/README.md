# GKE Sandbox (gVisor) SYS_ADMIN privilege support

Product: Google Kubernetes Engine
Feature slug: `gke-sandbox-gvisor-sys-admin-privilege-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE Sandbox (gVisor) can be configured with SYS_ADMIN privileges in GKE Autopilot.

## Lifecycle

- Latest feature date: 2025-05-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview))
- firewall (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview))
- threat (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/security-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
