# Customer-managed encryption keys

Product: Dataflow
Feature slug: `customer-managed-encryption-keys`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataflow supports customer-managed encryption keys through Cloud Key Management Service; Dataflow supports customer-managed encryption keys through Cloud Key Management Service.

## Lifecycle

- Latest feature date: 2020-02-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys), [https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility](https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility), [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling))
- key (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys), [https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility](https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility), [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling))
- kms (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys), [https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility](https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility), [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling))
- permission (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys), [https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility](https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility), [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling))
- security (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys), [https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility](https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility), [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- [https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility](https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
