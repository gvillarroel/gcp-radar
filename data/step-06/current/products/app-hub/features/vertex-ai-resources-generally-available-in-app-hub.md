---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.816Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Vertex AI resources generally available in App Hub"
feature_slug: "vertex-ai-resources-generally-available-in-app-hub"
latest_feature_date: "2025-07-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/app-hub/docs/release-notes"
  - "https://docs.cloud.google.com/app-hub/docs/quickstart-create-application"
keywords:
  - "generally"
  - "vertex"
  - "available"
  - "ai"
  - "resources"
  - "app"
  - "hub"
  - "in"
---

# Vertex AI resources generally available in App Hub

Product: App Hub
Coverage: LOW

## Step 02 Summary

The following Vertex AI resources are now generally available in App Hub: Dataset items, Featurestore containers, MetadataStore instances, and Model resources.

## Extended Definition

The following Vertex AI resources are now generally available in App Hub: Dataset items, Featurestore containers, MetadataStore instances, and Model resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/app-hub/docs/release-notes](https://docs.cloud.google.com/app-hub/docs/release-notes)
- [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)

## Supporting Pages

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example creates a regional application in us-central1 with defined criticality, environment, and owner attributes: resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." scope { type = "REGIONAL" } attributes { criticality { type = "MISSION CRITICAL" } environment { type = "PRODUCTION" } business owners { display name = "Alice" email = "alice@example.com" } developer owners { display name = "Bob" email = "bob@example.com" } operator owners { display name = "Charlie" email = "charlie@example.com" } } } Register services and workloads App Hub lets you select supported resources located within your application management boundary to register them as services and workloads.
- List the registered services in your application: gcloud apphub applications services list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered service: ID DISPLAY NAME SERVICE REFERENCE CREATE TIME SERVICE NAME SERVICE DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } 2023 -11-01T21:38:08 Register workloads List the available workloads that you can register to an application: gcloud apphub discovered-workloads list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.
- Commands are slightly different for services and workloads: Register services List the available services that you can register to an application: gcloud apphub discovered-services list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.

### App Hub release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/release-notes](https://docs.cloud.google.com/app-hub/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- August 25, 2025 Feature App Hub supports resources from the following sources in Preview : Vertex AI Pipeline job Custom job Hyperparameter tuning job Index Index endpoint NAS job Model deployment monitoring job Compute Engine Autoscaler Commitment Disk Regional disk Instance template Regional instance template License Node group Image Resource policy Reservation Node template Router Snapshot Route Subnetwork Global public delegated prefix Public delegated prefix Dataflow Job Datastream Stream Cloud DNS Managed zone Policy July 30, 2025 Feature The following Vertex AI supported resources are now generally available ( GA ): Dataset items Featurestore containers MetadataStore instances Model resources July 08, 2025 Feature Dataproc Metastore services are now generally available ( GA ).
- June 25, 2025 Feature App Hub supports resources from the following sources in Preview : Dataproc Metastore Service Vertex AI Dataset Vertex AI Featurestore Vertex AI MetadataStore Vertex AI Model May 01, 2025 Feature App Hub supported resources are now generally available ( GA ).
- March 14, 2025 Feature App Hub supports resources from the following sources in Preview : AlloyDB for PostgreSQL Cloud Data Fusion Cloud Deploy Cloud Logging Cloud Run jobs Firestore Google Kubernetes Engine (GKE) workloads GKE single cluster Gateway Managed Service for Microsoft Active Directory Secret Manager Vertex AI February 24, 2025 Feature App Hub supports resources from the following sources in Preview : Bigtable Cloud SQL Cloud Storage Memorystore for Redis Pub/Sub Spanner February 19, 2025 Announcement App Hub supports regional and global infrastructure resources with global applications in ( GA ).
- December 16, 2025 Feature App Hub is now available in the europe-north2 (Stockholm) region, letting you create applications and register resources from an expanded list of locations.

### "Quickstart: Create an application from existing resources \_|\_ App Hub\

- URL: [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When the application is created, the Applications page displays its details, including the resources you registered as services. gcloud Create the application: gcloud apphub applications create my-global-app \ --location = global \ --display-name = "My Global Application" \ --project = ${ PROJECT ID } Discover the IDs for the forwarding rule and the Cloud Run service in the appropriate region: gcloud apphub discovered-services list \ --location = global \ --project = ${ PROJECT ID } gcloud apphub discovered-services list \ --location = ${ REGION } \ --project = ${ PROJECT ID } Note the ID of the forwarding rule and the Cloud Run service.
- Add the following code to application.tf to register the discovered resources: Register the forwarding rule as a service in the application resource "google apphub service" "frontend" { project = " PROJECT ID " location = "global" application id = google apphub application.my global app.application id service id = "frontend-service" display name = "Frontend Service (LB)" discovered service = data.google apphub discovered service.frontend service.name } Register the Cloud Run service as a service in the application resource "google apphub service" "backend" { project = " PROJECT ID " location = "global" application id = google apphub application.my global app.application id service id = "backend-service" display name = "Backend Service (Cloud Run)" discovered service = data.google apphub discovered service.backend service.name } The google apphub service resources formally register the discovered resources in your application as services.
- Terraform Create an application.tf file and add the following code: Application resource "google apphub application" "my global app" { project = " PROJECT ID " location = "global" application id = "my-global-app" display name = "My Global Web App" description = "A sample global web application." scope { type = "GLOBAL" } attributes { criticality { type = "MEDIUM" } environment { type = "DEVELOPMENT" } business owners { display name = "Example Business Owner" email = "business-owner@example.com" } developer owners { display name = "Example Developer" email = "dev-owner@example.com" } operator owners { display name = "Example Operator" email = "operator-owner@example.com" } } } This block uses the google apphub application resource to create a logical grouping of application components.
- Compute Engine API ( compute.googleapis.com ) Infrastructure Manager API ( config.googleapis.com ) Enable APIs Required roles To get the permissions that you need to enable required APIs and create a sample application from existing resources, ask your administrator to grant you the following IAM roles on the management project: To enable required APIs: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) To get full access to required services: App Hub Admin ( roles/apphub.admin ) Cloud Run Admin ( roles/run.admin ) Compute Admin ( roles/compute.admin ) Cloud Infrastructure Manager Admin ( roles/config.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

