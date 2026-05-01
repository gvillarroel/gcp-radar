# Access Context Manager v1beta type provider support

Product: Cloud Deployment Manager
Feature slug: `access-context-manager-v1beta-type-provider-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Deployment Manager supports Access Context Manager v1beta through the gcp-types/accesscontextmanager-v1beta type provider.

## Lifecycle

- Latest feature date: 2018-11-21
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
- certificate
- credential
- firewall
- iam
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
