# Grant withdrawal in Privileged Access Manager

Product: Identity and Access Management
Feature slug: `grant-withdrawal-in-privileged-access-manager`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Privileged Access Manager supports withdrawing granted access.

## Lifecycle

- Latest feature date: 2025-09-26
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- role (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- security (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))
- token (evidence: [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access), [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam](https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-pam)
- [https://docs.cloud.google.com/iam/docs/configuring-temporary-access](https://docs.cloud.google.com/iam/docs/configuring-temporary-access)
- [https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access](https://docs.cloud.google.com/iam/docs/granting-changing-revoking-access)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager)
