# Runtime Configurator returnValues query parameter

Product: Cloud Deployment Manager
Feature slug: `runtime-configurator-returnvalues-query-parameter`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Runtime Configurator supports a returnValues query parameter on variables().list to return variable values when permitted.

## Lifecycle

- Latest feature date: 2017-04-20
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
- audit
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
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types)
- [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment)
