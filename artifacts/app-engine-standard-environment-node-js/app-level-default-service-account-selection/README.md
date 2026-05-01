# App-level default service account selection

Product: App Engine standard environment Node.js
Feature slug: `app-level-default-service-account-selection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine can use any configured service account in the project as the app-level default service account during application creation and updates.

## Lifecycle

- Latest feature date: 2022-12-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- certificate
- credential
- firewall
- iam
- logging
- permission
- policy

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
