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

- access (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- armor (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- auth (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- authorization (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- certificate (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- constraint (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- encrypt (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- firewall (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- iam (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- identity (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- key (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- kms (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- permission (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- private (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- role (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- security (evidence: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server), [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam)
- [https://docs.cloud.google.com/compute/docs/api-rate-limits](https://docs.cloud.google.com/compute/docs/api-rate-limits)
- [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server)
