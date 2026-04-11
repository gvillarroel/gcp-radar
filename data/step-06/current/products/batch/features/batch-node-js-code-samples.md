---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:23:14.086Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch Node.js code samples"
feature_slug: "batch-node-js-code-samples"
latest_feature_date: "2022-10-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/create-run-basic-job"
  - "https://docs.cloud.google.com/batch/docs/release-notes"
  - "https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs"
keywords:
  - "node"
  - "js"
  - "documentation"
  - "includes"
  - "samples"
  - "code"
  - "now"
  - "batch"
---

# Batch Node.js code samples

Product: Batch
Coverage: LOW

## Step 02 Summary

Batch documentation now includes Node.js language code samples, including examples for creating container/script jobs and listing, describing, and deleting jobs.

## Extended Definition

Batch documentation now includes Node.js language code samples, including examples for creating container/script jobs and listing, describing, and deleting jobs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)

## Supporting Pages

### Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MINUTES ); System . out . printf ( "Successfully created the job: %s" , result . getName ()); } } } Node.js Node.js For more information, see the Batch Node.js API reference documentation .
- MINUTES ); System . out . printf ( "Successfully created the job: %s" , result . getName ()); } } } Node.js Node.js For more information, see the Batch Node.js API reference documentation .
- CreateJob ( request ); if ( ! response ) throw std :: move ( response ). status (); std :: cout << "Job : " << response - > DebugString () << " \n " ; } Create a basic script job You can create a basic script job using the Google Cloud console, gcloud CLI, Batch API, Go, Java, Node.js, Python, or C++.
- You can create a basic container job using the Google Cloud console, gcloud CLI, Batch API, Go, Java, Node.js, Python, or C++.

### Batch release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following samples are available in Go, Node.js, and Python: Create and submit a job using a VM instance template Create and submit a job that uses a Cloud Storage bucket List tasks Describe a task The following sample is available in Go and Python: View logs from Cloud Logging for a job For more information, see All Batch code samples .
- Documentation has been updated to include the following samples: Create a basic container job Create a basic script job Create and run a job that uses storage volumes Define job resources using a VM instance template Delete a job View a list of your jobs View the details of a job View a list of a job's tasks View the details of a task View logs for a job For more information, see All Batch code samples .
- Documentation has been updated to include the following samples: Create a basic container job Create a basic script job List jobs Describe a job Delete a job For more information, see All Batch code samples .
- Documentation has been updated to include the following samples: Create a basic container job Create a basic script job List jobs Describe a job Delete a job For more information, see All Batch code samples .

### REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Job JSON representation TaskGroup JSON representation TaskSpec JSON representation Runnable JSON representation Container JSON representation Script JSON representation Barrier JSON representation Environment JSON representation KMSEnvMap JSON representation ComputeResource JSON representation LifecyclePolicy JSON representation Action ActionCondition JSON representation Volume JSON representation NFS JSON representation GCS JSON representation SchedulingPolicy AllocationPolicy JSON representation LocationPolicy JSON representation InstancePolicyOrTemplate JSON representation InstancePolicy JSON representation ProvisioningModel Accelerator JSON representation Disk JSON representation AttachedDisk JSON representation ServiceAccount JSON representation NetworkPolicy JSON representation NetworkInterface JSON representation PlacementPolicy JSON representation JobStatus JSON representation State TaskGroupStatus JSON representation InstanceStatus JSON representation LogsPolicy JSON representation Destination CloudLoggingOption JSON representation JobNotification JSON representation Message JSON representation Type Methods Resource: Job The Cloud Batch Job description.
- JSON representation { "installGpuDrivers" : boolean , "installOpsAgent" : boolean , "blockProjectSshKeys" : boolean , // Union field policy template can be only one of the following: "policy" : { object ( InstancePolicy ) } , "instanceTemplate" : string // End of list of possible types for union field policy template . } Fields installGpuDrivers boolean Set this field true if you want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instanceTemplate on your behalf.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-19 UTC."],[],[]]
- Tasks get a BATCH TASK INDEX and BATCH TASK COUNT environment variable, in addition to any environment variables set in taskEnvironments, specifying the number of Tasks in the Task's parent TaskGroup, and the specific Task's index in the TaskGroup (0 through BATCH TASK COUNT - 1). taskCountPerNode string ( int64 format) Max number of tasks that can be run on a VM at the same time.

