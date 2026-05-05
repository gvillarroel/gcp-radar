# User mentions with app authentication

Product: Chat API
Feature slug: `user-mentions-with-app-authentication`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

The Chat API supports mentioning users in messages sent with app authentication, including users who have not joined a space or are in import-mode spaces.

## Lifecycle

- Latest feature date: 2026-02-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef](https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef), [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference), [https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp](https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp))
- logging (evidence: [https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef](https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef), [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference), [https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp](https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp))

## Official Evidence

- [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef](https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp](https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
