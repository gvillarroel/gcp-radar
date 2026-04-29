# Cloud DNS response policies and rules

Product: Cloud DNS
Feature slug: `cloud-dns-response-policies-and-rules`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud DNS adds management capabilities for response policies and response rules.

## Lifecycle

- Latest feature date: 2021-02-16
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
- firewall
- iam
- identity
- key
- logging
- permission
- policy
- private
- role
- security
- threat

## Official Evidence

- [https://docs.cloud.google.com/dns/docs/access-control](https://docs.cloud.google.com/dns/docs/access-control)
- [https://docs.cloud.google.com/dns/docs/audit-logging](https://docs.cloud.google.com/dns/docs/audit-logging)
- [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- [https://docs.cloud.google.com/dns/docs/troubleshooting](https://docs.cloud.google.com/dns/docs/troubleshooting)
