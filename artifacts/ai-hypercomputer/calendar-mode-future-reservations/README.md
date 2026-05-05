# Calendar mode future reservations

Product: AI Hypercomputer
Feature slug: `calendar-mode-future-reservations`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

In preview, AI Hypercomputer supports creating future reservations in calendar mode up to 90 days ahead to reserve up to 80 GPU VMs and use that capacity for model training, fine-tuning, simulations, or inference.

## Lifecycle

- Latest feature date: 2025-07-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy), [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4), [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models))
- logging (evidence: [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy), [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4), [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models))
- policy (evidence: [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy), [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4), [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models))
- token (evidence: [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy), [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4), [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models))

## Official Evidence

- [https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy](https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models](https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models)
- [https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4](https://docs.cloud.google.com/ai-hypercomputer/docs/tutorials/gpu/fsdp-llama4)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
