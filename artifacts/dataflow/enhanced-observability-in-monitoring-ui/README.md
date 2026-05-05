# Enhanced observability in monitoring UI

Product: Dataflow
Feature slug: `enhanced-observability-in-monitoring-ui`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Dataflow monitoring UI includes enhanced observability features for troubleshooting batch and streaming pipelines.

## Lifecycle

- Latest feature date: 2020-02-04
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

- access (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- auth (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- authorization (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- certificate (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- encrypt (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- firewall (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- iam (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- identity (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- key (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- kms (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- logging (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- permission (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- policy (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- private (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- role (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- security (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))
- token (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring)
