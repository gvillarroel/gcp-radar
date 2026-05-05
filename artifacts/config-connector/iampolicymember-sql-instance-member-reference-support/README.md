# IAMPolicyMember SQL instance member reference support

Product: Config Connector
Feature slug: `iampolicymember-sql-instance-member-reference-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the spec.memberFrom.sqlInstanceRef field for IAMPolicyMember resources.

## Lifecycle

- Latest feature date: 2022-09-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- allow (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- credential (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
