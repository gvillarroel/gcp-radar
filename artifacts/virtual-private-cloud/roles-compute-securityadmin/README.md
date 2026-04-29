# roles/compute.securityAdmin

Product: Virtual Private Cloud
Feature slug: `roles-compute-securityadmin`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Compute Security Admin IAM role is now generally available for VPC.

## Lifecycle

- Latest feature date: 2016-05-11
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
- firewall
- iam
- identity
- permission
- policy
- private
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/access-control)
- [https://docs.cloud.google.com/vpc/docs/about-peering-connections](https://docs.cloud.google.com/vpc/docs/about-peering-connections)
- [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
