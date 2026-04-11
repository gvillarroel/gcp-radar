---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.770Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build build details page"
feature_slug: "cloud-build-build-details-page"
latest_feature_date: "2020-01-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automate-builds"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage"
keywords:
  - "build"
  - "details"
  - "page"
  - "the"
  - "in"
  - "platform"
  - "console"
  - "was"
---

# Cloud Build build details page

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

The Cloud Build build details page in the Google Cloud Platform Console was updated.

## Extended Definition

The Cloud Build build details page in the Google Cloud Platform Console was updated.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automate-builds](https://docs.cloud.google.com/build/docs/automate-builds)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage)

## Supporting Pages

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- The Build details page in Google Cloud console opens where you can see build information such as status, logs, and build steps.
- You can create and manage GitHub triggers using Google Cloud console or the Cloud Build API, as described on this page.
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.
- Google Cloud console To create GitHub triggers using the Google Cloud console, do the following: Open the Triggers page in the Google Cloud console.

### Quickstart: Automate builds by using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automate-builds](https://docs.cloud.google.com/build/docs/automate-builds)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a trigger Open the Triggers page in the Google Cloud console: Open Triggers page Select your project from the project selector drop-down menu at the top of the page.
- To initialize the gcloud CLI, run the following command: gcloud init In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- View build details In this section, you will view the build details associated with your invoked build after committing a change.
- In the Google Cloud console, on the project selector page, select or create a Google Cloud project.

### "Class CloudBuildClient.ListBuildsPage (3.90.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildsPage)
- Source ID: `site-java-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListBuildsPage > Inheritance java.lang.Object > AbstractPage > CloudBuildClient.ListBuildsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListBuildsRequest,ListBuildsResponse,Build> context, ListBuildsResponse response) protected CloudBuildClient .
- ListBuildsPage > createPageAsync ( PageContext<ListBuildsRequest , ListBuildsResponse , Build > context , ApiFuture<ListBuildsResponse> futureResponse ) Parameters Name Description context PageContext < ListBuildsRequest , ListBuildsResponse , Build > futureResponse ApiFuture < ListBuildsResponse > Returns Type Description ApiFuture < ListBuildsPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListBuildsPage createPage ( PageContext<ListBuildsRequest , ListBuildsResponse , Build > context , ListBuildsResponse response ) Parameters Name Description context PageContext < ListBuildsRequest , ListBuildsResponse , Build > response ListBuildsResponse Returns Type Description CloudBuildClient.ListBuildsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListBuildsRequest,ListBuildsResponse,Build> context, ApiFuture<ListBuildsResponse> futureResponse) public ApiFuture<CloudBuildClient .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]

