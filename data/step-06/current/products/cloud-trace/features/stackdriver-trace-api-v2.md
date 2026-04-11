---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.840Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Stackdriver Trace API v2"
feature_slug: "stackdriver-trace-api-v2"
latest_feature_date: "2017-10-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage"
  - "https://docs.cloud.google.com/trace/docs/reference/v2/rest"
keywords:
  - "stackdriver"
  - "trace"
  - "api"
  - "v2"
  - "provides"
  - "the"
  - "next"
  - "version"
---

# Stackdriver Trace API v2

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Stackdriver Trace API v2 provides the next version of the Trace API.

## Extended Definition

Stackdriver Trace API v2 provides the next version of the Trace API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage)
- [https://docs.cloud.google.com/trace/docs/reference/v2/rest](https://docs.cloud.google.com/trace/docs/reference/v2/rest)

## Supporting Pages

### Trace release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- January 09, 2018 Feature The Trace viewer now displays span annotations and message events written with the Stackdriver Trace API v2 .
- February 06, 2020 Change The Stackdriver Trace API v2 is now Generally Available.
- October 31, 2017 Feature The Stackdriver Trace API v2 is now in Beta release.
- For a comparison of the v1 and v2 APIs, see Stackdriver Trace API .

### "Class TraceServiceClient.ListTracesPage (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-trace/latest/com.google.cloud.trace.v1.TraceServiceClient.ListTracesPage)
- Source ID: `site-java-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListTracesPage > Inheritance java.lang.Object > AbstractPage > TraceServiceClient.ListTracesPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListTracesRequest,ListTracesResponse,Trace> context, ListTracesResponse response) protected TraceServiceClient .
- ListTracesPage > createPageAsync ( PageContext<ListTracesRequest , ListTracesResponse , Trace > context , ApiFuture<ListTracesResponse> futureResponse ) Parameters Name Description context PageContext < ListTracesRequest , ListTracesResponse , Trace > futureResponse ApiFuture < ListTracesResponse > Returns Type Description ApiFuture < ListTracesPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListTracesPage createPage ( PageContext<ListTracesRequest , ListTracesResponse , Trace > context , ListTracesResponse response ) Parameters Name Description context PageContext < ListTracesRequest , ListTracesResponse , Trace > response ListTracesResponse Returns Type Description TraceServiceClient.ListTracesPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListTracesRequest,ListTracesResponse,Trace> context, ApiFuture<ListTracesResponse> futureResponse) public ApiFuture<TraceServiceClient .
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.0 2.1.13 public static class TraceServiceClient .

### Cloud Trace API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/reference/v2/rest](https://docs.cloud.google.com/trace/docs/reference/v2/rest)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- This service provides the following discovery documents: https://cloudtrace.googleapis.com/$discovery/rest?version=v2 https://cloudtrace.googleapis.com/$discovery/rest?version=v2beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudtrace.googleapis.com REST Resource: v2beta1.projects.traceSinks Methods create POST /v2beta1/{parent=projects/ }/traceSinks Creates a sink that exports trace spans to a destination. delete DELETE /v2beta1/{name=projects/ /traceSinks/ } Deletes a sink. get GET /v2beta1/{name=projects/ /traceSinks/ } Get a trace sink by name under the parent resource (GCP project). list GET /v2beta1/{parent=projects/ }/traceSinks List all sinks for the parent resource (GCP project). patch PATCH /v2beta1/{name=projects/ /traceSinks/ } Updates a sink.
- REST Resource: v2beta1.projects.traceSinks REST Resource: v2.projects.traces REST Resource: v2.projects.traces.spans Service: cloudtrace.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This library is used to interact with the Cloud Trace API directly.

