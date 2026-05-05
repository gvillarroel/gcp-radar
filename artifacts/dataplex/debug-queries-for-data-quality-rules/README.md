# Debug queries for data quality rules

Product: Dataplex
Feature slug: `debug-queries-for-data-quality-rules`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataplex data quality rules can include an optional SQL debug query to help diagnose rule failures.

## Lifecycle

- Latest feature date: 2026-02-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- allow (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- auth (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- authorization (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- constraint (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- iam (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- identity (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- key (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- permission (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- policy (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))
- role (evidence: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality), [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview), [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality), [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints))

## Official Evidence

- [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview)
- [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality)
- [https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints](https://docs.cloud.google.com/dataplex/docs/dataplex-custom-constraints)
- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
