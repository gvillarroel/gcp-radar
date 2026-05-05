# User-managed service account per version

Product: App Engine standard environment Ruby
Feature slug: `user-managed-service-account-per-version`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

User-managed service account per version lets you assign a specific service account to each deployed App Engine version; User-managed service account per version lets you assign a specific service account to each deployed App Engine version.

## Lifecycle

- Latest feature date: 2022-05-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control](https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control), [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control](https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control), [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts))
- identity (evidence: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control](https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control), [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts))
- permission (evidence: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control](https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control), [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control](https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control), [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control](https://docs.cloud.google.com/appengine/docs/standard/ruby/access-control)
