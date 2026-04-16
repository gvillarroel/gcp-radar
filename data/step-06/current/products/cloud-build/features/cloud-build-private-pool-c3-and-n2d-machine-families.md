---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.816Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build private pool C3 and N2D machine families"
feature_slug: "cloud-build-private-pool-c3-and-n2d-machine-families"
latest_feature_date: "2025-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListWorkerPoolsFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListWorkerPoolsPage"
keywords:
  - "families"
  - "machine"
  - "pool"
  - "pools"
  - "private"
---

# Cloud Build private pool C3 and N2D machine families

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build private pools now support both the C3 and N2D machine families.

## Extended Definition

Cloud Build private pools now support both the C3 and N2D machine families.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListWorkerPoolsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListWorkerPoolsFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListWorkerPoolsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListWorkerPoolsPage)

## Supporting Pages

### Overview of Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private pools are private, dedicated pools of workers that offer greater customization over the build environment, including the ability to access resources in a private network.
- Private pools, similar to default pools, are hosted and fully-managed by Cloud Build and scale up and down to zero, with no infrastructure to set up, upgrade, or scale.
- Default pools and private pools By default, when you run a build on Cloud Build, the build runs in a secure, hosted environment with access to the public internet.
- To learn more about private pools and the feature difference between default pool and private pool, see Private pool overview .

### "Class CloudBuildClient.ListWorkerPoolsFixedSizeCollection (3.90.0) \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListWorkerPoolsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListWorkerPoolsFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- ListWorkerPoolsFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > CloudBuildClient.ListWorkerPoolsFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<CloudBuildClient.ListWorkerPoolsPage> pages, int collectionSize) protected CloudBuildClient .
- ListWorkerPoolsPage > pages , int collectionSize ) Parameters Name Description pages List < ListWorkerPoolsPage > collectionSize int Returns Type Description CloudBuildClient.ListWorkerPoolsFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudBuildClient.ListWorkerPoolsFixedSizeCollection (3.90.0) Stay organized with collections Save and categorize content based on your preferences.
- ListWorkerPoolsFixedSizeCollection extends AbstractFixedSizeCollection<ListWorkerPoolsRequest , ListWorkerPoolsResponse , WorkerPool , CloudBuildClient .

### "Class CloudBuildClient.ListWorkerPoolsPage (3.90.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListWorkerPoolsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListWorkerPoolsPage)
- Source ID: `site-java-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- ListWorkerPoolsPage > Inheritance java.lang.Object > AbstractPage > CloudBuildClient.ListWorkerPoolsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListWorkerPoolsRequest,ListWorkerPoolsResponse,WorkerPool> context, ListWorkerPoolsResponse response) protected CloudBuildClient .
- ListWorkerPoolsPage > createPageAsync ( PageContext<ListWorkerPoolsRequest , ListWorkerPoolsResponse , WorkerPool > context , ApiFuture<ListWorkerPoolsResponse> futureResponse ) Parameters Name Description context PageContext < ListWorkerPoolsRequest , ListWorkerPoolsResponse , WorkerPool > futureResponse ApiFuture < ListWorkerPoolsResponse > Returns Type Description ApiFuture < ListWorkerPoolsPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListWorkerPoolsPage createPage ( PageContext<ListWorkerPoolsRequest , ListWorkerPoolsResponse , WorkerPool > context , ListWorkerPoolsResponse response ) Parameters Name Description context PageContext < ListWorkerPoolsRequest , ListWorkerPoolsResponse , WorkerPool > response ListWorkerPoolsResponse Returns Type Description CloudBuildClient.ListWorkerPoolsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListWorkerPoolsRequest,ListWorkerPoolsResponse,WorkerPool> context, ApiFuture<ListWorkerPoolsResponse> futureResponse) public ApiFuture<CloudBuildClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudBuildClient.ListWorkerPoolsPage (3.90.0) Stay organized with collections Save and categorize content based on your preferences.

