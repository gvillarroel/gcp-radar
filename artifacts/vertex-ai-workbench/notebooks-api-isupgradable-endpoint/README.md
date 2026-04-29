# Notebooks API isUpgradable endpoint

Product: Vertex AI Workbench
Feature slug: `notebooks-api-isupgradable-endpoint`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Notebooks API now includes an isUpgradable endpoint.

## Lifecycle

- Latest feature date: 2020-09-21
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
- certificate
- encrypt
- firewall
- iam
- identity
- key
- kms
- permission
- policy
- private
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
