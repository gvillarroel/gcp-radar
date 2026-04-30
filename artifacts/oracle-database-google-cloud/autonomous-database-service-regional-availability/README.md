# Autonomous Database Service regional availability

Product: Oracle Database@Google Cloud
Feature slug: `autonomous-database-service-regional-availability`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Autonomous Database Service is now available in northamerica-northeast2; Autonomous Database Service is now available in australia-southeast2 and us-central1.

## Lifecycle

- Latest feature date: 2025-11-18
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
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
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

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/oracle/database/docs/backup-database](https://docs.cloud.google.com/oracle/database/docs/backup-database)
- [https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard](https://docs.cloud.google.com/oracle/database/docs/cross-region-dr-with-data-guard)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases](https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/projects.locations.autonomousDatabases)
