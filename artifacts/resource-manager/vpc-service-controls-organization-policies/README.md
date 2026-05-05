# VPC Service Controls organization policies

Product: Resource Manager
Feature slug: `vpc-service-controls-organization-policies`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Provides organization policies for VPC Service Controls to help create secure perimeters against data exfiltration.

## Lifecycle

- Latest feature date: 2020-01-30
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

- access (evidence: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview))
- allow (evidence: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview))
- auth (evidence: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview))
- authorization (evidence: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview))
- constraint (evidence: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview))
- iam (evidence: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview))
- key (evidence: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview))
- permission (evidence: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview))
- policy (evidence: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview))
- role (evidence: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview))
- token (evidence: [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders), [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj), [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview))

## Official Evidence

- [https://docs.cloud.google.com/resource-manager/docs/access-control-proj](https://docs.cloud.google.com/resource-manager/docs/access-control-proj)
- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders](https://docs.cloud.google.com/resource-manager/docs/creating-managing-folders)
- [https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview](https://docs.cloud.google.com/resource-manager/docs/resource-manager-overview)
