# Metadata export from modeling resources

Product: Anti Money Laundering AI
Feature slug: `metadata-export-from-modeling-resources`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Adds the ability to export metadata from engine config, model, backtest, and prediction resources via the API.

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
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-output-data-model](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-output-data-model)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)
