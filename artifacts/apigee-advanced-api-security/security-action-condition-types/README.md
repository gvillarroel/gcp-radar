# Security action condition types

Product: Apigee Advanced API Security
Feature slug: `security-action-condition-types`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Security actions can now be triggered by additional condition types, including API keys, API products, access tokens, developers, developer apps, and user agents for finer-grained traffic handling.

## Lifecycle

- Latest feature date: 2024-03-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- audit (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
