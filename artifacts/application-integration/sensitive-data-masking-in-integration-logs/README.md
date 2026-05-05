# Sensitive data masking in integration logs

Product: Application Integration
Feature slug: `sensitive-data-masking-in-integration-logs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Application Integration now provides data masking in integration execution logs to prevent sensitive data from appearing in log output.

## Lifecycle

- Latest feature date: 2024-02-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging), [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions), [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging))
- audit (evidence: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging), [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions), [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging))
- auth (evidence: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging), [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions), [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging))
- authorization (evidence: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging), [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions), [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging))
- certificate (evidence: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging), [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions), [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging))
- encrypt (evidence: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging), [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions), [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging))
- identity (evidence: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging), [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions), [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging))
- logging (evidence: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging), [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions), [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging))
- permission (evidence: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging), [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions), [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging))
- token (evidence: [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging), [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions), [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging))

## Official Evidence

- [https://docs.cloud.google.com/application-integration/docs/audit-logging](https://docs.cloud.google.com/application-integration/docs/audit-logging)
- [https://docs.cloud.google.com/application-integration/docs/cancel-executions](https://docs.cloud.google.com/application-integration/docs/cancel-executions)
- [https://docs.cloud.google.com/application-integration/docs/cloud-logging](https://docs.cloud.google.com/application-integration/docs/cloud-logging)
