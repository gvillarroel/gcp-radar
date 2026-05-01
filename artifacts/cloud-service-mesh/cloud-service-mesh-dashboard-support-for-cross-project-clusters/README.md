# Cloud Service Mesh dashboard support for cross-project clusters

Product: Cloud Service Mesh
Feature slug: `cloud-service-mesh-dashboard-support-for-cross-project-clusters`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Cloud Service Mesh dashboard supports cross-project clusters; The Cloud Service Mesh dashboard supports cross-project clusters.

## Lifecycle

- Latest feature date: 2022-01-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
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
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway](https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway)
- [https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc](https://docs.cloud.google.com/service-mesh/docs/managed/vpc-sc)
- [https://docs.cloud.google.com/service-mesh/docs/service-routing/features](https://docs.cloud.google.com/service-mesh/docs/service-routing/features)
