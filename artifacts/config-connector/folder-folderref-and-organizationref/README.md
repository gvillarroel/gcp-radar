# Folder folderRef and organizationRef

Product: Config Connector
Feature slug: `folder-folderref-and-organizationref`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the folderRef and organizationRef fields on Folder.

## Lifecycle

- Latest feature date: 2021-03-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- constraint
- iam
- logging
- permission
- policy

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
