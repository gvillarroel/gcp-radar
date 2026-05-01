# Large message payload support

Product: Apigee hybrid
Feature slug: `large-message-payload-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Apigee Hybrid supports API message payloads up to 30 MB and allows configuration per environment or for the entire installation; Apigee Hybrid supports API message payloads up to 30 MB, configurable via runtime resource settings.

## Lifecycle

- Latest feature date: 2025-06-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- security

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-overview](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-overview)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote)
- [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-settings)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
