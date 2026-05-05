# Regionalized data residency

Product: Agent Assist
Feature slug: `regionalized-data-residency`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Regionalized data residency lets Agent Assist users confine conversation data at rest to a specified geographic region.

## Lifecycle

- Latest feature date: 2022-09-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/agent-assist/docs/conversation-data-format](https://docs.cloud.google.com/agent-assist/docs/conversation-data-format), [https://docs.cloud.google.com/agent-assist/docs/conversation-dataset](https://docs.cloud.google.com/agent-assist/docs/conversation-dataset), [https://docs.cloud.google.com/agent-assist/docs/export-conversations](https://docs.cloud.google.com/agent-assist/docs/export-conversations))
- auth (evidence: [https://docs.cloud.google.com/agent-assist/docs/conversation-data-format](https://docs.cloud.google.com/agent-assist/docs/conversation-data-format), [https://docs.cloud.google.com/agent-assist/docs/conversation-dataset](https://docs.cloud.google.com/agent-assist/docs/conversation-dataset), [https://docs.cloud.google.com/agent-assist/docs/export-conversations](https://docs.cloud.google.com/agent-assist/docs/export-conversations))
- credential (evidence: [https://docs.cloud.google.com/agent-assist/docs/conversation-data-format](https://docs.cloud.google.com/agent-assist/docs/conversation-data-format), [https://docs.cloud.google.com/agent-assist/docs/conversation-dataset](https://docs.cloud.google.com/agent-assist/docs/conversation-dataset), [https://docs.cloud.google.com/agent-assist/docs/export-conversations](https://docs.cloud.google.com/agent-assist/docs/export-conversations))
- key (evidence: [https://docs.cloud.google.com/agent-assist/docs/conversation-data-format](https://docs.cloud.google.com/agent-assist/docs/conversation-data-format), [https://docs.cloud.google.com/agent-assist/docs/conversation-dataset](https://docs.cloud.google.com/agent-assist/docs/conversation-dataset), [https://docs.cloud.google.com/agent-assist/docs/export-conversations](https://docs.cloud.google.com/agent-assist/docs/export-conversations))
- role (evidence: [https://docs.cloud.google.com/agent-assist/docs/conversation-data-format](https://docs.cloud.google.com/agent-assist/docs/conversation-data-format), [https://docs.cloud.google.com/agent-assist/docs/conversation-dataset](https://docs.cloud.google.com/agent-assist/docs/conversation-dataset), [https://docs.cloud.google.com/agent-assist/docs/export-conversations](https://docs.cloud.google.com/agent-assist/docs/export-conversations))

## Official Evidence

- [https://docs.cloud.google.com/agent-assist/docs/conversation-data-format](https://docs.cloud.google.com/agent-assist/docs/conversation-data-format)
- [https://docs.cloud.google.com/agent-assist/docs/conversation-dataset](https://docs.cloud.google.com/agent-assist/docs/conversation-dataset)
- [https://docs.cloud.google.com/agent-assist/docs/export-conversations](https://docs.cloud.google.com/agent-assist/docs/export-conversations)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
