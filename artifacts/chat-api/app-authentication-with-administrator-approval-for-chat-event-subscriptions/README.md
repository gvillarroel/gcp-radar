# App authentication with administrator approval for Chat event subscriptions

Product: Chat API
Feature slug: `app-authentication-with-administrator-approval-for-chat-event-subscriptions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Chat apps can use app authentication with administrator approval to subscribe to, renew, and reactivate Chat space event subscriptions through the Google Workspace Events API; Chat apps can use app authentication with administrator approval and chat.app.* scopes to subscribe to, renew, and reactivate Chat space event subscriptions through the Google Workspace Events API.

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
