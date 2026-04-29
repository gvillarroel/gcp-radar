# Default deduplication headers for HTTP and App Engine targets

Product: Cloud Scheduler
Feature slug: `default-deduplication-headers-for-http-and-app-engine-targets`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Scheduler adds the X-CloudScheduler-JobName and X-CloudScheduler-ScheduleTime headers by default for AppEngineHttpTarget and HttpTarget requests.

## Lifecycle

- Latest feature date: 2021-02-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- identity
- key
- permission
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTarget.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.AppEngineHttpTargetOrBuilder)
- [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget)
