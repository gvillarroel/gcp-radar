# FHIR data streaming ingestion

Product: Vertex AI Search
Feature slug: `fhir-data-streaming-ingestion`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Healthcare FHIR search data stores gain Private Preview support for streaming import, allowing ongoing ingestion in addition to one-time batch import.

## Lifecycle

- Latest feature date: 2024-04-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc))
- allow (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc))
- authorization (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc))
- iam (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc))
- identity (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc))
- permission (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc))
- private (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc))
- role (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc))
- token (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
