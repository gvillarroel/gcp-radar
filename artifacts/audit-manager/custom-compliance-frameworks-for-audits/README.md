# Custom compliance frameworks for audits

Product: Audit Manager
Feature slug: `custom-compliance-frameworks-for-audits`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Audit Manager added support for creating custom compliance frameworks and using them in audits, with the capability available in Preview.

## Lifecycle

- Latest feature date: 2024-12-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.settings.get`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- constraint
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

## Official Evidence

- [https://docs.cloud.google.com/audit-manager/docs/run-audit](https://docs.cloud.google.com/audit-manager/docs/run-audit)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/auditmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/auditmanager)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-auditmanager/latest/google.cloud.auditmanager_v1.services.audit_manager.AuditManagerAsyncClient)
