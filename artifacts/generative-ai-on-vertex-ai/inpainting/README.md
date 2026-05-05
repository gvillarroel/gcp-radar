# Inpainting

Product: Generative AI on Vertex AI
Feature slug: `inpainting`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

An editing feature that adds or removes content inside a masked area of an image; Inpainting lets you add or remove content from a masked area of an image.

## Lifecycle

- Latest feature date: 2024-12-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6))
- credential (evidence: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig), [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6)
