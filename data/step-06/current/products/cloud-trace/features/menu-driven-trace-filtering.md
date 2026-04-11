---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.836Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Menu-driven trace filtering"
feature_slug: "menu-driven-trace-filtering"
latest_feature_date: "2019-11-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse"
  - "https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesAsyncPager"
keywords:
  - "menu"
  - "driven"
  - "trace"
  - "filtering"
  - "the"
  - "list"
  - "page"
  - "includes"
---

# Menu-driven trace filtering

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

The Trace list page includes a menu-driven filtering interface for finding traces.

## Extended Definition

The Trace list page includes a menu-driven filtering interface for finding traces.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse)
- [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesAsyncPager)

## Supporting Pages

### "Class TraceServiceClient.ListTracesPage (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage)
- Source ID: `site-java-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListTracesPage > createPageAsync ( PageContext<ListTracesRequest , ListTracesResponse , Trace > context , ApiFuture<ListTracesResponse> futureResponse ) Parameters Name Description context PageContext < ListTracesRequest , ListTracesResponse , Trace > futureResponse ApiFuture < ListTracesResponse > Returns Type Description ApiFuture < ListTracesPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListTracesPage > Inheritance java.lang.Object > AbstractPage > TraceServiceClient.ListTracesPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListTracesRequest,ListTracesResponse,Trace> context, ListTracesResponse response) protected TraceServiceClient .
- ListTracesPage createPage ( PageContext<ListTracesRequest , ListTracesResponse , Trace > context , ListTracesResponse response ) Parameters Name Description context PageContext < ListTracesRequest , ListTracesResponse , Trace > response ListTracesResponse Returns Type Description TraceServiceClient.ListTracesPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListTracesRequest,ListTracesResponse,Trace> context, ApiFuture<ListTracesResponse> futureResponse) public ApiFuture<TraceServiceClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class TraceServiceClient.ListTracesPage (2.88.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class TraceServiceClient.ListTracesPagedResponse (2.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPagedResponse)
- Source ID: `site-java-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListTracesPagedResponse > createAsync ( PageContext<ListTracesRequest , ListTracesResponse , Trace > context , ApiFuture<ListTracesResponse> futureResponse ) Parameters Name Description context PageContext < ListTracesRequest , ListTracesResponse , Trace > futureResponse ApiFuture < ListTracesResponse > Returns Type Description ApiFuture < ListTracesPagedResponse > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListTracesFixedSizeCollection > Inheritance java.lang.Object > AbstractPagedListResponse > TraceServiceClient.ListTracesPagedResponse Inherited Members AbstractPagedListResponse.expandToFixedSizeCollection(int) AbstractPagedListResponse.getNextPageToken() AbstractPagedListResponse.getPage() AbstractPagedListResponse.iterateAll() AbstractPagedListResponse.iterateFixedSizeCollections(int) AbstractPagedListResponse.iteratePages() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods createAsync(PageContext<ListTracesRequest,ListTracesResponse,Trace> context, ApiFuture<ListTracesResponse> futureResponse) public static ApiFuture<TraceServiceClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class TraceServiceClient.ListTracesPagedResponse (2.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListTracesPagedResponse extends AbstractPagedListResponse<ListTracesRequest , ListTracesResponse , Trace , TraceServiceClient .

### "Class ListTracesAsyncPager (1.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesAsyncPager](https://docs.cloud.google.com/python/docs/reference/cloudtrace/latest/google.cloud.trace_v1.services.trace_service.pagers.ListTracesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.trace v1.types.ListTracesRequest The initial request object. response google.cloud.trace v1.types.ListTracesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional ListTraces requests and continue to iterate through the traces field on the corresponding responses.
- All the usual ListTracesResponse attributes are available on the pager.
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.0 1.9.1 1.8.0 1.7.3 1.6.2 1.5.1 1.4.0 1.3.4 1.2.0 1.1.0 1.0.0 0.24.2 0.23.0 0.22.1 ListTracesAsyncPager ( method : typing .

