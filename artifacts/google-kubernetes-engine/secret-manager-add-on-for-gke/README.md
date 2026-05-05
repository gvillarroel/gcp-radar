# Secret Manager add-on for GKE

Product: Google Kubernetes Engine
Feature slug: `secret-manager-add-on-for-gke`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Secret Manager add-on mounts secrets from Secret Manager into Kubernetes Pods.

## Lifecycle

- Latest feature date: 2024-03-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets)
