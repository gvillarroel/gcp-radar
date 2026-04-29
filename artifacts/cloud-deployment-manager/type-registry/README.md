# Type Registry

Product: Cloud Deployment Manager
Feature slug: `type-registry`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Type Registry lets users add composite types and third-party APIs as type providers.

## Lifecycle

- Latest feature date: 2017-03-27
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
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects)
