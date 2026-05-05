# Automatic Model Refresh

Product: Dataflow
Feature slug: `automatic-model-refresh`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Automatic Model Refresh lets Dataflow ML update a machine learning model without stopping an Apache Beam pipeline.

## Lifecycle

- Latest feature date: 2023-04-21
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

- access (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- auth (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- authorization (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- certificate (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- encrypt (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- firewall (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- iam (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- identity (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- key (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- kms (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- logging (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- permission (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- policy (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- private (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- role (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- security (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))
- token (evidence: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/cloud-bigtable-change-streams-to-bigquery)
- [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
