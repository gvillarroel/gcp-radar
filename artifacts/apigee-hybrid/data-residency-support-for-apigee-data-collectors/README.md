# Data residency support for Apigee data collectors

Product: Apigee hybrid
Feature slug: `data-residency-support-for-apigee-data-collectors`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apigee and Apigee Hybrid data collectors now support data residency (DRZ) compliance for supported subscription and pay-as-you-go organizations.

## Lifecycle

- Latest feature date: 2025-04-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))
- constraint (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))
- firewall (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid), [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid)
