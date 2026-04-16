---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.006Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Combined application creation and resource registration"
feature_slug: "combined-application-creation-and-resource-registration"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
  - "https://docs.cloud.google.com/app-hub/docs/quickstart-create-application"
keywords:
  - "combined"
  - "merges"
  - "creation"
  - "registration"
  - "application"
  - "resource"
---

# Combined application creation and resource registration

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub merges application creation and resource registration into a single workflow in the Google Cloud console.

## Extended Definition

App Hub merges application creation and resource registration into a single workflow in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)

## Supporting Pages

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register services Get information about a service using its URI: data "google apphub discovered service" "my-service" { location = " REGION " service uri = " SERVICE URI " } Register the discovered service to your application, for example: resource "google apphub service" "example" { project = "my-project-id" location = "us-central1" application id = google apphub application.example.application id service id = "frontend-load-balancer" discovered service = data.google apphub discovered service.my-forwarding-rule.name display name = "Frontend Load Balancer" description = "The primary load balancer for the frontend." } Register workloads Get information about a workload using its URI: data "google apphub discovered workload" "my-workload" { location = " REGION " workload uri = " WORKLOAD URI " } Register the discovered workload to your application, for example: resource "google apphub workload" "example" { project = "my-project-id" location = "us-central1" application id = google apphub application.example.application id workload id = "frontend-instance-group" discovered workload = data.google apphub discovered workload.my-mig.name display name = "Frontend Instance Group" description = "The managed instance group for the frontend." } The registration status of services and workloads registered to an application might change to detached if you move a project or folder out of your application management boundary or delete the underlying resource.
- The following example creates a regional application in us-central1 with defined criticality, environment, and owner attributes: resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." scope { type = "REGIONAL" } attributes { criticality { type = "MISSION CRITICAL" } environment { type = "PRODUCTION" } business owners { display name = "Alice" email = "alice@example.com" } developer owners { display name = "Bob" email = "bob@example.com" } operator owners { display name = "Charlie" email = "charlie@example.com" } } } Register services and workloads App Hub lets you select supported resources located within your application management boundary to register them as services and workloads.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.
- List the applications in your project: gcloud apphub applications list \ --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following: ID DISPLAY NAME CREATE TIME APPLICATION NAME DISPLAY NAME 2023 -10-31T18:33:48 Terraform To create an application with Terraform, use the google apphub application resource .

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List registered workloads in an application: gcloud apphub applications workloads list \ --application = APPLICATION NAME \ --project = PROJECT ID \ --location = LOCATION \ --filter = FILTER EXPRESSION The registration status of services and workloads in an application might change to detached if you move a project or folder out of your application management boundary or delete the underlying resource.
- Alternatively, view a list of all services and workloads with a registration status value of discovered or registered : Discovered Discovered Google Cloud resources within your application management boundary are available to be registered as services or workloads in an application.
- If it is still within your application management boundary, it becomes a resource with a registration status value of discovered , available for registration to another application.
- The following examples update the criticality and environment attributes of services and workloads of a regional application: Update service attributes: resource "google apphub service" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Update workload attributes: resource "google apphub workload" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Unregister services and workloads Unregistering a service or workload removes it from an application.

### "Quickstart: Create an application from existing resources \_|\_ App Hub\

- URL: [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the following code to your main.tf file to create the global external Application Load Balancer: Serverless NEG for the Cloud Run service resource "google compute region network endpoint group" "serverless neg" { name = "hello-run-neg" network endpoint type = "SERVERLESS" region = " REGION " cloud run { service = google cloud run v2 service.default.name } } Global external backend service resource "google compute backend service" "default" { name = "hello-backend-service" protocol = "HTTP" load balancing scheme = "EXTERNAL MANAGED" backend { group = google compute region network endpoint group.serverless neg.id } } URL map to route requests to the backend service resource "google compute url map" "default" { name = "hello-url-map" default service = google compute backend service.default.id } HTTP proxy to route requests to the URL map resource "google compute target http proxy" "default" { name = "hello-http-proxy" url map = google compute url map.default.id } Global forwarding rule to handle incoming requests resource "google compute global forwarding rule" "default" { name = "hello-forwarding-rule" target = google compute target http proxy.default.id port range = "80" } This block defines the following components: A serverless network endpoint group (NEG), which acts as a backend for the load balancer and points to the Cloud Run service.
- Add the following code to application.tf to register the discovered resources: Register the forwarding rule as a service in the application resource "google apphub service" "frontend" { project = " PROJECT ID " location = "global" application id = google apphub application.my global app.application id service id = "frontend-service" display name = "Frontend Service (LB)" discovered service = data.google apphub discovered service.frontend service.name } Register the Cloud Run service as a service in the application resource "google apphub service" "backend" { project = " PROJECT ID " location = "global" application id = google apphub application.my global app.application id service id = "backend-service" display name = "Backend Service (Cloud Run)" discovered service = data.google apphub discovered service.backend service.name } The google apphub service resources formally register the discovered resources in your application as services.
- Terraform Create an application.tf file and add the following code: Application resource "google apphub application" "my global app" { project = " PROJECT ID " location = "global" application id = "my-global-app" display name = "My Global Web App" description = "A sample global web application." scope { type = "GLOBAL" } attributes { criticality { type = "MEDIUM" } environment { type = "DEVELOPMENT" } business owners { display name = "Example Business Owner" email = "business-owner@example.com" } developer owners { display name = "Example Developer" email = "dev-owner@example.com" } operator owners { display name = "Example Operator" email = "operator-owner@example.com" } } } This block uses the google apphub application resource to create a logical grouping of application components.
- Compute Engine API ( compute.googleapis.com ) Infrastructure Manager API ( config.googleapis.com ) Enable APIs Required roles To get the permissions that you need to enable required APIs and create a sample application from existing resources, ask your administrator to grant you the following IAM roles on the management project: To enable required APIs: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) To get full access to required services: App Hub Admin ( roles/apphub.admin ) Cloud Run Admin ( roles/run.admin ) Compute Admin ( roles/compute.admin ) Cloud Infrastructure Manager Admin ( roles/config.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

