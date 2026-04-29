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

- access
- allow
- audit
- auth
- authorization
- certificate
- constraint
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/logging/logginglogbucket)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
