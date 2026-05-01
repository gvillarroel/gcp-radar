# Dataflow SQL

Product: Dataflow
Feature slug: `dataflow-sql`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Dataflow SQL provides a SQL-based interface for working with Dataflow jobs in the console and CLI; Dataflow SQL lets users develop and run Dataflow jobs using SQL; deprecated on 2024-07-31.

## Lifecycle

- Latest feature date: 2020-04-15
- Deprecation date: 2024-07-31
- Status: deprecation_noted

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
- allow
- auth
- authorization
- certificate
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
