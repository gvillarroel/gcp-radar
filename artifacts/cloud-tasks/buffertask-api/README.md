# BufferTask API

Product: Cloud Tasks
Feature slug: `buffertask-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Tasks provides the BufferTask method to create tasks by sending an HTTP request to a queue.

## Lifecycle

- Latest feature date: 2023-04-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication), [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks), [https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient))
- auth (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication), [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks), [https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient))
- authorization (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication), [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks), [https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient))
- credential (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication), [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks), [https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient))
- iam (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication), [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks), [https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient))
- permission (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication), [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks), [https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient))
- policy (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication), [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks), [https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient))
- private (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication), [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks), [https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient))
- token (evidence: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks), [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication), [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks), [https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient)
- [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication)
- [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks)
- [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks)
