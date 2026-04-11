---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.826Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub regional infrastructure resource support for global applications"
feature_slug: "app-hub-regional-infrastructure-resource-support-for-global-applications"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/global-regional-applications"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage"
  - "https://docs.cloud.google.com/app-hub/docs/manage-applications"
keywords:
  - "regional"
  - "infrastructure"
  - "global"
  - "applications"
  - "resource"
  - "for"
  - "app"
  - "hub"
---

# App Hub regional infrastructure resource support for global applications

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now supports regional infrastructure resources for global applications in Preview.

## Extended Definition

App Hub now supports regional infrastructure resources for global applications in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage)
- [https://docs.cloud.google.com/app-hub/docs/manage-applications](https://docs.cloud.google.com/app-hub/docs/manage-applications)

## Supporting Pages

### Global and regional applications \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- Source ID: `site-iam-reference`
- Final score: 302
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App Hub is available in supported locations to help you organize global or regional Google Cloud infrastructure resources in App Hub applications.
- Compare global and regional applications The following table highlights the key differences and considerations to help you choose between global and regional applications: Global application Regional application Recommended use case Best for applications with components that are inherently global or distributed across multiple regions.
- Home Documentation Application development App Hub Guides Send feedback Global and regional applications Stay organized with collections Save and categorize content based on your preferences.
- However, choosing a regional location for your App Hub applications can provide significant advantages: Support data residency and compliance: App Hub metadata doesn't offer data residency .

### "Class AppHubClient.ListApplicationsPage (0.52.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage)
- Source ID: `site-java-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListApplicationsPage > Inheritance java.lang.Object > AbstractPage > AppHubClient.ListApplicationsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListApplicationsRequest,ListApplicationsResponse,Application> context, ListApplicationsResponse response) protected AppHubClient .
- ListApplicationsPage createPage ( PageContext<ListApplicationsRequest , ListApplicationsResponse , Application > context , ListApplicationsResponse response ) Parameters Name Description context PageContext < ListApplicationsRequest , ListApplicationsResponse , Application > response ListApplicationsResponse Returns Type Description AppHubClient.ListApplicationsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListApplicationsRequest,ListApplicationsResponse,Application> context, ApiFuture<ListApplicationsResponse> futureResponse) public ApiFuture<AppHubClient .
- ListApplicationsPage > createPageAsync ( PageContext<ListApplicationsRequest , ListApplicationsResponse , Application > context , ApiFuture<ListApplicationsResponse> futureResponse ) Parameters Name Description context PageContext < ListApplicationsRequest , ListApplicationsResponse , Application > futureResponse ApiFuture < ListApplicationsResponse > Returns Type Description ApiFuture < ListApplicationsPage > Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPageAsync(PageContext<RequestT,ResponseT,ResourceT> context, ApiFuture<ResponseT> futureResponse) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListApplicationsPage (0.52.0) Stay organized with collections Save and categorize content based on your preferences.

### Manage App Hub applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/manage-applications](https://docs.cloud.google.com/app-hub/docs/manage-applications)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example updates the criticality and environment attributes of a regional application in us-central1 : resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Delete an application Before you can delete an application, you must first unregister all of its services and workloads .
- Go to Application Design Center For applications created by registering existing resources in App Hub : Manage applications, services, and workloads directly within App Hub.
- Use global for global applications or a specific region, such as us-east1 , for regional applications.
- Use global for global applications or a specific region, such as us-east1 , for regional applications.

