---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.814Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Automatic management project creation"
feature_slug: "automatic-management-project-creation"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/enabled-apis"
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/app-hub/docs/quickstart-create-application"
keywords:
  - "folder"
  - "when"
  - "automatic"
  - "creation"
  - "project"
  - "management"
  - "is"
  - "app"
---

# Automatic management project creation

Product: App Hub
Coverage: LOW

## Step 02 Summary

When a folder is app-enabled, App Hub creates a dedicated management project to store metadata and centralize operations.

## Extended Definition

When a folder is app-enabled, App Hub creates a dedicated management project to store metadata and centralize operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)

## Supporting Pages

### Enable APIs on the management project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API Required or recommended More information App Hub API ( apphub.googleapis.com ) Organize existing resources into applications Required App Hub pricing VPC Service Controls App Design Center API ( designcenter.googleapis.com ) Design, deploy, and update applications Required App Design Center pricing Cloud Asset API ( cloudasset.googleapis.com ) Manage the global metadata inventory of Google Cloud resources and other assets Required Cloud Asset Inventory pricing VPC Service Controls Cloud Resource Manager API ( cloudresourcemanager.googleapis.com ) Manage container resources such as organizations, folders, and projects Required Cloud Resource Manager API pricing VPC Service Controls Infrastructure Manager API ( config.googleapis.com ) Automate deployment and management of Google Cloud infrastructure resources Required Infra Manager pricing VPC Service Controls Cloud Build API ( cloudbuild.googleapis.com ) Run builds for Infra Manager deployments Required Cloud Build pricing VPC Service Controls Cloud Storage API ( storage.googleapis.com ) Store data for Google Cloud services, including App Design Center and Cloud Logging Required Cloud Storage pricing VPC Service Controls Google Cloud Observability APIs The following APIs provide capabilities for observability features.
- API Required or recommended More information Gemini for Google Cloud API ( cloudaicompanion.googleapis.com ) Recommended Gemini Cloud Assist pricing VPC Service Controls Enable recommended APIs To enable recommended APIs after application management setup, follow these steps: To get the permissions that you need to enable APIs, ask your administrator to grant you the Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) role on the management project.
- Home Documentation Application development App Hub Guides Send feedback Enable APIs on the management project Stay organized with collections Save and categorize content based on your preferences.
- You can perform the following tasks at no charge and without linking a billing account to the management project: Use App Hub to organize your existing resources into applications.

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Register services Get information about a service using its URI: data "google apphub discovered service" "my-service" { location = " REGION " service uri = " SERVICE URI " } Register the discovered service to your application, for example: resource "google apphub service" "example" { project = "my-project-id" location = "us-central1" application id = google apphub application.example.application id service id = "frontend-load-balancer" discovered service = data.google apphub discovered service.my-forwarding-rule.name display name = "Frontend Load Balancer" description = "The primary load balancer for the frontend." } Register workloads Get information about a workload using its URI: data "google apphub discovered workload" "my-workload" { location = " REGION " workload uri = " WORKLOAD URI " } Register the discovered workload to your application, for example: resource "google apphub workload" "example" { project = "my-project-id" location = "us-central1" application id = google apphub application.example.application id workload id = "frontend-instance-group" discovered workload = data.google apphub discovered workload.my-mig.name display name = "Frontend Instance Group" description = "The managed instance group for the frontend." } The registration status of services and workloads registered to an application might change to detached if you move a project or folder out of your application management boundary or delete the underlying resource.
- The following example creates a regional application in us-central1 with defined criticality, environment, and owner attributes: resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." scope { type = "REGIONAL" } attributes { criticality { type = "MISSION CRITICAL" } environment { type = "PRODUCTION" } business owners { display name = "Alice" email = "alice@example.com" } developer owners { display name = "Bob" email = "bob@example.com" } operator owners { display name = "Charlie" email = "charlie@example.com" } } } Register services and workloads App Hub lets you select supported resources located within your application management boundary to register them as services and workloads.
- List the registered services in your application: gcloud apphub applications services list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered service: ID DISPLAY NAME SERVICE REFERENCE CREATE TIME SERVICE NAME SERVICE DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } 2023 -11-01T21:38:08 Register workloads List the available workloads that you can register to an application: gcloud apphub discovered-workloads list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.

### "Quickstart: Create an application from existing resources \_|\_ App Hub\

- URL: [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Compute Engine API ( compute.googleapis.com ) Infrastructure Manager API ( config.googleapis.com ) Enable APIs Required roles To get the permissions that you need to enable required APIs and create a sample application from existing resources, ask your administrator to grant you the following IAM roles on the management project: To enable required APIs: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) To get full access to required services: App Hub Admin ( roles/apphub.admin ) Cloud Run Admin ( roles/run.admin ) Compute Admin ( roles/compute.admin ) Cloud Infrastructure Manager Admin ( roles/config.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- When you set up a management project, most of the APIs you need for this quickstart are enabled automatically.
- When the application is created, the Applications page displays its details, including the resources you registered as services. gcloud Create the application: gcloud apphub applications create my-global-app \ --location = global \ --display-name = "My Global Application" \ --project = ${ PROJECT ID } Discover the IDs for the forwarding rule and the Cloud Run service in the appropriate region: gcloud apphub discovered-services list \ --location = global \ --project = ${ PROJECT ID } gcloud apphub discovered-services list \ --location = ${ REGION } \ --project = ${ PROJECT ID } Note the ID of the forwarding rule and the Cloud Run service.
- This quickstart assumes you have defined an application management boundary and creates an application using the management project .

