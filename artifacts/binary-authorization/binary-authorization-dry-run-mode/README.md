# Binary Authorization dry run mode

Product: Binary Authorization
Feature slug: `binary-authorization-dry-run-mode`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Binary Authorization now supports dry run mode, allowing non-conformant image deployments while logging policy violations to audit logs for testing.

## Lifecycle

- Latest feature date: 2019-04-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console), [https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs](https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs), [https://docs.cloud.google.com/binary-authorization/docs/audit-logging](https://docs.cloud.google.com/binary-authorization/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console), [https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs](https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs), [https://docs.cloud.google.com/binary-authorization/docs/audit-logging](https://docs.cloud.google.com/binary-authorization/docs/audit-logging))
- auth (evidence: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console), [https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs](https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs), [https://docs.cloud.google.com/binary-authorization/docs/audit-logging](https://docs.cloud.google.com/binary-authorization/docs/audit-logging))
- authorization (evidence: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console), [https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs](https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs), [https://docs.cloud.google.com/binary-authorization/docs/audit-logging](https://docs.cloud.google.com/binary-authorization/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console), [https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs](https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs), [https://docs.cloud.google.com/binary-authorization/docs/audit-logging](https://docs.cloud.google.com/binary-authorization/docs/audit-logging))
- policy (evidence: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console), [https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs](https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs), [https://docs.cloud.google.com/binary-authorization/docs/audit-logging](https://docs.cloud.google.com/binary-authorization/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/binary-authorization/docs/audit-logging](https://docs.cloud.google.com/binary-authorization/docs/audit-logging)
- [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console)
- [https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs](https://docs.cloud.google.com/binary-authorization/docs/viewing-on-prem-logs)
