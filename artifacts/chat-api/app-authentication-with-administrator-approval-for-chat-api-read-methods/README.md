# App authentication with administrator approval for Chat API read methods

Product: Chat API
Feature slug: `app-authentication-with-administrator-approval-for-chat-api-read-methods`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Chat API read methods for messages and space events support app authentication with administrator approval; Chat API space event read methods support app authentication with administrator approval when using chat.app.* scopes.

## Lifecycle

- Latest feature date: 2026-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize), [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1))
- auth (evidence: [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize), [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1))
- authorization (evidence: [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize), [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1))

## Official Evidence

- [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize)
