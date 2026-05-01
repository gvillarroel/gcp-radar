# OS patch management

Product: Compute Engine
Feature slug: `os-patch-management`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

OS patch management lets you manage patches, maintain systems, and view patch compliance for VM instances; OS patch management lets you manage patches, perform maintenance, and view patch compliance for VM instances.

## Lifecycle

- Latest feature date: 2020-04-15
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
- security

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam)
- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/creating-router-appliances](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/how-to/creating-router-appliances)
