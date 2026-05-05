# AlloyDB support enhancements

Product: Config Connector
Feature slug: `alloydb-support-enhancements`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Connector improved AlloyDB support by adding new fields to AlloyDBCluster and AlloyDBInstance.

## Lifecycle

- Latest feature date: 2024-04-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- allow (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- encrypt (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster), [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance)
