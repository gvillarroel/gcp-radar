# Corpus image return in answers

Product: Gemini Enterprise
Feature slug: `corpus-image-return-in-answers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The answer method can return images from unstructured data stores in answers and citations.

## Lifecycle

- Latest feature date: 2025-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat))
- allow (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat))
- audit (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat))
- auth (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat))
- authorization (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat))
- credential (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat))
- identity (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat))
- logging (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat))
- secret (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat))
- token (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest), [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec), [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls), [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat))

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest)
- [https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec](https://docs.cloud.google.com/gemini/enterprise/docs/reference/rest/v1/AnswerGenerationSpec)
