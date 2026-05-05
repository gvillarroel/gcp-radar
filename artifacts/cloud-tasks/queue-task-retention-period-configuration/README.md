# Queue task retention period configuration

Product: Cloud Tasks
Feature slug: `queue-task-retention-period-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Tasks lets queues configure the maximum retention time for tasks with the taskTtl field.

## Lifecycle

- Latest feature date: 2021-01-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks](https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse))
- auth (evidence: [https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks](https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse))
- authorization (evidence: [https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks](https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse))
- token (evidence: [https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks](https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage), [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse))

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse)
- [https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks](https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks)
