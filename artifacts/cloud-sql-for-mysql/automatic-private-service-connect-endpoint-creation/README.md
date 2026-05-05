# Automatic Private Service Connect endpoint creation

Product: Cloud SQL for MySQL
Feature slug: `automatic-private-service-connect-endpoint-creation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This feature automatically creates a Private Service Connect endpoint for accessing Cloud SQL instances through a VPC network; Cloud SQL can automatically create a Private Service Connect endpoint for instance access through a VPC network.

## Lifecycle

- Latest feature date: 2025-09-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint), [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint), [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint), [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint), [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint), [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint), [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint](https://docs.cloud.google.com/sql/docs/mysql/connect-to-instance-using-write-endpoint)
