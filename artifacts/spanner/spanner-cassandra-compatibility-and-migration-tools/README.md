# Spanner Cassandra compatibility and migration tools

Product: Spanner
Feature slug: `spanner-cassandra-compatibility-and-migration-tools`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner now provides Cassandra API compatibility with migration tools to enable lift-and-shift migration of Cassandra applications.

## Lifecycle

- Latest feature date: 2025-04-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- allow (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- certificate (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- constraint (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- credential (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- iam (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- policy (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- private (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs/assess-migration](https://docs.cloud.google.com/spanner/docs/assess-migration)
- [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
