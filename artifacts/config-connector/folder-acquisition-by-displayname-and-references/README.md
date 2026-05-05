# Folder acquisition by displayName and references

Product: Config Connector
Feature slug: `folder-acquisition-by-displayname-and-references`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports acquiring Folder resources using displayName together with folderRef or organizationRef.

## Lifecycle

- Latest feature date: 2021-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- allow (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
