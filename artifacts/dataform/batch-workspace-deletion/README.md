# Batch workspace deletion

Product: Dataform
Feature slug: `batch-workspace-deletion`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Batch workspace deletion lets users delete multiple Dataform workspaces together.

## Lifecycle

- Latest feature date: 2023-10-27
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

- access (evidence: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace), [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform), [https://docs.cloud.google.com/dataform/docs/reference/sample-scripts](https://docs.cloud.google.com/dataform/docs/reference/sample-scripts))
- auth (evidence: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace), [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform), [https://docs.cloud.google.com/dataform/docs/reference/sample-scripts](https://docs.cloud.google.com/dataform/docs/reference/sample-scripts))
- iam (evidence: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace), [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform), [https://docs.cloud.google.com/dataform/docs/reference/sample-scripts](https://docs.cloud.google.com/dataform/docs/reference/sample-scripts))
- identity (evidence: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace), [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform), [https://docs.cloud.google.com/dataform/docs/reference/sample-scripts](https://docs.cloud.google.com/dataform/docs/reference/sample-scripts))
- key (evidence: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace), [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform), [https://docs.cloud.google.com/dataform/docs/reference/sample-scripts](https://docs.cloud.google.com/dataform/docs/reference/sample-scripts))
- permission (evidence: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace), [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform), [https://docs.cloud.google.com/dataform/docs/reference/sample-scripts](https://docs.cloud.google.com/dataform/docs/reference/sample-scripts))
- policy (evidence: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace), [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform), [https://docs.cloud.google.com/dataform/docs/reference/sample-scripts](https://docs.cloud.google.com/dataform/docs/reference/sample-scripts))
- role (evidence: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace), [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform), [https://docs.cloud.google.com/dataform/docs/reference/sample-scripts](https://docs.cloud.google.com/dataform/docs/reference/sample-scripts))
- token (evidence: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace), [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform), [https://docs.cloud.google.com/dataform/docs/reference/sample-scripts](https://docs.cloud.google.com/dataform/docs/reference/sample-scripts))

## Official Evidence

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)
- [https://docs.cloud.google.com/dataform/docs/javascript-in-dataform](https://docs.cloud.google.com/dataform/docs/javascript-in-dataform)
- [https://docs.cloud.google.com/dataform/docs/reference/sample-scripts](https://docs.cloud.google.com/dataform/docs/reference/sample-scripts)
