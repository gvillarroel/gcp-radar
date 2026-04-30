# App Engine Users API IAM role and group expansion

Product: App Engine Admin API
Feature slug: `app-engine-users-api-iam-role-and-group-expansion`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine Users API now treats project Owner, Editor, Viewer, and App Engine Admin IAM roles as admin access, including group-based membership inheritance.

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
- authorization
- certificate
- credential
- firewall
- iam
- identity
- logging
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
