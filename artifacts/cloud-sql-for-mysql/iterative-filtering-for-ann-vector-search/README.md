# Iterative filtering for ANN vector search

Product: Cloud SQL for MySQL
Feature slug: `iterative-filtering-for-ann-vector-search`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This feature improves ANN vector search with filters by iteratively finding more results when selective WHERE clauses return too few matches.

## Lifecycle

- Latest feature date: 2025-11-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools))
- security (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools)
- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
