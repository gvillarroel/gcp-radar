# Per-tenant activity logging

Product: Identity Platform
Feature slug: `per-tenant-activity-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Identity Platform supports activity logging on a per-tenant basis and is generally available.

## Lifecycle

- Latest feature date: 2022-07-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- audit (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- auth (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- authorization (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- credential (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- iam (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- identity (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- key (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- logging (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- permission (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- policy (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- secret (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))
- token (evidence: [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging), [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging), [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control), [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api))

## Official Evidence

- [https://docs.cloud.google.com/identity-platform/docs/access-control](https://docs.cloud.google.com/identity-platform/docs/access-control)
- [https://docs.cloud.google.com/identity-platform/docs/activity-logging](https://docs.cloud.google.com/identity-platform/docs/activity-logging)
- [https://docs.cloud.google.com/identity-platform/docs/audit-logging](https://docs.cloud.google.com/identity-platform/docs/audit-logging)
- [https://docs.cloud.google.com/identity-platform/docs/use-rest-api](https://docs.cloud.google.com/identity-platform/docs/use-rest-api)
