# Cloud Endpoints Portal

Product: Cloud Endpoints
Feature slug: `cloud-endpoints-portal`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Cloud Endpoints Portal is deprecated and no longer available; deprecated on 2023-03-21.

## Lifecycle

- Latest feature date: 2023-03-21
- Deprecation date: 2023-03-21
- Status: deprecation_noted

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/endpoints/docs/openapi/control-api-callers](https://docs.cloud.google.com/endpoints/docs/openapi/control-api-callers)
- [https://docs.cloud.google.com/endpoints/docs/openapi/deploy-endpoints-config](https://docs.cloud.google.com/endpoints/docs/openapi/deploy-endpoints-config)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/endpoints](https://docs.cloud.google.com/iam/docs/roles-permissions/endpoints)
