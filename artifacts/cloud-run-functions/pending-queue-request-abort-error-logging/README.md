# Pending queue request abort error logging

Product: Cloud Run functions
Feature slug: `pending-queue-request-abort-error-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Pending queue request abort errors are logged for functions.

## Lifecycle

- Latest feature date: 2021-07-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers))
- audit (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers))
- authorization (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers))
- identity (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers))
- logging (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging)
- [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
