# Queue-level HTTP target routing

Product: Cloud Tasks
Feature slug: `queue-level-http-target-routing`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Tasks lets queues define routing for HTTP target tasks so individual tasks do not need routing configuration.

## Lifecycle

- Latest feature date: 2023-04-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/configuring-queues](https://docs.cloud.google.com/tasks/docs/configuring-queues), [https://docs.cloud.google.com/tasks/docs/add-task-queue](https://docs.cloud.google.com/tasks/docs/add-task-queue), [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues))
- auth (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/configuring-queues](https://docs.cloud.google.com/tasks/docs/configuring-queues), [https://docs.cloud.google.com/tasks/docs/add-task-queue](https://docs.cloud.google.com/tasks/docs/add-task-queue), [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues))
- authorization (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/configuring-queues](https://docs.cloud.google.com/tasks/docs/configuring-queues), [https://docs.cloud.google.com/tasks/docs/add-task-queue](https://docs.cloud.google.com/tasks/docs/add-task-queue), [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues))
- iam (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/configuring-queues](https://docs.cloud.google.com/tasks/docs/configuring-queues), [https://docs.cloud.google.com/tasks/docs/add-task-queue](https://docs.cloud.google.com/tasks/docs/add-task-queue), [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues))
- logging (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/configuring-queues](https://docs.cloud.google.com/tasks/docs/configuring-queues), [https://docs.cloud.google.com/tasks/docs/add-task-queue](https://docs.cloud.google.com/tasks/docs/add-task-queue), [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues))
- private (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/configuring-queues](https://docs.cloud.google.com/tasks/docs/configuring-queues), [https://docs.cloud.google.com/tasks/docs/add-task-queue](https://docs.cloud.google.com/tasks/docs/add-task-queue), [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues))
- token (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/configuring-queues](https://docs.cloud.google.com/tasks/docs/configuring-queues), [https://docs.cloud.google.com/tasks/docs/add-task-queue](https://docs.cloud.google.com/tasks/docs/add-task-queue), [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues))

## Official Evidence

- [https://docs.cloud.google.com/tasks/docs/add-task-queue](https://docs.cloud.google.com/tasks/docs/add-task-queue)
- [https://docs.cloud.google.com/tasks/docs/configuring-queues](https://docs.cloud.google.com/tasks/docs/configuring-queues)
- [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks)
- [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues)
