# Deployment Manager v2 API

Product: Cloud Deployment Manager
Feature slug: `deployment-manager-v2-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deployment Manager introduced the v2 API as its generally available API version.

## Lifecycle

- Latest feature date: 2015-07-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/apis](https://docs.cloud.google.com/deployment-manager/docs/apis), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/apis](https://docs.cloud.google.com/deployment-manager/docs/apis), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy))
- permission (evidence: [https://docs.cloud.google.com/deployment-manager/docs/apis](https://docs.cloud.google.com/deployment-manager/docs/apis), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy))
- policy (evidence: [https://docs.cloud.google.com/deployment-manager/docs/apis](https://docs.cloud.google.com/deployment-manager/docs/apis), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/apis](https://docs.cloud.google.com/deployment-manager/docs/apis)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
