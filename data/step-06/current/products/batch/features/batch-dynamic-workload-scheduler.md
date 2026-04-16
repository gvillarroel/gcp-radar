---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:52:59.651Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch Dynamic Workload Scheduler"
feature_slug: "batch-dynamic-workload-scheduler"
latest_feature_date: "2024-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/batch/docs/locations"
  - "https://docs.cloud.google.com/batch/docs/create-run-job"
  - "https://docs.cloud.google.com/batch/docs/create-run-basic-job"
keywords:
  - "scheduler"
  - "dynamic"
  - "improve"
  - "workload"
  - "resource"
  - "preview"
  - "available"
---

# Batch Dynamic Workload Scheduler

Product: Batch
Coverage: MEDIUM

## Step 02 Summary

Dynamic Workload Scheduler for Batch is available in Preview to improve resource availability for A3 GPU VM jobs.

## Extended Definition

Dynamic Workload Scheduler for Batch is available in Preview to improve resource availability for A3 GPU VM jobs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/batch/docs/locations](https://docs.cloud.google.com/batch/docs/locations)
- [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)

## Supporting Pages

### Batch locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/locations](https://docs.cloud.google.com/batch/docs/locations)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Region description Region name Details Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Osaka asia-northeast2 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Sydney australia-southeast1 Melbourne australia-southeast2 Recommended zones to obtain GPUs from Dynamic Workload Scheduler When you create and run a job that uses GPUs and use calendar-mode reservations ( Preview ) or Flex-start VMs ( Preview ), which both use Dynamic Workload Scheduler, we recommend that you use the following zones.
- A4 A3 Ultra A3 Mega A3 High GPU machine series Recommended zones for Dynamic Workload Scheduler capacity Details A4 asia-southeast1-b (Singapore) us-central1-b (Iowa) Low CO 2 us-south1-b (Dallas) Low CO 2 A3 Ultra asia-south1-b (Mumbai) asia-south2-c (Delhi) europe-west1-b (Belgium) Low CO 2 europe-west4-a (Netherlands) Low CO 2 us-central1-b (Iowa) Low CO 2 us-east4-b (Northern Virginia) us-south1-b (Dallas) Low CO 2 A3 Mega europe-west1-c (Belgium) Low CO 2 europe-west4-b (Netherlands) Low CO 2 europe-west4-c (Netherlands) Low CO 2 us-central1-a (Iowa) Low CO 2 us-central1-b (Iowa) Low CO 2 us-central1-c (Iowa) Low CO 2 us-east4-b (Northern Virginia) A3 High asia-east1-c (Taiwan) europe-west1-b (Belgium) Low CO 2 us-central1-a (Iowa) Low CO 2 us-central1-b (Iowa) Low CO 2 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- These recommended zones have dedicated capacity for Dynamic Workload Scheduler, so using them increases the likelihood that your requests for GPU machine type from Dynamic Workload Scheduler are approved.
- Region description Region name Details Montréal northamerica-northeast1 Low CO 2 Toronto northamerica-northeast2 Low CO 2 São Paulo southamerica-east1 Low CO 2 Santiago southamerica-west1 Low CO 2 Iowa us-central1 Low CO 2 South Carolina us-east1 Northern Virginia us-east4 Columbus us-east5 Dallas us-south1 Low CO 2 Oregon us-west1 Low CO 2 Los Angeles us-west2 Salt Lake City us-west3 Las Vegas us-west4 The following table lists the regions in Europe and the Middle East where Batch is available.

### Job creation and execution overview \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-job](https://docs.cloud.google.com/batch/docs/create-run-job)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task scheduling When a job runs, its tasks are scheduled according to the scheduling policy ( schedulingPolicy ) field , which lets you specify one of the following options: As soon as possible ( AS SOON AS POSSIBLE ) (default): tasks run as soon as resources are available and can run in parallel.
- If you have a workload with varying resource requirements, you can reduce costs and quota usage by separating the types of VMs used for low-demand operations (like data preparation) and compute-intensive operations (like data processing).
- The job remains in your project's queue until it can be scheduled, which happens when the required resources are available and the jobs ahead of it have been assessed.
- For example, do all the following: Make sure all the VM resources that you specify are available in the location of your job's VMs.

### Create and run a basic job \_|\_ Batch \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/create-run-basic-job](https://docs.cloud.google.com/batch/docs/create-run-basic-job)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TaskGroup taskGroup = TaskGroup . newBuilder (). setTaskCount ( 4 ). setTaskSpec ( task ). build (); // Policies are used to define on what kind of virtual machines the tasks will run on. // In this case, we tell the system to use "e2-standard-4" machine type. // Read more about machine types here: https://cloud.google.com/compute/docs/machine-types InstancePolicy instancePolicy = InstancePolicy . newBuilder (). setMachineType ( "e2-standard-4" ). build (); AllocationPolicy allocationPolicy = AllocationPolicy . newBuilder () . addInstances ( InstancePolicyOrTemplate . newBuilder (). setPolicy ( instancePolicy ). build ()) . build (); Job job = Job . newBuilder () . addTaskGroups ( taskGroup ) . setAllocationPolicy ( allocationPolicy ) . putLabels ( "env" , "testing" ) . putLabels ( "type" , "container" ) // We use Cloud Logging as it's an out of the box available option. . setLogsPolicy ( LogsPolicy . newBuilder (). setDestination ( Destination .
- TaskGroup taskGroup = TaskGroup . newBuilder (). setTaskCount ( 4 ). setTaskSpec ( task ). build (); // Policies are used to define on what kind of virtual machines the tasks will run on. // In this case, we tell the system to use "e2-standard-4" machine type. // Read more about machine types here: https://cloud.google.com/compute/docs/machine-types InstancePolicy instancePolicy = InstancePolicy . newBuilder (). setMachineType ( "e2-standard-4" ). build (); AllocationPolicy allocationPolicy = AllocationPolicy . newBuilder () . addInstances ( InstancePolicyOrTemplate . newBuilder (). setPolicy ( instancePolicy ). build ()) . build (); Job job = Job . newBuilder () . addTaskGroups ( taskGroup ) . setAllocationPolicy ( allocationPolicy ) . putLabels ( "env" , "testing" ) . putLabels ( "type" , "script" ) // We use Cloud Logging as it's an out of the box available option. . setLogsPolicy ( LogsPolicy . newBuilder (). setDestination ( Destination .
- For more information, see Set up authentication for a local development environment . #include "google/cloud/batch/v1/batch client.h" []( std :: string const & project id , std :: string const & location id , std :: string const & job id ) { // Initialize the request; start with the fields that depend on the sample // input. google :: cloud :: batch :: v1 :: CreateJobRequest request ; request . set parent ( "projects/" + project id + "/locations/" + location id ); request . set job id ( job id ); // Most of the job description is fixed in this example; use a string to // initialize it. auto constexpr kText = R " pb( task groups { task count: 4 task spec { compute resource { cpu milli: 500 memory mib: 16 } max retry count: 2 max run duration { seconds: 3600 } runnables { container { image uri: "gcr.io/google-containers/busybox" entrypoint: "/bin/sh" commands: "-c" commands: "echo Hello world!
- For more information, see Set up authentication for a local development environment . #include "google/cloud/batch/v1/batch client.h" []( std :: string const & project id , std :: string const & location id , std :: string const & job id ) { // Initialize the request; start with the fields that depend on the sample // input. google :: cloud :: batch :: v1 :: CreateJobRequest request ; request . set parent ( "projects/" + project id + "/locations/" + location id ); request . set job id ( job id ); // Most of the job description is fixed in this example; use a string to // initialize it. auto constexpr kText = R " pb( task groups { task count: 4 task spec { compute resource { cpu milli: 500 memory mib: 16 } max retry count: 2 max run duration { seconds: 3600 } runnables { script { text: "echo Hello world!

