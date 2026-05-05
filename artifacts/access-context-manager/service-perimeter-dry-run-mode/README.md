# Service perimeter dry run mode

Product: Access Context Manager
Feature slug: `service-perimeter-dry-run-mode`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Service perimeters now support dry run mode, allowing perimeter changes to be tested before enforcement.

## Lifecycle

- Latest feature date: 2020-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))
- allow (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))
- audit (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))
- auth (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))
- encrypt (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))
- firewall (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))
- iam (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))
- identity (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))
- logging (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))
- permission (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))
- policy (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))
- security (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest](https://docs.cloud.google.com/access-context-manager/docs/reference/rest)
- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
