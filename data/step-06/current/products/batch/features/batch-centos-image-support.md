---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:23:14.069Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch CentOS image support"
feature_slug: "batch-centos-image-support"
latest_feature_date: "2024-08-13"
deprecation_date: "2024-06-30"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/release-notes"
  - "https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs"
  - "https://docs.cloud.google.com/batch/docs/create-run-basic-job"
keywords:
  - "reached"
  - "centos"
  - "family"
  - "end"
  - "image"
  - "of"
  - "the"
  - "batch"
---

# Batch CentOS image support

Product: Batch
Coverage: LOW

## Step 02 Summary

The Batch CentOS (batch-centos) image family reached end of development and is deprecated; deprecated on 2024-06-30.

## Extended Definition

The Batch CentOS (batch-centos) image family reached end of development and is deprecated; deprecated on 2024-06-30.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)

## Supporting Pages

### Batch release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated Batch CentOS ( batch-centos ) and Batch HPC CentOS ( batch-hpc-centos ) have reached end of development due to the end of support (EOS) of Compute Engine CentOS 7 images on June 30, 2024 .
- The final image versions of these Batch OSes— batch-centos-7-official-20240628-00-p00 and batch-hpc-centos-7-official-20240628-00-p00 from June 28, 2024—are only supported until August 27, 2024.
- This restriction only applies to Batch OSes that have not already reached the end of development as of the date of this notice.
- Documentation has been updated to include the following samples: Create a basic container job Create a basic script job Create and run a job that uses storage volumes Define job resources using a VM instance template Delete a job View a list of your jobs View the details of a job View a list of a job's tasks View the details of a task View logs for a job For more information, see All Batch code samples .

### REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs](https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "installGpuDrivers" : boolean , "installOpsAgent" : boolean , "blockProjectSshKeys" : boolean , // Union field policy template can be only one of the following: "policy" : { object ( InstancePolicy ) } , "instanceTemplate" : string // End of list of possible types for union field policy template . } Fields installGpuDrivers boolean Set this field true if you want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instanceTemplate on your behalf.
- JSON representation { "type" : string , "sizeGb" : string , "diskInterface" : string , // Union field data source can be only one of the following: "image" : string , "snapshot" : string // End of list of possible types for union field data source . } Fields type string Disk type as shown in gcloud compute disk-types list .
- For example, the following are all valid URLs: Specify the image by its family name: projects/{project}/global/images/family/{image family} Specify the image version: projects/{project}/global/images/{imageVersion} You can also use Batch customized image in short names.
- The following image values are supported for a boot disk: batch-debian : use Batch Debian images. batch-cos : use Batch Container-Optimized images. batch-hpc-rocky : use Batch HPC Rocky Linux images. snapshot string Name of a snapshot used as the data source.

### Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . #include "google/cloud/batch/v1/batch client.h" []( std :: string const & project id , std :: string const & location id , std :: string const & job id ) { // Initialize the request; start with the fields that depend on the sample // input. google :: cloud :: batch :: v1 :: CreateJobRequest request ; request . set parent ( "projects/" + project id + "/locations/" + location id ); request . set job id ( job id ); // Most of the job description is fixed in this example; use a string to // initialize it. auto constexpr kText = R " pb( task groups { task count: 4 task spec { compute resource { cpu milli: 500 memory mib: 16 } max retry count: 2 max run duration { seconds: 3600 } runnables { container { image uri: "gcr.io/google-containers/busybox" entrypoint: "/bin/sh" commands: "-c" commands: "echo Hello world!
- For more information, see Set up authentication for a local development environment . #include "google/cloud/batch/v1/batch client.h" []( std :: string const & project id , std :: string const & location id , std :: string const & job id ) { // Initialize the request; start with the fields that depend on the sample // input. google :: cloud :: batch :: v1 :: CreateJobRequest request ; request . set parent ( "projects/" + project id + "/locations/" + location id ); request . set job id ( job id ); // Most of the job description is fixed in this example; use a string to // initialize it. auto constexpr kText = R " pb( task groups { task count: 4 task spec { compute resource { cpu milli: 500 memory mib: 16 } max retry count: 2 max run duration { seconds: 3600 } runnables { script { text: "echo Hello world!
- This job has a total of ${BATCH TASK COUNT} tasks." } } } } allocation policy { instances { policy { machine type: "e2-standard-4" provisioning model: STANDARD } } } labels { key: "env" value: "testing" } labels { key: "type" value: "container" } logs policy { destination: CLOUD LOGGING } )pb " ; auto job = request . mutable job (); if ( ! google :: protobuf :: TextFormat :: ParseFromString ( kText , job )) { throw std :: runtime error ( "Error parsing Job description" ); } // Create a client and issue the request. auto client = google :: cloud :: batch v1 :: BatchServiceClient ( google :: cloud :: batch v1 :: MakeBatchServiceConnection ()); auto response = client .
- This job has a total of ${BATCH TASK COUNT} tasks." } } } } allocation policy { instances { policy { machine type: "e2-standard-4" provisioning model: STANDARD } } } labels { key: "env" value: "testing" } labels { key: "type" value: "script" } logs policy { destination: CLOUD LOGGING } )pb " ; auto job = request . mutable job (); if ( ! google :: protobuf :: TextFormat :: ParseFromString ( kText , job )) { throw std :: runtime error ( "Error parsing Job description" ); } // Create a client and issue the request. auto client = google :: cloud :: batch v1 :: BatchServiceClient ( google :: cloud :: batch v1 :: MakeBatchServiceConnection ()); auto response = client .

