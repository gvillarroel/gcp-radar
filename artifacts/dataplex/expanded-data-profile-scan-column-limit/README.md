# Expanded data profile scan column limit

Product: Dataplex
Feature slug: `expanded-data-profile-scan-column-limit`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataplex data profile scans can profile up to 10,000 columns in a BigQuery table.

## Lifecycle

- Latest feature date: 2025-05-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- auth (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- authorization (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- constraint (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- iam (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- identity (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- key (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- permission (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- policy (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- role (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))

## Official Evidence

- [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview)
- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
