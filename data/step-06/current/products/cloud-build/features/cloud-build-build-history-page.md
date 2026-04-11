---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.771Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build build history page"
feature_slug: "cloud-build-build-history-page"
latest_feature_date: "2020-01-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage"
keywords:
  - "build"
  - "history"
  - "page"
  - "the"
  - "in"
  - "platform"
  - "console"
  - "was"
---

# Cloud Build build history page

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

The Cloud Build build history page in the Google Cloud Platform Console was updated.

## Extended Definition

The Cloud Build build history page in the Google Cloud Platform Console was updated.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Resubmit a build for approval If your build has been rejected, you can resubmit your build for approval by following these steps in the Google Cloud console: Open the Cloud Build History page in the Google Cloud console.
- Test a build trigger To manually test a build trigger: Open the Triggers page in the Google Cloud console.
- Open the Build triggers page In the toolbar of the Google Cloud console, select your Google Cloud project.
- Open the Build triggers page In the toolbar of the Google Cloud console, select your Google Cloud project.

### "Class CloudBuildSettings.Builder (3.90.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- ListBuildTriggersPagedResponse > listBuildTriggersSettings () Returns the builder for the settings used for calls to listBuildTriggers.
- ListWorkerPoolsPagedResponse > listWorkerPoolsSettings () Returns the builder for the settings used for calls to listWorkerPools.
- ListBuildsPagedResponse > listBuildsSettings () Returns the builder for the settings used for calls to listBuilds.
- Inheritance java.lang.Object > ClientSettings.Builder > CloudBuildSettings.Builder Inherited Members ClientSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) ClientSettings.Builder.build() ClientSettings.Builder.getApiKey() ClientSettings.Builder.getBackgroundExecutorProvider() ClientSettings.Builder.getClock() ClientSettings.Builder.getCredentialsProvider() ClientSettings.Builder.getEndpoint() ClientSettings.Builder.getExecutorProvider() ClientSettings.Builder.getGdchApiAudience() ClientSettings.Builder.getHeaderProvider() ClientSettings.Builder.getInternalHeaderProvider() ClientSettings.Builder.getQuotaProjectId() ClientSettings.Builder.getStubSettings() ClientSettings.Builder.getTransportChannelProvider() ClientSettings.Builder.getWatchdogCheckInterval() ClientSettings.Builder.getWatchdogCheckIntervalDuration() ClientSettings.Builder.getWatchdogProvider() ClientSettings.Builder.self() ClientSettings.Builder.setApiKey(String) ClientSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) ClientSettings.Builder.setClock(ApiClock) ClientSettings.Builder.setCredentialsProvider(CredentialsProvider) ClientSettings.Builder.setEndpoint(String) ClientSettings.Builder.setExecutorProvider(ExecutorProvider) ClientSettings.Builder.setGdchApiAudience(String) ClientSettings.Builder.setHeaderProvider(HeaderProvider) ClientSettings.Builder.setInternalHeaderProvider(HeaderProvider) ClientSettings.Builder.setQuotaProjectId(String) ClientSettings.Builder.setTransportChannelProvider(TransportChannelProvider) ClientSettings.Builder.setUniverseDomain(String) ClientSettings.Builder.setWatchdogCheckInterval(Duration) ClientSettings.Builder.setWatchdogCheckIntervalDuration(Duration) ClientSettings.Builder.setWatchdogProvider(WatchdogProvider) ClientSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(CloudBuildSettings settings) protected Builder ( CloudBuildSettings settings ) Parameter Name Description settings CloudBuildSettings Builder(CloudBuildStubSettings.Builder stubSettings) protected Builder ( CloudBuildStubSettings .

### "Class CloudBuildClient.ListBuildsPage (3.90.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage)
- Source ID: `site-java-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListBuildsPage > Inheritance java.lang.Object > AbstractPage > CloudBuildClient.ListBuildsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListBuildsRequest,ListBuildsResponse,Build> context, ListBuildsResponse response) protected CloudBuildClient .
- ListBuildsPage > createPageAsync ( PageContext<ListBuildsRequest , ListBuildsResponse , Build > context , ApiFuture<ListBuildsResponse> futureResponse ) Parameters Name Description context PageContext < ListBuildsRequest , ListBuildsResponse , Build > futureResponse ApiFuture < ListBuildsResponse > Returns Type Description ApiFuture < ListBuildsPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListBuildsPage createPage ( PageContext<ListBuildsRequest , ListBuildsResponse , Build > context , ListBuildsResponse response ) Parameters Name Description context PageContext < ListBuildsRequest , ListBuildsResponse , Build > response ListBuildsResponse Returns Type Description CloudBuildClient.ListBuildsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListBuildsRequest,ListBuildsResponse,Build> context, ApiFuture<ListBuildsResponse> futureResponse) public ApiFuture<CloudBuildClient .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]

