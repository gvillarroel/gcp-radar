# Python runtime mail quota increase policy

Product: App Engine Admin API
Feature slug: `python-runtime-mail-quota-increase-policy`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Python runtime stopped accepting quota increase requests for the mail service and directed users to SendGrid.

## Lifecycle

- Latest feature date: 2016-04-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app), [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app), [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27))
- audit (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app), [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app), [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27))
- certificate (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app), [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app), [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app), [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app), [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app), [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app), [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app)
