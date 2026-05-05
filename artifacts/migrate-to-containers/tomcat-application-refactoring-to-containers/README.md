# Tomcat application refactoring to containers

Product: Migrate to Containers
Feature slug: `tomcat-application-refactoring-to-containers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Tomcat applications can be refactored into containers and deployed on GKE, GKE Autopilot, Anthos clusters, and Cloud Run.

## Lifecycle

- Latest feature date: 2022-09-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices))
- audit (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices))
- auth (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices))
- certificate (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices))
- key (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices))
- logging (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices))
- security (evidence: [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging), [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices))

## Official Evidence

- [https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging](https://docs.cloud.google.com/migrate/containers/docs/configuring-cloud-logging)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices](https://docs.cloud.google.com/migrate/containers/docs/planning-best-practices)
