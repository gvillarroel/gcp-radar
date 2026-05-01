# Unlimited Runtime Configurator variable value size

Product: Cloud Deployment Manager
Feature slug: `unlimited-runtime-configurator-variable-value-size`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Runtime Configurator no longer enforces a 4 KB limit on variable values.

## Lifecycle

- Latest feature date: 2016-08-25
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
- certificate
- credential
- firewall
- iam
- key
- logging
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control)
- [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- [https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-template-and-environment-variables](https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/using-template-and-environment-variables)
