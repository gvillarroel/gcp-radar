# Vertical Pod Autoscaler support

Product: Config Connector
Feature slug: `vertical-pod-autoscaler-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Connector added support for enabling Vertical Pod Autoscaler for components through ControllerResource and NamespacedControllerResource; Config Connector added Vertical Pod Autoscaler support for controllers and a verticalPodAutoscalerMode field on ConfigConnector and ConfigConnectorContext.

## Lifecycle

- Latest feature date: 2026-01-27
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
- confidential
- encrypt
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
