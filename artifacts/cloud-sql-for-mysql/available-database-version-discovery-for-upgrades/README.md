# Available database version discovery for upgrades

Product: Cloud SQL for MySQL
Feature slug: `available-database-version-discovery-for-upgrades`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL lets you retrieve the list of database versions available for upgrade for a MySQL instance through gcloud or the Admin API.

## Lifecycle

- Latest feature date: 2024-06-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
