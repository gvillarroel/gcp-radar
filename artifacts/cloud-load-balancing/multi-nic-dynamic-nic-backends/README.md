# Multi-NIC Dynamic NIC backends

Product: Cloud Load Balancing
Feature slug: `multi-nic-dynamic-nic-backends`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Load Balancing supports load balancing to multi-NIC instances that use Dynamic NICs.

## Lifecycle

- Latest feature date: 2025-06-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- armor
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining](https://docs.cloud.google.com/load-balancing/docs/enabling-connection-draining)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
