# Allocated IP ranges for clones and replicas

Product: Cloud SQL for MySQL
Feature slug: `allocated-ip-ranges-for-clones-and-replicas`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL lets you select an allocated IP range for clones and replicas created from a primary instance that uses private IP.

## Lifecycle

- Latest feature date: 2022-02-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/clone-instance](https://docs.cloud.google.com/sql/docs/mysql/clone-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
