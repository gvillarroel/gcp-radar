# Spanner UNSPLITTABLE_REASONS in hotspot insights and split statistics

Product: Spanner
Feature slug: `spanner-unsplittable-reasons-in-hotspot-insights-and-split-statistics`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner now exposes UNSPLITTABLE_REASONS in hotspot insights and split statistics views to identify when splits cannot be split further and help detect schema anti-patterns.

## Lifecycle

- Latest feature date: 2026-02-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database), [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed), [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database), [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed), [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics))
- logging (evidence: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database), [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed), [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed)
