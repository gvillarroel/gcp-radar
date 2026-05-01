# Studio in Looker support for Google OAuth-authenticated instances

Product: Looker
Feature slug: `studio-in-looker-support-for-google-oauth-authenticated-instances`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Studio in Looker can be enabled on Looker instances that use Google OAuth authentication.

## Lifecycle

- Latest feature date: 2025-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- key

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transformation)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
