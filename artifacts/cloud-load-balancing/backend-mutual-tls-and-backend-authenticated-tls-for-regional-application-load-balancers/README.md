# Backend mutual TLS and backend authenticated TLS for regional Application Load Balancers

Product: Cloud Load Balancing
Feature slug: `backend-mutual-tls-and-backend-authenticated-tls-for-regional-application-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Regional external and regional internal Application Load Balancers support backend certificate validation and mutual TLS for load balancer-to-backend connections.

## Lifecycle

- Latest feature date: 2025-12-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup))
- authorization (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup))
- certificate (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup))
- identity (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup))
- key (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup))
- policy (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup))
- security (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)
- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup)
- [https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-mtls-setup)
