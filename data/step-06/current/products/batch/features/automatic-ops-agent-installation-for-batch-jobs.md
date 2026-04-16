---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.652Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Automatic Ops Agent installation for Batch jobs"
feature_slug: "automatic-ops-agent-installation-for-batch-jobs"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs"
  - "https://docs.cloud.google.com/batch/docs/troubleshooting"
  - "https://docs.cloud.google.com/batch/docs/get-started"
keywords:
  - "installation"
  - "configured"
  - "automatic"
  - "agent"
  - "jobs"
---

# Automatic Ops Agent installation for Batch jobs

Product: Batch
Coverage: MEDIUM

## Step 02 Summary

Batch jobs can be configured to automatically install the Ops Agent to provide additional Cloud Monitoring resource metrics.

## Extended Definition

Batch jobs can be configured to automatically install the Ops Agent to provide additional Cloud Monitoring resource metrics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/batch/docs/troubleshooting](https://docs.cloud.google.com/batch/docs/troubleshooting)
- [https://docs.cloud.google.com/batch/docs/get-started](https://docs.cloud.google.com/batch/docs/get-started)

## Supporting Pages

### REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Logs include information that is automatically written by the Batch service agent and any information that you configured the job's runnables to write to the stdout or stderr streams.
- For non Container-Optimized Image cases, following https://github.com/GoogleCloudPlatform/compute-gpu-installation/blob/main/linux/install gpu driver.py . installOpsAgent boolean Optional.
- Resource: Job JSON representation TaskGroup JSON representation TaskSpec JSON representation Runnable JSON representation Container JSON representation Script JSON representation Barrier JSON representation Environment JSON representation KMSEnvMap JSON representation ComputeResource JSON representation LifecyclePolicy JSON representation Action ActionCondition JSON representation Volume JSON representation NFS JSON representation GCS JSON representation SchedulingPolicy AllocationPolicy JSON representation LocationPolicy JSON representation InstancePolicyOrTemplate JSON representation InstancePolicy JSON representation ProvisioningModel Accelerator JSON representation Disk JSON representation AttachedDisk JSON representation ServiceAccount JSON representation NetworkPolicy JSON representation NetworkInterface JSON representation PlacementPolicy JSON representation JobStatus JSON representation State TaskGroupStatus JSON representation InstanceStatus JSON representation LogsPolicy JSON representation Destination CloudLoggingOption JSON representation JobNotification JSON representation Message JSON representation Type Methods Resource: Job The Cloud Batch Job description.
- JSON representation { "installGpuDrivers" : boolean , "installOpsAgent" : boolean , "blockProjectSshKeys" : boolean , // Union field policy template can be only one of the following: "policy" : { object ( InstancePolicy ) } , "instanceTemplate" : string // End of list of possible types for union field policy template . } Fields installGpuDrivers boolean Set this field true if you want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instanceTemplate on your behalf.

### Troubleshooting \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/troubleshooting](https://docs.cloud.google.com/batch/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Although it's possible to install the Ops Agent manually in a runnable, the recommended method is to automatically install the Ops Agent by setting the installOpsAgent field to true .
- Logs from Batch jobs can't appear if you have configured exclusion filters for Cloud Logging that cause logs from Batch jobs to be excluded.
- Cloud Logging was configured to automatically exclude the job's logs.
- Solution To resolve the issue, recreate the job and specify the network by using one of the following options: VM instance template: If you want to use a VM instance template while creating this job , you must specify the network in the VM instance template. network and subnetwork fields : These fields can be used in the request body when you create a job using the Batch API or in the JSON configuration file when you create a job using the gcloud CLI. --network and --subnetwork flags : These flags can be used with the gcloud batch jobs submit command when you create a job using the gcloud CLI.

### Get started with Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/get-started](https://docs.cloud.google.com/batch/docs/get-started)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Make sure you are familiar with your project's Batch service agent: After you create a Batch job, the Batch service agent is automatically created for your project with the following name: service- PROJECT NUMBER @gcp-sa-cloudbatch.iam.gserviceaccount.com Replace PROJECT NUMBER with the project number of your project.
- Batch Agent Reporter ( roles/batch.agentReporter ) on the project To let jobs generate logs in Cloud Logging: Logs Writer ( roles/logging.logWriter ) on the project The service account that you use for a job might also require additional roles based on the configuration options that you want to use for your jobs.
- Consequently, any permissions that are granted to your Batch service agent can be used by any principal (user or service account) in the project that has permissions to create Batch jobs whenever the principal is creating a Batch job.
- In summary, Batch lets you create and run jobs that each automatically provision and utilize the resources required to execute its tasks.

