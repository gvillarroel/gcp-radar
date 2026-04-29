# Notebooks API Compute Reservations support

Product: Vertex AI Workbench
Feature slug: `notebooks-api-compute-reservations-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Notebooks API can use Compute Reservations when creating Vertex AI Workbench instances.

## Lifecycle

- Latest feature date: 2021-06-18
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

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
