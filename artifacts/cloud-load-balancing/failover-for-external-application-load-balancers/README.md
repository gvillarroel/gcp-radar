# Failover for external Application Load Balancers

Product: Cloud Load Balancing
Feature slug: `failover-for-external-application-load-balancers`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Load Balancing supports failover for global, classic, and regional external Application Load Balancers by using regional external Application Load Balancers as backups; Cloud Load Balancing supports failover for global, classic, and regional external Application Load Balancers by using regional external Application Load Balancers as backups.

## Lifecycle

- Latest feature date: 2024-11-22
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
- firewall
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/backend-service-load-testing](https://docs.cloud.google.com/load-balancing/docs/backend-service-load-testing)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
