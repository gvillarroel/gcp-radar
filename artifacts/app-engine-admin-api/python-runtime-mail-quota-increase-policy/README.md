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

- access
- allow
- audit
- auth
- certificate
- firewall
- identity
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27](https://docs.cloud.google.com/appengine/docs/legacy/standard/python/tools/built-in-libraries-27)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app)
