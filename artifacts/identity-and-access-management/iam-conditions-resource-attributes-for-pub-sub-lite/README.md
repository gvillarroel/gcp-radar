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

- access (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- confidential (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- key (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- private (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- role (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- security (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))
- token (evidence: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes), [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference), [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log), [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/conditions-attribute-reference](https://docs.cloud.google.com/iam/docs/conditions-attribute-reference)
- [https://docs.cloud.google.com/iam/docs/conditions-overview](https://docs.cloud.google.com/iam/docs/conditions-overview)
- [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- [https://docs.cloud.google.com/iam/docs/permissions-change-log](https://docs.cloud.google.com/iam/docs/permissions-change-log)
