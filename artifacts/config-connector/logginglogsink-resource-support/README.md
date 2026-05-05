# LoggingLogSink resource support

Product: Config Connector
Feature slug: `logginglogsink-resource-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports managing LoggingLogSink resources at project, folder, and organization scopes.

## Lifecycle

- Latest feature date: 2020-10-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- audit (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- authorization (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- certificate (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- constraint (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- kms (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- logging (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- private (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview), [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources), [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)
- [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
