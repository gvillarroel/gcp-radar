# Legacy Logging and Monitoring

Product: Google Kubernetes Engine
Feature slug: `legacy-logging-and-monitoring`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Older GKE logging and monitoring integration replaced by Cloud Operations for GKE; deprecated on 2019-12-12.

## Lifecycle

- Latest feature date: 2021-07-20
- Deprecation date: 2019-12-12
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- audit (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/audit-logging-container)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
