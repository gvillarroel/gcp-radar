# Tomcat server installation directory override

Product: Migrate to Containers
Feature slug: `tomcat-server-installation-directory-override`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Tomcat application replatforming flow lets users manually specify the Tomcat server installation directory before migration.

## Lifecycle

- Latest feature date: 2022-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan))
- allow (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan))
- auth (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan))
- certificate (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan))
- key (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan))
- logging (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan))
- private (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan))
- security (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan))
- token (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan))

## Official Evidence

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/create-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
