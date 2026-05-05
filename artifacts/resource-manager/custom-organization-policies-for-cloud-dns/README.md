# Custom organization policies for Cloud DNS

Product: Resource Manager
Feature slug: `custom-organization-policies-for-cloud-dns`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud DNS supports custom organization policies for more granular control over the service.

## Lifecycle

- Latest feature date: 2025-02-11
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

- access (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- allow (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- constraint (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- iam (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- identity (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- key (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- permission (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- policy (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- role (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))

## Official Evidence

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj)
- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)
