# Authorization policy delegation for IAP and IAM

Product: Identity-Aware Proxy
Feature slug: `authorization-policy-delegation-for-iap-and-iam`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Authorization policies can delegate authorization decisions to Identity-Aware Proxy and Identity and Access Management.

## Lifecycle

- Latest feature date: 2024-09-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy))
- allow (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy))
- auth (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy))
- authorization (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy))
- iam (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy))
- identity (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy))
- permission (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy))
- policy (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy))
- role (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy))
- security (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy))
- token (evidence: [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies), [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy))

## Official Evidence

- [https://docs.cloud.google.com/iap/docs/auth-policies](https://docs.cloud.google.com/iap/docs/auth-policies)
- [https://docs.cloud.google.com/iap/docs/enabling-compute-howto](https://docs.cloud.google.com/iap/docs/enabling-compute-howto)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/getIamPolicy)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy](https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy)
