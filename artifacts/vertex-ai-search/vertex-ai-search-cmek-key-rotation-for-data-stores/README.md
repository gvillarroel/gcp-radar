# Vertex AI Search CMEK key rotation for data stores

Product: Vertex AI Search
Feature slug: `vertex-ai-search-cmek-key-rotation-for-data-stores`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Introduces key rotation for customer-managed encryption keys used by Vertex AI Search data stores associated with search apps, available in Private Preview.

## Lifecycle

- Latest feature date: 2024-07-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations))
- authorization (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations))
- encrypt (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations))
- iam (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations))
- key (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations))
- kms (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations))
- private (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations))
- token (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es), [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
