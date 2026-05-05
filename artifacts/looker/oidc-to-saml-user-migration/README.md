# OIDC to SAML user migration

Product: Looker
Feature slug: `oidc-to-saml-user-migration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Looker now supports merging users from OIDC into SAML during SAML authentication setup.

## Lifecycle

- Latest feature date: 2023-09-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config))
- allow (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config))
- auth (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config))
- identity (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config))
- permission (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config))
- role (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config))

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config)
