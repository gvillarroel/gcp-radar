# URLFetch payload size exception handling

Product: App Engine Admin API
Feature slug: `urlfetch-payload-size-exception-handling`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

URLFetch requests with overly large payloads now use RequestPayloadTooLargeException.

## Lifecycle

- Latest feature date: 2015-08-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- firewall
- iam
- identity
- key
- logging
- permission
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
