# Faster maintenance

Product: Cloud SQL for MySQL
Feature slug: `faster-maintenance`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL maintenance now typically causes connectivity drops of less than 60 seconds on average.

## Lifecycle

- Latest feature date: 2021-06-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages), [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages), [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages), [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages), [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages), [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages), [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages), [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages), [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip))
- security (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages), [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages), [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
