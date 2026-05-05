# Trace scopes API management

Product: Cloud Trace
Feature slug: `trace-scopes-api-management`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Trace scopes can be created and managed programmatically through an API.

## Lifecycle

- Latest feature date: 2025-08-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot), [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses))
- auth (evidence: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot), [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses))
- credential (evidence: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot), [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses))
- iam (evidence: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot), [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses))
- identity (evidence: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot), [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses))
- key (evidence: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot), [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses))
- logging (evidence: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot), [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses))
- permission (evidence: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot), [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses))
- policy (evidence: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot), [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses))
- private (evidence: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot), [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses))
- role (evidence: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot), [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses))

## Official Evidence

- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot)
