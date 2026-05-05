# Vertex AI Search CMEK with external key manager and HSM

Product: Vertex AI Search
Feature slug: `vertex-ai-search-cmek-with-external-key-manager-and-hsm`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Search supports using external key manager (EKM) and hardware security module (HSM)-backed keys with CMEK.

## Lifecycle

- Latest feature date: 2024-10-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance))
- authorization (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance))
- credential (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance))
- encrypt (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance))
- iam (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance))
- key (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance))
- kms (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance))
- security (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance))
- token (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek), [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-governance)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
