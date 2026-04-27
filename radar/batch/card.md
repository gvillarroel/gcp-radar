# Batch

- Product slug: `batch`
- Product status: `PASS` in Step 07
- Source rows considered: `29`
- Release-note features discovered: `25`
- Corpus-backed feature definitions: `25`
- Step 07 warnings: `0`
- Step 07 failures: `0`

## Product summary

Batch is a fully managed Google Cloud service for scheduling, queueing, and executing batch-processing workloads on Google Cloud resources. Batch jobs run on regional managed instance groups, can use GPUs and external storage, and integrate with Cloud Logging, Pub/Sub notifications, Secret Manager, Workflows, and VPC Service Controls.

## Evidence-backed capability summary

- Job lifecycle management: create, queue, schedule, run, cancel, analyze, and delete jobs.
- Resource customization: per-task CPU and memory, VM policies, machine types, boot disks, GPUs, and storage volumes.
- Runtime controls: dependent jobs, timeouts, non-root execution, image streaming, and Dynamic Workload Scheduler support.
- Observability: Cloud Logging integration, task logs, custom status events, Pub/Sub status notifications, and Ops Agent metrics.
- Security posture: custom service accounts, Secret Manager integration, and VPC Service Controls support.

## IAM model

Batch documentation exposes product IAM at the service level, not per feature. The feature-to-role mapping in [`features-1.md`](/C:/Users/villa/.codex/worktrees/1df2/gcp-radar/radar/batch/features-1.md) therefore uses the narrowest role set that is directly supported by official Batch setup guidance and the official Batch IAM role catalog.

Core roles repeatedly referenced by the official docs:

- `roles/batch.jobsEditor`: create, update, cancel, and delete Batch jobs.
- `roles/batch.jobsViewer`: list and inspect jobs, task groups, and tasks.
- `roles/iam.serviceAccountUser`: use the job service account when submitting jobs.
- `roles/batch.agentReporter`: required on service accounts used by Batch jobs.
- `roles/logging.viewer`: view Batch job logs in Cloud Logging.
- `roles/logging.logWriter`: allow job service accounts to write Cloud Logging entries.
- `roles/batch.serviceAgent`: automatically granted to the Google-managed Batch service agent.

## Report scope

This product card summarizes the product and the first feature page focuses on the operational features with the clearest current documentation and IAM implications. Regional rollout notes and language-sample announcements remain covered in Step 02 and Step 06, but are lower priority for the first radar feature page.

## Primary sources

- [Get started with Batch](https://docs.cloud.google.com/batch/docs/get-started)
- [Job creation and execution overview](https://docs.cloud.google.com/batch/docs/create-run-job)
- [Batch roles and permissions](https://docs.cloud.google.com/iam/docs/roles-permissions/batch)
- [Analyze a job using logs](https://docs.cloud.google.com/batch/docs/analyze-job-using-logs)
- [Batch locations](https://docs.cloud.google.com/batch/docs/locations)
