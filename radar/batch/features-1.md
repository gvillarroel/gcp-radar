# Batch features 1

This page prioritizes Batch features whose current Google documentation gives the clearest operational and IAM guidance.

IAM note: Google does not publish feature-specific IAM prerequisites for every Batch subfeature. The role mappings below are conservative inferences from the official Batch setup guide, the official Batch IAM role catalog, and the feature documentation linked in each row.

## Role legend

- `BJE`: `roles/batch.jobsEditor`
- `BJV`: `roles/batch.jobsViewer`
- `SAU`: `roles/iam.serviceAccountUser`
- `BAR`: `roles/batch.agentReporter`
- `LV`: `roles/logging.viewer`
- `LW`: `roles/logging.logWriter`

## Features

| Feature | Latest date | Feature status | Recommended IAM roles | Why these roles | Evidence |
| --- | --- | --- | --- | --- | --- |
| Batch job cancellation | 2025-03-10 | Step 07 `PASS` | `BJE`, `SAU`, `BAR` | Cancellation is part of job control-plane management; Batch job submission and later mutation depend on job-editor access plus the job service account prerequisites. | [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job), [Batch roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/batch) |
| GPU-enabled Batch job creation in Cloud Console | 2025-01-07 | Step 07 `PASS` | `BJE`, `SAU`, `BAR` | Creating GPU-backed jobs is still ordinary job creation from the Batch perspective. | [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job), [Get started with Batch](https://docs.cloud.google.com/batch/docs/get-started) |
| Batch dependent jobs | 2024-11-14 | Step 07 `PASS` | `BJE`, `SAU`, `BAR`, `BJV` | Creating dependency chains requires job creation privileges; inspecting predecessor and dependent job state benefits from viewer access. | [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job), [Batch roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/batch) |
| Batch Dynamic Workload Scheduler | 2024-10-28 | Step 07 `PASS` | `BJE`, `SAU`, `BAR` | The feature is surfaced as a job-placement and resource-availability option when creating jobs that use GPUs. | [Batch locations](https://docs.cloud.google.com/batch/docs/locations), [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job) |
| Batch CentOS image support | 2024-08-13 | Deprecated on 2024-06-30 | `BJE`, `SAU`, `BAR` | Selecting an OS image is part of the VM resource policy for a job. | [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job), [Batch roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/batch) |
| Batch HPC CentOS image support | 2024-08-13 | Deprecated on 2024-06-30 | `BJE`, `SAU`, `BAR` | HPC CentOS image selection is part of the same job resource definition path as other VM image choices. | [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job), [Batch roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/batch) |
| Automatic Ops Agent installation for Batch jobs | 2024-06-17 | Step 07 `PASS` | `BJE`, `SAU`, `BAR` | Ops Agent enablement is configured on the job definition; the setup guidance keeps the same submission prerequisites. | [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job), [Get started with Batch](https://docs.cloud.google.com/batch/docs/get-started) |
| Batch task and runnable time limits | 2024-04-03 | Step 07 `PASS` | `BJE`, `SAU`, `BAR` | Timeouts are task and runnable configuration fields inside job creation. | [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job), [Batch roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/batch) |
| Batch custom status events | 2024-02-01 | Step 07 `PASS` | `BJE`, `SAU`, `BAR`, `BJV` | The feature is configured in runnables and then inspected through job history and status events. | [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job), [Batch roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/batch) |
| Batch non-root job execution | 2024-02-01 | Step 07 `PASS` | `BJE`, `SAU`, `BAR` | Running as non-root is a job runtime option, so the IAM requirement stays in the job-submission path. | [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job), [Get started with Batch](https://docs.cloud.google.com/batch/docs/get-started) |
| Batch task logs | 2024-02-01 | Step 07 `PASS` | `BJE`, `SAU`, `BAR`, `LW`, `LV` | Job creation is needed to enable logging, the job service account needs log-writing capability, and operators need log-viewing capability to inspect results. | [Analyze a job using logs](https://docs.cloud.google.com/batch/docs/analyze-job-using-logs), [Get started with Batch](https://docs.cloud.google.com/batch/docs/get-started) |
| Batch Image streaming | 2023-12-21 | Step 07 `PASS` | `BJE`, `SAU`, `BAR` | Image streaming is a job-startup optimization for containerized workloads and is configured on the job path. | [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job), [Batch roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/batch) |
| VPC Service Controls support for Batch | 2023-07-18 | Step 07 `PASS` | `BJE`, `SAU`, `BAR` | The Batch docs position VPC Service Controls as a networking and data-protection option for Batch jobs; the Batch-side operation still starts with job creation. | [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job), [Get started with Batch](https://docs.cloud.google.com/batch/docs/get-started) |

## Source basis for the IAM mappings

- Batch setup guidance identifies `roles/batch.jobsEditor`, `roles/batch.jobsViewer`, `roles/iam.serviceAccountUser`, `roles/batch.agentReporter`, and `roles/logging.viewer` as recurring roles for creating, observing, and troubleshooting jobs.
- The official Batch IAM catalog confirms the service-level role families exposed by Batch itself: administrator, job editor, job viewer, resource allowance editor, resource allowance viewer, agent reporter, and the Google-managed service agent role.
