# CREATE resource creation policy

Product: Cloud Deployment Manager
Feature slug: `create-resource-creation-policy`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deployment Manager supports a CREATE policy that fails a deployment if a new resource already exists.

## Lifecycle

- Latest feature date: 2018-07-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- allow (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- auth (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- authorization (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- certificate (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- firewall (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- key (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- logging (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- permission (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- policy (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- private (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- role (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))
- security (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch), [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch)
