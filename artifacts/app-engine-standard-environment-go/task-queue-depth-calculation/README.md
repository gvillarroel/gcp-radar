# Task Queue depth calculation

Product: App Engine standard environment Go
Feature slug: `task-queue-depth-calculation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Task Queue depth calculation now skips non-existent queues, queues marked for deletion, and queue table outage scenarios.

## Lifecycle

- Latest feature date: 2015-11-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- logging

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
