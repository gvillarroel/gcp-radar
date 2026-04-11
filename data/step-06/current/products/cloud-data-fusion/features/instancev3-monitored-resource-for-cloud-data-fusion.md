---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.758Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "InstanceV3 monitored resource for Cloud Data Fusion"
feature_slug: "instancev3-monitored-resource-for-cloud-data-fusion"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPage"
keywords:
  - "instancev3"
  - "monitored"
  - "resource"
  - "for"
  - "fusion"
  - "the"
  - "default"
  - "instance"
---

# InstanceV3 monitored resource for Cloud Data Fusion

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

The default monitored resource for instance-level metrics and system service logs was introduced as datafusion.googleapis.com/InstanceV3, replacing InstanceV2 labels by default.

## Extended Definition

The default monitored resource for instance-level metrics and system service logs was introduced as datafusion.googleapis.com/InstanceV3, replacing InstanceV2 labels by default.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPage)

## Supporting Pages

### "Class DataFusionAsyncClient (1.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionAsyncClient)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The instance resource name in the format projects/{project}/locations/{location}/instances/{instance} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- CreateInstanceRequest ( parent="parent value", instance id="instance id value", ) Make the request operation = client. create instance (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.data fusion v1.types.CreateInstanceRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 async def sample restart instance(): Create a client client = data fusion v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 async def sample create instance(): Create a client client = data fusion v1 .

### "Class DataFusionClient (1.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient](https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.services.data_fusion.DataFusionClient)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The instance resource name in the format projects/{project}/locations/{location}/instances/{instance} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- CreateInstanceRequest ( parent="parent value", instance id="instance id value", ) Make the request operation = client. create instance (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.data fusion v1.types.CreateInstanceRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 def sample restart instance(): Create a client client = data fusion v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import data fusion v1 def sample create instance(): Create a client client = data fusion v1 .

### "Class DataFusionClient.ListInstancesPage (1.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPage)
- Source ID: `site-java-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListInstancesPage > Inheritance java.lang.Object > AbstractPage > DataFusionClient.ListInstancesPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListInstancesRequest,ListInstancesResponse,Instance> context, ListInstancesResponse response) protected DataFusionClient .
- ListInstancesPage > createPageAsync ( PageContext<ListInstancesRequest , ListInstancesResponse , Instance > context , ApiFuture<ListInstancesResponse> futureResponse ) Parameters Name Description context PageContext < ListInstancesRequest , ListInstancesResponse , Instance > futureResponse ApiFuture < ListInstancesResponse > Returns Type Description ApiFuture < ListInstancesPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListInstancesPage createPage ( PageContext<ListInstancesRequest , ListInstancesResponse , Instance > context , ListInstancesResponse response ) Parameters Name Description context PageContext < ListInstancesRequest , ListInstancesResponse , Instance > response ListInstancesResponse Returns Type Description DataFusionClient.ListInstancesPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListInstancesRequest,ListInstancesResponse,Instance> context, ApiFuture<ListInstancesResponse> futureResponse) public ApiFuture<DataFusionClient .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]

