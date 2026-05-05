# Workload Identity

Product: Google Kubernetes Engine
Feature slug: `workload-identity`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Workload Identity lets workloads in GKE access Google Cloud services and is the recommended approach for that use case.

## Lifecycle

- Latest feature date: 2020-03-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/workload-identity)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets)
