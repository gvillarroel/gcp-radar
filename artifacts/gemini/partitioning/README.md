# partitioning

Product: Gemini
Feature slug: `partitioning`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Gemini in BigQuery recommends materialized views, partitioning, and clustering changes to reduce cost and improve performance.

## Lifecycle

- Latest feature date: 2024-04-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- iam
- logging
- permission
- token

## Official Evidence

- [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings/get)
- [https://docs.cloud.google.com/gemini/docs/codeassist/android-studio-overview](https://docs.cloud.google.com/gemini/docs/codeassist/android-studio-overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3](https://docs.cloud.google.com/gemini/docs/codeassist/gemini-3)
- [https://docs.cloud.google.com/gemini/docs/configure-logging](https://docs.cloud.google.com/gemini/docs/configure-logging)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
