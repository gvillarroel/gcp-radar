# Private Catalog distribution controls

Product: Service Catalog
Feature slug: `private-catalog-distribution-controls`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Private Catalog allows cloud admins to control distribution of solutions within an enterprise.

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

- access (evidence: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control), [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview), [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions), [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog))
- allow (evidence: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control), [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview), [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions), [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog))
- constraint (evidence: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control), [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview), [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions), [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog))
- iam (evidence: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control), [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview), [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions), [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog))
- identity (evidence: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control), [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview), [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions), [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog))
- permission (evidence: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control), [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview), [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions), [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog))
- policy (evidence: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control), [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview), [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions), [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog))
- private (evidence: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control), [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview), [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions), [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog))
- role (evidence: [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control), [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview), [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions), [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog))

## Official Evidence

- [https://docs.cloud.google.com/service-catalog/docs/access-control](https://docs.cloud.google.com/service-catalog/docs/access-control)
- [https://docs.cloud.google.com/service-catalog/docs/assign-solutions](https://docs.cloud.google.com/service-catalog/docs/assign-solutions)
- [https://docs.cloud.google.com/service-catalog/docs/overview](https://docs.cloud.google.com/service-catalog/docs/overview)
- [https://docs.cloud.google.com/service-catalog/docs/share-catalog](https://docs.cloud.google.com/service-catalog/docs/share-catalog)
