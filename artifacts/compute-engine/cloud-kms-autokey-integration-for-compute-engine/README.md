# Cloud KMS Autokey integration for Compute Engine

Product: Compute Engine
Feature slug: `cloud-kms-autokey-integration-for-compute-engine`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Compute Engine supports Cloud KMS Autokey for automatically generated encryption keys that follow recommended security settings.

## Lifecycle

- Latest feature date: 2025-01-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt
- key
- kms
- security

## Official Evidence

- [https://developers.google.com/compute/docs/api/how-tos/performance](https://developers.google.com/compute/docs/api/how-tos/performance)
- [https://docs.cloud.google.com/compute/docs/api/how-tos/performance](https://docs.cloud.google.com/compute/docs/api/how-tos/performance)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/best-practices](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/best-practices)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
