---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.784Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Build trigger filepath filters"
feature_slug: "build-trigger-filepath-filters"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage"
keywords:
  - "build"
  - "trigger"
  - "filepath"
  - "filters"
  - "triggers"
  - "can"
  - "now"
  - "run"
---

# Build trigger filepath filters

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build triggers can now run only when changes occur in specified files or subdirectories.

## Extended Definition

Cloud Build triggers can now run only when changes occur in specified files or subdirectories.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- If you're using GitHub pull request triggers, any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the code in the pull request.
- Security implications of build triggers The service account configured for a build trigger can provide elevated build-time permissions to users who employ triggers to invoke a build.
- Select Delete . gcloud To delete a trigger, run the following command: gcloud builds triggers delete TRIGGER NAME Where: TRIGGER NAME is the name of your trigger.
- If you want to run a build on that commit later, use the Run button in the Triggers page.

### "Class CloudBuildClient.ListBuildTriggersFixedSizeCollection (3.90.0) \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListBuildTriggersFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > CloudBuildClient.ListBuildTriggersFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<CloudBuildClient.ListBuildTriggersPage> pages, int collectionSize) protected CloudBuildClient .
- ListBuildTriggersPage > pages , int collectionSize ) Parameters Name Description pages List < ListBuildTriggersPage > collectionSize int Returns Type Description CloudBuildClient.ListBuildTriggersFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudBuildClient.ListBuildTriggersFixedSizeCollection (3.90.0) Stay organized with collections Save and categorize content based on your preferences.
- ListBuildTriggersFixedSizeCollection extends AbstractFixedSizeCollection<ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger , CloudBuildClient .

### "Class CloudBuildClient.ListBuildTriggersPage (3.90.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage)
- Source ID: `site-java-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListBuildTriggersPage > Inheritance java.lang.Object > AbstractPage > CloudBuildClient.ListBuildTriggersPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListBuildTriggersRequest,ListBuildTriggersResponse,BuildTrigger> context, ListBuildTriggersResponse response) protected CloudBuildClient .
- ListBuildTriggersPage > createPageAsync ( PageContext<ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > context , ApiFuture<ListBuildTriggersResponse> futureResponse ) Parameters Name Description context PageContext < ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > futureResponse ApiFuture < ListBuildTriggersResponse > Returns Type Description ApiFuture < ListBuildTriggersPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListBuildTriggersPage createPage ( PageContext<ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > context , ListBuildTriggersResponse response ) Parameters Name Description context PageContext < ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > response ListBuildTriggersResponse Returns Type Description CloudBuildClient.ListBuildTriggersPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListBuildTriggersRequest,ListBuildTriggersResponse,BuildTrigger> context, ApiFuture<ListBuildTriggersResponse> futureResponse) public ApiFuture<CloudBuildClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudBuildClient.ListBuildTriggersPage (3.90.0) Stay organized with collections Save and categorize content based on your preferences.

