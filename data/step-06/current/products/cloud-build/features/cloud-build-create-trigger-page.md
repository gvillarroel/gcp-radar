---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.893Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Create trigger page"
feature_slug: "cloud-build-create-trigger-page"
latest_feature_date: "2020-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPagedResponse"
keywords:
  - "create"
  - "updated"
  - "page"
  - "trigger"
  - "console"
---

# Cloud Build Create trigger page

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

The Cloud Build Create trigger page in the Google Cloud Console was updated.

## Extended Definition

The Cloud Build Create trigger page in the Google Cloud Console was updated.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPagedResponse)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a build trigger Console Open the Triggers page in the Google Cloud console.
- This page explains how to connect to source repositories such as GitHub and Bitbucket, and create build triggers to build the code in the repositories.
- Complete the following steps to connect to GitHub or Bitbucket: Open the Triggers page in the Google Cloud console.
- Test a build trigger To manually test a build trigger: Open the Triggers page in the Google Cloud console.

### "Class CloudBuildClient.ListBuildTriggersPage (3.90.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage)
- Source ID: `site-java-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListBuildTriggersPage > Inheritance java.lang.Object > AbstractPage > CloudBuildClient.ListBuildTriggersPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListBuildTriggersRequest,ListBuildTriggersResponse,BuildTrigger> context, ListBuildTriggersResponse response) protected CloudBuildClient .
- ListBuildTriggersPage > createPageAsync ( PageContext<ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > context , ApiFuture<ListBuildTriggersResponse> futureResponse ) Parameters Name Description context PageContext < ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > futureResponse ApiFuture < ListBuildTriggersResponse > Returns Type Description ApiFuture < ListBuildTriggersPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListBuildTriggersPage createPage ( PageContext<ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > context , ListBuildTriggersResponse response ) Parameters Name Description context PageContext < ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > response ListBuildTriggersResponse Returns Type Description CloudBuildClient.ListBuildTriggersPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListBuildTriggersRequest,ListBuildTriggersResponse,BuildTrigger> context, ApiFuture<ListBuildTriggersResponse> futureResponse) public ApiFuture<CloudBuildClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudBuildClient.ListBuildTriggersPage (3.90.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class CloudBuildClient.ListBuildTriggersPagedResponse (3.90.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPagedResponse)
- Source ID: `site-java-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListBuildTriggersFixedSizeCollection > Inheritance java.lang.Object > AbstractPagedListResponse > CloudBuildClient.ListBuildTriggersPagedResponse Inherited Members AbstractPagedListResponse.expandToFixedSizeCollection(int) AbstractPagedListResponse.getNextPageToken() AbstractPagedListResponse.getPage() AbstractPagedListResponse.iterateAll() AbstractPagedListResponse.iterateFixedSizeCollections(int) AbstractPagedListResponse.iteratePages() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods createAsync(PageContext<ListBuildTriggersRequest,ListBuildTriggersResponse,BuildTrigger> context, ApiFuture<ListBuildTriggersResponse> futureResponse) public static ApiFuture<CloudBuildClient .
- ListBuildTriggersPagedResponse > createAsync ( PageContext<ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > context , ApiFuture<ListBuildTriggersResponse> futureResponse ) Parameters Name Description context PageContext < ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > futureResponse ApiFuture < ListBuildTriggersResponse > Returns Type Description ApiFuture < ListBuildTriggersPagedResponse > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudBuildClient.ListBuildTriggersPagedResponse (3.90.0) Stay organized with collections Save and categorize content based on your preferences.
- ListBuildTriggersPagedResponse extends AbstractPagedListResponse<ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger , CloudBuildClient .

