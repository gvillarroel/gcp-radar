# ComputeImage storage locations

Product: Config Connector
Feature slug: `computeimage-storage-locations`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports configuring storage locations on ComputeImage resources.

## Lifecycle

- Latest feature date: 2023-07-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
