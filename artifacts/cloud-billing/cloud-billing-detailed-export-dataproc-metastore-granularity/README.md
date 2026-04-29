# Cloud Billing detailed export Dataproc Metastore granularity

Product: Cloud Billing
Feature slug: `cloud-billing-detailed-export-dataproc-metastore-granularity`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Billing detailed export now supports granular Dataproc Metastore cost data and allows filtering by resource.name or resource.global_name.

## Lifecycle

- Latest feature date: 2024-06-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- iam
- identity
- key
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:missing_exact_identifier_page` No supporting page directly names the exact identifier(s): resource.name, resource.global_name.
