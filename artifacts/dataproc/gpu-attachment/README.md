# GPU attachment

Product: Dataproc
Feature slug: `gpu-attachment`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

GPU attachment lets Dataproc clusters attach 1 to 8 Compute Engine GPUs to master and worker nodes.

## Lifecycle

- Latest feature date: 2017-03-07
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
- auth
- authorization
- credential
- iam
- identity
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)
- [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
