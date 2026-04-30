# .NET 10 runtime

Product: Cloud Run
Feature slug: `net-10-runtime`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports the .NET 10 runtime for services; Cloud Run supports the .NET 10 runtime for services.

## Lifecycle

- Latest feature date: 2026-02-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth

## Official Evidence

- [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-dotnet-service)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
