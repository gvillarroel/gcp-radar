---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:01.652Z"
product_name: "Cloud Scheduler"
product_slug: "cloud-scheduler"
feature_name: "Editing paused Cloud Scheduler jobs"
feature_slug: "editing-paused-cloud-scheduler-jobs"
latest_feature_date: "2022-06-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient"
  - "https://docs.cloud.google.com/scheduler/docs/creating"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerClient"
keywords:
  - "editing"
  - "paused"
  - "scheduler"
  - "jobs"
  - "can"
  - "be"
  - "edited"
  - "without"
---

# Editing paused Cloud Scheduler jobs

Product: Cloud Scheduler
Coverage: MEDIUM

## Step 02 Summary

Paused Cloud Scheduler jobs can be edited without resuming them first.

## Extended Definition

Paused Cloud Scheduler jobs can be edited without resuming them first.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient)
- [https://docs.cloud.google.com/scheduler/docs/creating](https://docs.cloud.google.com/scheduler/docs/creating)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerClient)

## Supporting Pages

### "Class CloudSchedulerAsyncClient (2.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import scheduler v1 async def sample list jobs(): Create a client client = scheduler v1 .
- ListJobsRequest ( parent="parent value", ) Make the request page result = client. list jobs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.scheduler v1.types.ListJobsRequest , dict]] The request object.
- If the GOOGLE API USE CLIENT CERTIFICATE environment variable is "true", then the client cert source property can be used to provide a client certificate for mTLS transport.
- Returns Type Description google.cloud.scheduler v1.services.cloud scheduler.pagers.ListJobsAsyncPager Response message for listing jobs using ListJobs .

### "Class CloudSchedulerClient (2.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient](https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.services.cloud_scheduler.CloudSchedulerClient)
- Source ID: `site-python-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import scheduler v1 def sample list jobs(): Create a client client = scheduler v1 .
- ListJobsRequest ( parent="parent value", ) Make the request page result = client. list jobs (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.scheduler v1.types.ListJobsRequest , dict] The request object.
- If the GOOGLE API USE CLIENT CERTIFICATE environment variable is "true", then the client cert source property can be used to provide a client certificate for mTLS transport.
- This corresponds to the parent field on the request instance; if request is provided, this should not be set. job google.cloud.scheduler v1.types.Job Required.

### Manage cron jobs \_|\_ Cloud Scheduler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/scheduler/docs/creating](https://docs.cloud.google.com/scheduler/docs/creating)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine endpoints can be secured with login: admin on the handlers element in the app.yaml file. gcloud scheduler jobs create app-engine \ --JOB = JOB \ --location = LOCATION \ --schedule = SCHEDULE Replace the following: JOB : a job name that must be unique in the project.
- App Engine endpoints can be secured with login: admin on the handlers element in the app.yaml file. gcloud scheduler jobs update app-engine JOB \ --location = LOCATION \ --schedule = SCHEDULE Replace the following: JOB : a job name that must be unique in the project.
- Choose a target type Cloud Scheduler can invoke the following types of targets: HTTP endpoints Pub/Sub topics App Engine services Invoke target services that are restricted to internal ingress Cloud Scheduler can invoke the following services internally: Cloud Run functions Cloud Run (on the run.app URL, not on custom domains) To invoke these targets internally, the target must be in the same Google Cloud project or VPC Service Controls perimeter as your Cloud Scheduler job.
- Cloud Scheduler will publish messages to this topic as a Google API service account. gcloud scheduler jobs create pubsub JOB \ --location = LOCATION \ --schedule = SCHEDULE \ --topic = TOPIC Replace the following: JOB : a job name that must be unique in the project.

### "Class CloudSchedulerClient (2.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-scheduler/latest/com.google.cloud.scheduler.v1.CloudSchedulerClient)
- Source ID: `site-java-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) { ListJobsRequest request = ListJobsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Job> future = cloudSchedulerClient . listJobsPagedCallable (). futureCall ( request ); // Do something. for ( Job element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListJobsRequest , ListJobsPagedResponse > listLocations(ListLocationsRequest request) public final CloudSchedulerClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) { ListJobsRequest request = ListJobsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); while ( true ) { ListJobsResponse response = cloudSchedulerClient . listJobsCallable (). call ( request ); for ( Job element : response . getJobsList ()) { // doThingsWith(element); } String nextPageToken = response . getNextPageToken (); if ( !
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) { ListJobsRequest request = ListJobsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); for ( Job element : cloudSchedulerClient . listJobs ( request ). iterateAll ()) { // doThingsWith(element); } } Parameter Name Description request ListJobsRequest The request object containing all of the parameters for the API call.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudSchedulerClient cloudSchedulerClient = CloudSchedulerClient . create ()) { String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString (); for ( Job element : cloudSchedulerClient . listJobs ( parent ). iterateAll ()) { // doThingsWith(element); } } Parameter Name Description parent String Required.

