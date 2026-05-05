# Multiple condition types per security action

Product: Apigee Advanced API Security
Feature slug: `multiple-condition-types-per-security-action`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

A single security action can now include multiple condition types, such as IP addresses and ASN numbers, when configured through the API.

## Lifecycle

- Latest feature date: 2026-02-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- audit (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api)
