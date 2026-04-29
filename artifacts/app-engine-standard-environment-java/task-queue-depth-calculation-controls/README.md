# Task queue depth calculation controls

Product: App Engine standard environment Java
Feature slug: `task-queue-depth-calculation-controls`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Task Queue avoids calculating and storing queue depth for non-existent or deleting queues and during queue table outages.

## Lifecycle

- Latest feature date: 2015-12-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
