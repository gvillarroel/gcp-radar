# Managed notebooks executor

Product: Vertex AI Workbench
Feature slug: `managed-notebooks-executor`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The managed notebooks executor can run notebook files on a schedule or as one-time executions with per-run parameters.

## Lifecycle

- Latest feature date: 2022-04-06
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

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- armor (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- certificate (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- firewall (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- kms (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- private (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control), [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam), [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/open-source/ray-on-vertex-ai/tutorials/jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
