# Datastore Transaction.rollback exception handling

Product: App Engine standard environment Java
Feature slug: `datastore-transaction-rollback-exception-handling`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The low-level Datastore API logs an INFO message instead of throwing an exception when rollback follows a failed transaction operation.

## Lifecycle

- Latest feature date: 2016-02-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- key
- logging
- role

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
