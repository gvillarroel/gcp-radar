# SQL cells

Product: Colab Enterprise
Feature slug: `sql-cells`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

SQL cells let you write, edit, and run SQL queries directly in Colab Enterprise notebooks.

## Lifecycle

- Latest feature date: 2025-10-14
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

- access (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))
- allow (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))
- auth (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))
- authorization (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))
- credential (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))
- logging (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))
- private (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))
- token (evidence: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control)
- [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template)
- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion)
