# Snowflake key-pair authentication

Product: Looker
Feature slug: `snowflake-key-pair-authentication`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

A connection authentication method for Snowflake that uses key pairs; Looker supports key-pair authentication for Snowflake connections.

## Lifecycle

- Latest feature date: 2025-04-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- key

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-pages](https://docs.cloud.google.com/looker/docs/admin-panel-platform-pages)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
