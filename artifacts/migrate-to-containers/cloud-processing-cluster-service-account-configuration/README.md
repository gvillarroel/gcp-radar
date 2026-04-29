# Cloud processing cluster service account configuration

Product: Migrate to Containers
Feature slug: `cloud-processing-cluster-service-account-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Uses a service account instead of the cloud-platform scope when creating a processing cluster for Linux workload migrations.

## Lifecycle

- Latest feature date: 2020-07-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- armor
- key

## Official Evidence

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/windows/windows-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
