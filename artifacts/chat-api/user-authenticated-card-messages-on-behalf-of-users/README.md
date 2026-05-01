# User-authenticated card messages on behalf of users

Product: Chat API
Feature slug: `user-authenticated-card-messages-on-behalf-of-users`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Chat apps can create card-based messages on behalf of users with user authentication and asynchronously update those cards without user interaction.

## Lifecycle

- Latest feature date: 2026-03-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- credential
- key

## Official Evidence

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
