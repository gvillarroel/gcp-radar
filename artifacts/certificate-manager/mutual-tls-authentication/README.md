# Mutual TLS authentication

Product: Certificate Manager
Feature slug: `mutual-tls-authentication`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Certificate Manager provides mTLS-related security resources including trust configs, trust stores, and trust anchors that are described specifically for use in mutual TLS (mTLS) authentication scenarios. Its deployment and core-component documentation points to Cloud Load Balancing for the mTLS workflow, indicating the feature is implemented as part of Certificate Manager assets used in mTLS setups.

## Lifecycle

- Latest feature date: 2023-09-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components), [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy), [https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca](https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca))
- auth (evidence: [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components), [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy), [https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca](https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca))
- certificate (evidence: [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components), [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy), [https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca](https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca))
- key (evidence: [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components), [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy), [https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca](https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca))
- logging (evidence: [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components), [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy), [https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca](https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca))
- secret (evidence: [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components), [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy), [https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca](https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca))
- security (evidence: [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components), [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy), [https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca](https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca))

## Official Evidence

- [https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca](https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca)
- [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy)
