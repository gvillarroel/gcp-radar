# Redshift 2.1.0.30 driver

Product: Looker
Feature slug: `redshift-2-1-0-30-driver`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Looker (original) deployments can use the Redshift 2.1.0.30 driver.

## Lifecycle

- Latest feature date: 2024-11-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/all_user_login_lockouts)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user)
