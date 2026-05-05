# Individual VPC network membership in VPC Service Controls perimeters

Product: Access Context Manager
Feature slug: `individual-vpc-network-membership-in-vpc-service-controls-perimeters`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

You can add individual VPC networks as members of a VPC Service Controls perimeter instead of requiring the entire host project; Access Context Manager preview support allows adding individual VPC networks as members of a perimeter instead of an entire host project.

## Lifecycle

- Latest feature date: 2023-02-17
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
