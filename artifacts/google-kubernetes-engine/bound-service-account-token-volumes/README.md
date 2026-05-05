# Bound service account token volumes

Product: Google Kubernetes Engine
Feature slug: `bound-service-account-token-volumes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Injected service account token volumes are time-limited, auto-refreshed, and invalidated when the pod is deleted; Service account token volumes are time-limited, auto-refreshed, and invalidated when the pod is deleted.

## Lifecycle

- Latest feature date: 2021-10-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- constraint (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/service-accounts)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
