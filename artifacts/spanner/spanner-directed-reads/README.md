# Spanner directed reads

Product: Spanner
Feature slug: `spanner-directed-reads`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Makes Spanner Directed Reads generally available, enabling read-only transactions and single reads to be directed to a specific replica type or region in a multi-region instance; Spanner directed reads let read-only transactions and single reads be routed to a specific replica type or region in a multi-region instance.

## Lifecycle

- Latest feature date: 2024-10-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- certificate
- credential
- encrypt
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
