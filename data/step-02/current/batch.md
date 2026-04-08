# Batch

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 29
Unique features: 25

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-03-10 | Batch job cancellation |  | Batch now supports general availability of job cancellation for running jobs; Canceling jobs became available in Preview for Batch. |
| 2025-01-07 | GPU-enabled Batch job creation in Cloud Console |  | You can create Batch jobs that use GPUs from the Google Cloud console. |
| 2024-11-14 | Batch dependent jobs |  | Dependent jobs enable you to schedule automated chains of Batch jobs to optimize multi-stage workflows. |
| 2024-10-28 | Batch Dynamic Workload Scheduler |  | Dynamic Workload Scheduler for Batch is available in Preview to improve resource availability for A3 GPU VM jobs. |
| 2024-08-13 | Batch CentOS image support | 2024-06-30 | The Batch CentOS (batch-centos) image family reached end of development and is deprecated; deprecated on 2024-06-30. |
| 2024-08-13 | Batch HPC CentOS image support | 2024-06-30 | The Batch HPC CentOS (batch-hpc-centos) image family reached end of development and is deprecated; deprecated on 2024-06-30. |
| 2024-06-17 | Automatic Ops Agent installation for Batch jobs |  | Batch jobs can be configured to automatically install the Ops Agent to provide additional Cloud Monitoring resource metrics. |
| 2024-04-03 | Batch task and runnable time limits |  | You can set maximum time limits (timeouts) for Batch tasks and runnables. |
| 2024-02-01 | Batch custom status events |  | Batch supports custom status events for runnables to provide richer job progress information. |
| 2024-02-01 | Batch non-root job execution |  | You can run Batch jobs as a non-root user to satisfy workload and security requirements. |
| 2024-02-01 | Batch task logs |  | Batch supports unstructured and structured task logs, including fields such as message, severity, custom fields, and custom status events. |
| 2023-12-21 | Batch Image streaming |  | Image streaming can be used to reduce Batch job startup latency by avoiding full container image download waits. |
| 2023-10-05 | Batch regional availability |  | Batch availability was expanded to the australia-southeast2, europe-west8, europe-west12, me-west1, northamerica-northeast2, southamerica-east1, and us-east5 regions; Batch became available in the europe-west10 (Berlin) region. |
| 2023-07-18 | VPC Service Controls support for Batch |  | Batch added general availability support for VPC Service Controls to protect Batch resources and data with service perimeters. |
| 2023-07-03 | Batch C++ code samples |  | Batch added C++ documentation samples covering job creation, storage volumes, VM instance templates, job and task listing/details, and job log viewing. |
| 2023-06-20 | Batch C++ client libraries |  | Cloud Client Libraries for C++ were made available for the Batch API. |
| 2023-05-17 | Batch API connector for Workflows |  | Batch added a preview connector for integrating Batch jobs into Workflows. |
| 2022-12-15 | Batch VPC Service Controls support |  | Batch supports VPC Service Controls, enabling perimeters to protect explicitly specified Google Cloud resources and data used by Batch. |
| 2022-10-21 | Batch Go code samples |  | Batch documentation now includes Go language code samples, including examples for basic container and script jobs and job management operations. |
| 2022-10-12 | Batch Java code samples |  | Batch documentation now includes Java language code samples, including examples for creating container/script jobs and listing, describing, and deleting jobs. |
| 2022-10-12 | Batch Node.js code samples |  | Batch documentation now includes Node.js language code samples, including examples for creating container/script jobs and listing, describing, and deleting jobs. |
| 2022-10-12 | Batch Python code samples |  | Batch documentation now includes Python language code samples, including examples for creating container/script jobs and listing, describing, and deleting jobs. |
| 2022-09-14 | Batch Data Access audit logs |  | Batch now provides Data Access audit logs in Preview, enabling auditing of data-access actions for Batch operations. |
| 2022-09-07 | Batch regional availability: asia-southeast1 |  | Batch became available in the asia-southeast1 region. |
| 2022-09-07 | Batch regional availability: europe-west6 |  | Batch became available in the europe-west6 region. |

Source file slug: `batch.md`

