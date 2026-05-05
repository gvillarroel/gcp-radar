# Vector Search Private Service Connect automation

Product: Vertex AI
Feature slug: `vector-search-private-service-connect-automation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vector Search now supports automated index deployment with Private Service Connect, allowing setup of a service connection policy without manually creating a compute address or forwarding rule.

## Lifecycle

- Latest feature date: 2024-10-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- allow (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- armor (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- private (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- threat (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search), [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/embeddings-search)
- [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features)
- [https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart](https://docs.cloud.google.com/vertex-ai/docs/vector-search/quickstart)
