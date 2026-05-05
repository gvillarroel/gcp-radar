# ID token request authentication for Chat apps

Product: Chat API
Feature slug: `id-token-request-authentication-for-chat-apps`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Chat apps running on Cloud Functions, Cloud Run, or other ID-token-enabled systems can verify that requests originated from Google Chat.

## Lifecycle

- Latest feature date: 2024-07-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))
- auth (evidence: [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))
- authorization (evidence: [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))
- credential (evidence: [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))
- logging (evidence: [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))
- permission (evidence: [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))
- token (evidence: [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script), [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth), [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize))

## Official Evidence

- [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth)
- [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script)
- [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize)
