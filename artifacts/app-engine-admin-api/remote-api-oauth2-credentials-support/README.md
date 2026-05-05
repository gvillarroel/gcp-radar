# Remote API OAuth2 credentials support

Product: App Engine Admin API
Feature slug: `remote-api-oauth2-credentials-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Remote API access now supports OAuth2 authentication using Application Default Credentials.

## Lifecycle

- Latest feature date: 2015-08-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- allow (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- authorization (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- certificate (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- credential (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- kms (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- security (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- token (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api), [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api](https://docs.cloud.google.com/appengine/docs/admin-api/accessing-the-api)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
