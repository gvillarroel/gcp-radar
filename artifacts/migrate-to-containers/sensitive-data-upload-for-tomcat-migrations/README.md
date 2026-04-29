# Sensitive data upload for Tomcat migrations

Product: Migrate to Containers
Feature slug: `sensitive-data-upload-for-tomcat-migrations`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Tomcat migration plan can include certificates in the repository when the includeSensitiveData parameter is set to true.

## Lifecycle

- Latest feature date: 2022-05-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- certificate
- key
- private
- role
- secret

## Official Evidence

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/jboss/jboss-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/tomcat/tomcat-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/websphere-traditional/websphere-traditional-customizing-a-migration)
