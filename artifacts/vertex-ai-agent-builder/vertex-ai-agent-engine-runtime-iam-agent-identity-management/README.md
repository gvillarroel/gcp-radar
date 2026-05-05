# Vertex AI Agent Engine Runtime IAM agent identity management

Product: Vertex AI Agent Builder
Feature slug: `vertex-ai-agent-engine-runtime-iam-agent-identity-management`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Users can use IAM to create agent identities for access and authentication management when using agents on Vertex AI Agent Engine Runtime.

## Lifecycle

- Latest feature date: 2025-11-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart))
- auth (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart))
- credential (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart))
- encrypt (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart))
- iam (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart))
- identity (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart))
- permission (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart))
- policy (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart))
- role (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart))
- secret (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart))
- security (evidence: [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity), [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access), [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy), [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart))

## Official Evidence

- [https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity](https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity)
- [https://docs.cloud.google.com/agent-builder/agent-engine/deploy](https://docs.cloud.google.com/agent-builder/agent-engine/deploy)
- [https://docs.cloud.google.com/agent-builder/agent-engine/manage/access](https://docs.cloud.google.com/agent-builder/agent-engine/manage/access)
- [https://docs.cloud.google.com/agent-builder/agent-engine/quickstart](https://docs.cloud.google.com/agent-builder/agent-engine/quickstart)
