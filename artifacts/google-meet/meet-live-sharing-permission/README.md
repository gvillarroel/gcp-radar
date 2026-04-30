# MEET_LIVE_SHARING permission

Product: Google Meet
Feature slug: `meet-live-sharing-permission`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The MEET_LIVE_SHARING Android permission is obsolete and removed from the manifest; deprecated on 2022-07-26.

## Lifecycle

- Latest feature date: 2022-07-26
- Deprecation date: 2022-07-26
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- credential
- iam
- identity
- permission
- policy
- role
- secret
- token

## Official Evidence

- [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-configuration)
- [https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview](https://developers.google.com/workspace/meet/api/guides/meeting-spaces-overview)
- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
