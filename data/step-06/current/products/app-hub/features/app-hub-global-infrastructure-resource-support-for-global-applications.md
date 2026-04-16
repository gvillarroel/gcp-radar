---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.045Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub global infrastructure resource support for global applications"
feature_slug: "app-hub-global-infrastructure-resource-support-for-global-applications"
latest_feature_date: "2024-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/global-regional-applications"
  - "https://docs.cloud.google.com/app-hub/docs/quickstart-create-application"
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
keywords:
  - "infrastructure"
  - "global"
  - "applications"
  - "supports"
  - "resource"
---

# App Hub global infrastructure resource support for global applications

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub now supports global infrastructure resources for global applications in Preview.

## Extended Definition

App Hub now supports global infrastructure resources for global applications in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)
- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)

## Supporting Pages

### Global and regional applications \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Hub is available in supported locations to help you organize global or regional Google Cloud infrastructure resources in App Hub applications.
- If your application components are necessarily distributed across multiple regions or rely on global Google Cloud resources, opt for global applications.
- Compare global and regional applications The following table highlights the key differences and considerations to help you choose between global and regional applications: Global application Regional application Recommended use case Best for applications with components that are inherently global or distributed across multiple regions.
- Global and regional applications are defined as follows: Global applications: Functionally group services and workloads that are globally distributed or spread across multiple Google Cloud regions.

### "Quickstart: Create an application from existing resources \_|\_ App Hub\

- URL: [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This quickstart supports users who want to use their existing infrastructure to gain visibility and operational control by grouping Google Cloud resources into logical applications.
- When the application is created, the Applications page displays its details, including the resources you registered as services. gcloud Create the application: gcloud apphub applications create my-global-app \ --location = global \ --display-name = "My Global Application" \ --project = ${ PROJECT ID } Discover the IDs for the forwarding rule and the Cloud Run service in the appropriate region: gcloud apphub discovered-services list \ --location = global \ --project = ${ PROJECT ID } gcloud apphub discovered-services list \ --location = ${ REGION } \ --project = ${ PROJECT ID } Note the ID of the forwarding rule and the Cloud Run service.
- Add the following code to application.tf to discover your deployed resources: Discover the forwarding rule data "google apphub discovered service" "frontend service" { location = "global" service uri = "//compute.googleapis.com/${google compute global forwarding rule.default.id}" } Discover the Cloud Run service data "google apphub discovered service" "backend service" { location = " REGION " service uri = "//run.googleapis.com/${google cloud run v2 service.default.id}" } The google apphub discovered service data sources find the resource names of your existing infrastructure based on their URIs.
- Add the following code to your main.tf file to create the global external Application Load Balancer: Serverless NEG for the Cloud Run service resource "google compute region network endpoint group" "serverless neg" { name = "hello-run-neg" network endpoint type = "SERVERLESS" region = " REGION " cloud run { service = google cloud run v2 service.default.name } } Global external backend service resource "google compute backend service" "default" { name = "hello-backend-service" protocol = "HTTP" load balancing scheme = "EXTERNAL MANAGED" backend { group = google compute region network endpoint group.serverless neg.id } } URL map to route requests to the backend service resource "google compute url map" "default" { name = "hello-url-map" default service = google compute backend service.default.id } HTTP proxy to route requests to the URL map resource "google compute target http proxy" "default" { name = "hello-http-proxy" url map = google compute url map.default.id } Global forwarding rule to handle incoming requests resource "google compute global forwarding rule" "default" { name = "hello-forwarding-rule" target = google compute target http proxy.default.id port range = "80" } This block defines the following components: A serverless network endpoint group (NEG), which acts as a backend for the load balancer and points to the Cloud Run service.

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.
- List the applications in your project: gcloud apphub applications list \ --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following: ID DISPLAY NAME CREATE TIME APPLICATION NAME DISPLAY NAME 2023 -10-31T18:33:48 Terraform To create an application with Terraform, use the google apphub application resource .
- In the Application resources tab, browse through infrastructure resources and select the checkboxes of the resources you want to register as services and workloads of the application.
- In the Services and workloads tab, browse through infrastructure resources and select the checkboxes of the resources you want to register as services or workloads of the application.

