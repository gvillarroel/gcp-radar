# AI Platform (Unified) regionalized data storage and processing

Product: Vertex AI
Feature slug: `ai-platform-unified-regionalized-data-storage-and-processing`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

AI Platform (Unified) stores and processes user data only in the region explicitly specified by the user for most features.

## Lifecycle

- Latest feature date: 2020-12-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- armor (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- private (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- threat (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features)
- [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance)
