# GPU zonal redundancy options

Product: Cloud Run
Feature slug: `gpu-zonal-redundancy-options`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run lets GPU services use zonal redundancy or non-redundant GPU configurations and request quota for either option.

## Lifecycle

- Latest feature date: 2025-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- allow (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- audit (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- auth (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- certificate (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- credential (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- encrypt (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- iam (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- identity (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- key (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- logging (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- secret (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))
- token (evidence: [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama), [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog), [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest/changelog](https://docs.cloud.google.com/python/docs/reference/run/latest/changelog)
- [https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama](https://docs.cloud.google.com/run/docs/tutorials/gpu-gemma-with-ollama)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
