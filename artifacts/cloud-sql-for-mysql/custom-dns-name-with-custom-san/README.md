# Custom DNS name with custom SAN

Product: Cloud SQL for MySQL
Feature slug: `custom-dns-name-with-custom-san`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Custom subject alternative name configuration lets instances use custom DNS names for connections when using customer-managed CA mode; Custom subject alternative name configuration lets instances use custom DNS names for connections when using customer-managed CA mode.

## Lifecycle

- Latest feature date: 2025-05-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name), [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
