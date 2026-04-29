# Spanner Change Streams NEW_VALUES and NEW_ROW data capture modes

Product: Spanner
Feature slug: `spanner-change-streams-new-values-and-new-row-data-capture-modes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner Change Streams added NEW_VALUES and NEW_ROW change-record capture modes, with NEW_VALUES capturing only new non-key values and NEW_ROW capturing the full new row, while keys remain always included and old values are not captured.

## Lifecycle

- Latest feature date: 2022-12-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- key
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
