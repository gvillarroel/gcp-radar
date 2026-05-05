# Storage Transfer Service VPC Service Controls integration

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-vpc-service-controls-integration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Storage Transfer Service adds integration with VPC Service Controls for transfer operations; Storage Transfer Service added beta support for integration with VPC Service Controls.

## Lifecycle

- Latest feature date: 2020-09-01
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

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- audit (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- auth (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- authorization (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- constraint (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- encrypt (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- firewall (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- iam (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- identity (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- key (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- kms (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- logging (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- permission (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- policy (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- private (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- role (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- secret (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- security (evidence: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc), [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager)
- [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc)
