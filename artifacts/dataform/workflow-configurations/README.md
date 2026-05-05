# Workflow configurations

Product: Dataform
Feature slug: `workflow-configurations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Workflow configurations let Dataform execute SQL workflows on a schedule.

## Lifecycle

- Latest feature date: 2023-05-04
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

- access (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/sql-workflows](https://docs.cloud.google.com/dataform/docs/sql-workflows), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs))
- auth (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/sql-workflows](https://docs.cloud.google.com/dataform/docs/sql-workflows), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs))
- iam (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/sql-workflows](https://docs.cloud.google.com/dataform/docs/sql-workflows), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs))
- permission (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/sql-workflows](https://docs.cloud.google.com/dataform/docs/sql-workflows), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs))
- policy (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/sql-workflows](https://docs.cloud.google.com/dataform/docs/sql-workflows), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs))
- role (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/sql-workflows](https://docs.cloud.google.com/dataform/docs/sql-workflows), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs))
- token (evidence: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation), [https://docs.cloud.google.com/dataform/docs/sql-workflows](https://docs.cloud.google.com/dataform/docs/sql-workflows), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs))

## Official Evidence

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- [https://docs.cloud.google.com/dataform/docs/sql-workflows](https://docs.cloud.google.com/dataform/docs/sql-workflows)
