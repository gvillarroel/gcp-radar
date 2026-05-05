# AutoML Translation EAP-to-Beta model continuity

Product: AutoML Translation
Feature slug: `automl-translation-eap-to-beta-model-continuity`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

AutoML Translation preserves models created during EAP so they remain valid when moving into the Beta phase without retraining.

## Lifecycle

- Latest feature date: 2018-07-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models), [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models), [https://docs.cloud.google.com/translate/docs/advanced/translate-documents](https://docs.cloud.google.com/translate/docs/advanced/translate-documents))
- allow (evidence: [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models), [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models), [https://docs.cloud.google.com/translate/docs/advanced/translate-documents](https://docs.cloud.google.com/translate/docs/advanced/translate-documents))
- auth (evidence: [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models), [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models), [https://docs.cloud.google.com/translate/docs/advanced/translate-documents](https://docs.cloud.google.com/translate/docs/advanced/translate-documents))
- authorization (evidence: [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models), [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models), [https://docs.cloud.google.com/translate/docs/advanced/translate-documents](https://docs.cloud.google.com/translate/docs/advanced/translate-documents))
- token (evidence: [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models), [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models), [https://docs.cloud.google.com/translate/docs/advanced/translate-documents](https://docs.cloud.google.com/translate/docs/advanced/translate-documents))

## Official Evidence

- [https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models](https://docs.cloud.google.com/translate/docs/advanced/custom-nmt-models)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models](https://docs.cloud.google.com/translate/docs/advanced/custom-tllm-models)
- [https://docs.cloud.google.com/translate/docs/advanced/translate-documents](https://docs.cloud.google.com/translate/docs/advanced/translate-documents)
