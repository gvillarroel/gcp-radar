---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.414Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "e2-highcpu-8 default machine type for GPU source builds"
feature_slug: "e2-highcpu-8-default-machine-type-for-gpu-source-builds"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsClient"
keywords:
  - "highcpu"
  - "builds"
  - "machine"
  - "type"
  - "default"
  - "source"
---

# e2-highcpu-8 default machine type for GPU source builds

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run uses Cloud Build e2-highcpu-8 by default for GPU-enabled source builds from the console or gcloud CLI; Cloud Run uses Cloud Build e2-highcpu-8 by default for GPU-enabled source builds with the gcloud beta run command.

## Extended Definition

Cloud Run uses Cloud Build e2-highcpu-8 by default for GPU-enabled source builds from the console or gcloud CLI; Cloud Run uses Cloud Build e2-highcpu-8 by default for GPU-enabled source builds with the gcloud beta run command.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsClient)

## Supporting Pages

### "Class BuildsClient (0.88.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsClient)
- Source ID: `site-java-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code to get started: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( BuildsClient buildsClient = BuildsClient . create ()) { SubmitBuildRequest request = SubmitBuildRequest . newBuilder () . setParent ( "parent-995424086" ) . setImageUri ( "imageUri-859610607" ) . setServiceAccount ( "serviceAccount1079137720" ) . setWorkerPool ( BuildWorkerPoolName . of ( "[PROJECT]" , "[LOCATION]" , "[WORKER POOL]" ). toString ()) . addAllTags ( new ArrayList<String> ()) . setMachineType ( "machineType-218117087" ) . setReleaseTrack ( LaunchStage . forNumber ( 0 )) . setClient ( "client-1357712437" ) . build (); SubmitBuildResponse response = buildsClient . submitBuild ( request ); } Note: close() needs to be called on the BuildsClient object to clean up resources such as threads.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( BuildsClient buildsClient = BuildsClient . create ()) { SubmitBuildRequest request = SubmitBuildRequest . newBuilder () . setParent ( "parent-995424086" ) . setImageUri ( "imageUri-859610607" ) . setServiceAccount ( "serviceAccount1079137720" ) . setWorkerPool ( BuildWorkerPoolName . of ( "[PROJECT]" , "[LOCATION]" , "[WORKER POOL]" ). toString ()) . addAllTags ( new ArrayList<String> ()) . setMachineType ( "machineType-218117087" ) . setReleaseTrack ( LaunchStage . forNumber ( 0 )) . setClient ( "client-1357712437" ) . build (); SubmitBuildResponse response = buildsClient . submitBuild ( request ); } Parameter Name Description request SubmitBuildRequest The request object containing all of the parameters for the API call.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( BuildsClient buildsClient = BuildsClient . create ()) { SubmitBuildRequest request = SubmitBuildRequest . newBuilder () . setParent ( "parent-995424086" ) . setImageUri ( "imageUri-859610607" ) . setServiceAccount ( "serviceAccount1079137720" ) . setWorkerPool ( BuildWorkerPoolName . of ( "[PROJECT]" , "[LOCATION]" , "[WORKER POOL]" ). toString ()) . addAllTags ( new ArrayList<String> ()) . setMachineType ( "machineType-218117087" ) . setReleaseTrack ( LaunchStage . forNumber ( 0 )) . setClient ( "client-1357712437" ) . build (); ApiFuture<SubmitBuildResponse> future = buildsClient . submitBuildCallable (). futureCall ( request ); // Do something.
- Parameter Name Description settings BuildsSettings BuildsClient(BuildsStub stub) protected BuildsClient ( BuildsStub stub ) Parameter Name Description stub BuildsStub Methods awaitTermination(long duration, TimeUnit unit) public boolean awaitTermination ( long duration , TimeUnit unit ) Parameters Name Description duration long unit TimeUnit Returns Type Description boolean Exceptions Type Description InterruptedException close() public final void close () getSettings() public final BuildsSettings getSettings () Returns Type Description BuildsSettings getStub() public BuildsStub getStub () Returns Type Description BuildsStub isShutdown() public boolean isShutdown () Returns Type Description boolean isTerminated() public boolean isTerminated () Returns Type Description boolean shutdown() public void shutdown () shutdownNow() public void shutdownNow () submitBuild(SubmitBuildRequest request) public final SubmitBuildResponse submitBuild ( SubmitBuildRequest request ) Submits a build in a given project.

### "Class BuildsAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description BuildsAsyncClient The constructed client. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- The API endpoint is determined in the following order: (1) if client options.api endpoint if provided, use the provided one. (2) if GOOGLE API USE CLIENT CERTIFICATE environment variable is "always", use the default mTLS endpoint; if the environment variable is "never", use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.
- The client cert source is determined in the following order: (1) if GOOGLE API USE CLIENT CERTIFICATE environment variable is not "true", the client cert source is None. (2) if client options.client cert source is provided, use the provided one; if the default client cert source exists, use the default one; otherwise the client cert source is None.
- SubmitBuildRequest ( storage source=storage source, parent="parent value", image uri="image uri value", ) Make the request response = await client. submit build (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.run v2.types.SubmitBuildRequest , dict]] The request object.

### "Class BuildsClient (0.16.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsClient)
- Source ID: `site-python-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description BuildsClient The constructed client. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- The API endpoint is determined in the following order: (1) if client options.api endpoint if provided, use the provided one. (2) if GOOGLE API USE CLIENT CERTIFICATE environment variable is "always", use the default mTLS endpoint; if the environment variable is "never", use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.
- The client cert source is determined in the following order: (1) if GOOGLE API USE CLIENT CERTIFICATE environment variable is not "true", the client cert source is None. (2) if client options.client cert source is provided, use the provided one; if the default client cert source exists, use the default one; otherwise the client cert source is None.
- SubmitBuildRequest ( storage source=storage source, parent="parent value", image uri="image uri value", ) Make the request response = client. submit build (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.run v2.types.SubmitBuildRequest , dict] The request object.

