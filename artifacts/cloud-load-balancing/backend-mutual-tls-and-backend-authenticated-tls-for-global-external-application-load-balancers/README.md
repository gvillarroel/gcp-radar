# Backend mutual TLS and backend authenticated TLS for global external Application Load Balancers

Product: Cloud Load Balancing
Feature slug: `backend-mutual-tls-and-backend-authenticated-tls-for-global-external-application-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Global external Application Load Balancers support backend certificate validation and mutual TLS for load balancer-to-backend connections; Global external Application Load Balancers support backend certificate validation and mutual TLS for load balancer-to-backend connections.

## Lifecycle

- Latest feature date: 2025-06-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- armor (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- certificate (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- encrypt (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- firewall (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- identity (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- key (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- private (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- security (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)
- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-setup)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
