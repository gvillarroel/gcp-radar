# VPN Gateway resource type support

Product: Cloud Deployment Manager
Feature slug: `vpn-gateway-resource-type-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deployment Manager supports creating Compute Engine VpnGateway resources with the gcp-types/compute-v1:vpnGateways type.

## Lifecycle

- Latest feature date: 2019-10-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types))
- certificate (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types))
- firewall (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types))
- key (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types))
- logging (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/composite-types/creating-composite-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types)
