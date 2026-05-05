# Adaptive Protection suggested rule auto-deployment

Product: Google Cloud Armor
Feature slug: `adaptive-protection-suggested-rule-auto-deployment`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Armor can automatically deploy suggested Adaptive Protection rules.

## Lifecycle

- Latest feature date: 2022-09-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))
- allow (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))
- armor (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))
- constraint (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))
- iam (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))
- identity (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))
- key (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))
- logging (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))
- permission (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))
- policy (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))
- role (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))
- security (evidence: [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy), [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview), [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection), [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases))

## Official Evidence

- [https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy](https://docs.cloud.google.com/armor/docs/adaptive-protection-auto-deploy)
- [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- [https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases](https://docs.cloud.google.com/armor/docs/adaptive-protection-use-cases)
- [https://docs.cloud.google.com/armor/docs/configure-adaptive-protection](https://docs.cloud.google.com/armor/docs/configure-adaptive-protection)
