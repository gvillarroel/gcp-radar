# Auto data quality (AutoDQ)

Product: Dataplex
Feature slug: `auto-data-quality-autodq`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Auto data quality evaluates BigQuery data quality without requiring a Dataplex lake and supports tables, views, external tables, BigLake tables, and sampling; Auto data quality provides automated, turnkey data quality evaluation to help users build trust in their data.

## Lifecycle

- Latest feature date: 2023-05-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- allow (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- auth (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- constraint (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- iam (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- identity (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- key (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- permission (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- role (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))

## Official Evidence

- [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview)
- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
