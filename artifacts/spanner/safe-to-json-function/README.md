# SAFE_TO_JSON function

Product: Spanner
Feature slug: `safe-to-json-function`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner adds support for the SAFE_TO_JSON function in GoogleSQL, enabling conversion of SQL objects to JSON while returning JSON null for invalid JSON types instead of raising errors.

## Lifecycle

- Latest feature date: 2024-10-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences), [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences), [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences), [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings))
- constraint (evidence: [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences), [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences), [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings))
- iam (evidence: [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences), [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences), [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings))
- policy (evidence: [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences), [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences), [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings))
- security (evidence: [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences), [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview), [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences), [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/graph/queries-overview](https://docs.cloud.google.com/spanner/docs/graph/queries-overview)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
