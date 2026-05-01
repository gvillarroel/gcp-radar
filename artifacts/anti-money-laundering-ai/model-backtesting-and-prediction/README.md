# Model backtesting and prediction

Product: Anti Money Laundering AI
Feature slug: `model-backtesting-and-prediction`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Adds API support for performing backtesting and making predictions using a model.

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

- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/overview-model-preparation](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/overview-model-preparation)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/aml-input-data-model)
- [https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering](https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/train-models-to-detect-money-laundering)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
