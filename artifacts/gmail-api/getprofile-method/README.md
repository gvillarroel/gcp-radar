# getProfile method

Product: Gmail API
Feature slug: `getprofile-method`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The getProfile method returns mailbox-wide metadata such as history ID and total message and thread counts.

## Lifecycle

- Latest feature date: 2014-10-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list), [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads), [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest))
- authorization (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list), [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads), [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest))
- certificate (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list), [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads), [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest))
- encrypt (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list), [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads), [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest))
- key (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list), [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads), [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest))
- private (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list), [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads), [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest))
- token (evidence: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list), [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads), [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest))

## Official Evidence

- [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)
- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
