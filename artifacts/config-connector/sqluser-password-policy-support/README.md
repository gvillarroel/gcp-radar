# SQLUser password policy support

Product: Config Connector
Feature slug: `sqluser-password-policy-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the spec.passwordPolicy field for SQLUser resources.

## Lifecycle

- Latest feature date: 2022-11-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- credential (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
