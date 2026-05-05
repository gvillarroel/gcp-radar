# External secret store support for Apigee Hybrid secrets

Product: Apigee hybrid
Feature slug: `external-secret-store-support-for-apigee-hybrid-secrets`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds support for storing additional Apigee secrets such as AX hash salt, Redis password, and encryption keys in an external secret store like HashiCorp Vault.

## Lifecycle

- Latest feature date: 2024-08-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods)
