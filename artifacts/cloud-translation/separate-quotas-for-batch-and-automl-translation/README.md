# Separate quotas for batch and AutoML translation

Product: Cloud Translation
Feature slug: `separate-quotas-for-batch-and-automl-translation`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Translation API - Advanced provides separate quotas for batch translation and translation with AutoML models.

## Lifecycle

- Latest feature date: 2019-11-05
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
- iam
- identity
- key
- permission
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/translate/docs/access-control](https://docs.cloud.google.com/translate/docs/access-control)
- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade](https://docs.cloud.google.com/translate/docs/advanced/automl-upgrade)
- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
