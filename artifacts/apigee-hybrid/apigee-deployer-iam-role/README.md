# Apigee Deployer IAM role

Product: Apigee hybrid
Feature slug: `apigee-deployer-iam-role`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Apigee Deployer IAM role was deprecated and replaced by the Apigee Environment Admin role; deprecated on 2022-12-02.

## Lifecycle

- Latest feature date: 2022-04-18
- Deprecation date: 2022-12-02
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- armor (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)
