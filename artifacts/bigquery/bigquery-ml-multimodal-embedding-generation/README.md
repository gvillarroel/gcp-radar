# BigQuery ML multimodal embedding generation

Product: BigQuery
Feature slug: `bigquery-ml-multimodal-embedding-generation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery ML can use ML.GENERATE_EMBEDDING with Vertex AI multimodalembedding remote models to create multimodal embeddings spanning text, image, and video; BigQuery ML can generate multimodal embeddings from text and images by using ML.GENERATE_EMBEDDING with a Vertex AI multimodal embedding remote model.

## Lifecycle

- Latest feature date: 2024-09-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- constraint
- credential
- encrypt
- iam
- key
- logging
- permission
- policy
- private
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-generate-embedding](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-ai-generate-embedding)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-embedding-maas](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-remote-model-embedding-maas)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-generate-embedding](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-generate-embedding)
