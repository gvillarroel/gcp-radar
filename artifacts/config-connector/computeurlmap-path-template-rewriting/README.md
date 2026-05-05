# ComputeURLMap path template rewriting

Product: Config Connector
Feature slug: `computeurlmap-path-template-rewriting`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports path template rewriting on ComputeURLMap resources.

## Lifecycle

- Latest feature date: 2023-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- allow (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
