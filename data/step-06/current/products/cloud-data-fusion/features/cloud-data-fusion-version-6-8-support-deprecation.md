---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.774Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion version 6.8 support deprecation"
feature_slug: "cloud-data-fusion-version-6-8-support-deprecation"
latest_feature_date: "2024-09-01"
deprecation_date: "2024-09-01"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient"
keywords:
  - "fusion"
  - "version"
  - "deprecation"
  - "for"
  - "has"
  - "been"
  - "discontinued"
  - "and"
---

# Cloud Data Fusion version 6.8 support deprecation

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

Support for Cloud Data Fusion version 6.8 has been discontinued, and users are advised to upgrade to supported versions; deprecated on 2024-09-01.

## Extended Definition

Support for Cloud Data Fusion version 6.8 has been discontinued, and users are advised to upgrade to supported versions; deprecated on 2024-09-01.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient)

## Supporting Pages

### "Class DataFusionAsyncClient (1.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient)
- Source ID: `site-python-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListAvailableVersionsRequest ( parent="parent value", ) Make the request page result = client. list available versions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.data fusion v1.types.ListAvailableVersionsRequest , dict]] The request object.
- ListAvailableVersionsAsyncPager ) Lists possible versions for Data Fusion instances in the specified project and location.
- CreateInstanceRequest ( parent="parent value", instance id="instance id value", ) Make the request operation = client. create instance (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.data fusion v1.types.CreateInstanceRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 async def sample list available versions(): Create a client client = data fusion v1 .

### "Class DataFusionClient (1.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient)
- Source ID: `site-python-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListAvailableVersionsRequest ( parent="parent value", ) Make the request page result = client. list available versions (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.data fusion v1.types.ListAvailableVersionsRequest , dict] The request object.
- ListAvailableVersionsPager Lists possible versions for Data Fusion instances in the specified project and location.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 def sample list available versions(): Create a client client = data fusion v1 .
- CreateInstanceRequest ( parent="parent value", instance id="instance id value", ) Make the request operation = client. create instance (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.data fusion v1.types.CreateInstanceRequest , dict] The request object.

### "Class DataFusionClient (1.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient)
- Source ID: `site-java-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) { ListAvailableVersionsRequest request = ListAvailableVersionsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setLatestPatchOnly ( true ) . build (); ApiFuture<Version> future = dataFusionClient . listAvailableVersionsPagedCallable (). futureCall ( request ); // Do something. for ( Version element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListAvailableVersionsRequest , ListAvailableVersionsPagedResponse > listInstances(ListInstancesRequest request) public final DataFusionClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) { ListAvailableVersionsRequest request = ListAvailableVersionsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setLatestPatchOnly ( true ) . build (); while ( true ) { ListAvailableVersionsResponse response = dataFusionClient . listAvailableVersionsCallable (). call ( request ); for ( Version element : response . getAvailableVersionsList ()) { // doThingsWith(element); } String nextPageToken = response . getNextPageToken (); if ( !
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) { ListAvailableVersionsRequest request = ListAvailableVersionsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setLatestPatchOnly ( true ) . build (); for ( Version element : dataFusionClient . listAvailableVersions ( request ). iterateAll ()) { // doThingsWith(element); } } Parameter Name Description request ListAvailableVersionsRequest The request object containing all of the parameters for the API call.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataFusionClient dataFusionClient = DataFusionClient . create ()) { String parent = LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString (); for ( Version element : dataFusionClient . listAvailableVersions ( parent ). iterateAll ()) { // doThingsWith(element); } } Parameter Name Description parent String Required.

