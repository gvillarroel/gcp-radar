# Traffic isolation on service load balancing policy

Product: Cloud Load Balancing
Feature slug: `traffic-isolation-on-service-load-balancing-policy`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Global and cross-region load balancers support traffic isolation to keep requests in the closest region and optionally prevent overflow to other regions.

## Lifecycle

- Latest feature date: 2025-05-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- armor
- auth
- authorization
- encrypt
- identity
- policy
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview)
- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
