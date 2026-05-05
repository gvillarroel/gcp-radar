# Egress rules for VPC Service Controls

Product: Access Context Manager
Feature slug: `egress-rules-for-vpc-service-controls`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VPC Service Controls now support egress rules for controlling outbound service access.

## Lifecycle

- Latest feature date: 2021-04-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))
- audit (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))
- auth (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))
- certificate (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))
- encrypt (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))
- firewall (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))
- iam (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))
- identity (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))
- logging (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))
- permission (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))
- policy (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))
- security (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups))

## Official Evidence

- [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups)
- [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
