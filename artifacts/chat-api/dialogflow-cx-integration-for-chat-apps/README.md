# Dialogflow CX integration for Chat apps

Product: Chat API
Feature slug: `dialogflow-cx-integration-for-chat-apps`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Google Chat apps can integrate directly with Dialogflow CX to understand and respond using natural language; The Chat API supports direct integration with Dialogflow CX so Chat apps can understand and respond with natural language.

## Lifecycle

- Latest feature date: 2024-04-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/workspace/chat/api/reference/rpc/google.type](https://developers.google.com/workspace/chat/api/reference/rpc/google.type), [https://developers.google.com/workspace/chat/delete-custom-emoji](https://developers.google.com/workspace/chat/delete-custom-emoji), [https://developers.google.com/workspace/chat/create-custom-emoji](https://developers.google.com/workspace/chat/create-custom-emoji))
- auth (evidence: [https://developers.google.com/workspace/chat/api/reference/rpc/google.type](https://developers.google.com/workspace/chat/api/reference/rpc/google.type), [https://developers.google.com/workspace/chat/delete-custom-emoji](https://developers.google.com/workspace/chat/delete-custom-emoji), [https://developers.google.com/workspace/chat/create-custom-emoji](https://developers.google.com/workspace/chat/create-custom-emoji))
- authorization (evidence: [https://developers.google.com/workspace/chat/api/reference/rpc/google.type](https://developers.google.com/workspace/chat/api/reference/rpc/google.type), [https://developers.google.com/workspace/chat/delete-custom-emoji](https://developers.google.com/workspace/chat/delete-custom-emoji), [https://developers.google.com/workspace/chat/create-custom-emoji](https://developers.google.com/workspace/chat/create-custom-emoji))
- credential (evidence: [https://developers.google.com/workspace/chat/api/reference/rpc/google.type](https://developers.google.com/workspace/chat/api/reference/rpc/google.type), [https://developers.google.com/workspace/chat/delete-custom-emoji](https://developers.google.com/workspace/chat/delete-custom-emoji), [https://developers.google.com/workspace/chat/create-custom-emoji](https://developers.google.com/workspace/chat/create-custom-emoji))

## Official Evidence

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.type](https://developers.google.com/workspace/chat/api/reference/rpc/google.type)
- [https://developers.google.com/workspace/chat/create-custom-emoji](https://developers.google.com/workspace/chat/create-custom-emoji)
- [https://developers.google.com/workspace/chat/delete-custom-emoji](https://developers.google.com/workspace/chat/delete-custom-emoji)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
