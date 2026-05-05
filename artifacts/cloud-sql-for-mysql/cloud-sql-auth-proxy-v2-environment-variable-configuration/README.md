# Cloud SQL Auth proxy v2 environment variable configuration

Product: Cloud SQL for MySQL
Feature slug: `cloud-sql-auth-proxy-v2-environment-variable-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL Auth proxy v2 supports configuration through environment variables.

## Lifecycle

- Latest feature date: 2023-02-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions))
- credential (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions))
- secret (evidence: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users), [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl), [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions)
