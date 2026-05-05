# SMTP OAuth 2.0 authentication

Product: Looker
Feature slug: `smtp-oauth-2-0-authentication`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds OAuth 2.0 authentication for SMTP-based custom mail settings.

## Lifecycle

- Latest feature date: 2026-01-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google))
- auth (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google))
- authorization (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google))
- secret (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google))
- token (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google))

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-google)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-smtp)
