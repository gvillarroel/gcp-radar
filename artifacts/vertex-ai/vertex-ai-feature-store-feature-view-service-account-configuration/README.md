# Vertex AI Feature Store feature view service account configuration

Product: Vertex AI
Feature slug: `vertex-ai-feature-store-feature-view-service-account-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Allows a feature view to use a dedicated service account instead of the default project service account.

## Lifecycle

- Latest feature date: 2024-03-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup))
- allow (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featuregroup)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-featureview)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
