# Go 1.8 context package support

Product: App Engine standard environment Go
Feature slug: `go-1-8-context-package-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Go 1.8 runtime uses the standard library context package when creating App Engine contexts.

## Lifecycle

- Latest feature date: 2017-08-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access))
- credential (evidence: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/go/granting-project-access)
