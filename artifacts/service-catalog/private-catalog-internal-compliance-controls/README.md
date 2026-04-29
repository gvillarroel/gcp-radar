# Private Catalog internal compliance controls

Product: Service Catalog
Feature slug: `private-catalog-internal-compliance-controls`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Private Catalog helps cloud admins ensure internal compliance for solution distribution.

## Lifecycle

- Latest feature date: 2019-02-26
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
- constraint
- iam
- identity
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control)
- [https://docs.cloud.google.com/service-catalog/docs/create-catalog](https://docs.cloud.google.com/service-catalog/docs/create-catalog)
- [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview)
- [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog)
