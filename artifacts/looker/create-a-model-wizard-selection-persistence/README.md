# Create a model wizard selection persistence

Product: Looker
Feature slug: `create-a-model-wizard-selection-persistence`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Create a model wizard preserves selections even if users close steps before finishing model creation.

## Lifecycle

- Latest feature date: 2024-03-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config))
- allow (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config))
- auth (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config))
- authorization (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config))
- permission (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config))
- role (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config))
- secret (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config))
- token (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config))

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_oidc_test_config)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_sso_embed_url)
