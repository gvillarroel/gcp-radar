# GPU support

Product: Cloud Run
Feature slug: `gpu-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GPU support lets Cloud Run services use attached GPUs for accelerated workloads; GPU support lets Cloud Run services use attached GPUs for accelerated workloads.

## Lifecycle

- Latest feature date: 2024-10-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- allow (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- armor (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- audit (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- auth (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- authorization (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- constraint (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- encrypt (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- iam (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- identity (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- key (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- logging (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- private (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- secret (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- security (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- threat (evidence: [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai), [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/ai](https://docs.cloud.google.com/run/docs/ai)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service)
- [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
