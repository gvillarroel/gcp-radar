# Cloud KMS Key Access Justifications audit log integration

Product: Cloud Key Management Service
Feature slug: `cloud-kms-key-access-justifications-audit-log-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud KMS writes Key Access Justifications to Cloud Audit Logs for enrolled customers.

## Lifecycle

- Latest feature date: 2022-06-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- allow (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- audit (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- iam (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- identity (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- key (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- logging (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- permission (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- policy (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- secret (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))
- security (evidence: [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging), [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/audit-logging](https://docs.cloud.google.com/kms/docs/audit-logging)
- [https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory](https://docs.cloud.google.com/kms/docs/audit-logging-kms-inventory)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig](https://docs.cloud.google.com/kms/docs/reference/rest/v1/KeyAccessJustificationsPolicyConfig)
