# SQLInstance insightsConfig

Product: Config Connector
Feature slug: `sqlinstance-insightsconfig`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the insightsConfig field on SQLInstance.

## Lifecycle

- Latest feature date: 2021-03-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance), [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects), [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance), [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects), [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance), [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects), [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance), [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects), [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus))
- encrypt (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance), [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects), [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance), [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects), [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance), [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects), [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance), [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects), [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance), [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects), [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance), [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects), [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance), [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects), [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/sql/sqlinstance)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
