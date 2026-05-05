# Advanced API Security data residency

Product: Apigee Advanced API Security
Feature slug: `advanced-api-security-data-residency`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Advanced API Security now supports configuring regional data residency for stored security data to meet compliance requirements.

## Lifecycle

- Latest feature date: 2024-07-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- firewall (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/latest/using-data-residency-with-apigee-hybrid)
