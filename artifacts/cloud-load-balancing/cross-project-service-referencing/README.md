# Cross-project service referencing

Product: Cloud Load Balancing
Feature slug: `cross-project-service-referencing`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Application Load Balancers can reference backend services that reside in different projects, including Shared VPC environments; Regional external HTTP(S) load balancers support Shared VPC cross-project service referencing for centrally managed load balancers with distributed backend services.

## Lifecycle

- Latest feature date: 2024-06-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- encrypt
- policy

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas)
