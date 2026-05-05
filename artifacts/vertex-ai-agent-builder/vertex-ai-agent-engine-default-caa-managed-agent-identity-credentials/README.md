# Vertex AI Agent Engine default CAA-managed agent identity credentials

Product: Vertex AI Agent Builder
Feature slug: `vertex-ai-agent-engine-default-caa-managed-agent-identity-credentials`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Agent Engine now secures agent identity credentials by default through a Google-managed Context-Aware Access (CAA) policy.

## Lifecycle

- Latest feature date: 2025-12-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api))
- auth (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api))
- credential (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api))
- encrypt (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api))
- iam (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api))
- identity (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api))
- permission (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api))
- policy (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api))
- role (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api))
- secret (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api))

## Official Evidence

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)
- [https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api](https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api)
