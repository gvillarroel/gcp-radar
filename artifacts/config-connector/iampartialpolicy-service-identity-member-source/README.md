# IAMPartialPolicy service identity member source

Product: Config Connector
Feature slug: `iampartialpolicy-service-identity-member-source`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

IAMPartialPolicy supports sourcing binding members from a ServiceIdentity reference.

## Lifecycle

- Latest feature date: 2023-02-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
