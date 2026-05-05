# Bulk export of Universal Catalog metadata

Product: Dataplex
Feature slug: `bulk-export-of-universal-catalog-metadata`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataplex can export Universal Catalog metadata to Cloud Storage for downstream analysis and retrieval.

## Lifecycle

- Latest feature date: 2025-05-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- allow (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- auth (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- authorization (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- constraint (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- iam (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- identity (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- key (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- policy (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))
- role (evidence: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/dataplex/docs/audit-logging](https://docs.cloud.google.com/dataplex/docs/audit-logging)
- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata)
- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
