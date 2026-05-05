# Access Context Manager Bulk API

Product: Access Context Manager
Feature slug: `access-context-manager-bulk-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Access Context Manager Bulk API is generally available for replacing all access levels in an organization in a single operation; The Access Context Manager Bulk API is available in beta for bulk replacement of organizational access levels.

## Lifecycle

- Latest feature date: 2020-06-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations), [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec))
- audit (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations), [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec))
- auth (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations), [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec))
- certificate (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations), [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec))
- encrypt (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations), [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec))
- iam (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations), [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec))
- identity (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations), [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec))
- logging (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations), [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec))
- permission (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations), [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec))
- policy (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations), [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec))
- security (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations), [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec))

## Official Evidence

- [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations)
- [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
