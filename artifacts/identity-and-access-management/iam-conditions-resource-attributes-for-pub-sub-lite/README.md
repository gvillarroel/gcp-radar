# IAM Conditions resource attributes for Pub/Sub Lite

Product: Identity and Access Management
Feature slug: `iam-conditions-resource-attributes-for-pub-sub-lite`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

IAM Conditions provides resource attributes for Pub/Sub Lite subscriptions and topics.

## Lifecycle

- Latest feature date: 2020-11-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- confidential
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

- [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference)
- [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview)
- [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log)
