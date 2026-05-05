# VPC Service Controls integration

Product: Infrastructure Manager
Feature slug: `vpc-service-controls-integration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Infrastructure Manager integrates with VPC Service Controls.

## Lifecycle

- Latest feature date: 2023-09-28
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

- access (evidence: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform), [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources), [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication), [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control))
- auth (evidence: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform), [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources), [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication), [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control))
- constraint (evidence: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform), [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources), [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication), [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control))
- credential (evidence: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform), [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources), [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication), [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform), [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources), [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication), [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control))
- logging (evidence: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform), [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources), [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication), [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform), [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources), [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication), [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform), [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources), [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication), [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control))
- private (evidence: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform), [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources), [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication), [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform), [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources), [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication), [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control))
- token (evidence: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform), [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources), [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication), [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/infrastructure-manager/docs/access-control](https://docs.cloud.google.com/infrastructure-manager/docs/access-control)
- [https://docs.cloud.google.com/infrastructure-manager/docs/authentication](https://docs.cloud.google.com/infrastructure-manager/docs/authentication)
- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-vpc-with-terraform)
- [https://docs.cloud.google.com/infrastructure-manager/docs/import-resources](https://docs.cloud.google.com/infrastructure-manager/docs/import-resources)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
