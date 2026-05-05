# Service Extensions dynamic forwarding

Product: Service Extensions
Feature slug: `service-extensions-dynamic-forwarding`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Service Extensions now supports dynamic forwarding, allowing tenants to be mapped to endpoints programmatically without updating URL maps.

## Lifecycle

- Latest feature date: 2025-12-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services), [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview))
- armor (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services), [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview))
- auth (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services), [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview))
- authorization (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services), [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview))
- firewall (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services), [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview))
- identity (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services), [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview))
- logging (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services), [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview))
- policy (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services), [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview))
- role (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services), [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview))
- security (evidence: [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases), [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview), [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services), [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services](https://docs.cloud.google.com/service-extensions/docs/configure-extensions-to-google-services)
- [https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases](https://docs.cloud.google.com/service-extensions/docs/lb-advanced-use-cases)
- [https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/lb-extensions-overview)
- [https://docs.cloud.google.com/service-extensions/docs/overview](https://docs.cloud.google.com/service-extensions/docs/overview)
