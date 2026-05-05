# Ingress rules for individual VPC networks

Product: Access Context Manager
Feature slug: `ingress-rules-for-individual-vpc-networks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VPC Service Controls perimeters now support ingress rules that authorize access for individual VPC networks; VPC Service Controls preview adds ingress rules that authorize specific individual VPC networks to access a perimeter.

## Lifecycle

- Latest feature date: 2023-02-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- allow (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- audit (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- auth (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- constraint (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- encrypt (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- firewall (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- iam (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- identity (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- logging (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- permission (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- policy (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))
- security (evidence: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage), [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview), [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file))

## Official Evidence

- [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file)
- [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
