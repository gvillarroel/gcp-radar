# Multi-file editing

Product: Gemini Code Assist
Feature slug: `multi-file-editing`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Allows Gemini Code Assist agent mode to make concurrent changes across multiple files in a codebase from a single prompt.

## Lifecycle

- Latest feature date: 2025-06-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini), [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview))
- allow (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini), [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview))
- encrypt (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini), [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview))
- iam (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini), [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview))
- key (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini), [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview))
- policy (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini), [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview))
- role (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini), [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode), [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview))

## Official Evidence

- [https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini](https://docs.cloud.google.com/gemini/docs/codeassist/chat-gemini)
- [https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview](https://docs.cloud.google.com/gemini/docs/codeassist/chat-overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
