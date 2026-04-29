# IAM mappings for projects and organizations

Product: Cloud Deployment Manager
Feature slug: `iam-mappings-for-projects-and-organizations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Deployment Manager can create IAM mappings for projects and organizations through the gcp-types/cloudresourcemanager-v1 type provider.

## Lifecycle

- Latest feature date: 2019-07-01
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
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances](https://docs.cloud.google.com/deployment-manager/docs/configuration/using-images-from-other-projects-for-vm-instances)
- [https://docs.cloud.google.com/deployment-manager/docs/fundamentals](https://docs.cloud.google.com/deployment-manager/docs/fundamentals)
