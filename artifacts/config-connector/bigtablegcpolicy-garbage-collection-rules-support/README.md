# BigtableGCPolicy garbage collection rules support

Product: Config Connector
Feature slug: `bigtablegcpolicy-garbage-collection-rules-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the spec.gcRules field for BigtableGCPolicy resources.

## Lifecycle

- Latest feature date: 2022-11-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
