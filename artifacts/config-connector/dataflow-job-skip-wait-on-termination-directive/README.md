# Dataflow job skip wait on termination directive

Product: Config Connector
Feature slug: `dataflow-job-skip-wait-on-termination-directive`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

DataflowFlexTemplateJob and DataflowJob support the cnrm.cloud.google.com/skip-wait-on-job-termination directive to avoid waiting for job termination.

## Lifecycle

- Latest feature date: 2022-05-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- certificate
- constraint
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
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/dataflow/dataflowflextemplatejob](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/dataflow/dataflowflextemplatejob)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
