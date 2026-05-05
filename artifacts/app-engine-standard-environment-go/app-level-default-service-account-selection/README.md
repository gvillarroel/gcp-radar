# App-level default service account selection

Product: App Engine standard environment Go
Feature slug: `app-level-default-service-account-selection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine applications can use any configured project service account as the app-level default service account during creation and updates.

## Lifecycle

- Latest feature date: 2022-12-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/default-service-account](https://docs.cloud.google.com/appengine/docs/standard/default-service-account), [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts), [https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/standard/default-service-account](https://docs.cloud.google.com/appengine/docs/standard/default-service-account), [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts), [https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/standard/default-service-account](https://docs.cloud.google.com/appengine/docs/standard/default-service-account), [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts), [https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/default-service-account](https://docs.cloud.google.com/appengine/docs/standard/default-service-account)
- [https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts)
