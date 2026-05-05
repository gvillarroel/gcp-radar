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

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy))
- allow (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/resourcemanagerpolicy)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
