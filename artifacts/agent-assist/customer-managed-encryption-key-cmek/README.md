# Customer Managed Encryption Key (CMEK)

Product: Agent Assist
Feature slug: `customer-managed-encryption-key-cmek`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Customer Managed Encryption Keys in Agent Assist are generally available and enable customers to control encryption key management details, audit logs, and key lifecycles.

## Lifecycle

- Latest feature date: 2025-01-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- allow (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- audit (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- auth (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- encrypt (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- iam (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- key (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- kms (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- logging (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- permission (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- policy (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- role (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- secret (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- security (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))
- token (evidence: [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek), [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install), [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist))

## Official Evidence

- [https://docs.cloud.google.com/agent-assist/docs/backend-module-install](https://docs.cloud.google.com/agent-assist/docs/backend-module-install)
- [https://docs.cloud.google.com/agent-assist/docs/cmek](https://docs.cloud.google.com/agent-assist/docs/cmek)
- [https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist](https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist)
