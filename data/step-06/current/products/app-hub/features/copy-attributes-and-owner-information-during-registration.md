---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.811Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Copy attributes and owner information during registration"
feature_slug: "copy-attributes-and-owner-information-during-registration"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/app-hub/docs/manage-applications"
keywords:
  - "attributes"
  - "during"
  - "owner"
  - "copy"
  - "information"
  - "registration"
  - "and"
  - "app"
---

# Copy attributes and owner information during registration

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub allows attribute and owner details from an application to be copied to all resources being registered.

## Extended Definition

App Hub allows attribute and owner details from an application to be copied to all resources being registered.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/app-hub/docs/manage-applications](https://docs.cloud.google.com/app-hub/docs/manage-applications)

## Supporting Pages

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View details of services and workloads Follow these steps to view details of services and workloads within your application management boundary, including the following: Location Registration status to an application Properties and attributes For more information about these details, see App Hub concepts and data model .
- Use the Filter field to narrow the results by properties, attributes, or status, using values like Environment , Owners , or Registration status . gcloud View details from services and workloads of an application with a registration status value of registered or detached : Find the project ID of your management project.
- In the Details page of the component, you can look at information such as the display name, location, registration status, properties, and attributes.
- The following examples update the criticality and environment attributes of services and workloads of a regional application: Update service attributes: resource "google apphub service" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Update workload attributes: resource "google apphub workload" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Unregister services and workloads Unregistering a service or workload removes it from an application.

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Note: When you select a shared service for registration, attributes and owner information from the application are not applied to it because shared services don't have attributes.
- Note: If you are registering a shared service that is being used by another application, attributes and owner information from the new application are not applied to it because shared services don't have attributes.
- Register services Get information about a service using its URI: data "google apphub discovered service" "my-service" { location = " REGION " service uri = " SERVICE URI " } Register the discovered service to your application, for example: resource "google apphub service" "example" { project = "my-project-id" location = "us-central1" application id = google apphub application.example.application id service id = "frontend-load-balancer" discovered service = data.google apphub discovered service.my-forwarding-rule.name display name = "Frontend Load Balancer" description = "The primary load balancer for the frontend." } Register workloads Get information about a workload using its URI: data "google apphub discovered workload" "my-workload" { location = " REGION " workload uri = " WORKLOAD URI " } Register the discovered workload to your application, for example: resource "google apphub workload" "example" { project = "my-project-id" location = "us-central1" application id = google apphub application.example.application id workload id = "frontend-instance-group" discovered workload = data.google apphub discovered workload.my-mig.name display name = "Frontend Instance Group" description = "The managed instance group for the frontend." } The registration status of services and workloads registered to an application might change to detached if you move a project or folder out of your application management boundary or delete the underlying resource.
- The following example creates a regional application in us-central1 with defined criticality, environment, and owner attributes: resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." scope { type = "REGIONAL" } attributes { criticality { type = "MISSION CRITICAL" } environment { type = "PRODUCTION" } business owners { display name = "Alice" email = "alice@example.com" } developer owners { display name = "Bob" email = "bob@example.com" } operator owners { display name = "Charlie" email = "charlie@example.com" } } } Register services and workloads App Hub lets you select supported resources located within your application management boundary to register them as services and workloads.

### Manage App Hub applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/manage-applications](https://docs.cloud.google.com/app-hub/docs/manage-applications)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Services and workloads can also use the same application attributes during registration .
- You can update any of the mutable attributes, such as display-name , criticality-type , environment-type , and owners: gcloud apphub applications update APPLICATION NAME \ --project = PROJECT ID \ --location = LOCATION \ --display-name = DISPLAY NAME \ --criticality-type = CRITICALITY LEVEL \ --environment-type = ENVIRONMENT \ --developer-owners = display-name = DEV NAME ,email = DEV EMAIL \ --operator-owners = display-name = OPERATOR NAME ,email = OPERATOR EMAIL \ --business-owners = display-name = BUSINESS NAME ,email = BUSINESS EMAIL Replace the following: Required: APPLICATION NAME : the name of your application.
- View application details Follow these steps to view the detailed information of a specific application, including its attributes and metadata: Console In the Google Cloud console, use the project picker to select your management project.
- The following example updates the criticality and environment attributes of a regional application in us-central1 : resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Delete an application Before you can delete an application, you must first unregister all of its services and workloads .

