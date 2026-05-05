# Spanner foreign key cascading deletes

Product: Spanner
Feature slug: `spanner-foreign-key-cascading-deletes`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports cascading delete actions for foreign keys, automatically deleting related rows when a referenced row is removed.

## Lifecycle

- Latest feature date: 2023-07-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus), [https://docs.cloud.google.com/spanner/docs/use-oss-jdbc](https://docs.cloud.google.com/spanner/docs/use-oss-jdbc))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus), [https://docs.cloud.google.com/spanner/docs/use-oss-jdbc](https://docs.cloud.google.com/spanner/docs/use-oss-jdbc))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac), [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus), [https://docs.cloud.google.com/spanner/docs/use-oss-jdbc](https://docs.cloud.google.com/spanner/docs/use-oss-jdbc))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)
- [https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus](https://docs.cloud.google.com/spanner/docs/capture-custom-metrics-opencensus)
- [https://docs.cloud.google.com/spanner/docs/use-oss-jdbc](https://docs.cloud.google.com/spanner/docs/use-oss-jdbc)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
