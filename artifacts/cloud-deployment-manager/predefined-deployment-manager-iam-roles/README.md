# Predefined Deployment Manager IAM roles

Product: Cloud Deployment Manager
Feature slug: `predefined-deployment-manager-iam-roles`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Deployment Manager provides predefined IAM roles.

## Lifecycle

- Latest feature date: 2016-08-26
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
- iam
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control)
- [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources](https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources)
