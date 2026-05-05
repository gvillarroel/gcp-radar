# User credential authorization for runs and scheduling

Product: Dataform
Feature slug: `user-credential-authorization-for-runs-and-scheduling`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

This feature lets Dataform use Google Account user credentials to authorize pipeline creation, scheduling, execution, and workflow configuration creation.

## Lifecycle

- Latest feature date: 2025-05-29
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

- access (evidence: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs), [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution))
- auth (evidence: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs), [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution))
- authorization (evidence: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs), [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution))
- credential (evidence: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs), [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution))
- iam (evidence: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs), [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution))
- logging (evidence: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs), [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution))
- permission (evidence: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs), [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution))
- policy (evidence: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs), [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution))
- role (evidence: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs), [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution))
- token (evidence: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs), [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions), [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control), [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution))

## Official Evidence

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions](https://docs.cloud.google.com/dataform/docs/quickstart-schedule-production-executions)
- [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution)
