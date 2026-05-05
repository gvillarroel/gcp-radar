# Data profiling

Product: Dataplex
Feature slug: `data-profiling`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Data profiling analyzes BigQuery data characteristics without requiring a Dataplex lake and supports tables, views, external tables, BigLake tables, and sampling; Data profiling helps users understand data by identifying common characteristics and recommending data quality rules.

## Lifecycle

- Latest feature date: 2023-05-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/reference/rest](https://docs.cloud.google.com/dataplex/docs/reference/rest))
- auth (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/reference/rest](https://docs.cloud.google.com/dataplex/docs/reference/rest))
- constraint (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/reference/rest](https://docs.cloud.google.com/dataplex/docs/reference/rest))
- encrypt (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/reference/rest](https://docs.cloud.google.com/dataplex/docs/reference/rest))
- iam (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/reference/rest](https://docs.cloud.google.com/dataplex/docs/reference/rest))
- key (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/reference/rest](https://docs.cloud.google.com/dataplex/docs/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/reference/rest](https://docs.cloud.google.com/dataplex/docs/reference/rest))
- policy (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/reference/rest](https://docs.cloud.google.com/dataplex/docs/reference/rest))
- role (evidence: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling), [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview), [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/reference/rest](https://docs.cloud.google.com/dataplex/docs/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview)
- [https://docs.cloud.google.com/dataplex/docs/reference/rest](https://docs.cloud.google.com/dataplex/docs/reference/rest)
- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
