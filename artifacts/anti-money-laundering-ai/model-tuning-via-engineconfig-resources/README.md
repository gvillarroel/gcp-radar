# Model tuning via engineConfig resources

Product: Anti Money Laundering AI
Feature slug: `model-tuning-via-engineconfig-resources`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Adds API support for tuning models through engineConfig resources.

## Lifecycle

- Latest feature date: 2023-06-29
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
- key
- kms
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/glossary)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)
