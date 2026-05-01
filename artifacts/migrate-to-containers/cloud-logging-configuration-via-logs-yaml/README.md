# Cloud Logging configuration via logs.yaml

Product: Migrate to Containers
Feature slug: `cloud-logging-configuration-via-logs-yaml`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Migration artifacts generation now creates a logs.yaml file that lists detected log files and can be edited to configure Cloud Logging output.

## Lifecycle

- Latest feature date: 2021-08-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- logging
- security

## Official Evidence

- [https://docs.cloud.google.com/migrate/containers/docs/convert-runtime](https://docs.cloud.google.com/migrate/containers/docs/convert-runtime)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates](https://docs.cloud.google.com/migrate/containers/docs/post-migration-image-updates)
