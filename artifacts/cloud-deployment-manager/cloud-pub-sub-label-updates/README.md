# Cloud Pub/Sub label updates

Product: Cloud Deployment Manager
Feature slug: `cloud-pub-sub-label-updates`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Deployment Manager can update labels on Cloud Pub/Sub resources.

## Lifecycle

- Latest feature date: 2019-06-03
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
- logging
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/update)
