# SanitizeUserPrompt policy

Product: Apigee hybrid
Feature slug: `sanitizeuserprompt-policy`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Apigee Hybrid supports the SanitizeUserPrompt policy for LLM/GenAI workloads to sanitize incoming prompts and reduce prompt-injection and jailbreak risks.

## Lifecycle

- Latest feature date: 2025-10-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- policy

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-create-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
