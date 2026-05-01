# TLS 1.2+ support in App Engine standard

Product: App Engine standard environment PHP
Feature slug: `tls-1-2-support-in-app-engine-standard`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine standard now supports TLS 1.2 and later with a corresponding secure set of cipher suites in GA.

## Lifecycle

- Latest feature date: 2025-10-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- private

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/php-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/php-gen2/configuring-your-app-with-app-yaml)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
