# Task Queue retry_limit zero behavior

Product: App Engine standard environment Python
Feature slug: `task-queue-retry-limit-zero-behavior`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Tasks in queues configured with a retry_limit of zero are no longer retried after failure.

## Lifecycle

- Latest feature date: 2015-08-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- logging (evidence: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas), [https://cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://cloud.google.com/appengine/docs/standard/create-appengine-tasks), [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks))

## Official Evidence

- [https://cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
