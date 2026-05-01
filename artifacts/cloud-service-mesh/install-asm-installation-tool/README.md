# install_asm installation tool

Product: Cloud Service Mesh
Feature slug: `install-asm-installation-tool`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The install_asm tool installs and upgrades Cloud Service Mesh; The install_asm tool installs and upgrades Cloud Service Mesh; deprecated on 2021-10-06.

## Lifecycle

- Latest feature date: 2021-10-06
- Deprecation date: 2021-10-06
- Status: deprecation_noted

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
- [https://docs.cloud.google.com/service-mesh/docs/canonical-service-controller-enable-and-disable](https://docs.cloud.google.com/service-mesh/docs/canonical-service-controller-enable-and-disable)
- [https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl](https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)
