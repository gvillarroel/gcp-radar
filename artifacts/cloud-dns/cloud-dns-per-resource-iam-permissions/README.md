# Cloud DNS per-resource IAM permissions

Product: Cloud DNS
Feature slug: `cloud-dns-per-resource-iam-permissions`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud DNS now provides IAM permissions that can be assigned at the individual resource level; Cloud DNS now supports IAM permissions scoped to specific resources, with granular read, write, and admin roles.

## Lifecycle

- Latest feature date: 2022-12-05
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
- armor
- audit
- auth
- constraint
- iam
- identity
- key
- logging
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/dns/docs/access-control](https://docs.cloud.google.com/dns/docs/access-control)
- [https://docs.cloud.google.com/dns/docs/audit-logging](https://docs.cloud.google.com/dns/docs/audit-logging)
- [https://docs.cloud.google.com/dns/docs/overview](https://docs.cloud.google.com/dns/docs/overview)
- [https://docs.cloud.google.com/dns/docs/zones](https://docs.cloud.google.com/dns/docs/zones)
