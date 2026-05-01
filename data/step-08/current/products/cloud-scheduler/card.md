# Cloud Scheduler

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T19:03:41.420Z`
Product status: `PASS`

## Summary

- Feature cards: 10
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 6 explicit, 0 derived, 4 unknown

## Service Card

- Service card ID: `cloud-scheduler:service`
- Latest feature date: 2023-08-18
- Official source links: 16
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| VPC Service Controls support for Cloud Scheduler jobs targeting Cloud Functions | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/scheduler/docs/creating)<br>[source](https://docs.cloud.google.com/scheduler/docs/reference/rest/v1/projects.locations.jobs) |
| VPC Service Controls support for Cloud Scheduler jobs targeting Cloud Run | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient)<br>[source](https://docs.cloud.google.com/scheduler/docs/creating) |
| VPC Service Controls support for Cloud Scheduler jobs targeting Data Pipelines | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient)<br>[source](https://docs.cloud.google.com/scheduler/docs/creating) |
| VPC Service Controls support for Cloud Scheduler jobs targeting Dataflow API | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerClient.ListJobsPage) |
| VPC Service Controls support for Cloud Scheduler | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient) |
| Editing paused Cloud Scheduler jobs | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient) |
| HTTP and App Engine target headers in Cloud Scheduler Console | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder) |
| Pub/Sub target message attributes in Cloud Scheduler Console | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/scheduler/docs/creating)<br>[source](https://docs.cloud.google.com/scheduler/docs/start-and-stop-compute-engine-instances-on-a-schedule) |
| Retry configuration in Cloud Scheduler Console | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerGrpc.CloudSchedulerBlockingStub)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient) |
| Default deduplication headers for HTTP and App Engine targets | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder) |
