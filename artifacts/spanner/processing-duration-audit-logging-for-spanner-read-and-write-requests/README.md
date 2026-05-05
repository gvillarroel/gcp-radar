# Processing duration audit logging for Spanner read and write requests

Product: Spanner
Feature slug: `processing-duration-audit-logging-for-spanner-read-and-write-requests`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Spanner now logs the processing duration of read and write requests in Cloud Audit Logs.

## Lifecycle

- Latest feature date: 2023-05-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- allow (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- authorization (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- certificate (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- credential (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- iam (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- identity (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- kms (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- logging (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- permission (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- policy (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging), [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging)
- [https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide](https://docs.cloud.google.com/spanner/docs/audit-logging-request-latency-guide)
