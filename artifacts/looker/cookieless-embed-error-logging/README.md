# Cookieless embed error logging

Product: Looker
Feature slug: `cookieless-embed-error-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cookieless embed requests now log additional error details when an issue is detected.

## Lifecycle

- Latest feature date: 2023-02-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me))
- logging (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me))
- permission (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me))
- secret (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me))
- token (evidence: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me))

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/acquire_embed_cookieless_session)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_url_as_me)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/delete_embed_cookieless_session)
