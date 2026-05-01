# Go SDK release tag support

Product: App Engine standard environment Go
Feature slug: `go-sdk-release-tag-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The App Engine Go SDK uploads all required Go files and aligns development release tags with typical Go 1.6 builds.

## Lifecycle

- Latest feature date: 2016-05-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- firewall

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
