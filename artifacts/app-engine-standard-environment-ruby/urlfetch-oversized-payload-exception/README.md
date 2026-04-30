# URLFetch oversized payload exception

Product: App Engine standard environment Ruby
Feature slug: `urlfetch-oversized-payload-exception`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

URLFetch uses RequestPayloadTooLargeException for requests whose payloads exceed the allowed size.

## Lifecycle

- Latest feature date: 2015-08-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- firewall
- iam
- identity
- permission
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/ruby/connecting-vpc)
