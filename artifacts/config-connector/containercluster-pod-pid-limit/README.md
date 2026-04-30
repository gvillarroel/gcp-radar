# ContainerCluster pod PID limit

Product: Config Connector
Feature slug: `containercluster-pod-pid-limit`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

ContainerCluster supports configuring the kubelet pod PID limit through spec.kubeletConfig.podPidsLimit.

## Lifecycle

- Latest feature date: 2023-03-30
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
- constraint
- encrypt
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

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainercluster)
