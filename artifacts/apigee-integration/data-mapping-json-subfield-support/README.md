# Data Mapping JSON subfield support

Product: Apigee Integration
Feature slug: `data-mapping-json-subfield-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds support for subfield mapping of JSON variables in the Data Mapping task variable list.

## Lifecycle

- Latest feature date: 2022-07-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference), [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- auth (evidence: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference), [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- certificate (evidence: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference), [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- encrypt (evidence: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference), [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- iam (evidence: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference), [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- kms (evidence: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference), [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- logging (evidence: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference), [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- policy (evidence: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference), [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- secret (evidence: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference), [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- security (evidence: [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference), [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))

## Official Evidence

- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task](https://docs.cloud.google.com/application-integration/docs/configure-data-mapping-task)
- [https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference](https://docs.cloud.google.com/application-integration/docs/data-mapping-functions-reference)
