# Cloud Functions API v1

Product: Cloud Run functions
Feature slug: `cloud-functions-api-v1`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Functions API v1 is the generally available API for managing functions.

## Lifecycle

- Latest feature date: 2017-10-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- identity (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- key (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- kms (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- role (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- secret (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- security (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))
- token (evidence: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating), [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions), [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
