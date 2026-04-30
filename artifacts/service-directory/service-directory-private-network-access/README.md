# Service Directory private network access

Product: Service Directory
Feature slug: `service-directory-private-network-access`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Service Directory Private Network Access enables supported Google Cloud services to connect directly to VPC networks; Service Directory now supports private network access.

## Lifecycle

- Latest feature date: 2022-01-24
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
- auth
- credential
- iam
- identity
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/service-directory/docs/access-control](https://docs.cloud.google.com/service-directory/docs/access-control)
- [https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access](https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access)
- [https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone](https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone)
- [https://docs.cloud.google.com/service-directory/docs/private-network-access-overview](https://docs.cloud.google.com/service-directory/docs/private-network-access-overview)
