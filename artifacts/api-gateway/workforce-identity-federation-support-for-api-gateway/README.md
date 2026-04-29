# Workforce Identity Federation support for API Gateway

Product: API Gateway
Feature slug: `workforce-identity-federation-support-for-api-gateway`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

API Gateway now supports Workforce Identity Federation so workforce identities from external providers can authenticate and authorize access using IAM.

## Lifecycle

- Latest feature date: 2025-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- iam
- identity
- key
- token

## Official Evidence

- [https://docs.cloud.google.com/api-gateway/docs/authenticating-users-auth0](https://docs.cloud.google.com/api-gateway/docs/authenticating-users-auth0)
- [https://docs.cloud.google.com/api-gateway/docs/authenticating-users-googleid](https://docs.cloud.google.com/api-gateway/docs/authenticating-users-googleid)
- [https://docs.cloud.google.com/api-gateway/docs/quotas](https://docs.cloud.google.com/api-gateway/docs/quotas)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
