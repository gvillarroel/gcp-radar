# cluster mode request rate limiting

Product: Config Connector
Feature slug: `cluster-mode-request-rate-limiting`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Connector added cluster and namespace modes for managing reconciliation request rate limits to the Kubernetes API server.

## Lifecycle

- Latest feature date: 2024-11-13
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
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit](https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
