# Cloud DNS response policy and rules management

Product: Cloud DNS
Feature slug: `cloud-dns-response-policy-and-rules-management`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud DNS now supports managing response policies and their rules.

## Lifecycle

- Latest feature date: 2021-11-03
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
- audit
- constraint
- dnssec
- iam
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
- [https://docs.cloud.google.com/dns/docs/configure-routing-policies](https://docs.cloud.google.com/dns/docs/configure-routing-policies)
- [https://docs.cloud.google.com/dns/docs/create-custom-constraints](https://docs.cloud.google.com/dns/docs/create-custom-constraints)
- [https://docs.cloud.google.com/dns/docs/key-terms](https://docs.cloud.google.com/dns/docs/key-terms)
