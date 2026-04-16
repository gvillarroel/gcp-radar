---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.013Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App-enabled folders for App Hub"
feature_slug: "app-enabled-folders-for-app-hub"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder"
  - "https://docs.cloud.google.com/app-hub/docs/key-concepts"
  - "https://docs.cloud.google.com/app-hub/docs/enabled-apis"
keywords:
  - "standard"
  - "serve"
  - "folders"
  - "allows"
  - "enabled"
---

# App-enabled folders for App Hub

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub now allows standard Google Cloud folders to be enabled as app-enabled folders that serve as application management boundaries.

## Extended Definition

App Hub now allows standard Google Cloud folders to be enabled as app-enabled folders that serve as application management boundaries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder)
- [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts)
- [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)

## Supporting Pages

### Set up a folder \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-folder)
- Source ID: `site-docs-root-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To control which resources are available, you can create, move, or delete projects and folders in the app-enabled folder: Create a project Shutting down (deleting) projects Moving a project Moving a folder It is important to understand the resource hierarchy in your app-enabled folder.
- App-enabled folders contain a management project and support all Application-centric Google Cloud features, including application design in Application Design Center, insights in Cloud Hub, and assistance from Gemini Cloud Assist.
- Manage projects in your app-enabled folder App-enabled folders automatically make infrastructure resources from all descendant projects and folders available to group into an application.
- With an app-enabled folder, you can manage applications and group resources from all projects and subfolders it contains.

### Enable APIs on the management project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- Source ID: `site-docs-root-2`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Required or recommended More information App Hub API ( apphub.googleapis.com ) Organize existing resources into applications Required App Hub pricing VPC Service Controls App Design Center API ( designcenter.googleapis.com ) Design, deploy, and update applications Required App Design Center pricing Cloud Asset API ( cloudasset.googleapis.com ) Manage the global metadata inventory of Google Cloud resources and other assets Required Cloud Asset Inventory pricing VPC Service Controls Cloud Resource Manager API ( cloudresourcemanager.googleapis.com ) Manage container resources such as organizations, folders, and projects Required Cloud Resource Manager API pricing VPC Service Controls Infrastructure Manager API ( config.googleapis.com ) Automate deployment and management of Google Cloud infrastructure resources Required Infra Manager pricing VPC Service Controls Cloud Build API ( cloudbuild.googleapis.com ) Run builds for Infra Manager deployments Required Cloud Build pricing VPC Service Controls Cloud Storage API ( storage.googleapis.com ) Store data for Google Cloud services, including App Design Center and Cloud Logging Required Cloud Storage pricing VPC Service Controls Google Cloud Observability APIs The following APIs provide capabilities for observability features.
- For example, when you enable the Developer Connect API, other APIs that depend on it are enabled, including Secret Manager.
- Your costs for services in the management project depend on which services are enabled and the features that you use.
- All required APIs are automatically enabled on this project to provide basic, core application features.

### Key concepts \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this legacy model, the host project is equivalent to the management project , and the collection of the host project and service projects serves as an example of a multiple-project application management boundary .
- Application management boundary (also, boundary) The collection of one or more Google Cloud projects or folders whose underlying resources App Hub can discover and you can group in applications .
- This connection is what allows App Hub to see and manage the resources residing in those service projects, enabling you to group them into logical applications within App Hub.
- App-enabled folder A Google Cloud folder that you configure to act as an application management boundary .

