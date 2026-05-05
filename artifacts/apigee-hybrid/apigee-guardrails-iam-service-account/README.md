# apigee-guardrails IAM service account

Product: Apigee hybrid
Feature slug: `apigee-guardrails-iam-service-account`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apigee Hybrid v1.16.0 introduces an apigee-guardrails Google IAM service account used by the apigee-operator during installation and upgrade to validate required APIs.

## Lifecycle

- Latest feature date: 2025-12-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- armor (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- firewall (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails), [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade), [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/guardrails)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/upgrade)
