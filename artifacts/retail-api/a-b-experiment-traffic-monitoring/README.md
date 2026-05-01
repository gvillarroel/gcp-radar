# A/B experiment traffic monitoring

Product: Retail API
Feature slug: `a-b-experiment-traffic-monitoring`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A/B experiment traffic monitoring lets you compare intended and actual experiment traffic splits in the Retail console.

## Lifecycle

- Latest feature date: 2022-10-27
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
- authorization
- certificate
- constraint
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail)
- [https://docs.cloud.google.com/retail/docs/a-b-monitor](https://docs.cloud.google.com/retail/docs/a-b-monitor)
- [https://docs.cloud.google.com/retail/docs/a-b-testing](https://docs.cloud.google.com/retail/docs/a-b-testing)
