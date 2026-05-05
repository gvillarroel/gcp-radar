# External VPN Gateway resource type support

Product: Cloud Deployment Manager
Feature slug: `external-vpn-gateway-resource-type-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Deployment Manager supports creating Compute Engine ExternalVpnGateway resources with the gcp-types/compute-v1:externalVpnGateways type.

## Lifecycle

- Latest feature date: 2019-10-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- allow (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- auth (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- certificate (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- credential (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- firewall (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- key (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- logging (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- permission (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- policy (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- private (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- role (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- secret (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))
- security (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types), [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control), [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/hosting-templates-externally)
