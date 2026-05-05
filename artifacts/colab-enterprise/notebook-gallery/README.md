# Notebook gallery

Product: Colab Enterprise
Feature slug: `notebook-gallery`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The notebook gallery provides curated notebook templates and examples for getting started with Colab Enterprise.

## Lifecycle

- Latest feature date: 2025-04-21
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

- access (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))
- allow (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))
- auth (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))
- authorization (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))
- constraint (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))
- iam (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))
- logging (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))
- permission (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))
- policy (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))
- role (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))
- security (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))
- token (evidence: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown))

## Official Evidence

- [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control)
- [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart)
- [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown)
- [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction)
