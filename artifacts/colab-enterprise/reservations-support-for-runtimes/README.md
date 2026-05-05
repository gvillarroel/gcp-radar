# Reservations support for runtimes

Product: Colab Enterprise
Feature slug: `reservations-support-for-runtimes`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Colab Enterprise runtimes can consume Compute Engine zonal reservations to improve resource availability; Colab Enterprise runtimes can consume Compute Engine zonal reservations to improve resource availability.

## Lifecycle

- Latest feature date: 2025-08-05
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

- access (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- allow (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- auth (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- authorization (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- encrypt (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- iam (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- key (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- logging (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- permission (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- policy (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- role (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- token (evidence: [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control), [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction), [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))

## Official Evidence

- [https://docs.cloud.google.com/colab/docs/access-control](https://docs.cloud.google.com/colab/docs/access-control)
- [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus)
- [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction)
- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
