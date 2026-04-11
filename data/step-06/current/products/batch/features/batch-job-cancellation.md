---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:23:14.065Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch job cancellation"
feature_slug: "batch-job-cancellation"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs"
  - "https://docs.cloud.google.com/batch/docs/release-notes"
  - "https://docs.cloud.google.com/batch/docs/create-run-basic-job"
keywords:
  - "cancellation"
  - "general"
  - "availability"
  - "supports"
  - "of"
  - "now"
  - "job"
  - "batch"
---

# Batch job cancellation

Product: Batch
Coverage: LOW

## Step 02 Summary

Batch now supports general availability of job cancellation for running jobs; Canceling jobs became available in Preview for Batch.

## Extended Definition

Batch now supports general availability of job cancellation for running jobs; Canceling jobs became available in Preview for Batch.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)

## Supporting Pages

### REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about configuring Pub/Sub notifications for a job, see https://cloud.google.com/batch/docs/enable-notifications . message object ( Message ) The attribute requirements of messages to be sent to this Pub/Sub topic.
- Batch automatically applies predefined labels and supports multiple labels fields for each job, which each let you apply custom labels to various resources.
- Batch automatically applies predefined labels and supports multiple labels fields for each job, which each let you apply custom labels to various resources.
- Batch API now only supports booting from image. disks[] object ( AttachedDisk ) Non-boot disks to be attached for each VM created by this InstancePolicy.

### Batch release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Documentation has been updated to include the following samples: Create a basic container job Create a basic script job Create and run a job that uses storage volumes Define job resources using a VM instance template Delete a job View a list of your jobs View the details of a job View a list of a job's tasks View the details of a task View logs for a job For more information, see All Batch code samples .
- Information that was previously on that page has been relocated to the following new pages: Batch locations Authenticate to Batch Create and run a job View jobs and tasks Analyze a job using logs Delete a job September 07, 2022 Feature Batch is now available in the following regions: asia-southeast1 and europe-west6 .
- October 30, 2025 Change Dynamic Workload Scheduler for Batch ( Preview ) has been replaced with the following consumption options: Flex-start VMs ( Preview ) : We recommend Flex-start VMs if your job can withstand best-effort availability in exchange for discounted pricing and up to 7 days to finish running.
- December 20, 2023 Breaking Logs from Batch jobs created after December 19, 2023 will no longer use the general-purpose generic task monitored resource type and instead use the new batch.googleapis.com/Job monitored resource type.

### Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . #include "google/cloud/batch/v1/batch client.h" []( std :: string const & project id , std :: string const & location id , std :: string const & job id ) { // Initialize the request; start with the fields that depend on the sample // input. google :: cloud :: batch :: v1 :: CreateJobRequest request ; request . set parent ( "projects/" + project id + "/locations/" + location id ); request . set job id ( job id ); // Most of the job description is fixed in this example; use a string to // initialize it. auto constexpr kText = R " pb( task groups { task count: 4 task spec { compute resource { cpu milli: 500 memory mib: 16 } max retry count: 2 max run duration { seconds: 3600 } runnables { container { image uri: "gcr.io/google-containers/busybox" entrypoint: "/bin/sh" commands: "-c" commands: "echo Hello world!
- For more information, see Set up authentication for a local development environment . #include "google/cloud/batch/v1/batch client.h" []( std :: string const & project id , std :: string const & location id , std :: string const & job id ) { // Initialize the request; start with the fields that depend on the sample // input. google :: cloud :: batch :: v1 :: CreateJobRequest request ; request . set parent ( "projects/" + project id + "/locations/" + location id ); request . set job id ( job id ); // Most of the job description is fixed in this example; use a string to // initialize it. auto constexpr kText = R " pb( task groups { task count: 4 task spec { compute resource { cpu milli: 500 memory mib: 16 } max retry count: 2 max run duration { seconds: 3600 } runnables { script { text: "echo Hello world!
- This job has a total of ${BATCH TASK COUNT} tasks." } } } } allocation policy { instances { policy { machine type: "e2-standard-4" provisioning model: STANDARD } } } labels { key: "env" value: "testing" } labels { key: "type" value: "container" } logs policy { destination: CLOUD LOGGING } )pb " ; auto job = request . mutable job (); if ( ! google :: protobuf :: TextFormat :: ParseFromString ( kText , job )) { throw std :: runtime error ( "Error parsing Job description" ); } // Create a client and issue the request. auto client = google :: cloud :: batch v1 :: BatchServiceClient ( google :: cloud :: batch v1 :: MakeBatchServiceConnection ()); auto response = client .
- This job has a total of ${BATCH TASK COUNT} tasks." } } } } allocation policy { instances { policy { machine type: "e2-standard-4" provisioning model: STANDARD } } } labels { key: "env" value: "testing" } labels { key: "type" value: "script" } logs policy { destination: CLOUD LOGGING } )pb " ; auto job = request . mutable job (); if ( ! google :: protobuf :: TextFormat :: ParseFromString ( kText , job )) { throw std :: runtime error ( "Error parsing Job description" ); } // Create a client and issue the request. auto client = google :: cloud :: batch v1 :: BatchServiceClient ( google :: cloud :: batch v1 :: MakeBatchServiceConnection ()); auto response = client .

