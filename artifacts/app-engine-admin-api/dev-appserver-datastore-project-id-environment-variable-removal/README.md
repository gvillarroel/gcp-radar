# dev_appserver DATASTORE_PROJECT_ID environment variable removal

Product: App Engine Admin API
Feature slug: `dev-appserver-datastore-project-id-environment-variable-removal`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine dev_appserver removed DATASTORE_PROJECT_ID from its environment, allowing it to run alongside the Cloud Datastore Emulator.

## Lifecycle

- Latest feature date: 2018-06-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- credential
- kms
- token

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
