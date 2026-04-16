---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.865Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build regional build triggers"
feature_slug: "cloud-build-regional-build-triggers"
latest_feature_date: "2022-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient"
keywords:
  - "operation"
  - "regional"
  - "preview"
  - "region"
  - "specific"
  - "triggers"
---

# Cloud Build regional build triggers

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build build triggers now support region-specific operation; Cloud Build build triggers support regional operation in preview.

## Extended Definition

Cloud Build build triggers now support region-specific operation; Cloud Build build triggers support regional operation in preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)

## Supporting Pages

### "Class CloudBuildClient (3.90.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient)
- Source ID: `site-java-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { ListWorkerPoolsRequest request = ListWorkerPoolsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<WorkerPool> future = cloudBuildClient . listWorkerPoolsPagedCallable (). futureCall ( request ); // Do something. for ( WorkerPool element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListWorkerPoolsRequest , ListWorkerPoolsPagedResponse > receiveTriggerWebhook(ReceiveTriggerWebhookRequest request) public final ReceiveTriggerWebhookResponse receiveTriggerWebhook ( ReceiveTriggerWebhookRequest request ) ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { DeleteWorkerPoolRequest request = DeleteWorkerPoolRequest . newBuilder () . setName ( WorkerPoolName . of ( "[PROJECT]" , "[LOCATION]" , "[WORKER POOL]" ). toString ()) . setEtag ( "etag3123477" ) . setAllowMissing ( true ) . setValidateOnly ( true ) . build (); OperationFuture<Empty , DeleteWorkerPoolOperationMetadata > future = cloudBuildClient . deleteWorkerPoolOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata > getBuild(BuildName name) public final Build getBuild ( BuildName name ) Returns information about a previously requested build.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { DeleteBuildTriggerRequest request = DeleteBuildTriggerRequest . newBuilder () . setName ( BuildTriggerName . ofProjectTriggerName ( "[PROJECT]" , "[TRIGGER]" ). toString ()) . setProjectId ( "projectId-894832108" ) . setTriggerId ( "triggerId-648752909" ) . build (); ApiFuture<Empty> future = cloudBuildClient . deleteBuildTriggerCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteBuildTriggerRequest , Empty > deleteWorkerPoolAsync(DeleteWorkerPoolRequest request) public final OperationFuture<Empty , DeleteWorkerPoolOperationMetadata > deleteWorkerPoolAsync ( DeleteWorkerPoolRequest request ) Deletes a WorkerPool .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { DeleteWorkerPoolRequest request = DeleteWorkerPoolRequest . newBuilder () . setName ( WorkerPoolName . of ( "[PROJECT]" , "[LOCATION]" , "[WORKER POOL]" ). toString ()) . setEtag ( "etag3123477" ) . setAllowMissing ( true ) . setValidateOnly ( true ) . build (); ApiFuture<Operation> future = cloudBuildClient . deleteWorkerPoolCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteWorkerPoolRequest , Operation > deleteWorkerPoolOperationCallable() public final OperationCallable<DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata > deleteWorkerPoolOperationCallable () Deletes a WorkerPool .

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- For example, say you're creating multiple triggers where each trigger deploys your app to a specific environment.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.
- See the gcloud instructions for how to update a build trigger to show or hide build logs for GitHub or GitHub Enterprise triggers. gcloud To update a trigger: Export the trigger you would like to update: gcloud beta builds triggers export TRIGGER NAME -- destination = EXPORT PATH Where: TRIGGER NAME is the name of your trigger.

### "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- Source ID: `site-python-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 async def sample list build triggers(): Create a client client = cloudbuild v1.
- To run a regional or global trigger, use the POST request that includes the location endpoint in the path (ex. v1/projects/{projectId}/locations/{region}/triggers/{triggerId}:run).
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 async def sample get default service account(): Create a client client = cloudbuild v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 async def sample receive trigger webhook(): Create a client client = cloudbuild v1.

