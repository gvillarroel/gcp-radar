# Hybrid jobs and job triggers

Product: Sensitive Data Protection
Feature slug: `hybrid-jobs-and-job-triggers`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Enables streaming data from external sources for inspection and storing results in Cloud DLP or BigQuery.

## Lifecycle

- Latest feature date: 2020-03-16
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

- access (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- allow (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- armor (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- audit (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- auth (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- authorization (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- certificate (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- encrypt (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- firewall (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- iam (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- identity (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- key (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- kms (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- logging (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- permission (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- policy (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- private (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- role (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- secret (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))
- security (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-hybrid-jobs)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
