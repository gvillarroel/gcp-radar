# application log export to Stackdriver Logging

Product: Migrate to Containers
Feature slug: `application-log-export-to-stackdriver-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

A ConfigMap can route selected application log file content to Stackdriver Logging.

## Lifecycle

- Latest feature date: 2019-11-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- audit (evidence: [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- auth (evidence: [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- certificate (evidence: [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- key (evidence: [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- logging (evidence: [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))
- security (evidence: [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan))

## Official Evidence

- [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/linux/customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
