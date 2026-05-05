# Managed runtime provisioning

Product: Colab Enterprise
Feature slug: `managed-runtime-provisioning`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Colab Enterprise provides Google-managed compute and runtime provisioning with configurable runtime templates; Colab Enterprise provides Google-managed compute and runtime provisioning with configurable runtime templates.

## Lifecycle

- Latest feature date: 2023-10-11
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

- access (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek))
- encrypt (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek))
- iam (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek))
- key (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek))
- permission (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek))
- policy (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek))
- role (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek))
- security (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek))
- token (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek))

## Official Evidence

- [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control)
- [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek)
- [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction)
- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
