---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.866Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build regional default pools"
feature_slug: "cloud-build-regional-default-pools"
latest_feature_date: "2022-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient"
keywords:
  - "default"
  - "regional"
  - "region"
  - "execution"
  - "specific"
  - "pools"
---

# Cloud Build regional default pools

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build default pools now support region-specific execution; Cloud Build default pools support regional builds in preview.

## Extended Definition

Cloud Build default pools now support region-specific execution; Cloud Build default pools support regional builds in preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient)

## Supporting Pages

### "Class CloudBuildClient (3.90.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient)
- Source ID: `site-java-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { ListWorkerPoolsRequest request = ListWorkerPoolsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<WorkerPool> future = cloudBuildClient . listWorkerPoolsPagedCallable (). futureCall ( request ); // Do something. for ( WorkerPool element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListWorkerPoolsRequest , ListWorkerPoolsPagedResponse > receiveTriggerWebhook(ReceiveTriggerWebhookRequest request) public final ReceiveTriggerWebhookResponse receiveTriggerWebhook ( ReceiveTriggerWebhookRequest request ) ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { ListBuildsRequest request = ListBuildsRequest . newBuilder () . setParent ( ProjectName . of ( "[PROJECT]" ). toString ()) . setProjectId ( "projectId-894832108" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Build> future = cloudBuildClient . listBuildsPagedCallable (). futureCall ( request ); // Do something. for ( Build element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListBuildsRequest , ListBuildsPagedResponse > listWorkerPools(ListWorkerPoolsRequest request) public final CloudBuildClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { ListWorkerPoolsRequest request = ListWorkerPoolsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); while ( true ) { ListWorkerPoolsResponse response = cloudBuildClient . listWorkerPoolsCallable (). call ( request ); for ( WorkerPool element : response . getWorkerPoolsList ()) { // doThingsWith(element); } String nextPageToken = response . getNextPageToken (); if ( !
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CloudBuildClient cloudBuildClient = CloudBuildClient . create ()) { ListWorkerPoolsRequest request = ListWorkerPoolsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); for ( WorkerPool element : cloudBuildClient . listWorkerPools ( request ). iterateAll ()) { // doThingsWith(element); } } Parameter Name Description request ListWorkerPoolsRequest The request object containing all of the parameters for the API call.

### "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- Source ID: `site-python-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 async def sample get default service account(): Create a client client = cloudbuild v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 async def sample list worker pools(): Create a client client = cloudbuild v1.
- For an overview of private pools, see Private pools overview. crypto key path crypto key path ( project : str , location : str , keyring : str , key : str ) - > str Returns a fully-qualified crypto key string. default service account path default service account path ( project : str , location : str ) - > str Returns a fully-qualified default service account string. delete build trigger delete build trigger ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 async def sample receive trigger webhook(): Create a client client = cloudbuild v1.

### "Class CloudBuildClient (3.35.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildClient)
- Source ID: `site-python-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 def sample get default service account(): Create a client client = cloudbuild v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 def sample list worker pools(): Create a client client = cloudbuild v1.
- For an overview of private pools, see Private pools overview. crypto key path crypto key path ( project : str , location : str , keyring : str , key : str ) - > str Returns a fully-qualified crypto key string. default service account path default service account path ( project : str , location : str ) - > str Returns a fully-qualified default service account string. delete build trigger delete build trigger ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.devtools import cloudbuild v1 def sample receive trigger webhook(): Create a client client = cloudbuild v1.

