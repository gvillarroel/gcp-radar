# Dynamic thread scaling

Product: Dataflow
Feature slug: `dynamic-thread-scaling`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Dynamic thread scaling automatically adjusts thread usage as part of Dataflow's vertical scaling features.

## Lifecycle

- Latest feature date: 2023-07-26
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

- access (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- auth (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- authorization (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- certificate (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- encrypt (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- firewall (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- iam (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- identity (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- key (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- kms (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- logging (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- permission (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- policy (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- private (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- role (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- security (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))
- token (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-spanner-change-streams-to-bigquery)
