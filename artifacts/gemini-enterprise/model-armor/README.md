# Model Armor

Product: Gemini Enterprise
Feature slug: `model-armor`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Model Armor screens prompts and responses in Gemini Enterprise apps to help protect sensitive information.

## Lifecycle

- Latest feature date: 2025-09-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding))
- allow (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding))
- armor (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding))
- audit (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding))
- auth (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding))
- iam (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding))
- logging (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding))
- permission (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding))
- private (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding))
- role (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding))

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/Shared.Types/Binding)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec)
