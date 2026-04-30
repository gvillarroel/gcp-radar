# Cloud Run migration command

Product: App Engine standard environment Python
Feature slug: `cloud-run-migration-command`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

App Engine standard environment Python supports deploying existing apps to Cloud Run with the gcloud beta app migrate-to-run command.

## Lifecycle

- Latest feature date: 2026-02-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth

## Official Evidence

- [https://cloud.google.com/appengine/docs/standard/authenticating-users](https://cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
