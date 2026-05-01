# Cloud Tasks

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T09:08:27.871Z`
Product status: `PASS`

## Summary

- Feature cards: 12
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 7 explicit, 0 derived, 5 unknown

## Service Card

- Service card ID: `cloud-tasks:service`
- Latest feature date: 2025-01-06
- Official source links: 19
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| CMEK organization policy constraints integration | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient) |
| Customer-managed encryption keys | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Cloud Asset Inventory support | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient) |
| BufferTask API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient)<br>[source](https://docs.cloud.google.com/tasks/docs/authentication)<br>[source](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks) |
| Queue-level HTTP target routing | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/tasks/docs/add-task-queue)<br>[source](https://docs.cloud.google.com/tasks/docs/configuring-queues)<br>[source](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks) |
| Resource location organization policy support | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient) |
| VPC Service Controls support | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Internal ingress to Cloud Run and Cloud Functions | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/tasks/docs/deleting-appengine-queues-and-tasks) |
| Regional availability | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.pagers.ListTasksAsyncPager) |
| Queue task retention period configuration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse) |
| Queue tombstone retention period configuration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesFixedSizeCollection)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPage)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient.ListQueuesPagedResponse) |
| HTTP targets | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.CloudTasksClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.services.cloud_tasks.CloudTasksClient) |
