# Random host port assignment in Autopilot Pods

Product: Google Kubernetes Engine
Feature slug: `random-host-port-assignment-in-autopilot-pods`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE Autopilot now supports exposing randomly assigned host ports in Pods.

## Lifecycle

- Latest feature date: 2023-01-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- firewall (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/disable-kubelet-readonly-port)
