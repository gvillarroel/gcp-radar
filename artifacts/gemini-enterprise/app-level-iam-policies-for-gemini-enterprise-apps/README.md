# App-level IAM policies for Gemini Enterprise apps

Product: Gemini Enterprise
Feature slug: `app-level-iam-policies-for-gemini-enterprise-apps`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Admins can control access to individual Gemini Enterprise apps with app-level IAM policies.

## Lifecycle

- Latest feature date: 2026-02-02
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
- allow
- auth
- authorization
- credential
- encrypt
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/cmek](https://docs.cloud.google.com/gemini/enterprise/docs/cmek)
- [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise)
