# Vertex AI Workbench TensorFlow patch updates

Product: Vertex AI Workbench
Feature slug: `vertex-ai-workbench-tensorflow-patch-updates`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI Workbench updated TensorFlow patch versions to 2.8.4, 2.9.3, and 2.10.1 in user-managed notebooks.

## Lifecycle

- Latest feature date: 2022-12-09
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

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- allow (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- armor (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- certificate (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- firewall (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- kms (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- private (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
