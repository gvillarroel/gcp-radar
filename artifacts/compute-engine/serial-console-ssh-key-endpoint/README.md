# Serial console SSH key endpoint

Product: Compute Engine
Feature slug: `serial-console-ssh-key-endpoint`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The serial console SSH key endpoint is deprecated in favor of a new serial SSH key endpoint; deprecated on 2025-03-31.

## Lifecycle

- Latest feature date: 2025-03-31
- Deprecation date: 2025-03-31
- Status: deprecation_noted

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
- armor
- auth
- authorization
- certificate
- constraint
- encrypt
- firewall
- iam
- identity
- key
- kms
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam)
- [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits)
- [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server)
