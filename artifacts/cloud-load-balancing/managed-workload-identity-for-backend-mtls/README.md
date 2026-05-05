# Managed workload identity for backend mTLS

Product: Cloud Load Balancing
Feature slug: `managed-workload-identity-for-backend-mtls`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Global external Application Load Balancers support managed workload identity to automate certificate and trust management for backend mutual TLS.

## Lifecycle

- Latest feature date: 2026-01-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- certificate (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- encrypt (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- firewall (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- identity (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- key (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- private (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- security (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)
- [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
