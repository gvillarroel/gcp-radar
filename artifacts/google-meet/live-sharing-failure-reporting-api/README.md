# Live Sharing failure reporting API

Product: Google Meet
Feature slug: `live-sharing-failure-reporting-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The SDK adds notifyLiveSharingFailureEvent for reporting Live Sharing failures.

## Lifecycle

- Latest feature date: 2023-01-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize), [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview), [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/reference/rest/v2](https://developers.google.com/workspace/meet/api/reference/rest/v2))
- auth (evidence: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize), [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview), [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/reference/rest/v2](https://developers.google.com/workspace/meet/api/reference/rest/v2))
- authorization (evidence: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize), [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview), [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/reference/rest/v2](https://developers.google.com/workspace/meet/api/reference/rest/v2))
- credential (evidence: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize), [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview), [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/reference/rest/v2](https://developers.google.com/workspace/meet/api/reference/rest/v2))
- identity (evidence: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize), [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview), [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/reference/rest/v2](https://developers.google.com/workspace/meet/api/reference/rest/v2))
- permission (evidence: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize), [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview), [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/reference/rest/v2](https://developers.google.com/workspace/meet/api/reference/rest/v2))
- secret (evidence: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize), [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview), [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/reference/rest/v2](https://developers.google.com/workspace/meet/api/reference/rest/v2))
- token (evidence: [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize), [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview), [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python), [https://developers.google.com/workspace/meet/api/reference/rest/v2](https://developers.google.com/workspace/meet/api/reference/rest/v2))

## Official Evidence

- [https://developers.google.com/workspace/meet/api/guides/authenticate-authorize](https://developers.google.com/workspace/meet/api/guides/authenticate-authorize)
- [https://developers.google.com/workspace/meet/api/guides/overview](https://developers.google.com/workspace/meet/api/guides/overview)
- [https://developers.google.com/workspace/meet/api/guides/tutorial-events-python](https://developers.google.com/workspace/meet/api/guides/tutorial-events-python)
- [https://developers.google.com/workspace/meet/api/reference/rest/v2](https://developers.google.com/workspace/meet/api/reference/rest/v2)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
