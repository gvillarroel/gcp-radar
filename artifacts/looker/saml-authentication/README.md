# SAML Authentication

Product: Looker
Feature slug: `saml-authentication`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Looker (Google Cloud core) supports SAML authentication.

## Lifecycle

- Latest feature date: 2024-01-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect))
- allow (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect))
- auth (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect))
- authorization (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect))
- certificate (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect))
- identity (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect))
- permission (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect))
- role (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect))
- secret (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect))
- token (evidence: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml), [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config), [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect))

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_saml_test_config)
