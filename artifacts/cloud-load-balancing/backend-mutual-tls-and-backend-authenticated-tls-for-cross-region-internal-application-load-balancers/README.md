# Backend mutual TLS and backend authenticated TLS for cross-region internal Application Load Balancers

Product: Cloud Load Balancing
Feature slug: `backend-mutual-tls-and-backend-authenticated-tls-for-cross-region-internal-application-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cross-region internal Application Load Balancers support backend certificate validation and mutual TLS for load balancer-to-backend connections.

## Lifecycle

- Latest feature date: 2026-02-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal))
- armor (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal))
- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal))
- certificate (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal))
- encrypt (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal))
- identity (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal))
- key (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal))
- private (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal))
- security (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)
- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
