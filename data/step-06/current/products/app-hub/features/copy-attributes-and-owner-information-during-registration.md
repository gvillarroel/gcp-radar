---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.007Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Copy attributes and owner information during registration"
feature_slug: "copy-attributes-and-owner-information-during-registration"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
  - "https://docs.cloud.google.com/app-hub/docs/overview"
keywords:
  - "attributes"
  - "during"
  - "owner"
  - "copy"
  - "information"
  - "registration"
---

# Copy attributes and owner information during registration

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub allows attribute and owner details from an application to be copied to all resources being registered.

## Extended Definition

App Hub allows attribute and owner details from an application to be copied to all resources being registered.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)

## Supporting Pages

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: When you select a shared service for registration, attributes and owner information from the application are not applied to it because shared services don't have attributes.
- Note: If you are registering a shared service that is being used by another application, attributes and owner information from the new application are not applied to it because shared services don't have attributes.
- Register services Get information about a service using its URI: data "google apphub discovered service" "my-service" { location = " REGION " service uri = " SERVICE URI " } Register the discovered service to your application, for example: resource "google apphub service" "example" { project = "my-project-id" location = "us-central1" application id = google apphub application.example.application id service id = "frontend-load-balancer" discovered service = data.google apphub discovered service.my-forwarding-rule.name display name = "Frontend Load Balancer" description = "The primary load balancer for the frontend." } Register workloads Get information about a workload using its URI: data "google apphub discovered workload" "my-workload" { location = " REGION " workload uri = " WORKLOAD URI " } Register the discovered workload to your application, for example: resource "google apphub workload" "example" { project = "my-project-id" location = "us-central1" application id = google apphub application.example.application id workload id = "frontend-instance-group" discovered workload = data.google apphub discovered workload.my-mig.name display name = "Frontend Instance Group" description = "The managed instance group for the frontend." } The registration status of services and workloads registered to an application might change to detached if you move a project or folder out of your application management boundary or delete the underlying resource.
- The following example creates a regional application in us-central1 with defined criticality, environment, and owner attributes: resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." scope { type = "REGIONAL" } attributes { criticality { type = "MISSION CRITICAL" } environment { type = "PRODUCTION" } business owners { display name = "Alice" email = "alice@example.com" } developer owners { display name = "Bob" email = "bob@example.com" } operator owners { display name = "Charlie" email = "charlie@example.com" } } } Register services and workloads App Hub lets you select supported resources located within your application management boundary to register them as services and workloads.

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View details of services and workloads Follow these steps to view details of services and workloads within your application management boundary, including the following: Location Registration status to an application Properties and attributes For more information about these details, see App Hub concepts and data model .
- Use the Filter field to narrow the results by properties, attributes, or status, using values like Environment , Owners , or Registration status . gcloud View details from services and workloads of an application with a registration status value of registered or detached : Find the project ID of your management project.
- In the Details page of the component, you can look at information such as the display name, location, registration status, properties, and attributes.
- Update service or workload attributes: Update service attributes: gcloud apphub applications services update SERVICE NAME \ --application = APPLICATION NAME \ --project = PROJECT ID \ --location = LOCATION \ --display-name = DISPLAY NAME \ --criticality-type = CRITICALITY LEVEL \ --environment-type = ENVIRONMENT \ --developer-owners = display-name = DEV NAME ,email = DEV EMAIL \ --operator-owners = display-name = OPERATOR NAME ,email = OPERATOR EMAIL \ --business-owners = display-name = BUSINESS NAME ,email = BUSINESS EMAIL Replace SERVICE NAME with the name of the service you want to update.

### App Hub overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key attributes include: Owners: Contact information for developer, operator, and business teams.
- You can then find properties and categorize these applications with attributes like owners, business criticality, and environment to improve discoverability and accountability.
- For more information, see Properties and attributes .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

