# Automatic Dataplex aspect attachment from data profiles

Product: Sensitive Data Protection
Feature slug: `automatic-dataplex-aspect-attachment-from-data-profiles`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Sensitive Data Protection can automatically attach aspects to Dataplex entries after profiling supported data resources.

## Lifecycle

- Latest feature date: 2025-05-01
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

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job)
