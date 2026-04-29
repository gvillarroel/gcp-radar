# Cloud DNS ResourceRecordSets update API

Product: Cloud DNS
Feature slug: `cloud-dns-resourcerecordsets-update-api`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud DNS exposes an API that allows updates to ResourceRecordSets; Cloud DNS supports an API for updating ResourceRecordSets.

## Lifecycle

- Latest feature date: 2021-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- constraint
- dnssec
- iam
- identity
- key
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/dns/docs/access-control](https://docs.cloud.google.com/dns/docs/access-control)
- [https://docs.cloud.google.com/dns/docs/audit-logging](https://docs.cloud.google.com/dns/docs/audit-logging)
- [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- [https://docs.cloud.google.com/dns/docs/records](https://docs.cloud.google.com/dns/docs/records)
