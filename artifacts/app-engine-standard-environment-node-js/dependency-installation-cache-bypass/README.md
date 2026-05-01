# Dependency installation cache bypass

Product: App Engine standard environment Node.js
Feature slug: `dependency-installation-cache-bypass`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

A deployment flag can force Node.js dependencies to be reinstalled instead of using the build cache.

## Lifecycle

- Latest feature date: 2018-09-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- constraint
- iam
- logging
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app](https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies)
