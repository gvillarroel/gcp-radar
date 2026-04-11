---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.826Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub global infrastructure resource support for global applications"
feature_slug: "app-hub-global-infrastructure-resource-support-for-global-applications"
latest_feature_date: "2024-10-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/global-regional-applications"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage"
  - "https://docs.cloud.google.com/app-hub/docs/quickstart-create-application"
keywords:
  - "infrastructure"
  - "global"
  - "applications"
  - "resource"
  - "for"
  - "now"
  - "app"
  - "hub"
---

# App Hub global infrastructure resource support for global applications

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now supports global infrastructure resources for global applications in Preview.

## Extended Definition

App Hub now supports global infrastructure resources for global applications in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage)
- [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)

## Supporting Pages

### Global and regional applications \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- Source ID: `site-iam-reference`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App Hub is available in supported locations to help you organize global or regional Google Cloud infrastructure resources in App Hub applications.
- If your application components are necessarily distributed across multiple regions or rely on global Google Cloud resources, opt for global applications.
- Compare global and regional applications The following table highlights the key differences and considerations to help you choose between global and regional applications: Global application Regional application Recommended use case Best for applications with components that are inherently global or distributed across multiple regions.
- Home Documentation Application development App Hub Guides Send feedback Global and regional applications Stay organized with collections Save and categorize content based on your preferences.

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

### "Quickstart: Create an application from existing resources \_|\_ App Hub\

- URL: [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When the application is created, the Applications page displays its details, including the resources you registered as services. gcloud Create the application: gcloud apphub applications create my-global-app \ --location = global \ --display-name = "My Global Application" \ --project = ${ PROJECT ID } Discover the IDs for the forwarding rule and the Cloud Run service in the appropriate region: gcloud apphub discovered-services list \ --location = global \ --project = ${ PROJECT ID } gcloud apphub discovered-services list \ --location = ${ REGION } \ --project = ${ PROJECT ID } Note the ID of the forwarding rule and the Cloud Run service.
- Add the following code to application.tf to discover your deployed resources: Discover the forwarding rule data "google apphub discovered service" "frontend service" { location = "global" service uri = "//compute.googleapis.com/${google compute global forwarding rule.default.id}" } Discover the Cloud Run service data "google apphub discovered service" "backend service" { location = " REGION " service uri = "//run.googleapis.com/${google cloud run v2 service.default.id}" } The google apphub discovered service data sources find the resource names of your existing infrastructure based on their URIs.
- Add the following code to application.tf to register the discovered resources: Register the forwarding rule as a service in the application resource "google apphub service" "frontend" { project = " PROJECT ID " location = "global" application id = google apphub application.my global app.application id service id = "frontend-service" display name = "Frontend Service (LB)" discovered service = data.google apphub discovered service.frontend service.name } Register the Cloud Run service as a service in the application resource "google apphub service" "backend" { project = " PROJECT ID " location = "global" application id = google apphub application.my global app.application id service id = "backend-service" display name = "Backend Service (Cloud Run)" discovered service = data.google apphub discovered service.backend service.name } The google apphub service resources formally register the discovered resources in your application as services.
- Terraform Create an application.tf file and add the following code: Application resource "google apphub application" "my global app" { project = " PROJECT ID " location = "global" application id = "my-global-app" display name = "My Global Web App" description = "A sample global web application." scope { type = "GLOBAL" } attributes { criticality { type = "MEDIUM" } environment { type = "DEVELOPMENT" } business owners { display name = "Example Business Owner" email = "business-owner@example.com" } developer owners { display name = "Example Developer" email = "dev-owner@example.com" } operator owners { display name = "Example Operator" email = "operator-owner@example.com" } } } This block uses the google apphub application resource to create a logical grouping of application components.

