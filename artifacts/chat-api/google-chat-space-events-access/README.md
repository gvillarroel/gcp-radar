# Google Chat space events access

Product: Chat API
Feature slug: `google-chat-space-events-access`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Chat API can get and list events for a space, including message, membership, and space update events.

## Lifecycle

- Latest feature date: 2024-03-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))
- auth (evidence: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))
- authorization (evidence: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))
- credential (evidence: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))
- role (evidence: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))

## Official Evidence

- [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list)
- [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize)
