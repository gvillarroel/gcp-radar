# User mentions with user authentication

Product: Chat API
Feature slug: `user-mentions-with-user-authentication`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

The Chat API supports mentioning users in messages sent with user authentication, including users who have not joined a space or are in import-mode spaces.

## Lifecycle

- Latest feature date: 2025-03-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef](https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef), [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference), [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1))

## Official Evidence

- [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef](https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
