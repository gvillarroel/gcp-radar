# messages.insert deleted parameter

Product: Gmail API
Feature slug: `messages-insert-deleted-parameter`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The messages.insert method supports the deleted request parameter.

## Lifecycle

- Latest feature date: 2015-03-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert), [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get), [https://developers.google.com/workspace/gmail/api/reference/quota](https://developers.google.com/workspace/gmail/api/reference/quota))
- authorization (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert), [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get), [https://developers.google.com/workspace/gmail/api/reference/quota](https://developers.google.com/workspace/gmail/api/reference/quota))
- certificate (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert), [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get), [https://developers.google.com/workspace/gmail/api/reference/quota](https://developers.google.com/workspace/gmail/api/reference/quota))

## Official Evidence

- [https://developers.google.com/workspace/gmail/api/reference/quota](https://developers.google.com/workspace/gmail/api/reference/quota)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert)
