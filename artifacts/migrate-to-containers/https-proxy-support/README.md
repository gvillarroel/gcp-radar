# HTTPS proxy support

Product: Migrate to Containers
Feature slug: `https-proxy-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Migrate for Anthos can use an HTTPS proxy for outbound internet access.

## Lifecycle

- Latest feature date: 2021-01-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- allow (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- armor (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- auth (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- credential (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- key (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- permission (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))

## Official Evidence

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial](https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial)
- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
