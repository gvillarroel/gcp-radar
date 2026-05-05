# Private access from Google Cloud services

Product: Cloud SQL for MySQL
Feature slug: `private-access-from-google-cloud-services`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports private connectivity that lets other Google Cloud services such as BigQuery access and query Cloud SQL data.

## Lifecycle

- Latest feature date: 2022-12-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- credential (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- secret (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
