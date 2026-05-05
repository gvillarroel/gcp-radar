# IAMPartialPolicy faster dependency reconciliation

Product: Config Connector
Feature slug: `iampartialpolicy-faster-dependency-reconciliation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

IAMPartialPolicy supports faster reconciliation for resources with dependencies.

## Lifecycle

- Latest feature date: 2023-01-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy), [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation](https://docs.cloud.google.com/config-connector/docs/concepts/reconciliation)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
