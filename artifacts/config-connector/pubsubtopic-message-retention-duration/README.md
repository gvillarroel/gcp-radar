# PubSubTopic message retention duration

Product: Config Connector
Feature slug: `pubsubtopic-message-retention-duration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports setting message retention duration on PubSubTopic resources.

## Lifecycle

- Latest feature date: 2022-01-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
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
- token

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/pubsub/pubsubsubscription](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/pubsub/pubsubsubscription)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/pubsub/pubsubtopic](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/pubsub/pubsubtopic)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
