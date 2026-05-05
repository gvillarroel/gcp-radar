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

- access (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- key (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- private (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))
- security (evidence: [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities), [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies), [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver))

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver](https://docs.cloud.google.com/billing/docs/how-to/data-transfer-waiver)
- [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:missing_exact_identifier_page` No supporting page directly names the exact identifier(s): resource.name, resource.global_name.
