# Advanced API Security security actions edit/delete

Product: Apigee Advanced API Security
Feature slug: `advanced-api-security-security-actions-edit-delete`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Existing security actions can now be edited and deleted through either the Apigee Console UI or the Apigee Management APIs.

## Lifecycle

- Latest feature date: 2025-07-14
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
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- firewall (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
