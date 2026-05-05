# App Engine custom domain mapping

Product: App Engine Admin API
Feature slug: `app-engine-custom-domain-mapping`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Support for mapping custom domains via App Engine Admin API methods and gcloud commands became generally available.

## Lifecycle

- Latest feature date: 2017-09-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))
- audit (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))
- authorization (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))
- certificate (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))
- logging (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
