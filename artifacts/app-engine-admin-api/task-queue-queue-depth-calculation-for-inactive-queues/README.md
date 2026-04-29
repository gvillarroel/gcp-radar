# Task Queue queue depth calculation for inactive queues

Product: App Engine Admin API
Feature slug: `task-queue-queue-depth-calculation-for-inactive-queues`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine Task Queue stops calculating and storing queue depth for non-existent or deleting queues and during queue table outages.

## Lifecycle

- Latest feature date: 2015-11-30
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
- logging
- private

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
