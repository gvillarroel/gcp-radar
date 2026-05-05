# Prompt chips

Product: Gemini Enterprise
Feature slug: `prompt-chips`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Administrators can create, edit, delete, and enable or disable Google-provided and custom prompt chips to guide users.

## Lifecycle

- Latest feature date: 2025-10-02
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

- access (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- allow (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- audit (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- auth (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- authorization (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- credential (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- encrypt (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- iam (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- identity (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- key (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- kms (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- logging (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- permission (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- policy (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- role (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))
- token (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores), [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek))

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips](https://docs.cloud.google.com/gemini/enterprise/docs/configure-prompt-chips)
