# NVIDIA RTX PRO 6000 Blackwell GPU support

Product: Cloud Run
Feature slug: `nvidia-rtx-pro-6000-blackwell-gpu-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports NVIDIA RTX PRO 6000 Blackwell GPUs for supported workloads.

## Lifecycle

- Latest feature date: 2026-02-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus), [https://docs.cloud.google.com/run/docs/tutorials/image-processing](https://docs.cloud.google.com/run/docs/tutorials/image-processing))
- allow (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus), [https://docs.cloud.google.com/run/docs/tutorials/image-processing](https://docs.cloud.google.com/run/docs/tutorials/image-processing))
- auth (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus), [https://docs.cloud.google.com/run/docs/tutorials/image-processing](https://docs.cloud.google.com/run/docs/tutorials/image-processing))
- identity (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus), [https://docs.cloud.google.com/run/docs/tutorials/image-processing](https://docs.cloud.google.com/run/docs/tutorials/image-processing))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- [https://docs.cloud.google.com/run/docs/tutorials/image-processing](https://docs.cloud.google.com/run/docs/tutorials/image-processing)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
