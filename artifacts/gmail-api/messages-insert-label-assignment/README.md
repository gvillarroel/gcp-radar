# messages.insert label assignment

Product: Gmail API
Feature slug: `messages-insert-label-assignment`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The messages.insert method can set the SENT and DRAFT labels on inserted messages.

## Lifecycle

- Latest feature date: 2015-03-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert), [https://developers.google.com/workspace/gmail/api/guides/labels](https://developers.google.com/workspace/gmail/api/guides/labels), [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get))
- authorization (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert), [https://developers.google.com/workspace/gmail/api/guides/labels](https://developers.google.com/workspace/gmail/api/guides/labels), [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get))

## Official Evidence

- [https://developers.google.com/workspace/gmail/api/guides/labels](https://developers.google.com/workspace/gmail/api/guides/labels)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert)
