# Storage Transfer Service managed folders transfer

Product: Storage Transfer Service
Feature slug: `storage-transfer-service-managed-folders-transfer`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Storage Transfer Service supports preview transfers of managed Cloud Storage folders between buckets and copies folder permissions during transfer.

## Lifecycle

- Latest feature date: 2024-02-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- identity
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/accesscontextmanager)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiedgeportal](https://docs.cloud.google.com/iam/docs/roles-permissions/aiedgeportal)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
