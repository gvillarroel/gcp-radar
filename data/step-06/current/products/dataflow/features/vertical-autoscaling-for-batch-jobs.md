---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.815Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Vertical Autoscaling for batch jobs"
feature_slug: "vertical-autoscaling-for-batch-jobs"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
  - "https://docs.cloud.google.com/dataflow/docs/guides/jobs-list"
keywords:
  - "vertical"
  - "autoscaling"
  - "for"
  - "batch"
  - "jobs"
  - "automatically"
  - "adjusts"
  - "worker"
---

# Vertical Autoscaling for batch jobs

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Vertical Autoscaling automatically adjusts worker machine resources for batch jobs.

## Extended Definition

Vertical Autoscaling automatically adjusts worker machine resources for batch jobs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list)

## Supporting Pages

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Run small experiments for large jobs Before you run a large batch job, run one or more smaller jobs on a subset of the dataset.
- For more information about stragglers in batch jobs, see Troubleshoot stragglers in batch jobs .
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added new autoscaling metrics : Autoscaling rationale chart : explains the factors driving autoscaling decisions Worker CPU utilization chart : shows current user worker CPU utilization and customer autoscaling hint value Timer backlog per stage : shows an estimate of time needed to materialize the output for windows whose timer has expired Parallel processing : the number of keys available for parallel processing March 11, 2024 Feature You can now use committed use discounts (CUDs) with Dataflow streaming jobs.
- January 19, 2016 Change Changes to the runtime environment for batch jobs: Files uploaded with --filesToStage were previously downloaded to: /dataflow/packages on the workers.
- September 15, 2016 Change The default autoscaling ceiling for batch pipelines using the Cloud Dataflow SDK for Java 1.6 or newer has been raised to 10 worker VMs.
- March 28, 2023 Feature Vertical Autoscaling now supports batch jobs .

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .
- Vertical Autoscaling This feature automatically adjusts the memory available to the Dataflow worker VMs to fit the needs of the pipeline and help prevent out-of-memory errors.
- Dataflow Prime features The following is the list of supported Dataflow Prime features for different kinds of pipelines: Vertical Autoscaling (memory).
- For more information, see Vertical Autoscaling .

### Dataflow jobs list \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- The following is a sample output: ID NAME TYPE CREATION TIME STATE REGION 2015-06-03 16 39 22-4020553808241078833 wordcount-janedoe-0603233849 Batch 2015-06-03 16:39:22 Done us-central1 2015-06-03 16 38 28-4363652261786938862 wordcount-johndoe-0603233820 Batch 2015-06-03 16:38:28 Done us-central1 2015-05-21 16 24 11-17823098268333533078 bigquerytornadoes-johndoe-0521232402 Batch 2015-05-21 16:24:11 Done europe-west1 2015-05-21 13 38 06-16409850040969261121 bigquerytornadoes-johndoe-0521203801 Batch 2015-05-21 13:38:06 Done us-central1 2015-05-21 13 17 18-18349574013243942260 bigquerytornadoes-johndoe-0521201710 Batch 2015-05-21 13:17:18 Done europe-west1 2015-05-21 12 49 37-9791290545307959963 wordcount-johndoe-0521194928 Batch 2015-05-21 12:49:37 Done us-central1 2015-05-20 15 54 51-15905022415025455887 wordcount-johndoe-0520225444 Batch 2015-05-20 15:54:51 Failed us-central1 2015-05-20 15 47 02-14774624590029708464 wordcount-johndoe-0520224637 Batch 2015-05-20 15:47:02 Done us-central1 To display more information about a job, use the dataflow jobs describe command: gcloud dataflow jobs describe JOB ID Replace JOB ID with the job ID .
- In addition to the updated JobMetadata object, your API request must also include the updateMask query parameter in the request URL: https://dataflow.googleapis.com/v1b3/ [...] /jobs/ JOB ID / ?updateMask=job metadata.user display properties.archived Before using any of the request data, make the following replacements: PROJECT ID : your project ID REGION : a Dataflow region JOB ID : the ID of your Dataflow job HTTP method and URL: PUT https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived Request JSON body: { "job metadata": { "userDisplayProperties": { "archived": "false" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- In addition to the updated JobMetadata object, your API request must also include the updateMask query parameter in the request URL: https://dataflow.googleapis.com/v1b3/ [...] /jobs/ JOB ID / ?updateMask=job metadata.user display properties.archived Before using any of the request data, make the following replacements: PROJECT ID : your project ID REGION : a Dataflow region JOB ID : the ID of your Dataflow job HTTP method and URL: PUT https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived Request JSON body: { "job metadata": { "userDisplayProperties": { "archived": "true" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The Job details page is displayed, which contains the following information: Job graph : visual representation of your pipeline Execution details : tool to optimize your pipeline performance Job metrics : metrics about the running of your job Cost : metrics about the estimated cost of your job Autoscaling : metrics related to streaming job autoscaling events Job info panel : descriptive information about your pipeline Job logs : logs generated by the Dataflow service at the job level Worker logs : logs generated by the Dataflow service at the worker level Diagnostics : table showing where errors occurred along the chosen timeline and possible recommendations for your pipeline Data sampling : tool that lets you observe the data at each step of a pipeline Within the Job details page, you can switch your job view with the Job graph , Execution details , Job metrics , Cost , and Autoscaling tabs.

