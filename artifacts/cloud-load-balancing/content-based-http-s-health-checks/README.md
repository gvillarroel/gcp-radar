# Content-based HTTP(S) health checks

Product: Cloud Load Balancing
Feature slug: `content-based-http-s-health-checks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

HTTP(S) health checks can validate backend responses based on returned content.

## Lifecycle

- Latest feature date: 2018-06-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/health-checks](https://docs.cloud.google.com/load-balancing/docs/health-checks), [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls))
- certificate (evidence: [https://docs.cloud.google.com/load-balancing/docs/health-checks](https://docs.cloud.google.com/load-balancing/docs/health-checks), [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts), [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)
- [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/health-checks](https://docs.cloud.google.com/load-balancing/docs/health-checks)
