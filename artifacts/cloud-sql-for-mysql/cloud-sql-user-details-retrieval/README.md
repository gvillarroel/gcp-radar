# Cloud SQL user details retrieval

Product: Cloud SQL for MySQL
Feature slug: `cloud-sql-user-details-retrieval`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports retrieving details for a database user through the API or gcloud.

## Lifecycle

- Latest feature date: 2023-02-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users)
