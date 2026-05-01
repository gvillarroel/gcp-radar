# Batch

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T19:03:37.246Z`
Product status: `PASS`

## Summary

- Feature cards: 25
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 2 explicit, 0 derived, 23 unknown

## Service Card

- Service card ID: `batch:service`
- Latest feature date: 2025-03-10
- Official source links: 30
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Batch job cancellation | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)<br>[source](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient) |
| GPU-enabled Batch job creation in Cloud Console | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs.taskGroups.tasks/list)<br>[source](https://docs.cloud.google.com/batch/docs/troubleshooting) |
| Batch dependent jobs | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)<br>[source](https://docs.cloud.google.com/batch/docs/troubleshooting) |
| Batch Dynamic Workload Scheduler | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-basic-job)<br>[source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/locations) |
| Batch CentOS image support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-basic-job)<br>[source](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)<br>[source](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog) |
| Batch HPC CentOS image support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-basic-job)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Disk.Builder) |
| Automatic Ops Agent installation for Batch jobs | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/get-started)<br>[source](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)<br>[source](https://docs.cloud.google.com/batch/docs/troubleshooting) |
| Batch task and runnable time limits | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)<br>[source](https://docs.cloud.google.com/batch/docs/troubleshooting) |
| Batch custom status events | LOW | PASS | explicit | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs.taskGroups.tasks/get)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Batch non-root job execution | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)<br>[source](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog) |
| Batch task logs | LOW | PASS | unknown | [source](https://docs.cloud.google.com/iam/docs/apis)<br>[source](https://docs.cloud.google.com/iam/docs/full-resource-names)<br>[source](https://docs.cloud.google.com/iam/docs/retry-strategy) |
| Batch Image streaming | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)<br>[source](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog) |
| Batch regional availability | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/locations)<br>[source](https://docs.cloud.google.com/iam/docs/authentication) |
| VPC Service Controls support for Batch | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/resources)<br>[source](https://docs.cloud.google.com/batch/docs/troubleshooting) |
| Batch C++ code samples | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/samples)<br>[source](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog) |
| Batch C++ client libraries | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.pagers) |
| Batch API connector for Workflows | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-basic-job)<br>[source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs) |
| Batch VPC Service Controls support | LOW | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/iam/docs/resources)<br>[source](https://docs.cloud.google.com/iam/docs/roles-overview) |
| Batch Go code samples | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/analyze-job-using-logs)<br>[source](https://docs.cloud.google.com/batch/docs/create-run-basic-job)<br>[source](https://docs.cloud.google.com/batch/docs/samples) |
| Batch Java code samples | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-basic-job)<br>[source](https://docs.cloud.google.com/batch/docs/samples)<br>[source](https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1.AllocationPolicy.Builder) |
| Batch Node.js code samples | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs)<br>[source](https://docs.cloud.google.com/batch/docs/create-run-basic-job)<br>[source](https://docs.cloud.google.com/batch/docs/samples) |
| Batch Python code samples | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/samples)<br>[source](https://docs.cloud.google.com/python/docs/reference/batch/latest)<br>[source](https://docs.cloud.google.com/python/docs/reference/batch/latest/changelog) |
| Batch Data Access audit logs | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/iam/docs/overview)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval) |
| Batch regional availability: asia-southeast1 | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/locations)<br>[source](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes) |
| Batch regional availability: europe-west6 | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/batch/docs/create-run-basic-job)<br>[source](https://docs.cloud.google.com/batch/docs/create-run-job)<br>[source](https://docs.cloud.google.com/batch/docs/locations) |
