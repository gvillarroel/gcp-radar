# Go 1.25 runtime

Product: App Engine standard environment Go
Feature slug: `go-1-25-runtime`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The App Engine standard environment supports deploying applications with the Go 1.25 runtime; The App Engine standard environment supports deploying applications with the Go 1.25 runtime.

## Lifecycle

- Latest feature date: 2025-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go111](https://docs.cloud.google.com/appengine/docs/standard/go111))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go111](https://docs.cloud.google.com/appengine/docs/standard/go111))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go111](https://docs.cloud.google.com/appengine/docs/standard/go111))
- logging (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go111](https://docs.cloud.google.com/appengine/docs/standard/go111))
- private (evidence: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime), [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml), [https://docs.cloud.google.com/appengine/docs/standard/go111](https://docs.cloud.google.com/appengine/docs/standard/go111))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/go111](https://docs.cloud.google.com/appengine/docs/standard/go111)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
