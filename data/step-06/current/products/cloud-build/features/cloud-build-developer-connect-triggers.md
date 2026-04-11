---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.676Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Developer Connect triggers"
feature_slug: "cloud-build-developer-connect-triggers"
latest_feature_date: "2025-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage"
keywords:
  - "build"
  - "developer"
  - "connect"
  - "triggers"
  - "now"
  - "offers"
  - "generally"
  - "available"
---

# Cloud Build Developer Connect triggers

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now offers generally available build triggers that run from repositories connected via Developer Connect across Console, gcloud, API, and Terraform; Cloud Build now supports creating build triggers for repositories connected through Developer Connect.

## Extended Definition

Cloud Build now offers generally available build triggers that run from repositories connected via Developer Connect across Console, gcloud, API, and Terraform; Cloud Build now supports creating build triggers for repositories connected through Developer Connect.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- September 29, 2025 Feature Developer Connect build triggers are now generally available .
- August 18, 2021 Feature Cloud Build approvals are now generally available , allowing users to configure triggers that only execute a build when granted approval by a set of users.
- You can now create build triggers that build from repositories connected to Developer Connect using the Google Cloud Console, gcloud , the Cloud Build API, and Terraform.
- Feature The Cloud Build Dashboard , which provides a high-level overview of recent builds for build triggers, is now Generally Available.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- This page explains how to connect to source repositories such as GitHub and Bitbucket, and create build triggers to build the code in the repositories.
- Admin permissions are not required to create triggers in a repository that is already connected to Cloud Build.
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.

### "Class CloudBuildClient.ListBuildTriggersPage (3.90.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildClient.ListBuildTriggersPage)
- Source ID: `site-java-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Java Client libraries Send feedback Class CloudBuildClient.ListBuildTriggersPage (3.90.0) Stay organized with collections Save and categorize content based on your preferences.
- ListBuildTriggersPage > Inheritance java.lang.Object > AbstractPage > CloudBuildClient.ListBuildTriggersPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListBuildTriggersRequest,ListBuildTriggersResponse,BuildTrigger> context, ListBuildTriggersResponse response) protected CloudBuildClient .
- ListBuildTriggersPage > createPageAsync ( PageContext<ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > context , ApiFuture<ListBuildTriggersResponse> futureResponse ) Parameters Name Description context PageContext < ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > futureResponse ApiFuture < ListBuildTriggersResponse > Returns Type Description ApiFuture < ListBuildTriggersPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- ListBuildTriggersPage createPage ( PageContext<ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > context , ListBuildTriggersResponse response ) Parameters Name Description context PageContext < ListBuildTriggersRequest , ListBuildTriggersResponse , BuildTrigger > response ListBuildTriggersResponse Returns Type Description CloudBuildClient.ListBuildTriggersPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListBuildTriggersRequest,ListBuildTriggersResponse,BuildTrigger> context, ApiFuture<ListBuildTriggersResponse> futureResponse) public ApiFuture<CloudBuildClient .

