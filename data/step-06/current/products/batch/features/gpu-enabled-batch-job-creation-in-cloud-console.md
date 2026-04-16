---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.650Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "GPU-enabled Batch job creation in Cloud Console"
feature_slug: "gpu-enabled-batch-job-creation-in-cloud-console"
latest_feature_date: "2025-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/batch/docs/troubleshooting"
  - "https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs.taskGroups.tasks/list"
keywords:
  - "enabled"
  - "console"
  - "creation"
---

# GPU-enabled Batch job creation in Cloud Console

Product: Batch
Coverage: MEDIUM

## Step 02 Summary

You can create Batch jobs that use GPUs from the Google Cloud console.

## Extended Definition

You can create Batch jobs that use GPUs from the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/troubleshooting](https://docs.cloud.google.com/batch/docs/troubleshooting)
- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs.taskGroups.tasks/list](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs.taskGroups.tasks/list)

## Supporting Pages

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- After you understand the fundamentals for job creation, consider creating a job that uses one or more of the following additional configuration options: Important: Some options for job creation are not available in the Google Cloud console.
- Job creation options Create and run a basic job explains the fundamentals, including how to define a runnable using either a script or container image and how to configure predefined and custom environment variables.
- If you leave these fields undefined (which isn't possible when creating a job using the Google Cloud console), Batch automatically tries to select compatible VMs and doesn't add any additional resources.
- Home Documentation Compute Compute Engine Batch Guides Send feedback Job creation and execution overview Stay organized with collections Save and categorize content based on your preferences.

### Troubleshooting \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/troubleshooting](https://docs.cloud.google.com/batch/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Otherwise, resolve the issue by doing the following: Ensure that the Monitoring API is enabled for your project: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Constraint violated for VM external IP addresses Issue The following issue appears in the statusEvents field for a failed job: Instance VM NAME creation failed: Constraint constraints/compute.vmExternalIpAccess violated for project PROJECT NUMBER .
- For more information about troubleshooting a job, also see the following documents: Known issues Analyze a job using logs View audit logs Job creation errors If you can't create a job, it might be due to one of the errors in this section.
- Constraint violated for trusted images Issue The following issue appears in the statusEvents field for a failed job: Instance VM NAME creation failed: Constraint constraints/compute.trustedImageProjects violated for project PROJECT ID .

### "Method: projects.locations.jobs.taskGroups.tasks.list \_|\_ Batch \_|\_\

- URL: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs.taskGroups.tasks/list](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs.taskGroups.tasks/list)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

