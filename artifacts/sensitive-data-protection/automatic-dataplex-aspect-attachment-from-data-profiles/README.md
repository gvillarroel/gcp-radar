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

- access (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- armor (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- audit (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- auth (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- authorization (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- certificate (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- encrypt (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- firewall (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- iam (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- identity (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- key (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- kms (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- logging (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- permission (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- policy (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- private (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- role (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- secret (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))
- security (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job)
