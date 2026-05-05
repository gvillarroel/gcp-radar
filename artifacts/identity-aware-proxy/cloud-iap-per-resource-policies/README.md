# Cloud IAP per-resource policies

Product: Identity-Aware Proxy
Feature slug: `cloud-iap-per-resource-policies`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud IAP policies can be managed separately for each individual resource in a Google Cloud project; Cloud IAP policies can be managed separately for each individual resource in a Google Cloud project.

## Lifecycle

- Latest feature date: 2019-02-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- allow (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- auth (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- authorization (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- constraint (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- iam (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- identity (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- permission (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- policy (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- role (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- security (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))
- token (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access))

## Official Evidence

- [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies)
- [https://docs.cloud.google.com/iap/docs/custom-org-policies](https://docs.cloud.google.com/iap/docs/custom-org-policies)
- [https://docs.cloud.google.com/iap/docs/managing-access](https://docs.cloud.google.com/iap/docs/managing-access)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)
