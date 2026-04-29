# dev_appserver.py security response headers

Product: App Engine Admin API
Feature slug: `dev-appserver-py-security-response-headers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The App Engine dev_appserver.py admin console began returning security response headers, including X-Frame-Options, X-XSS-Protection, and Content-Security-Policy.

## Lifecycle

- Latest feature date: 2017-12-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- certificate
- firewall
- iam
- identity
- permission
- policy
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server)
