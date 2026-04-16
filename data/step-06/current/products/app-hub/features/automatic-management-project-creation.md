---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.015Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Automatic management project creation"
feature_slug: "automatic-management-project-creation"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/enabled-apis"
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project"
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder"
keywords:
  - "folder"
  - "when"
  - "automatic"
  - "creation"
  - "project"
  - "management"
  - "enabled"
---

# Automatic management project creation

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

When a folder is app-enabled, App Hub creates a dedicated management project to store metadata and centralize operations.

## Extended Definition

When a folder is app-enabled, App Hub creates a dedicated management project to store metadata and centralize operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)
- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder)

## Supporting Pages

### Enable APIs on the management project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Required or recommended More information App Hub API ( apphub.googleapis.com ) Organize existing resources into applications Required App Hub pricing VPC Service Controls App Design Center API ( designcenter.googleapis.com ) Design, deploy, and update applications Required App Design Center pricing Cloud Asset API ( cloudasset.googleapis.com ) Manage the global metadata inventory of Google Cloud resources and other assets Required Cloud Asset Inventory pricing VPC Service Controls Cloud Resource Manager API ( cloudresourcemanager.googleapis.com ) Manage container resources such as organizations, folders, and projects Required Cloud Resource Manager API pricing VPC Service Controls Infrastructure Manager API ( config.googleapis.com ) Automate deployment and management of Google Cloud infrastructure resources Required Infra Manager pricing VPC Service Controls Cloud Build API ( cloudbuild.googleapis.com ) Run builds for Infra Manager deployments Required Cloud Build pricing VPC Service Controls Cloud Storage API ( storage.googleapis.com ) Store data for Google Cloud services, including App Design Center and Cloud Logging Required Cloud Storage pricing VPC Service Controls Google Cloud Observability APIs The following APIs provide capabilities for observability features.
- Your costs for services in the management project depend on which services are enabled and the features that you use.
- When you set up application management , the management project centralizes your application operations.
- All required APIs are automatically enabled on this project to provide basic, core application features.

### Set up a single project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Confirm the attachment status: gcloud apphub boundary describe \ --project = PROJECT ID \ --location = global You obtain an output similar to the following example: name: projects/ PROJECT ID /locations/ LOCATION /boundary crmNode: projects/ PROJECT ID createTime: 2025 -08-28T19:04:47Z updateTime: 2025 -08-28T19:04:47Z type: AUTOMATIC When you finish configuring the management project, the required APIs for application management are enabled, and you can start using App Hub to group services and workloads in applications.
- Required roles To get the permissions that you need to configure a single project for application management, ask your administrator to grant you the following IAM roles on the project that you want to configure as the standalone management project: Manage resources, permissions, and billing on the project: Project Owner ( roles/owner ) Manage all application components on the project: App Hub Admin ( roles/apphub.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Enable the App Hub API: gcloud services enable apphub.googleapis.com \ --project PROJECT ID Attach the project to itself to create an application management boundary: gcloud apphub boundary update \ --crm-node = projects/ PROJECT ID \ --project = PROJECT ID \ --location = global This command configures the project as its own management project, letting App Hub automatically discover all supported resources within it.
- When you disable application management on the project, the project is detached from its application management boundary .

### Set up a folder \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder)
- Source ID: `site-docs-root-2`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App-enabled folders contain a management project and support all Application-centric Google Cloud features, including application design in Application Design Center, insights in Cloud Hub, and assistance from Gemini Cloud Assist.
- Manage projects in your app-enabled folder App-enabled folders automatically make infrastructure resources from all descendant projects and folders available to group into an application.
- If a project or folder containing services and workloads that you have grouped in an application is moved out of the app-enabled folder, the application will continue to exist in the app-enabled folder, but the registration status of services and workloads from that project or folder will change to detached .
- To control which resources are available, you can create, move, or delete projects and folders in the app-enabled folder: Create a project Shutting down (deleting) projects Moving a project Moving a folder It is important to understand the resource hierarchy in your app-enabled folder.

