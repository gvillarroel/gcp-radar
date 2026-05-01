# Anthos Service Mesh installation and migration automation script

Product: Cloud Service Mesh
Feature slug: `anthos-service-mesh-installation-and-migration-automation-script`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A shell script automates Anthos Service Mesh installation and migration from Istio and the Istio on GKE add-on; A shell script automates Anthos Service Mesh installation and migration from Istio and the Istio on GKE add-on.

## Lifecycle

- Latest feature date: 2020-11-12
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
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/anthosservicemesh](https://docs.cloud.google.com/iam/docs/roles-permissions/anthosservicemesh)
- [https://docs.cloud.google.com/service-mesh/docs/migrate-istio-to-anthos-service-mesh](https://docs.cloud.google.com/service-mesh/docs/migrate-istio-to-anthos-service-mesh)
