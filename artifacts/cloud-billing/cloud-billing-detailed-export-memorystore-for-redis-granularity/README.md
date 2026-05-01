# Cloud Billing detailed export Memorystore for Redis granularity

Product: Cloud Billing
Feature slug: `cloud-billing-detailed-export-memorystore-for-redis-granularity`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Billing detailed export now provides granular Memorystore for Redis cost data with filtering via resource.name and resource.global_name.

## Lifecycle

- Latest feature date: 2024-03-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- certificate
- encrypt
- firewall
- iam
- identity
- key
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:missing_exact_identifier_page` No supporting page directly names the exact identifier(s): resource.name, resource.global_name.
