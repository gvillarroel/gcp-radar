# IAMAuditConfig failure dependency event support

Product: Config Connector
Feature slug: `iamauditconfig-failure-dependency-event-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

IAMAuditConfig supports UpdateFailed, DeleteFailed, DependencyNotFound, and DependencyNotReady events.

## Lifecycle

- Latest feature date: 2021-01-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))
- token (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig), [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
