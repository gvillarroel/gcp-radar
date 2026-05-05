# AlloyDBCluster backup restore sources

Product: Config Connector
Feature slug: `alloydbcluster-backup-restore-sources`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports restoring AlloyDBCluster resources from backup and continuous backup sources.

## Lifecycle

- Latest feature date: 2023-09-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- allow (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- encrypt (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbuser)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
