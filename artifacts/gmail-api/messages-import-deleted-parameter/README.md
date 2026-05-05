# messages.import deleted parameter

Product: Gmail API
Feature slug: `messages-import-deleted-parameter`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The messages.import method supports the deleted parameter for email migration use cases.

## Lifecycle

- Latest feature date: 2015-02-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import), [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get), [https://developers.google.com/workspace/gmail/api/guides/drafts](https://developers.google.com/workspace/gmail/api/guides/drafts))
- certificate (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import), [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get), [https://developers.google.com/workspace/gmail/api/guides/drafts](https://developers.google.com/workspace/gmail/api/guides/drafts))
- credential (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import), [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get), [https://developers.google.com/workspace/gmail/api/guides/drafts](https://developers.google.com/workspace/gmail/api/guides/drafts))

## Official Evidence

- [https://developers.google.com/workspace/gmail/api/guides/drafts](https://developers.google.com/workspace/gmail/api/guides/drafts)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import)
