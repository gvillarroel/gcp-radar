# Frontend mutual TLS for Application Load Balancers

Product: Cloud Load Balancing
Feature slug: `frontend-mutual-tls-for-application-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Regional external, regional internal, and cross-region internal Application Load Balancers support frontend mutual TLS by requesting and validating client certificates during the TLS handshake.

## Lifecycle

- Latest feature date: 2024-08-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- authorization
- certificate
- encrypt
- firewall
- key
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
