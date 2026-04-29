# dev_appserver.py host header validation

Product: App Engine Admin API
Feature slug: `dev-appserver-py-host-header-validation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine dev_appserver.py now enforces Host header validation for incoming HTTP requests, with optional disabling via --enable_host_checking=false.

## Lifecycle

- Latest feature date: 2017-12-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- firewall

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/tools/using-local-server)
