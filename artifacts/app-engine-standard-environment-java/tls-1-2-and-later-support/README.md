# TLS 1.2 and later support

Product: App Engine standard environment Java
Feature slug: `tls-1-2-and-later-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

App Engine standard environment Java supports TLS 1.2 and later with a secure set of cipher suites; App Engine standard environment Java supports TLS 1.2 and later with a secure set of cipher suites.

## Lifecycle

- Latest feature date: 2025-10-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings), [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/java/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java/configuring-your-app-with-app-yaml))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/java/configuring-your-app-with-app-yaml)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
