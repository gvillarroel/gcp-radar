# AI model deployment observability

Product: Google Kubernetes Engine
Feature slug: `ai-model-deployment-observability`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Google Cloud console can show AI model deployment details, logs, and observability dashboards for deployments on GKE clusters.

## Lifecycle

- Latest feature date: 2025-10-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/integrate-model-armor-guardrails)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-llama-gpus-vllm)
