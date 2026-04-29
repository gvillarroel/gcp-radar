# Immutable internal ranges

Product: Virtual Private Cloud
Feature slug: `immutable-internal-ranges`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds internal ranges that cannot be edited after creation, except for description changes; Introduces internal ranges that are read-only after creation except for updating the description.

## Lifecycle

- Latest feature date: 2025-05-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- firewall
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/vpc/docs/alias-ip](https://docs.cloud.google.com/vpc/docs/alias-ip)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/routes](https://docs.cloud.google.com/vpc/docs/routes)
