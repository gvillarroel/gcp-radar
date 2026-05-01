# Spanner UUID primary key default generation

Product: Spanner
Feature slug: `spanner-uuid-primary-key-default-generation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds support for generating UUID v4 values as a PRIMARY KEY DEFAULT expression using GENERATE_UUID in GoogleSQL or generate_uuid() in PostgreSQL dialects.

## Lifecycle

- Latest feature date: 2023-08-23
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
- constraint
- credential
- encrypt
- iam
- key
- kms
- logging
- permission
- policy
- private
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
