# Workload Identity Federation authentication for Apigee hybrid on AKS and EKS

Product: Apigee hybrid
Feature slug: `workload-identity-federation-authentication-for-apigee-hybrid-on-aks-and-eks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apigee hybrid now supports Workload Identity Federation for component authentication in Kubernetes environments on AKS and EKS.

## Lifecycle

- Latest feature date: 2024-04-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref), [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide](https://docs.cloud.google.com/apigee/docs/hybrid/preview/new-install-user-guide)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods](https://docs.cloud.google.com/apigee/docs/hybrid/v1.15/sa-authentication-methods)
