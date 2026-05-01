# Cloud Run Source Developer role

Product: Cloud Run
Feature slug: `cloud-run-source-developer-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Cloud Run Source Developer IAM role grants permissions to deploy a Cloud Run service or job from source.

## Lifecycle

- Latest feature date: 2024-06-27
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
- armor
- audit
- auth
- authorization
- constraint
- encrypt
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

## Official Evidence

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service)
- [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles)
