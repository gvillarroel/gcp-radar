# Smart card support for Gmail client-side encryption

Product: Gmail API
Feature slug: `smart-card-support-for-gmail-client-side-encryption`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Gmail API supports using smart cards for client-side encryption in Google Workspace organizations that use hardware key encryption.

## Lifecycle

- Latest feature date: 2025-05-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt
- key

## Official Evidence

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels/delete](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels/delete)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages.attachments](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages.attachments)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
